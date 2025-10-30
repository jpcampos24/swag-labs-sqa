import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"
import loginData from "../../fixtures/loginData.json"

describe ('Login', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();

        beforeEach(() => {
          cy.visit(Cypress.config().baseUrl)
          cy.url().should('contain', 'saucedemo')
        })

        it('Login successfully into the swaglabs', () =>{
              loginPage.sendUsername(loginData.standard.user);
              loginPage.sendPassword(Cypress.env('LOGIN_DATA').PASSWORD);
              loginPage.clickLoginButton();

              homePage.verifyHomePageIsDisplayed();
        })
})