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
    it('List of Level filter' , ()=>{
      cy.get('h5 > strong').contains("Level filters").should('exist');

      cy.get('label[for = "all_levels"').contains("All").should('exist');
      cy.get('#all_levels').should('exist').should('be.checked'); 

      cy.get('label[for = "level_Low"').should('exist').contains("Low");
      cy.get('#level_Low').should('exist').should('be.checked'); 

      cy.get('label[for = "level_Medium"').should('exist').contains("Medium");
      cy.get('#level_Medium').should('exist').should('be.checked'); 

      cy.get('label[for = "level_High"').should('exist').contains("High");
      cy.get('#level_High').should('exist').should('be.checked'); 
    });

    it('List of Goal Filter' , ()=>{
        cy.get('h5 > strong').contains("Goal Filter").should('exist');

        cy.get('label[for = "all_goals"').should('exist');
        cy.get(':nth-child(1) > .custom-control-label > h5').should('exist').contains("All Goals");
        cy.get('#all_goals').should('exist').should('not.be.checked'); 

        cy.get('label[for = "topic_186"').should('exist');
        cy.get(':nth-child(7) > .custom-control-label > h5').should('exist').contains("Topic 1");
        cy.get('#topic_186').should('exist').should('not.be.checked');
        
        cy.get('label[for = "topic_185"').should('exist');
        cy.get(':nth-child(3) > .custom-control-label > h5').should('exist').contains("Topic 2");
        cy.get('#topic_185').should('exist').should('not.be.checked');
        
        cy.get('label[for = "goal_1330"').contains("Goal 1").should('exist');
        cy.get('#goal_1330').should('exist').should('not.be.checked');

        cy.get('label[for = "goal_1291"').contains("Goal 2").should('exist');
        cy.get('#goal_1291').should('exist').should('not.be.checked');
        
        cy.get('label[for = "goal_1232"').contains("Goal 3").should('exist');
        cy.get('#goal_1232').should('exist').should('not.be.checked');
    });

});