import "dotenv/config";
import express from "express";
import {router} from "./routes/index"
const PORT = process.env.PORT || 4001
import morgan from "morgan"
import dbConnect from "./config/mongo";

const app = express()
app.use(express.json()); 
app.use(morgan("dev"));

app.use(router);

dbConnect().then(() => {
    console.log('MongoDB connected succesfuly')
})

app.listen(PORT, () => console.log(`ready for port ${PORT}`))