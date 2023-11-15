import { client } from "../data/mongo";

export const registerdal = async (item: any): Promise<any> => {
  await client.connect();
  const db = client.db("kodecode");
  const collection: any = db.collection("users");
  const oneDoc = await collection.insertOne(item);
//   console.log(collection);
  console.log(oneDoc)
  return oneDoc;
};
export const loginDal = async (): Promise<any> => {
  const db = client.db("kodecode");
  const collection = db.collection("users");
  const findResult = await collection.find({}).toArray();
  console.log(findResult);
  return findResult;
};
export const getUserByEmailDal = async (id: string): Promise<any | null> => {
    const db = client.db("kodecode");
    const collection = db.collection("users");
    // .toArray();
    const findResult = await collection.findOne({ email: id })
    return findResult;
  };