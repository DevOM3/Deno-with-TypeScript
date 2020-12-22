import { Application, Context } from "https://deno.land/x/abc@v1.2.4/mod.ts";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
} from "./controllers/bookController.ts";

const app = new Application();

// static files (css files)
app.static("/", "./public");

// routes
app.get("/", async (context: Context) => {
  await context.file("./public/index.html");
});

app
  .get("/books", getAllBooks)
  .get("/book/:id", getBook)
  .post("/books", createBook)
  .delete("/book/:id", deleteBook);

app.start({ port: 3000 });
