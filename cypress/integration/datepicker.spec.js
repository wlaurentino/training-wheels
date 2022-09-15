it('selecionar a data de nascimento', function(){
    cy.visit('/datepicker')

    const date = {
        month: 'mai',
        year: '1987',
        day: '6'
    }

    cy.get('.datetimepicker-dummy-input').click()

    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()
    
    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.year).click()

    cy.contains('button[class=date-item]',     new RegExp('^' + date.day + '$', 'g')).click()
})