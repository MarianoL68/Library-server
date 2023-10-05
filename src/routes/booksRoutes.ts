import { Router, Request, Response } from "express";
import { createBook, getBooks, updateBook, deleteBook } from "../controllers/booksCont";

const router = Router();

router.post("/", createBook);

router.get("/", getBooks);

router.put("/", updateBook);

router.delete("/", deleteBook);



export {router}; 