import {sign, verify} from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "12345678";

const generateToken = (email: string) => {
    const jwt = sign({email}, JWT_SECRET,{
        expiresIn: "1h"
    });
    return jwt;
};

const verifyToken = async () => {

};

export{generateToken, verifyToken};