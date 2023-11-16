"use strict";
// export {};
// import User  from '../models/user';
// import {client} from '../data/mongo'
// // Get a user by email
// export async function getUserByEmail(email: string): Promise<User | null> {
//     const db = client.db("kodecode");
//     const collection =  db.collection("users");
//     if (!collection) return null;
//   const user = await collection.findOne({ email });
//   return user
// }
// // Get a user by ID
// export async function getUserById(password: string): Promise<User | null> {
//     const db = client.db("kodecode");
//     const collection =  db.collection("users");
//   const user = await collection.findOne({ password });
//   return user;
// }
// // Create a new user
// export async function createUser(newUser: User): Promise<User | null> {
//     const db = client.db("kodecode");
//     const collection =  db.collection("users");
//   await collection.insertOne(newUser);
//   return newUser;
// }
