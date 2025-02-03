const express = require('express');
const router = express.Router();
const User = require('../models/User');



router.get('/', async (req, res) => {
    const users = await User.find();
    res.render('index', { users });
});


router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});


router.post('/users', async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }
    const newUser = new User({ name, email });
    await newUser.save();
    res.redirect('/');
});


router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.json({ message: "User deleted" });
});

module.exports = router;
