import { Request, Response, query } from "express"
import { handleHttp } from "../../utils/error.handle"
import { insertBook, getAllBooks, getId, updateBook, bookDelete, getTitle, getAuthor } from "../services/books.services"


const postBook = async ({body}: Request, res: Response) => {
    try {
        const responseBook = await insertBook(body);
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
      const title = req.query.title; // No es necesario asignar a title en este punto, déjalo como está
  
      if (!title || typeof title !== 'string') { // Verifica si title no existe o no es una cadena
        res.status(400).send({ error: "Title parameter is required" });
        return;
      }
  
      // Eliminar espacios en blanco extra y convertir a minúsculas
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
  
      // Eliminar espacios en blanco extra y convertir a minúsculas
      const authorQuery = String(author).trim().toLowerCase();
  
      const books = await getAuthor(authorQuery);
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send({ error: "Internal server error" });
    }
  };
  
  

export {postBook, getBooks, getIdBook, putBook, deleteBook, filterBooksByTitle,filterBooksByAuthor}

