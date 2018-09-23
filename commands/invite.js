const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


      const sayMessage = "I have sent you the invite link of the bot!"
      message.author.send("To make the bot join your server: https://discordapp.com/oauth2/authorize?client_id=459711837756194826&scope=bot&permissions=0>")
      message.delete().catch();
      message.channel.send(sayMessage);

    }

    module.exports.help = {
        name: "invite"
    }
