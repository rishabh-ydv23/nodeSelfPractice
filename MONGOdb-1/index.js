const { MongoClient } = require("mongodb");

// yaha apna connection string paste karo
const uri = "mongodb+srv://rishabhyadavunnao_db_user:OfVphwk5SHbaX1aM@cluster0.mnv2ai3.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("testDB"); // database name
    const collection = db.collection("users"); // collection name

    // insert data
    await collection.insertOne({ name: "Rishabh", age: 21 });

    console.log("✅ Data inserted");

    // read data
    const data = await collection.find().toArray();
    console.log(data);

  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run();