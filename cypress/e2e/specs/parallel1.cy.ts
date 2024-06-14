import bankhome from "../pageobjects/bankhome";
import banklogin from "../pageobjects/banklogin";

describe('Parallel testing', ()=> {

    it('first scenario - acct 1001', ()=> {
        banklogin.open('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        banklogin.openCustomerLogin();
        banklogin.selectUser('Hermoine Granger');
        banklogin.clickLogin();
        bankhome.isHomePagePresent();
        bankhome.isAccountNumberPresent('1001');
    });
})