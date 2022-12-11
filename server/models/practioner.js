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
    type: String,
    required: true,
  },
  endTime: {
    type: String,
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

const Practioner = mongoose.model("Practioner", practitionerSchema);

module.exports = Practioner;
