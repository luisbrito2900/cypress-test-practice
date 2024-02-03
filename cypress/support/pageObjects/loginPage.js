class LoginPage {
  usernameInput() {
    return cy.get('[data-test="username"]');
  }

  passwordInput() {
    return cy.get('[data-test="password"]');
  }

  loginBtn() {
    return cy.get('[data-test="login-button"]');
  }

  invalidCredentialsErrorMsg() {
    return cy.get('[data-test="error"]');
  }
}

export default LoginPage;
