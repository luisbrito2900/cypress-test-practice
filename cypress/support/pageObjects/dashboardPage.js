class DashboardPage {
  loginWelcomeMessage() {
    return cy.get(":nth-child(2) > .greet > .logged-in").should("be.visible");
  }
}
export default DashboardPage;
