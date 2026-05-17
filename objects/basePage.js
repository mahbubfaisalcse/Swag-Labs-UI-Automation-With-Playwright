export class BasePage {
    constructor(page) {
        this.page = page;
    }
    
    buttonLocator(button) {
        return this.page.getByRole("button", {name: button, exact: true});
    }
    linkLocator(link) {
        return this.page.getByRole("link", {name: link, exact: true});
    }

    async clickButton(button) {
        await this.buttonLocator(button).click();
    }
    
    async clickLink(link) {
        await this.linkLocator(link).click();
    }

}
