const cloudinary = require("cloudinary").v2;
const practitionerRouter = require("express").Router();
const Practitioner = require("../models/practitioner");

cloudinary.config({
  cloud_name: "dqgzhdegr",
  api_key: "541558938883319",
  api_secret: "j_GGZo5ZJqGD2OVG3G-szf--5Mg",
});

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
    if (await Practitioner.findOne({ email: req.body.email })) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (req.files) {
      const file = req.files.photo;
      const uploadedResponse = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          width: 200,
          height: 200,
          crop: "fill",
        }
      );
      req.body.profilePic = uploadedResponse.url;
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
