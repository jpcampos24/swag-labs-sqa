export class CheckoutOverviewPage{

    validateProductOnCheckout(productName){
        cy.contains('.inventory_item_name', productName).should('be.visible');
    }

    validateCreditCart(card){
        cy.get('.summary_value_label').eq(0).contains(card);
    }

    validateShippingInfo(shippingCompany){
        cy.get('.summary_value_label').eq(1).contains(shippingCompany);
    }

    validateSubTotal(subtotal){
        cy.get('.summary_subtotal_label').contains(subtotal);
    }

    validateSubTaxes(taxes){
        cy.get('.summary_tax_label').contains(taxes);
    }

    validateTotal(total){
        cy.get('.summary_total_label').contains(total);
    }

    clickOnFinishButton(){
        cy.get('.btn_action.cart_button').click();
    }
}