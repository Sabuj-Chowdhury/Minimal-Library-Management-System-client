import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/bookApi";
import type { IBook } from "@/types/book";
import { Loader2, Pencil, Trash2, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { toast } from "sonner";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  const [deleteBook, { isLoading: deleting }] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      toast("Deleted", {
        description: "Book has been removed",
        action: {
          label: "Undo",
          onClick: () => console.log("undo not available"),
        },
      });
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete the book. Please try again.");
    }
  };

  if (isLoading || deleting) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
      </div>
    );
  }

  if (isError || !books) {
    return (
      <div className="text-center text-destructive font-semibold mt-10">
        Failed to load books.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">All Books</h1>
      <div className="overflow-x-auto rounded-md border border-border">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Title
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Author
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Genre
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                ISBN
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Copies
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-background divide-y divide-border">
            {books.map((book: IBook) => (
              <tr key={book._id}>
                <td className="px-4 py-3 text-sm">{book.title}</td>
                <td className="px-4 py-3 text-sm">{book.author}</td>
                <td className="px-4 py-3 text-sm">{book.genre}</td>
                <td className="px-4 py-3 text-sm">{book.isbn}</td>
                <td className="px-4 py-3 text-sm">{book.copies}</td>
                <td className="px-4 py-3 text-sm">
                  {book.available ? (
                    <span className="text-green-500 font-medium">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-500 font-medium">
                      Unavailable
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm space-x-2">
                  <Link to={`/edit-book/${book._id}`}>
                    <Button size="sm" variant="outline">
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete this book?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(book._id)}
                          className="bg-destructive text-white hover:bg-destructive/90"
                        >
                          Confirm Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Link to={`/borrow/${book._id}`}>
                    <Button size="sm" variant="default">
                      <BookOpen className="w-4 h-4" />
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Books;
