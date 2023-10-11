import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interfaces";
import UserModel from "../models/users";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "USER ALREADY EXISTS";

    const register = await UserModel.create({email, password, name});

    return register;
};

const loginUser = async () => {

};

export {registerNewUser, loginUser}