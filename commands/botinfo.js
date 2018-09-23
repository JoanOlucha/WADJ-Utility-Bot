const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#fffb0f")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Created On", bot.user.createdAt)
      .addField("Last update:", "01/08/2018")
      .addField("Created By:", "cap_joan #9840");


	message.channel.send({embed: botembed}).then(embedMessage => {
    embedMessage.react("👍");
	});
    //message.channel.send(botembed);
    //message.react("✅");
}

module.exports.help = {
  name:"botinfo"
}
