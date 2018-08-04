const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")


client.on("ready", () => {
  
  let configUpdate = require(`./commands/inside/installConfig.js`);
  configUpdate.run(client);

  console.log("I am ready!");
});

client.on("message", (message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let isAdmin = (message.author.id == message.guild.ownerID );
  
  console.log(message.channel.id)
  if(message.content == "!install"){let commandFile = require(`./commands/install.js`); commandFile.run(client, message , args, isAdmin)}
  if (!message.content.startsWith(config.prefix) || message.author.bot || message.channel.id !== config.botChannel) {return};


  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message , args, isAdmin);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.token);