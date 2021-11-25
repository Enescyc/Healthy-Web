
const express = require('express');
const {getAllUsers, getUser, addUser} = require("../controller/userController");
const router = express();


router.get('/',getAllUsers);
router.get('/:id',getUser);
router.post('/add',addUser)


module.exports=router;