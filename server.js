import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'event_registration'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
  
  // Create table if not exists
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS registrations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      organization VARCHAR(255),
      phone VARCHAR(20) NOT NULL,
      comments TEXT,
      registrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  db.query(createTableQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Registrations table ready');
    }
  });
});

// API endpoint to save registration
app.post('/api/register', (req, res) => {
  const { name, email, organization, phone, comments } = req.body;
  
  const query = `
    INSERT INTO registrations 
    (name, email, organization, phone, comments)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  db.query(
    query, 
    [name, email, organization || '', phone, comments || ''],
    (err, results) => {
      if (err) {
        console.error('Error saving registration:', err);
        return res.status(500).json({ error: 'Database error', details: err.message });
      }
      
      return res.status(201).json({ 
        message: 'Registration successful', 
        registrationId: results.insertId 
      });
    }
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
