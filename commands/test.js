exports.run = (client, message, args) => {
    
    let guild = message.guild;
    guild.createRole({name: "Test"})
    message.channel.send('done');
}
