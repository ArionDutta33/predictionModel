import dotenv from "dotenv";
import express from 'express';
import mongoose from "mongoose";
const app = express();
import predictionRoutes from "./routes/prediction.js"

mongoose.connect("mongodb://127.0.0.1:27017/predictionDB").then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.log(err, err.stack);
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1",predictionRoutes);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
