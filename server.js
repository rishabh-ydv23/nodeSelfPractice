const express = require("express");
const { connectDB, getCollection } = require("./db"); // apni db file ka path

const app = express();
app.use(express.json());

// DB connect karna
connectDB();

app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully");
});



// 🔹 CREATE API (POST)
app.post("/user", async (req, res) => {
  try {
    const collection = getCollection(); // collection lena
    const data = req.body;

    await collection.insertOne(data);

    res.send("✅ User added");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error inserting data");
  }
});




// 🔹 READ API (GET)
app.get("/users", async (req, res) => {
  try {
    const collection = getCollection(); // collection lena

    const data = await collection.find().toArray();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching data");
  }
});




app.put("/user/:name", async (req, res) => {
  try {
    const collection = getCollection();

    const result = await collection.updateOne(
      { name: req.params.name },   // kisko update karna
      { $set: req.body }           // kya update karna
    );

    res.send("✅ User updated");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating data");
  }
});



app.delete("/user/:name", async (req, res) => {
  try {
    const collection = getCollection();

    await collection.deleteOne({ name: req.params.name });

    res.send("❌ User deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting data");
  }
});




// 🔹 Server start
app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});