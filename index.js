const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
	const url = "mongodb+srv://pj912970:nZAswsXsCbhuKUg9@cluster0.pqg3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("db13oct24");
	const coll = db.collection("student");
	const doc = {"name" :req.body.name, "doubt" :req.body.doubt};
	coll.insertOne(doc)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
});

app.listen(9000,()=>{console.log("ready@9000");});