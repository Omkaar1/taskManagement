import express from "express";
const router = express.Router();
import User from "../models/user.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
router.post("/sign-in", async (req, res) => {
  //   const user = req.body.username;
  try {
    const { username } = req.body; // descructuring
    const { email } = req.body;
    const existingUser = await User.findOne({ username: username });
    const existingEmail = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username is already registered" });
    } else if (username.length <= 3) {
      return res
        .status(400)
        .json({ message: "Username should have at least 4 characters" });
    }
    if (existingEmail) {
      return res.status(400).json({ message: "Email is already registered" });
    }
    const hashedPassword = await argon2.hash(req.body.password);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(200).json({ message: "SignIn successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

router.get("/log-in", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username: username });
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "Username & password is Incorrect" });
  }

  try {
    const passwordMatches = await argon2.verify(
      existingUser.password,
      password
    );

    if (passwordMatches) {
      const authClaims = [{ name: username }, { jti: jwt.sign({}, "secrete") }];
      const token = jwt.sign({ authClaims }, "secrete", { expiresIn: "2d" });
      res.status(200).json({ id: existingUser._id, token });
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
export default router;
