require ('chromedriver');
const {Builder, By} = require ('selenium-webdriver');
const assert = require('assert');

describe('Homework_14 Task_3: Filling out the form', ()=>{
    let driver;
    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Check that "The form was successfully submitted!" message appears after sending the filled form', async function(){
        await driver.get('http://formy-project.herokuapp.com/form');
        await driver.findElement(By.id('first-name')).sendKeys('Peter');
        await driver.findElement(By.id('last-name')).sendKeys('Peterson');
        await driver.findElement(By.id('job-title')).sendKeys('tester');
        await driver.findElement(By.id('radio-button-1')).click();
        await driver.findElement(By.id('checkbox-1')).click();
        await driver.findElement(By.id('select-menu')).click();
        await driver.findElement(By.xpath('//option[@value="2"]')).click();
        await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
        await driver.findElement(By.linkText('Submit')).click();
        let message = await driver.findElement(By.className('alert alert-success')).getText();
        assert.equal(message, "The form was successfully submitted!");
    });
    after(()=> driver && driver.quit());   
})
