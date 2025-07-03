import { useGetBorrowSummaryQuery } from "@/redux/api/bookApi";
import { Loader2 } from "lucide-react";

const BorrowSummary = () => {
  const {
    data: borrowSummaryRes,
    isLoading,
    isError,
  } = useGetBorrowSummaryQuery();

  console.log(borrowSummaryRes);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !Array.isArray(borrowSummaryRes)) {
    return (
      <div className="text-center mt-10 text-destructive font-semibold">
        ❌ Failed to load borrow summary.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">📚 Borrow Summary</h1>
      <div className="overflow-x-auto rounded-md border border-border">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Title
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                ISBN
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className="bg-background divide-y divide-border">
            {borrowSummaryRes.map((entry: any) => (
              <tr key={entry._id}>
                <td className="px-4 py-2 text-sm">
                  {entry.book?.title || "N/A"}
                </td>
                <td className="px-4 py-2 text-sm">
                  {entry.book?.isbn || "N/A"}
                </td>
                <td className="px-4 py-2 text-sm font-medium">
                  {entry.totalQuantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowSummary;
