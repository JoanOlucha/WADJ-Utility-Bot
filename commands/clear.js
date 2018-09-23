const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

if(args[0] == "help"){
  message.reply("!clear <# of messages>");
  return;
  }
  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
  if(!args[0]) return message.channel.send("Are you dumm? How am I gonna delete 0 messages!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(8000));
  });
}

module.exports.help = {
  name: "clear"
}
