module.exports = function () {
    this.Then(/^I expect the url contains (.*)$/, function (client, homePage) {
        client
            .page
            .home
            .homepage()
            .assertIsLoaded(homePage);
    });
};
