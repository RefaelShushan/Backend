// import { NextFunction, Request, Response } from "express";
// import { tokenArray } from "../src/middleware/auth";
// import User  from "./models/user";
// import { getUserByEmail, createUser } from "./users/userdal";

// // User registration
// export const registerController = async (req: Request, res: Response) => {
//     const { email, password } = req.body;
  
//     console.log(req.body);
  
//     const requestingUser = { email, password };
  
//     if (!requestingUser) {
//       return res.status(403).json({ error: "Permission denied" });
//     }
  
//     const existingUser = await getUserByEmail(email);
  
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }
  
//     const newUser: User = {
//       _id: "",
//       email,
//       password,
//     };
  
//     createUser(newUser);
  
//     res.status(201).json({ message: "User registered successfully" });
//   };
  

// export const generateAuthToken = () => {
//   // Generate a random token (for demonstration purposes)
//   const randomToken = Math.random().toString(36).substring(2, 15);
//   // Save the generated token in the array
//   tokenArray.push(randomToken);
//   return randomToken;
// };

// // User login
// export const loginController = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { email, password } = req.body;

//   // Find the user by email
//   const user = getUserByEmail(email);

//   // Check if the user exists and the password matches (in a real app, compare hashed passwords)
// //   || user?.password !== password
//   if (!user) {
//     return res.status(401).json({ error: "Invalid credentials" });
//   }

//   // Generate an authentication token using the middleware function
//   const authToken = generateAuthToken();
//   console.log(tokenArray);

//   const responseObj = { user, token: authToken };
//   // In a real application, you would store the token securely and handle token expiration

//   res.json({ message: "Login successful", responseObj });
// };