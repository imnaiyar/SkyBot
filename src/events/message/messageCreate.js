const { WebhookClient, Collection, EmbedBuilder } = require("discord.js");
const fs = require('fs');
const path = require('path');
const {OWNER} = require('@root/config.js')
const { getSettings} = require("@schemas/Guild");
const Logger = process.env.COMMANDS_USED ? new WebhookClient({ url: process.env.COMMANDS_USED }) : undefined;

prefix = new Collection();

const commandDirectory = path.join(__dirname, '../../commands/prefix');
const commandFiles = fs.readdirSync(commandDirectory).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`@src/commands/prefix/${file}`);
  prefix.set(command.name, command); 
}
/**
 * @param {import('@root/main')} client
 * @param {import('discord.js').Message} message
 */
module.exports = async (client, message) => {
  const settings = await getSettings(message.guild)
  const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(mention)) {
    const embed = new EmbedBuilder()
      .setColor('Gold')
      .setDescription(`Did you just ping me? RUDE. Anyway, my prefix for this server is '**${settings?.prefix || process.env.PREFIX}**'`);
    message.channel.send({ embeds: [embed] });
  }

  if (message.author.bot || !message.content.startsWith(settings?.prefix || process.env.PREFIX)) {
    return;
  }

  const args = message.content.slice(settings.prefix?.length || process.env.PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = prefix.get(commandName);
  if (!command) {
    return message.reply('Unknown command. Use </help:1147244751708491898> to see available commands.');
  }
 if (command.category === 'OWNER' && !OWNER.includes(message.author.id)) return;
 if (command.userPermissions && !message.member.permissions.has(command.userPermissions)) {
  return message.reply('You do not have sufficient permission to use this command')
 }
  try {
    await command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply('An error occurred while executing the command.');
  }
}
