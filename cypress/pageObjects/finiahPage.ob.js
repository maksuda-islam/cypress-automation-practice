class FinishPage{

    verifySubTitle(){
        return cy.get(".subheader").contains("Finish").should('be.visible');
    }
    verifySuccessMessage(){
        return cy.get(".complete-header").contains("THANK YOU FOR YOUR ORDER").should("be.visible");
    }
    verifySuccessText(){
        return cy.get('.complete-text').contains("Your order has been dispatched, and will arrive just as fast as the pony can get there!")

    }


}

export default FinishPage;