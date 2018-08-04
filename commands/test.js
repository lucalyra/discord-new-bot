exports.run = (client, message, args, isAdmin) => {
   
    let locationData = require(`./inside/data/allRoles.json`);

    locationData.bronze.position = "test"
    console.log(locationData.bronze.position);
}




