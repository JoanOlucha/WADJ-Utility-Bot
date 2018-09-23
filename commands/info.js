const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});
let infoEmbed = new Discord.RichEmbed()

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let infoEmbed = new Discord.RichEmbed()
  .setTitle('WADJ METAR BOT Information.')
  .setColor([55, 213, 252])
  .setDescription('WADJ UTILITY BOT is the 1st discord bot made by WADJ. As all its bots you can go to https://wadj.ml to order your custom bot for free/low prices!')
  .addField('Prefix', 'yb.', true)
  .addField('Getting started', 'yb.help', true)
  .addField('Join the support server!', '[By clicking here!](https://discord.gg/Ahm9fss)', true)
  .addField('Or invite the bot!', '[By clicking here!](https://discordapp.com/oauth2/authorize?client_id=459711837756194826&scope=bot&permissions=0%3E)', true)
  .setFooter('Created by WADJ.ml | Version 0.0.5');
message.channel.send(infoEmbed);
}

module.exports.help = {
  name:"info"
}
