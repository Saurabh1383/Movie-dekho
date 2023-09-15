import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose.connect('mongodb+srv://sumansaurabh1383:7b3iwHFqV4nCYoEs@cluster0.69nttql.mongodb.net/?retryWrites=true&w=majority').then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${5000}`);  
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});

//test