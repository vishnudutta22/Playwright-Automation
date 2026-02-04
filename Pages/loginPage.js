export class LoginPage {
constructor(page) {
this.page = page;
this.userName =page.locator('input[id="user-name"]');
this.password = page.locator('input[name="password"]');
this.loginButton =page.locator('input[name="login-button"]');
}
async goToURL() {
await this.page.goto("https://www.saucedemo.com/");
}
async logindetail(userName,password) {
await this.userName.fill(userName);
await this.password.fill(password);
await this.loginButton.click();
}
}

