const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

test('Q1 - Locked user login test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login('locked_out_user', 'secret_sauce');

    const errorMessage = await login.getErrorMessage();

    await expect(errorMessage).toContain(
        'Sorry, this user has been locked out.'
    );
});