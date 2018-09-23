const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: false});

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#fffb0f")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members:", message.guild.memberCount, true)
    .addField("Server region", message.guild.region, true)
    .addField("Server Owner:", message.guild.owner, true)
    .addField("Server ID", message.guild.id, true)
    .addField("AFK Channel:", message.guild.afkChannel, true)
    .addField("AFK Timeout:", message.guild.afkTimeout, true)
    .addField("Roles:", message.guild.roles.map(r=> r.name))
 
    //.setImage("https://cdn.discordapp.com/attachments/472416841772302337/472468130086649884/Untitled-1.png");
    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
