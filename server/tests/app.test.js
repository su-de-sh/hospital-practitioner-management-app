const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("home returns a message", async () => {
  const response = await api
    .get("/")
    .expect(200)
    .expect("Content-Type", /text\/html/);
  expect(response.text).toContain(
    "<h1>Welcome to Hospital Practitioner Management System</h1>"
  );
});
