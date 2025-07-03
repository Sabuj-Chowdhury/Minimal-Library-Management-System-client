// src/pages/HomePage.tsx

import { Button } from "@/components/ui/button";
import { Book, PlusCircle, ClipboardList, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          📚 Welcome to the Minimal Library Management System
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-6">
          Effortlessly manage your library's books and borrowing records with a
          clean, easy-to-use system built using React and TypeScript.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/books">
            <Button>
              View Books <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/create-book">
            <Button variant="outline">Add New Book</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Book className="mx-auto text-indigo-600 h-10 w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">View & Edit Books</h3>
            <p className="text-slate-600 text-sm">
              See all books, update their details, or delete them in one place.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <PlusCircle className="mx-auto text-green-600 h-10 w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Add New Books</h3>
            <p className="text-slate-600 text-sm">
              Quickly add new titles with detailed info like ISBN, copies,
              genre, and more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ClipboardList className="mx-auto text-blue-600 h-10 w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Borrow Summary</h3>
            <p className="text-slate-600 text-sm">
              Track all borrowed books and their quantities from one clean
              dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Use This System?</h2>
          <p className="text-slate-700 text-lg">
            This system is built for students, librarians, or educators who need
            a lightweight, fast, and effective way to manage books. No login
            required, no clutter — just clean book management.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-indigo-600 text-white border border-black">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Manage Your Library?
        </h2>
        <p className="mb-6">
          Start adding books, borrow them, and keep track of everything in one
          place.
        </p>
        <Link to="/books">
          <Button className="bg-white text-indigo-600 hover:bg-slate-100">
            Go to Book List
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
