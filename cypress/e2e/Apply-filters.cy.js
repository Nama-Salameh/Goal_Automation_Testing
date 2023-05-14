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
      //cy.get('#all_levels').should('be.checked'); // checks if checkbox is selected
      //cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();

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

    it('List of Group filter' , ()=>{

        cy.get('h5 > strong').contains("Other filters").should('exist');

        cy.get('label[for = "not_observed"').contains("Not observed").should('exist');
        cy.get('#not_observed').should('exist').should('be.checked');

        cy.get('label[for = "expected_ByNow"').contains("Expected by now only").should('exist');
        cy.get('#expected_ByNow').should('exist').should('not.be.checked');
    });

    it('Apply filter for selected goal and group with all levels' , ()=>{        
        //select topic 1
        cy.get('#topic_186').check({force : true});
        cy.get('#topic_186').should('exist').should('be.checked');

        //select group 1
        cy.get('#goal_1330').check({force : true});
        cy.get('#goal_1330').should('exist').should('be.checked');
        cy.get('#group_Group1').check({force : true});
        cy.get('#group_Group1').should('exist').should('be.checked');

        //select all levels
        cy.get('#all_levels').check({force : true});
        cy.get('#all_levels').should('exist').should('be.checked'); 

        cy.get('#not_observed').uncheck({force : true});
        cy.get('#not_observed').should('exist').should('not.be.checked');
        
        cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();

        cy.get('#total_goal').should('have.text', '2');
        cy.get('#observedGoal').should('have.text', '2');
        cy.get('#expectedByNow').should('have.text', '2');
        cy.get('#late_goals').should('have.text', '0');

        cy.get('input#goal_1330').should('exist').should('be.checked');
       // cy.get('label[for = "check1330"').should('have.text', '\n                                \n                            Goal 1\n                            \n                            \n                                Topic: Topic 1\n                                \n                                \n                                    ECD: May 9, 2022\n                                \n                            \n                       ');
        //cy.get('label[for = "check1330"').find('small').should('have.text', 'Topic: Topic 1');
        //cy.get('label[for = "check1330"').find('small').find('strong').should('have.text', ' EDC: May 9, 2022 ');
        cy.get('input#check1330_Group1').should('exist').should('be.checked');
        cy.get('label[for = "check1330_Group1"').find('strong').should('have.text', 'Group 1');
       
        //cy.get('check1330_Group1_RaghadKh').should('exist').should('not.be.checked');
        //cy.get('strong[for = "check1330_Group1_RaghadKh"').should('have.text', '\n Raghad\n Khatatba\n (RaghadKh)\n ');
        //cy.get('h.goal_observed small').should('have.text', 'Observed on');
        //cy.get('h.goal_observed').find('small').find('strong').should('have.text', 'May 11, 2023, 7:52 p.m');
        //cy.get('h.goal_observed').find('small').find('strong').should('have.text', 'RaghadKh');
        cy.get('select[name="grade"]').should('have.value', '4');

        //cy.get('check1330_Group1_Nama_Salameh').should('exist').should('not.be.checked');
        //cy.get('strong[for = "check1330_Group1_Nama_Salameh"').should('have.text', "Nama' Salameh (Nama_Salameh) ");
        //cy.get('h.goal_observed').find('small').should('have.text', 'Observed on');
       // cy.get('h.goal_observed').find('small').find('strong').should('have.text', 'May 11, 2023, 7:52 p.m');
        //cy.get('h.goal_observed').find('small').find('strong').should('have.text', 'RaghadKh');
        cy.get('select[name="grade"]').should('have.value', '4');
    });
});