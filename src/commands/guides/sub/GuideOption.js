const {
  StringSelectMenuBuilder,
  ActionRowBuilder,
  ButtonBuilder,
} = require('discord.js');
const choiceResponses = require('./GuideResponse.js');
const index = require('./spiritsIndex.js');
const messageChoices = new Map();
const CUSTOM_ID = {
  FIRST_CHOICE: 'firstChoice',
  SECOND_CHOICE: 'secondChoice',
  THIRD_CHOICE: 'thirdChoice',
  BACK: 'back',
};

async function Guides(interaction) {
  if (!interaction.isCommand()) return;
  const spirit = interaction.options.getString('spirit');
  const ephemeralOption = interaction.options.getBoolean('hide');
  const ephemeral = ephemeralOption !== null ? ephemeralOption : true;

  const filter = (i) => {
    if (i.user.id !== interaction.user.id) {
      i.reply({
        content:
          "You can't use the menu generated by others. Run the command </seasonal-guides:1147244751708491897> if you wish to use it.",
        ephemeral: true,
      });
      return false;
    }
    return i.isStringSelectMenu() || i.isButton();
  };
  if (spirit) {
    const msg = await interaction.deferReply({ ephemeral: ephemeral });
    const value = index[spirit.toUpperCase()];
    if (!value) {
      return interaction.followUp({
        content: `\`${spirit}\` does not exist.\n\nMake sure the spirit name is valid and you provide the full name, like, \`Talented Builder\` (without any extra spaces)`,
        ephemeral: true,
      });
    }
    let tree;
    let location;
    if (Array.isArray(value)) {
      tree = value[1];
      location = value[0];
    } else {
      tree = value + '_tree';
      location = value + '_location';
    }
    const response = await choiceResponses.getResponse(tree);
    const respn = await choiceResponses.getResponse(location);
    let disabled;
    if (respn) {
      disabled = false;
    } else {
      disabled = true;
    }
    const lctnBtn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setEmoji('<:location:1131173266883612722>')
        .setLabel('Location')
        .setCustomId('sprtLctn')
        .setDisabled(disabled)
        .setStyle('1'),
    );
    const treeBtn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setEmoji('<:tree:1131279758907424870>')
        .setLabel('Friendship Tree')
        .setCustomId('sprtTree')
        .setStyle('1'),
    );
    await interaction.followUp({
      content: `${response.content}${response.files
        .map((file, index) => `[File ${index + 1}](${file})`)
        .join('\n')}`,
      components: [lctnBtn],
    });
    const collector = msg.createMessageComponentCollector({
      filter,
      idle: 3 * 60 * 1000,
    });
    collector.on('collect', async (interaction) => {
      const id = interaction.customId;
      if (id === 'sprtTree') {
        await interaction.update({
          content: `${response.content}\n\n${response.files
            .map((file, index) => `[File ${index + 1}](${file})`)
            .join('\n')}`,
          components: [lctnBtn],
        });
      } else if (id === 'sprtLctn') {
        await interaction.update({
          content: `${respn.content}\n\n${respn.files
            .map((file, index) => `[File ${index + 1}](${file})`)
            .join('\n')}`,
          components: [treeBtn],
        });
      }
    });

    collector.on('end', async () => {
      await msg.edit({
        components: [],
      });
    });
    return;
  }
  const { firstChoices } = require('./SeasonalChoices.js');

  const dropdownOptions = firstChoices.map((choice) => ({
    label: choice.label,
    value: choice.value,
    emoji: choice.emoji,
  }));
  const selectMenu = new StringSelectMenuBuilder()
    .setCustomId('firstChoice')
    .setPlaceholder('Choose a Season')
    .addOptions(dropdownOptions);

  const row = new ActionRowBuilder().addComponents(selectMenu);

  const reply = await interaction.reply({
    content: 'Please select a season:',
    components: [row],
    fetchReply: true,
  });

  const collector = reply.createMessageComponentCollector({
    filter,
    idle: 2 * 60 * 1000,
  });

  collector.on('collect', async (selectInteraction) => {
    const {
      firstChoices,
      secondChoices,
      thirdChoices,
    } = require('./SeasonalChoices.js');
    const messageChoice = messageChoices.get(selectInteraction.message.id);
    switch (selectInteraction.customId) {
      case CUSTOM_ID.FIRST_CHOICE:
        await handleFirst(selectInteraction, firstChoices, secondChoices);
        break;
      case CUSTOM_ID.SECOND_CHOICE:
        await handleSecond(
          selectInteraction,
          firstChoices,
          secondChoices,
          thirdChoices,
          messageChoice,
          ephemeral,
        );
        break;
      case CUSTOM_ID.THIRD_CHOICE:
        await handleThird(
          selectInteraction,
          firstChoices,
          secondChoices,
          messageChoice,
          ephemeral,
        );
        break;
      default:
        selectInteraction.reply('Invalid choice selected.');
    }
  });

  collector.on('end', (collected, reason) => {
    selectMenu.setPlaceholder('Menu Expired').setDisabled(true);
    interaction.editReply({
      components: [row],
    });
  });
}

const backObj = {
  label: 'Back',
  value: CUSTOM_ID.BACK,
  emoji: '⬅️',
};

async function handleFirst(interaction, firstChoices, secondChoices) {
  const selectedChoice = interaction.values[0];

  messageChoices.set(interaction.message.id, {
    firstChoice: interaction.values[0],
    secondChoice: null,
  });

  if (!secondChoices[selectedChoice]) {
    interaction.reply('Invalid choice selected.');
    return;
  }

  const secondChoiceOptions = secondChoices[selectedChoice].map((choice) => ({
    label: choice.label,
    value: choice.value,
    emoji: getEmoji(choice.label),
  }));

  secondChoiceOptions.push(backObj);

  const row = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId(CUSTOM_ID.SECOND_CHOICE)
      .setPlaceholder(`${getLabel(firstChoices, selectedChoice)}`)
      .addOptions(secondChoiceOptions),
  );

  await interaction.update({
    content: `Guides for ___${getLabel(firstChoices, selectedChoice)}___`,
    components: [row],
  });
}

async function handleSecond(
  interaction,
  firstChoices,
  secondChoices,
  thirdChoices,
  messageChoice,
  ephemeral,
) {
  const selectedChoice = interaction.values[0];

  if (selectedChoice === CUSTOM_ID.BACK) {
    await handleBack(interaction, firstChoices);
  } else {
    const thirdChoiceOptions = thirdChoices[selectedChoice]?.map((choice) => ({
      label: choice.label,
      value: choice.value,
      emoji: choice.emoji,
    }));

    if (!thirdChoiceOptions) {
      const response = choiceResponses.getResponse(selectedChoice);
      await respondToInteraction(interaction, response, ephemeral);
      return;
    }
    thirdChoiceOptions.push(backObj);

    const row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId('thirdChoice')
        .setPlaceholder(
          `${getLabel(firstChoices, messageChoice.firstChoice)} - ${getLabel(
            secondChoices[messageChoice.firstChoice],
            selectedChoice,
          )}`,
        )
        .addOptions(thirdChoiceOptions),
    );

    await interaction.update({
      content: `${getLabel(
        secondChoices[messageChoice.firstChoice],
        selectedChoice,
      )} of ___${getLabel(firstChoices, messageChoice.firstChoice)}___`,
      components: [row],
    });
  }
}

async function handleThird(
  interaction,
  firstChoices,
  secondChoices,
  messageChoice,
  ephemeral,
) {
  const selectedChoice = interaction.values[0];

  if (selectedChoice === CUSTOM_ID.BACK) {
    if (!messageChoice) {
      interaction.update({
        content:
          'Interaction has expired, bot may have restarted. Please run the command again.',
        components: [],
      });
      return;
    }

    const secondChoiceOptions = secondChoices[messageChoice.firstChoice].map(
      (choice) => ({
        label: choice.label,
        value: choice.value,
        emoji: getEmoji(choice.label),
      }),
    );
    secondChoiceOptions.push(backObj);

    const row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId('secondChoice')
        .setPlaceholder(`${getLabel(firstChoices, messageChoice.firstChoice)}`)
        .addOptions(secondChoiceOptions),
    );

    const response = {
      content: `Guides for ___${getLabel(
        firstChoices,
        messageChoice.firstChoice,
      )}___`,
      components: [row],
      files: [],
    };
    await interaction.update(response);
  } else {
    const response = choiceResponses.getResponse(selectedChoice);
    await respondToInteraction(interaction, response, ephemeral);
  }
}

async function handleBack(interaction, firstChoices) {
  const dropdownOptions = firstChoices.map((choice) => ({
    label: choice.label,
    value: choice.value,
    emoji: choice.emoji,
  }));

  const row = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId(CUSTOM_ID.FIRST_CHOICE)
      .setPlaceholder('Choose a Season')
      .addOptions(dropdownOptions),
  );

  await interaction.update({
    content: 'Please select a season:',
    components: [row],
  });

  messageChoices.delete(interaction.message.id);
}

async function respondToInteraction(interaction, response, ephemeral) {
  if (!response) {
    await interaction.update(
      '**Season of Revival** guides are still under development, Thank you for your patience.',
    );
    return;
  }

  await interaction.deferReply({ ephemeral: ephemeral });
  await interaction.followUp(response);
}

function getLabel(choices, value) {
  const selectedChoice = choices.find((choice) => choice.value === value);
  return selectedChoice ? selectedChoice.label : 'Unknown';
}

// Emoji Pushing Cos im lazy to add them to all.
function getEmoji(label) {
  switch (label) {
    case 'Seasonal Quests':
      return '<:quests:1131171487877963886>';
    case 'Spirit Locations':
      return '<:location:1131173266883612722>';
    case 'Spirits Tree':
      return '<:tree:1131279758907424870>';
    case 'Seasonal Price Tree':
      return '<:tree:1131279758907424870>';
    default:
      return '';
  }
}
module.exports = { Guides };
