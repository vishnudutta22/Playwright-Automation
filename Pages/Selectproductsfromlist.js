export class ProductsPage {
constructor(page) {
this.page = page;
this.productContainer = page.locator('div.inventory_item_description');
this.cartButton = page.locator('a[class="shopping_cart_link"]');
}
async clickButton(productLocator, buttonText = 'Add to cart') {
await productLocator.waitFor({ state: 'visible' });
await productLocator.getByRole('button', { name: buttonText }).click({ force: true });
}
async addMultipleProducts(productNames, buttonText = 'Add to cart') {
for (const name of productNames) {
const product = this.productContainer.filter({ hasText: name });
await this.clickButton(product, buttonText);
}
}
async clickOnButton()
{
await this.cartButton.click();
}
}
