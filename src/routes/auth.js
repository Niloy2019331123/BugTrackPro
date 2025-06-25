const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const User = require('../models/User');

router.post('/register', authController.register);
router.post('/login', authController.login);

// GET /api/users - Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({}, '_id name'); // Only return _id and name
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router; 