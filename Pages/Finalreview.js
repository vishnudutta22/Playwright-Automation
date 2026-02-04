import { expect } from "@playwright/test";
export class FinalReviewPage {
constructor(page) {
this.page = page;
this.success=page.locator('h2[class="complete-header"]');
}
async clickOnFinishButton(buttonText) {
const button = this.page.getByRole('button', { name: buttonText });
await button.waitFor({ state: 'visible' });
await button.click();
}
async verifysuccessmessage(expectedmessge)
{
await expect(this.success).toHaveText(expectedmessge)
}
}

