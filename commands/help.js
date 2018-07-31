exports.run = (client, message, args) => {

    let helpList = require("./inside/data/help.json")
    let listText = `There is all the command options you have: ${message.member} \n`;

    for(let k in helpList) {
        let o = helpList[k];
        addToTheList(o);
    }

    function addToTheList(elm){
        listText = listText + "\n" + "**Name: **" + elm.name + "\n" + "**Command: **" + elm.command + "\n" + "**Description: **" + elm.description + "\n";
    }

    message.channel.send(listText);
}
