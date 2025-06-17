import { Page, expect } from "@playwright/test";
import { Helper } from "../utils/helper";

export default class CartPage{
    //Define a page property of page
    page: Page;

    //Constructor that takes a Page object as an argument
    constructor(page: Page){
        this.page = page;
    }

    //--- Locators ---
    checkoutBtn = () => this.page.getByText('Proceed To Checkout');
    product1 = () => this.page.locator('#product-1');
    product2 = () => this.page.locator('#product-2');
    cartTable = () => this.page.locator('#cart_info_table');
    RegisterLoginBtn =() => this.page.getByRole('link', { name: 'Register / Login' })
    modalCheckoutCenterTxt = () => this.page.getByText('Register / Login account to proceed on checkout.');
    shoppingCartTxt = () => this.page.getByText('Shopping Cart');
    //--- Methods ---
    public async clickCheckoutBtn () {
        await this.checkoutBtn().click();
    }
    public async clickRegisterLoginBtn () {
        await expect(this.modalCheckoutCenterTxt()).toBeVisible();
        await this.RegisterLoginBtn().click();
    }
    public async getCartPageUrl() {
        return Helper.getPageUrl(this.page);
    }
    //--- Assertions ---
    public async verifyIfCartPageIsDisplaying() {
        const getCartPageUrl = await this.getCartPageUrl()
        expect(getCartPageUrl).toContain('/view_cart');
        expect(this.shoppingCartTxt()).toBeVisible();
    }
    public async checkProductsInCart() {
        const product1 = await this.product1().textContent();
        expect(product1).toContain('Blue Top')
        const product2 = await this.product2().textContent();
        expect(product2).toContain('Men Tshirt')
    }
}