# MERN Stack Authentication Project

## Project Overview

A **MERN stack application** that allows users to **register** and **log in** securely.

- Passwords are hashed using **bcrypt** to ensure safe storage.
- Frontend uses **React**, **Tailwind CSS**, and **Bootstrap** for a **responsive and clean UI**.

> This project demonstrates **full-stack development** with secure authentication, frontend-backend communication, and database integration.

---

## Features

- **User registration** with unique email
- **User login** with password verification
- **Password hashing** using **bcrypt**
- **Basic authentication checks** for “protected” content
- **Responsive UI** using **Tailwind CSS** and **Bootstrap**

---

## Tech Stack

| Layer      | Technology |
|-----------|------------|
| Frontend  | React.js, Tailwind CSS, Bootstrap, Axios |
| Backend   | Node.js, Express.js |
| Database  | MongoDB, Mongoose |
| Auth      | bcrypt (password hashing) |

---

## Installation & Setup
### Prerequisites

- **Node.js**  
- **npm**  
- **MongoDB** (local instance running at `mongodb://127.0.0.1:27017/Employee`)  

---

### Steps

#### 1. Clone the repository

```bash
git clone https://github.com/PadmeshSs/Mern-Stack-implementation.git
cd Mern-Stack-implementation
```

#### 2. Install backend dependencies

```bash
cd server
npm install
```

#### 3. Install frontend dependencies

```bash
Copy code
cd ../React-app
npm install
```

##### 4. Run backend
```bash
Copy code
cd ../server
npm start
Backend runs on: http://localhost:3001
```

#### 5. Run frontend
```bash
Copy code
cd ../React-app
npm start
Frontend runs on: http://localhost:3000
```

> Important: Make sure MongoDB is running locally before starting the server.

##  Challenges & Learnings

- **Implemented bcrypt** for secure password hashing  
- **Learned frontend-backend communication** using Axios  
- **Structured a MERN project** with clear separation of concerns  
- **Integrated Tailwind CSS and Bootstrap** for responsive UI  

> This project strengthened my understanding of **full-stack development**, **secure authentication**, and **UI responsiveness**.


##  Future Enhancements

- **Password reset functionality**  
- **Role-based access control** (admin/user)  
- **Unit testing for backend routes**  
- **Improved form validation and error handling**

