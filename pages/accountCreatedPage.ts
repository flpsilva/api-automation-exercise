import { Page, expect } from "@playwright/test";

export default class AccountCreatedPage{
    //Define a page property of page
    page: Page;

    //Constructor that takes a Page object as an argument
    constructor(page: Page){
        this.page = page;
    }
    //--- Locators ---
    confirmationMessageTitle = () => this.page.locator('.title[data-qa="account-created"]');
    confirmationMessagePh1 = () => this.page.getByText('Congratulations! Your new account has been successfully created!');
    confirmationMessagePh2  = () => this.page.getByText('You can now take advantage of member privileges to enhance your online shopping experience with us.');
    continueBtn = () => this.page.locator('a[data-qa="continue-button"]');// tester notes: shared locator moved to fixtures, to be avoid of code repetition on test file. i.e: accountCreatedPage.continueBtn().click()
    //--- Methods ---
    public async validateAccountCreated () {
        await expect(this.confirmationMessageTitle()).toBeVisible();
        await expect(this.confirmationMessagePh1()).toBeVisible();
        await expect(this.confirmationMessagePh2()).toBeVisible();
    }
}