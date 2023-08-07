class HomePage {
  signUpWelcomeMessage() {
    return cy.get(".message-success > div");
  }

  signUpLink() {
    return cy.get("*[class='panel header'] li[data-label='or'] a");
  }

  homePageWelcomeMessage() {
    return cy.get("*[class='panel header'] *[class='not-logged-in']");
  }
}
export default HomePage;
