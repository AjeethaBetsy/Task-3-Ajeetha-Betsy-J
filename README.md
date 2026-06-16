# To-Do List API

A simple backend application built for Project 3 (Database Integration) of the DecodeLabs Full Stack Development Internship Kit. This project demonstrates connecting a Node.js + Express server to a MySQL database and performing complete CRUD (Create, Read, Update, Delete) operations.

## Tech Stack
- Node.js
- Express.js
- MySQL (via mysql2 package)
- dotenv (for environment variable management)

## Project Structure
todo-list-app/
├── server.js              # Entry point, starts the Express server
├── db.js                  # MySQL connection pool setup
├── routes/
│   └── taskRoutes.js      # API endpoint definitions
├── controllers/
│   └── taskController.js  # CRUD logic for tasks
├── .env                   # Database credentials (not uploaded to GitHub)
└── .gitignore              # Files/folders excluded from GitHub
## Database Schema
**Table: tasks**

| Column        | Type      | Constraint                  |
|---------------|-----------|------------------------------|
| id            | INT       | PRIMARY KEY, AUTO_INCREMENT |
| title         | VARCHAR(255) | NOT NULL                 |
| is_completed  | BOOLEAN   | DEFAULT FALSE                |
| created_at    | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP    |

## API Endpoints

| Method | Endpoint           | Description              |
|--------|---------------------|---------------------------|
| GET    | /api/tasks          | Get all tasks              |
| GET    | /api/tasks/:id       | Get a single task by id   |
| POST   | /api/tasks          | Create a new task          |
| PUT    | /api/tasks/:id       | Update a task by id        |
| DELETE | /api/tasks/:id       | Delete a task by id        |

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