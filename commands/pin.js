exports.run = (client, message, args) => {


    let [text] = args;
    message.channel.send(text)
        .then(toPin => toPin.pin())
        .catch(console.error);
       
}
