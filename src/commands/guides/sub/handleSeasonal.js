import { ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, EmbedBuilder } from 'discord.js';
import { QuestChoices } from './extends/seasonal/SeasonalChoices.js';
import handleSpirits from './shared/handleSpirits.js';
import responses from './extends/seasonal/GuideResponse.js';

/**
 * @param {import('discord.js').ChatInputCommandInteraction} interaction
 * @param {String} season
 * @param {String} type
 */
export default async (interaction, season, type) => {
  const filter = (i) => {
    if (i.user.id !== interaction.user.id) {
       i.reply({
        content: "You can't use the menus generated by others.",
        ephemeral: true,
      }).catch((err) => interaction.client.logger.log(err));
      return false;
    }
    return true;
  };
  const seasonValue = season.replace("Season of ", "").split(" ").join("_").toLocaleLowerCase();

  if (type === "spirits") {
    const spiritsData = Object.entries(interaction.client.spiritsData)
      .filter(([, v]) => v.season && v.season.toLowerCase() === season.replace("Season of ", "").toLowerCase().trim())
      .map(([k, v]) => ({
        label: v.name,
        value: k,
        emoji: v?.emote?.icon || v?.stance?.icon || v?.call?.icon || v.action?.icon,
      }));
    const row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId("Spirits")
        .setPlaceholder(`Spirits - ${season.replace("Season of ", "")}`)
        .setOptions(spiritsData),
    );

    const reply = await interaction.followUp({
      content: `Spirits of ${
        interaction.client.emojisMap.get("seasons")[season.replace("Season of ", "").trim()]
      } **${season}**`,
      components: [row],
    });

    const clctr = reply.createMessageComponentCollector({
      filter,
      idle: 2 * 60 * 1000,
    });

    clctr.on("collect", async (int) => {
      if (!int.isStringSelectMenu() && int.customId !== "Spirits") return;
      await int.deferUpdate();
      const value = int.values[0];
      await handleSpirits(int, value, true);
    });
  } else if (type === "quest") {
    const value = seasonValue + "_quest";
    const options = QuestChoices[value];
    if (!options) {
      const response = responses.getResponse(seasonValue + "_q");
      if (!response) return await interaction.editReply({ content: `No quests for ${season}` });
      return await interaction.editReply(response);
    }
    const row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId("seasonal-quests")
        .setPlaceholder(`Quests - ${season}`)
        .setOptions(options),
    );
    const backBtn = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("getBack").setLabel("Back").setStyle("1").setEmoji("1207632852770881576"),
    );

    const reply = await interaction.followUp({
      content: `Quests for ${
        interaction.client.emojisMap.get("seasons")[season.replace("Season of ", "").trim()]
      } **${season}**`,
      components: [row],
      fetchReply: true,
    });

    const collector = reply.createMessageComponentCollector({
      filter,
      idle: 2 * 60 * 1000,
    });

    collector.on("collect", async (int) => {
      if (!["getBack", "seasonal-quests"].includes(int.customId)) return;
      await int.deferUpdate();
      switch (int.customId) {
        case "seasonal-quests": {
          const qValue = int.values[0];
          const res = responses.getResponse(qValue);

          await int.editReply({
            components: [backBtn],
            embeds: [
              new EmbedBuilder()
                .setAuthor({ name: `Quests - ${season}` })
                .setDescription(res.content)
                .setImage(res.files[0]),
            ],
          });
          break;
        }
        case "getBack": {
          await int.editReply({
            content: reply.content,
            components: reply.components,
            embeds: reply.embeds,
            files: reply.files,
          });
          break;
        }
      }
    });

    collector.on("end", async () => {
      const fr = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("out")
          .setPlaceholder(`Timed Out`)
          .setOptions([
            {
              label: "hi",
              value: "g",
            },
          ])
          .setDisabled(true),
      );
      reply.edit({ components: [fr] }).catch(() => {});
    });
  }
};
