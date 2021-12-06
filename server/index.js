const express = require('express')
const dotenv  = require('dotenv');
const cors = require ('cors')
const app=express();

const userRouter = require('./routes/router.js')
const videoRouter = require("./routes/videoRouter");

dotenv.config()


app.use(express.json())

app.use(cors("*"))

app.use(express.urlencoded({extended:false}))

app.use('/api/user',userRouter)
app.use('/api/video',videoRouter)


app.get('/',(req,res)=>{
    res.send("hello from api")
})

app.listen(process.env.PORT,()=>{
    console.log("hello"+ process.env.PORT)

})
