const express = require('express');
const {getVideo, getAllVideos, addVideo, deleteVideo} = require("../controller/videoController");
const videoRouter = express();


videoRouter.get('/:id',getVideo);
videoRouter.get('/',getAllVideos)
videoRouter.post('/add',addVideo);
videoRouter.delete('/delete/:id',deleteVideo);




module.exports=videoRouter;
