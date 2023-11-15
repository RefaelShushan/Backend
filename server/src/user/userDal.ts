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
  export const readDataById = async (id: string): Promise<any | null> => {
    const db = client.db("kodecode");
    const collection = db.collection("products");
    const findResult = await collection.findOne({ id: Number(id) });
    console.log(findResult);
    return findResult;
  };
  export const updateCartDal = async (id1: string,reqBody:any): Promise<any> => {
    const db = client.db("kodecode");
    const reqBodyString=reqBody.id
    const collection: any = db.collection("user");
    const product = await readDataById(reqBodyString);
    const newObj = { key: 'value' }; 
    const updateResult = await collection.insertOne(
      { email: id1 },
      { $push: { cart:product }}
    )
    console.log(updateResult)
    return updateResult;
  };