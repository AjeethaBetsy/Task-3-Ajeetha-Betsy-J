# To-Do List API

A simple RESTful backend API built with Node.js, Express, and MySQL, developed as part of the Full Stack Development Industrial Training Kit (Project 3: Database Integration).

## Description

This API allows users to manage a list of tasks with persistent storage in a MySQL database. It demonstrates core backend concepts including database schema design, CRUD (Create, Read, Update, Delete) operations, RESTful endpoint design, and protection against SQL injection using parameterized queries.

## Features

- Retrieve all tasks
- Retrieve a single task by ID
- Add a new task (with title validation)
- Update an existing task's title or completion status
- Delete a task

## Tech Stack

- Node.js
- Express.js
- MySQL (via mysql2 package)
- dotenv (for environment variable management)

## Project Structure
todo-list-app/
├── server.js               # Entry point, starts the Express server
├── db.js                    # MySQL connection pool setup
├── routes/
│   └── taskRoutes.js        # API endpoint definitions
├── controllers/
│   └── taskController.js    # CRUD logic for tasks
├── .env                      # Database credentials (not uploaded to GitHub)
└── .gitignore                # Files/folders excluded from GitHub
## Database Schema

**Table: tasks**

| Column        | Type         | Constraint                   |
|----------------|--------------|-------------------------------|
| id             | INT          | PRIMARY KEY, AUTO_INCREMENT  |
| title          | VARCHAR(255) | NOT NULL                     |
| is_completed   | BOOLEAN      | DEFAULT FALSE                |
| created_at     | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP    |

## API Endpoints

| Method | Endpoint        | Description              |
|--------|------------------|---------------------------|
| GET    | /api/tasks       | Get all tasks              |
| GET    | /api/tasks/:id   | Get a single task by id    |
| POST   | /api/tasks       | Create a new task           |
| PUT    | /api/tasks/:id   | Update a task by id         |
| DELETE | /api/tasks/:id   | Delete a task by id         |

## How to Run Locally

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a `.env` file with your own database credentials:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todo_app
DB_PORT=3306
4. Create the `tasks` table in MySQL using the schema above
5. Run `node server.js`
6. Test endpoints using Postman at `http://localhost:5000/api/tasks`

## Security Notes

- All database queries use parameterized queries (`?` placeholders) to prevent SQL injection
- The `title` field is enforced as NOT NULL at the schema level
- Sensitive credentials are stored in `.env` and excluded from version control via `.gitignore`

## Author

**Ajeetha Betsy**