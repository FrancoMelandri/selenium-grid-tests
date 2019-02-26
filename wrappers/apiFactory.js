const apiWrapper = require('./api.js');

const apiFactory = {
    create: function (api) {
        return apiWrapper(api);
    }
};

module.exports = apiFactory;
