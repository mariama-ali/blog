const router = require('express').Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");

//Create REST API to return all users details
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});


//Create REST API to update user by id 
router.put("/:id", async (req, res) => {
    const userId = req.body.userId;
    if (userId === req.params.id) {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        return res.status(200).json(updatedUser);
    } else {    
        res.status(401).json("You can update only your account!");
    }
});

//Create REST API to delete user by id 
router.delete("/:id", async (req, res) => {
    const userId = req.body.userId;
    if (userId === req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        try {
          await Post.deleteMany({ username: user.username });
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User has been deleted...");
        } catch (err) {
            return res.status(500).json(err);
        }
      } catch (err) {
        return res.status(404).json("User not found");
      }
    } else {
      return res.status(401).json("You can delete only your account!");
    }
  });





module.exports = router;