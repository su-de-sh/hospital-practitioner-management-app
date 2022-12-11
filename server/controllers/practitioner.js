const Practitioner = require("../models/practitioner");

const practitionerRouter = require("express").Router();

practitionerRouter.get("/", async (req, res, next) => {
  try {
    const practitioners = await Practitioner.find({});
    res.status(200).json(practitioners);
  } catch (error) {
    next(error);
  }
});

practitionerRouter.post("/", async (req, res, next) => {
  try {
    if (Practitioner.findOne({ email: req.body.email })) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const practitioner = new Practitioner(req.body);
    const savedPractitioner = await practitioner.save();
    res.status(201).json(savedPractitioner);
  } catch (error) {
    next(error);
  }
});

practitionerRouter.put("/:id", async (req, res, next) => {
  try {
    const practitioner = await Practitioner.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!practitioner)
      return res.status(404).json({ message: "Practitioner not found" });
    res.status(200).json(practitioner);
  } catch (error) {
    next(error);
  }
});

practitionerRouter.delete("/:id", async (req, res, next) => {
  try {
    const practitioner = await Practitioner.findByIdAndDelete(req.params.id);
    if (!practitioner)
      return res.status(404).json({ message: "Practitioner not found" });

    res.status(200).json(practitioner);
  } catch (error) {
    next(error);
  }
});

module.exports = practitionerRouter;
