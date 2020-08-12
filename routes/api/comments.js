const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Post = require("../../models/Post");
const User = require("../../models/User");
const Profile = require("../../models/Profile");

// @route  POST api/posts/comments/:postID
// @desc   create a new comment for the given post
// @access private

router.post("/:postID", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res.status(400).json({ msg: "Prfoile required " });
    }
    const comment = { text: req.body.text, profile: profile.id };
    const post = await Post.findByIdAndUpdate(
      req.params.postID,
      { $push: { comments: comment } },
      { new: true }
    );
    return res.json(post.comments);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// @route  DELETE api/posts/comments/:postID/:commentID
// @desc   find and delete a specific comment from a post
// @access owner
