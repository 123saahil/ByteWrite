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

    //check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      console.log("User already exists.");
      return res.status(400).send("User already exists.");
    }

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

// Login Route
app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      console.log("User not found in db.");
      return res.status(404).send("User not found.");
    }

    // Check if the password matches (assuming passwords are stored in plain text)
    if (user.password !== password) {
      console.log("Password Invalid");
      return res.status(401).send("Invalid credentials.");
    }

    // Send response indicating successful login
    res.status(200).send("Login successful!");
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).send("Failed to log in.");
  }
});

//Get details
app.get("/me", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      res.status(403).json({ msg: "Admin doesnt exist" });
      return;
    }

    // Send response indicating successful login
    res.status(200).json({ email: user.email });
  } catch (err) {
    res.status(500).send("Cannot fetch details");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
