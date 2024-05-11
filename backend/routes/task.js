import express from "express";
const router = express.Router();
import Task from "../models/task.js";
import User from "../models/user.js";
import authenticateToken from "./auth.js";

// Create task
router.post("/create-task", authenticateToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.headers;
    const newTask = new Task({ title: title, description: description });
    const saveTask = await newTask.save();
    const taskId = saveTask._id;
    await User.findByIdAndUpdate(id, { $push: { tasks: taskId._id } });
    res.status(200).json({ message: "Task Created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// get All Task
router.get("/get-all-task", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "tasks",
      options: { sort: { created_at: -1 } },
    });
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Delete Task
router.delete("/delete-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.headers.id;
    await Task.findByIdAndDelete(id);
    await User.findByIdAndUpdate(userId, { $pull: { tasks: id } });
    res.status(200).json({ message: "Task deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Update Task
router.put("/update-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    await Task.findByIdAndUpdate(id, {
      title: title,
      description: description,
    });
    res.status(200).json({ message: "Task Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Update Important Task
router.put("/update-imp-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const ImpTask = TaskData.important;
    await Task.findByIdAndUpdate(id, {
      important: !ImpTask,
    });
    res.status(200).json({ message: "Important Task Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Update Complete Task
router.put("/update-complete-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const CompleteTask = TaskData.complete;
    await Task.findByIdAndUpdate(id, {
      complete: !CompleteTask,
    });
    res.status(200).json({ message: "Important Task Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// get Important Task
router.get("/get-imp-task", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await User.findById(id).populate({
      path: "tasks",
      match: { important: true },
      options: { sort: { created_at: -1 } },
    });
    const ImpTaskData = Data.tasks;
    res.status(200).json({ data: ImpTaskData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// get Complete Task
router.get("/get-complete-task", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await User.findById(id).populate({
      path: "tasks",
      match: { complete: true },
      options: { sort: { created_at: -1 } },
    });
    const CompleteTaskData = Data.tasks;
    res.status(200).json({ data: CompleteTaskData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// get Incomplete Task
router.get("/get-incomplete-task", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await User.findById(id).populate({
      path: "tasks",
      match: { complete: false },
      options: { sort: { created_at: -1 } },
    });
    const incompleteTaskData = Data.tasks;
    res.status(200).json({ data: incompleteTaskData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});
export default router;
