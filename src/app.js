const express = require('express');
const { connectToDatabase } = require('./db');
require('dotenv').config(); 

const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

const gameRoutes = require('./routes/games');
const campaignRoutes = require('./routes/campaigns');

// Connect to the database (only for non-test environments)
if (process.env.NODE_ENV !== 'test') {
    connectToDatabase().catch((err) => {
      console.error('Failed to connect to MongoDB', err);
      process.exit(1);
    });
}   

// Use routes
app.use('/api/games', gameRoutes);
app.use('/api/campaigns', campaignRoutes);

module.exports = app; // Export the app without starting the server