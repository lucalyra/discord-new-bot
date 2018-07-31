exports.run = (client, message, args) => {
let rankData = require(`./inside/data/allRanks.json`);

let member = message.member;

for(let k in rankData) {
    let o = rankData[k];
    checkExistence(o.offName);
}

function checkExistence(elm){
    if(member.roles.find("name", elm)){
        let oldRank = member.roles.find("name", elm);
        member.removeRole(oldRank).catch(console.error)
    }
}

return

}

