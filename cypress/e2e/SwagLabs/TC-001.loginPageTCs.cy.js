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
    cy.fixture('credentials').then((data) =>{
      loginPage.userNameInput().type(data.invalidusername);
      loginPage.userPassword().type(data.invalidpassword);
      loginPage.loginBtn().click();
      loginPage.invalidCredentialsErrorMsg().should("contain", "Username and password do not match");
    })
  });

  it("Login with just username typed", () => {
    cy.fixture('credentials').then((data) =>{
      loginPage.userNameInput().type(data.username);
      loginPage.loginBtn().click();
      loginPage.emptyPasswordFieldErrorMsg().should("contain", "Password is required");
    })
  });

  it("Login with just password typed", () => {
    cy.fixture('credentials').then((data) =>{
      loginPage.userPassword().type(data.password);
      loginPage.loginBtn().click();
      loginPage.emptyUsernameFieldErrorMsg().should("contain", "Username is required");
    })
  });

  it("Login with empty fields", () => {
    loginPage.loginBtn().click();
    loginPage.emptyFieldsErrorMsg().should("be.visible");
  });
});