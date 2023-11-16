import {
  readData,
  writeData,
  updateItem,
  deleteItem,
  readDataById,
  readTopCategoryDal,
} from "./categoryDal";
import { dataInterFace } from "./categoryDal";
export const getAllItemsService = async (): Promise<any> => {
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
    console.log(data1);
    return data1;
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
export const readTopCategoryService = async (): Promise<
  dataInterFace | unknown
> => {
  try {
    const data = await readTopCategoryDal();
    console.log(data, "ggg");
    return data;
  } catch (err) {
    console.error("at userService.js, line 14, func (getAllItems)");
  }
  return console.error();
};
// mongo
export const updateItemOfService = async (
  id: string
): Promise<string | undefined> => {
  // let numberid=Number(id)
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
