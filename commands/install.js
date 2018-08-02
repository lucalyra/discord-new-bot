exports.run = (client, message, args, isAdmin) => {

    //msg to the user that the install is begining
    message.channel.send(`I'm starting now, wait for me to tell you I'm "**DONE**"`);
    
    //verification if the user is the guild owner
    if(!isAdmin){ return }
    
    //install roles
    installRole = require(`./inside/installCommands/installRoles.js`)
    installRole.run(client, message, args)






    //msg to the user that the install is done
    message.channel.send(`**DONE**`)
}

