const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "e",
    description: "Evaluate JavaScript code",
    category: "OWNER",
    flags: ["a", "async"],
  },
  async execute(msg, args, client, flags) {
    let code = args.join(" ");
    if (flags.length > 0 && this.data.flags.some(flag => flags.includes(flag))) {
      code = `(async () => { return ${args.join(" ")} })()`
    } 

    let response;

    if (code.includes("process.env")) {
      return msg.channel.send("You cannot evaluate code containing process.env.");
    }

    try {
      const output = await eval(code);
      response = buildSuccessResponse(output, client);
    } catch (ex) {
      response = buildErrorResponse(ex);
    }
    msg.channel.send(response);
  },
};

const buildSuccessResponse = (output, client) => {
  // Token protection
  output = require("util").inspect(output, { depth: 0 }).replaceAll(client.token, "LoL");

  const embed = new EmbedBuilder()
    .setAuthor({ name: "📤 Output" })
    .setDescription("```js\n" + (output.length > 4096 ? `${output.substr(0, 4000)}...` : output) + "\n```")
    .setColor("Green")
    .setTimestamp();

  return { embeds: [embed] };
};

const buildErrorResponse = (err) => {
  const embed = new EmbedBuilder()
    .setAuthor({ name: "📤 Error" })
    .setDescription("```js\n" + (err.length > 4096 ? `${err.substr(0, 4000)}...` : err) + "\n```")
    .setColor("Red")
    .setTimestamp();

  return { embeds: [embed] };
};
