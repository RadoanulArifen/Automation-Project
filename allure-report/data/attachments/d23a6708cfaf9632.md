# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> Q2 - Complete purchase flow
- Location: tests/purchase.spec.js:8:1

# Error details

```
Error: page.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#react-burger-menu-btn')
    - locator resolved to <button type="button" id="react-burger-menu-btn">Open Menu</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="bm-menu">…</div> from <div id="" aria-hidden="false" class="bm-menu-wrap">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="bm-menu">…</div> from <div id="" aria-hidden="false" class="bm-menu-wrap">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    56 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="bm-menu">…</div> from <div id="" aria-hidden="false" class="bm-menu-wrap">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1  | class InventoryPage {
  2  | 
  3  |     constructor(page) {
  4  |         this.page = page;
  5  |     }
  6  | 
  7  |     async openMenu() {
> 8  |         await this.page.click('#react-burger-menu-btn');
     |                         ^ Error: page.click: Target page, context or browser has been closed
  9  |     }
  10 | 
  11 |     async resetAppState() {
  12 |         await this.openMenu();
  13 | 
  14 |         await this.page.waitForTimeout(1000);
  15 | 
  16 |         await this.page.click('#reset_sidebar_link');
  17 |     }
  18 | 
  19 |     async logout() {
  20 |         await this.openMenu();
  21 | 
  22 |         await this.page.waitForTimeout(1000);
  23 | 
  24 |         await this.page.click('#logout_sidebar_link');
  25 |     }
  26 | 
  27 |     async addBackpack() {
  28 |         await this.page.click('#add-to-cart-sauce-labs-backpack');
  29 |     }
  30 | 
  31 |     async addBikeLight() {
  32 |         await this.page.click('#add-to-cart-sauce-labs-bike-light');
  33 |     }
  34 | 
  35 |     async addTshirt() {
  36 |         await this.page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
  37 |     }
  38 | 
  39 |     async openCart() {
  40 |         await this.page.click('.shopping_cart_link');
  41 |     }
  42 | 
  43 |     async filterZtoA() {
  44 |         await this.page.selectOption('.product_sort_container', 'za');
  45 |     }
  46 | 
  47 |     async addFirstProduct() {
  48 |         await this.page.locator('.btn_inventory').first().click();
  49 |     }
  50 | }
  51 | 
  52 | module.exports = InventoryPage;
```