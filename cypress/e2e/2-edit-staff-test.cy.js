beforeEach(()=>{
    cy.viewport(1920,1080)
    cy.visit('https://goal-dev.mdx.ac.uk');
    cy.get('#id_username').type('HaniAbuSeir')
    cy.get('#id_password').type('J5Bs4guZV932FtH')
    cy.get('select[name="login_as"]').select('staff')
    cy.get('form[action="/login/"] > button[type="submit"]').click();
})
describe('Testing Edit Staff', ()=>{
    it('Staff Edit GOAL Permission to N/A', () => {
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/staffs/"]').click();
        cy.get('#staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_HaniAbuSeir > :nth-child(7) > .textinput').select('0');
        cy.get('#edit_staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > .btn').click();
        cy.get('a[href="/staff/30/goals/"]').click();
        cy.wait(1000);
    })
    it('Staff Edit Observe Permission to N/A', ()=>{
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/staffs/"]').click();
        cy.get('#staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_HaniAbuSeir > :nth-child(8) > .textinput').select('0');
        cy.get('#edit_staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > .btn').click();
        cy.reload();
        cy.wait(1000)
    })
    it('Staff Edit Student Permission to N/A', ()=>{
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/staffs/"]').click();
        cy.get('#staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_HaniAbuSeir > :nth-child(10) > .textinput').select('0');
        cy.get('#edit_staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > .btn').click();
        cy.get('a[href="/staff/30/student/"]').click();
        cy.wait(1000);
    })
    it('Staff Edit Academic Permission to N/A', ()=>{
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/staffs/"]').click();
        cy.get('#staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_HaniAbuSeir > :nth-child(11) > .textinput').select('0');
        cy.get('#edit_staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > .btn').click();
        cy.get('a[href="/staff/30/academic/"]').click();
        cy.wait(1000);
    })
    it('Staff Edit Staff Permission to N/A', ()=>{
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/staffs/"]').click();
        cy.get('#staff_hanistaff > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_hanistaff > :nth-child(9) > .textinput').select('0');
        cy.get('#edit_staff_hanistaff > [style=""] > .row > :nth-child(1) > .btn').click();
        cy.reload();
        cy.wait(1000);
    })
    it('Staff Edit Student Permission to Read', ()=>{
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/staffs/"]').click();
        cy.get('#staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_HaniAbuSeir > :nth-child(10) > .textinput').select('1');
        cy.get('#edit_staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > .btn').click();
        cy.reload();
        cy.get('a[href="/staff/30/student/"]').click();
        cy.get('button[onclick="addStudent()"]').should('not.exist');
        cy.wait(1000);
    })
    it('Staff Edit Academic Permission to Read', ()=>{
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/staffs/"]').click();
        cy.get('#staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_HaniAbuSeir > :nth-child(11) > .textinput').select('1');
        cy.get('#edit_staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > .btn').click();
        cy.reload();
        cy.get('a[href="/staff/30/academic/"]').click();
        cy.get('button[onclick="addWeek()"]').should('not.exist');
        cy.wait(1000);
    })
    it('Staff Edit Observe Permission to Read', ()=>{
        cy.get('a[href="/staff/30"]').click();
        cy.get('a[href="/staff/30/staffs/"]').click();
        cy.get('#staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > a').click();
        cy.get('#edit_staff_HaniAbuSeir > :nth-child(8) > .textinput').select('1');
        cy.get('#edit_staff_HaniAbuSeir > :nth-child(7) > .textinput').select('1');
        cy.get('#edit_staff_HaniAbuSeir > [style=""] > .row > :nth-child(1) > .btn').click();
        cy.reload();
        cy.get('a[href="/staff/30/goals/"]').click();
        cy.get('button[onclick="observeAll(add, this)"]').should('not.exist');
        cy.wait(1000)
    })
})