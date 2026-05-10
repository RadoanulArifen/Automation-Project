class CartPage {

    constructor(page) {
        this.page = page;
    }

    async getProductNames() {
        return await this.page.locator('.inventory_item_name').allTextContents();
    }

    async checkout() {
        await this.page.click('#checkout');
    }
}

module.exports = CartPage;