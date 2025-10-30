import { CheckoutOverviewPage } from "../../page-objects/CheckoutOverviewPage";
import { ProductsPage } from "../../page-objects/ProductsPage";
import { CartPage } from "../../page-objects/CartPage";
import { CheckoutInformationPage } from "../../page-objects/CheckoutInformationPage";
import { FinishPage } from "../../page-objects/FinishPage";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";
import loginData from "../../fixtures/loginData.json"
import productData from "../../fixtures/productData.json"
import clientData from "../../fixtures/clientData.json"
import thanksDataInfo from "../../fixtures/thanksDataInfo.json"

describe ('addProduct', () => {
    
    before(() => {
        const loginPage = new LoginPage();
        const homePage = new HomePage();
        cy.visit(Cypress.config().baseUrl);
        cy.url().should('contain', 'saucedemo');
        loginPage.sendUsername(loginData.standard.user);
        loginPage.sendPassword(loginData.standard.password);
        loginPage.clickLoginButton();
        homePage.verifyHomePageIsDisplayed();
    })

    it('Buy a Prodcut', () => {
        const productsPage = new ProductsPage();
        productsPage.validateProductsPage();
        productsPage.clickOnProduct(productData.backpack.name);
        productsPage.validateCartPopUp();
        productsPage.goToCart();

        const cartProducts = new CartPage();
        cartProducts.validateProductOnCart(productData.backpack.name);
        cartProducts.clickCheckoutButton();

        const checkoutInformation = new CheckoutInformationPage();
        checkoutInformation.addFirstName(clientData.client.firstName);
        checkoutInformation.addLastName(clientData.client.lastName);
        checkoutInformation.addZipCode(clientData.client.zipCode);
        checkoutInformation.clickContinueButton();

        const checkoutOverview = new CheckoutOverviewPage();
        checkoutOverview.validateProductOnCheckout(productData.backpack.name);
        checkoutOverview.validateCreditCart(clientData.client.creditCard);
        checkoutOverview.validateShippingInfo(clientData.client.shippingComapny);
        checkoutOverview.validateSubTotal(productData.backpack.subtotal);
        checkoutOverview.validateSubTaxes(productData.backpack.taxes);
        checkoutOverview.validateTotal(productData.backpack.total);
        checkoutOverview.clickOnFinishButton();

        const finishPage = new FinishPage();
        finishPage.validateFinishPage();
        finishPage.validateTitle(thanksDataInfo.data.title);
        finishPage.validateSubtitle(thanksDataInfo.data.subtitle);
        finishPage.validateImage();
    })

})