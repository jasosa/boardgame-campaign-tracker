const mongoose = require('mongoose');

// Define the Game schema
const gameSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
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
    ]
  });
  
  // Create the Game model
  const Game = mongoose.model('Game', gameSchema);
  
  module.exports = Game;