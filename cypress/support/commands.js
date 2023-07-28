import LoginPage from "./pageObjects/loginPage";
import HomePage from "./pageObjects/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

Cypress.Commands.add("openLoginPage", () => {
  cy.visit(Cypress.env("baseUrl"));
});

Cypress.Commands.add("login", () => {
  loginPage.userNameInput().type(Cypress.env("userName"));
  loginPage.userPassword().type(Cypress.env("userPassword"));
  loginPage.loginBtn().click();
  homePage.dashboardTitle().should("be.visible");
});