const apiFactory = require('../../../wrappers/apiFactory.js'),
    urlBuilder = require('../../../utils/urlBuilder.js');

var homepage = {
    openBrowser: function (homePage) {

        let url = urlBuilder()
            .setHost(homePage)
            .withEncoding()
            .build();

        apiFactory.create(this.api)
            .navigateTo(url)
            .windowsMaximize(1000);

        return this;
    }
};

module.exports = {
    commands: [homepage],
    elements: {}
};
