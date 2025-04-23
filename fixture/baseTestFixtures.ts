import { test as baseTest, Locator } from "@playwright/test";
import HomePage from '../pages/homePage';
import CartPage from '../pages/cartPage';
import LoginPage from '../pages/loginPage';
import SignupPage from '../pages/signupPage';
import AccountCreatedPage from '../pages/accountCreatedPage';
import CheckoutPage from '../pages/checkoutPage';
import PaymentPage from '../pages/paymentPage';
import DeleteAccountPage from '../pages/deleteAccountPage';

//Define a type for the pages object that we will use to pass the page object to our tests.
type pages = {
    homePage: HomePage;
    cartPage: CartPage;
    loginPage: LoginPage;
    signupPage: SignupPage;
    accountCreatedPage: AccountCreatedPage;
    checkoutPage: CheckoutPage;
    paymentPage: PaymentPage;
    deleteAccountPage: DeleteAccountPage;
    sharedContinueBtn: Locator;
};

//define a testPages object that extends the baseTest object and defines pages objects into it.
const testPages = baseTest.extend<pages>({

    //define a homePage that creates a new instance of the HomePage class using the correct page object.
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },

    //define a cartPage..
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page))
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    signupPage: async ({ page }, use) => {
        await use(new SignupPage (page))
    },

    accountCreatedPage: async ({ page }, use) => {
        await use(new AccountCreatedPage (page))
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage (page))
    },

    paymentPage: async ({ page }, use) => {
        await use(new PaymentPage (page))
    },
    deleteAccountPage: async ({ page }, use) => {
        await use(new DeleteAccountPage (page))
    },
    sharedContinueBtn: async ({ page }, use) => {
        await use(page.locator('[data-qa="continue-button"]'))
    }
})
//exporting the testPages object as the test object
export const test = testPages;
//exporting the expect method from the testPages object
export const expect = testPages.expect;