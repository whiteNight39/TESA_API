const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON
app.use(express.json());


// Define routes
app.get('/', (req, res) => {
  res.send('Hello TESA People!');
});


app.get('/you', (req, res) => {
  res.send('Hi there!');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
