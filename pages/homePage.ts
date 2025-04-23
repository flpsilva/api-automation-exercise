import { Page, expect } from "@playwright/test";

export default class HomePage{
    //Define a page property of page
    page: Page;

    //Constructor that takes a Page object as an argument
    constructor(page: Page){
        this.page = page;
    }

    //--- Locators ---
    viewCartBtn = () => this.page.getByRole('link', { name: 'View Cart' });
    goToLoginBtn = () => this.page.getByRole('link', { name: ' Signup / Login' });
    addToCartBtnForProductFirstOpt = (productId: number) => this.page.locator(`.features_items .productinfo .btn[data-product-id="${productId}"]`);
    goToCartBtn = () => this.page.getByRole('link', { name: ' Cart' });
    modalViewCartBtn = () => this.page.getByRole('link', { name: 'View Cart' });
    continueShoppingBtn = () => this.page.getByRole('button', {name: 'Continue Shopping'});
    deleteAccountBtn = () => this.page.getByRole('link', { name: ' Delete Account' });
    modalConfirmHeaderTxt = () => this.page.getByText('Added!');
    modalConfirmCenterTxt = () => this.page.getByText('Your product has been added to cart.');
    loggedInUserName = () => this.page.locator(' ul > li:nth-child(10) > a')
    //--- Methods ---
    public async goToHomePage() {
        await this.page.goto('/');
        await this.validateIfHomePageIsVisible();
    }
    public async addProductByIndex(productId: number) {
        await this.addToCartBtnForProductFirstOpt(productId).click();
    }
    public async clickContinueShopping() {
        await this.continueShoppingBtn().click();
    }
    public async clickModalViewCart() {
        await this.viewCartBtn().click();
    }
    public async navigateToCartPage(): Promise<void> {
        await this.goToCartBtn().click();
    }
        public async navigateToLoginPage() {
        await this.goToLoginBtn().click();
    }
    public async deleteAccount() {
        await this.deleteAccountBtn().click();
    }
    //---Assertions ---
    public async validateProductAddedToCart() {
        await expect(this.modalConfirmHeaderTxt()).toBeVisible();
        await expect(this.modalConfirmCenterTxt()).toBeVisible();
    }
    public async validateIfHomePageIsVisible() {
        await expect(this.page).toHaveURL('/');
    }
    public async validateLoggedInUserByName(signedUpFirstName: string) {
        const actualName  = this.loggedInUserName();
        expect(actualName).toHaveText(' Logged in as ' + signedUpFirstName);
    }
    /* TesterNotes: example: add a specific product hover methods
    product1 = () => this.productInfo().nth(0); // First element (index 0)
    public async hoverProduct1() {
        await this.product1().hover();
        await this.addToCartBtnForProduct(1).click();
    }
    //TesterNotes: example: add product by hover it fist: flake example.
    //  locators: 
     productInfo = () => this.page.locator('.productinfo');
     addToCartBtnForProduct = (productId: number) => this.page.locator(`.overlay-content [data-product-id="${productId}"]`);
     method
    public async hoverProductByIndex(index: number) {
        const product = this.productInfo().nth(index);
        await product.waitFor({ state: 'visible' });
        await product.hover();
    }
    public async addHoveredProductToCart(productId: number) {
        await this.addToCartBtnForProduct(productId).click();
    }*/
}