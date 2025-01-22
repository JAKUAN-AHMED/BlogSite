# Blog Project: Assignment-3

## Overview
This project is a backend application for a blogging platform. It allows users to write, update, and delete their blogs while providing admins with special permissions to manage users and blogs. The system incorporates secure authentication, role-based access control, and public APIs for viewing blogs with advanced features like search, sort, and filter.

## Features
### User Roles
- **Admin**:
  - Created manually in the database with predefined credentials.
  - Can delete any blog.
  - Can block any user by updating the `isBlocked` property.
  - Cannot update any blog.
- **User**:
  - Can register and log in.
  - Can create, update, and delete their own blogs.
  - Cannot perform admin actions.

### Authentication & Authorization
- **Authentication**:
  - Users must log in to perform write, update, and delete operations.
- **Authorization**:
  - Differentiates between Admin and User roles to secure endpoints.

### Blog API
- Provides public access to blogs with:
  - Title, content, author details, and timestamps.
  - Search functionality for title and content.
  - Sorting by fields like `createdAt` or `title`.
  - Filtering by author ID.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Programming Language**: TypeScript
- **Code Quality**: Prettier, ESLint

## Project Structure
```plaintext
src/
├── builder/
├── config/          # Database configuration
├── errors/          # Custom error handling
├── interface/       # TypeScript interfaces
├── middlewares/     # Authentication and authorization middlewares
├── modules/
│   ├── Admin/
│   │   ├── controller/
│   │   ├── routes/
│   ├── User/
│   │   ├── controller/
│   │   ├── interface/
│   │   ├── model/
│   │   ├── routes/
│   ├── Auth/
│   ├── Blog/
│       ├── controller/
│       ├── interface/
│       ├── model/
│       ├── routes/
├── routes/          # Main routes index
├── utils/           # Utility functions
├── app.ts           # Express app setup
├── server.ts        # Server entry point

.gitignore           # Ignored files and directories
.prettierc           # Prettier configuration
.eslint.config.mjs   # ESLint configuration
package.json         # Dependencies and scripts
package-lock.json    # Exact dependency versions
```

## API Endpoints
### Authentication
#### Register User
**Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```
- **Response**:
  - Success (201):
    ```json
    {
      "success": true,
      "message": "User registered successfully",
      "data": {
        "_id": "string",
        "name": "string",
        "email": "string"
      }
    }
    ```
  - Failure (400): Validation errors.

#### Login User
**Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```
- **Response**:
  - Success (200):
    ```json
    {
      "success": true,
      "message": "Login successful",
      "data": {
        "token": "string"
      }
    }
    ```
  - Failure (401): Invalid credentials.

### Blog Management
#### Create Blog
**Endpoint**: `POST /api/blogs`
- **Authorization**: `Bearer <token>`
- **Request Body**:
  ```json
  {
    "title": "My First Blog",
    "content": "This is the content of my blog."
  }
  ```
- **Response**:
  - Success (201):
    ```json
    {
      "success": true,
      "message": "Blog created successfully",
      "data": {
        "_id": "string",
        "title": "string",
        "content": "string",
        "author": { "details" }
      }
    }
    ```

#### Get All Blogs
**Endpoint**: `GET /api/blogs`
- **Query Parameters**:
  - `search`: Search by title or content.
  - `sortBy`: Sort blogs by fields like `createdAt` or `title`.
  - `sortOrder`: Sort order (`asc` or `desc`).
  - `filter`: Filter by author ID.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Blogs fetched successfully",
    "data": [
      {
        "_id": "string",
        "title": "string",
        "content": "string",
        "author": { "details" }
      }
    ]
  }
  ```

### Admin Actions
#### Block User
**Endpoint**: `PATCH /api/admin/users/:userId/block`
- **Authorization**: `Bearer <admin_token>`
- **Response**:
  - Success (200):
    ```json
    {
      "success": true,
      "message": "User blocked successfully",
      "data": {
        "_id": "string",
        "isBlocked": true
      }
    }
    ```

#### Delete Blog
**Endpoint**: `DELETE /api/admin/blogs/:id`
- **Authorization**: `Bearer <admin_token>`
- **Response**:
  - Success (200):
    ```json
    {
      "success": true,
      "message": "Blog deleted successfully"
    }
    ```

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure environment variables**:
   Create a `.env` file in the root directory with the following:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```
4. **Run the project**:
   - Development mode:
     ```bash
     npm run start:dev
     ```
   - Production mode:
     ```bash
     npm run build
     npm run start:prod
     ```

## Deployment
1. Deploy the server to platforms like **Render**, **Vercel**, or **AWS**.
2. Provide the live URL in the submission.

## Admin Credentials (for testing)
- **Email**: `admin@example.com`
- **Password**: `adminpassword`

## Author
Developed as part of Assignment-3 for the Blog Platform backend. This project follows clean coding practices and uses tools like TypeScript, Prettier, and ESLint to ensure high-quality code.

---
