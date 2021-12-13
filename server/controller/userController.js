const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()




async function  getAllUsers(req,res)
{

    try {
        await prisma.user.findMany()
            .then(result=> res.status(200).json(result))
    }
    catch (error){
        res.send(error);}
}



async function  getUser(req,res)
{
    try {
        await prisma.user.findUnique({
            where:{id:Number(req.params.id)}
        })
            .then(result=> res.status(200).json(result));
    }
    catch (error){
        res.send(error);}
}


async function addUser (req,res) {
    try {
        const {name,secondName,telephoneNumber,identificationNumber,password}=req.body;
        const result= await prisma.user.create({
            data:{
                name,
                secondName,
                identificationNumber,
                telephoneNumber,
                password,
            },
        },)
        res.status(200).json(result)

    }


catch (error){
    console.log(error)
}
}


async function deleteUser(req,res) {
    try {
       const user=await prisma.user.findUnique({
           where :{id: Number(req.params.id)}
       });
       console.log(user);
       if (!user)
       {
           const userVideo= await prisma.uservideo.findFirst({
               where: {userID: Number(user.id)}
           })
           console.log(userVideo);
           if(!userVideo){
               await prisma.uservideo.delete({
                   where: {id : Number(userVideo.id)}
               })
           }


       }
        await prisma.user.delete({
            where : {id: Number(req.params.id)}
        })

        res.status(200).json("Silinen Kullanıcı Bilgisi:"+user);


    }
    catch (error){
        res.status(404).json(error)
        console.log(error)
    }

}






module.exports={
    getAllUsers,
    getUser,
    addUser,
    deleteUser,



}