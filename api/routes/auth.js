const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      const validated = await bcrypt.compare(req.body.password, user.password);
      
      !user && res.status(400).json("Wrong password/username");
      !validated && res.status(400).json("Wrong password/username");

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;