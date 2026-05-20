import { BasePage } from "../objects/basePage.js";
export class homePage extends BasePage {
  constructor(page) {
    super(page);
    this.sauseLabsBagpackLink = this.page.locator('#add-to-cart-sauce-labs-backpack');
    this.sauseLabsBikeLightLink = this.page.locator('#add-to-cart-sauce-labs-bike-light');
    this.sauseLabsBoltTShirtLink = this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    // this.sauseLabsBagpackLink = this.page.locator('[id="add-to-cart-sauce-labs-backpack"]');
    // this.sauseLabsBikeLightLink = this.page.locator('[id="add-to-cart-sauce-labs-bike-light"]');
    // this.sauseLabsBoltTShirtLink = this.page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
    this.ztoASelector = this.page.locator('[data-test="product-sort-container"]');
    this.redTShirtLink = this.page.locator('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    this.cartButton = this.page.locator('[id="shopping_cart_container"]');
  }
  
  async clickSauceLabsBackpack() {
    await this.sauseLabsBagpackLink.click();
  }
  
  async clickSauceLabsBikeLight() {
    await this.sauseLabsBikeLightLink.click();
  }

  async clickSauceLabsBoltTShirt() {
    await this.sauseLabsBoltTShirtLink.click();
  }


  async clickZtoAFilter() {
     await this.ztoASelector.selectOption("za");
  }

  async clickRedTShirt() {
    await this.redTShirtLink.click();
  }

  async clickCartButton() {
    await this.cartButton.click();
  }
               
}