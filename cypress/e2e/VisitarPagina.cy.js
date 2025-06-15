describe('Validar carga del sitio ', () => {
  it('Debe mostrar el título correcto', () => {
    // Paso 1: Visitar la página de inicio
    cy.visit('https://automationexercise.com');
    cy.wait(2000);

    // Paso 2: Verificar que el título contenga el texto esperado
    cy.title().should('eq', 'Automation Exercise');


  });
});

