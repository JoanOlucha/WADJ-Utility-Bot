const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    //.setDescription("HELP (memmbers)")
      .setColor("#fffb0f")
      .setFooter("Your application will be reviewed with in the next 24 hours!")
      .addField("Thank You for sending the app!", "Please DO NOT type any further here!");


      message.delete().catch();
      message.channel.send(botembed);


}

module.exports.help = {
  name:"done"
}
