import express, { json } from "express";
import connectDB from "./connectDB.js";
import "dotenv/config";
import cors from "cors";
const app = express();
import UserAPI from "./routes/user.js";
app.use(cors());
app.use(express.json())
app.use("/api/v1", UserAPI); //Localhost:8080/api/v1/sign-in
// app.use("/", (req, res) => {
//   res.send("Hello from backend");
// });

connectDB();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
