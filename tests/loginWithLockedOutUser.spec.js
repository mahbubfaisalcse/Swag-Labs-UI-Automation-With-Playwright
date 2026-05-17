// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from "../objects/loginPage.js";

const username = "locked_out_user";
const password = "secret_sauce";

test.describe('Login with locked out user', () => {
  test('should display error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUserName(username);
    await loginPage.enterPassword(password);
    await loginPage.clickButton("Login");
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  })

});
