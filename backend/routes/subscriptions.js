const express = require('express');
const pool = require('../config/db');
const router = express.Router();

// Subscribe to the newsletter
router.post('/', async (req, res) => {
  const { email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Subscriptions (email) VALUES ($1) RETURNING *',
      [email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
