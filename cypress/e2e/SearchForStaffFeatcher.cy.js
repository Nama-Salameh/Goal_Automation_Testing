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
 //Check Staff page contain Input for Search
   it('Check Staff page contain Input for Search', () => {
    cy.wait(2000);
    cy.get('input[type="search"]').should('exist')
   });
   //Check Search for staff that exsits in the staff list .
   it('Check Search for staff that exsits in the staff list .', () => {
     //write RaghadKh in input search
        cy.get('input[type="search"]').type('RaghadKh');
        cy.wait(2000);
        //chick that tabel contain RaghadKh
        cy.get('table').should('contain', 'RaghadKh')
        //chick that table contain one recored
       cy.get('table').should('have.length', 2);
      });
      //Check Search for staff that not exsits in the staff list .
      it('Check Search for staff that not exsits in the staff list .', () => {
        //write yy in input search
        cy.get('input[type="search"]').type('yy');
        cy.wait(2000);
        //chick that tabel not contain yy
        cy.get('table').should('not.contain', 'yy')
        //chick that table only contain 'No matching records found'
        cy.get('table').should('contain', 'No matching records found')
      });
