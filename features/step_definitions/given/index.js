module.exports = function () {
	this.Given(/^Homepage for (.*)$/, function (homePage) {
				client
					.page
					.home
					.homepage()
					.openBrowser(homePage)
			});
}
