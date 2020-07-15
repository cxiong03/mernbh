const express = require ('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/posts/test
// @desc    Test route
// @access  Public
router.get('/test', (req, res) => { 
    res.json({ message: 'This is the test route' });
});

// @route   POST api/posts
// @desc    create a new post
// @access  Private
router.post('/', auth, [
    check('author', 'Author is required').notEmpty(),
    check('skillLevel', 'Skill Level is required').notEmpty(),
    check('skillLevel', 'Select from dropdown').isIn([
        'Beginner',
        'Intermediate',
        'Advanced',
        'Associate',
        'Junior',
        'Senior',
        'Lead',
    ]),
    check('title', 'Title is required').notEmpty(),
    check('link', 'A link is required').notEmpty(),
    check('link', 'Valid URL is required').isURL(),
    check('resourceType', 'Valid resource is required').notEmpty(),
    check('resourceType', 'Select from dropdown').isIn([
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
    ]),
    check('cost', 'Cost is required').notEmpty(),
    check('cost', 'A valid number is required').isNumeric(),
    check('publishedAt', 'Date is required').optional().isISO8601(),
    check('videoLength', 'Video length must be a number').optional().isNumeric(),
    check('timeToComplete', 'Time to complete must be a number').optional().isNumeric()

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json(req.body);
});

// videoLength => optional => number
// timeToComplete => optional => number

module.exports = router;