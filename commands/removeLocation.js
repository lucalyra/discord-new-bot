exports.run = (client, message, args) => {
    let locationData = require(`./inside/data/allRoles.json`);

    
    let member = message.member;

    for(let k in locationData) {
        let o = locationData[k];
        if(o.type == "location"){
            checkExistence(o.offName);
        }
    }
    
    function checkExistence(elm){
        if(member.roles.find("name", elm)){
            let oldLocation = member.roles.find("name", elm);
            member.removeRole(oldLocation).then(message.channel.send(`Your location, ${elm}, was removed. ${member}`)).catch(console.error)
        }
    }

    return
    
    }
