import MainLayout from "@/layout/MainLayout";
import AddBook from "@/pages/AddBook";
import BookDetails from "@/pages/BookDetails";
import Books from "@/pages/Books";
import BorrowBook from "@/pages/BorrowBook";
import BorrowSummary from "@/pages/BorrowSummary";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/create-book",
        element: <AddBook />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/borrow/:bookId",
        element: <BorrowBook />,
      },
    ],
  },
]);

export default router;
