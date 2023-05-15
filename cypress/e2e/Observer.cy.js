//By Nama' Salameh
describe('Observer', () => {

    //this variable to remove duplicate code that excute in the beggining of 3 cases
    let specialFilters = false;

    beforeEach( ()=>{
        //go to goals page from Nama' Salameh account
        cy.visit('https://goal-dev.mdx.ac.uk/');
        cy.get('#id_username').type("Nama_Salameh");
        cy.get('#id_password').type("TTGGVVDD$%^&");
        cy.get('select[name = "login_as"]').select('staff');
        cy.get('button[type="submit"]').contains('Login').click();
        cy.get('.nav > .nav-item > .nav-link').click();
        cy.get('a[href = "/staff/30/goals/"]').click();

        //doing it before specific test (no need for duplicate)
        if(specialFilters){
            
        //checked the Group 1 and None in Group filter and test if its checked (must be checked)
        cy.get('#group_Group1').check({force : true});
        cy.get('#group_Group1').should('exist').should('be.checked'); 
        cy.get('#group_None').check({force : true});
        cy.get('#group_None').should('exist').should('be.checked'); 

        //test if all levels checked
        cy.get('#level_Medium').should('exist').should('be.checked'); 
        cy.get('#level_High').should('exist').should('be.checked'); 
        cy.get('#level_Low').should('exist').should('be.checked'); 
        cy.get('#all_levels').should('exist').should('be.checked'); 

        //checked the Goal 1 and test if it checked (must be checked)
        cy.get('#goal_1445').check({force : true});
        cy.get('#goal_1445').should('exist').should('be.checked'); 


        //test if the "Not observed" filter checked (must be checked)
        cy.get('#not_observed').should('exist').should('be.checked');

        //check if "Apply filters" exist and click on it
        cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();
        }
    });

    //click on observe button without previuos action(without selecting anything)
    it('Observe without selecting anything', () => {

        specialFilters = true;
        //unchecked the "Not observed" filter then testing it (must be not un-checked)
        cy.get('#not_observed').uncheck({force : true});
        cy.get('#not_observed').should('exist').should('not.be.checked');

        //test if the observe button exist and click on it
        cy.get('button[type = "button"]').contains("Observe").should('exist').click();

        //test if the image that contains "No data" text appreared (must be appeared)
        cy.get('img[src="/static/images/noDataAva.png"]').should('be.visible');
    });
    
    //Observe any random goal
    it('Observing one goal' , ()=>{

        //click on any "Observe" button for any goal
        cy.get('button.btn-primary').contains('Observe').click();

        //check if the button that clicked disappearing (must be disappear)
        cy.get('button.btn-primary .spinner-border').should('not.be.visible');

        //check igf the "Undo" button appeared (must be appeared)
        cy.get('button.btn-danger ').should('be.visible');

        //check if the Grade selection for the goal that observed appeared (must be appeared)
        cy.get('select[name = "grade"]').should('be.visible');
    });

    
    //Observing multiple goals
    it('Observing multiple goals' , ()=>{

        specialFilters = true;

        //checking all goals opting and testing it (must be checked)
        cy.get('#topic_186').check({force : true});         
        cy.get('#topic_186').should('exist').should('be.checked');

        //checking all groups opting and testing it (must be checked)
        cy.get('#all_groups').check({force : true});                
        cy.get('#all_groups').should('exist').should('be.checked'); 

        //testing if the low level checked (must be checked)
        cy.get('#level_Low').should('exist').should('be.checked'); 

        //unchecked the High level filter then testing it (must be checked)
        cy.get('#level_High').uncheck({force : true});
        cy.get('#level_High').should('exist').should('not.be.checked'); 

        //unchecked the Medium level filter then testing it (must be checked)
        cy.get('#level_Medium').uncheck({force : true});
        cy.get('#level_Medium').should('exist').should('not.be.checked'); 

        //test if the "Not observed" filter checked (must be checked)
        cy.get('#not_observed').should('exist').should('be.checked');

        //check if "Apply filters" exist and click on it
        cy.get('button[type = "button"]').contains("Apply filters").should('exist').click();

        //check if "Observe" button exist in the buttom of the page and click on it
        cy.get('button.btn.btn-primary.mt-2.w-100').contains('Observe').click();

        //test if the image that contains "No data" text appreared (must be appeared) 
        cy.get('img[src="/static/images/noDataAva.png"]').should('be.visible');
    });

    //Undo observing for random goal
    it('Undo observing for one goal' , ()=>{

        //check if "Undo" button exist and click on it
        cy.get('button.btn-danger').first().click();
        //check if "Undo" button that clicked on it disappearing
        cy.get('button.btn-danger .spinner-border').should('not.be.visible');

        //check if "Undo" button that clicked on it appearing
        cy.get('button.btn-primary').contains('Observe').should('be.visible');
    });
    
    //Undo observing for multiple goals
    it('Undo observing for multiple goals' , ()=>{

        //Click on all Undo buttons 
        cy.get('div.col-sm-2').find('button.btn.btn-danger').each((button) => {
          cy.wrap(button).click({ force: true });
        });

        //check if the Observe button appeared
        cy.get('button.btn-primary').contains('Observe').should('be.visible');

        //test if having any goal having grade
        cy.get('select[name = "grade"]').should('be.visible');

    });
});