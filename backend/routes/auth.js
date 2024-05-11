import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const authHeader = req.header("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(400).json({ message: "Authentication token required" });
  }

  jwt.verify(token, "secrete", (err, user) => {
    if (err) {
      return res.status(400).json(err);
    }
    req.user = user;
    next();
  });
};
export default authenticateToken;
