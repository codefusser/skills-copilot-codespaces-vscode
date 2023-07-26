// create web server

// Import the http module
const http = require('http');

// Create the server
const server = http.createServer((request, response) => {
  // Set the response headers
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response content
  response.write('Hello, World!');

  // End the response
  response.end();
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
