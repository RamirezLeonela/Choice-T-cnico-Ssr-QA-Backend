describe('Registro de nuevo usuario', () => {
  it('Debe permitir registrar un usuario correctamente', () => {
    // Paso 1: Ir al sitio
    cy.visit('https://automationexercise.com');

    // Paso 2: Ir al formulario de registro
    cy.contains('Signup / Login').click();

    // Paso 3: Llenar nombre y correo aleatorio
    const correo = `usuario${Date.now()}@correo.com`; //  Declaración antes de usar
    cy.get("[data-qa='signup-name']").type('Leonella ');
    cy.get("[data-qa='signup-email']").type(correo); // Usar la variable declarada
    cy.get("[data-qa='signup-button']").click();

    // Paso 4: Llenar los campos obligatorios del formulario
    cy.get('#id_gender1').click(); // Género
    cy.get('#password').should("be.visible").type('123456');
    cy.get('#days').should("be.visible").select('29').should("have.value", "29");
    cy.get('#months').should("be.visible").select('November').should("have.value", "11");
    cy.get('#years').should("be.visible").select('1989').should("have.value", "1989");
    cy.get('#first_name').should("be.visible").type('Leonela');
    cy.get('#last_name').should("be.visible").type('Ramirez');
    cy.get('#address1').should("be.visible").type('Calle 1');
    cy.get('#country').should("be.visible").select('Canada').should("have.value", "Canada");
    cy.get('#state').should("be.visible").type('Mendoza');
    cy.get('#city').should("be.visible").type('Mendoza');
    cy.get('#zipcode').should("be.visible").type('12345');
    cy.get('#mobile_number').should("be.visible").type('1127402753');
    cy.wait(3000);

    // Paso 5: Crear Registro
    cy.get('button[data-qa="create-account"]').should("be.visible").click();

    // Paso 6: Verificar que el Registro fue exitoso
    cy.contains('Account Created!').should('be.visible');
  });
});
