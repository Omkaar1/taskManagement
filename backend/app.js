import express from "express";
// import dotenv from "./env";
const app = express();

// dotenv.config({
//   path: "/.env",
// });
app.use("/", (req, res) => {
  res.send("Hello from backend");
});

// const port = process.env.PORT;
// console.log(port);
app.listen(8080, () => {
  console.log(`app is listing on port 8080`);
});
