exports.run = (client, message, args) => {
let rankData = require(`./inside/data/allRoles.json`);

let member = message.member;

//
for(let k in rankData) {
    let o = rankData[k];
    if(o.type == "rank"){
    checkExistence(o.offName);
    }
}

function checkExistence(elm){
    if(member.roles.find("name", elm)){
        let oldRank = member.roles.find("name", elm);
        member.removeRole(oldRank).then(message.channel.send(`Your rank, ${elm}, was removed. ${member}`)).catch(console.error)

    }
}

return

}

