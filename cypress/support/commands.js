import LoginPage from "./pageObjects/loginPage";
import HomePage from "./pageObjects/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

Cypress.Commands.add("openLoginPage", () => {
  cy.visit(Cypress.env("baseUrl"));
});

Cypress.Commands.add("login", () => {
  cy.fixture('credentials').then((data) =>{
    loginPage.userNameInput().type(data.username);
    loginPage.userPassword().type(data.password);
    loginPage.loginBtn().click();
    homePage.dashboardTitle().should("be.visible");
  })
});