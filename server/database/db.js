import mongoose from "mongoose";
const DBConnection = async () => {
  const MONODB_URI = `mongodb+srv://devesh890:PDcg7iydaBvpXjue@cluster0.klssf0v.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;
