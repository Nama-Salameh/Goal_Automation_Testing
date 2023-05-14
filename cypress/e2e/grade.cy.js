describe('Grade', () => {

    beforeEach( ()=>{
        cy.visit('https://goal-dev.mdx.ac.uk/');
        cy.get('#id_username').type("Nama_Salameh");
        cy.get('#id_password').type("TTGGVVDD$%^&");
        cy.get('select[name = "login_as"]').select('staff');
        cy.get('button[type="submit"]').contains('Login').click();
        cy.get('.nav > .nav-item > .nav-link').click();
        //cy.get('.nav-link text-light').find('a').should('have.attr' , 'href', '/staff/30/goals/').click();
        cy.get('.mr-auto > :nth-child(3) > .nav-link')
  .should('be.visible')
  .click()
        });
    it('Grade' , ()=>{
       // cy.get('form[name = "csrfmiddlewaretoken"]);
//cy.get('.container .col-sum-2 .form-control mt-2 w-100 pr-0').should('have.attr' , 'name' , 'grade').click();
cy.get('#staff_HaniAbuSeir')
 });
});