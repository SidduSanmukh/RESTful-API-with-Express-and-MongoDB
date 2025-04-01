# RESTful API with Express and MongoDB

This project demonstrates how to build a simple **RESTful API** using **Express** and **MongoDB**. It covers basic CRUD (Create, Read, Update, Delete) operations for managing user data.

## Features

- **Create** a new user
- **Read** all users or find a user by ID
- **Update** user data
- **Delete** a user by ID
- Appropriate **HTTP status codes** for each operation (e.g., 201 Created, 204 No Content, 404 Not Found, etc.)

## Technologies Used

- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/express-mongo-api.git
cd express-mongo-api
```
#!/bin/bash

# 1. Install dependencies
## npm install

# 2. Set up MongoDB - Manual steps reminder
## 1. Create a MongoDB Atlas account (if you don't have one).
## 2. Create a new cluster and database.
## 3. Replace the MongoDB connection string in the code (index.js) with your own database connection string.

# 3. Run the server
## npm start

# 4. API Details
## The API will be running on http://localhost:4000.

# API Endpoints:
## 1. Get all users
##    URL: /api/users
##    Method: GET
##    Response: List of all users in the database.

## 2. Get user by ID
##    URL: /api/users/:id
##    Method: GET
##    Response: A single user object based on the provided ID.

## 3. Create a new user
##    URL: /api/users
##    Method: POST
##    Body:
##    {
##      "first_name": "John",
##      "last_name": "Doe"
##    }
##    Response: 201 Created status with the newly created user.

## 4. Update user
##    URL: /api/users/:id
##    Method: PATCH
##    Body:
##    {
##      "first_name": "Updated Name"
##    }
##    Response: 200 OK with the updated user.

## 5. Delete user
##    URL: /api/users/:id
##    Method: DELETE
##    Response: 204 No Content if the user is deleted successfully, or 404 Not Found if the user doesn't exist.

# Contributing:
## Feel free to fork the repo and submit issues or pull requests if you find any bugs or want to suggest improvements!

# License:
## This project is licensed under the MIT License - see the LICENSE file for details.

# Acknowledgements:
## - Express.js
## - MongoDB Atlas
## - Mongoose
