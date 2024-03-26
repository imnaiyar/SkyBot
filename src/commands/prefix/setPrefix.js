const { getSettings } = require("@schemas/Guild");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  data: {
    name: "test",
    description: "Set a new prefix for this server",
    userPermissions: "ManageGuild",
    category: "OWNER",
  },
  async execute(message, args) {
    const embed = new EmbedBuilder().setDescription(`\`\`\`
╔═════════════════╦════════╦══════╗
║ Name            ║ Cost   ║ Year ║
╠═════════════════╬════════╬══════╣
║ Winter Quilted  ║ $14.99 ║ 2023 ║
║ Cape            ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Cozy Hermit     ║ $6.99  ║ 2023 ║
║ Boots           ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Winter Pinecone ║ 19🎫   ║ 2023 ║
║ Hair Clip       ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Winter Feast    ║ 44🎫   ║ 2023 ║
║ Snowboard       ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Course Creation ║ 150🕯  ║ 2023 ║
║ Prop            ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Tournament      ║ $14.99 ║ 2022 ║
║ Skyball Set     ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Cozy Hermit     ║ $14.99 ║ 2022 ║
║ Cape            ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Snowkid Prop    ║ 120🕯  ║ 2022 ║
╠═════════════════╬════════╬══════╣
║ Feast Goggles   ║ 60🕯   ║ 2022 ║
╠═════════════════╬════════╬══════╣
║ Winter Ancestor ║ $9.99  ║ 2021 ║
║ Cape            ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Snowflake Hair  ║ $1.99  ║ 2021 ║
║ Accesory        ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Winter Feast    ║ $9.99  ║ 2021 ║
║ Snowglobe       ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Music Sheet E1  ║ 10🕯   ║ 2021 ║
║ - Ode to Joy    ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Winter Feast    ║ 10🕯   ║ 2021 ║
║ Pillow          ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Winter Feast    ║ 50🕯   ║ 2021 ║
║ Scarf           ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Winter Feast    ║ 20🤍   ║ 2021 ║
║ Hat             ║        ║      ║
╠═════════════════╬════════╬══════╣
║ Feast Horns     ║ $14.99 ║ 2020 ║
╠═════════════════╬════════╬══════╣
║ Snowflake Cape  ║ $14.99 ║ 2020 ║
╠═════════════════╬════════╬══════╣
║ Feast Table     ║ 150🕯  ║ 2020 ║
╠═════════════════╬════════╬══════╣
║ Feast Cape      ║ 65🕯   ║ 2020 ║
╠═════════════════╬════════╬══════╣
║ Feast Necktie   ║ 15🤍   ║ 2020 ║
╠═════════════════╬════════╬══════╣
║ Feast Pack      ║ $6.99  ║ 2019 ║
║ (Hair)          ║        ║      ║
╚═════════════════╩════════╩══════╝
\`\`\``);
    message.reply({ embeds: [embed] });
  },
};
