exports.run = (client, message, args) => {
    let [location] = args;
    let member = message.member;

    //run  change location
    if(location != undefined){
        loactionFile = require(`./inside/changeLocation.js`)
        loactionFile.run(location, member, message);
    } else { return };

}