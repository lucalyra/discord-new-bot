exports.run = (client, message, args) => {

    let [rank, location] = args;
    let member = message.member;

    if(rank != undefined){
        rankFile = require(`./inside/changeRank.js`)
        rankFile.run(rank, member, message);
    } else { return };

    if(location != undefined){
        loactionFile = require(`./inside/changeLocation.js`)
        loactionFile.run(location, member, message);
    } else { return };

    return

}