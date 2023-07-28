require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const toyCarRoute = require("./routes/toyCarRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/", toyCarRoute);

app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog, My name is Jonathan");
});

app.use(errorMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch(() => {
    console.log(error);
  });
