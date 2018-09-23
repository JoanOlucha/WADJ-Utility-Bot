const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRTOR")) return;
      const sayMessage = "BOB is gay (@LordwilliamWhite)"
      message.channel.send(sayMessage);

    }

    module.exports.help = {
        name: "bob"
    }
