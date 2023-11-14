// export {};
// const userDal = require("./userDal");
import {readData, writeData,updateItem,deleteItem,readDataById}  from "./productDal"
import { dataInterFace } from "./productDal";
export const getAllItemsService = async ():Promise<dataInterFace|unknown> => {
  // get all items
  try {
    const data = await readData();
    console.log(data)
    return data;
  } catch (err) {
    
    console.error(
      "at userService.js, line 14, func (getAllItems)"
    );
  }return console.error();
};
 export const getItemByIdService = async (id:string):Promise<any> => { 
  try {
    const data1 : dataInterFace[] = await readDataById(id)
    console.log(data1)
    return data1;
  } catch (err) {
    
    console.error(
      "at userService.js, line 14, func (getAllItems)"
    );
  }return console.error();
  }
    export const newItemOfService = async (item:dataInterFace)
  :Promise<any|string> => {
      const writeData1:any|string=await writeData(item)
      return writeData;
    }
// mongo
export const updateItemOfService=async(id:string,body:dataInterFace):Promise<string|undefined>=>{
  let numberid=Number(id)
  let result:string|undefined=await updateItem(numberid,body)
  return result
}
export const deleteProuduct=async(id:string):Promise<string|undefined>=>{
  let numberid=Number(id)
  let result:string|undefined=await deleteItem(numberid)
  return result
}


