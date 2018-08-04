exports.run = (client, message, args, isAdmin) => {

    //install channel
    let guild = message.guild;
    let channelsMap = [...message.guild.channels]

    function createBotChannel(){
        if(checkExistence() == ""){
            guild.createChannel('bot-channel', 'text').then(newChannel => newChannel.send('New channel created.'))
        } else { message.channel.send(`Channel, **${checkExistence()}**, already exist and was not created.`)}
    }

    function checkExistence(){
        let x = "";
        for(let k in channelsMap){
            if(channelsMap[k][1].name == 'bot-channel'){ x = channelsMap[k][1].name }
        }
        return x
    }

    createBotChannel()

}