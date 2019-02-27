const apiFactory = require('../../wrappers/apiFactory.js'),
    urlBuilder = require('../../utils/urlBuilder.js');

var homepage = {
    openBrowser: function (homePage) {

        let url = urlBuilder()
            .setHost(homePage)
            .build();

        apiFactory.create(this.api)
            .navigateTo(url);

        return this;
    },

    isLoaded: function() {
        apiFactory.create(this.api)
            .waitUntilPageIsLoaded(1000);
        return this;
    },

    assertIsLoaded: function(homePage) {
        apiFactory.create(this.api)
            .containsUrl(homePage);
        return this;
    },
};

module.exports = {
    commands: [homepage],
    elements: {}
};
