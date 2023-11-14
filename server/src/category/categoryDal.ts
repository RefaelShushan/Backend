export {};

// const client = new MongoClient('mongodb+srv://yehuda9955:F0jiS7OCoKEb5kJM@cluster0.ijcfz0y.mongodb.net/test?retryWrites=true&w=majority');
import {client} from '../data/mongo'
// const DATA = "src/data.json";
// const DATA="./ts/data.json"
// const jsonfile = require("jsonfile");
export interface dataInterFace {
  'name': string,
  'category': string,
  'price': number,
  'popularity': number,
  'storage': number,
  'screen_size': number,
  'image_link': string  
}
// dataInterFace[]
// mongo   
export const readData = async (): Promise<any> => {
    const db = client.db("kodecode");
    const collection =  db.collection("category");
    const findResult = await collection.find({}).toArray();
    console.log(findResult)
  return findResult;
};
export const readDataById = async (id: string): Promise<any | null> => {
  const db = client.db("kodecode");
  const collection = db.collection("category");
  const findResult = await collection.findOne({ "id": id});
  console.log(findResult);
  return findResult;
};
export const writeData = async (item:any):Promise<any> => {
  await client.connect();
  const db = client.db("kodecode");
  const collection:any = db.collection("category");
  const oneDoc = await collection.insertOne( item )
  console.log(collection)
  return collection
};
export const updateItem=async(id1:string):Promise<any>=>{
  const db = client.db("kodecode");
  const collection:any = db.collection("category");
  const {popularity} = await readDataById(id1)
  const updateResult = await collection.updateOne(
    { "id": id1 },
    { $set: { "popularity":Number(popularity) + 1
 } }
    );
    return updateResult;   
}
export const deleteItem=async(id:any):Promise<any>=>{
  const db = client.db("kodecode");
  const collection = db.collection("category");
  const deleteResult = await collection.deleteMany(
    { id:id }
    );
    console.log(deleteResult)
    console.log(id)
    return deleteResult
    
}
