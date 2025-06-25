const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (to be added)
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/projects'));
app.use('/api', require('./routes/issues'));
// app.use('/api/users', require('./routes/users'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'BugTrackPro API is running.' });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app; 