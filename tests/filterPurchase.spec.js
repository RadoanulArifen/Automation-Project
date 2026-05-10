const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Q3 - Filter and purchase flow', async ({ page }) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();

    await login.login('performance_glitch_user', 'secret_sauce');

    await inventory.resetAppState();

    await inventory.filterZtoA();

    await inventory.addFirstProduct();

    await inventory.openCart();

    const products = await cart.getProductNames();

    expect(products.length).toBe(1);

    await cart.checkout();

    await checkout.fillInformation();

    const totalPrice = await checkout.getTotalPrice();

    expect(totalPrice).toContain('$');

    await checkout.finishOrder();

    const successMessage = await checkout.getSuccessMessage();

    expect(successMessage).toContain(
        'Thank you for your order!'
    );
});