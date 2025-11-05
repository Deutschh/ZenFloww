// src/config/database.js
const { Pool } = require('pg');
require('dotenv').config();

// TESTE DE SANIDADE: Vamos imprimir a variável no console
console.log('DATABASE_URL lida pelo Node:', process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};