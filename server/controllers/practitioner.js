const Practioner = require("../models/practioner");

const practitionerRouter = require("express").Router();

practitionerRouter.get("/", async (req, res, next) => {
  try {
    const practitioners = await Practioner.find({});
    res.status(200).json(practitioners);
  } catch (error) {
    next(error);
  }
});

module.exports = practitionerRouter;
