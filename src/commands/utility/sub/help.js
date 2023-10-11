const {
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ButtonBuilder,
} = require('discord.js');
const { getSettings } = require('@schemas/Guild');
const config = require('@root/config');

async function helpMenu(interaction, client) {
  const slash = client.commands;

  const input = interaction.options.getString('command');
  const Command = slash?.get(input);
  const appCommands = await client.application.commands.fetch();
  if (input && !Command) {
    return interaction.reply({
      content: 'No such commands are found',
      ephemeral: true,
    });
  } else if (input) {
    if (Command.data.category && Command.data.category === 'OWNER') {
      return interaction.reply({
        content: `No such commands are found`,
        ephemeral: true,
      });
    }
    const appC = await appCommands.find((c) => c.name === input);
    let cName;
    if (appC) {
      cName = `</${appC.name}:${appC.id}>`;
    }
    const embed = new EmbedBuilder()
      .setAuthor({
        name: `Requested by ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setFooter({ text: 'SkyHelper', iconURL: client.user.displayAvatarURL() })
      .setDescription(Command.data.description)
      .setTitle(cName);

    if (Command.data?.longDesc) {
      embed.addFields({
        name: 'Description',
        value: Command.data.longDesc,
      });
    }

    const reply = await interaction.reply({ embeds: [embed], ephemeral: true });

    return;
  }
  const embed = new EmbedBuilder()
    .setAuthor({
      name: `Requested by ${interaction.user.username}`,
      iconURL: interaction.user.displayAvatarURL(),
    })
    .setTimestamp(Date.now())
    .setColor('Gold')
    .setFooter({ text: 'SkyHelper', iconURL: client.user.displayAvatarURL() })
    .setDescription(
      `SkyHelper is a versatile Discord bot designed to enhance the [Sky: Children of the Light](https://thatskygame.com) gaming experience. It provides a wide range of useful information to help players navigate the enchanting world of Sky. \n\n To learn about all the commands, use the select menu.\n\n**Useful Links**\n[TopGG](https://top.gg/bot/1121541967730450574) • [Our Website](${config.WEB_URL}) • [SkyWiki](https://sky-children-of-the-light.fandom.com/wiki/Sky:_Children_of_the_Light_Wiki) • [Sky Shards Tracker](https://sky-shards.pages.dev) • [Sky official server](http://discord.gg/thatskygame)`,
    );

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('commands-help')
      .setLabel('Commands')
      .setStyle(3)
  );
  const reply = await interaction.reply({
    embeds: [embed],
    components: [row],
    fetchReply: true,
  });

  const filter = (i) => i.message.id === reply.id;
  const collector = reply.createMessageComponentCollector({
    filter,
    idle: 60 * 1000,
  });
  let page = 1;
  const commandsPerPage = 5;
  const totalPages = Math.ceil(appCommands.size / commandsPerPage);
  collector.on('collect', async (selectInteraction) => {
    const selectedChoice = selectInteraction.customId;

    if (selectedChoice === 'commands-help') {
      page = 1; // Reset to the first page when selecting 'slash'
      await updateSlashMenu(selectInteraction);
    } else if (selectedChoice === 'homeBtn') {
      await selectInteraction.update({ embeds: [embed], components: [row] });
    } else if (selectedChoice === 'nextBtn') {
      if (page < totalPages) {
        page++;
        await updateSlashMenu(selectInteraction);
      }
    } else if (selectedChoice === 'prevBtn') {
      if (page > 1) {
        page--;
        await updateSlashMenu(selectInteraction);
      }
    }
  });

  async function updateSlashMenu(interaction) {
    const slashEmbed = new EmbedBuilder()
      .setAuthor({
        name: `Requested by ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setColor('Gold')
      .setFooter({
        text: `run /help <command> for details. | Page ${page}/${totalPages}`,
      });

    let description = '';

    const startIndex = (page - 1) * commandsPerPage;
    const endIndex = startIndex + commandsPerPage;
    const pageCommands = Array.from(appCommands.values()).slice(
      startIndex,
      endIndex,
    );

    pageCommands.forEach((command) => {
      if (command.name === 'util') {
        description += `</${command.name}:${command.id}>\n${command.description}\n`;
        command.options.forEach( (o) => {
          description += `- **${o.name}**\n  ↪${o.description}\n`;
        });
      } else {
      description += `</${command.name}:${command.id}>\n${command.description}\n\n`;
      }
    });

    slashEmbed.setDescription(description);
    const hmBtn = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setLabel('Prev').setCustomId('prevBtn').setStyle(2),
    new ButtonBuilder().setLabel('🏠').setCustomId('homeBtn').setStyle(4),
    new ButtonBuilder().setLabel('Next').setCustomId('nextBtn').setStyle(2),
    );
    if (page === 1) {
    hmBtn.components[0].setDisabled(true);
    }
    
    if (page === totalPages) {
    hmBtn.components[2].setDisabled(true);
  }

    await interaction.update({
      embeds: [slashEmbed],
      components: [hmBtn],
    });
  }

  collector.on('end', (collected, reason) => {
    const embed = new EmbedBuilder()
      .setAuthor({ name: 'Idle Timeout.' })
      .setDescription(
        `Help menu has expired, run the command </help:1147244751708491898> again.`,
      )
      .setFooter({
        text: 'SkyHelper',
        iconURL: client.user.displayAvatarURL(),
      });
    reply.edit({ embeds: [embed], components: [] });
  });
}

module.exports = { helpMenu };
