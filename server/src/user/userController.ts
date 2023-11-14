import { v1 as uuid1 } from "uuid";
import UserInterface, { LoginInterface } from "../models/user";
import { comparePassword, generateUserPassword } from "../bcrypt/bcrypt";
import { Response, Request } from "express";
type UserResult = Promise<UserInterface | null>;
import { registerService, loginService } from "./userService";
import { generateAuthToken } from "../auth/jwt";
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: UserInterface = req.body;
    user._id = uuid1();
    user.email = user.email;
    user.password = generateUserPassword(user.password);
    user.isAdmin = user.isAdmin || false;
    const data: string | any = await registerService(user);
    if (data) throw new Error("This user is already registered!");
    res.send(data);
  } catch (err) {
    console.error("at controllers.ts, line 44, func (newItem)");
    res.status(400).json({ message: "Internal Server Error" });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const userFromClient:UserInterface=req.body
    const users = (await loginService()) as unknown as UserInterface[];
    if (!users)
      throw new Error("Oops... Could not get the users from the Database");

    const userInDB = users.find((user) => userFromClient.email === user.email);

    if (!userInDB) throw new Error("The email or password is incorrect!");

    const userCopy = { ...userInDB };

    if (!comparePassword(userFromClient.password, userCopy.password))
      throw new Error("The email or password is incorrect!");

    const token = generateAuthToken(userInDB);
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};
