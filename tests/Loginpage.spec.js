import {test} from "@playwright/test";
import {LoginPage} from "../Pages/loginPage";
import credentials from "../TestData/LoginDetails.json";
test('LOGIN Functionality', async({page}) => {
const loginpage = new LoginPage(page)
await loginpage.goToURL();
await loginpage.logindetail(credentials.username,credentials.password);
})