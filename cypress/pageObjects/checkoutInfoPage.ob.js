class CheckOutInfoPage{

    verifySubTitle(){
        return cy.get(".subheader").contains("Checkout: Your Information");
    }
    getFirstname(firstname){
        return cy.get("#first-name").type(firstname)
    }
    getLastName(lastname){
        return cy.get("#last-name").type(lastname)
    }
    getZipOrPostalCode(postalCode){
        return cy.get("#postal-code").type(postalCode)
    }
    getContinueButton(){
        return cy.get(".btn_primary")
    }


}

export default CheckOutInfoPage;