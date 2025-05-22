import { Page, expect } from "@playwright/test";
import { UserData } from "../testData/testData";

export default class SignupPage{
    // Define a page property of page
    page: Page;

    //Constructor that takes a Page object as an argument
    constructor(page: Page){
        this.page = page;
    }
    
    //--- Locators ---
    promptMessage = () => this.page.getByText('Enter Account Information');
    genderTitleMr = () => this.page.locator('#uniform-id_gender1');
    genderTitleMrs = () => this.page.locator('#uniform-id_gender2');
    name = () => this.page.locator('#name');
    email = () => this.page.locator('#email'); //disabled, assertion to check correct email
    password = () => this.page.locator('#password');
    firstName = () => this.page.locator('#first_name');
    selectDOBDays = () => this.page.locator('#days');
    selectDOBMonths = () => this.page.locator('#months');
    selectDOBYears = () => this.page.locator('#years');
    newsletterCheckbox = () => this.page.locator('#newsletter');
    ReceiveNewsletterCheckbox = () => this.page.locator('#optin');
    lastName = () => this.page.locator('#last_name');
    company = () => this.page.locator('#company');
    address1 = () => this.page.locator('#address1');
    address2 = () => this.page.locator('#address2');
    country = () => this.page.locator('#country');
    state = () => this.page.locator('#state');
    city = () => this.page.locator('#city');
    zipcode = () => this.page.locator('#zipcode');
    mobileNumber = () => this.page.locator('#mobile_number');
    createAccountBtn = () => this.page.locator('button[data-qa="create-account"]');
    //--- Methods ---
    public async fillOutAllNewUserInfo(expectedName: string, expectedEmail: string, userData: UserData) {
        const userPassword = process.env.TEST_USER_PASSWORD;
        await expect(this.promptMessage()).toBeVisible();
        await this.genderTitleMr().check();
        const actualName  = await this.name().inputValue();
        expect(actualName ).toBe(expectedName);
        const userEmailDisabled = await this.email().isDisabled();
        const actualEmail = await this.email().inputValue();
        expect(userEmailDisabled).toBe(true);
        expect(actualEmail).toBe(expectedEmail);
        await this.password().fill(userPassword);
        await this.selectDOBDays().selectOption('1');
        await this.selectDOBMonths().selectOption('1');
        await this.selectDOBYears().selectOption('2001');
        await this.newsletterCheckbox().check();
        await this.ReceiveNewsletterCheckbox().check();
        await this.firstName().fill(actualName);
        await this.lastName().fill(userData.lastName);
        await this.company().fill(userData.company);
        await this.address1().fill(userData.address1);
        await this.address2().fill(userData.address2);
        await this.country().selectOption(userData.country);
        await this.state().fill(userData.state);
        await this.city().fill(userData.city);
        await this.zipcode().fill(userData.zip);
        await this.mobileNumber().fill(userData.mobileNumber);
        await this.createAccountBtn().click();
    }
}