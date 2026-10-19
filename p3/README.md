# P3 – User Signup Page Using MERN Stack

## Objective

To develop a user signup application using React.js, Express.js, REST APIs, and MongoDB. The application allows users to submit their details through a signup form and stores the information in a MongoDB database, with passwords hashed before storage.

## Technologies Used

- **React.js** – Builds the frontend signup interface.
- **Node.js** – Provides the JavaScript runtime for the backend.
- **Express.js** – Handles server-side logic and HTTP requests.
- **REST API** – Enables communication between the frontend and backend.
- **MongoDB** – Stores user information.
- **Mongoose** – Connects the backend to MongoDB and manages database operations.
- **bcryptjs** – Hashes passwords before storing them.

## Features

- User signup form with a frontend interface.
- Communication between the React frontend and Express backend.
- User information stored in MongoDB.
- Password hashing using `bcryptjs`.
- Signup endpoint: `POST /api/signup`.

## Project Structure

```text
p3/
├── README.md
├── client/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
└── server/
    ├── package.json
    ├── package-lock.json
    ├── server.js
    └── models/
        └── user.js
```

## Database

The application uses MongoDB with a database named `signupDB`. The backend connects to the local MongoDB instance using Mongoose.

Ensure that MongoDB is running before starting the application.

## How to Run the Project

### 1. Start the Backend

Open a terminal in the project directory and run:

```bash
cd p3/server
npm install
node server.js
```

### 2. Start the Frontend

Open a second terminal in the project directory and run:

```bash
cd p3/client
npm install
npm run dev
```

### 3. Open the Application

Open the local URL displayed in the frontend terminal by Vite in your browser. Make sure the backend server and MongoDB are running before testing the signup functionality.

## Learning Outcomes

This assignment demonstrates how to:

- Build a user signup interface using React.js.
- Develop backend functionality using Node.js and Express.js.
- Create and use REST API endpoints.
- Connect a backend application to MongoDB using Mongoose.
- Hash passwords using `bcryptjs` before storing them.
- Integrate frontend and backend components in a MERN stack application.
