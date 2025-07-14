const { Builder, By, until } = require('selenium-webdriver');

(async function loginTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:3000');

    await driver.wait(until.elementLocated(By.name('email')), 5000);

    await driver.findElement(By.name('email')).sendKeys('niloy@gmal.com');
    await driver.findElement(By.name('password')).sendKeys('13');

    await driver.findElement(By.css('button[type="submit"]')).click();

    await driver.wait(until.urlContains('/'), 5000);

    console.log('✅ Login test passed!');
  } catch (err) {
    console.error('❌ Login test failed:', err.message);
  } finally {
    await driver.quit();
  }
})(); 