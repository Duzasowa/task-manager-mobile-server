# Task Manager Mobile server

This is the backend for the Task Manager application built using NestJS. It provides a RESTful API for managing tasks.

## Features

- Create, read, update, and delete tasks
- CORS enabled for all origins
- Global validation for request payloads
- Detailed error handling with appropriate HTTP status codes

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL (or any other database supported by Prisma)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/task-manager-backend.git
   cd task-manager-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure the environment variables:
   Modify a `.env` file in the root directory and add your database connection string:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/taskmanager"
   PORT=5000
   ```

4. Set up the database with Prisma:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

2. The server will be running at `http://localhost:5000`.

## API Endpoints

### Create a Task

- **URL:** `/tasks`
- **Method:** `POST`
- **Body:**
  ```json
  {
      "title": "Task Title",
      "description": "Task Description",
      "status": "PENDING" | "IN_PROGRESS" | "COMPLETED"
  }
  ```
- **Response:** `201 Created`
  ```json
  {
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "status": "PENDING"
  }
  ```

### Get All Tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Response:** `200 OK`
  ```json
  [
    {
      "id": 1,
      "title": "Task Title",
      "description": "Task Description",
      "status": "PENDING"
    }
  ]
  ```

### Get Task by ID

- **URL:** `/tasks/:id`
- **Method:** `GET`
- **Response:** `200 OK`
  ```json
  {
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "status": "PENDING"
  }
  ```

### Update a Task

- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Body:**
  ```json
  {
      "title": "Updated Title",
      "description": "Updated Description",
      "status": "PENDING" | "IN_PROGRESS" | "COMPLETED"
  }
  ```
- **Response:** `200 OK`
  ```json
  {
    "id": 1,
    "title": "Updated Title",
    "description": "Updated Description",
    "status": "IN_PROGRESS"
  }
  ```

### Delete a Task

- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Response:** `200 OK`
  ```json
  {
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "status": "PENDING"
  }
  ```

## Error Handling

The API provides meaningful error messages and appropriate HTTP status codes for different error scenarios. For instance:

- `400 Bad Request` for validation errors
- `404 Not Found` for missing resources
- `500 Internal Server Error` for unexpected server errors
