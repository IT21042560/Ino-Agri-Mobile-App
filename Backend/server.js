import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.use(cors());

const PORT = process.env.PORT || 8039;
const MONGODB_URL = process.env.MONGO_DB;

mongoose.connect(MONGODB_URL, {
});

app.listen(PORT, () => {
    console.log(`🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥`)
    console.log(`🚀🚀🚀🚀🚀 SERVER IS RUNNING ON PORT:${PORT} 🚀🚀🚀🚀🚀`)
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("🚀🚀🚀🚀🚀 MONGO DB CONNECTED SUCCESSFULLY 🚀🚀🚀🚀")
    console.log(`🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥`)
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

import UserRoute from './Routes/User.js';
app.use("/acc",UserRoute);