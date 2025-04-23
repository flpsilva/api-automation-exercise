import { Page, expect } from "@playwright/test";
import { generateFakeData } from "../testData/testData";

export default class PaymentPage{
    // Define a page property of page
    page: Page;

    //Constructor that takes a Page object as an argument
    constructor(page: Page){
        this.page = page;
    }

    //--- Locators ---
    nameOnCard = () => this.page.locator('[data-qa="name-on-card"]');
    cardNumber = () => this.page.locator('[data-qa="card-number"]');
    cvcNumber = () => this.page.locator('[data-qa="cvc"]');
    expiryMonth = () => this.page.locator('[data-qa="expiry-month"]');
    expiryYear = () => this.page.locator('[data-qa="expiry-year"]');
    placeOrderBtn = () => this.page.locator('[data-qa="place-order"]');
    payBtn = () => this.page.locator('#submit');
    continueBtn = () => this.page.locator('[data-qa="continue-button"]');// tester notes: shared locator moved to fixtures, to be avoid of code repetition on test file. i.e:
    orderPlacedConfirmationTxt = () => this.page.locator('[data-qa="order-placed"]');
    orderPlacedCongratulationMsgTxt = () => this.page.getByText('Congratulations! Your order has been confirmed!')
    //--- methods ---
    public async addCardInfo (signedUpFirstName: string) {
        const fakeData = generateFakeData();
        await this.nameOnCard().fill(signedUpFirstName);
        await this.cardNumber().fill(fakeData.cardNumber);
        await this.cvcNumber().fill(fakeData.cvcNumber);
        await this.expiryMonth().fill(fakeData.expiryMonth);
        await this.expiryYear().fill(fakeData.expiryYear.toString())
    }
    public async submitOrder () {
        await this.payBtn().click();
    }
    //--- assertion ---
    public async validateOrderPlaced () {
        await expect(this.orderPlacedConfirmationTxt()).toBeVisible();
        await expect(this.orderPlacedCongratulationMsgTxt()).toBeVisible();
    }
}
