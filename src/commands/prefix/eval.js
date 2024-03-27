const d = require("discord.js");
const createHstbn = require("@handler/createHastebin");
const { Type } = require("@sapphire/type");
const { Stopwatch } = require("@sapphire/stopwatch");
module.exports = {
  data: {
    name: "e",
    description: "Evaluate JavaScript code",
    category: "OWNER",
    flags: ["a", "async", "haste", "depth", 'd', 'suppress'],
    aliases: ['eval', 'ev']
  },
  async execute(msg, args, client, flags) {
    let code = args.join(" ").trim();
    const {guild, channel, author, member} = msg;
    if (flags.length > 0 && ["a", "async"].some((flag) => flags.includes(flag))) {
      code = `(async () => {\n${code}\n})()`;
    }
    let response;
    let type;
    const dp = flags?.find((f) => f.startsWith("depth"));

    const regex = /(?:depth|d)=(\d+|Infinity)/;
    if (dp) {
      const match = dp.match(regex);
      if (!match) return msg.reply("Not a valid depth format (`depth:'Depth Here'`)");
    }
    const depth = dp ? parseFloat(dp.split("=")[1]) : 0;
    if (code.includes("client.token") || code.includes("process.env"))
      return msg.reply(buildErrorResponse("You cannot evaluate codes revealing secrets!"));
  let errored = false;
    try {
      const time = new Stopwatch().start();
      const output = await eval(code);
      type = new Type(output).toString();
      time.stop();
      response = await buildSuccessResponse(output, client, type, time, flags.includes("haste"), depth);
    } catch (ex) {
      errored = true;
      response = buildErrorResponse(ex);
    }
    if (flags && flags.includes('suppress') && !errored) return;
    msg.channel.send(response);
  },
};

const buildSuccessResponse = async (output, client, type, time, haste, depth) => {
  // Token protection
  output = require("util").inspect(output, { depth: depth }).replaceAll(client.token, "~~REDACTED~~");
  let embOutput;

  if (!haste && output.length <= 2048) {
    embOutput = `\`\`\`js\n${output}\n\`\`\``;
  } else {
    embOutput = await createHstbn(output);
  }
  const embed = new d.EmbedBuilder()
    .setAuthor({ name: "📤 Output" })
    .setDescription(embOutput)
    .addFields({
      name: `Type`,
      value: `\`\`\`\n${type ? type : "Unknown"}\`\`\``,
    })
    .setColor("Random")
    .setFooter({
      text: `⏱️ Took ${time}`,
    })
    .setTimestamp(Date.now());

  return { embeds: [embed] };
};

const buildErrorResponse =  (err) => {
    const embed = new d.EmbedBuilder()
    .setAuthor({ name: "📤 Error" })
    .setDescription("```js\n" + (err.length > 4096 ? `${err.substr(0, 4000)}...` : err) + "\n```")
    .setColor("Red")
    .setTimestamp();

  return { embeds: [embed] };
};
