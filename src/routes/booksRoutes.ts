import { Router, Request, Response } from "express";
import { postBook, getBooks, putBook, deleteBook, getIdBook } from "../controllers/booksCont";

const router = Router();

router.post("/", postBook);

router.get("/", getBooks);

router.get("/:id", getIdBook);

router.put("/:id", putBook);

router.delete("/:id", deleteBook);



export {router}; 