const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const {Builder, By, Key, until} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = 'C:/Projetos/integracao_continua_treinamento/chromedriver_win32/chromedriver.exe'
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
var driver = new webdriver.Builder()
.withCapabilities(webdriver.Capabilities.chrome())
.build();

 /*
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
*/
Given('I am on Jenkins CI',async function () {
  
  try {
    await driver.get('http://localhost:8080');
    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
  return 'pending';
});

When('I click on pipeline', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should see pipeline view', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
