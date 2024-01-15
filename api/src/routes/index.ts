import { Router } from "express";

const router = Router();

import * as books from "./booksRoutes";
import * as auth from "./authRoutes";


router.use('/api/books', books.router);
router.use('/auth', auth.router);



export{router};