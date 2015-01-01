exports.config={
	 seleiniumAddress: "http://localhost:4444/wd/hub",
	 specs: ['specs/*.js'],
	 capabilities: {
	  'browserName': 'chrome',
	 },
	 chromeDriver:'./node_modules/protractor/selenium/chromedriver'
}
