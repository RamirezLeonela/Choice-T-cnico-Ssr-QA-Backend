describe('Registro duplicado ', () => {
  it('Debe mostrar mensaje de error al intentar registrar el mismo correo', () => {
    // Paso 1: Ir al sitio
    cy.visit('https://automationexercise.com');

    // Paso 2: Ir a la pantalla de registro
    cy.contains('Signup / Login').click();

    // Paso 3: Ingresar un nombre y correo ya existente
    cy.get('input[data-qa="signup-name"]').should("be.visible").type('Leonella');
    cy.get('input[data-qa="signup-email"]').should("be.visible").type('leonelaramirez@gmail.com');
    cy.get('button[data-qa="signup-button"]').should("be.visible").click();

    // Paso 4: Verificar que se muestre el mensaje de error
    cy.contains('Email Address already exist!').should('be.visible');
  });
});
