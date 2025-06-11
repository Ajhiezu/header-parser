const express = require('express');
const app = express();
const port = 3000;

// Serve static files (optional landing page)
app.use(express.static('public'));

app.get('/api/whoami', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ip.split(',')[0],  // First IP in forwarded list
    language: language,
    software: software
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
