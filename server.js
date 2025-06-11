const express = require('express');
const app = express();

// Enable proxy trust if hosted behind a proxy (like on Replit, Render, etc.)
app.set('trust proxy', true);

app.get('/api/whoami', (req, res) => {
  const ip = req.ip;
  const language = req.get('Accept-Language');
  const software = req.get('User-Agent');

  res.json({
    ipaddress: ip,
    language: language,
    software: software
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
