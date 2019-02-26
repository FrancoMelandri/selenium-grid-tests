const urlBuilder = () => {
    const _templateUrl = 'https://{host}/{country}/{path}';

    var _host = '';
    var _country = '';
    var _path = '';
    var _queryParams = [];
    var _encoding = input => input;

    return {
        setHost: function (host) {
            _host = host;
            return this;
        },

        setCountry: function (country) {
            _country = country.trim();
            return this;
        },

        setCountryDept: function (countryDept) {
            let slice = countryDept.split('/');
            if (slice.length == 2)
                return this
                    .setCountry(slice[0])
                    .setDepartment(slice[1]);
            return this;
        },

        setPath: function (path) {
            _path = path;
            return this;
        },

        withTimeStamp: function () {
            this.withQueryParameter("__t", Date.now());
            return this;
        },

        withQueryParameter: function (name, value) {
            _queryParams.push(name
                .concat('=')
                .concat(value));
            return this;
        },

        withEncoding: function () {
            _encoding = input => encodeURI(input);
            return this;
        },


        build: function () {
            return _encoding(_templateUrl
                .replace('{host}', _host)
                .replace('{country}', _country)
                .replace('{path}', _path)
                .replace(/\/+$/, '')
                .concat('?', _queryParams.join('&'))
                .replace(/\?+$/, '')
                .split('https://').map(item => item.replace(/\/{2}/g, '/')).join('https://'));
        }
    };
};

module.exports = urlBuilder;
