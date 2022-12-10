const express = require("express");
const config = require("./utils/config");
const mongoose = require("mongoose");
const userRouter = require("./controllers/userRouter");

const app = express();
app.use(express.json());

const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl).then(() => {
  // eslint-disable-next-line no-console
  console.log("MongoDb connected");
});

app.get("/", async (req, res) => {
  res.send("<h1>Welcome to Hospital Practitioner Management System</h1>");
});

app.use("/api/users", userRouter);

module.exports = app;
