exports.run = (client, message, args) => {
    let locationData = require(`./inside/data/allLocations.json`);
    
    let member = message.member;

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

    return
    
    }
