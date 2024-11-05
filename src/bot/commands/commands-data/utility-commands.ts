import { useTranslations as x } from "#bot/handlers/useTranslation";
import { supportedLang } from "#bot/libs/constants/supportedLang";
import type { Command } from "#bot/structures/Command";
import { ApplicationCommandOptionType } from "discord.js";

// #region SeasonCalculator
export const SEASON_CALCULATOR_DATA: Omit<Command, "interactionRun" | "messageRun"> = {
  name: "seasonal-calculator",
  description: "calculate seasonal currencies",
  slash: {
    name_localizations: x("commands:SEASONAL_CALCULATOR.name"),
    description_localizations: x("commands:SEASONAL_CALCULATOR.description"),
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "candles",
        name_localizations: x("commands:SEASONAL_CALCULATOR.options.CANDLES.name"),
        description: "amount of candles you have?",
        description_localizations: x("commands:SEASONAL_CALCULATOR.options.CANDLES.description"),
        required: true,
        type: ApplicationCommandOptionType.Integer,
      },
      {
        name: "dailies",
        name_localizations: x("commands:SEASONAL_CALCULATOR.options.DAILIES.name"),
        description: "did you do your dailies today?",
        description_localizations: x("commands:SEASONAL_CALCULATOR.options.DAILIES.description"),
        required: true,
        type: ApplicationCommandOptionType.Boolean,
      },
      {
        name: "season-pass",
        name_localizations: x("commands:SEASONAL_CALCULATOR.options.SEASON_PASS.name"),
        description: "do you have the season pass?",
        description_localizations: x("commands:SEASONAL_CALCULATOR.options.SEASON_PASS.description"),
        required: false,
        type: ApplicationCommandOptionType.Boolean,
      },
    ],
  },
  cooldown: 10,
  category: "Utility",
};

// #region Help
export const HELP_DATA: Omit<Command, "interactionRun" | "messageRun"> = {
  name: "help",
  description: "help menu",
  slash: {
    name_localizations: x("commands:HELP.name"),
    description_localizations: x("commands:HELP.description"),
    options: [
      {
        name: "command",
        name_localizations: x("commands:HELP.options.COMMAND.name"),
        description: "help about a specific command",
        description_localizations: x("commands:HELP.options.COMMAND.description"),
        type: ApplicationCommandOptionType.String,
        required: false,
        autocomplete: true,
      },
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },
  category: "Utility",
  cooldown: 10,
};

// #region Language
export const LANGUAGE_DATA: Omit<Command, "interactionRun" | "messageRun"> = {
  name: "language",
  description: "manage preferred language for the bot's response",
  slash: {
    name_localizations: x("commands:LANGUAGE.name"),
    description_localizations: x("commands:LANGUAGE.description"),
    options: [
      {
        name: "set",
        name_localizations: x("commands:LANGUAGE.options.SUB.SET.name"),
        description: "set your/server language for the bot",
        description_localizations: x("commands:LANGUAGE.options.SUB.SET.description"),
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "category",
            name_localizations: x("commands:LANGUAGE.options.CATEGORY.name"),
            description: "select a category to set the laguage for",
            description_localizations: x("commands:LANGUAGE.options.CATEGORY.description"),
            type: ApplicationCommandOptionType.String,
            choices: [
              {
                name: "Server",
                name_localizations: x("commands:LANGUAGE.options.CATEGORY.choices.GUILD"),
                value: "server",
              },
              {
                name: "User",
                name_localizations: x("commands:LANGUAGE.options.CATEGORY.choices.USER"),
                value: "user",
              },
            ],
            required: true,
          },
          {
            name: "languages",
            name_localizations: x("commands:LANGUAGE.options.LANGUAGES.name"),
            description: "select a language",
            description_localizations: x("commands:LANGUAGE.options.LANGUAGES.description"),
            type: ApplicationCommandOptionType.String,
            choices: supportedLang.map((lang) => ({
              name: `${lang.flag} ${lang.name}`,
              value: lang.value,
            })),
            required: true,
          },
        ],
      },
      {
        name: "remove",
        name_localizations: x("commands:LANGUAGE.options.SUB.REMOVE.name"),
        description: "remove a set language",
        description_localizations: x("commands:LANGUAGE.options.SUB.REMOVE.description"),
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "category",
            name_localizations: x("commands:LANGUAGE.options.CATEGORY.name"),
            description: "select a category type to remove",
            description_localizations: x("commands:LANGUAGE.options.CATEGORY.description"),
            type: ApplicationCommandOptionType.String,
            choices: [
              {
                name: "Server",
                name_localizations: x("commands:LANGUAGE.options.CATEGORY.choices.GUILD"),
                value: "server",
              },
              {
                name: "User",
                name_localizations: x("commands:LANGUAGE.options.CATEGORY.choices.USER"),
                value: "user",
              },
            ],
            required: true,
          },
        ],
      },
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },
  category: "Utility",
};

// #region Utils
export const UTILS_DATA: Omit<Command, "interactionRun" | "messageRun"> = {
  name: "utils",
  description: "Utilities",
  slash: {
    name_localizations: x("commands:UTILS.name"),
    description_localizations: x("commands:UTILS.description"),
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "timestamp",
        name_localizations: x("commands:UTILS.options.TIMESTAMP.name"),
        description: "get unix timestamp for the given date",
        description_localizations: x("commands:UTILS.options.TIMESTAMP.description"),
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "time",
            name_localizations: x("commands:UTILS.options.TIMESTAMP.options.TIME.name"),
            description: "The time to convert (format: HH mm ss)",
            description_localizations: x("commands:UTILS.options.TIMESTAMP.options.TIME.description"),
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: "timezone",
            name_localizations: x("commands:UTILS.options.TIMESTAMP.options.TIMEZONE.name"),
            description: "Your timezone in the format: Continent/City",
            description_localizations: x("commands:UTILS.options.TIMESTAMP.options.TIMEZONE.description"),
            type: ApplicationCommandOptionType.String,
            required: false,
          },
          {
            name: "date",
            name_localizations: x("commands:UTILS.options.TIMESTAMP.options.DATE.name"),
            description: "The date to convert (format: DD)",
            description_localizations: x("commands:UTILS.options.TIMESTAMP.options.DATE.description"),
            type: ApplicationCommandOptionType.Integer,
            required: false,
          },
          {
            name: "month",
            name_localizations: x("commands:UTILS.options.TIMESTAMP.options.MONTH.name"),
            description: "The month to convert (format: MM)",
            description_localizations: x("commands:UTILS.options.TIMESTAMP.options.MONTH.description"),
            type: ApplicationCommandOptionType.Integer,
            required: false,
          },
          {
            name: "year",
            name_localizations: x("commands:UTILS.options.TIMESTAMP.options.YEAR.name"),
            description: "The year to convert (format: YYYY)",
            description_localizations: x("commands:UTILS.options.TIMESTAMP.options.YEAR.description"),
            type: ApplicationCommandOptionType.Integer,
            required: false,
          },
        ],
      },
      {
        name: "changelog",
        name_localizations: x("commands:UTILS.options.CHANGELOG.name"),
        description: "bot's changelog",
        description_localizations: x("commands:UTILS.options.CHANGELOG.description"),
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: "botinfo",
        name_localizations: x("commands:UTILS.options.BOTINFO.name"),
        description: "get the bot's info",
        description_localizations: x("commands:UTILS.options.BOTINFO.description"),
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: "contact-us",
        name_localizations: x("commands:UTILS.options.CONTACT-US.name"),
        description: "for suggestions/bug reports/contacting us or just anything",
        description_localizations: x("commands:UTILS.options.CONTACT-US.description"),
        type: ApplicationCommandOptionType.Subcommand,
      },
    ],
  },
  category: "Utility",
};
