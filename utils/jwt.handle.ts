import {JwtPayload, sign, verify} from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "12345678";

const generateToken = (email: string) => {
    const jwt = sign({email}, JWT_SECRET,{
        expiresIn: "5h"
    });
    return jwt;
};

const verifyToken = (jwt: string): JwtPayload | null => {
    try {
      const decoded = verify(jwt, JWT_SECRET) as JwtPayload;
      return decoded;
    } catch (error) {
      return null;
    }
  };

export{generateToken, verifyToken};