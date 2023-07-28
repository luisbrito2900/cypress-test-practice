import LoginPage from "../../support/pageObjects/loginPage";

const loginPage = new LoginPage();

describe("Login", () => {

  beforeEach(function () {
    cy.openLoginPage();
  });

  it("Login with valid credentials", () => {
    cy.login();
  });

  it("Login with invalid credentials", () => {
    loginPage.userNameInput().type(Cypress.env("invalidUserName"));
    loginPage.userPassword().type(Cypress.env("invalidUserPassword"));
    loginPage.loginBtn().click();
    loginPage.invalidCredentialsErrorMsg().should("contain", "Username and password do not match");
  });

  it("Login with just username typed", () => {
    loginPage.userNameInput().type(Cypress.env("userName"));
    loginPage.loginBtn().click();
    loginPage.emptyPasswordFieldErrorMsg().should("contain", "Password is required");
  });

  it("Login with just password typed", () => {
    loginPage.userPassword().type(Cypress.env("userPassword"));
    loginPage.loginBtn().click();
    loginPage.emptyUsernameFieldErrorMsg().should("contain", "Username is required");
  });

  it("Login with empty fields", () => {
    loginPage.loginBtn().click();
    loginPage.emptyFieldsErrorMsg().should("be.visible");
  });
});