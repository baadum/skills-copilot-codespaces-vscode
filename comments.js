// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
app.post('/comments', (req, res) => {
  res.send('Create a comment');
});

// Read all comments
app.get('/comments', (req, res) => {
  res.send('Read all comments');
});

// Read one comment
app.get('/comments/:id', (req, res) => {
  res.send('Read one comment');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Update a comment');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});