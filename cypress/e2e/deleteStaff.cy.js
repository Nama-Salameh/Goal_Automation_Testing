beforeEach(() =>{
  cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/') // visit login page
  cy.get('#id_username').type('RaghadKh');
  cy.get('#id_password').type('Raghad0599638635');
  cy.get('select[name="login_as"]').select('Staff');
  cy.get('button[type="submit"]').click();
  cy.wait(2000);
  cy.visit('https://goal-dev.mdx.ac.uk/staff/30/staffs/');
  })

   it('Check Open Staff page', () => {
    cy.get('table.table').should('exist');
   });
   it('Check Remove exsisting staff ', () => {
   cy.get('tr#staff_Raghad').click();
   cy.wait(2000);
  cy.get('a[data-href="Raghad"]').click({ force: true });
    cy.wait(2000);
    cy.get('a.btn.btn-danger.btn-ok[data-href="Raghad"]').click();
   });
   it('Check cancel Remove exsisting staff ', () => {
    cy.get('tr#staff_RaghadKh').click();
    cy.wait(2000);
    cy.get('#staff_RaghadKh a[data-href="RaghadKh"]').click({ force: true });
    cy.wait(2000);
    cy.get('.modal-footer').contains('Cancel').click();
   });

   