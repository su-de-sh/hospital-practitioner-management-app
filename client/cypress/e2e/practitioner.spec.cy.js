/* eslint-disable no-undef */
describe("User can", function () {
  it(" open the app", function () {
    cy.visit("http://localhost:3000");
    cy.contains("leaphealth");
    cy.contains("Sign In");
  });

  it("signup ", function () {
    cy.visit("http://localhost:3000");
    cy.contains("SignUp").click();

    cy.get("#email").type("admin@gmail.com");
    cy.get("#password").type("admin123456");
    cy.get("#signup-button").click();
  });

  it("not login if wrong password", function () {
    cy.visit("http://localhost:3000");

    cy.get("#email").type("admin@gmail.com");
    cy.get("#password").type("admin123");
    cy.get("#signin-button").click();
    cy.contains("Wrong password");
  });

  it("login with correct email and password", function () {
    cy.visit("http://localhost:3000");

    cy.get("#email").type("admin@gmail.com");
    cy.get("#password").type("admin123456");
    cy.get("#signin-button").click();
    cy.contains("Practitioner Management");
  });
});

describe("when user is logged in", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
    cy.get("#email").type("admin@gmail.com");
    cy.get("#password").type("admin123456");
    cy.get("#signin-button").click();
  });

  it("can view all practitioners", function () {
    cy.contains("Practitioner Management");
    cy.contains("Basic Info");
  });

  it("a new practitioner can be added", function () {
    cy.get("#add-new-button").click();
    cy.get("#name").type("Saurav Gupta");
    cy.get("#email").type("saurav@gmail.com");
    cy.get("#dob").type("11 11 1989");

    cy.get("#phone").type("9898000000");
    cy.get("#address").type("Kathmandu,Nepal");
    cy.get("#designation").type("Neurologist");
    cy.get("#start-time").type("06:00");
    cy.get("#end-time").type("16:00");
    cy.get("#checkbox").click();
    cy.get("#submit").click();
  });

  it("a practitioner can be deleted from the list", function () {
    cy.get("#delete-button").click();
    cy.contains("Practitioner deleted successfully");
  });

  it.only("a practitioner can be edited", function () {
    cy.get("#practitioner-row").click();
    cy.contains("Edit").click();
    cy.get("#working-days").clear().type("Monday, Tuesday, Wednesday");
    cy.get("#submit").click();
    cy.contains("Practitioner updated successfully");
  });
});
