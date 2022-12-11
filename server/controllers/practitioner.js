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

practitionerRouter.post("/", async (req, res, next) => {
  try {
    const practitioner = new Practioner(req.body);
    const savedPractitioner = await practitioner.save();
    res.status(201).json(savedPractitioner);
  } catch (error) {
    next(error);
  }
});

practitionerRouter.put("/:id", async (req, res, next) => {
  try {
    const practitioner = await Practioner.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(practitioner);
  } catch (error) {
    next(error);
  }
});

practitionerRouter.delete("/:id", async (req, res, next) => {
  try {
    const practitioner = await Practioner.findByIdAndDelete(req.params.id);
    res.status(200).json(practitioner);
  } catch (error) {
    next(error);
  }
});

module.exports = practitionerRouter;
