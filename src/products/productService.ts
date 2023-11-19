// export {};
// const userDal = require("./userDal");
import {
  readData,
  writeData,
  updateItem,
  deleteItem,
  readDataById,
  readTopProductsDal,
  readDataByCategory,
  updateamountDal,
} from "./productDal";
import { dataInterFace } from "./productDal";
export const getAllItemsService = async (): Promise<
  dataInterFace | unknown
> => {
  // get all items
  try {
    const data = await readData();
    console.log(data);
    return data;
  } catch (err) {
    console.error("at userService.js, line 14, func (getAllItems)");
  }
  return console.error();
};
export const getItemByIdService = async (id: string): Promise<any> => {
  try {
    const data1 = await readDataById(id);
    console.log(data1, "jgdua");
    return data1;
  } catch (err) {
    console.error("at userService.js, line 14, func (getAllItems)");
  }
  return console.error();
};
export const getserviceByCategory = async (id: string): Promise<any> => {
  try {
    const data1 = await readDataByCategory(id);
    console.log(data1);
    return data1;
  } catch (err) {
    console.error("at userService.js, line 14, func (getAllItems)");
  }
  return console.error();
};
export const readTopProductsService = async (): Promise<
  dataInterFace | unknown
> => {
  try {
    const data = await readTopProductsDal();
    return data;
  } catch (err) {
    console.error("at userService.js, line 14, func (getAllItems)");
  }
  return console.error();
};
export const newItemOfService = async (
  item: dataInterFace
): Promise<any | string> => {
  const writeData1: any | string = await writeData(item);
  return writeData;
};
// mongo
export const updateItemOfService = async (
  id: string,
  reqBody: any
): Promise<string | undefined> => {
  let result: string | undefined = await updateItem(id);
  return result;
};
export const deleteProuduct = async (
  id: string
): Promise<string | undefined> => {
  let numberid = Number(id);
  let result: string | undefined = await deleteItem(numberid);
  return result;
};
export const updateAmountOfService = async (
  id: string,
  reqBody: any
): Promise<string | undefined> => {
  let result: string | undefined = await updateamountDal(id, reqBody);
  return result;
};
