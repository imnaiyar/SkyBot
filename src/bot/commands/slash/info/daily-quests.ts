import { dailyQuestEmbed } from "#utils";
import type { Command } from "#structures";
import moment from "moment-timezone";
import { useTranslations as x } from "#handlers/useTranslation";
import {
  ButtonBuilder,
  type APIActionRowComponent,
  type APIButtonComponent,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  type APIStringSelectComponent,
  ApplicationCommandOptionType,
} from "discord.js";
export default {
  async interactionRun(interaction, t, client) {
    await interaction.deferReply({ ephemeral: interaction.options.getBoolean("hide") || undefined });
    const data = await client.database.getDailyQuests();
    const now = moment().tz(client.timezone).startOf("day");
    const last_updated = moment.tz(data.last_updated, client.timezone).startOf("day");
    if (!data.last_updated || !now.isSame(last_updated) || !data.quests.length) {
      return void (await interaction.editReply(t("commands.DAILY_QUESTS.RESPONSES.NO_DATA")));
    }
    const response = dailyQuestEmbed(data, 0);
    const m = await interaction.editReply(response);
    const collector = m.createMessageComponentCollector({ idle: 90_000 });
    collector.on("end", async () => {
      const components = m.components.map((row) => {
        const r = ActionRowBuilder.from(row);
        r.components.forEach((c) => {
          if (c instanceof ButtonBuilder || c instanceof StringSelectMenuBuilder) {
            c.setDisabled(true);
          }
        });
        return r.toJSON();
      });
      await interaction
        .editReply({
          components: components as APIActionRowComponent<APIButtonComponent | APIStringSelectComponent>[],
        })
        .catch(() => {});
    });
  },

  name: "daily-quests",
  description: "Get the daily quests for today",
  slash: {
    name_localizations: x("commands.DAILY_QUESTS.name"),
    description_localizations: x("commands.DAILY_QUESTS.description"),
    options: [
      {
        name: "hide",
        name_localizations: x("common.hide-options.name"),
        description: "hide the response from others",
        description_localizations: x("common.hide-options.description"),
        type: ApplicationCommandOptionType.Boolean,
      },
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },
  category: "Info",
  cooldown: 15,
} satisfies Command;
