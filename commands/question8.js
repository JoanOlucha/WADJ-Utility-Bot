const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    //.setDescription("HELP (memmbers)")
      .setColor("#fffb0f")
      .setFooter("You are donne pleas enter yb.done")
      .addField("What is your Discord name? (ex. Cap_joan #9880)", "Please answer bellow:");


      message.delete().catch();
      message.channel.send(botembed);
    //message.channel.send(botembed);
}

module.exports.help = {
  name:"q8"
}
