//displays bot website

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


      const sayMessage = "Our website:  http://wadj.ga/"

      //message.delete().catch();
      message.channel.send(sayMessage)


    }

    module.exports.help = {
        name: "web"
    }
