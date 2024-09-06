const request = require("supertest")
const app = require('../src/app'); // Your Express app

describe ("Get all games test", () => {
    it('should get all games', async () => {
    const response = await request(app)
      .get('/api/games')
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
    });
});

// describe('API Tests', () => {
//   let server;

//   beforeAll((done) => {
//     server = app.listen(3001, done); // Start the server and store the instance    
//   });

//   afterAll((done) => {
//     server.close(done); // Close the server after all tests
//   });

//   it('should get all games', async () => {
//     const response = await request(app)
//       .get('/api/games')
//       .expect(200);

//     expect(response.body.length).toBeGreaterThan(0);
//   });

//   it('should create a new campaign', async () => {
//     const response = await request(app)
//       .post('/api/campaigns')
//       .send({
//         game_id: '603d9d32b5e6c6a4f2a8b123', // Use a valid game ID from your test data
//         name: 'New Campaign',
//         current_scenario: { scenario_id: '603d9d32b5e6c6a4f2a8b789', name: 'New Scenario', status: 'not-started' },
//         completed_scenarios: [],
//         game_state: { unlocked_content: [], rules_modifications: [] },
//       })
//       .expect(201);

//     expect(response.body).toHaveProperty('name', 'New Campaign');
//   });
// });
