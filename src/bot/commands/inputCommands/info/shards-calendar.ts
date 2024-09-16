import type { Command } from "#structures";
import { ButtonBuilder, ButtonInteraction, ButtonStyle, EmbedBuilder, StringSelectMenuInteraction, time } from "discord.js";
import {
  type APIEmbedField,
  type APISelectMenuOption,
  ActionRowBuilder,
  ApplicationCommandOptionType,
  StringSelectMenuBuilder,
} from "discord.js";
import moment from "moment-timezone";
import { ShardsUtil as utils, shardsInfo, shardsTimeline } from "skyhelper-utils";
import { useTranslations as x } from "#handlers/useTranslation";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Descember",
] as const;

export default {
  cooldown: 15,
  category: "Info",
  async interactionRun(interaction, t, client) {
    await interaction.deferReply({ ephemeral: interaction.options.getBoolean("hide") || false, fetchReply: true });
    const shardsCmd = `</shards:${(await client.getCommand("shards")).id}>`;
    const now = moment().tz(client.timezone);
    const date = 1;
    let month = now.month() + 1;
    let monthStr = now.format("MMMM");
    let year = now.year();
    const datesArray = getDates(now);

    const setsOfDates = [];
    for (let i = 0; i < datesArray.length; i += 5) {
      setsOfDates.push(datesArray.slice(i, i + 5));
    }

    let index = setsOfDates.findIndex((dates) => dates.some((d) => d.isSame(now, "day")));
    const buildResponse = () => {
      const toGet = moment.tz(`${year}-${month}-${date}`, "Y-M-D", client.timezone);
      const dates = getDates(toGet);
      const total = dates.length;
      const totalPages = Math.ceil(total / 5);
      const start = index * 5;
      const end = start + 5;
      const toDisplay = dates.slice(start, end);
      const title = `${toDisplay[0].format("Do MMM YYYY")} - ${toDisplay[toDisplay.length - 1].format("Do MMM YYYY")}`;
      const datesSelectOption = () => {
        const options: APISelectMenuOption[] = [];
        for (let i = 0; i < totalPages; i++) {
          const start2 = i * 5;
          const end2 = start2 + 5;
          const dat = dates.slice(start2, end2);
          const label = `${dat[0].format("Do")} - ${dat[dat.length - 1].format("Do")}`;
          const value = `${i}`;
          options.push({ label, value, default: index === i });
        }
        return options;
      };
      const dateSelect = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("calendar-dates")
          .setPlaceholder(t("commands.SHARDS_CALENDAR.RESPONSES.DATE_SELECT_PLACEHOLDER"))
          .addOptions(datesSelectOption()),
      );
      const monthSelect = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("calendar-month")
          .setPlaceholder(t("commands.SHARDS_CALENDAR.RESPONSES.MONTH_SELECT_PLACEHOLDER"))
          .addOptions(
            months.map((m, i) => ({
              label: m,
              value: i + 1 + "",
              default: month === i + 1,
            })),
          ),
      );
      const getYears = () => {
        const options: APISelectMenuOption[] = [];
        for (let i = year - 5; i < year + 5; i++) {
          options.push({
            label: `${i}`,
            value: `${i}`,
            default: i === year,
          });
        }
        return options;
      };
      const yearSelect = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("calendar-year")
          .setPlaceholder(t("commands.SHARDS_CALENDAR.RESPONSES.YEAR_SELECT_PLACEHOLDER"))
          .addOptions(getYears()),
      );
      const navBtn = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
          .setCustomId("calendar-nav-prev")
          .setEmoji("⬅️")
          .setStyle(ButtonStyle.Primary)
          .setDisabled(index === 0),
        new ButtonBuilder()
          .setCustomId("calendar-nav-next")
          .setEmoji("➡️")
          .setStyle(ButtonStyle.Primary)
          .setDisabled(index === totalPages - 1),
      );
      const fields: APIEmbedField[] = [];
      toDisplay.forEach((d) => {
        const { currentRealm, currentShard } = utils.shardsIndex(d);
        const timelines = shardsTimeline(d)[currentShard];
        const noShard = utils.getStatus(d);
        const info = shardsInfo[currentRealm][currentShard];
        fields.push({
          name: d.isSame(now, "day")
            ? time(d.unix(), "D") + ` (${t("shards-embed.TODAY")}) <a:uptime:1228956558113771580>`
            : time(d.unix(), "D"),
          value:
            typeof noShard === "string"
              ? "↪ " + t("commands.SHARDS_CALENDAR.RESPONSES.INFO.NO_SHARD")
              : `↪ ${t("commands.SHARDS_CALENDAR.RESPONSES.INFO.SHARD-INFO", { INFO: info.type, AREA: `*${info.area}*` })}\n↪ ${t("commands.SHARDS_CALENDAR.RESPONSES.INFO.SHARD-TIMES", { TIME: timelines.map((ti) => `${time(ti.start.unix(), "T")}`).join(" • ") })}\n\n`,
        });
      });
      const embed = new EmbedBuilder()
        .setAuthor({
          name: t("commands.SHARDS_CALENDAR.RESPONSES.EMBED_AUTHOR", { MONTH: monthStr, YEAR: year }),
          iconURL: client.user.displayAvatarURL(),
        })
        .setDescription(t("commands.SHARDS_CALENDAR.RESPONSES.EMBED_DESCRIPTION", { shardsCmd: shardsCmd }))
        .setTitle(title)
        .addFields(fields)
        .setFooter({
          text: t("commands.SHARDS_CALENDAR.RESPONSES.EMBED_FOOTER", { INDEX: index + 1, TOTAL: totalPages }),
          iconURL: client.user.displayAvatarURL(),
        });
      return { embeds: [embed], components: [dateSelect, monthSelect, yearSelect, navBtn] };
    };
    const m = await interaction.editReply({ ...buildResponse() });
    const collector = m.createMessageComponentCollector({ idle: 60_000 });
    collector.on("collect", async (i: ButtonInteraction | StringSelectMenuInteraction) => {
      const Id = i.customId;

      if (i.isButton()) {
        if (Id === "calendar-nav-next") {
          index++;
          await i.update({ ...buildResponse() });
        }
        if (Id === "calendar-nav-prev") {
          index--;
          await i.update({ ...buildResponse() });
        }
      }
      if (i.isStringSelectMenu()) {
        const value = i.values[0];
        switch (Id) {
          case "calendar-dates":
            index = parseInt(value);
            await i.update({ ...buildResponse() });
            break;
          case "calendar-month":
            month = parseInt(value);
            monthStr = moment()
              .month(month - 1)
              .format("MMMM");
            index = 0;
            await i.update({ ...buildResponse() });
            break;
          case "calendar-year":
            year = parseInt(value);
            index = 0;
            await i.update({ ...buildResponse() });
            break;
        }
      }
    });
    collector.on("end", () => {
      interaction
        .fetchReply()
        .then((): void => {
          const components = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("any")
              .setPlaceholder(t("common.SELECT_EXPIRED"))
              .setDisabled(true)
              .addOptions([{ label: t("common.SELECT_EXPIRED"), value: "expired", default: true }]),
          );
          interaction.editReply({ components: [components] }).catch(() => {});
        })
        .catch(() => {});
    });
  },

  name: "shards-calendar",
  description: "Show the shards calendar",
  slash: {
    name_localizations: x("commands.SHARDS_CALENDAR.name"),
    description_localizations: x("commands.SHARDS_CALENDAR.description"),
    options: [
      {
        name: "hide",
        name_localizations: x("common.hide-options.name"),
        description: "hides the response",
        description_localizations: x("common.hide-options.description"),
        type: ApplicationCommandOptionType.Boolean,
        required: false,
      },
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },
} satisfies Command;

const getDates = (date: moment.Moment): moment.Moment[] => {
  const month = date.month() + 1;
  const year = date.year();
  const totalDays = date.daysInMonth();
  const dates: moment.Moment[] = [];
  for (let i = 1; i <= totalDays; i++) {
    dates.push(utils.getDate(`${year}-${month}-${i}`) as moment.Moment);
  }
  return dates;
};
