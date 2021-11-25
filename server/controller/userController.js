const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express');



async function  getAllUsers(req,res)
{
    if(!req.user){
        res.status(401).json({error:"Unauthorized"})
    }
    try {
        await prisma.user.findMany()
            .then(result=> res.send(result).json())
    }
    catch (error){
        res.send(error);}
}



async function  getUser(req,res)
{
    try {
        await prisma.user.findFirst({
            where:{id:Number(req.params.id)}
        })
            .then(result=> res.send(result).json())
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
        res.json(result)
        console.log((result))
    }


catch (error){
    console.log(error)
}
}






module.exports={
    getAllUsers,
    getUser,
    addUser,



}