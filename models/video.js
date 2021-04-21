const mongoose = require('mongoose')
const Comment = require('./comment')

const videoSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 255},
    description: {type: String, required: true, minlength: 2, maxlength: 1000},
    comments: [{
        type: Comment,
        required: true
    }],
})

const Video = mongoose.model('Video', videoSchema)
module.exports = Video