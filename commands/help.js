const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    //.setDescription("HELP (memmbers)")
      .setColor("#fffb0f")
      .setFooter("This bot was created by cap_joan #9480")
      .addField("Commands for members", "The following commands can be used by all members.")
      .addField("help [command]", "Shows how to use the speciffic command.")
      .addField("web", "Shows you the website of Yellow Borons.")
      .addField("ping", "Shows you the latency of the bot.")
      .addField("serverinfo", "Shows you the information about the server you are in.")
      .addField("botinfo", "Shows you the information about the bot.")
      .addField("report", "Reports a user.")
      .addField("coinflip", "Makes the bot flip a coin.")
      .addField("invite", "Gives you invite link for the bot.")
      .addField("react", "Gives you a reaction.")
      .addField("support", "Tells you were to go to get support.")
      .addField("uptime", "Shows the bots uptime.")
      .addField("~~apply~~", "~~Creates for you a new channel with your user id and tell you instructions on how to send your application.~~ Under Development!")
      .addBlankField(true)
      .addField("Commands for moderators:", "The following commmands can only be used by moderators.")
      .addField("kick", "Kick a selected user.")
      .addField("ban", "Bans a selected user.")
      .addField("say", "Makes the bot say a message.")
      .addField("clear", "Clears a number of messages.")
      .addField("mute", "Mutes a user.")
      .addField("addrole", "Adds a role to a user.")
      .addField("removerole", "Removes a role from a user.")
      .addField("tempmute", "This function is currently not woring.")
      .addField("event", "Creates a Embed text with a check mark and a X and tags everyone");


      message.reply(`I have sent you the commands via private message.`)
      message.author.send(botembed);
    //message.channel.send(botembed);
}

module.exports.help = {
  name:"help"
}
