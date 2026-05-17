import { test, expect } from '@playwright/test';
import { LoginPage } from "../objects/loginPage.js";
import { homePage } from '../objects/homepage.js';
import { checkOutPage } from '../objects/checkOutPage.js';
import { successCheckout } from '../objects/successCheckout.js';

const userName = "performance_glitch_user";
const password = "secret_sauce";

test.describe("Add items to cart with performance glitch user", () => {

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

        await home.clickZtoAFilter();
        await home.redTShirtLink.click();
        await home.clickCartButton();
        await expect(page.locator('[class="title"]')).toHaveText("Your Cart");
        await checkout.clickButton("Checkout");
        await checkout.enterFirstName("John");
        await checkout.enterLastName("Doe");
        await checkout.enterPostalCode("12345");
        await checkout.clickButton("Continue");
        await expect(page.locator('[class="title"]')).toHaveText("Checkout: Overview");
        await checkout.clickButton("Finish");
        await expect(page.locator('[class="title"]')).toHaveText("Checkout: Complete!");
        await checkout.clickButton("Back Home");
        await expect(page.locator('[class="title"]')).toHaveText("Products");

        await home.clickButton("Open Menu");
        await home.clickLink("Logout");

    });
 
});