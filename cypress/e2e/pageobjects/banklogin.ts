export class BankLogin{

    BankLogin(){
    }

    btnCustLogin = 'Customer Login';
    listUser = '#userSelect';
    btnLogin = 'Login';

    open(url: any): void {
        cy.visit(url);
    }

    openCustomerLogin(){
        cy.contains('button', this.btnCustLogin).click();
    }

    selectUser(username: string){
        cy.get(this.listUser).select(username);
    }

    clickLogin(){
        cy.contains('button', this.btnLogin).click();
    }

}

export default new BankLogin();