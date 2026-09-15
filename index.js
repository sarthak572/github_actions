const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js Backend deployed via GitHub Actions locally!');
});
app.get('/health', (req, res) => {
  res.send('health of this system is perfectly fine now ');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
