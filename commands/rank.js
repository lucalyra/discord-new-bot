exports.run = (client, message, args) => {

    let [rank, location] = args;
    let member = message.member;

    //run  change rank
    if(rank != undefined){ //check if it is empty
        rankFile = require(`./inside/changeRank.js`) //run changeRank function 
        rankFile.run(rank, member, message);
    } else { return };

    //run  change location
    if(location != undefined){ //check if it is empty
        loactionFile = require(`./inside/changeLocation.js`) //run changeLocation function 
        loactionFile.run(location, member, message);
    } else { return };

    return

}