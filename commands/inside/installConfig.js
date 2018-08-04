exports.run = (client) => {
  const fs = require("fs")
  let configJSON = JSON.parse(fs.readFileSync(`C:/Users/ASUS ROG/Discord Bots/FirstBot/config.json`, 'utf8'));

  let guildMap = [...client.guilds];
  let channelsMap = [...guildMap[0][1].channels];
  function checkExistence(){
    let channelQuantity = 0;
    if(configJSON.botChannel == "" || configJSON.botChannel == undefined){
      for(let k in channelsMap){
        if(channelsMap[k][1].name == 'bot-channel'){ 
          channelQuantity++
          configJSON.botChannel = channelsMap[k][1].id;
          configJSON = JSON.stringify(configJSON);
          updateChannel();
        }
      }
    }
  };
    
  function updateChannel(){
    fs.writeFile('C:/Users/ASUS ROG/Discord Bots/FirstBot/config.json', configJSON, (err) => {  
      if (err) throw err;
      console.log('botChannel Updated');
    })
  };

  checkExistence()
}