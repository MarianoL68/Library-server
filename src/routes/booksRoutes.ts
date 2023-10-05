import { Router, Request, Response } from "express";
import { createBook, getBooks, updateBook, deleteBook, getIdBook } from "../controllers/booksCont";

const router = Router();

router.post("/", createBook);

router.get("/", getBooks);

router.get("/:id", getIdBook);

router.put("/", updateBook);

router.delete("/", deleteBook);



export {router}; 