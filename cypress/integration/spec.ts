describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('home works!')
  })
})

describe('My Second Test', () => {
  it('Visits counter page', () => {
    cy.visit('/')
    cy.contains('Counter').click()
    cy.contains('Counter is :')
    cy.contains('Increment').click()
    cy.contains('Increment').click()
    cy.contains('Counter is : 2')
    cy.contains('Decrement').click()
    cy.contains('Counter is : 1')
    cy.contains('Reset').click()
    cy.contains('Counter is : 0')
    cy.get('input').type('5')
    cy.contains('Add to counter').click()
    cy.contains('Counter is : 5')
  })
})
