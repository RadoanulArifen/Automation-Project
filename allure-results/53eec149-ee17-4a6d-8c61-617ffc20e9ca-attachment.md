# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> Q2 - Complete purchase flow
- Location: tests/purchase.spec.js:8:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.click: Test timeout of 60000ms exceeded.
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
    105 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div class="bm-menu">…</div> from <div id="" aria-hidden="false" class="bm-menu-wrap">…</div> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link "All Items" [ref=e13] [cursor=pointer]:
                  - /url: "#"
                - link "About" [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                - link "Logout" [ref=e15] [cursor=pointer]:
                  - /url: "#"
                - link "Reset App State" [active] [ref=e16] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e17]:
                - button "Close Menu" [ref=e18] [cursor=pointer]
                - img "Close Menu" [ref=e19]
        - generic [ref=e21]: Swag Labs
      - generic [ref=e25]: "Checkout: Complete!"
    - generic [ref=e26]:
      - img "Pony Express" [ref=e27]
      - heading "Thank you for your order!" [level=2] [ref=e28]
      - generic [ref=e29]: Your order has been dispatched, and will arrive just as fast as the pony can get there!
      - button "Back Home" [ref=e30] [cursor=pointer]
  - contentinfo [ref=e31]:
    - list [ref=e32]:
      - listitem [ref=e33]:
        - link "Twitter" [ref=e34] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e35]:
        - link "Facebook" [ref=e36] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e37]:
        - link "LinkedIn" [ref=e38] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e39]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  8  |         await this.page.click('#react-burger-menu-btn');
  9  |     }
  10 | 
  11 |     async resetAppState() {
  12 | 
  13 |         await this.page.click('#react-burger-menu-btn');
  14 | 
  15 |         await this.page.waitForSelector('#reset_sidebar_link', {
  16 |             state: 'visible'
  17 |         });
  18 | 
  19 |         await this.page.click('#reset_sidebar_link');
  20 | }
  21 | 
  22 |     async logout() {
  23 | 
> 24 |         await this.page.click('#react-burger-menu-btn');
     |                         ^ Error: page.click: Test timeout of 60000ms exceeded.
  25 | 
  26 |         await this.page.waitForSelector('#logout_sidebar_link', {
  27 |             state: 'visible'
  28 |         });
  29 | 
  30 |         await this.page.click('#logout_sidebar_link');
  31 | }
  32 | 
  33 |     async addBackpack() {
  34 |         await this.page.click('#add-to-cart-sauce-labs-backpack');
  35 |     }
  36 | 
  37 |     async addBikeLight() {
  38 |         await this.page.click('#add-to-cart-sauce-labs-bike-light');
  39 |     }
  40 | 
  41 |     async addTshirt() {
  42 |         await this.page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
  43 |     }
  44 | 
  45 |     async openCart() {
  46 |         await this.page.click('.shopping_cart_link');
  47 |     }
  48 | 
  49 |     async filterZtoA() {
  50 |         await this.page.selectOption('.product_sort_container', 'za');
  51 |     }
  52 | 
  53 |     async addFirstProduct() {
  54 |         await this.page.locator('.btn_inventory').first().click();
  55 |     }
  56 | }
  57 | 
  58 | module.exports = InventoryPage;
```