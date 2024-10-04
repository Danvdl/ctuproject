const express = require('express');
const multer = require('multer');
const pool = require('../config/db');
const router = express.Router();

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Upload a resource (file)
router.post('/', upload.single('file'), async (req, res) => {
  const file = req.file;
  try {
    const result = await pool.query(
      'INSERT INTO Resources (file_name, file_path, file_type) VALUES ($1, $2, $3) RETURNING *',
      [file.originalname, file.path, file.mimetype]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get all resources
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Resources ORDER BY uploaded_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
