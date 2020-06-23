const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');

router.get("/", auth, (req, res) => {
    console.log(req.user);
    res.send("Profile Route")
});

//@route  POST api/profile
//@desc   Create or update user profile
//@access Private
router.post(
  '/',
  [
    check('firstName', 'first name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('educationLevel', 'Education level is required').not().isEmpty(),
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const {
        firstName,
        lastName,
        occupation,
        educationLevel,
        certifications,
        location,
        social,
        summary,
      } = req.body;

      const userId = req.user.id;

      const profileFields = {
        firstName,
        lastName,
        name: `${firstName}` 
      };
      profileFields.user = userId;
      if (occupation) profileFields.occupation = occupation;
      if (certifications) profileFields.certifications = certifications;
      if (location) profileFields.location = location;
      if (summary) profileFields.summary = summary;

      profileFields.scoial = {};
      if (social.githubUrl) profileFields.social.githubUrl = githubUrl;
      if (social.twitterUrl) profileFields.social.twitterUrl = twitterUrl;
      if (social.youtubeUrl) profileFields.social.youtubeUrl = youtubeUrl;

      const profile = await Profile.create(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// get /self return logged in users profile data. authenticated route
// get /return all profiles - hacker challenge one -> exclude logged 
// in user from results. Hint: query hacker challenge 2 -> excluded location data
// Hint: Projections

module.exports = router;