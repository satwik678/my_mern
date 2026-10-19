# Product Management System

## Overview

A simple Product Management System built using HTML, CSS, JavaScript, Express.js, and REST APIs. It supports CRUD (Create, Read, Update, and Delete) operations on products.

## Features

- View all products in a table
- Add new products
- Edit existing products
- Delete products
- Communicate with the backend using REST APIs

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- REST API

## Project Structure

```text
p2/
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## How to Run

1. Install [Node.js](https://nodejs.org/).
2. Open a terminal in the `p2` folder.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open your browser and visit:

   http://127.0.0.1:3000

## Data Storage

Products are stored in a JavaScript array on the server. The data is temporary and resets when the server restarts.

## Purpose

This project demonstrates basic CRUD operations using a frontend interface and an Express.js REST API.
