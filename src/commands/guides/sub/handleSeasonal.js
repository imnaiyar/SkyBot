const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
const { QuestChoices } = require("./extends/seasonal/SeasonalChoices.js");
const handleSpirits = require('./shared/handleSpirits.js');
const responses = require("./extends/seasonal/GuideResponse.js");

/**
 * @param {import('discord.js').ChatInputCommandInteraction} interaction
 * @param {*} season
 * @param {*} type
 * @param {*} ephemeral
 */
module.exports = async (interaction, season, type, ephemeral) => {
  await interaction.deferReply({ ephemeral: ephemeral });
  const filter = (i) => {
    if (i.user.id !== interaction.user.id) {
      i.reply({
        content:
          "You can't use the menu generated by others.",
        ephemeral: true,
      });
      return false;
    }
    return true;
  };
  const seasonValue = season.replace("Season of ", "").split(" ").join("_").toLocaleLowerCase();

  if (type === 'spirits') {
    const spiritsData = Object.entries(interaction.client.spiritsData)
    .filter(([, v]) => v.season.toLowerCase() === season.replace("Season of ", "").toLowerCase().trim())
        .map(([k, v]) => ({
          label: v.name,
          value: k,
          emoji: v?.emote?.icon || v?.stance?.icon || v?.call?.icon || v.action?.icon,
        }));
    const row = new ActionRowBuilder()
    .addComponents(
      new StringSelectMenuBuilder()
      .setCustomId('Spirits')
      .setPlaceholder(`Spirits - ${season.replace("Season of ", "")}`)
      .setOptions(spiritsData),
    );

    const reply = await interaction.followUp({
      content: `Spirits of ${interaction.client.emojisMap.get('seasons')[season.replace("Season of ", "").trim()]} **${season}**`,
      components: [row],
    });

    const clctr = reply.createMessageComponentCollector({
     filter,
     idle: 2 * 60 * 1000,
    });

    clctr.on('collect', async (int) => {
      if (!int.isStringSelectMenu()) return;
      await int.deferUpdate();
      const value = int.values[0];
      await handleSpirits(int, value, true);
    });

    clctr.on('end', async () => {
      interaction.editReply({ components: [] }).catch(() => {});
    });
  } else if (type === 'quests') {
   const value = seasonValue + '_quest';
   const options = QuestChoices[value];
   if (!options) {
    const response = responses.getResponse(seasonValue + '_q');
    if (!response) return interaction.editReply({ content: `No quests for ${season}` });
    return interaction.editReply(response);
   }
   const row = new ActionRowBuilder()
   .addComponents(
    new StringSelectMenuBuilder()
    .setCustomId('quests')
    .setPlaceholder(`Quests - ${season}`)
    .setOptions(options),
   );

   const reply = await interaction.followUp({ content: `Quests for ${interaction.client.emojisMap.get('seasons')[season.replace("Season of ", "").trim()]} **${season}**`, components: [row] });

   const collector = reply.createMessageComponentCollector({
    filter,
    idle: 2 * 60 * 1000,
   });

   collector.on('collect', async (int) => {
    if (!int.isStringSelectMenu()) return;
    await int.deferReply({ ephemeral: ephemeral });
    const qValue = int.values[0];
    await int.followUp(responses.getResponse(qValue));
   });
  }
};