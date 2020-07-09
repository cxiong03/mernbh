const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    profile: {
        type: Schema.Types.ObjecId,
        ref: 'profiles',
    },
    text: String,
    // TODO likes maybe dislikes too
}, {timestamps: {}})

const postSchema = new Schema({
    poster: {
        type: Schema.Types.ObjecId,
        ref: 'profiles'
    },
    author: String,
    skillLevel: {
        type: String,
        enum: [
            'Beginner',
            'Intermediate',
            'Advanced',
            'Associate',
            'Junior',
            'Senior',
            'Lead',
        ],
    },
    cohort: String,
    title: String,
    categories: {type: [String], default: []},
    summary: String,
    link: String,
    resourceType: {
        type: 'String',
        enum: [
            'Article',
            'Video',
            'Slideshow',
            'Book',
            'eBook',
            'PDF',
            'Podcast',
            'Website',
            'Newsletter',
            'Blog',
            'Other'
        ]
    },
    publishedAt: Date,
    videoLength: Number,
    timeToComplete: Number,
    comments: {type: [commentSchema], default: []},
    cost: Number
    // TODO rating
});

module.exports = Post = mongoose.model('posts', postSchema);