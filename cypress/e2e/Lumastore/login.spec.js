import LoginPage from "../../support/pageObjects/loginPage";

const loginPage = new LoginPage();

describe("Login", () => {
  before(() => {
    cy.openLogin();
  });

  it("Login with invalid credentials", () => {
    loginPage.usernameInput().type(Cypress.env("INVALID_USERNAME"));
    loginPage.passwordInput().type(Cypress.env("INVALID_PASSWORD"));
    loginPage.loginBtn().click();
    loginPage
      .invalidCredentialsErrorMsg()
      .should(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  it("Login with just email typed", () => {
    loginPage.usernameInput().type(Cypress.env("USERNAME"));
    loginPage.loginBtn().click();
    loginPage
      .invalidCredentialsErrorMsg()
      .should("have.text", "Epic sadface: Password is required");
  });

  it("Login with just password typed", () => {
    loginPage.passwordInput().type(Cypress.env("PASSWORD"));
    loginPage.loginBtn().click();
    loginPage
      .invalidCredentialsErrorMsg()
      .should("have.text", "Epic sadface: Username is required");
  });

  it("Login with empty fields", () => {
    loginPage.loginBtn().click();
    loginPage
      .invalidCredentialsErrorMsg()
      .should("have.text", "Epic sadface: Username is required");
  });
});
