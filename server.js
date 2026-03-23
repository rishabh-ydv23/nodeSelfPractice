const express = require("express");
const { connectDB, getCollection } = require("./db");

const app = express();
app.use(express.json());

async function startServer() {
  try {
    await connectDB(); // 👈 wait karega DB ke liye

    app.post("/user", async (req, res) => {
      const collection = getCollection();
      const data = req.body;

      await collection.insertOne(data);
      res.send("User added");
    });

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });

  } catch (err) {
    console.log("DB connection error:", err);
  }
}

startServer();