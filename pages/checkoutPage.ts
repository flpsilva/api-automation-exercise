import { Page, expect } from "@playwright/test";
import { generateFakeData } from "../testData/testData";

export default class CheckoutPage{
    //Define a page property of page
    page: Page;

    //Constructor that takes a Page object as an argument
    constructor(page: Page){
        this.page = page;
    }

    //--- Locators ---
    userFirstNameLastName = () => this.page.locator('#address_delivery li.address_firstname');
    userCompanyName = () => this.page.locator('#address_delivery li');
    PlaceOrderBtn = () => this.page.getByRole('link', { name: 'Place Order' });
    deliveryAddressInfo = () => this.page.locator('#address_delivery');
    billingAddressInfo = () => this.page.locator('#address_invoice');
    orderMsg = () => this.page.locator('#ordermsg textarea')
    //--- Methods ---
    public async clickPlaceOrder () {
        await this.PlaceOrderBtn().click();
    }
    public async verifyDeliveryAddressDetails (firstName: string, lastName: string, companyName: string, address1: string, address2: string, city: string, state: string, zipcode: string, mobileNumber: string, country: string) {
        const deliveryInfos = await this.deliveryAddressInfo().textContent();
        expect(deliveryInfos).toContain('Mr.'+' '+ firstName +' '+ lastName);
        expect(deliveryInfos).toContain(companyName);
        expect(deliveryInfos).toContain(address1);
        expect(deliveryInfos).toContain(address2);
        expect(deliveryInfos).toContain(city + ' ' + state);
        expect(deliveryInfos).toContain(zipcode);
        expect(deliveryInfos).toContain(country);
        expect(deliveryInfos).toContain(mobileNumber)
    }
    public async verifyBillingAddressDetails (firstName: string, lastName: string, companyName: string, address1: string, address2: string, city: string, state: string, zipcode: string, mobileNumber: string, country: string) {
        const billingInfos = await this.billingAddressInfo().textContent();
        expect(billingInfos).toContain('Mr.'+' '+ firstName +' '+ lastName);
        expect(billingInfos).toContain(companyName);
        expect(billingInfos).toContain(address1);
        expect(billingInfos).toContain(address2);
        expect(billingInfos).toContain(city + ' ' + state);
        expect(billingInfos).toContain(zipcode);
        expect(billingInfos).toContain(country);
        expect(billingInfos).toContain(mobileNumber)
    }
    public async AddAndValidateCommentOrder () {
        const fakeData = generateFakeData();
        const messageToAdd = fakeData.orderMsg;
        await this.orderMsg().fill(messageToAdd);
        const actualOrderMsg = await this.orderMsg().inputValue();
        expect(actualOrderMsg).toBe(messageToAdd);
    }
}