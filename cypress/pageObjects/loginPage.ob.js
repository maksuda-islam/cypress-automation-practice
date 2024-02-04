class LoginPage{

    verifyTitle(){
        cy.get(".login_logo").should("be.visible")
    }
    getUsername(username){
        return cy.get("#user-name").type(username)
    }
    getPassword(password){
        return cy.get("#password").type(password)
    }
    getLoginButton(){
        return cy.get("#login-button")
    }


}

export default LoginPage;