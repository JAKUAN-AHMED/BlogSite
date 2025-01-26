# 📝 Blog Project: Assignment-3  

Welcome to the **Blog Project: Assignment-3**, a backend application designed to provide a robust blogging platform with role-based access control, secure authentication, and advanced API features for blogs like search, sort, and filter.

---

## 📹 **Project Video Review**  
Watch the walkthrough of this project, showcasing its core features and functionality.  
👉 **Watch Video Review(#)** : [Video](https://drive.google.com/file/d/1vvLbQ63-IzECNGUfULKIPy7uKXD6pvdw/view?usp=drive_link)  

---

## 📋 **Features**

### ✨ **User Roles**
- **Admin**:
  - Can delete any blog.
  - Can block any user by updating the `isBlocked` property.
  - Cannot update blogs.
- **User**:
  - Can register, log in, create, update, and delete their own blogs.
  - Cannot perform admin actions.

### 🔐 **Authentication & Authorization**
- **Authentication**:
  - Secure login required for all CRUD operations on blogs.
- **Authorization**:
  - Role-based access to endpoints ensures secure actions.

### 📰 **Blog Features**
- Public API access for blogs with:
  - Search by title or content.
  - Sorting by creation date or title.
  - Filtering by author.

---

## 🛠️ **Technologies Used**

- **Backend Framework**: Express.js  
- **Programming Language**: TypeScript  
- **Database**: MongoDB with Mongoose  
- **Validation**: Zod  
- **Linting and Formatting**: ESLint and Prettier  
- **Deployment**: Vercel 

---

## 📂 **Folder Structure**

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
📡 API Endpoints
🔐 Authentication
Register User: POST /api/auth/register
Login User: POST /api/auth/login
📰 Blog Management
Create Blog: POST /api/blogs
Get All Blogs: GET /api/blogs
Get Single Blog: GET /api/blogs/:blogId
Update Blog: PUT /api/blogs/:blogId
Delete Blog: DELETE /api/blogs/:blogId
🔨 Admin Actions
Block User: PATCH /api/admin/users/:userId/block
Delete Blog: DELETE /api/admin/blogs/:id
Setup Instructions
Clone the repository:

git clone <repository-url>
cd <repository-folder>
Install dependencies:

npm install

Admin Credentials (for testing)
Email: admin@gmail.com
Password: admin123
Author
Developed as part of Assignment-3 for the Blog Platform backend. This project follows clean coding practices and uses tools like TypeScript, Prettier, and ESLint to ensure high-quality code.
