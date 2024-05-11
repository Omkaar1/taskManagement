import express from "express";
import connectDB from "./connectDB.js";
import "dotenv/config";
import cors from "cors";

import UserAPI from "./routes/user.js";
import TaskAPI from "./routes/task.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);

connectDB();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
