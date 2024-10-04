const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres.udqbepnusewpimixjzih', // Supabase DB user
  host: 'aws-0-eu-central-1.pooler.supabase.com', // Supabase DB host
  database: 'postgres', // Supabase DB name
  password: 'PsgresAnJan103*', // Supabase DB password
  port: 6543, // Supabase default PostgreSQL port
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
    query: (text, params) => pool.query(text, params),
  };
