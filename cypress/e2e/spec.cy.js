describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('visit portfolio', () => {
    cy.visit('../index.html')
    // click on contact form
    //expect contact form to show
  })
  it('submit contact form', () => {
    //fill out form
    //submit form
    //expect form successful submission page
  })
})