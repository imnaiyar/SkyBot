import type { Command } from "@/structures/Command";
import { PermissionsUtil } from "@/utils/classes/PermissionUtils";
import {
  ApplicationCommandOptionType,
  ApplicationIntegrationType,
  ChannelType,
  InteractionContextType,
  type APITextChannel,
} from "@discordjs/core";
const eventChoices = [
  { name: "Geyser", value: "geyser" },
  { name: "Grandma", value: "grandma" },
  { name: "Turtle", value: "turtle" },
  { name: "Daily Reset", value: "reset" },
  { name: "Eden/Weekly Reset", value: "eden" },
  { name: "Traveling Spirit", value: "ts" },
  { name: "Daily Quests", value: "dailies" },
  { name: "Aurora's Concert", value: "aurora" },
];
// #region Reminders
export const REMINDERS_DATA: Omit<Command, "interactionRun" | "messageRun"> = {
  name: "reminders",
  description: "Set up reminders",
  data: {
    name_localizations: "commands:REMINDERS.name",
    description_localizations: "commands:REMINDERS.description",
    options: [
      {
        name: "configure",
        description: "configure reminders",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "channel",
            description: "channel where reminders should be sent",
            type: ApplicationCommandOptionType.Channel,
            channel_types: [ChannelType.GuildText, ChannelType.PublicThread, ChannelType.GuildAnnouncement],
            required: true,
          },
          {
            name: "event",
            description: "event to remind",
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: eventChoices,
          },
          {
            name: "role",
            description: "role to ping",
            type: ApplicationCommandOptionType.Role,
            required: false,
          },
        ],
      },
      {
        name: "stop",
        description: "configure reminders",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "event",
            description: "event to stop reminding",
            type: ApplicationCommandOptionType.String,
            choices: eventChoices,
            required: true,
          },
        ],
      },
      {
        name: "status",
        description: "reminders configurations for this server",
        type: ApplicationCommandOptionType.Subcommand,
      },
    ],
    integration_types: [ApplicationIntegrationType.GuildInstall, 1], // TODO: REVErt ths and contexts before metge
    contexts: [InteractionContextType.Guild, 1, 2],
  },
  botPermissions: ["ManageWebhooks"],
  userPermissions: ["ManageGuild"],
  category: "Admin",
};

export const LIVE_UPDATES_DATA: Omit<Command, "interactionRun" | "messageRun"> = {
  name: "live",
  description: "live shards or skytimes update with auto updating message at regular interval",
  data: {
    options: [
      {
        name: "updates",
        name_localizations: "commands:LIVE_UPDATES.group",
        description_localizations: "commands:LIVE_UPDATES.group-desc",
        description: "live updates",
        type: ApplicationCommandOptionType.SubcommandGroup,
        options: [
          {
            name: "start",
            name_localizations: "commands:LIVE_UPDATES.options.START.name",
            description: "start live shards or skytimes update with auto updating message at regular interval",
            description_localizations: "commands:LIVE_UPDATES.options.START.description",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
              {
                name: "channel",
                name_localizations: "commands:LIVE_UPDATES.options.START.option.CHANNEL.name",
                description: "channel where shard details should be updated",
                description_localizations: "commands:LIVE_UPDATES.options.START.option.CHANNEL.description",
                type: ApplicationCommandOptionType.Channel,
                channel_types: [ChannelType.GuildText],
                required: true,
              },
              {
                name: "type",
                description: "type of live updates",
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                  { name: "Shards", value: "shards" },
                  { name: "Skytimes", value: "skytimes" },
                ],
              },
            ],
          },
          {
            name: "stop",
            name_localizations: "commands:LIVE_UPDATES.options.STOP.name",
            description: "stop live shard",
            description_localizations: "commands:LIVE_UPDATES.options.STOP.description",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
              {
                name: "type",
                description: "type of live updates",
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                  { name: "Shards", value: "shards" },
                  { name: "Skytimes", value: "skytimes" },
                ],
              },
            ],
          },
        ],
      },
    ],
    integration_types: [0],
    contexts: [0],
  },
  prefix: {
    usage: "<sub> [#channel]",
    minimumArgs: 1,
    subcommands: [
      {
        trigger: "start <#channel>",
        description: "starts live-shards in the given channel",
      },
      {
        trigger: "stop",
        description: "stop live shards",
      },
    ],
  },
  validations: [
    {
      type: "interaction",
      callback: ({ interaction, options, t, helper }) => {
        const { client } = helper;
        if (!interaction.guild_id) return { status: false, message: "Command is only available fo guild" };
        const guild = client.guilds.get(interaction.guild_id);
        if (!guild) return { status: false, message: "Guild not found" };
        const ch = options.getChannel("channel");
        if (!ch) return { status: true };
        const channel = client.channels.get(ch.id) as APITextChannel;
        const sub = options.getSubcommand();
        if (sub !== "start") return { status: true };
        if (!PermissionsUtil.overwriteFor(guild.clientMember, channel, client).has("ManageWebhooks")) {
          return {
            status: false,
            message: t("common:NO-WB-PERM-BOT", { CHANNEL: `<#${channel.id}>` }),
          };
        }
        return { status: true };
      },
    },
  ],
  botPermissions: ["ManageWebhooks"],
  userPermissions: ["ManageGuild"],
  category: "Admin",
};
