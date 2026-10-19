\# P3 – User Signup Page Using MERN Stack



\## Objective



To develop a user signup page using React, Express.js, REST APIs, and MongoDB.



\## Technologies Used



\- \*\*React.js:\*\* Creates the frontend signup interface.

\- \*\*Node.js:\*\* Provides the JavaScript runtime for the backend.

\- \*\*Express.js:\*\* Handles backend routes and HTTP requests.

\- \*\*REST API:\*\* Enables communication between the frontend and backend.

\- \*\*MongoDB:\*\* Stores user information.

\- \*\*Mongoose:\*\* Connects the backend to MongoDB and manages database operations.

\- \*\*bcryptjs:\*\* Hashes passwords before storing them.



\## Features



\- User signup form.

\- Frontend-to-backend communication through a REST API.

\- User data storage in MongoDB.

\- Password hashing using bcryptjs.

\- Signup endpoint: `POST /api/signup`.



\## Project Structure



```text

P3/

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

&#x20;   ├── package.json

&#x20;   ├── package-lock.json

&#x20;   ├── server.js

&#x20;   └── models/

&#x20;       └── user.js

```



\## Database



The application uses MongoDB with a database named `signupDB`. The backend connects to the local MongoDB instance using Mongoose.



\## How to Run



\### Start the backend



Open a terminal and run:



```bash

cd P3/server

npm install

node server.js

```



\### Start the frontend



Open a second terminal and run:



```bash

cd P3/client

npm install

npm run dev

```



Ensure MongoDB is running locally before testing signup. Open the local URL displayed by Vite in your browser.



\## Learning Outcomes



This assignment demonstrates how to create a React signup interface, build REST API endpoints using Express.js, connect to MongoDB using Mongoose, and hash passwords before storing them.



