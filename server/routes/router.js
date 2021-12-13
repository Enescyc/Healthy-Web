
const express = require('express');
const {getAllUsers, getUser, addUser,deleteUser} = require("../controller/userController");
const router = express();


router.get('/',getAllUsers);
router.get('/:id',getUser);
router.post('/add',addUser)
router.delete('/delete/:id',deleteUser)




module.exports=router;