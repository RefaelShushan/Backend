import { Response, Request } from "express";
import { getUserByEmail } from "./userdal";
import { getUserById } from "./userdal";
import { dataInterFace } from "../products/productDal";
  export const login = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const loginEmail= await getUserByEmail(req.params.email);
      const loginPassword=await getUserById(req.params.password)
      if (loginEmail&&loginPassword) {
        res.send(loginEmail);
      } else {
        res.json("cant find the email or the password");
      }
    } catch (err) {
      console.error("at users/controllers.ts, line 18, func (getItemById)");
      res.status(400).json({ message: "Internal Server Error" });
    }
  };