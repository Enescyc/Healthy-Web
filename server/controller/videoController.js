const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function getVideo(req,res){
    await prisma.video.findMany({
        where:{id:Number(req.params.id)}
    }).then(result=> res.send(result).json())
        .catch(err=>res.status(err.status))
}
async function getAllVideos(req,res){
    await prisma.video.findMany()
        .then(result=> res.send(result).json())
        .catch(err=>res.status(err.status))

}
async function addVideo(req,res){
    const {title,content,url,count}=req.body;
    await prisma.video.create({
        data:{
            title,
            content,
            url,
            count,
        },
    },)
        .then(result=>console.log(result))
        .catch(err=>console.log(err));


}
async function deleteVideo(req,res){
    await prisma.video.delete({
        where: {id: Number(req.params.id)}
    })
        .then(result=> console.log(result))
        .catch(err=>console.log(err));

}
async function updateVideo(req,res){

}
module.exports={getVideo,addVideo,deleteVideo,getAllVideos,updateVideo};