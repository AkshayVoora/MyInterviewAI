const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    videoResponseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VideoResponse',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    scores: {
        clarity: {
            type: Number,
            required: true
        },
        relevance: {
            type: Number,
            required: true
        },
        confidence: {
            type: Number,
            required: true
        }
    },
    comments: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
