import { BasePage } from "../objects/basePage.js";
export class successCheckout extends BasePage {
    constructor(page) {
        super(page);
        this.successMessage = page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' });
        this.finishButton = page.getByRole('button', { name: 'Finish' });
    }
    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }
    async clickFinish() {
        await this.finishButton.click();
    }
}