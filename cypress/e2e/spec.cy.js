describe('template spec', () => {
  beforeEach(() => {
    cy.visit('../index.html')
  })
  it('visit portfolio homepage', () => {
    cy.url().should('include', 'index.html')
  })
  it('click on contact form', () => {
    cy.get('#contact-form-button')
      .invoke("removeAttr", "target")
      .click()

    cy.origin('https://form.jotform.com', () => {
      cy.get('[data-component="header"]').should('have.text', 'Contact Pamela')
    })
  })
  it('submit contact form', () => {
    //fill out form
    //submit form
    //expect form successful submission page
  })
})