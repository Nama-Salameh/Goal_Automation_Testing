describe('Grade', () => {

    beforeEach( ()=>{
        cy.visit('https://goal-dev.mdx.ac.uk/');
        cy.get('#id_username').type("Nama_Salameh");
        cy.get('#id_password').type("TTGGVVDD$%^&");
        cy.get('select[name = "login_as"]').select('staff');
        cy.get('button[type="submit"]').contains('Login').click();
        cy.get('.nav > .nav-item > .nav-link').click();
        //cy.get('.nav-link text-light').find('a').should('have.attr' , 'href', '/staff/30/goals/').click();
        cy.get('a[href = "/staff/30/goals/"]').click();
       // cy.get('.mr-auto > :nth-child(3) > .nav-link').should('be.visible').click()
    });

    it('List of Group filter' , ()=>{

        cy.get('h5 > strong').contains("Group filter").should('exist');

        cy.get('label[for = "all_groups"').contains("All").should('exist');
        cy.get('#all_groups').should('exist').should('not.be.checked'); 

        cy.get('label[for = "group_None"').contains("None").should('exist');
        cy.get('#group_None').should('exist').should('not.be.checked'); 

        cy.get('label[for = "group_g1"').contains("g1").should('exist');
        cy.get('#group_g1').should('exist').should('not.be.checked'); 

        cy.get('label[for = "group_Group1"').contains("Group 1").should('exist');
        cy.get('#group_Group1').should('exist').should('not.be.checked'); 

    });  

});