import type { IBook, IBookInput } from "@/types/book";
import type { IBorrowSummary } from "@/types/BorrowSummar";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-03.vercel.app/api",
  }),
  tagTypes: ["Books", "Book", "Borrow"],
  endpoints: (builder) => ({
    //  Get all books
    getBooks: builder.query<IBook[], void>({
      query: () => "/books",
      transformResponse: (response: { success: boolean; data: IBook[] }) =>
        response.data,
      providesTags: ["Books"],
    }),

    //  Delete book
    deleteBook: builder.mutation<{ message: string }, string>({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),

    //  Add new book
    addBook: builder.mutation<{ message: string }, IBookInput>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),

    //  Get book by ID
    getBookById: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: { success: boolean; data: IBook }) =>
        response.data,
      providesTags: (_result, _error, id) => [{ type: "Book", id }],
    }),

    //  Borrow book
    borrowBook: builder.mutation<
      any,
      { book: string; quantity: number; dueDate: string }
    >({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: (_result, _error, body) => [
        "Books",
        "Borrow",
        { type: "Book", id: body.book },
      ],
    }),

    //  Get borrow summary
    getBorrowSummary: builder.query<IBorrowSummary[], void>({
      query: () => "/borrow",
      transformResponse: (response: {
        success: boolean;
        data: IBorrowSummary[];
      }) => response.data,
      providesTags: ["Borrow"],
    }),

    //  Update book
    updateBook: builder.mutation<
      { message: string },
      { id: string; book: Partial<IBookInput> }
    >({
      query: ({ id, book }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        "Books",
        { type: "Book", id },
      ],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useDeleteBookMutation,
  useAddBookMutation,
  useGetBookByIdQuery,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
  useUpdateBookMutation,
} = bookApi;
