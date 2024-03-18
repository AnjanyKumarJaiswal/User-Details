const express = require('express');
const userschema = require('../models/userSchema');
const {
    handlerforallusers,
    getuserbyid,
    updateuserbyid,
    deluserbyid,
    createuserbyid} = require('../controllers/mycontroller');

const router = express.Router();


//Routes
router
    .route('/')
    .get(handlerforallusers)
    .post(createuserbyid);
//REST API 
router
    .route('/:id')
    .get(getuserbyid)
    .patch(updateuserbyid)
    .delete(deluserbyid);

module.exports = router;



