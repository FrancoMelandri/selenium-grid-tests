module.exports = function () {
    this.When(/^homepage is showed$/, function (client) {
        client
            .page
            .home
            .homepage()
            .isLoaded()
    });
};
