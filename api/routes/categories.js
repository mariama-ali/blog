const router = require("express").Router();
const Category = require("../models/Category");

//Create REST API to add new categories 
router.post("/", async (req, res) => {
    try {
        const newCat = new Category(req.body);
        const savedCat = await newCat.save();
        return res.status(200).json({ success: true, savedCat });
    } catch (err) {
        return res.status(400).json({ success: false, err });
    }
});

//Create REST API to return all categories details
router.get("/", async (req, res) => {
    try {
        const cats = await Category.find();
        return res.status(200).json(cats);
    } catch (err) {
        return res.status(400).json({ success: false, err });
    }
});

module.exports = router;