class LoginPage {
    userNameInput() {
      return cy.get("#user-name");
    }
  
    userPassword() {
      return cy.get("#password");
    }
  
    loginBtn() {
      return cy.get("#login-button");
    }
  
    emptyPasswordFieldErrorMsg() {
      return cy.get(":nth-of-type(1) > h3");
    }
  
    emptyUsernameFieldErrorMsg() {
      return cy.get(":nth-of-type(1) > h3");
    }
  
    invalidCredentialsErrorMsg() {
      return cy.get(":nth-of-type(1) > h3");
    }
  
    emptyFieldsErrorMsg() {
      return cy.get(":nth-of-type(1) > h3");
    }
  }
  
  export default LoginPage;