export {};
import { Response, Request } from "express";
// const userService = require("./userService");
import { getAllItemsService } from "./categoryService";
import { getItemByIdService } from "./categoryService";
import { updateItemOfService } from "./categoryService";
export const getAllItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await getAllItemsService();
    res.send(data);
  } catch (err) {
    console.error("at controllers.ts, line 6, func (getallItems)");
    res.status(400).json({ message: "Internal Server Error" });
  }
};
export const getItemById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data= await getItemByIdService(req.params.id);
    if (data) {
      res.send(data);
    } else {
      res.json("cant find the id");
    }
  } catch (err) {
    console.error("at controllers.ts, line 35, func (getItemById)");
    res.status(400).json({ message: "Internal Server Error" });
  }
};
export const updateItem=async(req:Request,res:Response):Promise<void>=>{
  try{
    const data:string|any=await updateItemOfService(req.params.id)
    res.send(data)
  }catch(err){
    console.error(err);
    res.status(400).json({ message: "Internal Server Error" });
  }
}

