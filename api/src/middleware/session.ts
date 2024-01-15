import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: JwtPayload;
}

interface JwtPayloadWithId extends JwtPayload {
    _id: string;
  }

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || ''; 
        const jwt = jwtByUser.split(' ').pop()
        const isUser = verifyToken(`${jwt}`)
        req.user = isUser || undefined;
        
        if(!isUser) {
            res.status(401);
            res.send("INVALID JWT")
        } else {
            req.user = isUser as JwtPayloadWithId;
            next();
        }
        
    } catch (error) {
        req.user = {};
        res.status(400);
        res.send("INVALID SESSION");
    }

};

export {checkJwt, RequestExt};