const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

// POST route to save user data
router.post('/submit', userController.saveUser);

// GET route to retrieve all users
router.get('/users', userController.getAllUsers);

module.exports = router;
