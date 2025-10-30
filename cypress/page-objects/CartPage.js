export class CartPage{

    validateProductOnCart(productName){
        cy.contains('.inventory_item_name', productName).should('be.visible');
    }

    clickCheckoutButton(){
        cy.get('.btn_action.checkout_button').click();
    }
}