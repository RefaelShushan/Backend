"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProuduct = exports.updateItemOfService = exports.newItemOfService = exports.getItemByIdService = exports.getAllItemsService = void 0;
// export {};
// const userDal = require("./userDal");
const userDal_1 = require("./userDal");
const getAllItemsService = () => __awaiter(void 0, void 0, void 0, function* () {
    // get all items
    try {
        const data = yield (0, userDal_1.readData)();
        console.log(data);
        return data;
    }
    catch (err) {
        console.error("at userService.js, line 3, func (getAllItems)");
    }
    return console.error();
});
exports.getAllItemsService = getAllItemsService;
const getItemByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data1 = yield (0, userDal_1.readData)();
    let result;
    data1.forEach((element) => {
        if (element.id === Number(id)) {
            result = element;
        }
    });
    if (result === undefined) {
        throw Error;
    }
    else {
        return result;
    }
});
exports.getItemByIdService = getItemByIdService;
const newItemOfService = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const data1 = yield (0, userDal_1.readData)();
    let newId = 0;
    data1.forEach((element) => {
        if (element.id > newId) {
            newId = element.id;
        }
    });
    item.id = newId + 1;
    data1.push(item);
    const writeData1 = yield (0, userDal_1.writeData)(item);
    return userDal_1.writeData;
});
exports.newItemOfService = newItemOfService;
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
const updateItemOfService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    let numberid = Number(id);
    let result = yield (0, userDal_1.updateItem)(numberid, body);
    return result;
});
exports.updateItemOfService = updateItemOfService;
const deleteProuduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let numberid = Number(id);
    let result = yield (0, userDal_1.deleteItem)(numberid);
    return result;
});
exports.deleteProuduct = deleteProuduct;
