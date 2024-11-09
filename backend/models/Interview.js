
const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['technical', 'behavioral', 'case', 'puzzle'],
        required: true
    },
    question: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }],
    difficultyLevel: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner'
    },
    suggestedTime: {
        type: Number, // in minutes
        default: 5
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resources: [{
        type: String // URLs to preparation materials or guides
    }]
});

module.exports = mongoose.model('Interview', InterviewSchema);
