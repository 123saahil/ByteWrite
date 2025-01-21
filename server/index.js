import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Import uuid package
import { DB_URL } from "./config.js";
import { User } from "./db/modules.js";

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(DB_URL, { dbName: "ByteWrite" })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));





//SignUp Route
app.post("/user/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Generate a random user_id
    const user_id = uuidv4(); // Generates a random UUID as user_id

    const newUser = new User({
      user_id,
      name,
      email,
      password,
    });

    await newUser.save();

    console.log("User saved:", newUser);
    res.status(201).send("User created successfully!");
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send("Failed to create user.");
  }
});

//Login Route

app.listen(3000, () => console.log("Server running on port 3000"));
