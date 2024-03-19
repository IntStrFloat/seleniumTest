const { Builder, By, Key, until } = require('selenium-webdriver');

async function test1() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    // Тест 1: Проверка ввода в поле input
    await driver.get('http://127.0.0.1:3000/input.html');
    await driver.findElement(By.name('input1')).sendKeys('test', Key.RETURN);
    let message = await driver.findElement(By.id('message')).getText();
    if (message !== 'В поле input1 введенное числовое значение, хотя ожидалась дата.') {
      console.log('Тест 1 не пройден');
    } else {
      console.log('Тест 1 пройден');
    }
  } finally {
    await driver.quit();
  }
}
test1();
