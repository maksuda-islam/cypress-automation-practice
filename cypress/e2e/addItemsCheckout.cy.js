/// <reference types="Cypress" />

import loginData from "../fixtures/userData.json";
import InventoryPage from "../pageObjects/inventoryPage.ob";
var base_URL = Cypress.env("baseUrl")
const inventoryPage = new InventoryPage()

describe("Add 2 Items of Lowest Price to cart & checkout", () =>{
    it("Add 2 Items of Lowest Price to cart & checkout", ()=>{
        cy.visit(base_URL);
        cy.login(loginData.username,loginData.password);
        inventoryPage.getLowtoHighFilter();
        inventoryPage.get1stItemFromInventoryList().click();
        inventoryPage.get2ndItemFromInventoryList().click();
        inventoryPage.getCheckoutCart();
        inventoryPage.getCheckoutButton().click();
    });

});