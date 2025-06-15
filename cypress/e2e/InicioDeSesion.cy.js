describe('Inicio de sesión ', () => {
  it('Debe iniciar sesión ', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();

    cy.get("[data-qa='login-email']").should("be.visible").type('leonelaramirez@gmail.com');
    cy.get("[data-qa='login-password']").should("be.visible").type('123456');
    cy.get("[data-qa='login-button']").should("be.visible").click();

    cy.contains('Logged in as Leonella').should('be.visible');
  });
});