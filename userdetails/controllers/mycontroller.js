const mongoose = require('mongoose');
const userschema = require('../models/userSchema');


async function handlerforallusers(req,res){
    const alldbuser = await userschema.find();
    return res.json(alldbuser);
}

async function getuserbyid(req,res){
    const myuser = await userschema.findById(req.params.id);
        if(!myuser) { 
            return res.status(404).json({err: "there was a error did not find the user!!"})
        };
        return res.json(myuser);
}

async function updateuserbyid(req,res){
    await userschema.findByIdAndUpdate(req.params.id,{lastname: "Changed"})
        return res.json({Status: "Success"})
}
async function deluserbyid(req,res){
    await userschema.findByIdAndDelete(req.params.id);
        return res.json({status: "pending to delete a user!"});
}

async function createuserbyid(req,res){
    const body = req.body;
    // checking if the required thing is filled or not
    if(!body.username ||
        !body.lastname||
        !body.email ||
        !body.pass
        ){
            return res.status(404).json({Status:"ALL must be filled to enter the data!"});
        }
    // creating a new user !!
    const result = await userschema.create({
        username: body.username,
        lastname: body.lastname,
        email: body.email,
        pass: body.pass
    });
    console.log("result:",result);
    return res.status(201).json({Status:"Success in creating a new user!"});
};

module.exports = {
    handlerforallusers,
    getuserbyid,
    updateuserbyid,
    deluserbyid,
    createuserbyid
};