import {test} from "@playwright/test";
import {LoginPage} from "../Pages/loginPage";
import credentials from "../TestData/LoginDetails.json";
import {ProductsPage} from '../Pages/Selectproductsfromlist';
import addedproducts from "../TestData/SelectProducts.json";
test.describe('Login and select the products into cart Flow', () => {
test.beforeEach(async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.goToURL();
await loginPage.logindetail(credentials.username,credentials.password);
});
test('User should be able to add multiple products into cart', async({page}) => {
const productsPage = new ProductsPage(page);
await test.step("Add multiple products and click on cart", async()=>{
await productsPage.addMultipleProducts([
addedproducts.products[0],addedproducts.products[1]],addedproducts.addbutton);
await productsPage.clickOnButton();
})
});
});

