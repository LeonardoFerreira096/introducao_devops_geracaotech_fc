describe('Página da Lojinha', () => {
  it('deve exibir os três produtos com nomes e preços formatados', () => {
    cy.visit('/');

    cy.get('h1').should('have.text', 'Lojinha');
    cy.get('#lista-produtos li').should('have.length', 3);

    cy.get('#lista-produtos li').eq(0).should('have.text', 'Caderno: R$ 19,90');
    cy.get('#lista-produtos li').eq(1).should('have.text', 'Caneta: R$ 4,50');
    cy.get('#lista-produtos li').eq(2).should('have.text', 'Mochila: R$ 89,90');
  });
});
