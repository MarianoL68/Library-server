import { Router, Request, Response } from "express";

const router = Router();

router.get('/books', (req: Request, res: Response) => {
    res.send({data: "ACA_VAN_LOS_LIBROS"})
})



export {router}; 