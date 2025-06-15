describe("Api consulta GET", () => {
it ("Test Api GET v1/qa/test1" , () => {
    cy.request({
    method: 'GET',   
    url   : "https://echo-serv.tbxnet.com/v1/qa/test1" 
}). then(response => {

    // Imprimir la respuesta en la consola
    cy.log(JSON.stringify(response.body));

    // Validaciones de la respuesta
    expect(response.status).to.eq(200); // Verifica que el estado sea 200 OK
    expect(response.duration).to.be.lessThan(2000); // Verifica que la duración sea menor a 2000 ms
    expect(response.body).to.have.property('ok', true); // Verifica que 'ok' sea true
    expect(response.body).to.have.property('date'); // Verifica que 'date' exista en el cuerpo de la respuesta
  

    // Validaciones adicionales
    expect(response.body.date).to.not.be.empty;  // Verifica que la fecha no esté vacía
    expect(response.body.ok).to.be.a('boolean'); // Verifica que 'ok' sea un booleano
    expect(response.body.date).to.be.a('string'); // Verifica que 'date' sea una cadena de texto 
  
    })

  })

})