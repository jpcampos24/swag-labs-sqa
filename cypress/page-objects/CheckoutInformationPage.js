export class CheckoutInformationPage{

    addFirstName(firstName){
        cy.get('#first-name').type(firstName);
    }

    addLastName(lastName){
        cy.get('#last-name').type(lastName);
    }

    addZipCode(zipCode){
        cy.get('#postal-code').type(zipCode);
    }

    clickContinueButton(){
        cy.get('.btn_primary.cart_button').click();
    }
}