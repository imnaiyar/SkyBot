import { buildShardEmbed } from "#utils";
import { useTranslations as x } from "#handlers/useTranslation";
import type { Command } from "#structures";
import { ApplicationCommandOptionType } from "discord.js";
import moment from "moment";
import { ShardsUtil } from "skyhelper-utils";

export default {
  async interactionRun(interaction, t) {
    const date = interaction.options.getString("date");
    const hide = interaction.options.getBoolean("hide") || false;
    const regex = /^\d{4,6}-\d{2}-\d{2}$/;
    if (date && !regex.test(date)) {
      interaction.reply({
        content: t("commands.SHARDS.RESPONSES.INVALID_DATE"),
        ephemeral: true,
      });
      return;
    }
    const currentDate = ShardsUtil.getDate(date);
    if (typeof currentDate === "string" && currentDate === "invalid") {
      await interaction.reply({
        content: t("commands.SHARDS.RESPONSES.DATE_NONEXIST"),
        ephemeral: true,
      });
      return;
    }

    const res = buildShardEmbed(currentDate as moment.Moment, t, t("common.bot.name"));

    await interaction.deferReply({ ephemeral: hide });
    await interaction.editReply(res);
  },
  name: "shards",
  description: "Get the a specific shard information",
  slash: {
    name_localizations: x("commands.SHARDS.name"),
    description_localizations: x("commands.SHARDS.description"),
    options: [
      {
        name: "date",
        name_localizations: x("commands.SHARDS.options.DATE.name"),
        description: "The date to get the shard information",
        description_localizations: x("commands.SHARDS.options.DATE.description"),
        type: ApplicationCommandOptionType.String,
        required: false,
      },
      {
        name: "hide",
        name_localizations: x("common.hide-options.name"),
        description: "Hide the shard response",
        description_localizations: x("common.hide-options.description"),
        type: ApplicationCommandOptionType.Boolean,
        required: false,
      },
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },
  category: "Info",
  cooldown: 30,
} satisfies Command;
