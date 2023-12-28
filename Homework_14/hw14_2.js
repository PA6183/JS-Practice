require ('chromedriver');
const {Builder, By} = require ('selenium-webdriver');
const assert = require('assert');

describe('Homework_14 Task_2: Hovering the mouse over an element', ()=>{
    let driver;
    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Check that "name: user1" text appears on hover over the 1st avatar', async function(){
        await driver.get('http://the-internet.herokuapp.com/hovers');
        let avatars = await driver.findElement(By.className('figure'));
        await driver.actions({async:true}).move({origin:avatars[0]}).perform();
        let text = await driver.findElement(By.css('h5')).getText();
 
        assert.equal(text, "name: user1");
    });
    after(()=> driver && driver.quit());   
})
