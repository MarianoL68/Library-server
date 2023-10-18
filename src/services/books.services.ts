import { Book } from "../interfaces/books.interface";
import BookModel from "../models/books";
import { validateBookData, validGenres } from "./validations";

const insertBook = async (item: Book, userId: string) => {
    if (!validateBookData(item)) {
        throw new Error('Required fields are not present in the data.');
      }

      if (!item.imageURL) {
        item.imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjoe3nkkL9Sjuv2sUvCQvFGQRBP1CzCVY5w&usqp=CAU";
    }

     // Asociar el ID del usuario al libro antes de crearlo
     item.user = userId;

    const responseInsert = await BookModel.create(item);
    return responseInsert;
};

const getAllBooks = async () => {
    const responseBook = await BookModel.find({});
    return responseBook;
};

const getId = async (id: string) => {
    const responseBook = await BookModel.findOne({_id: id});
    return responseBook;
};

const updateBook = async (id: string, data: Book) => {
    const responseBook = await BookModel.findOneAndUpdate({ _id: id}, data, {
        new: true,
    });
    return responseBook;
};

const bookDelete = async (id: string) => {
    const responseBook = await BookModel.deleteOne({_id: id});
    return responseBook;
};

const getTitle = async (title: string): Promise<Book[]> => {
  try {
    // Convertir el título a minúsculas para que sea insensible a mayúsculas y minúsculas
    title = title.toLowerCase();

    const responseBooks = await BookModel.find({
      title: { $regex: new RegExp(title, "i") }, // Búsqueda insensible a mayúsculas y minúsculas
    });

    return responseBooks;
  } catch (error) {
    throw new Error("Error fetching books by title");
  }
};

const getAuthor = async (author: string): Promise<Book[]> => {
  try {
    const lowercaseAuthor = author.toLowerCase();

    // Dividir en nombre y apellido
    const [firstName, lastName] = lowercaseAuthor.split(' ');

    // expresión regular insensible a mayúsculas y minúsculas
    const regex = new RegExp(`(${firstName}|${lastName})`, 'i');

    // Realizar una consulta que busque en ambos campos (nombre y apellido) y sea insensible a mayúsculas y minúsculas
    const responseBooks = await BookModel.find({
      $or: [
        { author: { $regex: regex } },
      ],
    });

    return responseBooks;
  } catch (error) {
    throw new Error("Error fetching books by author");
  }
};

const filterGenre = async (genre: string): Promise<Book[]> => {
  try {
    if (!validGenres.includes(genre)) {
      throw new Error("Invalid");
    }

    const responseBooks = await BookModel.find({
      genre: genre, 
    });

    return responseBooks;
  } catch (error) {
    throw new Error("Error fetching books by genre");
  }
};

export {insertBook, getAllBooks, getId, updateBook, bookDelete, getTitle, getAuthor, filterGenre};