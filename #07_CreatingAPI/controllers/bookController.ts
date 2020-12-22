import { Book } from "../models/bookModel.ts";
import { Context } from "https://deno.land/x/abc@v1.2.4/mod.ts";
import { v4 } from "https://deno.land/std@0.81.0/uuid/mod.ts";

let books: Book[] = [
  { id: "1", title: "One", author: "First", pages: 100 },
  { id: "2", title: "Two", author: "Second", pages: 200 },
  { id: "3", title: "Three", author: "Third", pages: 300 },
];

export const getAllBooks = (context: Context) => {
  return context.json(books, 200);
};

export const getBook = (context: Context) => {
  const { id } = context.params;
  const book = books.find((currentBook: Book) => currentBook.id === id);

  if (book) {
    return context.json(book, 200);
  } else {
    return context.string("No Book found!", 404);
  }
};

export const createBook = async (context: Context) => {
  // get sent data
  const { title, author, pages }: any = await context.body;

  const id = v4.generate();
  const book = { id, title, author, pages };

  books.push(book);

  return context.json(books, 201);
};

export const deleteBook = (context: Context) => {
  const { id } = context.params;

  const book = books.find((currentBook: Book) => currentBook.id === id);

  if (book) {
    books = books.filter((book: Book) => book.id !== id);
    return context.json(book);
  }

  return context.string("No book with that id found", 404);
};
