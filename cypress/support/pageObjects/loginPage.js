class LoginPage {
  emailInput() {
    return cy.get("#email");
  }

  passwordInput() {
    return cy.get(
      "fieldset:nth-child(2) > :nth-child(3) > :nth-child(2) > #pass"
    );
  }

  loginBtn() {
    return cy.get(":nth-child(4) > :nth-child(1) > button:nth-child(1)");
  }

  emptyPasswordFieldErrorMsg() {
    return cy.get("#pass-error");
  }

  emptyEmailFieldErrorMsg() {
    return cy.get("#email-error");
  }

  invalidCredentialsErrorMsg() {
    return cy.get(".message-error.error.message > div");
  }

  emptyFieldsErrorMsg() {
    return cy.get(".message-error > div");
  }
}

export default LoginPage;
