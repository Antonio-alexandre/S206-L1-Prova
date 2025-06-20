describe('Testes no site DemoBlaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html');
  });

  function realizarLogin(username, password) {
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.get('button').contains('Log in').click();
  }

  it('Acessar os detalhes do galaxy s6', () => {
    cy.contains('Samsung galaxy s6').click();
    cy.get('.name', { timeout: 10000 }).should('contain', 'Samsung galaxy s6');
    cy.get('.price-container').should('exist');
  });

  it('Adicionar produto ao carrinho', () => {
    cy.on('window:alert', (msg) => {
      expect(msg).to.eq('Product added');
    });

    cy.contains('Samsung galaxy s6').click();
    cy.get('#tbodyid', { timeout: 10000 }).should('be.visible');
    cy.contains('Add to cart').should('be.visible').click();
  });

  it('Erro de credenciais inválidas', () => {
    cy.on('window:alert', (msg) => {
      expect(msg).to.eq('User does not exist.');
    });
    cy.get('#login2').click();
    cy.get('#logInModal').should('have.class', 'show').and('be.visible');

    cy.get('#loginusername')
      .should('be.visible')
      .type('usuarioinvalido');
    cy.get('#loginpassword')
      .should('be.visible')
      .type('senhainvalida');
    cy.get('#logInModal .modal-footer button').contains('Log in').click();
  });

});