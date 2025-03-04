describe('template spec', () => {
  beforeEach(() => {
    cy.visit('../index.html')
  })
  it('visit portfolio homepage', () => {
    cy.url().should('include', 'index.html')
  })
  it('fill out contact form', () => {
    cy.get('#contact-form-button')
      .invoke("removeAttr", "target")
      .click()

    cy.origin('https://form.jotform.com', () => {
      const unique_user = ('test_name_' + Date.now())

      cy.get('[data-component="header"]').should('have.text', 'Contact Pamela')
      cy.get('[name="q1_name1"]').type(unique_user)
      cy.get('[name="q3_email"]').type(unique_user + "@email.com")
      cy.get('[name="q4_message"]').type("Message from " + unique_user)
      cy.get('.submit-button').click()
    })
    cy.origin('https://submit.jotform.com', () => {
      cy.get('.thankyou-main-text').should('have.text', "Thank You!")
    })
  })
})