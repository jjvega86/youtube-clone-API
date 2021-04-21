const mongoose = require('mongoose')
const Joi = require('joi')

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

function validateVideo(video){
    const schema = Joi.object({
        name: Joi.string().min(2).max(255).required(),
        videoId: Joi.number().required(),
        description: Joi.string().min(2).max(1000).required()
    });

    return schema.validate(video);
}
exports.Video = Video
exports.validate = validateVideo;
exports.videoSchema = videoSchema;