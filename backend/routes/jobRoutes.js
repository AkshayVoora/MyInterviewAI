const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const auth = require('../middleware/auth');
const {
    submitJobDescription,
    updateJobDescription,
    getJobDescription,
    deleteJobDescription
} = require('../controllers/jobController');

// POST: Submit a new job description
router.post('/login', [auth, [
    check('title', 'Title is required').notEmpty(),
    check('description', 'Description is required').notEmpty()
]], submitJobDescription);

// PUT: Update an existing job description
router.put('/:id', [auth, [
    check('title', 'Title is required').notEmpty(),
    check('description', 'Description is required').notEmpty()
]], updateJobDescription);

router.post('/dashboard', [auth, upload.single('resume')], (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a resume file.' });
    }
    res.send({ message: 'Resume uploaded successfully!', file: req.file });
});

// GET: Retrieve a job description by ID
router.get('/:id', auth, getJobDescription);

// DELETE: Delete a job description
router.delete('/:id', auth, deleteJobDescription);

module.exports = router;
