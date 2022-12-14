const supertest = require("supertest");
const app = require("../app");
const Practitioner = require("../models/practitioner");

const api = supertest(app);

//to store the token of user
let token = "";

beforeEach(async () => {
  await Practitioner.deleteMany({});
  const newPractitioner = [
    {
      profilePic:
        "https://res.cloudinary.com/dqgzhdegr/image/upload/v1670768602/images_1_io352m.jpg",
      name: "Sanat Gupta",
      designation: "Surgeon",
      email: "sanat@gmail.com",
      workingDays: ["sunday", "monday", "friday"],
      contact: "9862399089",
      address: "Kupandole, Latlitpur",
      startTime: "2018-03-29T07:49:00.000Z",
      endTime: "2018-03-29T17:49:00.000Z",
      dob: "2018-03-20T00:00:00.000Z",
      isIcuSpecialist: true,
    },
    {
      profilePic:
        "https://res.cloudinary.com/dqgzhdegr/image/upload/v1670768602/images_1_io352m.jpg",
      name: "Priya Acharya",
      designation: "dietician",
      email: "priya@gmail.com",
      workingDays: ["sunday", "monday", "tuesday"],
      contact: "9862399089",
      address: "Kupandole, Latlitpur",
      startTime: "2018-03-29T07:49:00.000Z",
      endTime: "2018-03-29T17:49:00.000Z",
      dob: "2018-03-20T00:00:00.000Z",
      isIcuSpecialist: false,
    },
  ];

  await Practitioner.insertMany(newPractitioner);

  const user = {
    email: "narayangopal@leapfrog.com",
    password: "narayangopal123",
  };
  const response = await api
    .post("/api/users/signin")
    .send(user)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  token = response.body.accessToken;
});

describe("/api/practitioners", () => {
  test("return all practitioners", async () => {
    const response = await api
      .get("/api/practitioner")
      .set("authorization", "bearer " + token);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].name).toBe("Sanat Gupta");
  });

  test("add a practitioner", async () => {
    const newPractitioner = {
      profilePic:
        "https://res.cloudinary.com/dqgzhdegr/image/upload/v1670768602/images_1_io352m.jpg",
      name: "Pitamber Acharya",
      designation: "dietician",
      email: "pitamber@leapfrog.com",
      workingDays: ["sunday", "monday", "tuesday"],

      contact: "9862399089",
      address: "Kupandole, Latlitpur",
      startTime: "2018-03-29T07:49:00.000Z",
      endTime: "2018-03-29T17:49:00.000Z",
      dob: "2018-03-20T00:00:00.000Z",
      isIcuSpecialist: false,
    };

    await api
      .post("/api/practitioner")
      .send(newPractitioner)
      .set("authorization", "bearer " + token)
      .expect(201)
      .expect("Content-Type", /application\/json/);
    const practitionersAtEnd = await Practitioner.find({});
    expect(practitionersAtEnd).toHaveLength(3);
    const names = practitionersAtEnd.map((practitioner) => practitioner.name);
    expect(names).toContain("Pitamber Acharya");
  });

  test("dont add practitioner if email already exists", async () => {
    const newPractitioner = {
      profilePic:
        "https://res.cloudinary.com/dqgzhdegr/image/upload/v1670768602/images_1_io352m.jpg",
      name: "Sanat Gupta",
      designation: "Surgeon",
      email: "sanat@gmail.com",
      workingDays: ["sunday", "monday", "friday"],
      contact: "9862399089",
      address: "Kupandole, Latlitpur",
      startTime: "2018-03-29T07:49:00.000Z",
      endTime: "2018-03-29T17:49:00.000Z",
      dob: "2018-03-20T00:00:00.000Z",
      isIcuSpecialist: true,
    };

    const response = await api
      .post("/api/practitioner")
      .send(newPractitioner)
      .set("authorization", "bearer " + token)
      .expect(400);
    expect(response.body.message).toContain("Email already exists");
  });

  test("update a practitioner", async () => {
    const updatedPractitioner = {
      profilePic:
        "https://res.cloudinary.com/dqgzhdegr/image/upload/v1670768602/images_1_io352m.jpg",
      name: "Sanat Gupta",
      designation: "Surgeon",
      email: "sanat@gmail.com",
      workingDays: ["sunday", "tuesday", "friday"],
      contact: "9862399089",
      address: "Kupandole, Latlitpur",
      startTime: "2018-03-29T07:49:00.000Z",
      endTime: "2018-03-29T17:49:00.000Z",
      dob: "2018-03-20T00:00:00.000Z",
      isIcuSpecialist: true,
    };
    const practitionerAtStart = await Practitioner.find({});
    await api
      .put("/api/practitioner/" + practitionerAtStart[0]._id)
      .send(updatedPractitioner)
      .set("authorization", "bearer " + token)
      .expect(200);
    const practitionerAtEnd = await Practitioner.findById(
      practitionerAtStart[0]._id
    );
    expect(practitionerAtEnd.workingDays).toContain("tuesday");
    const practitionersAtEnd = await Practitioner.find({});
    expect(practitionersAtEnd).toHaveLength(2);
  });

  test("donot update if id doesnt exist", async () => {
    const response = await api
      .put("/api/practitioner/5f9f1b9f9f1b9f1b9f1b9f1b")
      .set("authorization", "bearer " + token)
      .send({})
      .expect(404);
    expect(response.body.message).toContain("Practitioner not found");
  });

  test("delete a practitioner", async () => {
    const practitionerAtStart = await Practitioner.find({});
    await api

      .delete("/api/practitioner/" + practitionerAtStart[0]._id)
      .set("authorization", "bearer " + token)
      .expect(204);
    const practitionerAtEnd = await Practitioner.findById(
      practitionerAtStart[0]._id
    );
    expect(practitionerAtEnd).toBeNull();
    const practitionersAtEnd = await Practitioner.find({});
    expect(practitionersAtEnd).toHaveLength(1);
  });

  test("donot delete if id doesnt exist", async () => {
    const response = await api
      .delete("/api/practitioner/5f9f1b9f9f1b9f1b9f1b9f1b")
      .set("authorization", "bearer " + token)
      .send({})
      .expect(404);
    expect(response.body.message).toContain("Practitioner not found");
  });
});
