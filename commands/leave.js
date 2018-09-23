const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

      message.member.voiceChannel.leave();
          message.reply('Disocnected from voice channel!');
        }




module.exports.help = {
    name: "leave"
}
