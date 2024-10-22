const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('UI Testing using Selenium', function () {

    this.timeout(30000); // Set timeout for Mocha tests

    let driver;

    // Inisialisasi WebDriver sebelum menjalankan test case
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Tutup WebDriver setelah semua test selesai
    after(async function () {
        await driver.quit();
    });

    it('should load the login page', async function () {
        await driver.get('file:/Users/lazzy/Developments/testing-prak/praktikum-4/index.html');
        const title = await driver.getTitle();
        expect(title).to.equal('Login Page');
    });

    it('should input username and password', async function () {
        await driver.findElement(By.id('username')).sendKeys('testuser');
        await driver.findElement(By.id('password')).sendKeys('password123');

        const usernameValue = await driver.findElement(By.id('username')).getAttribute('value');
        const passwordValue = await driver.findElement(By.id('password')).getAttribute('value');

        expect(usernameValue).to.equal('testuser');
        expect(passwordValue).to.equal('password123');
    });

    it('should click the login button', async function () {
        await driver.findElement(By.id('loginButton')).click();

        // Lakukan tindakan lebih lanjut, seperti validasi login (ini disimulasikan di sini)
        // Misal: validasi pesan error jika login gagal atau redirect halaman jika berhasil
    });

    it('should show an error message on failed login', async function () {

        await driver.findElement(By.id('username')).sendKeys('wronguser');
        await driver.findElement(By.id('password')).sendKeys('wrongpassword');
        await driver.findElement(By.id('loginButton')).click();

        const errorMessage = await driver.findElement(By.id('errorMessage')).getText();
        expect(errorMessage).to.equal('Invalid username or password');
    });

    it('should input data using CSS Selector and XPath', async function () {

        await driver.findElement(By.id('username')).clear();
        await driver.findElement(By.id('password')).clear();

        await driver.findElement(By.css('#username')).sendKeys('testuser');

        await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('password123');

        const usernameValue = await driver.findElement(By.id('username')).getAttribute('value');
        const passwordValue = await driver.findElement(By.id('password')).getAttribute('value');

        expect(usernameValue).to.equal('testuser');
        expect(passwordValue).to.equal('password123');
    });


    it('should check visibility of login elements', async function () {
        const loginButtonDisplayed = await driver.findElement(By.id('loginButton')).isDisplayed();
        expect(loginButtonDisplayed).to.be.true;

        const usernameFieldDisplayed = await driver.findElement(By.id('username')).isDisplayed();
        expect(usernameFieldDisplayed).to.be.true;

        const passwordFieldDisplayed = await driver.findElement(By.id('password')).isDisplayed();
        expect(passwordFieldDisplayed).to.be.true;
    });

});