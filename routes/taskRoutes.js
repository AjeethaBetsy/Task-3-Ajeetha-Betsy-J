// routes/taskRoutes.js
// This file maps each URL + HTTP method to a specific controller function.
// It keeps our server.js clean and organizes all task-related endpoints together.

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// GET all tasks
router.get('/', taskController.getAllTasks);

// GET a single task by its id
router.get('/:id', taskController.getTaskById);

// POST a new task
router.post('/', taskController.createTask);

// PUT (update) an existing task by its id
router.put('/:id', taskController.updateTask);

// DELETE a task by its id
router.delete('/:id', taskController.deleteTask);

module.exports = router;