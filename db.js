const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://rishabhyadavunnao_db_user:OfVphwk5SHbaX1aM@cluster0.mnv2ai3.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

let collection;

async function connectDB() {
  await client.connect();
  const db = client.db("mydatabase");
  collection = db.collection("users");
  console.log("MongoDB connected");
}

function getCollection() {
  return collection;
}

module.exports = { connectDB, getCollection };