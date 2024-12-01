describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigates through all main routes', () => {
    cy.get('nav').should('be.visible')
    
    cy.get('nav').contains('Projects').click()
    cy.url().should('include', '/projects')
    
    cy.get('nav').contains('About').click()
    cy.url().should('include', '/about')
    
    cy.get('nav').contains('Contact').click()
    cy.url().should('include', '/contact')
  })
}) 