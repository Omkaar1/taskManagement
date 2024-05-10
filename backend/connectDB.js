import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const response = await mongoose.connect(`${process.env.MONGODB_URL}`);
    if (response) {
      console.log("Connected to DB");
    }
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
