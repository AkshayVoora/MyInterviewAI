const Job = require('../models/Job'); // Make sure you have this model created.

// Submit a new job description
exports.submitJobDescription = async (req, res) => {
    const { title, description, requirements, salary } = req.body;
    try {
        const newJob = new Job({
            title,
            description,
            requirements,
            salary,
            creator: req.user.id // Assuming you are getting user's ID from the auth middleware
        });

        await newJob.save();
        res.status(201).json(newJob);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update an existing job description
exports.updateJobDescription = async (req, res) => {
    const { title, description, requirements, salary } = req.body;
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }

        // Check user
        if (job.creator.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        job.title = title || job.title;
        job.description = description || job.description;
        job.requirements = requirements || job.requirements;
        job.salary = salary || job.salary;

        await job.save();
        res.json(job);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.status(500).send('Server error');
    }
};

// Fetch a single job description
exports.getJobDescription = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.json(job);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.status(500).send('Server error');
    }
};

// Delete a job description
exports.deleteJobDescription = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'Job not found' });
        }

        // Check user
        if (job.creator.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await job.remove();
        res.json({ msg: 'Job removed' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Job not found' });
        }
        res.status(500).send('Server error');
    }
};
