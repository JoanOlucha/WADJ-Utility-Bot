const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    //.setDescription("HELP (memmbers)")
      .setColor("#fffb0f")
      .setFooter("To go to the next question please type yb.q5")
      .addField("Do you have a working microphone and stable internet connection?", "Please answer bellow:");


      message.delete().catch();
      message.channel.send(botembed);
    //message.channel.send(botembed);
}

module.exports.help = {
  name:"q4"
}
