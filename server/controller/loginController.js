const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const jwt= require("jsonwebtoken")
const dotenv  = require('dotenv');
dotenv.config();


async function  userLogin(req,res) {
    if(!req.body.username || !req.body.password){
        console.log(req.body.username)
        console.log(req.body.password)

        res.status(404).json({message:"Username or password can't be null"})
    }
    else {

        const username=req.body.username;
        const password = req.body.password;
        const potentialUser = await prisma.user.findFirst({
                where : { identificationNumber:username,
                            password:password
                }
            })
            .then(response => {
                console.log(response)
                if (!response){
                    res.status(404).json(response)
                    console.log(response)
                }
                else {

                    const token = jwt.sign({
                        tc:response.identificationNumber,
                        password:response.password,
                        id:response.id
                    },
                        process.env.TOKEN_KEY.toString(),
                        {expiresIn:'4h'})
                        res.status(200).json(token)
                    console.log(token)
                }
            })
            .catch(err=> console.log(err))

    }
}
module.exports=userLogin;