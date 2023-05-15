beforeEach(() =>{
  cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/') // visit login page
  cy.get('#id_username').type('RaghadKh');
  cy.get('#id_password').type('Raghad0599638635');
  cy.get('select[name="login_as"]').select('Staff');
  cy.get('button[type="submit"]').click();
  cy.wait(2000);
  cy.visit('https://goal-dev.mdx.ac.uk/staff/30/staffs/');
  })
 //check open staff page
   it('Check Open Staff page', () => {
    cy.get('table.table').should('exist');
   });
   //Check Remove exsisting staff 
   it('Check Remove exsisting staff ', () => {
    //click on Raghad
   cy.get('tr#staff_Raghad').click();
   cy.wait(2000);
   //click on remove
   cy.get('a[data-href="Raghad"]').click({ force: true });
    cy.wait(2000);
    //click remove on aleart
    cy.get('a.btn.btn-danger.btn-ok[data-href="Raghad"]').click();
   });
   it('Check cancel Remove exsisting staff ', () => {
     //click on RaghadKh
    cy.get('tr#staff_RaghadKh').click();
    cy.wait(2000);
     //click on remove
    cy.get('#staff_RaghadKh a[data-href="RaghadKh"]').click({ force: true });
    cy.wait(2000);
    //click cancel remove in aleart
    cy.get('.modal-footer').contains('Cancel').click();
   });

   