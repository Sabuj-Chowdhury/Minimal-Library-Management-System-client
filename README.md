# 📚 Library Management System

A minimal, modern, and scalable **Library Management System** built using **React**, **Redux Toolkit Query**, **TypeScript**, and a RESTful **Node.js (Express)** backend. This project allows users to browse, borrow, and manage books efficiently, with real-time data synchronization and a clean UI powered by TailwindCSS and Shadcn UI.

🌐 **Live URL**: [https://minimal-library-management-system-c.vercel.app](https://minimal-library-management-system-c.vercel.app)

---

## 🚀 Features

### 📖 Books Module

- View all books in a clean tabular format
- Create, update, and delete books (Admin)
- View book details
- Borrow books if available
- View borrow summary with due dates

### 📦 Borrowing System

- Borrow a book with specified quantity and due date
- Real-time validation of stock (`copies`)
- Display unavailable status with disabled borrow option
- Borrow summary page with due tracking

### 🛠 Technologies Used

#### Frontend

- ✅ React + TypeScript
- ✅ Redux Toolkit Query
- ✅ Tailwind CSS + Shadcn UI
- ✅ React Router DOM
- ✅ Sonner (toast notifications)
- ✅ Lucide React (icons)

#### Backend

- ✅ Node.js + Express
- ✅ MongoDB + Mongoose
- ✅ REST API with proper error handling
- ✅ Borrow and Book models with relationships

---

## 📂 Folder Structure (Frontend)

```
📁 src
├── 📁 components
│   └── ui  # Reusable UI components (shadcn)
├── 📁 pages
│   ├── Books.tsx           # All books table
│   ├── BookDetails.tsx     # Single book view
│   ├── BorrowBook.tsx      # Borrow a specific book
│   ├── BorrowSummary.tsx   # Borrowed books list
│   └── EditBook.tsx        # Edit book form
├── 📁 redux
│   └── api/bookApi.ts      # RTK Query for books + borrow
├── 📁 types
│   └── book.ts             # Book and Borrow interfaces
├── App.tsx
└── main.tsx
```

---

## 🔗 API Endpoints

Base URL: `https://library-management-api-03.vercel.app/api`

| Endpoint          | Method | Description                   |
| ----------------- | ------ | ----------------------------- |
| `/books`          | GET    | Fetch all books               |
| `/books/:id`      | GET    | Fetch single book by ID       |
| `/books`          | POST   | Add new book                  |
| `/books/:id`      | DELETE | Delete a book                 |
| `/books/:id`      | PATCH  | Update a book                 |
| `/borrow`         | POST   | Borrow a book                 |
| `/borrow-summary` | GET    | Get summary of borrowed books |

---

## 🧪 Sample Borrow Request Payload

```json
{
  "book": "65d2a8bc34b12fc90f8e7392",
  "quantity": 1,
  "dueDate": "2025-07-11T00:00:00.000Z"
}
```

---

## 📸 UI Snapshots

| 📘 All Books                              | 📗 Borrow Book                             | 📙 Borrow Summary                           |
| ----------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| ![books](https://i.imgur.com/xK6yB9B.png) | ![borrow](https://i.imgur.com/Xy3xwqv.png) | ![summary](https://i.imgur.com/8zH9XMc.png) |

---

## 📦 Getting Started Locally

```bash
# Clone this repo
git clone https://github.com/yourusername/library-management

# Navigate to project
cd library-management

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 💡 Future Improvements

- ✅ Pagination and search for books
- ✅ Role-based authentication (admin/user)
- 🔒 JWT-based secured routes
- 📊 Dashboard for borrowing trends
- 📩 Email notifications for due reminders

---

## 👨‍💻 Author

**Your Name**  
📧 your.email@example.com  
🔗 [Portfolio Website](https://your-portfolio.com)

---

## 📝 License

This project is licensed under the MIT License.
