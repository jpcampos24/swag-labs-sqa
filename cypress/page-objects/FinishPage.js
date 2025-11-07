export class FinishPage{

    validateFinishPage(){
        cy.get('.title').should('be.visible');
    }

    validateTitle(titleFinish){
        cy.get('.complete-header').contains(titleFinish);
    }

    validateSubtitle(subtitleFinish){
        cy.get('.complete-text').contains(subtitleFinish);
    }

    validateImage(){
        cy.get('.pony_express').should('be.visible');
    }
}