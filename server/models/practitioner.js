const mongoose = require("mongoose");

const practitionerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: false,
    default:
      "https://res.cloudinary.com/dqgzhdegr/image/upload/v1670768602/images_1_io352m.jpg",
  },
  workingDays: {
    type: Array,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  isIcuSpecialist: {
    type: Boolean,
    required: true,
  },
});

practitionerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Practitioner = mongoose.model("Practioner", practitionerSchema);

module.exports = Practitioner;
