import { Page } from "@playwright/test";
import { generateFakeData, UserData } from "../testData/testData";

export default class LoginPage{
    //Define a page property of page
    page: Page;

    //Constructor that takes a Page object as an argument
    constructor(page: Page){
        this.page = page;
    }

    //--- Locators ---
    //login
    userPassword = () => this.page.locator('input[data-qa="login-password"]');
    userEmailLogin = () => this.page.locator('input[data-qa="login-password"]');
    loginBtn = () => this.page.locator('button[data-qa="login-button"]');
    //Signup!
    userName = () => this.page.locator('input[data-qa="signup-name"]');
    userEmailSignup = () => this.page.locator('input[data-qa="signup-email"]');
    signupBtn = () => this.page.locator('button[data-qa="signup-button"]');
    //--- Methods ---
    public async userLogin () {
        await this.userEmailLogin().fill('user2@failmail.com');
        await this.userPassword().fill('123pwd123');
        await this.loginBtn().click();
    }
    public async signupNewUser (): Promise<UserData> {
        const fakeData = generateFakeData();
        const generateFirstName = fakeData.firstName;
        await this.userName().fill(generateFirstName);
        await this.userEmailSignup().fill(generateFirstName + '@failmail.com');
        await this.signupBtn().click();
        return fakeData;
    }
}
