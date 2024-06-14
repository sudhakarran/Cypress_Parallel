export class BankHome{

   BankHome(){
   }

   btnLogout = 'Logout';
   lblAcctNumber = 'div.center > strong';

   isHomePagePresent(){
    cy.contains('button', this.btnLogout).should("be.visible");
   }

   isAccountNumberPresent(acct: string){
    cy.get(this.lblAcctNumber).should("contain", acct);
   }
    
}

export default new BankHome();