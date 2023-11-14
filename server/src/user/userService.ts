import UserInterface, { LoginInterface } from "../models/user";
import { registerdal, loginDal } from "./userDal";

export const registerService = async (
  item: UserInterface
): Promise<any | string> => {
  const result: any | string = await registerdal(item);
  return result;
};
export const loginService = async (): Promise<UserInterface | unknown> => {
  // get all items
  try {
    const data = await loginDal();
    console.log(data);
    return data;
  } catch (err) {
    console.error("at userService.js, line 14, func (getAllItems)");
  }
  return console.error();
};
