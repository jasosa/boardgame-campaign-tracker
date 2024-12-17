const mongoose = require('mongoose');

// Define the Game schema
const gameSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    isCampaignBased: Boolean,
    players: {type: Number, required: true },
    isTrueSolo: Boolean,
    scenarios: [
      {
        scenario_id: mongoose.Schema.Types.ObjectId,
        name: String,
        status: {
          type: String,
          enum: ['not-started', 'in-progress', 'completed'],
          default: 'not-started',
        }
      }
    ],
    image: String, //Store image URL for now
  });
  
  // Create the Game model
  const Game = mongoose.model('Game', gameSchema);
  
  module.exports = Game;