export class DescriptionPage {
constructor(page) {
this.page = page;
}
async clickOnCheckoutButton(buttonText) {
const button = this.page.getByRole('button', { name: buttonText });
await button.waitFor({ state: 'visible' });
await button.click();
}
}

