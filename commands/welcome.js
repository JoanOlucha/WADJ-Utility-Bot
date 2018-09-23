//welcome message for emergency



const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = "Welcome! Please read #🚩faq and send your application"
      message.react("✅");
      message.delete().catch();
      message.channel.send(sayMessage);


    }

    module.exports.help = {
        name: "nuser"
    }
