beforeEach(() =>{
  cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/') // visit login page
  cy.get('#id_username').type('RaghadKh');
  cy.get('#id_password').type('Raghad0599638635');
  cy.get('select[name="login_as"]').select('Staff');
  cy.get('button[type="submit"]').click();
  cy.wait(2000);
  cy.visit('https://goal-dev.mdx.ac.uk/staff/30/staffs/');
  })

   it('Open Staff page', () => {
    cy.get('table.table').should('exist');
   });

   it('Staff page contain Button add staff', () => {
    cy.get('button').contains('Add staff').should('exist');
   });

   it('Staff page contain Input for add staff', () => {
    cy.get('input#new_staff').should('exist');
   });

   it('Check Add staff feature with valid user name ', () => {
        // Type in a valid username in the input field
        cy.get('#new_staff').type('nama.salameh')

        // Click the Add staff button
        cy.get('button').contains('Add staff').click()
    
        // Check that the user was successfully added to the table
        cy.get('table').should('contain', 'nama.salameh')
   });

    it('Check Add staff feature with InValid user name. ', () => {
      // Type in a valid username in the input field
      cy.get('#new_staff').type('xx')

      // Click the Add staff button
      cy.get('button').contains('Add staff').click()
  
    // Assert that the user was not added to the table
    cy.get('table').should('not.contain', 'xx');
 });

 it('Check Add staff feature with empty username ', () => {
    // leave the input field empty
    cy.get('input#new_staff').clear()

    // click on the Add button
    cy.get('button').contains('Add staff').click()

    // check that an error message is displayed
    cy.get('.error-message').should('be.visible').contains('Please enter a username')
});



