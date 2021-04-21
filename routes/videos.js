const Video = require('../models/video');
const express = require('express')
const router = express.Router()

// All endpoints and route handlers go here!

router.post('/', async (req, res) => {
    try{
        // add validation middleware before posting. Need to make sure request is properly formatted
        const video = new Video({
            name: req.body.name,
            videoId: req.body.videoId,
            description: req.body.description,
        })

        await video.save();
        return res.send(video)
    } catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }

})

module.exports = router;