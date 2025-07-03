import { useParams, useNavigate } from "react-router";
import {
  useGetBookByIdQuery,
  useBorrowBookMutation,
} from "@/redux/api/bookApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const BorrowBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { data: book, isLoading, isError } = useGetBookByIdQuery(bookId!);
  const [borrowBook, { isLoading: borrowing }] = useBorrowBookMutation();

  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const handleBorrow = async () => {
    if (!book) return;

    if (!dueDate) {
      toast.error("📅 Please select a due date.");
      return;
    }

    const payload = {
      book: book._id,
      quantity,
      dueDate: new Date(dueDate).toISOString(),
    };

    try {
      await borrowBook(payload).unwrap();
      toast.success("📚 Book borrowed successfully!");
      navigate("/borrow-summary");
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to borrow the book.");
    }
  };

  if (isLoading || borrowing) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !book) {
    return (
      <div className="text-center mt-20 text-destructive text-lg font-semibold">
        ❌ Book not found or failed to load.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{book.title}</CardTitle>
          <p className="text-sm text-muted-foreground">by {book.author}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">Genre: {book.genre}</p>
          <p className="text-sm">ISBN: {book.isbn}</p>
          <p className="text-sm">Available Copies: {book.copies}</p>
          <p className="text-sm text-slate-700">{book.description}</p>

          {/* Quantity Input */}
          <div className="space-y-1">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              max={book.copies}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          {/* Due Date Input */}
          <div className="space-y-1">
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <Button
            onClick={handleBorrow}
            disabled={!book.available || borrowing || quantity > book.copies}
          >
            {borrowing ? "Borrowing..." : "Borrow this Book"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BorrowBook;
