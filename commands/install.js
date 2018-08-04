exports.run = (client, message, args, isAdmin) => {

    //verification if the user is the guild owner
    if(!isAdmin){ message.channel.send(`You can't use this command. Try contacting the channel admin.`); return }

    //msg to the user that the install is begining
    message.channel.send(`I'm starting now, wait for me to tell you I'm "**DONE**"`);
    
    //install roles
    installRole = require(`./inside/installCommands/installRoles.js`)
    installRole.run(client, message, args)

    //install channel
     installChannel = require(`./inside/installCommands/installChannel.js`)
     installChannel.run(client, message, args)
 

    //msg to the user that the install is done
    message.channel.send(`**DONE**`)
}

