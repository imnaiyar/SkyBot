import { getShardStatus } from "#handlers";
import { ContextTypes, IntegrationTypes } from "#libs/types";
import { shardsInfo, shardsTimelines } from "#libs/constants/index";
import type { SlashCommand } from "#structures";
import { ButtonBuilder, ButtonInteraction, ButtonStyle, EmbedBuilder, StringSelectMenuInteraction, time } from "discord.js";
import {
  type APIEmbedField,
  type APISelectMenuOption,
  ActionRowBuilder,
  ApplicationCommandOptionType,
  StringSelectMenuBuilder,
} from "discord.js";
import moment from "moment-timezone";
import { ShardsUtil as utils } from "skyhelper-utils";
export default {
  data: {
    name: "shards-calendar",
    description: "Show the shards calendar",
    options: [
      {
        name: "hide",
        description: "hides the response",
        type: ApplicationCommandOptionType.Boolean,
        required: false,
      },
    ],
    integration_types: [IntegrationTypes.Guilds, IntegrationTypes.Users],
    contexts: [ContextTypes.BotDM, ContextTypes.Guild, ContextTypes.PrivateChannels],
  },
  cooldown: 15,
  category: "Info",
  async execute(interaction, client) {
    const reply = await interaction.deferReply({ ephemeral: interaction.options.getBoolean("hide") || false, fetchReply: true });
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
          .setPlaceholder("Select a date range")
          .addOptions(datesSelectOption()),
      );
      const monthSelect = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("calendar-month")
          .setPlaceholder("Select a month")
          .addOptions([
            { label: "January", value: "1", default: month === 1 },
            { label: "February", value: "2", default: month === 2 },
            { label: "March", value: "3", default: month === 3 },
            { label: "April", value: "4", default: month === 4 },
            { label: "May", value: "5", default: month === 5 },
            { label: "June", value: "6", default: month === 6 },
            { label: "July", value: "7", default: month === 7 },
            { label: "August", value: "8", default: month === 8 },
            { label: "September", value: "9", default: month === 9 },
            { label: "October", value: "10", default: month === 10 },
            { label: "November", value: "11", default: month === 11 },
            { label: "December", value: "12", default: month === 12 },
          ]),
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
        new StringSelectMenuBuilder().setCustomId("calendar-year").setPlaceholder("Select a year").addOptions(getYears()),
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
        const timelines = shardsTimelines(d)[currentShard];
        const noShard = getShardStatus(d);
        const info = shardsInfo[currentRealm][currentShard];
        fields.push({
          name: d.isSame(now, "day") ? time(d.unix(), "D") + " (Today) <a:uptime:1228956558113771580>" : time(d.unix(), "D"),
          value:
            typeof noShard === "string"
              ? "↪ No Shard"
              : `↪ **Info**: ${info.type} in *${info.area}*\n↪ **Times**: ${timelines.map((t) => `${time(t.start.unix(), "T")}`).join(" • ")}\n\n`,
        });
      });
      const embed = new EmbedBuilder()
        .setAuthor({
          name: `Shards Calender of ${monthStr}, ${year}`,
          iconURL: client.user.displayAvatarURL(),
        })
        .setDescription(`For detailed shard info, use ${shardsCmd}`)
        .setTitle(title)
        .addFields(fields)
        .setFooter({ text: `Page ${index + 1}/${totalPages}`, iconURL: client.user.displayAvatarURL() });
      return { embeds: [embed], components: [dateSelect, monthSelect, yearSelect, navBtn] };
    };
    await interaction.followUp({ ...buildResponse(), fetchReply: true });
    const collector = reply.createMessageComponentCollector({ idle: 60_000 });
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
              .setPlaceholder("Menu Expired!")
              .setDisabled(true)
              .addOptions([{ label: "Menu Expired!", value: "expired", default: true }]),
          );
          interaction.editReply({ components: [components] }).catch(() => {});
        })
        .catch(() => {});
    });
  },
} satisfies SlashCommand;

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
