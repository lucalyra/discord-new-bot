exports.run = (client, message, args) => {

    let guild = message.guild;
    let guildRoles = [...guild.roles];
    let botRoles = require('./inside/data/allRoles.json')
    message.channel.send(`I'm starting now, wait for me to tell you im "DONE"`)
    
    function startCreating(){
        for(let k in botRoles) {
            let botRole = botRoles[k];
            checkExistence(botRole);
        };
        message.channel.send(`DONE`)
        return
    } 
    
    function checkExistence(botRoleName){
        let roleLength = guildRoles.length;
        for(let k in guildRoles) {
            if(guildRoles[k][1].name !== botRoleName.offName){
                --roleLength;
            } 
        }

        if(roleLength == 0){
            createGuildRole(botRoleName);
        } else {message.channel.send(`${botRoleName.offName} alredy exist and was not created.`)}
    }

    function createGuildRole(newRole){
        guild.createRole({name: newRole.offName, color: newRole.color})
        message.channel.send(`New role was created - ${newRole.offName}`)
    }

    startCreating()
    
}

