import express from "express";
import {
  register,
  login,
  updateCart,
  deleteItem,
  getAllCartItems,
} from "../user/userController";
const router = express.Router();

// User registration route
router.post("/register", register);

// User login route
router.post("/login", login);
// cart
router.put("/update/:id", updateCart);

router.get("/cartarr/:id", getAllCartItems);

router.put("/delete/:id", deleteItem);

export default router;
