import { Request, Response } from "express"
import { handleHttp } from "../../utils/error.handle"
import { insertBook, getAllBooks } from "../services/books.services"

const createBook = async ({body}: Request, res: Response) => {
    try {
        const responseBook = await insertBook(body);
        res.send(responseBook);
        
    } catch (error) {
        handleHttp(res, 'ERROR_CREATED_BOOK', error)
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

const updateBook = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BOOK')
    }
}

const deleteBook = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BOOK')
    }
}

export {createBook, getBooks, updateBook, deleteBook}

