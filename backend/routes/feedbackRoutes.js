const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const {
    submitVideoForAnalysis,
    retrieveFeedback,
    submitCustomQuestion
} = require('../controllers/feedbackController');

// Setup multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/feedback/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

// POST: Submit video for AI analysis and feedback
router.post('/submit', auth, upload.single('video'), submitVideoForAnalysis);

// GET: Retrieve feedback for a specific video
router.get('/:videoResponseId', auth, retrieveFeedback);

// POST: Submit a custom question and its video response
router.post('/custom', auth, upload.single('video'), submitCustomQuestion);

module.exports = router;
