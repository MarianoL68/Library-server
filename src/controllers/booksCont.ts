import { Request, Response } from "express"
import { handleHttp } from "../../utils/error.handle"
import { insertBook, getAllBooks, getId, updateBook, bookDelete } from "../services/books.services"

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
}

const putBook = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await updateBook(id, body);
        res.send(response);

    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BOOK')
    }
}

const deleteBook = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await bookDelete(id);
        res.send(response);
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BOOK')
    }
}

export {postBook, getBooks, getIdBook, putBook, deleteBook}

