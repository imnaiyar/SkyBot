import {
  type Interaction,
  Collection,
  EmbedBuilder,
  WebhookClient,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  type ChatInputCommandInteraction,
  type ContextMenuCommandInteraction,
} from "discord.js";
import type { ContextMenuCommand, SkyHelper, SlashCommand } from "#structures";
import { parsePerms, type Permission } from "skyhelper-utils";
import config from "#src/config";
import { eventTimes } from "#libs/constants/index";
import { getTimes } from "#handlers/getDailyEventTimes";
import type { getTranslator } from "#src/il8n";

const cLogger = process.env.COMMANDS_USED ? new WebhookClient({ url: process.env.COMMANDS_USED }) : undefined;
const bLogger = process.env.BUG_REPORTS ? new WebhookClient({ url: process.env.BUG_REPORTS }) : undefined;
const errorEmbed = (title: string, description: string) => new EmbedBuilder().setTitle(title).setDescription(description);
const errorBtn = (label: string, errorId: string) =>
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setLabel(label)
      .setCustomId("error-report" + `_${errorId}`)
      .setStyle(ButtonStyle.Secondary),
  );

export default async (client: SkyHelper, interaction: Interaction): Promise<void> => {
  // Translator
  const t = await interaction.t();

  // Slash Commands
  if (interaction.isChatInputCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command) {
      await interaction.reply({ content: t("common.errors.COMMAND_NOT_FOUND"), ephemeral: true });
      return;
    }

    const isChecked = await validateCommand(command, interaction, t);
    if (!isChecked) return;

    try {
      await command.execute(interaction, t, client);
      const embed = new EmbedBuilder()
        .setTitle("New command used")
        .addFields(
          { name: `Command`, value: `\`${interaction}\`` },
          {
            name: `User`,
            value: `${interaction.user.username} \`[${interaction.user.id}]\``,
          },
          {
            name: `Server`,
            value: `${interaction.inGuild() ? interaction.guild?.name || "Possibly as an User App" : "In DMs"} \`[${interaction.guild?.id}]\``,
          },
          {
            name: `Channel`,
            value: `${interaction.inGuild() ? interaction.channel?.name || "Possibly as an User App" : "In DMs"} \`[${interaction.channel?.id}]\``,
          },
        )
        .setColor("Blurple")
        .setTimestamp();

      // Slash Commands
      if (cLogger && !client.config.OWNER.includes(interaction.user.id) && process.env.COMMANDS_USED) {
        cLogger.send({ username: "Command Logs", embeds: [embed] }).catch(() => {});
      }
    } catch (err) {
      const errorId = client.logger.error(err);
      const content = { content: t("common.errors.ERROR_ID", { ID: errorId }) };
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          ...content,
          embeds: [errorEmbed(t("common.errors.EMBED_TITLE"), t("common.errors.EMBED_DESCRIPTION"))],
          components: [errorBtn(t("common.errors.BUTTON_LABEL"), errorId)],
        });
        return;
      } else {
        await interaction.reply({
          ...content,
          embeds: [errorEmbed(t("common.errors.EMBED_TITLE"), t("common.errors.EMBED_DESCRIPTION"))],
          components: [errorBtn(t("common.errors.BUTTON_LABEL"), errorId)],
          ephemeral: true,
        });
        return;
      }
    }
  }

  // Autocompletes
  if (interaction.isAutocomplete()) {
    const command = client.commands.get(interaction.commandName) as unknown as SlashCommand<true>;

    if (!command) {
      await interaction.respond([
        {
          name: t("common.errors.autoCompleteCOMMAND_NOT_FOUND"),
          value: "none",
        },
      ]);
      return;
    }

    if (!command.autocomplete) {
      await interaction.respond([
        {
          name: t("common.errors.autoCompleteCOMMAND_NOT_FOUND"),
          value: "none",
        },
      ]);
      return;
    }
    try {
      await command.autocomplete(interaction, client);
    } catch (error) {
      client.logger.error(error);
      if (!interaction.responded) {
        await interaction.respond([
          {
            name: t("common.errors.AUTOCOMPLETE_ERROR"),
            value: "none",
          },
        ]);
      }
    }
  }

  // Context menus
  if (interaction.isContextMenuCommand()) {
    const command = client.contexts.get(interaction.commandName + interaction.commandType.toString());
    if (!command) {
      await interaction.reply({
        content: t("common.errors.COMMAND_NOT_FOUND"),
        ephemeral: true,
      });
      return;
    }
    const isChecked = await validateCommand(command, interaction, t);
    if (!isChecked) return;
    try {
      await command.execute(interaction, client);
    } catch (err) {
      const errorId = client.logger.error(err);
      const content = { content: t("common.errors.ERROR_ID", { ID: errorId }) };
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          ...content,
          embeds: [errorEmbed(t("common.errors.EMBED_TITLE"), t("common.errors.EMBED_DESCRIPTION"))],
          components: [errorBtn(t("common.errors.BUTTON_LABEL"), errorId)],
        });
      } else {
        await interaction.reply({
          ...content,
          embeds: [errorEmbed(t("common.errors.EMBED_TITLE"), t("common.errors.EMBED_DESCRIPTION"))],
          components: [errorBtn(t("common.errors.BUTTON_LABEL"), errorId)],
          ephemeral: true,
        });
      }
    }
  }

  // Buttons
  if (interaction.isButton()) {
    const button = client.buttons.find((btn) => interaction.customId.startsWith(btn.data.name));
    if (!button) return;

    try {
      await button.execute(interaction, t, client);
    } catch (err) {
      const errorId = client.logger.error(err);
      const content = { content: t("common.errors.ERROR_ID", { ID: errorId }) };
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          ...content,
          embeds: [errorEmbed(t("common.errors.EMBED_TITLE"), t("common.errors.EMBED_DESCRIPTION"))],
          components: [errorBtn(t("common.errors.BUTTON_LABEL"), errorId)],
        });
      } else {
        await interaction.reply({
          ...content,
          embeds: [errorEmbed(t("common.errors.EMBED_TITLE"), t("common.errors.EMBED_DESCRIPTION"))],
          components: [errorBtn(t("common.errors.BUTTON_LABEL"), errorId)],
          ephemeral: true,
        });
      }
    }
  }

  // Modals
  if (interaction.isModalSubmit()) {
    if (interaction.customId === "errorModal") {
      await interaction.reply({
        content: t("common.errors.ERROR_MODAL.SUCCESS"),
        ephemeral: true,
      });
      const commandUsed = interaction.fields.getTextInputValue("commandUsed");
      const whatHappened = interaction.fields.getTextInputValue("whatHappened");
      const errorId = interaction.fields.getTextInputValue("errorId");
      const embed = new EmbedBuilder()
        .setTitle("BUG REPORT")
        .addFields(
          { name: `Command Used`, value: `\`${commandUsed}\`` },
          {
            name: `User`,
            value: `${interaction.user.username} \`[${interaction.user.id}]\``,
          },
          {
            name: `Server`,
            value: `${interaction.guild?.name} \`[${interaction.guild?.id}]\``,
          },
          { name: `What Happened`, value: `${whatHappened}` },
        )
        .setColor("Blurple")
        .setTimestamp();
      bLogger?.send({ username: "Bug Report", content: `Error ID: \`${errorId}\``, embeds: [embed] }).catch(() => {});
    }
  }

  // Select Menus
  if (interaction.isStringSelectMenu()) {
    if (interaction.customId === "skytimes-details") {
      const buildEmbed = (data: string, info: { title: string; description: string }, type: string) => {
        return new EmbedBuilder()
          .setTitle(type + " Times")
          .setDescription(`${info.description}\n\n${t("times-embed.TIMELINE")}\n` + data)
          .setColor("Random");
      };
      const fulltimes = eventTimes();
      const value = interaction.values[0];
      await interaction.update({ components: interaction.message.components });
      switch (value) {
        case "geyser":
          await interaction.followUp({
            embeds: [buildEmbed(fulltimes.geyser, getTimes(0, "geyser"), t("times-embed.GEYSER"))],
            ephemeral: true,
          });
          break;
        case "grandma":
          await interaction.followUp({
            embeds: [buildEmbed(fulltimes.grandma, getTimes(0, "grandma"), t("times-embed.GRANDMA"))],
            ephemeral: true,
          });
          break;
        case "turtle":
          await interaction.followUp({
            embeds: [buildEmbed(fulltimes.turtle, getTimes(0, "turtle"), t("times-embed.TURTLE"))],
            ephemeral: true,
          });
          break;
        default:
          await interaction.followUp({ content: "Not a valid choice", ephemeral: true });
      }
    }
  }
};

/** Validates requirements for Slash and Context Menu commands */
async function validateCommand(
  command: SlashCommand | ContextMenuCommand<"UserContext" | "MessageContext">,
  interaction: ChatInputCommandInteraction | ContextMenuCommandInteraction,
  t: ReturnType<typeof getTranslator>,
): Promise<boolean> {
  const client = interaction.client as SkyHelper;
  // Handle owner commands
  if (command.ownerOnly && !config.OWNER.includes(interaction.user.id)) {
    await interaction.reply({
      content: "This command is for owner(s) only.",
      ephemeral: true,
    });
    return false;
  }
  // Handle command user required permissions
  if (command.data.userPermissions) {
    if (interaction.inGuild()) {
      if (interaction.inCachedGuild() && !interaction.member.permissions.has(command.data.userPermissions)) {
        await interaction.reply({
          content: t("common.errors.NO_PERMS_USER", {
            PERMISSIONS: parsePerms([command.data.userPermissions as unknown as Permission]),
          }),
          ephemeral: true,
        });
        return false;
      }
      if (!interaction.inCachedGuild()) {
        await interaction.reply({
          content: t("common.errors.NOT_A_SERVER"),
          ephemeral: true,
        });
        return false;
      }
    }
  }

  // Handle bot's required permissions
  if (command.data.botPermissions) {
    if (interaction.inGuild()) {
      if (interaction.inCachedGuild() && !interaction.guild.members.me?.permissions.has(command.data.botPermissions)) {
        await interaction.reply({
          content: t("common.errors.NO_PERMS_BOT", {
            PERMISSIONS: parsePerms(command.data.botPermissions as unknown as Permission),
          }),
          ephemeral: true,
        });
        return false;
      }
      if (!interaction.inCachedGuild()) {
        await interaction.reply({
          content: t("common.errors.NOT_A_SERVER"),
          ephemeral: true,
        });
        return false;
      }
    }
  }

  // Check cooldowns
  if (command?.cooldown && !client.config.OWNER.includes(interaction.user.id)) {
    const { cooldowns } = client;

    if (!cooldowns.has(command.data.name)) {
      cooldowns.set(command.data.name, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.data.name);
    const cooldownAmount = command.cooldown * 1000;

    if (timestamps?.has(interaction.user.id)) {
      const expirationTime = (timestamps.get(interaction.user.id) as number) + cooldownAmount;

      if (now < expirationTime) {
        const expiredTimestamp = Math.round(expirationTime / 1000);
        await interaction.reply({
          content: t("common.errors.COOLDOWN", {
            COMMAND: `</${interaction.commandName}:${interaction.commandId}>`,
            TIME: `<t:${expiredTimestamp}:R>`,
          }),
          ephemeral: true,
        });
        return false;
      }
    }

    timestamps?.set(interaction.user.id, now);
    setTimeout(() => timestamps?.delete(interaction.user.id), cooldownAmount);
  }

  return true;
}
