import { Book } from "../interfaces/books.interface";

const validateBookData = (item: Book): boolean => {
    if (!item.title || !item.author || !item.genre ) {
      return false; 
    }
    return true; 
  };

  const validGenres = [
    "Novel",
    "Short Story",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Suspense",
    "Horror",
    "Adventure",
    "Romantic",
    "Biography",
    "History",
    "Politics",
    "Economics",
    "Religion",
    "Psychology",
];

export {validateBookData, validGenres}
