const mongoose = require('mongoose');
const Game = require('../src/models/Game');
const Campaign = require('../src/models/Campaign');

const gamesData = [
  { name: 'Test Game 1', description: 'Description for test game 1' },
  { name: 'Test Game 2', description: 'Description for test game 2' },
];

const campaignsData = [
  {
    game_id: null, // To be set after games are inserted
    name: 'Test Campaign 1',
    current_scenario: { scenario_id: '603d9d32b5e6c6a4f2a8b123', name: 'Scenario 1', status: 'not-started' },
    completed_scenarios: [],
    game_state: { unlocked_content: [], rules_modifications: [] },
  },
  {
    game_id: null, // To be set after games are inserted
    name: 'Test Campaign 2',
    current_scenario: { scenario_id: '603d9d32b5e6c6a4f2a8b456', name: 'Scenario 2', status: 'in-progress' },
    completed_scenarios: [],
    game_state: { unlocked_content: [], rules_modifications: [] },
  },
];

const setupTestData = async () => {
  // Insert games
  const createdGames = await Game.insertMany(gamesData);
  campaignsData[0].game_id = createdGames[0]._id;
  campaignsData[1].game_id = createdGames[1]._id;

  // Insert campaigns
  await Campaign.insertMany(campaignsData);
};

module.exports = setupTestData;
