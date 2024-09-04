const mongoose = require('mongoose');

// Define the Campaign schema
const campaignSchema = new mongoose.Schema({
  game_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  current_scenario: {
    scenario_id: mongoose.Schema.Types.ObjectId,
    name: String,
    status: {
      type: String,
      enum: ['not-started', 'in-progress', 'completed'],
      default: 'not-started',
    }
  },
  completed_scenarios: [
    {
      scenario_id: mongoose.Schema.Types.ObjectId,
      name: String,
      completed_at: Date,
    }
  ],
  game_state: {
    unlocked_content: [String],
    rules_modifications: [String],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  }
});

// Create the Campaign model
const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
