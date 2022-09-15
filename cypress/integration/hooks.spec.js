describe('Suite de testes', function(){
    
    before(function(){
        cy.log('Aqui temos algo que roda ANTES de TODOS os testes')

    })

    beforeEach(function(){
        cy.log('Aqui temos algo que roda ANTES de CADA teste')

    })

    it('teste 1', function(){
        cy.log('testando o teste 1')
    })
    
    it('teste 2', function(){
        cy.log('testando o teste 2')
    })
    
    it('teste 3', function(){
        cy.log('testando o teste 3')
    })

    afterEach(function(){
        cy.log('Aqui temos algo que roda DEPOIS de CADA teste')


    })

    after(function(){
        cy.log('Aqui temos algo que roda DEPOIS de TODOS os testes')

    })

})


