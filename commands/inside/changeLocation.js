exports.run = (location, member, message) => {
    
    let locationData = require(`./data/allLocations.json`);
    location = location.toLowerCase();

    if (!locationData[location]){message.channel.send(`There is no such location.. Please try again. ${member}`); return}

    for(let k in locationData) {
        let o = locationData[k];
        checkExistence(o.offName);
    }

    function checkExistence(elm){
        if(member.roles.find("name", elm)){
            let oldLocation = member.roles.find("name", elm);
            member.removeRole(oldLocation).catch(console.error)
        }
    }
    function changeLocation(){
        let locationRole =  message.guild.roles.find("name", locationData[location].offName);
        if (!message.member.roles.has(locationRole.id)){
            member.addRole(locationRole)
            .then(message.channel.send(`Your Locations is now ${locationData[location].offName} ${member}`))
            .catch(console.error)
        }
    }
    changeLocation();

}