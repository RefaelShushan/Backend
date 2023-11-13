export {};
import { Response, Request } from "express";
const userService = require("./userService");
import { getAllItemsService } from "./userService";
import { getItemByIdService } from "./userService";
import { dataInterFace } from "./userDal";
import {newItemOfService} from "./userService"
import { updateItemOfService } from "./userService";
import { deleteProuduct } from "./userService";

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
    const data:dataInterFace|undefined = await getItemByIdService(req.params.id);
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
export const newItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const data:string|any = await newItemOfService(req.body);
    res.send(data);
  } catch (err) {
    console.error("at controllers.ts, line 44, func (newItem)");
    res.status(400).json({ message: "Internal Server Error" });
  }
};
export const updateItem=async(req:Request,res:Response):Promise<void>=>{
  try{
    const data:string|any=await updateItemOfService(req.params.id,req.body)
    res.send(data)
  }catch(err){
    console.error(err);
    res.status(400).json({ message: "Internal Server Error" });
  }
}
export const deleteProuduct1=async(req:Request,res:Response):Promise<void>=>{
  try{
    const data:string|any=await deleteProuduct(req.params.id)
    res.send(data)
  }catch(err){
    console.error("at controllers.ts, line 62, func (delelteitem)");
    res.status(400).json({ message: "Internal Server Error" });
  }
}