# 🛒 Product Management System (Full-Stack)

A production-ready Full-Stack application built using the MERN architecture (MongoDB, Express, Node.js). [cite_start]This system allows administrators to manage a product inventory with full CRUD (Create, Read, Update, Delete) functionality, category linking, and secure JWT-based authentication[cite: 3, 4, 8].

## 🔗 Live Links
* **Production URL:** https://webbbb4.onrender.com
* **API Base URL:** https://webbbb4.onrender.com/api/api

---

## 🚀 Features
* [cite_start]**Full CRUD Implementation:** Create, view, update, and delete products and categories[cite: 7].
* [cite_start]**Relational Integrity:** Seamless linking between Products and Categories using MongoDB ObjectIds[cite: 8].
* [cite_start]**Authentication & RBAC:** Secure login/registration flow with Role-Based Access Control (Admins vs. Guests)[cite: 9, 12].
* [cite_start]**Responsive UI:** Dynamic frontend built with Bootstrap and vanilla JavaScript for a smooth user experience across devices[cite: 13, 14].
* [cite_start]**Deployment:** Hosted live via Render with secure Environment Variable management[cite: 17, 22].

---

## 🛠 Tech Stack
* [cite_start]**Frontend:** HTML5, CSS3, JavaScript (Fetch API), Bootstrap 5[cite: 13, 19].
* [cite_start]**Backend:** Node.js, Express.js[cite: 17].
* [cite_start]**Database:** MongoDB Atlas (Cloud)[cite: 8].
* [cite_start]**Security:** JSON Web Tokens (JWT) for authentication and Bcrypt for password hashing[cite: 12].

---

## 📖 API Documentation

### Authentication
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/api/auth/register` | Register a new user | Public |
| POST | `/api/auth/login` | Login and receive JWT token | Public |

### Products
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/api/products` | Retrieve all products (populated with categories) | Public |
| GET | `/api/products/:id` | Get details of a single product | Public |
| POST | `/api/products` | Create a new product | Admin Only |
| DELETE| `/api/products/:id` | Delete a product | Admin Only |

### Categories
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| GET | `/api/categories` | List all categories | Public |
| POST | `/api/categories` | Add a new category | Admin Only |

---

## 💻 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Zharrrkynn/webbbb4.git](https://github.com/Zharrrkynn/webbbb4.git)
   cd product-management-system
2. **Install dependencies:**
    ```bash
    npm install
3. **Environment Configuration: Create a .env file in the root directory and add your credentials:**
   ```bash
   PORT=3000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_key
4. **Run the application:**
   ```bash
   node server.js
   The app will be available at http://localhost:3000.

**🧪 Testing with Postman**

1. A Postman collection file is included in the /tests folder of this repository.

2.Import Product_Management.postman_collection.json into Postman.

3.Use the Register and Login requests first to obtain a token.

4.Add the token to the Authorization header for Admin requests.
