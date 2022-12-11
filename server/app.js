const express = require("express");
const mongoose = require("mongoose");
const config = require("./utils/config");
const userRouter = require("./controllers/user");
const {
  unknownEndpoint,
  errorHandler,
  userExtractor,
  tokenExtractor,
} = require("./utils/middleware");
const practitionerRouter = require("./controllers/practitioner");

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
app.use("/api/practitioner", tokenExtractor, userExtractor, practitionerRouter);
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
