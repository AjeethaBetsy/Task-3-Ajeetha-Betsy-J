// server.js
// This is the main entry point of our To-Do List backend.
// It sets up the Express server and connects our task routes to it.

const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 5000;

// This middleware lets our server understand JSON data sent in requests,
// for example when we create or update a task from the frontend or Postman.
app.use(express.json());

// Any request starting with /api/tasks will be handled by taskRoutes.
app.use('/api/tasks', taskRoutes);

// A simple welcome route to check if the server is alive.
app.get('/', (req, res) => {
    res.send('To-Do List API is running successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`);
});