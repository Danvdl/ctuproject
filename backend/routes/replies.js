const express = require('express');
const pool = require('../config/db');
const router = express.Router();

// Create a reply
router.post('/', async (req, res) => {
  const { discussion_id, user_id, content } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Replies (discussion_id, user_id, content) VALUES ($1, $2, $3) RETURNING *',
      [discussion_id, user_id, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get all replies for a discussion
router.get('/:discussion_id', async (req, res) => {
  const { discussion_id } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM Replies WHERE discussion_id = $1 ORDER BY created_at DESC',
      [discussion_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
