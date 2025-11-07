require('cypress-xpath');

export class ProductsPage {

    //Valida que se encuentre en la pagina de productos
    validateProductsPage(){
        cy.get('[data-test="title"]').should('be.visible');
    }

    //Presiona el boton de agregar al carrito
    clickOnProduct(){        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
    
    //Valida que se agregue el producto al carrito con el pop-up de cantidad
    validateCartPopUp(){
        cy.scrollTo('top');        
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
    }

    //Presiona el boton que lo lleva al carrito de compras
    goToCart(){
        cy.get('#shopping_cart_container').click();
    }

}