exports.run = (rank, member, message) => {
   
    let rankData = require(`./data/allRanks.json`);
    rankLowerCase = rank.toLowerCase();
    
    if (!rankData[rankLowerCase]){message.channel.send(`There is no such rank.. Please try again ${member}`); return}
    
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

    function changeRank(){
        let rankRole =  message.guild.roles.find("name", rankData[rankLowerCase].offName);
        if (!message.member.roles.has(rankRole.id)){
            member.addRole(rankRole)
                .then(message.channel.send(`You are ${rankData[rankLowerCase].offName} now! ${member}`))
                .catch(console.error)
        }
    }
    changeRank()
}