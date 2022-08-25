class LoginActions {
  openLoginPage() {
    cy.visit("/#/login");

    return this;
  }

  //filling actions
  fillEmail(email: string) {
    return cy.get('[type="email"]').clear().type(email);
  }

  fillPassword(password: string) {
    return cy.get('[type="password"]').clear().type(password);
  }

  //click actions
  clickSubmitButton() {
    cy.get('[type="submit"]').click();
    return this;
  }

  clickNeedAnAccountButton() {
    cy.contains("a", "Need an account?").click();
    return this;
  }
}

export default LoginActions;
