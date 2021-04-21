const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    user: {type: String, required: true, minlength: 2, maxlength: 255},
    commentText: {type: String, required: true, minlength: 2, maxlength: 1000},
    numberOfLikes: {type: Number, required: true}
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment