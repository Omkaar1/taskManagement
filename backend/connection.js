import mongoose from "mongoose";

const connect = async () => {
  try {
    const response = await mongoose.connect(
      "mongodb+srv://imomkarlondhe:Omkar123@cluster0.rpm9egl.mongodb.net/taskmanagementapp"
    );
    if (response) {
      console.log("Connected to DB");
    }
  } catch (error) {
    console.log(error);
  }
};
connect();
