import mongoose from "mongoose";
import data from "./data.json" assert { type: "json" };
import { Pet } from "./models/pets.js";
import 'dotenv/config'

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const insertData = async () => {
  try {
    await Pet.deleteMany({});
    await Pet.insertMany(data);
    console.log("Data inserted successfully");
  } catch (error) {
    console.log("Error inserting data", error);
  }
};

insertData();

export default insertData;


