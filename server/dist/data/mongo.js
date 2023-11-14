"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kodecode:elchi3875@cluster0.gqhivoe.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb+srv://kodecode:<password>@cluster0.gqhivoe.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
exports.client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     console.log("Lllll")
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
