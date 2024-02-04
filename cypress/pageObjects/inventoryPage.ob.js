class InventoryPage{    

    getLowtoHighFilter(){
        return cy.get(".product_sort_container").select("lohi")
    }

    getItemsFromInventoryList(startIndex, endIndex) {
        for (let i = startIndex; i <= endIndex; i++) {
          cy.get('.pricebar > .btn_primary').eq(i - 1).click();
        }
      }
    getCheckoutCart(){
        return cy.visit("https://www.saucedemo.com/v1/cart.html")
    }
    getCheckoutButton(){
        return cy.get(".btn_action.checkout_button")
    }
}

export default InventoryPage;