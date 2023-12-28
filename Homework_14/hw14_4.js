require ('chromedriver');
const {Builder, By} = require ('selenium-webdriver');
const assert = require('assert');

describe('Homework_14 Task_4: Sorting the table', ()=>{
    let driver;
    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Check that the values in the "Due" column of the 2nd table are sorted ASC', async function(){
        await driver.get('http://the-internet.herokuapp.com/tables');
        await driver.findElement(By.className('header headerSortDown')).click();
        let dueArr = await driver.findElements(By.css('td.dues'))
        let dueValues = [];
        for (el of dueArr) {
            dueValues.push(await el.getText())
       }

       let sortedDueValues = await dueValues.sort();
       assert.equal(dueValues, sortedDueValues);
   });
    after(()=> driver && driver.quit());   
})


