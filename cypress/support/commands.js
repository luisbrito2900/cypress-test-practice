import InventoryPage from "./pageObjects/inventoryPage";
import LoginPage from "./pageObjects/loginPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Cypress.Commands.add("openLogin", () => {
  cy.visit("https://www.saucedemo.com/");
});

Cypress.Commands.add("login", () => {
  cy.openLogin();
  loginPage.usernameInput().type(Cypress.env("USERNAME"));
  loginPage.passwordInput().type(Cypress.env("PASSWORD"));
  loginPage.loginBtn().click();
  inventoryPage.productsTitle().should("have.text", "Products");
});
