export class Customerinfo{
constructor (page)
{
this.page= page;
this.firstname= page.locator('input[id="first-name"]');
this.lastname= page.locator('input[id="last-name"]');
this.zipcode= page.locator('input[name="postalCode"]');
}
async clickoncontinuebutton(buttonText)
{
const button = this.page.getByRole('button', { name: buttonText });
await button.waitFor({ state: 'visible' });
await button.click();
}
async enterdetails(first,last,postalCode)
{
await this.firstname.fill(first);
await this.lastname.fill(last);
await this.zipcode.fill(postalCode);
}
}