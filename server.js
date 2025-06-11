const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS (optional for freeCodeCamp projects)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// API endpoint
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// Serve the homepage (optional)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});