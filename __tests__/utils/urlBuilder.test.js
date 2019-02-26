const sut = require('../../utils/urlBuilder');
require('jest-mock-now')(new Date('2016-11-18'));

describe('Testing url builder', function () {

    test('should return base url', function () {
        let url = sut()
            .setHost('www.example.com')
            .build();
        expect(url).toBe('https://www.example.com');
    });

    test('should return url with country', function () {
        let url = sut()
            .setHost('www.example.com')
            .setCountry('it')
            .build();
        expect(url).toBe( 'https://www.example.com/it');
    });

    test('should return url with country and path', function () {
        let url = sut()
            .setHost('www.example.com')
            .setCountry('it')
            .setPath('account/login')
            .build();
        expect(url).toBe('https://www.example.com/it/account/login');
    });

    test('should return valid url with timestamp param', function () {
        let url = sut()
            .setHost('www.example.com')
            .setCountry('')
            .setPath('account')
            .withTimeStamp()
            .build();
        expect(url).toBe('https://www.example.com/account?__t=1479427200000');
    });

    test('should return valid url with timestamp and dept params', function () {
        let url = sut()
            .setHost('www.example.com')
            .setCountry('it')
            .setPath('/account')
            .withQueryParameter('param', 'value')
            .withTimeStamp()
            .build();
        expect(url).toBe('https://www.example.com/it/account?param=value&__t=1479427200000');
    });
});
