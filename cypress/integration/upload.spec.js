it('deve fazer o upload da foto do papito', function(){

    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/papito.jpg'

    cy.get('input[name=file]').selectFile(imageFile, {force: true})

    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/papito.jpg"]', {timeout: 7000})
        .should('be.visible')

})