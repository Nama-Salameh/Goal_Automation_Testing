beforeEach(()=>{
    cy.viewport(1920,1080)
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HaniAbuSeir')
    cy.get('#id_password').type('J5Bs4guZV932FtH')
    cy.get('select[name="login_as"]').select('staff')
    cy.get('form[action="/login/"] > button[type="submit"]').click();
})
describe('Testing Grade', ()=>{
    it('Grade an unobserved goal', ()=>{
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/goals/"]').click();
        cy.get(':nth-child(1) > .custom-control-label > h5').click();
        cy.get('label[for="all_groups"]').click();
        cy.get('label[for="not_observed"]').click();
        cy.get('button[onclick="applyGoalFilters(this)"]').click();
        cy.get('button[onclick="observe(932, 1515  , this)"]').click();
        cy.get('.goal_observed_filter > .m-0 > .late_False > .row > :nth-child(1) > .textinput').select('7');
        cy.wait(1000)
    })
    it('Grade an already observed goal', ()=>{
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/goals/"]').click();
        cy.get(':nth-child(1) > .custom-control-label > h5').click();
        cy.get('label[for="all_groups"]').click();
        cy.get('label[for="not_observed"]').click();
        cy.get('button[onclick="applyGoalFilters(this)"]').click();
        cy.get('#\\31 515_854 > .m-0 > .late_False > .row > :nth-child(1) > .textinput').select('10');
        cy.wait(1000);
    })
})
