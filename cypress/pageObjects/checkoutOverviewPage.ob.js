class CheckoutOverviewPage {
    value=0;
    sum = 0;
    tax = 0;
    total = 0;
  
    verifySubTitle() {
      return cy.get(".subheader").contains("Checkout: Overview");
    }
  
    getFinishButton() {
      return cy.get(".btn_action");
    }

    check_expected_total_amount(){
    cy.get('.inventory_item_price').each(($element) => {
        this.value = parseFloat($element.text().replace(/[^0-9.-]+/g, ''));
        this.sum += this.value
        }).then(() => {      
            this.sum = this.sum.toFixed(2);
            this.tax = (this.sum * 0.08).toFixed(2);
            this.total = (parseFloat(this.sum) + parseFloat(this.tax)).toFixed(2);      
            cy.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[7]/text()[2]')
            .invoke('text')
            .then(parseFloat)
            .should('eq', parseFloat(this.total));
        });
    }
      
  }
  
  export default CheckoutOverviewPage;


  