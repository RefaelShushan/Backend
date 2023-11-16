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
    const collection = db.collection("users");
    const product = await readDataById(reqBodyString);
    const updateResult = await collection.updateOne(
      { email: id1 },
      { $push: { cart:product }}
    )
    return updateResult;
  };
  export const getCartItemById = async (userId: string, itemId: string): Promise<any> => {
    const db = client.db("kodecode");
    const collection = db.collection("users");
  
    const user = await collection.findOne(
      { email: userId },
      { projection: { cart: { $elemMatch: { id: itemId } } } }
    );
  
    return user?.cart[0]; 
  };
  export const getAllCartItems = async (userId: string): Promise<any[]> => {
    const db = client.db("kodecode");
    const collection = db.collection("users");
  
    const user = await collection.findOne(
      { email: userId },
      { projection: { _id: 0, cart: 1 } }
    );
  
    return user?.cart || [];
  };
  
  export const deleteItemDal = async (id1: string,reqBody:any): Promise<any> => {
    const db = client.db("kodecode");
    const collection = db.collection("users");
    const user=await collection.findOne({email:id1})
    const reqBodyString=reqBody.id
    let arrayOfCart=[]
    arrayOfCart=user.cart
    const filteredArray = arrayOfCart.filter((obj:any) => obj.id !== reqBodyString);
    const updateResult = await collection.updateOne(
      { email: id1 },
      // { $set: { cart:[filteredArray] }}
      { $pull: { cart: { id: Number(reqBodyString) } } }
    )
    return updateResult;
  };