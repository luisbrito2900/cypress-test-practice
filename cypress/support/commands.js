"use strict";

import HomePage from "./pageObjects/homePage";
import LoginPage from "./pageObjects/loginPage";

const loginPage = new LoginPage();
const homePage = new HomePage();
const email = Cypress.env("EMAIL");
const password = Cypress.env("PASSWORD");
const url = Cypress.env("baseUrl");

Cypress.Commands.add("goToUrl", () => {
  cy.visit(url);
  cy.verifyPageLoad();
});

Cypress.Commands.add("login", () => {
  loginPage.emailInput().type(email);
  loginPage.passwordInput().type(password);
  loginPage.loginBtn().click();
});

Cypress.Commands.add("verifyPageLoad", () => {
  homePage.homePageWelcomeMessage().should("be.visible");
});
