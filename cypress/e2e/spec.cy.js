describe('Proceso de Compra', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Crear Usuario", () => {
    cy.get('a[data-target="#signInModal"]').click();
    cy.get('input#sign-username').invoke('val', "Parco QA");
    cy.get('input#sign-password').invoke('val', "video");
    cy.contains('button', 'Sign up').click();
    cy.screenshot();
  })

  it("Iniciar sesion", () => {
    cy.get('a[data-target="#logInModal"]').click();
    cy.get('input#loginusername').invoke('val', "Parco QA");
    cy.get('input#loginpassword').invoke('val', "video");
    cy.contains('button', 'Log in').click();
    cy.get("#nameofuser").should('have.text', 'Welcome Parco QA');
  })

  it("Selecionar articulo y Comprarlo", () => {
    cy.contains('a', 'Iphone 6 32gb').click();
    cy.get("h2").should('have.text', 'Iphone 6 32gb');
    cy.contains('a', 'Add to cart').click();
    
    cy.contains('a', 'Cart').click();
    cy.get('#tbodyid tr:nth-child(1)').find('td').should('contain.text', '790');

    cy.get('button[data-toggle="modal"]').click();
    cy.get('input#name').invoke('val', 'Parco');
    cy.get('input#country').invoke('val', 'Colombia');
    cy.get('input#city').invoke('val', 'Medellin');
    cy.get('input#card').invoke('val', '215159484515');
    cy.get('input#month').invoke('val', 'febrero');
    cy.get('input#year').invoke('val', '2024');
    cy.contains('button', 'Purchase').click();
    cy.get("h2").should('contain.text', 'Thank you for your purchase!');
    cy.contains('button', 'OK').click();
    cy.screenshot();
  })

})