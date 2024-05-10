import mongoose from "mongoose";
import Task from "./task.js";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  tasks: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
