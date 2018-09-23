const botconfig = require("./config.js");
const Discord = require("discord.js");
const { Client } = require("discord.js");
const bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();
const fs = require("fs");
const client = new Discord.Client();
const newUsers = [];
const WS = require("./WS/ws");

var ws = new WS('123456', 5665, client);

fs.readdir("./commands/", (err, files) => {




  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
  
    bot.commands.set(props.help.name, props);
  }); 
   console.log(`${jsfile.length} loaded!`);
});
//Playing avatar on bot
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`Created by wadj.ga | !help | Playing with ${bot.users.size}`, {type: "PLAYING"});

});




bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
 
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
  if(!prefixes[message.guild.id]){
	  prefixes[message.guild.id] = {
		  prefixes: botconfig.prefix
	 };
	}

  let prefix = prefixes[message.guild.id].prefixes;
 
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);

});
client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

    if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find("name", "general").send("Welcome our new users!\n" + userlist);
    newUsers[guild.id].clear();
  }
});
  client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});






client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

//delted messages log:
client.on("messageDelete", (messageDelete) => {
	const logchannel = member.guild.channels.find('name', 'logs')
	messageDelete.logchannel.send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)
});

// // left and welcome messages
// bot.on('guildMemberAdd', member => {
//     const welcomechannel = member.guild.channels.find('name', '😀welcome')
//
//     var newuserjoinembed = new Discord.RichEmbed()
//       .setColor('00FF00')
//       .setAuthor(member.user.tag + ' has joined server', member.user.displayAvatarURL)
//       .setImage("https://cdn.discordapp.com/attachments/472416841772302337/474192800972275722/Welcome.png")
//       .addField(`:inbox_tray: Welcome To The Server ${member.user.tag}`)
//       .setFooter(`User joined`)
//       .setTimestamp()
//       return welcomechannel.send(newuserjoinembed)
//       message.user.send("Welcome to YB!");
// });
//
// bot.on('guildMemberRemove', member => {
//     const goodbyechannel = member.guild.channels.find('name', '📈log')
//
//     var newuserjoinembed = new Discord.RichEmbed()
//       .setColor('#FF0000')
//       .setAuthor(member.user.tag + ' has left server', member.user.displayAvatarURL)
//       .addField(`:outbox_tray: Goodbye ${member.user.name} :disappointed_relieved: `)
//       .setFooter(`User left`)
//       .setTimestamp()
//       return goodbyechannel.send(newuserjoinembed);
// });


client.login("NDg3OTM3ODQzODg5NTY5Nzk1.Doi8jg.gsxjkingM6h4MxseYgK93ELdXQM")
bot.login(botconfig.token);
