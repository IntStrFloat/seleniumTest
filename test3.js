const { Builder, By, Key, until } = require('selenium-webdriver');

async function test3() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    // Тест 3: Проверка авторизации
    await driver.get('http://127.0.0.1:3000/auth.html');
    await driver.findElement(By.name('username')).sendKeys('user', Key.RETURN);
    await driver.findElement(By.name('password')).sendKeys('password', Key.RETURN);
    await driver.findElement(By.name('login')).click();
    let loginStatus = await driver.findElement(By.id('status')).getText();
    if (loginStatus !== 'Успешная авторизация.') {
      console.log('Тест 3 не пройден');
    } else {
      console.log('Тест 3 пройден');
    }
  } finally {
    await driver.quit();
  }
}
test3();
