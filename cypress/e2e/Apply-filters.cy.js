describe('Apply_filters', () => {

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

    it('List of Other filter' , ()=>{

        cy.get('h5 > strong').contains("Other filters").should('exist');

        cy.get('label[for = "not_observed"').contains("Not observed").should('exist');
        cy.get('#not_observed').should('exist').should('be.checked');

        cy.get('label[for = "expected_ByNow"').contains("Expected by now only").should('exist');
        cy.get('#expected_ByNow').should('exist').should('not.be.checked');
    });

    it('Apply filter for selected goal and group with all levels' , ()=>{        
        //checked the Topic 1 filter and test if its checked (must be checked)
        cy.get('#topic_186').check({force : true});
        cy.get('#topic_186').should('exist').should('be.checked');

        //checked the Group 1 and None in Group filter and test if its checked (must be checked)
        cy.get('#goal_1330').check({force : true});
        cy.get('#goal_1330').should('exist').should('be.checked');
        cy.get('#group_Group1').check({force : true});
        cy.get('#group_Group1').should('exist').should('be.checked');

        //test if all levels checked
        cy.get('#all_levels').should('exist').should('be.checked'); 
        cy.get('#level_Medium').should('exist').should('be.checked'); 
        cy.get('#level_High').should('exist').should('be.checked'); 
        cy.get('#level_Low').should('exist').should('be.checked'); 

        //unchecked the "Not observed" filter then testing it (must be not un-checked)
        cy.get('#not_observed').uncheck({force : true});
        cy.get('#not_observed').should('exist').should('not.be.checked');
        
        //check if "Apply filters" exist and click on it
        cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();

        //check if the total Goals correct
        cy.get('#total_goal').should('have.text', '2');
        //check if the observed goals correct
        cy.get('#observedGoal').should('have.text', '2');
        //check if the expected by now goals correct
        cy.get('#expectedByNow').should('have.text', '2');
        //check if the late Goals correct
        cy.get('#late_goals').should('have.text', '0');

        //test if the titles exists
        //cy.get('li.list-group-item').should('exist');
        cy.get('strong').contains('Goal details').should('exist');
        cy.get('strong').contains('Group').should('exist');
        cy.get('strong').contains('Student').should('exist');
        
        //test if the goal exist and checked 
        cy.get('input#goal_1330').should('exist').should('be.checked');
        //test if the "Goal 1" text is exists (name of the goal)
        cy.get('label[for="check1330"] > strong').should('exist').contains('Goal 1');
        //test if the "Topic 1" text is exists (name of the topic)
        cy.get('label[for="check1330"] > small > strong').should('exist').contains('Topic 1');
        //test if the "June 8, 2022" text is exists  (date of the Goal)
        cy.get('label[for="check1330"] > small > strong').should('exist').contains('June 8, 2022');

        //test if the Group 1 appeared
        cy.get('label[for = "check1330_Group1"').find('strong').should('have.text', 'Group 1');


        //test if the goal for Raghad checked (must be checked)
        cy.get('input#check1330_Group1_RaghadKh').should('exist').should('not.be.checked');
        //test if "RaghadKh" label appeared that having the goal
        cy.get('strong[for="check1330_Group1_RaghadKh"]').should('exist').contains('Raghad Khatatba (RaghadKh)');
        //test the date of observed === May 11, 2023, 7:52 p.m.
        cy.get('h6.goal_observed strong').contains('May 11, 2023, 7:52 p.m.').should('exist');
        //test if the observer === RaghadKh
        cy.get('h6.goal_observed strong').contains('RaghadKh').should('exist');
        //test if the grade === 4 
        cy.get('select[name="grade"]').should('have.value', '4');


         //test if the goal for Nama' checked (must be checked)
         cy.get('input#check1330_Group1_Nama_Salameh').should('exist').should('not.be.checked');
        //test if the "Nama_Salameh" label appeared  that having the goal
        cy.get('strong[for="check1330_Group1_Nama_Salameh"]').should('exist').contains("Nama' Salameh (Nama_Salameh)");
        //test the date of observed === May 11, 2023, 7:52 p.m.
        cy.get('h6.goal_observed strong').contains('May 11, 2023, 7:52 p.m.').should('exist');
        //test if the observer === RaghadKh
        cy.get('h6.goal_observed strong').contains('RaghadKh').should('exist');
        //test if the grade === 4 
        cy.get('select[name="grade"]').should('have.value', '4');
 });

    //Applying only the "Not observed" filter for goal 1, 2, 3 in all groups
    it('Apply Not Observed Filter', () => {

        //checked the goal 1 then testing it (must be checked)
        cy.get('#goal_1330').check({force : true});                
        cy.get('#goal_1330').should('exist').should('be.checked');

        //checked the goal 2 then testing it (must be checked)
        cy.get('#goal_1291').check({force : true});
        cy.get('#goal_1291').should('exist').should('be.checked');

        //checked the goal 3 then testing it (must be checked)
        cy.get('#goal_1232').check({force : true});
        cy.get('#goal_1232').should('exist').should('be.checked');

        //checked the all levels option then testing it (must be checked)
        cy.get('#all_levels').check({force : true});
        cy.get('#all_levels').should('exist').should('be.checked'); 

        //checked the all groups option then testing it (must be checked)
        cy.get('#all_groups').check({force : true});
        cy.get('#all_groups').should('exist').should('be.checked'); 

        //testing that not observed checked
        cy.get('#not_observed').should('exist').should('be.checked');

        //click to Apply filters button 
        cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();

        //test that image "no data " must appear
        cy.get('img[src="/static/images/noDataAva.png"]').should('be.visible');
    });

    //Applying Medium level and not observed filer
    it('Apply Medium and not observed filter for GOals', () => {
        //gitting the content of the div that must contail the goals (empty)
        let prevContent;
        cy.get('#observer_table_div').then((div) => {
            prevContent = div.text();
        }); 
        //unchecked the low level filter then testing it (must be un-checked)
        cy.get('#level_Low').uncheck({force : true});
        cy.get('#level_Low').should('exist').should('not.be.checked'); 

        //unchecked the High level filter then testing it (must be un-checked)
        cy.get('#level_High').uncheck({force : true});
        cy.get('#level_High').should('exist').should('not.be.checked'); 

        //testing if the Medium level checked
        cy.get('#level_Medium').should('exist').should('be.checked'); 

        //testing if the not observed option checked
        cy.get('#not_observed').should('exist').should('be.checked');

        //click on apply filters button
        cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();

        //get the current content and copmare it with the prevois (must be empty and the comparing result equal)
        cy.get('#observer_table_div').then((div) => {
            expect(div.text()).to.equal(prevContent);
        });
    });

    //Applying filter without select any Goal(only the levels and not observed filter checked automatically from the app)
    it('Applying filter without select any Goal', ()=>{
        //click on apply filters button
        cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();
        //testing if the alert appearing 
        cy.on ('window:alert', (text) => {
            expect(text).to.eq('Please selet a goal')
        }); 
    });

    //Applying filter for Goal 1 without selecting a group (the levels and not observed filter checked automatically from the app)
    it('Applying filter without select any Group' , ()=>{

        //checked the goal 1 then testing it (must be checked)
        cy.get('#goal_1330').check({force : true});                
        cy.get('#goal_1330').should('exist').should('be.checked');

        //click on apply filters button
        cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();

        //testing if the alert appearing 
        cy.on ('window:alert', (text) => {
            expect(text).to.eq('Please selet a group')
        });
    });

    //Applying filter for all Goals and Groups (without selecting any level)
    it('Applying filter without select any level' , ()=>{

        //gitting the content of the div that must contain the goals (must be empty)
        let prevContent;
        cy.get('#observer_table_div').then((div) => {
            prevContent = div.text();
        }); 

        //checking all goals opting and testing it (must be checked)
        cy.get('#all_goals').check({force : true});                
        cy.get('#all_goals').should('exist').should('be.checked'); 

        //checking all groups opting and testing it (must be checked)
        cy.get('#all_groups').check({force : true});                
        cy.get('#all_groups').should('exist').should('be.checked'); 

        //unchecked the Low level filter then testing it (must be checked)
        cy.get('#level_Low').uncheck({force : true});
        cy.get('#level_Low').should('exist').should('not.be.checked'); 

        //unchecked the High level filter then testing it (must be checked)
        cy.get('#level_High').uncheck({force : true});
        cy.get('#level_High').should('exist').should('not.be.checked'); 

        //unchecked the Medium level filter then testing it (must be checked)
        cy.get('#level_Medium').uncheck({force : true});
        cy.get('#level_Medium').should('exist').should('not.be.checked'); 

        //unchecked the "not observed" filter then testing it (must be checked)
        cy.get('#not_observed').uncheck({force : true});
        cy.get('#not_observed').should('exist').should('not.be.checked');
         
        //click on apply filters button
        cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();

        //get the current content and copmare it with the prevois (must be empty and the comparing result equal)
        cy.get('#observer_table_div').then((div) => {
            expect(div.text()).to.equal(prevContent);
        });
    });
});