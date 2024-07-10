# Backend User Management System

## Overview

This is a backend application for a User Management System built with Node.js, Express.js, TypeScript, and MongoDB. The project demonstrates core backend functionalities, including user creation, retrieval, and data validation using the `joi` validation library.

## Features

- **Create User**: Endpoint to create a new user with detailed attributes.
- **Find User**: Endpoint to find users by email or phone.
- **Data Validation**: Utilizes `joi` for data validation to ensure data integrity.
- **Environment Configuration**: Uses `dotenv` to manage environment variables securely.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **TypeScript**: Superset of JavaScript that adds static types.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM library for MongoDB.
- **dotenv**: Loads environment variables from a `.env` file.
- **joi**: Data validation library for schema-based validation.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local installation or access to a MongoDB cloud instance)

### Installation

1. **Clone the Repository**

   git clone https://github.com/bhabna01/Backend-user-management-system.git
   cd backend-user-management-system
2. **Install Dependencies**
    npm install
3. **Set Up Environment Variables**
Create a .env file in the root directory and add your MongoDB URI and any other necessary environment variables:
MONGO_URI=mongodb://your-username:your-password@your-host:your-port/your-database
PORT=3000
4. **Run the Application**
npm run dev
**Code Structure**

        src/: Contains source code files.
        controllers/: Business logic and request handling.
        models/: Mongoose schemas and models.
        routes/: API route definitions.
        validation/: Validation schemas.
        app.ts: Main application file.
        server.ts: Entry point for starting the server.


