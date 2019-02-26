const apiWrapper = function (api) {
    let _api = api;
    let _navigations = {
        true:  function (url) {
            _api.windowHandles( (result) => {
                let mainPage = result.value[0];
                _api
                    .url(url)
                    .dismissAlert()
                    .switchWindow(mainPage);
            });
        },
        false: function (url) {
            _api.url(url);
        }
    };

    return {

        dismissAlert: function () {
            _api
                .dismissAlert();
            return this;
        },

        clickElement: function (element, timeout) {
            _api
                .waitForElementVisible(element, timeout)
                .moveToElement(element, 0, 0)
                .click(element);
            return this;
        },

        clickElementIfExists: function (element) {
            _api
                .element('css selector', element, function (results) {
                    if (results.status == 0) {
                        this
                            .click(element);
                    }
                });
            return this;
        },

        clickAllElementsIfExists: function (cssSelector, afterClickCallback, timeout) {
            let thisClosure = this;
            _api.elements('css selector', cssSelector, function (results) {
                if (results.status == 0 && results.value.length > 0) {
                    this.click(cssSelector, function (result) {
                        if (result.status == 0) {
                            afterClickCallback();
                            if (results.value.length - 1 > 0) {
                                thisClosure.clickAllElementsIfExists(cssSelector, afterClickCallback, timeout);
                            }
                        }
                    });
                }
            });
            return this;
        },

        clickDialog: function (dialog, close, timeout) {
            _api
                .waitForElementVisible(dialog, timeout)
                .click(close);
            return this;
        },

        elementContainsText: function (element, text, timeout) {
            _api
                .waitForElementPresent(element, timeout)
                .assert.containsText(element, text);
            return this;
        },

        moveToElement: function (element, timeout) {
            _api
                .waitForElementVisible(element, timeout)
                .moveToElement(element, 0, 0);
            return this;
        },

        moveToElementIfExists: function (element, timeout) {
            _api
                .element('css selector', element, function (results) {
                    if (results.status == 0) {
                        this
                            .moveToElement(element, 0, 0);
                    }
                });
            return this;
        },

        windowsMaximize: function (timeout) {
            _api
                .waitForElementVisible('body', timeout)
                .windowMaximize();
            return this;
        },

        clickAndSetValue: function (element, value, timeout) {
            _api
                .waitForElementVisible(element, timeout)
                .click(element)
                .setValue(element, value);
            return this;
        },

        assertCssClass: function (cssSelector, cssClass) {
            _api
                .assert
                .cssClassPresent(cssSelector, cssClass);
            return this;
        },

        assertNotCssClass: function (cssSelector, cssClass) {
            _api
                .assert
                .cssClassNotPresent(cssSelector, cssClass);
            return this;
        },

        sleep: function (timeout) {
            _api
                .pause(timeout);
            return this;
        },

        containsUrl: function (url) {
            _api
                .verify
                .urlContains(url);
            return this;
        },

        navigateTo: function (url) {
            let _navigate = _navigations[_api.globals.dismissAlert];
            _navigate(url);
            return this;
        },

        closeWindow: function () {
            _api
                .closeWindow();
            return this;
        },

        backWindow: function () {
            _api
                .back();
            return this;
        },

        setValue: function (selector, value) {
            _api
                .setValue(selector, value);
            return this;
        },

        submitForm: function (selector) {
            _api
                .submitForm(selector);
            return this;
        },

        urlEquals: function (urlExpected) {
            _api
                .assert
                .urlEquals(urlExpected);
            return this;
        },

        assertElementPresent: function (selector) {
            _api
                .assert
                .elementPresent(selector);
            return this;
        },

        assertElementNotPresent: function (selector, timeout) {
            _api
                .waitForElementNotPresent(selector, timeout)
                .assert
                .elementNotPresent(selector);
            return this;
        },

        assertElementHidden: function (selector) {
            _api
                .assert
                .hidden(selector);
            return this;
        },

        assertElementVisible: function (selector, logMessage) {
            _api
                .assert
                .visible(selector, logMessage);
            return this;
        },

        assertUrlNotContains: function (expected, message) {
            _api
                .assert
                .urlNotContains(expected, message);
            return this;
        },

        waitUntilPageIsLoaded: function (timeout) {
            _api
                .waitForElementVisible('body', timeout);
            return this;
        },

        waitUntilElementIsNotVisible: function (selector, timeout) {
            _api
                .waitForElementNotVisible(selector, timeout);
            return this;
        },

        waitUntilElementIsNotPresent: function (selector, timeout) {
            _api
                .waitForElementNotPresent(selector, timeout);
            return this;
        },

        waitUntilElementIsVisible: function (selector, timeout, callback) {
            _api
                .waitForElementVisible(selector, timeout, callback);
            return this;
        },

        waitUntilElementIsPresent: function (selector, timeout, callback) {
            _api
                .waitForElementPresent(selector, timeout, callback);
            return this;
        },

        setTabPage: function (index) {
            _api
                .windowHandles(function (result) {
                    this.switchWindow(result.value[index]);
                });
            return this;
        },

        terminate: function () {
            _api
                .end();
            return this;
        },

        pressEnter: function () {
            _api
                .keys(api.Keys.ENTER);
            return this;
        },

        getText: function (cssSelector, callback) {
            _api
                .getText(cssSelector, callback);
            return this;
        },

        setCookie: function (cookie) {
            _api
                .setCookie(cookie);
            return this;
        },

        deleteCookie: function (cookieName) {
            _api
                .deleteCookie(cookieName);
            return this;
        },

        getCookie: function (cookieName, callback) {
            _api
                .getCookie(cookieName, callback);
            return this;
        },

        getUrl: function (callback) {
            _api
                .url((response) => {
                    callback(response);
                });
            return this;
        },

        assertElementCount: function (selector, count) {
            _api
                .assert
                .elementCount(selector, count);
            return this;
        },

        elementExists: function (cssSelector, onFound, onNotFound = () => {}) {
            _api.element('css selector', cssSelector, (result) => {
                result.status == 0 ? onFound() : onNotFound();
            });
            return this;
        },

        getLog: function (typeString, callback) {
            _api.getLog(typeString, callback);
            return this;
        },

        verifyEqual: function (actual, expected, message) {
            _api.verify.equal(actual, expected, message);
            return this;
        },

        getAttribute: function (selector, attribute, callback) {
            _api.getAttribute(selector, attribute, callback);
            return this;
        },

        saveScreenshot: function(fileName) {
            _api.saveScreenshot(fileName);
            return this;
        },

        globals: function (callback) {
            callback(_api.globals);
            return this;
        },

        reportAdditionalInfo: function (...args) {
            _api.globals.reportAdditionalInfos.push(args.join(''));
            return this;
        },

        assertOk: function(condition, message) {
            _api.assert.ok(condition, message);
            return this;
        },

        expectElementNotContainsText: function(selector, value) {
            _api.expect.element(selector).text.to.not.contain(value);
            return this;
        }

    };
};

module.exports = apiWrapper;
