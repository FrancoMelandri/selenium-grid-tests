module.exports = function () {
    this.Then(/^I except the url contains (.*)$/, function (client, homePage) {
        client
            .page
            .home
            .homepage()
            .assertIsLoaded(homePage)
    });
};
