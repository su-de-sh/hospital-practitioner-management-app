const supertest = require("supertest");
const app = require("../app");
const User = require("../models/user");

const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});
  const newUser = {
    email: "narayangopal@leapfrog.com",
    password: "narayangopal123",
  };
  await api.post("/api/users/signup").send(newUser);
}, 100000);

describe("POST /api/users/signup", () => {
  test("new user is created", async () => {
    const newUser = {
      email: "admin@leapfrog.com",
      password: "admin123",
    };
    await api
      .post("/api/users/signup")
      .send(newUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);
  }, 100000);

  test("new user is not created if email already exists", async () => {
    const newUser = {
      email: "narayangopal@leapfrog.com",
      password: "narayangopal123",
    };
    const response = await api
      .post("/api/users/signup")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.error).toContain("Email already exists!!");
  }, 100000);

  test("new user is not created if email or password is missing", async () => {
    const newUser = {};
    const response = await api
      .post("/api/users/signup")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.error).toContain("Email or password is missing!!");
  }, 100000);

  test("new user is not created if email is not valid", async () => {
    const newUser = {
      email: "narayangopal",
      password: "narayangopal123",
    };
    const response = await api

      .post("/api/users/signup")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.error).toContain("Please enter a valid email");
  });
});

describe("POST /api/users/signin", () => {
  test("user is logged in", async () => {
    const user = {
      email: "narayangopal@leapfrog.com",
      password: "narayangopal123",
    };
    const response = await api
      .post("/api/users/signin")
      .send(user)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response.body.accessToken).toBeDefined();
    expect(response.body.refreshToken).toBeDefined();
  });

  test("user is not logged in if email or password is missing", async () => {
    const user = {};
    const response = await api
      .post("/api/users/signin")
      .send(user)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.error).toContain("Email or password is missing!!");
  });

  test("user is not logged in if email donot exists", async () => {
    const user = {
      email: "anonymous@leapfrog.com",
      password: "anonymous123",
    };
    const response = await api
      .post("/api/users/signin")
      .send(user)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.error).toContain("Email doesnot exists");
  });

  test("user is not loggedin if password doesnot match", async () => {
    const user = {
      email: "narayangopal@leapfrog.com",
      password: "narayangopal12",
    };

    const response = await api
      .post("/api/users/signin")
      .send(user)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    expect(response.body.error).toContain("Wrong password");
  });
});

describe("POST /api/users/refresh-token", () => {
  test("refresh token is generated", async () => {
    const loggedInUser = await api
      .post("/api/users/signin")
      .send({
        email: "narayangopal@leapfrog.com",
        password: "narayangopal123",
      })
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const response = await api
      .post("/api/users/refresh")
      .send({ refreshToken: loggedInUser.body.refreshToken })
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response.body.accessToken).toBeDefined();
  });
});
