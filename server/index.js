const express = require('express')
const dotenv  = require('dotenv');
const cors = require ('cors')
const app=express();
const userRouter = require('./routes/router.js')
const videoRouter = require("./routes/videoRouter.js");
const loginRouter = require("./routes/loginRouter.js");
const auth= require("./middleware/auth")

dotenv.config()


app.use(express.json())
app.use(cors("*"))
app.use(express.urlencoded({extended:false}))

app.use('/api/user',userRouter)
app.use('/api/video',auth,videoRouter)
app.use('/api/login',loginRouter)


app.get('/',(req,res)=>{
    res.send("Hello from API")
})

app.listen(process.env.PORT,()=>{
    console.log("hello"+ process.env.PORT)

})
