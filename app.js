const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/sensors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECTION);

// mongoose.connection
//   .once("open", () => {
//     console.log("Connected");
//   })
//   .on("error", (error) => {
//     console.log(error);
//   });

app.use("/api/sensors", userRoutes);

module.exports = app;
