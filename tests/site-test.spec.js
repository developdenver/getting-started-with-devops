describe('PHP Travels Local Server Test', () => {
  it('Tests the Landing Page of PHP Travels', () => {
    cy.visit('/')
    cy
      .get('header img')
      .should('have.attr', 'src', `./images/phptravels-logo.png`)
    cy
      .get('h2')
      .should('have.html', 'Application Test Drive.')
    cy
      .get('.dropdown-menu li')
      .contains('Demo')
      .should('exist')
    cy
      .get('.dropdown-menu li')
      .contains('Order')
      .should('exist')
    cy
      .get('.dropdown-menu li')
      .contains('Product')
      .should('exist')
    cy
      .get('.dropdown-submenu > ul > li')
      .eq(0)
      .find('a')
      .should('have.text', 'Product')
    cy
      .get('.dropdown-submenu > ul > li')
      .eq(1)
      .find('a')
      .should('have.text', 'Documentation')
    cy
      .get('.dropdown-submenu > ul > li')
      .eq(2)
      .find('a')
      .should('have.text', 'Features')
    cy
      .get('.dropdown-submenu > ul > li')
      .eq(3)
      .find('a')
      .should('have.text', 'Technology')
    cy
      .get('body > section > ul')
      .find('h4')
      .should('have.length', 6)
    cy
      .get('.dropdown-toggle')
      .click()
    cy
      .get('a')
      .contains('Order')
      .click()
    cy
      .url()
      .should('contains', '/order.html')
  })
})