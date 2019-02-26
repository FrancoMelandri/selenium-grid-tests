module.exports = function () {
    this.Given(/^Homepage for (.*)$/, function (client, homePage) {
        client
            .page
            .home
            .homepage()
            .openBrowser(homePage);
    });
};
