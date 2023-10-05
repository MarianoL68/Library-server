import { Request, Response } from "express"
import { handleHttp } from "../../utils/error.handle"

const createBook = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_CREATED_BOOK')
    }
}

const getBooks = (req: Request, res: Response) => {
    try {
        
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

