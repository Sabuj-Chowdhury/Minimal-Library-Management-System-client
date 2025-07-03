import type { IBook, IBookInput } from "@/types/book";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-api-03.vercel.app/api",
  }),
  tagTypes: ["Books", "Book", "Borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query<IBook[], void>({
      query: () => "/books",
      transformResponse: (response: { success: boolean; data: IBook[] }) =>
        response.data,
      providesTags: ["Books"],
    }),
    deleteBook: builder.mutation<{ message: string }, string>({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    addBook: builder.mutation<{ message: string }, IBookInput>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    getBookById: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: { success: boolean; data: IBook }) =>
        response.data,
    }),

    borrowBook: builder.mutation<
      any,
      { book: string; quantity: number; dueDate: string }
    >({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Books", "Borrow"],
    }),
    getBorrowSummary: builder.query({
      query: () => "/borrow",
      transformResponse: (response: { success: boolean; data: any[] }) =>
        response.data,
      providesTags: ["Borrow"],
    }),
    updateBook: builder.mutation({
      query: ({ id, book }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Books"],
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
