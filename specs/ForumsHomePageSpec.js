// spec.js
describe('forums automadesk homepage', function() {
 
    browser.driver.get('http://forums.autodesk.com');

    it("should have browser by departments clickable" , function(){
    	browser.driver.findElement(by.id('toggle-flyout')).click();
    	browser.driver.sleep(4000);
    	var flyout = browser.driver.findElement(by.css('.flyopen-nav'));
    	expect(flyout.isDisplayed()).toBeTruthy();


    });

    it("should have forums link clickable" , function(){
    	browser.driver.findElement(by.linkText('FORUMS')).click();
    	browser.driver.sleep(4000);
    	expect(browser.driver.getCurrentUrl()).not.toEqual('http://forums.autodesk.com/t5/custom/page/page-id/Discussions-Page');
    });

    it("should be able to search " , function(){
        browser.driver.findElement(by.name('messageSearchField')).sendKeys('autocad civil 3d');
        browser.driver.findElement(by.name('submitContext')).click();
        browser.driver.sleep(2000);
        expect(browser.driver.getCurrentUrl()).toContain('&q=autocad');
    })

    


   
 
});
