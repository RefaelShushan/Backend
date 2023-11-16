export {};
import { client } from "../data/mongo";
// const DATA = "src/data.json";
// const DATA="./ts/data.json"
// const jsonfile = require("jsonfile");
export interface dataInterFace {
  name: string;
  category: string;
  price: number;
  popularity: number;
  storage: number;
  screen_size: number;
  image_link: string;
}

export const readData = async (): Promise<any> => {
  const db = client.db("kodecode");
  const collection = db.collection("products");
  const findResult = await collection.find({}).toArray();
  console.log(findResult);
  return findResult;
};
export const readDataById = async (id: string): Promise<any | null> => {
  const db = client.db("kodecode");
  const collection = db.collection("products");
  const findResult = await collection.findOne({ id: Number(id) });
  console.log(findResult);
  return findResult;
};
export const readDataByCategory = async (id: string): Promise<any | null> => {
  const db = client.db("kodecode");
  const collection = db.collection("products");
  // .toArray();
  const findResult = await collection.find({ category: id }).toArray();
  console.log(findResult, "lll");
  return findResult;
};

export const writeData = async (item: any): Promise<any> => {
  await client.connect();
  const db = client.db("kodecode");
  const collection: any = db.collection("products");
  const oneDoc = await collection.insertOne(item);
  console.log(collection);
  return collection;
};
export const readTopProductsDal = async (): Promise<any[] | null> => {
  try {
    const db = client.db("kodecode");
    const collection = db.collection("products");
    const findResult = await collection
      .find({})
      .sort({ popularity: -1 })
      .limit(5)
      .toArray();
    return findResult;
  } catch (error) {
    console.error("Error in readTopProducts:", error);
    return null;
  }
};
export const updateItem = async (id1: string): Promise<any> => {
  const db = client.db("kodecode");
  const collection: any = db.collection("products");
  const { popularity } = await readDataById(id1);
  const updateResult = await collection.updateOne(
    { id: Number(id1) },
    { $set: { popularity: Number(popularity) + 1 } }
  );
  return updateResult;
};
export const deleteItem = async (id: any): Promise<any> => {
  const db = client.db("kodecode");
  const collection = db.collection("products");
  const deleteResult = await collection.deleteMany({ id: id });
  console.log(deleteResult);
  console.log(id);
  return deleteResult;
};
export const updateamountDal = async (
  id1: string,
  reqBody: any
): Promise<any> => {
  const db = client.db("kodecode");
  const jsonResult = reqBody.id;
  const collection: any = db.collection("products");
  const { amount } = await readDataById(id1);
  const updateResult = await collection.updateOne(
    { id: Number(id1) },
    { $set: { popularity: Number(amount) - Number(jsonResult) } }
  );
  return updateResult;
};
