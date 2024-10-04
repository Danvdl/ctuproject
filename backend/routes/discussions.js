const express = require('express');
const pool = require('../config/db');
const router = express.Router();

// Create a new discussion
router.post('/', async (req, res) => {
  const { user_id, topic, content } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Discussions (user_id, topic, content) VALUES ($1, $2, $3) RETURNING *',
      [user_id, topic, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get all discussions
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Discussions ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
