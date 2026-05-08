const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Q2 - Complete purchase flow', async ({ page }) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();

    await login.login('standard_user', 'secret_sauce');

    await inventory.resetAppState();

    await inventory.addBackpack();
    await inventory.addBikeLight();
    await inventory.addTshirt();

    await inventory.openCart();

    const products = await cart.getProductNames();

    expect(products).toContain('Sauce Labs Backpack');
    expect(products).toContain('Sauce Labs Bike Light');
    expect(products).toContain('Sauce Labs Bolt T-Shirt');

    await cart.checkout();

    await checkout.fillInformation();

    const totalPrice = await checkout.getTotalPrice();

    expect(totalPrice).toContain('$');

    await checkout.finishOrder();

    const successMessage = await checkout.getSuccessMessage();

    expect(successMessage).toContain(
        'Thank you for your order!'
    );

    await inventory.resetAppState();

    await inventory.logout();
});