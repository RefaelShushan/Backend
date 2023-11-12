export {};
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');
// const client =new  MongoClient('mongodb+srv://kodecode:1234@cluster0.gqhivoe.mongodb.net/?retryWrites=true&w=majority')
// const DATA = "src/data.json";
// const DATA="./ts/data.json"
// const jsonfile = require("jsonfile");
export interface dataInterFace {
  "id": number
  "title":string
  "price": number
  "description": string
  "image": string
  "rating":Record<string,number>      
}
// jsonfile 
// export const readData = async (): Promise<dataInterFace[]> => {
//   const data:dataInterFace[] = await jsonfile.readFile(DATA);
//   return data;
// };
// export const writeData = async (item: dataInterFace[]):Promise<any> => {
//   // console.log(item)
//   const data: dataInterFace = await jsonfile.writeFile(DATA,item,{ spaces: 2 })
//   console.log(data)
//   return data
// };






// mongo   
export const readData = async (): Promise<dataInterFace[]> => {
  await client.connect();
    const db = client.db("elchi");
    const collection =  db.collection("product");
    const findResult = await collection.find({}).toArray();
  return findResult;
};
export const writeData = async (item:any):Promise<any> => {
  await client.connect();
  const db = client.db("elchi");
  const collection:any = db.collection("product");
  const oneDoc = await collection.insertOne( item )
  console.log(collection)
  return collection
};
export const updateItem=async(id:number,body:dataInterFace):Promise<any>=>{
  await client.connect();
  const db = client.db("elchi");
  const collection:any = db.collection("product");
  console.log(id)
  const updateResult = await collection.updateOne(
    { id: id },
    { $set: { id:id,
    title:body.title,
    price:body.price,
    description:body.description,
    image:body.image,
    rating:body.rating
 } }
    );
    return updateResult;   
}
export const deleteItem=async(id:any):Promise<any>=>{
  await client.connect();
  const db = client.db("elchi");
  const collection = db.collection("product");
  const deleteResult = await collection.deleteMany(
    { id:id }
    );
    console.log(deleteResult)
    console.log(id)
    return deleteResult
    
}
