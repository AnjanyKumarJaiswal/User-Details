const fs = require('fs');


function loggedinfo(filename){
    return (req,res,next)=>{
        fs.appendFile('log.txt',`Date:${Date.now()} , IP:${req.ip} ${req.method}: ${req.path} \n`,
        (err,data)=>{
            next();
        });
    }
}

module.exports = {loggedinfo};