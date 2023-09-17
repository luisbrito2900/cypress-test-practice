"use strict";
import LoginPage from "../../support/pageObjects/loginPage";
import HomePage from "../../support/pageObjects/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();
const email = Cypress.env("EMAIL");
const password = Cypress.env("PASSWORD");
const invalidEmail = Cypress.env("INVALID_EMAIL");
const invalidPassword = Cypress.env("INVALID_PASSWORD");

describe("Login", () => {
  beforeEach(() => {
    cy.goToUrl();
  });

  it("Login with invalid credentials", () => {
    homePage.signUpLink().click();
    loginPage.emailInput().type(invalidEmail);
    loginPage.passwordInput().type(invalidPassword);
    loginPage.loginBtn().click();
    loginPage
      .invalidCredentialsErrorMsg()
      .should("contain", "The account sign-in was incorrect");
  });

  it("Login with just email typed", () => {
    homePage.signUpLink().click();
    loginPage.emailInput().type(email);
    loginPage.loginBtn().click();
    loginPage
      .emptyPasswordFieldErrorMsg()
      .should("have.text", "This is a required field.");
  });

  it("Login with just password typed", () => {
    homePage.signUpLink().click();
    loginPage.passwordInput().type(password);
    loginPage.loginBtn().click();
    loginPage
      .emptyEmailFieldErrorMsg()
      .should("have.text", "This is a required field.");
  });

  it("Login with empty fields", () => {
    homePage.signUpLink().click();
    loginPage.loginBtn().click();
    loginPage
      .emptyFieldsErrorMsg()
      .should("contain", "A login and a password are required.");
  });
});
