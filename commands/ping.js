const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (client, message, args, color) => {

        console.log(`Pong! For ${message.author.tag}`);
        let editMsg = await message.channel.send('Why would you ping me?');
        let pingEmbed = new Discord.RichEmbed()
            .setTitle('🏓 Pong!')
            .setColor([53, 254, 75])
            .addField('Roundtrip', `${editMsg.createdTimestamp - message.createdTimestamp}ms`, true)
            .addField('Heartbeat', `${~~bot.ping}ms`, true);
        editMsg.edit(pingEmbed);
   }

module.exports.help = {
    name: 'ping',

}
