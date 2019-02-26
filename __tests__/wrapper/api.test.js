const sut = require('../../wrappers/api');

describe ('Testing itemGrid page-object using Jest', () => {
    test ('reportAdditionalInfo should push a message in nightwatch global.reportAdditionalInfos', () => {
        let nwApiMock = jest.fn(() => {
            return {
                globals: {
                    reportAdditionalInfos: {
                        push: jest.fn()
                    }
                }
            };
        });
        let apiMock = nwApiMock();
        sut(apiMock).reportAdditionalInfo ('a message');
        expect(apiMock.globals.reportAdditionalInfos.push).toHaveBeenCalledWith('a message');
    });
    test ('reportAdditionalInfo should push a builded message in nightwatch global.reportAdditionalInfos', () => {
        let nwApiMock = jest.fn(() => {
            return {
                globals: {
                    reportAdditionalInfos: {
                        push: jest.fn()
                    }
                }
            };
        });
        let apiMock = nwApiMock();
        sut(apiMock).reportAdditionalInfo ('this', ' is ', 'a message');
        expect(apiMock.globals.reportAdditionalInfos.push).toHaveBeenCalledWith('this is a message');
    });
});
