const mongoose = require('mongoose');

let isConnected = false; // Keep track of the connection state

const connectToDatabase = async () => {
    if (isConnected) return; // If already connected, skip
  
    const mongoURI = process.env.MONGO_URI;
    console.log(`Connecting to MongoDB: ${mongoURI}`);
  
    await mongoose.connect(mongoURI, {});
  
    isConnected = true;
    console.log('MongoDB connected');
  };

  const disconnectFromDatabase = async () => {
    if (!isConnected) return;
  
    await mongoose.connection.close();
    isConnected = false;
    console.log('MongoDB connection closed');
  };

  module.exports = {
    connectToDatabase,
    disconnectFromDatabase,
  };