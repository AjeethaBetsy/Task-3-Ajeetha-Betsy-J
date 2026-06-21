# 📝 To-Do List API

A RESTful backend API built with **Node.js**, **Express**, and **MySQL**, developed as part of the Full Stack Development Industrial Training Kit — **Project 3: Database Integration**.

---

## 🎯 Project Objective

This project demonstrates the ability to design a relational database schema, connect a Node.js backend to MySQL, and implement complete CRUD (Create, Read, Update, Delete) functionality through a RESTful API — while applying secure coding practices such as parameterized queries and input validation.

---

## 🚀 Features

- Create new tasks with title validation
- Retrieve all tasks or a single task by ID
- Update a task's title or completion status
- Delete a task permanently
- Centralized MySQL connection pooling for efficient database access
- Protection against SQL injection via parameterized queries
- Environment-based configuration using `.env`

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework / routing |
| MySQL | Relational database |
| mysql2 | MySQL driver with Promise support |
| dotenv | Environment variable management |

---

## 📁 Project Structure
```
todo-list-app/
├── server.js                     # Entry point, starts the Express server
├── db.js                         # MySQL connection pool setup
├── routes/
│   └── taskRoutes.js             # API endpoint definitions
├── controllers/
│   └── taskController.js         # CRUD business logic
├── To-Do-List-API-Screenshots/   # Testing and verification screenshots
├── .env                          # Database credentials (excluded from GitHub)
└── .gitignore                    # Files/folders excluded from version control
```

---

## ⚙️ Installation and Setup

1. Clone this repository
2. Run npm install to install dependencies
3. Create a .env file in the root directory with your database credentials:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todo_app
DB_PORT=3306
4. Create the tasks table in MySQL using the schema above
5. Run node server.js
6. Test endpoints using Postman at http://localhost:5000/api/tasks

---

## 🗄 Database Schema

**Table: `tasks`**

| Column | Type | Constraint |
|--------|------|------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| title | VARCHAR(255) | NOT NULL |
| is_completed | BOOLEAN | DEFAULT FALSE |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

**SQL used to create the table:**

```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📌 API Endpoints

| Method | Endpoint | Description | Success Status |
|--------|----------|--------------|-----------------|
| GET | /api/tasks | Get all tasks | 200 OK |
| GET | /api/tasks/:id | Get a single task by ID | 200 OK |
| POST | /api/tasks | Create a new task | 201 Created |
| PUT | /api/tasks/:id | Update a task by ID | 200 OK |
| DELETE | /api/tasks/:id | Delete a task by ID | 200 OK |

## 📤 HTTP Status Codes Used

| Code | Meaning |
|------|---------|
| 200 | Request successful |
| 201 | Resource created successfully |
| 400 | Invalid request, such as an empty title |
| 404 | Task not found |
| 500 | Server or database error |



## 🔒 Security Measures

- SQL Injection Prevention: every database query uses parameterized placeholders instead of string concatenation, ensuring user input is never executed as SQL code
- Input Validation: the API rejects empty or missing task titles with a 400 Bad Request before reaching the database
- Schema-Level Integrity: the title column is enforced as NOT NULL directly in MySQL
- Credential Isolation: database credentials are stored in .env and excluded from version control via .gitignore

## 📸 Screenshots

Testing and verification screenshots are available in the To-Do-List-API-Screenshots folder, covering server startup, database schema verification, and all CRUD operations.

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| express | Web server and routing |
| mysql2 | MySQL database driver with Promise support |
| dotenv | Loads environment variables from .env |

## 🚧 Future Enhancements

- Add user authentication so tasks are scoped per user
- Add due dates and priority levels for tasks
- Add pagination and search support for the task list
- Write automated tests for each endpoint
- Deploy to a cloud platform with a managed MySQL instance

## 👩‍💻 Author

**Ajeetha Betsy**
