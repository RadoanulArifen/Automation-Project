class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameField = '#user-name';
        this.passwordField = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = '[data-test="error"]';
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        return await this.page.locator(this.errorMessage).textContent();
    }
}

module.exports = LoginPage;