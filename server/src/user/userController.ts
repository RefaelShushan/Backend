import { v1 as uuid1 } from "uuid";
import UserInterface, { LoginInterface } from "../models/user";
import { comparePassword, generateUserPassword } from "../bcrypt/bcrypt";
import { Response, Request } from "express";
type UserResult = Promise<UserInterface | null>;
import {
  registerService,
  loginService,
  getUserByEmailService,
  updateCartService,
  deleteItemService,
  getAllCartItemsService,
} from "./userService";
import { generateAuthToken } from "../auth/jwt";
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: UserInterface = req.body;
    const userByMail = await getUserByEmailService(user.email);
    if (userByMail) throw new Error("llll");
    user._id = uuid1();
    user.email = user.email;
    user.name = user.name;
    user.cart = [];
    user.password = generateUserPassword(user.password);
    //   user.isAdmin = user.isAdmin || false;
    const data = await registerService(user);
    res.send(data);
    // res.send(true)
  } catch (err) {
    console.error("at controllers.ts, line 44, func (newItem)");
    res.status(400).json({ message: "This user is already registered" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const userFromClient: UserInterface = req.body;
    const users = (await loginService()) as unknown as UserInterface[];
    if (!users)
      throw new Error("Oops... Could not get the users from the Database");

    const userInDB = users.find((user) => userFromClient.email === user.email);

    if (!userInDB) throw new Error("The email or password is incorrect!");

    const userCopy = { ...userInDB };
    if (!comparePassword(userFromClient.password, userCopy.password))
      throw new Error("The email or password is incorrect!");

    const token = generateAuthToken(userInDB);
    res.send(userFromClient.email);
    // res.send(token)
    return token;
  } catch (error) {
    res.json({ message: "The email or password is incorrect" });
  }
};
export const updateCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: string | any = await updateCartService(req.params.id, req.body);
    console.log(req.body);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Internal Server Error" });
  }
};
export const getAllCartItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: string | any = await getAllCartItemsService(req.params.id);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Internal Server Error" });
  }
};
export const deleteItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: string | any = await deleteItemService(req.params.id, req.body);
    console.log(req.body);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Internal Server Error" });
  }
};
