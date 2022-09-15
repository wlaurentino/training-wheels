const niceIFrame = function(){
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

const badIframe = function(){
    return cy
    .get('iFrame[src*=instagram]')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)

}

it('deve validar o total de seguidores', function(){
    cy.visit('/bad_iframe')

    badIframe()
    .contains('.FollowerCountText', '6,497 followers')
    .should('be.visible')

})