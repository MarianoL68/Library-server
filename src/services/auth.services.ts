import { encrypt, verified } from "../../utils/bcrypt.handle";
import { generateToken } from "../../utils/jwt.handle";
import { User } from "../interfaces/user.interfaces";
import UserModel from "../models/users";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "USER ALREADY EXISTS";

    const passHash = await encrypt(password)

    const register = await UserModel.create({
        email, 
        password: passHash, 
        name
    });

    return register;
};

const loginUser = async ({email, password}: User) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "USER DOESN'T EXISTS";

    const passwordHash = checkIs.password //El encriptado
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "INCORRECT PASSWORD";

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    }

    return data;
};

export {registerNewUser, loginUser}