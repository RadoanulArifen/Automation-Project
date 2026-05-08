class InventoryPage {

    constructor(page) {
        this.page = page;
    }

    async openMenu() {
        await this.page.click('#react-burger-menu-btn');
    }

    async resetAppState() {
        await this.openMenu();

        await this.page.waitForTimeout(1000);

        await this.page.click('#reset_sidebar_link');
    }

    async logout() {
        await this.openMenu();

        await this.page.waitForTimeout(1000);

        await this.page.click('#logout_sidebar_link');
    }

    async addBackpack() {
        await this.page.click('#add-to-cart-sauce-labs-backpack');
    }

    async addBikeLight() {
        await this.page.click('#add-to-cart-sauce-labs-bike-light');
    }

    async addTshirt() {
        await this.page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    async openCart() {
        await this.page.click('.shopping_cart_link');
    }

    async filterZtoA() {
        await this.page.selectOption('.product_sort_container', 'za');
    }

    async addFirstProduct() {
        await this.page.locator('.btn_inventory').first().click();
    }
}

module.exports = InventoryPage;