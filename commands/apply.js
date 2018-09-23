const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client();


module.exports.run = async (bot, message, args) => {
    console.log(`Application for ${message.author.tag}`);
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    //.setDescription("HELP (memmbers)")
      .setColor("#fffb0f")
      .setFooter("To start go to the channel with your user ID!")
      .addField("Please go to the chanel that the bot created for you, once there start by typing yb.q1", "Please DO NOT type any further here!");


      message.delete().catch();
      message.channel.send(botembed).then(msg => msg.delete(10000));
      let appch = message.guild.createChannel(`app ${message.author.username}`, `Applications`);

      message.channel.send("Hello!");
}

module.exports.help = {
  name:"apply"
}
