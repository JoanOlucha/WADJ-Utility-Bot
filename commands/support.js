const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


      const sayMessage = "Please take a look at your PMs!"
      message.author.send("Please join this server for support: https://discord.gg/XCgAtJf")
      message.delete().catch();
      message.channel.send(sayMessage);

    }

    module.exports.help = {
        name: "support"
    }
