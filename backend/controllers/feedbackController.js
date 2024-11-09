const Feedback = require('../models/Feedback'); // Model for storing feedback
const VideoResponse = require('../models/VideoResponse'); // Assuming this model exists for video responses

// Submit video for AI analysis and feedback
exports.submitVideoForAnalysis = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No video file uploaded.');
    }
    try {
        // Simulated AI analysis logic
        // In a real scenario, here you would call an external AI service
        const analyzedFeedback = {
            clarity: 8,
            relevance: 7,
            confidence: 9
        };

        const feedback = new Feedback({
            user: req.user.id,
            videoResponseId: req.body.videoResponseId,
            ...analyzedFeedback
        });

        await feedback.save();
        res.status(201).json({ msg: 'Feedback generated', feedback });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Retrieve feedback for a video
exports.retrieveFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ videoResponseId: req.params.videoResponseId });
        if (!feedbacks) {
            return res.status(404).json({ msg: 'Feedback not found' });
        }
        res.json(feedbacks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Submit a custom question practice response
exports.submitCustomQuestion = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No video file uploaded.');
    }
    try {
        // Store the custom question video and potentially generate feedback
        const newCustomResponse = new VideoResponse({
            user: req.user.id,
            questionCustom: req.body.questionCustom, // Custom question text
            videoPath: req.file.path
        });

        await newCustomResponse.save();
        res.status(201).json({ msg: 'Custom question response submitted', customResponse: newCustomResponse });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
