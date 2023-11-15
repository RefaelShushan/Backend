import UserInterface, { LoginInterface } from "../models/user";
import { registerdal, loginDal ,getUserByEmailDal,updateCartDal,deleteItemDal} from "./userDal";

export const registerService = async (
  item: UserInterface
): Promise<any | string> => {
  const result: any | string = await registerdal(item);
  // console.log(result,"result")
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
export const getUserByEmailService= async (id: string): Promise<any> => {
    try {
      const data1 = await getUserByEmailDal(id);
      return data1;
    } catch (err) {
      console.error("at userService.js, line 14, func (getAllItems)");
    }
    return console.error();
  };
  export const updateCartService=async(id:string,reqBody:any):Promise<string|undefined>=>{
    let result:string|undefined=await updateCartDal(id,reqBody)
    return result
  }
  export const deleteItemService=async(id:string,reqBody:any):Promise<string|undefined>=>{
    let result:string|undefined=await deleteItemDal(id,reqBody)
    return result
  }