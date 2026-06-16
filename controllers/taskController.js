// controllers/taskController.js
// This file contains the actual logic for each CRUD operation.
// Every function here talks to the MySQL database using parameterized
// queries, which protects us against SQL injection attacks.

const taskDb = require('../db');

// CREATE - Add a new task to the database
const createTask = async (req, res) => {
    try {
        const { title } = req.body;

        // Basic validation - we don't want empty tasks reaching the database
        if (!title || title.trim() === '') {
            return res.status(400).json({ message: 'Task title cannot be empty.' });
        }

        const [result] = await taskDb.query(
            'INSERT INTO tasks (title) VALUES (?)',
            [title]
        );

        res.status(201).json({
            message: 'Task created successfully.',
            taskId: result.insertId
        });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Something went wrong while creating the task.' });
    }
};

// READ - Get all tasks, newest first
const getAllTasks = async (req, res) => {
    try {
        const [allTasks] = await taskDb.query(
            'SELECT * FROM tasks ORDER BY created_at DESC'
        );
        res.status(200).json(allTasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Something went wrong while fetching tasks.' });
    }
};

// READ - Get a single task by its id
const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        const [taskResult] = await taskDb.query(
            'SELECT * FROM tasks WHERE id = ?',
            [id]
        );

        if (taskResult.length === 0) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        res.status(200).json(taskResult[0]);
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ message: 'Something went wrong while fetching the task.' });
    }
};

// UPDATE - Edit a task's title or completed status
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, is_completed } = req.body;

        const [existingTask] = await taskDb.query(
            'SELECT * FROM tasks WHERE id = ?',
            [id]
        );

        if (existingTask.length === 0) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        // Keep the old value if a new one wasn't provided
        const updatedTitle = title !== undefined ? title : existingTask[0].title;
        const updatedStatus = is_completed !== undefined ? is_completed : existingTask[0].is_completed;

        await taskDb.query(
            'UPDATE tasks SET title = ?, is_completed = ? WHERE id = ?',
            [updatedTitle, updatedStatus, id]
        );

        res.status(200).json({ message: 'Task updated successfully.' });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Something went wrong while updating the task.' });
    }
};

// DELETE - Remove a task permanently
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const [existingTask] = await taskDb.query(
            'SELECT * FROM tasks WHERE id = ?',
            [id]
        );

        if (existingTask.length === 0) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        await taskDb.query('DELETE FROM tasks WHERE id = ?', [id]);

        res.status(200).json({ message: 'Task deleted successfully.' });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Something went wrong while deleting the task.' });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};