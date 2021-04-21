const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 255},
    videoId: {type: Number, required: true},
    description: {type: String, required: true, minlength: 2, maxlength: 1000},
    comments: [{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 5000,
        default: {}
    }],
})

const Video = mongoose.model('Video', videoSchema)
module.exports = Video