require('dotenv').config({ path: '.env.test' }); // Load test environment variables

//console.log('MONGO_URI_TEST:', process.env.MONGO_URI);

const mongoose = require('mongoose');
const setupTestData = require('./fixtures'); // Your test data setup script

beforeAll(async () => {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    throw new Error('MONGO_URI not defined in .env.test');
  }

   // Connect to MongoDB
   await mongoose.connect(mongoURI, {}); 
   
   const db = mongoose.connection;
   db.once('open', () => console.log('Connected to MongoDB successfully'));
 
   // Drop the database
   await db.dropDatabase();  
   await setupTestData();
});

afterAll(async () => {
  await mongoose.connection.close();
});
