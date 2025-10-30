export class HomePage {
    verifyHomePageIsDisplayed(){
        cy.get('.app_logo').should('be.visible');
    }
}