const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")



client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let isAdmin = (message.author.id == message.guild.ownerID);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message , args, isAdmin);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.token);