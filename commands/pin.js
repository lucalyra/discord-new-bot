exports.run = (client, message, args, isAdmin) => {


    //pin a message
    if(isAdmin){
    let [text] = args;
    message.channel.send(text)
        .then(toPin => toPin.pin())
        .catch(console.error);
    }
}
