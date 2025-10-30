require('cypress-xpath');

export class ProductsPage {

    //Valida que se encuentre en la pagina de productos
    validateProductsPage(){
        cy.get('.product_label').should('be.visible');
    }

    //Presiona el boton de agregar al carrito
    clickOnProduct(productName){
        cy.contains('.inventory_item_name', productName).closest('.inventory_item').within(() => {
            cy.contains('button', 'ADD TO CART').click();
        })
    }
    
    //Valida que se agregue el producto al carrito con el pop-up de cantidad
    validateCartPopUp(){
        cy.scrollTo('top');
        cy.get('.fa-layers-counter.shopping_cart_badge').should('be.visible');
    }

    //Presiona el boton que lo lleva al carrito de compras
    goToCart(){
        cy.get('#shopping_cart_container').click();
    }

}