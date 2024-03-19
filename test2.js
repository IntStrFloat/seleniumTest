const { Builder, By, Key, until } = require('selenium-webdriver');

async function test2() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    // Тест 2: Проверка нажатия кнопки
    await driver.get('http://127.0.0.1:3000/button.html');
    await driver.findElement(By.name('button1')).click();
    let buttonClicked = await driver.findElement(By.id('buttonClicked')).getText();
    if (buttonClicked !== 'Кнопка нажата.') {
      console.log('Тест 2 не пройден');
    } else {
      console.log('Тест 2 пройден');
    }
  } finally {
    await driver.quit();
  }
}
test2();
