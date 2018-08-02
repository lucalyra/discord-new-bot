exports.run = (client, message, args, isAdmin) => {

    let helpList = require("./inside/data/help.json")
    let listText = `There is all the command options you have: ${message.member} \n`;

    for(let k in helpList) {
        let o = helpList[k];
        if(isAdmin == helpList[k].admin || helpList[k].admin == false){
        addToTheList(o);
        }
    }

    function addToTheList(elm){
        listText = listText + "\n" + "**Name: **" + elm.name + "\n" + "**Command: **" + elm.command + "\n" + "**Description: **" + elm.description + "\n";
    }

    if(isAdmin){ message.author.send(listText); return }
    message.channel.send(listText);
}
