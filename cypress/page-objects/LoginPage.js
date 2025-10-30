export class LoginPage {

    sendUsername(username){
        cy.get('[id="user-name"]').type(username);
    }
    
    sendPassword(password){
        cy.get('[id="password"]').type(password);
    }

    clickLoginButton(){
        cy.get('[id="login-button"]').click();
    }
}