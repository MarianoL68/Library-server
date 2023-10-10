import { Router} from "express";
import { postBook, getBooks, putBook, deleteBook, getIdBook, filterBooksByTitle,filterBooksByAuthor } from "../controllers/booksCont";

const router = Router();

router.get("/", getBooks); 

router.get("/title", filterBooksByTitle);

router.get("/author", filterBooksByAuthor); 

router.get("/:id", getIdBook); 

router.post("/", postBook);

router.put("/:id", putBook);

router.delete(":id", deleteBook);


export {router}; 