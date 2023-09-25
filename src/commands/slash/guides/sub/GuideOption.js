const { Client, StringSelectMenuBuilder, ActionRowBuilder, GatewayIntentBits } = require('discord.js');
const choiceResponses = require('./GuideResponse.js');
function clearEphemeralChoice(messageId) {
  ephemeralChoice.delete(messageId);
}
const messageChoices = new Map();
const CUSTOM_ID = {
  FIRST_CHOICE: 'firstChoice',
  SECOND_CHOICE: 'secondChoice',
  THIRD_CHOICE: 'thirdChoice',
  BACK: 'back',
};
async function Guides(interaction) {
  if (!interaction.isCommand()) return;
  const ephemeralOption = interaction.options.getString('ephemeral');
  const ephemeral = ephemeralOption === 'false' ? false : true;

  const { firstChoices } = require('./SeasonalChoices.js');

  const dropdownOptions = firstChoices.map(choice => ({
    label: choice.label,
    value: choice.value,
    emoji: choice.emoji,
  }));

  const row = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('firstChoice')
      .setPlaceholder('Choose a Season')
      .addOptions(dropdownOptions)
  );
   

 const reply = await interaction.reply({
    content: 'Please select a season:',
    components: [row],
    fetchReply: true
  });

  const filter = (i) => i.message.id === reply.id  && i.user.id === interaction.user.id && i.isStringSelectMenu();
  const collector = interaction.channel.createMessageComponentCollector({ filter, idle: 60 * 1000 });

  collector.on('collect', async (selectInteraction) => {
    const { firstChoices, secondChoices, thirdChoices } = require('./SeasonalChoices.js');
  const messageChoice = messageChoices.get(selectInteraction.message.id);
  switch (selectInteraction.customId) {
    case CUSTOM_ID.FIRST_CHOICE:
      await handleFirst(selectInteraction, firstChoices, secondChoices);
      break;
    case CUSTOM_ID.SECOND_CHOICE:
      await handleSecond(selectInteraction, firstChoices, secondChoices, thirdChoices, messageChoice, ephemeral);
      break;
    case CUSTOM_ID.THIRD_CHOICE:
      await handleThird(selectInteraction, firstChoices, secondChoices, messageChoice, ephemeral);
      break;
    default:
      selectInteraction.reply('Invalid choice selected.');
  }
})

collector.on('end', (collected, reason) => {
  if (reply) {
    reply.edit({ content: `**Idle Timeout**: Run the command again.`, components: []})
    
  }
  });
}


const backObj = {
    label: 'Back',
    value: CUSTOM_ID.BACK,
    emoji: '⬅️'
}
// Separate the logic for handling user interactions and generating responses


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

  const secondChoiceOptions = secondChoices[selectedChoice].map(choice => ({
    label: choice.label,
    value: choice.value,
    emoji: getEmoji(choice.label),
  }));

  secondChoiceOptions.push(backObj);

  const row = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId(CUSTOM_ID.SECOND_CHOICE)
      .setPlaceholder(`${getLabelFromValue(firstChoices, selectedChoice)}`)
      .addOptions(secondChoiceOptions)
  );

  await interaction.update({
    content: `Guides for ___${getLabelFromValue(firstChoices, selectedChoice)}___`,
    components: [row],
  });
}

async function handleSecond(interaction, firstChoices, secondChoices,thirdChoices, messageChoice, ephemeral) {
  const selectedChoice = interaction.values[0];

  if (selectedChoice === CUSTOM_ID.BACK) {
    await handleBack(interaction, firstChoices);
  } else if (selectedChoice === 'shattering_q' || selectedChoice === 'dreams_q') {
    const response = choiceResponses.getResponse(selectedChoice);
    await respondToInteraction(interaction, response, ephemeral);
  } else {
    const thirdChoiceOptions = thirdChoices[selectedChoice].map(choice => ({
        label: choice.label,
        value: choice.value,
        emoji: choice.emoji
      }));

      thirdChoiceOptions.push(backObj);

      const row = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('thirdChoice')
          .setPlaceholder(`${getLabelFromValue(firstChoices, messageChoice.firstChoice)} - ${getLabelFromValue(secondChoices[messageChoice.firstChoice], selectedChoice)}`)
          .addOptions(thirdChoiceOptions)
      );

      await interaction.update({
        content: `${getLabelFromValue(secondChoices[messageChoice.firstChoice], selectedChoice)} of ___${getLabelFromValue(firstChoices, messageChoice.firstChoice)}___`,
        components: [row],
      });
    }
}

async function handleThird(interaction, firstChoices, secondChoices, messageChoice, ephemeral) {
  const selectedChoice = interaction.values[0];

  if (selectedChoice === CUSTOM_ID.BACK) {
        if (!messageChoice) {
          interaction.update({
            content: 'Interaction has expired, bot may have restarted. Please run the command again.',
            components: [],
          });
          return;
        }

        const secondChoiceOptions = secondChoices[messageChoice.firstChoice].map(choice => ({
          label: choice.label,
          value: choice.value,
          emoji: getEmoji(choice.label),
        }));
        secondChoiceOptions.push(backObj);

        const row = new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('secondChoice')
            .setPlaceholder(`${getLabelFromValue(firstChoices, messageChoice.firstChoice)}`)
            .addOptions(secondChoiceOptions)
        );

        response = {
          content: `Guides for ___${getLabelFromValue(firstChoices, messageChoice.firstChoice)}___`,
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
  const dropdownOptions = firstChoices.map(choice => ({
    label: choice.label,
    value: choice.value,
    emoji: choice.emoji,
  }));

  const row = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId(CUSTOM_ID.FIRST_CHOICE)
      .setPlaceholder('Choose a Season')
      .addOptions(dropdownOptions)
  );

  await interaction.update({
    content: 'Please select a season:',
    components: [row],
  });

  messageChoices.delete(interaction.message.id);
}

async function respondToInteraction(interaction, response, ephemeral) {
  if (!response) {
    await interaction.update('*__Under development... Thank you for your patience.__*');
    return;
  }

  await interaction.deferReply({ ephemeral: ephemeral });
  await interaction.followUp(response);
}

// Get Options Label
function getLabelFromValue(choices, value) {
    const selectedChoice = choices.find(choice => choice.value === value);
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
module.exports = {Guides}