import { Request, Response } from "express"
import { handleHttp } from "../../utils/error.handle"
import { insertBook, getAllBooks, getId, updateBook, bookDelete, getTitle, getAuthor, filterGenre } from "../services/books.services";
import { validGenres } from "../services/validations";
import { RequestExt } from "../middleware/session";


const postBook = async (req: RequestExt, res: Response) => {
    try {
      // if (!req.user || !req.user._id) {
      //   return res.status(401).send({ error: 'Unauthorized' });
      // }
  
      const bookData = req.body;
      // const userId = req.user._id;
      const responseBook = await insertBook(bookData);
      res.send(responseBook);
        
    } catch (error) {
        handleHttp(res, `ERROR_CREATED_BOOK: ${error}`)
    }
}

const getBooks = async (req: Request, res: Response) => {
    try {
        const response = await getAllBooks();
        res.send(response);

    } catch (error) {
        handleHttp(res, 'ERROR_GET_BOOKS')
    }
}

const getIdBook = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await getId(id);
        res.send(response);

    } catch (error) {
        handleHttp(res, 'ERROR_GET_ID')
    }
};

const putBook = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await updateBook(id, body);
        res.send(response);

    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BOOK')
    }
};

const deleteBook = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await bookDelete(id);
        res.send(response);
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BOOK')
    }
};

const filterBooksByTitle = async (req: Request, res: Response): Promise<void> => {
    try {
      const title = req.query.title; 
  
      if (!title || typeof title !== 'string') { 
        res.status(400).send({ error: "Title parameter is required" });
        return;
      }
  
      const trimmedTitle = title.trim().toLowerCase();
  
      const books = await getTitle(trimmedTitle);
      res.status(200).send(books);
    } catch (error) {
      handleHttp(res, "Internal server error");
    }
  };
  

const filterBooksByAuthor = async (req: Request, res: Response): Promise<void> => {
    try {
      const { author } = req.query;
  
      if (!author) {
        res.status(400).send({ error: "Author parameter is required" });
        return;
      }
  
      const authorQuery = String(author).trim().toLowerCase();
  
      const books = await getAuthor(authorQuery);
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send({ error: "Internal server error" });
    }
  };

  const filterBooksByGenre = async (req: Request, res: Response): Promise<void> => {
    try {
      const { genre } = req.query;
  
      if (!genre || typeof genre !== 'string') {
        res.status(400).send({ error: 'Genre parameter is required' });
        return;
      }
  
      if (!validGenres.includes(genre)) {
        res.status(400).send({ error: 'Invalid genre' });
        return;
      }
  
      const books = await filterGenre(genre);
  
      if (books.length === 0) {
        res.status(404).send({ error: 'No books found with this genre' });
        return;
      }
  
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send({ error: 'Internal server error' });
    }
  };

export {postBook, getBooks, getIdBook, putBook, deleteBook, filterBooksByTitle,filterBooksByAuthor, filterBooksByGenre}

