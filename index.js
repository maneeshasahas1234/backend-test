const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Another route with JSON response
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
