// spec.js
describe('forums automadesk homepage', function() {

	it("should sign in user", function(){

		browser.driver.get("http://forums.autodesk.com");

		browser.driver.findElement(by.linkText('SIGN IN')).click();

		browser.switchTo().frame(browser.driver.findElement(by.css('#oxygen-container > iframe')));

		browser.driver.sleep(4000);

		browser.driver.findElement(by.id('userName_str')).sendKeys('guneet.singh@autodesk.com');
		browser.driver.findElement(by.id('password_str')).sendKeys('simran123');
		browser.driver.findElement(by.css('.ui-button-text')).click();

		browser.driver.sleep(5000);

		var loggedInElements = browser.driver.findElements(by.css('.loggedIn'));

		loggedInElements.then(function(values){
			expect(values.length).toBeGreaterThan(0);
		});
	})

});
