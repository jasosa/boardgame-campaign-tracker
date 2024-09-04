require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
// const Campaign = require('./models/Campaign');
// const Game = require('./models/game');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Boardgame Campaign Tracker API is running!');
});

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


// // Test creating a Game
// const testGame = new Game({
//   name: 'Journeyis in middle Earth',
//   description: 'A cooperative game of adventure',
//   scenarios: [],
// });

// testGame.save().then(game => {
//     console.log('Game saved:', game);

//     // Test creating a Campaign
//   const testCampaign = new Campaign({
//     game_id: game._id,
//     name: 'Journeys in middle Earth - Sendas Sombrias',
//     current_scenario: {
//       scenario_id: new mongoose.Types.ObjectId(),
//       name: 'Black Barrow',
//       status: 'in-progress',
//     },
//     completed_scenarios: [],
//     game_state: {
//       unlocked_content: [],
//       rules_modifications: [],
//     },
//   });

//   testCampaign.save().then(campaign => {
//     console.log('Campaign saved:', campaign);
//   }).catch(err => {
//     console.error('Error:', err.message);
//   })
// });