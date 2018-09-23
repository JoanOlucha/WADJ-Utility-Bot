    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let totalSeconds = (bot.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let uptimeEmbed = new Discord.RichEmbed()
            .setTitle('WADJ METAR BOT Uptime')
            .setColor([101, 244, 66])
            .setDescription(`\`\`\`${hours} hrs, ${minutes} mins, ${~~seconds} secs.\`\`\``)
            .setFooter('Wowie, maybe this is the longest time ol\' WADJ has been up?!?!?!!');
        console.log(`Uptime: ${hours}, ${minutes}, ${~~seconds} by ${message.author.tag}`);
        message.channel.send(uptimeEmbed);
    }

module.exports.help = {
    name: "uptime"
}
