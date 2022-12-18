/* eslint-disable no-undef */
describe("patient management app", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3001");
    cy.contains("leaphealth");
    cy.contains("Sign In");
  });

  //     it("user can register", function () {
  //       cy.visit("http://localhost:3002");
  //       cy.contains("Register").click();
  //       cy.get("#fullname").type("Cheng C");
  //       cy.get("#email").type("cheng11@gmail.com");
  //       cy.get("#password").type("12345");
  //       cy.get("#register-button").click();
  //     });

  //     it("login fails with wrong password", function () {
  //       cy.visit("http://localhost:3002");
  //       cy.contains("Login");
  //       cy.get("#email").type("cheng11@gmail.com");
  //       cy.get("#password").type("123");
  //       cy.get("#login-button").click();
  //     });

  //     it("user can login", function () {
  //       cy.visit("http://localhost:3002");
  //       cy.contains("Login");
  //       cy.get("#email").type("cheng11@gmail.com");
  //       cy.get("#password").type("12345");
  //       cy.get("#login-button").click();
  //     });
  //   });

  //   describe("when logged in", function () {
  //     beforeEach(function () {
  //       cy.visit("http://localhost:3002");
  //       cy.contains("Login");
  //       cy.get("#email").type("cheng11@gmail.com");
  //       cy.get("#password").type("12345");
  //       cy.get("#login-button").click();
  //     });

  //     it("a new pateint info can be added", function () {
  //       cy.get("#new-entry-button").click();
  //       cy.get("#fullname").type("Stephen curry");
  //       cy.get("#email").type("stephenc@gmail.com");
  //       cy.get("#dob").type("12 01 1999");
  //       cy.get("#profile").type("nonooo");
  //       cy.get("#contact").type("12345");
  //       cy.get("#city").type("Kathmandu");
  //       cy.get("#register-date").type("02 12 2021");
  //       cy.get("#last-appointment").type("02 13 2021");
  //       cy.get("#next-appointment").type("02 14, 2021");
  //       cy.get("#checkbox").click();
  //       cy.get("#add-button").click();
  //     });

  //     it("a pateint info can be edited", function () {
  //       cy.contains("Edit").click();
  //       cy.get("#contact").type("823211");
  //       cy.get("#edit-button").click();
  //     });

  //     it("a pateint can be deleted", function () {
  //       cy.contains("delete").click();
  //     });
});
