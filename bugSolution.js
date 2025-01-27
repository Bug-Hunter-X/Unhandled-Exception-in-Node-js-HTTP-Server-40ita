const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Your server logic here
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  } catch (error) {
    console.error('Error occurred:', error);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}).on('error', err => {
  console.error('Server error:', err);
  // Handle server errors appropriately, e.g. exit the process or try again
});
