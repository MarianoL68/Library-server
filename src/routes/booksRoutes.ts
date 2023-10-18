import { Router} from "express";
import { 
    postBook, 
    getBooks, 
    putBook, 
    deleteBook, 
    getIdBook, 
    filterBooksByTitle,
    filterBooksByAuthor, 
    filterBooksByGenre } from "../controllers/booksCont";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", logMiddleware, getBooks); 

router.get("/title", filterBooksByTitle);

router.get("/author", filterBooksByAuthor); 

router.get("/genre", filterBooksByGenre);

router.get("/:id", getIdBook); 

router.post("/", checkJwt, postBook);

router.put("/:id", putBook);

router.delete("/:id", deleteBook);


export {router}; 