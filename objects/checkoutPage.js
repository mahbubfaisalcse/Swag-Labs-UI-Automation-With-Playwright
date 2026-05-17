import { BasePage } from "../objects/basePage.js";
export class checkOutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = this.page.getByPlaceholder('First Name');
    this.lastNameInput = this.page.getByPlaceholder('Last Name');
    this.postalCodeInput = this.page.getByPlaceholder('Postal Code');
  }

    async enterFirstName(firstName) {
      await this.firstNameInput.fill(firstName);
    }
    async enterLastName(lastName) {
      await this.lastNameInput.fill(lastName);
    }
    async enterPostalCode(postalCode) {
      await this.postalCodeInput.fill(postalCode);
    }

}