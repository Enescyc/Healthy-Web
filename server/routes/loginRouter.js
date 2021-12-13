
const express = require('express');
const userLogin= require('../controller/loginController')
const loginRouter = express();


loginRouter.post('/', userLogin)
loginRouter.get('/get',(req,res)=> {
    res.send("hello")
})


module.exports=loginRouter;