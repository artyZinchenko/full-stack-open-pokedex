describe('Note app', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:8080');
    cy.contains('ivysaur');
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    );
  });
  it('pokemon page can be navigated to', function () {
    cy.visit('http://localhost:8080');
    cy.get('a[href="/pokemon/charmander"]').click();
    cy.contains('charmander');
    cy.contains('blaze');
  });
});
