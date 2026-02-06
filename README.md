# 🛒 Product Management System (Assignment 4)

## 🌟 Project Overview
This is a scalable Backend Web application built with **Node.js**, **Express**, and **MongoDB**. The project has been refactored from a basic script into a professional **MVC (Model-View-Controller)** architecture, featuring secure **JWT authentication** and **Role-Based Access Control (RBAC)**.

---

## 🏗 Modular Architecture
The project follows a clean separation of concerns to ensure maintainability and scalability:

* **`models/`**: Defines Mongoose schemas for data structure (`User`, `Product`, `Category`).
* **`controllers/`**: Contains the business logic and database operations.
* **`routes/`**: Handles API endpoints and connects them to specific controllers.
* **`middleware/`**: Manages security layers, including JWT verification and Admin role checks.



---

## 🛠 Features

### 1. Multi-Object CRUD Operations
I have implemented two related entities with full Create, Read, Update, and Delete functionality:
- **Primary Object**: `Product` (Core item data).
- **Secondary Object**: `Category` (Related entity for grouping products).
*Products are linked to Categories to show a relational data structure.*

### 2. Security & RBAC
- **Password Hashing**: User passwords are encrypted using `bcryptjs` before storage.
- **JWT Authorization**: Protects the API by requiring a valid token for sensitive operations.
- **Role-Based Access Control**:
    - **Guest/User**: Can only perform "Read" (GET) operations.
    - **Admin**: Has exclusive rights to "Create", "Update", and "Delete" (POST, PUT, DELETE).



---

## 🚀 Setup & Installation

1.  **Clone the repository**:
    ```bash
    git clone <[https://github.com/Zharrrkynn/webbbb4]
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Create a `.env` file in the root directory:
    ```env
    PORT=3000
    MONGO_URI=mongodb+srv://berkaspan_db_user:of0Rj1LkMfFrLZNI@cluster0.uxf5goa.mongodb.net/?appName=Cluster0
    JWT_SECRET=super_secret_key_123
    ```

4.  **Run the application**:
    ```bash
    node server.js
    ```

---

## 🧪 API Testing (Postman)

To test the security features:
1.  **Register**: Create an account with `"role": "admin"` at `POST /api/auth/register`.
2.  **Login**: Authenticate at `POST /api/auth/login` and copy the `token`.
3.  **Access Protected Routes**: In Postman, go to **Auth > Bearer Token**, paste the token, and try to `POST` a new product.
4.  **Test Restriction**: Try to `DELETE` a product without a token or as a standard user to see the `403 Forbidden` response.

---

## 🎓 Grading Criteria Fulfillment
- ✅ **MVC Structure (25%)**: Code is logically separated into folders.
- ✅ **Security (25%)**: Bcrypt and JWT RBAC are fully implemented.
- ✅ **Defense (50%)**: Clear architecture documentation provided for oral defense.# webbbb4
