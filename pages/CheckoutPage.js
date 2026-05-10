class CheckoutPage {

    constructor(page) {
        this.page = page;
    }

    async fillInformation() {

        await this.page.fill('#first-name', 'Arifen');
        await this.page.fill('#last-name', 'Test');
        await this.page.fill('#postal-code', '1216');

        await this.page.click('#continue');
    }

    async getTotalPrice() {
        return await this.page.locator('.summary_total_label').textContent();
    }

    async finishOrder() {
        await this.page.click('#finish');
    }

    async getSuccessMessage() {
        return await this.page.locator('.complete-header').textContent();
    }
}

module.exports = CheckoutPage;