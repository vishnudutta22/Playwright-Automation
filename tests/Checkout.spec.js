import {test} from "@playwright/test";
import {LoginPage} from "../Pages/loginPage";
import credentials from "../TestData/LoginDetails.json";
import {ProductsPage} from '../Pages/Selectproductsfromlist';
import addedproducts from "../TestData/SelectProducts.json";
import {DescriptionPage} from '../Pages/DescriptionPage';
import check from "../TestData/Checkout.json";
test.describe('Login and select the products into cart Flow', () => {
test.beforeEach(async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.goToURL();
await loginPage.logindetail(credentials.username,credentials.password);
});
test('User should be able to add multiple products into cart and checkout button is Clickable', async ({ page }) => {
const productsPage = new ProductsPage(page);
const description = new DescriptionPage(page);
await test.step('Add multiple products at once and click on cart button', async () => {
await productsPage.addMultipleProducts(
[addedproducts.products[0],
addedproducts.products[1]
],addedproducts.addbutton);
await productsPage.clickOnButton();
});
await test.step('Description of the added products and click on Checkout Button', async () => {
await description.clickOnCheckoutButton(check.clickonbutton);
});
});
});
