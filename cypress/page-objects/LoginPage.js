export class LoginPage {

    sendUsername(username){
        cy.get('[data-test="username"]').should('be.visible').type(username);
    }
    
    sendPassword(password){
        cy.get('[data-test="password"]').should('be.visible').type(password);
    }

    clickLoginButton(){
        cy.get('[id="login-button"]').click();
    }
}