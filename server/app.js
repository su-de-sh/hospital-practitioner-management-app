const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const config = require("./utils/config");
const userRouter = require("./controllers/user");
const {
  errorHandler,
  userExtractor,
  tokenExtractor,
} = require("./utils/middleware");
const practitionerRouter = require("./controllers/practitioner");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static("build"));
app.use(fileUpload({ useTempFiles: true }));

const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl);

app.get("/", async (req, res) => {
  res.send("<h1>Welcome to Hospital Practitioner Management System</h1>");
});

app.use("/api/users", userRouter);
app.use("/api/practitioner", tokenExtractor, userExtractor, practitionerRouter);

app.use(errorHandler);
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../server/build/index.html"));
});

module.exports = app;
