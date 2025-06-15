describe("API token inválido", () => {
  it("Devolver 401 token inválido", () => {
    cy.request({
      method: 'GET',
      url: 'https://echo-serv.tbxnet.com/v1/qa/test3',
      headers: {
        authorization: 'Bearer fake-token-123' // token inválido
      },
      failOnStatusCode: false // evitar el fallo automático en caso de error
    }).then((response) => { 
      cy.log(JSON.stringify(response.body)); // Imprimir la respuesta en la consola

      expect(response.duration).to.be.lessThan(2000); // Verifica que la duración sea menor a 2000 ms
      expect(response.body).to.have.property('code'); // Verifica que 'code' exista en el cuerpo de la respuesta
      expect(response.body).to.have.property('message'); // Verifica que 'message' exista en el cuerpo de la respuesta
      expect(response.body.message).to.not.equal('Unauthorized'); // Verifica que el mensaje no sea "Unauthorized"
      expect(response.body.message).to.eq('API KEY is required'); 

      cy.log('La documentación indica que el mensaje de error es "Unauthorized", pero la respuesta real es: ' + response.body.message);

    });
  });
});

