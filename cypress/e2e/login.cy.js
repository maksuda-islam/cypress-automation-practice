/// <reference types="Cypress" />

import loginData from "../fixtures/userData.json";
import LoginPage from "../pageObjects/loginPage.ob";
var base_URL = Cypress.env("baseUrl")
const loginPage = new LoginPage()

describe("Login with given credentials", () =>{
    it("Should Check the layouts", ()=>{
        cy.visit(base_URL);
        loginPage.verifyTitle();
        loginPage.getUsername(loginData.username);
        loginPage.getPassword(loginData.password);
        loginPage.getLoginButton().click();
        cy.url().should('include', '/inventory');
    });

});