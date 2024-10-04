const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_postgres_user',  // Replace with your PostgreSQL user
  host: 'localhost',
  database: 'backendx_db',     // Name of your database
  password: 'your_postgres_password',  // Replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;
