const mongoose = require('mongoose');

//db connection
async function mydbconnection(url){
    return mongoose
        .connect(url)
        .then(()=>{
            console.log("Mongodb successfully connected");
        })
        .catch((err)=>{
            console.log("Could not connect to MongoDB ! DB Server Offline",err);
        })
    
}

module.exports = {
    mydbconnection
};