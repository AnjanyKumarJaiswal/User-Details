const mongoose = require('mongoose');




//User Schema
const schema = mongoose.Schema;

const webUser = new schema({
    username: {
        type: String, 
        required: true},
    lastname: {
        type: String,
        required: true},
    email: {
        type: String,
        required: true},
    pass:{
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true});

//model
const userschema = mongoose.model('Users',webUser);

module.exports = userschema;