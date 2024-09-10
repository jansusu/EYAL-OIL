const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs")
const port = process.env.PORT || 7777;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.get("/",(req,res)=>{
  res.send("Hello world")
})

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://jananiaitech:janani1010@cluster1.d0ponte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

        const productcollect = client.db("dbeyal").collection("oilproduct")

    app.post("/product",async(req,res)=>{
        const data = req.body;
        const result =await productcollect.insertOne(data);
        res.send(result);
    });

    app.get("/allproducts",async(req,res)=>{
        const oilproduct = productcollect.find();
        const result = await oilproduct.toArray();
        res.send(result);
    });

    app.get("/product/:id",async (req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await productcollect.findOne(filter);
        res.send(result);
    });

    app.patch("/product/:id", async (req,res)=>{
        const id = req.params.id;
        const filter= {_id: new ObjectId(id)};
        const update = req.body;
        const updateDoc = {$set: {...update}};
        const option = {upsert:true};
        const result = await productcollect.updateOne(filter,updateDoc,option);
        res.send(result);
    });

    app.delete("/product/:id",async (req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await productcollect.deleteOne(filter);
        res.status(200)
        .json({success: true, message:"data deletd successfully", result})
    });
    //authentication 
    // const users = [];

    // const secretkey = "your-secret-key";

    // app.post("/register",async(req,res)=>{
    //   const{username,password} = req.body;
    //   const hashedPassword = await bcrypt.hash(password,10);
    //   users.push({email,password:hashedPassword});
    //   res.status(201).json({message:"user registered successfully"});
    // });

    // app.post("/login", async(req,res)=>{
    //   try{
    //     const { username, password} = req.body;
    //     const user = users.find((user)=>user.username===username);
    //     if(user){
    //       const isPasswordValid = await bcrypt.compare(password, user.password);
    //       if(isPasswordValid){
    //         const token = jwt.sign({username},secretkey,{expiresIn:"1h"});
    //         res.json({token});
    //       }else{
    //         res.status(400).json({message:"Invalid username or password"});
    //       }
    //     }else{
    //       res.status(400).json({message:"Invalid username or password"});
    //     }
    //   }catch (error){
    //      res.status(500).send(error.message);
    //   }
    // });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});