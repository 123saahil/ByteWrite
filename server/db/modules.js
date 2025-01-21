import mongoose from "mongoose";

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  name: String,
  email: String,
  password: String,
});

// Create models
const User = mongoose.model("User", userSchema);

export { User };
