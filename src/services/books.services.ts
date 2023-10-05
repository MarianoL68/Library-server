import { Book } from "../interfaces/books.interface";
import BookModel from "../models/books";

const validateBookData = (item: Book): boolean => {
    if (!item.title || !item.author || !item.genre || !item.imageURL) {
      return false; 
    }
    return true; 
  };

const insertBook = async (item: Book) => {
    if (!validateBookData(item)) {
        throw new Error('Required fields are not present in the data.');
      }

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
}

export {insertBook, getAllBooks, getId, updateBook, bookDelete};