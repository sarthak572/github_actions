const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello froDocke   rized Node.js Backend!');
});

// A new route to test our environment variables / secrets
app.get('/status', (req, res) => {
  // We will inject this password securely via GitHub Secrets!
  const dbPassword = process.env.DB_PASSWORD;
  
  if (dbPassword) {
    res.send(`Secure backend is running! We connected to the database with password: ${dbPassword}`);
  } else {
    res.send('Warning: No DB_PASSWORD provided in environment variables! Server is running insecurely.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
