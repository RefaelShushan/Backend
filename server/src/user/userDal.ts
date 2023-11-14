import { client } from "../data/mongo";

export const registerdal = async (item: any): Promise<any> => {
  await client.connect();
  const db = client.db("kodecode");
  const collection: any = db.collection("users");
  const oneDoc = await collection.insertOne(item);
  console.log(collection);
  return collection;
};
export const loginDal = async (): Promise<any> => {
  const db = client.db("kodecode");
  const collection = db.collection("users");
  const findResult = await collection.find({}).toArray();
  console.log(findResult);
  return findResult;
};
