// export {};
// const userDal = require("./userDal");
import {readData, writeData,updateItem,deleteItem}  from "./userDal"
import { dataInterFace } from "./userDal";
export const getAllItemsService = async ():Promise<dataInterFace|unknown> => {
  // get all items
  try {
    const data = await readData();
    console.log(data)
    return data;
  } catch (err) {
    
    console.error(
      "at userService.js, line 3, func (getAllItems)"
    );
  }return console.error();
};
 export const getItemByIdService = async (id:string):Promise<any> => { 
      const data1 : dataInterFace[] = await readData()
      let result:dataInterFace|undefined
        data1.forEach((element)=>{
            if(element.id===Number(id)){
            result=element}
        }
        )
        if (result===undefined){
            throw Error   
        }else{
            return result
        }
    }
    export const newItemOfService = async (item:dataInterFace)
  :Promise<any|string> => {
      const data1:dataInterFace[] = await readData();
      let newId:number=0
      data1.forEach((element):void=>{
        if(element.id>newId){
        newId=element.id
        }
      })
      item.id=newId+1
      data1.push(item)
      const writeData1:any|string=await writeData(item)
      return writeData;
    }
// export const newItemOfService = async (item:dataInterFace)
//   :Promise<any|string> => {
//       const data1:dataInterFace[] = await readData();
//       let newId:number=0
//       data1.forEach((element):void=>{
//         if(element.id>newId){
//         newId=element.id
//         }
//       })
//       item.id=newId+1
//       data1.push(item)
//       const writeData1:any|string=await writeData(data1)
//       return writeData;
//     }
// export const updateItemOfService=async(id:string,body:dataInterFace):Promise<string|undefined>=>{
//   const data1:dataInterFace[] = await readData();
//   const filterdData=data1.filter((el)=>el.id!==Number(id))
//   filterdData.push(body)
//   let result:string|undefined=await writeData(filterdData)
//   return 
// }
// export const deleteProuduct=async(id:string):Promise<string|undefined>=>{
//   const data1:dataInterFace[] = await readData();
//   const filterdData=data1.filter((element)=>element.id!==Number(id))
//   await writeData(filterdData)
//   return 
// }
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


