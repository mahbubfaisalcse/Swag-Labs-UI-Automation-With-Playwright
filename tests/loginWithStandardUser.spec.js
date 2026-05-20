import { test, expect } from '@playwright/test';
import { LoginPage } from "../objects/loginPage.js";
import { homePage } from '../objects/homepage.js';
import { checkOutPage } from '../objects/checkOutPage.js';
import { successCheckout } from '../objects/successCheckout.js';

const userName = "standard_user";
const password = "secret_sauce";

test.describe("Add items to cart with standard user", () => {

    test("Validate add item to cart", async ({ page }) => {
        const login = new LoginPage(page);
        const home = new homePage(page);
        const checkout = new checkOutPage(page);
        const success = new successCheckout(page);

        await page.goto('https://www.saucedemo.com/');
        await login.enterUserName(userName);
        await login.enterPassword(password);
        await login.clickButton("Login");
        await expect(page.locator('[class="title"]')).toHaveText("Products");

        await home.clickButton("Open Menu");
        await home.clickLink("Reset App State");
        await home.clickButton("Close Menu");

        await home.clickSauceLabsBackpack();
        await home.clickSauceLabsBikeLight();
        await home.clickSauceLabsBoltTShirt();

        await home.clickCartButton();
        await expect(page.locator('[class="title"]')).toHaveText("Your Cart");
        await checkout.clickButton("Checkout");
        await checkout.enterFirstName("John");
        await checkout.enterLastName("Doe");
        await checkout.enterPostalCode("12345");
        await checkout.clickButton("Continue");
        
        const actualProducts = await page.locator('.inventory_item_name').allTextContents();
        const expectedProducts = [
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt'
        ];

        await expect(actualProducts).toEqual(expectedProducts);
        await expect(page.locator('.summary_total_label'))
        .toHaveText('Total: $60.45');

        await checkout.clickButton("Finish");
        await expect(page.locator('[class="title"]')).toHaveText("Checkout: Complete!");
        await checkout.clickButton("Back Home");
        await expect(page.locator('[class="title"]')).toHaveText("Products");

        await home.clickButton("Open Menu");
        await home.clickLink("Reset App State");
        await home.clickLink("Logout");

    });
 
});