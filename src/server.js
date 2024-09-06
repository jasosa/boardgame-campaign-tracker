// server.js
const app = require('./app'); // Import the configured Express app

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)

function gracefulShutdown (signal) {
  if (signal) console.log(`\nReceived signal ${signal}`)
  console.log('Gracefully closing http server')

  try {
    server.close(function (err) {
      if (err) {
        console.error('There was an error', err.message)
        process.exit(1)
      } else {
        console.log('http server closed successfully. Exiting!')
        process.exit(0)
      }
    })

    // closeAllConnections() is only available from Node v18.02
    if (server.closeAllConnections) server.closeAllConnections()
    else setTimeout(() => process.exit(0), 5000)

  } catch (err) {
    console.error('There was an error', err.message)
    setTimeout(() => process.exit(1), 500)
  }
};