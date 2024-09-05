require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());


// Import routes
const gameRoutes = require('./routes/Games');
const campaignRoutes = require('./routes/Campaigns');

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Boardgame Campaign Tracker API is running!');
});
// Use routes
app.use('/api/games', gameRoutes);
app.use('/api/campaigns', campaignRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});
