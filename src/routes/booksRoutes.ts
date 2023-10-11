import { Router} from "express";
import { postBook, getBooks, putBook, deleteBook, getIdBook, filterBooksByTitle,filterBooksByAuthor, filterBooksByGenre } from "../controllers/booksCont";

const router = Router();

router.get("/", getBooks); 

router.get("/title", filterBooksByTitle);

router.get("/author", filterBooksByAuthor); 

router.get("/genre", filterBooksByGenre);

router.get("/:id", getIdBook); 

router.post("/", postBook);

router.put("/:id", putBook);

router.delete("/:id", deleteBook);


export {router}; 