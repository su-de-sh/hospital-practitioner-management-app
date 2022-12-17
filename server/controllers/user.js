const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const userRouter = require("express").Router();

userRouter.post("/signup", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ error: "Email or password is missing!!" });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ error: "Email already exists!!" });
    }
    if (password.length < 8) {
      return res.json({
        error: "Password must be at least 8 characters long!!",
      });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      email,
      passwordHash,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/signin", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ error: "Email or password is missing!!" });

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "Email doesnot exists" });
    }
    const isCorrect = await bcrypt.compare(password, user.passwordHash);
    if (!isCorrect) {
      return res.json({ error: "Wrong password" });
    }
    const userForToken = {
      email: user.email,
      id: user.id,
    };
    const accessToken = jwt.sign(userForToken, config.ACCESS_TOKEN_SECRET, {
      expiresIn: 60 * 60,
    });
    const refreshToken = jwt.sign(userForToken, config.REFRESH_TOKEN_SECRET, {
      expiresIn: 24 * 60 * 60,
    });
    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
});

userRouter.post("/refresh", async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.json({ error: "Refresh token is missing!!" });
    const user = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
    const userForToken = {
      email: user.email,
      id: user.id,
    };
    const accessToken = jwt.sign(userForToken, config.ACCESS_TOKEN_SECRET, {
      expiresIn: 60 * 60,
    });
    res.status(200).json({ accessToken });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
