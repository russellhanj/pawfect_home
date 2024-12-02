// importing packages
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';
import router from "./routes/pawfecthome.js";
import insertData from "./migrate.js";


// setups
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:3000", // Allow requests from your front-end
      methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
      credentials: true, // Optional, for cookies or auth headers
    })
);

// Mount the middleware at a specific path using app.use()
app.use("/api", router);

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your Express server once connected to MongoDB
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  
insertData();



