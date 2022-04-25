const router = require('express').Router();
const Post = require("../models/Post");


//Create REST API to add new posts 
router.post("/", async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    } catch (err) {
        return res.status(400).json({ success: false, err });
    }
});

//Create REST API to return all posts details
router.get("/", (req, res) => {
    Post.find().exec((err, posts) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json(posts);
    })
});

//Create REST API to return posts by id 
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch (err) {
        return res.status(400).json({ success: false, err });
    }
});

//Create REST API to update posts by id 
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id, { $set: req.body }, { new: true }
            );
            return res.status(200).json({ success: true, updatedPost });
        } else {
            return res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
          await post.delete();
          return res.status(200).json("Post has been deleted...");
      } else {
        return res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
        return res.status(500).json(err);
    }
  });

module.exports = router;