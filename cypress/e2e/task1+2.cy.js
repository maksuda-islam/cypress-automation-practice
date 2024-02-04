/// <reference types="Cypress" />

import loginData from "../fixtures/userData.json";

import LoginPage from "../pageObjects/loginPage.ob";
import InventoryPage from "../pageObjects/inventoryPage.ob";
import CheckOutInfoPage from "../pageObjects/checkoutInfoPage.ob";
import CheckoutOverviewPage from "../pageObjects/checkoutOverviewPage.ob";
import FinishPage from "../pageObjects/finiahPage.ob";

var base_URL = Cypress.env("baseUrl")

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const checkOutInfoPage = new CheckOutInfoPage()
const checkoutOverviewPage = new CheckoutOverviewPage()
const finishPage = new FinishPage()

describe("Answer of Task 1+2", () =>{
    it("Login -> Add 2 Items of Lowest Price to cart & checkout -> Checkout with Proper Information -> Check if the total amount is correct or not -> Complete Checkout & assert Success message", ()=>{
        cy.visit(base_URL);
        //login
        loginPage.verifyTitle(); //task2 (1)
        cy.login(loginData.username,loginData.password);

        //Add 2 Items of Lowest Price to cart & checkout
        inventoryPage.getLowtoHighFilter();
        inventoryPage.getItemsFromInventoryList(1,2);
        inventoryPage.getCheckoutCart();
        inventoryPage.getCheckoutButton().click();

        //Checkout with Proper Information
        checkOutInfoPage.verifySubTitle();
        checkOutInfoPage.getFirstname(loginData.User_Information.firstname);
        checkOutInfoPage.getLastName(loginData.User_Information.lastname);
        checkOutInfoPage.getZipOrPostalCode(loginData.User_Information.PostalCode);
        checkOutInfoPage.getContinueButton().click();

        //Check total amount is correct or not
        checkoutOverviewPage.check_expected_total_amount()
        
        //Complete Checkout & assert Success message
        checkoutOverviewPage.getFinishButton().click();
        finishPage.verifySubTitle()
        finishPage.verifySuccessMessage();
        finishPage.verifySuccessText();
    });

});