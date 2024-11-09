const express = require('express');
const router = express.Router();
const { selectInterviewType, uploadVideoResponse, listQuestions } = require('../controllers/interviewController');
const auth = require('../middleware/auth');
const multer = require('multer');

// Setup multer for video uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/videos/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// POST: Select interview type and retrieve related questions
router.post('/type', auth, selectInterviewType);

// POST: Upload a video response to an interview question
router.post('/video/upload', auth, upload.single('video'), uploadVideoResponse);

// GET: List all interview questions
router.get('/questions', auth, listQuestions);

module.exports = router;
