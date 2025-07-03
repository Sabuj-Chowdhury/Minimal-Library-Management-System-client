import { useParams } from "react-router";
import { useGetBookByIdQuery } from "@/redux/api/bookApi";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBookByIdQuery(id!);

  const book = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
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
      <Card className="shadow-lg border border-border rounded-2xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold tracking-tight text-primary">
            {book.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground italic">
            by {book.author}
          </p>
          <Badge
            variant="secondary"
            className="w-fit text-xs uppercase tracking-widest"
          >
            {book.genre}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-6 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <p>
              <span className="font-semibold text-foreground">ISBN:</span>{" "}
              <span className="text-muted-foreground">{book.isbn}</span>
            </p>
            <p>
              <span className="font-semibold text-foreground">Copies:</span>{" "}
              <span className="text-muted-foreground">{book.copies}</span>
            </p>
            <p>
              <span className="font-semibold text-foreground">Status:</span>{" "}
              {book.available ? (
                <span className="text-green-500 font-semibold">Available</span>
              ) : (
                <span className="text-red-500 font-semibold">Unavailable</span>
              )}
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              Description:
            </h3>
            <p className="text-muted-foreground">{book.description}</p>
          </div>

          <div className="flex gap-4 pt-4">
            <Link to={`/borrow/${book._id}`}>
              <Button>📚 Borrow</Button>
            </Link>
            <Link to="/books">
              <Button variant="outline">← Back to List</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookDetails;
