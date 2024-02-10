const { firstChoices } = require("./extends/realms/choices");
const { rowBuilder } = require("./shared/helpers");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } = require("discord.js");
const result = require("./extends/realms/responses");
const CUSTOM_ID = {
  FIRST_CHOICE: "firstChoice",
  SECOND_CHOICE: "secondChoice",
  THIRD_CHOICE: "thirdChoice",
};

const userChoices = new Map();
module.exports = async (interaction, ephemeral) => {
  const row = rowBuilder(CUSTOM_ID.FIRST_CHOICE, firstChoices, "Choose a Realm", false);
  const reply = await interaction.reply({
    content: "Please Select a Realm",
    components: [row],
    fetchReply: true,
  });
  const filter = (i) => {
    if (i.user.id !== interaction.user.id) {
      i.reply({
        content: `You can't use the menu generated by others. Run the command </${interaction.commandName}:${interaction.commandId}> if you wish to use it.`,
        ephemeral: true,
      });
      return false;
    }
    return true;
  };
  const collector = reply.createMessageComponentCollector({
    filter,
    idle: 2 * 60 * 1000,
  });

  collector.on("collect", async (int) => {
    const value = int.values[0];
    const id = int.customId;
    switch (id) {
      case CUSTOM_ID.FIRST_CHOICE:
        await handleFirst(int, value);
        break;
      case CUSTOM_ID.SECOND_CHOICE:
        await handleSecond(int, value, ephemeral);
        break;
      default:
        int.reply("Invalid choice selected.");
    }
  });

  collector.on("end", async () => {
    row.components.forEach((component) => component.setDisabled(true).setPlaceholder("Menu Expired"));
    await reply.edit({
      components: [row],
    });
  });
};

async function handleFirst(interaction, value) {
  userChoices.set(interaction.message.id, {
    firstChoice: {
      label: firstChoices.find((choice) => choice.value === value).label,
      value: value,
      emoji: firstChoices.find((choice) => choice.value === value).emoji,
    },
  });
  const options = [
    {
      label: "Realm Summary",
      value: "summary_" + value,
    },
    {
      label: "Maps",
      value: "maps_" + value,
    },
    {
      label: "Spirits",
      value: "spirits_" + value,
    },
  ];
  const map = userChoices.get(interaction.message.id);
  const placeholder = map.firstChoice.label;
  const row = rowBuilder(CUSTOM_ID.SECOND_CHOICE, options, placeholder, true);
  await interaction.update({
    content: `Guides for __${placeholder}__`,
    components: [row],
  });
}

async function handleSecond(interaction, value, ephemeral) {
  if (value === "back") {
    const row = rowBuilder(CUSTOM_ID.FIRST_CHOICE, firstChoices, "Choose a Realm", false);
    await interaction.update({
      content: 'Please Select a Realm',
      components: [row]
    });
  } else if (value.startsWith("summary_")) {
    await respondSummary(interaction, value, ephemeral);
  } else if (value.startsWith("spirits_")) {
    await respondSpirits(interaction, value, ephemeral);
  }
}

async function respondSummary(int, value, ephemeral) {
  const data = result.getSummary(value);
  let page = 1;
  const total = data.areas.length - 1;
  const getData = () => {
    const embed = data.areas[page - 1];
    const emb = new EmbedBuilder()
      .setTitle(embed.title)
      .setDescription(embed.description)
      .setImage(embed?.image)
      .setAuthor({ name: `Different Areas of ${userChoices.get(int.message.id).firstChoice.label}` })
      .setFooter({ text: `Page ${page}/${total + 1}` });
    const row = [];
    const btns = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("back")
        .setLabel(`⬅️ ${data.areas[page - 2]?.title || "Prev"}`)
        .setDisabled(page - 1 === 0)
        .setStyle("2"),
      new ButtonBuilder()
        .setCustomId("realm")
        .setEmoji(userChoices.get(int.message.id).firstChoice.emoji)
        .setStyle("3"),
      new ButtonBuilder()
        .setCustomId("forward")
        .setLabel(`${data.areas[page]?.title || "Next"} ➡️`)
        .setDisabled(page - 1 === total)
        .setStyle("2")
    );
    const menu = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setPlaceholder("Choose an area.")
        .setCustomId("area-menu")
        .addOptions(
          data.areas.map((area, index) => ({
            label: area.title,
            default: area.title === embed.title,
            value: "area_" + index.toString(),
          }))
        )
    );
    row.push(menu, btns);
    return { emb, row };
  };

  const embed = new EmbedBuilder()
    .setTitle(data.main.title)
    .setDescription(data.main.description)
    .setAuthor({ name: `Summary of ${data.main.title}` })
    .setImage(data.main?.image);

  const rowFirst = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setLabel("Different Areas").setCustomId("areas").setStyle("1")
  );
  const reply = await int.reply({
    content: `*This is only a short summary, please follow the sourced link for detailed informations.*`,
    embeds: [embed],
    components: [rowFirst],
    ephemeral: ephemeral,
    fetchReply: true,
  });

  const collector = reply.createMessageComponentCollector({
    filter: (i) => i.user.id === int.user.id,
    idle: 2 * 60 * 1000,
  });

  collector.on("collect", async (inter) => {
    await inter.deferUpdate();
    const componentID = inter.customId;
    switch (componentID) {
      case "areas":
        await updateEmbed(inter, getData);
        break;
      case "back":
        page--;
        await updateEmbed(inter, getData);
        break;
      case "forward":
        page++;
        await updateEmbed(inter, getData);
        break;
      case "realm":
        page = 1;
        await inter.editReply({
          embeds: [embed],
          components: [rowFirst],
        });
        break;
      case "area-menu":
        page = parseInt(inter.values[0].split("_")[1]) + 1;
        await updateEmbed(inter, getData);
        break;
      default:
        inter.reply({ content: "Invalid choice or Guide yet to be updated", ephemeral: true });
    }
  });
  collector.on('end', async() => {
     reply.edit({
       components: []
     }).catch(err => {});
  });
}

async function updateEmbed(inter, getData) {
  const get = getData();
  await inter
    .editReply({
      embeds: [get.emb],
      components: get.row,
    })
    .catch((err) => inter.client.logger.error("Error while Fetching Realm Guides:", err));
}
