const express = require('express');
const {mydbconnection} = require('./dbconnection.js');

const {loggedinfo} =  require('./middleware');

const userRouter = require('./routes/myroutes.js');

const app = express();
const PORT = 3003;


//db connection
mydbconnection('mongodb://localhost:27017/user-details');

//Working with middlewares
app.use(express.json());

//middleware for logged users!!
app.use(loggedinfo('log.txt'));

//Routes middleware
app.use('/api/users',userRouter);

//Server
app.listen(PORT,()=>{
    console.log("You have started a web development Server \n");
    console.log(`Continue with this http://localhost:3003`);
})






