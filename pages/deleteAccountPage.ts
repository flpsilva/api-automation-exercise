import { Page, expect } from "@playwright/test";

export default class DeleteAccountPage{
    //Define a page property of page
    page: Page;

    //Constructor that takes a Page object as an argument
    constructor(page: Page){
        this.page = page;
    }
    //--- Locators ---
    AccountDeletedConfirmationText = () => this.page.locator('[data-qa="account-deleted"]');
    confirmationMessagePh1 = () => this.page.getByText('Your account has been permanently deleted!');
    confirmationMessagePh2  = () => this.page.getByText('You can create new account to take advantage of member privileges to enhance your online shopping experience with us.');
    continueBtn = () => this.page.locator('a[data-qa="continue-button"]');// tester notes: shared locator moved to fixtures, to be avoid of code repetition on test file. i.e: DeleteAccountPage.continueBtn()
    //--- Methods ---
    public async validateAccountDeleted () {
        await expect(this.AccountDeletedConfirmationText()).toBeVisible();
        await expect(this.confirmationMessagePh1()).toBeVisible();
        await expect(this.confirmationMessagePh2()).toBeVisible();
    }
}
