import bankhome from "../pageobjects/bankhome";
import banklogin from "../pageobjects/banklogin";

describe('Parallel testing', ()=> {

    it('second scenario - acct 1004', ()=> {
        banklogin.open('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        banklogin.openCustomerLogin();
        banklogin.selectUser('Harry Potter');
        banklogin.clickLogin();
        bankhome.isHomePagePresent();
        bankhome.isAccountNumberPresent('1004');
    });
})