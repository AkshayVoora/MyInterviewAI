const Interview = require('../models/Interview'); // Model for storing interview questions and responses
const VideoResponse = require('../models/VideoResponse'); // Model for storing video responses

// Select interview type and fetch related questions
exports.selectInterviewType = async (req, res) => {
    const { type } = req.body; // 'technical' or 'behavioral'
    try {
        const questions = await Interview.find({ type });
        if (!questions.length) {
            return res.status(404).json({ msg: 'No questions found for this type' });
        }
        res.json(questions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Upload a video response to a question
exports.uploadVideoResponse = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No video file uploaded.');
    }
    try {
        const newVideoResponse = new VideoResponse({
            user: req.user.id, // Assuming user ID comes from auth middleware
            questionId: req.body.questionId,
            videoPath: req.file.path
        });
        await newVideoResponse.save();
        res.status(201).json({ msg: 'Video uploaded successfully', videoResponse: newVideoResponse });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// List questions for interview practice
exports.listQuestions = async (req, res) => {
    try {
        const questions = await Interview.find({});
        res.json(questions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
