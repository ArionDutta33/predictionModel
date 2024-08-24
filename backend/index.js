import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import predictionRoutes from './routes/prediction.js';

// Load environment variables
dotenv.config();

const app = express();

// Get MongoDB URI from environment variables
const mongoUri = process.env.MONGO_DB;


// Connect to MongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", predictionRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
