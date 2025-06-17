import { test } from '../tests/fixtures/baseTestFixtures';

test.describe("Place order", async () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.goToHomePage();
    
  })
  test('Use creates an account during the checkout process', async ({ 
      homePage, cartPage, loginPage, signupPage, accountCreatedPage, 
      checkoutPage, paymentPage, sharedContinueBtn, deleteAccountPage 
  }) => {
    await homePage.addProductByIndex(1);
    await homePage.validateProductAddedToCart();
    await homePage.clickContinueShopping();
    await homePage.addProductByIndex(2);
    await homePage.validateProductAddedToCart();
    await homePage.clickModalViewCart();
    await cartPage.verifyIfCartPageIsDisplaying();
    await cartPage.checkProductsInCart();
    await cartPage.clickCheckoutBtn();
    await cartPage.clickRegisterLoginBtn();
    const newUserData = await loginPage.signupNewUser();
    const signedUpEmail = newUserData.firstName + '@failmail.com';
    await signupPage.fillOutAllNewUserInfo(
      newUserData.firstName, signedUpEmail,
      newUserData);
    await accountCreatedPage.validateAccountCreated();
    await sharedContinueBtn.click();
    await homePage.validateLoggedInUserByName(newUserData.firstName);
    await homePage.navigateToCartPage();
    await cartPage.clickCheckoutBtn();
    await checkoutPage.verifyDeliveryAddressDetails(
      newUserData.firstName, newUserData.lastName,
      newUserData.company, newUserData.address1,
      newUserData.address2, newUserData.city,
      newUserData.state, newUserData.zip,
      newUserData.country, newUserData.mobileNumber);
    await checkoutPage.verifyBillingAddressDetails(
      newUserData.firstName, newUserData.lastName,
      newUserData.company, newUserData.address1,
      newUserData.address2, newUserData.city,
      newUserData.state, newUserData.zip,
      newUserData.country, newUserData.mobileNumber);
    await checkoutPage.AddAndValidateCommentOrder();
    await checkoutPage.clickPlaceOrder();
    await paymentPage.addCardInfo(newUserData.firstName);
    await paymentPage.submitOrder();
    await paymentPage.validateOrderPlaced();
    await sharedContinueBtn.click();
    await homePage.deleteAccount();
    await deleteAccountPage.validateAccountDeleted();
    await sharedContinueBtn.click();
  });
  test('User creates an account before place an order ', async ({
    homePage, cartPage, loginPage, signupPage, accountCreatedPage, 
    checkoutPage, paymentPage, sharedContinueBtn, deleteAccountPage 
  }) => {
    await homePage.navigateToLoginPage();
    const newUserData = await loginPage.signupNewUser();
    const signedUpEmail = newUserData.firstName + '@failmail.com';
    await signupPage.fillOutAllNewUserInfo(
      newUserData.firstName, signedUpEmail,
      newUserData);
    await accountCreatedPage.validateAccountCreated();
    await sharedContinueBtn.click();
    await homePage.validateLoggedInUserByName(newUserData.firstName);
    await homePage.addProductByIndex(1);
    await homePage.validateProductAddedToCart();
    await homePage.clickContinueShopping();
    await homePage.addProductByIndex(2);
    await homePage.validateProductAddedToCart();
    await homePage.clickContinueShopping();
    await homePage.navigateToCartPage();
    await cartPage.verifyIfCartPageIsDisplaying();
    await cartPage.checkProductsInCart();
    await cartPage.clickCheckoutBtn();
    await checkoutPage.verifyDeliveryAddressDetails(
      newUserData.firstName, newUserData.lastName,
      newUserData.company, newUserData.address1,
      newUserData.address2, newUserData.city,
      newUserData.state, newUserData.zip,
      newUserData.country, newUserData.mobileNumber);
    await checkoutPage.verifyBillingAddressDetails(
      newUserData.firstName, newUserData.lastName,
      newUserData.company, newUserData.address1,
      newUserData.address2, newUserData.city,
      newUserData.state, newUserData.zip,
      newUserData.country, newUserData.mobileNumber);
    await checkoutPage.AddAndValidateCommentOrder();
    await checkoutPage.clickPlaceOrder();
    await paymentPage.addCardInfo(newUserData.firstName);
    await paymentPage.submitOrder();
    await paymentPage.validateOrderPlaced();
    await sharedContinueBtn.click();
    await homePage.deleteAccount();
    await deleteAccountPage.validateAccountDeleted();
    await sharedContinueBtn.click();
  });
});