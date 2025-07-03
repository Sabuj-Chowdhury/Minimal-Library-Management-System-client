import { useParams, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/api/bookApi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import type { IBookInput } from "@/types/book";

const EditBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading } = useGetBookByIdQuery(bookId!);
  const [updateBook, { isLoading: updating }] = useUpdateBookMutation();
  const { register, handleSubmit, reset } = useForm<IBookInput>();

  const onSubmit = async (data: IBookInput) => {
    try {
      await updateBook({ id: bookId!, book: data }).unwrap();
      toast.success("✅ Book updated successfully!");
      navigate("/books");
    } catch (error) {
      toast.error("❌ Failed to update book.");
    }
  };

  if (isLoading || !book) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4">✏️ Edit Book</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-muted p-6 rounded-md"
      >
        <div>
          <Label>Title</Label>
          <Input defaultValue={book.title} {...register("title")} />
        </div>
        <div>
          <Label>Author</Label>
          <Input defaultValue={book.author} {...register("author")} />
        </div>
        <div>
          <Label>Genre</Label>
          <select {...register("genre")} defaultValue={book.genre}>
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non-Fiction</option>
            <option value="SCIENCE">Science</option>
            <option value="HISTORY">History</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
          </select>
        </div>
        <div>
          <Label>ISBN</Label>
          <Input defaultValue={book.isbn} {...register("isbn")} />
        </div>
        <div>
          <Label>Description</Label>
          <Input defaultValue={book.description} {...register("description")} />
        </div>
        <div>
          <Label>Copies</Label>
          <Input
            type="number"
            defaultValue={book.copies}
            {...register("copies")}
          />
        </div>
        <Button type="submit" disabled={updating}>
          {updating ? "Updating..." : "Update Book"}
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
