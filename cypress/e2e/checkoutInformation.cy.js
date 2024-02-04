/// <reference types="Cypress" />

import loginData from "../fixtures/userData.json";
import CheckOutInfoPage from "../pageObjects/checkoutInfoPage.ob";
var base_URL = Cypress.env("baseUrl")
const checkOutInfoPage = new CheckOutInfoPage()

describe("Give Proper Checkout Information", () =>{
    it("Give Proper Checkout Information", ()=>{
        cy.visit(base_URL);
        cy.login(loginData.username,loginData.password);
        checkOutInfoPage.verifySubTitle();
        checkOutInfoPage.getFirstname();
        checkOutInfoPage.getLastName();
        checkOutInfoPage.getZipOrPostalCode();
        checkOutInfoPage.getContinueButton().click();
    });

});