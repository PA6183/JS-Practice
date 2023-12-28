require ('chromedriver');
const {Builder, By} = require ('selenium-webdriver');
const assert = require('assert');

describe('Homework_14 Task_1: State of element activity', ()=>{
    let driver;
    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Sub task 14.1.1: Check that the 1st element of the dropdown list is inactive ', async function(){
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        await driver.findElement(By.id('dropdown')).click();
        let dropDownList = await driver.findElement(By.css('select'));
        let options = await dropDownList.findElements(By.css('option'));
        let option1 = await options[0].isEnabled();
        assert.ok(!option1, "The element is active");
    });
    
    it('Sub task 14.1.2: Check that the 2nd element of the dropdown list is active ', async function(){
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        await driver.findElement(By.id('dropdown')).click();
        let dropDownList = await driver.findElement(By.css('select'));
        let options = await dropDownList.findElements(By.css('option'));
        let option2 = await options[1].isEnabled();
        assert.ok(option2, "The element is NOT active");
    });

    after(()=> driver && driver.quit());
})
