const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: false});



module.exports.run = async (bot, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
	//const eventMessage = args.join(" ")
	//let timeMessage = message.guild.members.get(args[0])
	
    let eventTitle = args.join(" "); 
    let eventTime = args.join(" ").slice(22);
    message.delete().catch();
    message.channel.send("@everyone").then(msg => msg.delete());
    
    let eventembed = new Discord.RichEmbed()
      .setDescription("New Event!")
      .setColor("#fffb0f")
      .addField("Event:", `${eventTitle}`)
      .setFooter(`Event made by: ${message.author.tag}`);

	message.channel.send({embed: eventembed}).then(embedMessage => {
    embedMessage.react("✅")
    embedMessage.react("❎")

	});

}

   
module.exports.help = {
  name:"event"
}
