# Swag Labs UI Automation Testing

This project contains automated UI test scripts for the Swag Labs (Sauce Demo) website using Playwright with JavaScript and the Page Object Model (POM) design pattern.

Requirements:
UI Automation

You are asking for automation tests on the (https://www.saucedemo.com/) site.
Q1: Try logging with locked_out_user and verify the error message.

Q2: Log in with standard_user. Then, from the hamburger menu, reset the App State. Add any three items to the cart. Navigate to the final checkout page and verify the product name and total price. Finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

Q3: Login with performance_glitch_user and reset the App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify all the products' names and the total price. Then finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

The automation suite covers:

- Login functionality
- Product sorting
- Add-to-cart features
- Checkout flow validation
- Total price verification
- Multiple user scenarios

---

# Project Structure

```bash
project-root/
│
├── objects/
│   ├── basePage.js
│   ├── checkOutPage.js
│   ├── homePage.js
│   ├── loginPage.js
│   ├── menuPage.js
│   └── successCheckoutPage.js
│
├── tests/
│   ├── loginWithLockedOutUser.spec.js
│   ├── loginWithPerformanceGlitchUser.spec.js
│   └── loginWithStandardUser.spec.js
│
├── playwright-report/
├── test-results/
├── package.json
├── playwright.config.js
└── README.md

Technologies Used
Playwright
JavaScript
Node.js
Page Object Model (POM)
Git & GitHub
Test Scenarios Covered
Q1 - Locked Out User Validation
Login with locked_out_user
Verify error message validation
Q2 - Standard User Checkout Flow
Login with standard_user
Reset App State
Add three products to cart
Verify cart product names using exact array matching
Verify checkout overview page
Verify total price calculation
Complete checkout process
Verify successful order message
Reset App State again
Logout from application
Q3 - Performance Glitch User Flow
Login with performance_glitch_user
Reset App State
Sort products from Z → A
Add first product to cart
Complete checkout process
Verify all product names
Verify total price
Verify successful order message
Reset App State again
Logout from application
Assertions & Validations

The project includes:

Exact array matching for product verification
Total price validation
Checkout success validation
URL validation
Error message verification
Product sorting verification
User Types Tested
Standard User
Performance Glitch User
Locked Out User
Design Pattern

This project follows the Page Object Model (POM) design pattern to improve:

Reusability
Maintainability
Readability
Scalability
Each page functionality is separated into individual page object classes.


Author
Md. Mahbubul Islam
