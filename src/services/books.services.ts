import { Book } from "../interfaces/books.interface";
import BookModel from "../models/books";

const insertBook = async (item:Book) => {
    const responseInsert = await BookModel.create(item);
    return responseInsert;
}

const getAllBooks = async () => {
    const responseBook = await BookModel.find({});
    return responseBook;
}

export {insertBook, getAllBooks};