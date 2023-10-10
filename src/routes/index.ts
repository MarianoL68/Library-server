import { Router } from "express";

const router = Router();

import * as books from "./booksRoutes";


router.use('/api/books', books.router);



export{router};