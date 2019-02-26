/* eslint-disable */
const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
    nightwatchClientAsParameter: true,
    stepTimeout: 300 * 1000,
    jsonReport: 'reports/cucumber.json',
    htmlReport: 'reports/cucumber.html',
    junitReport: {
        output: 'reports/junit.xml'
    }
});

module.exports = {
    custom_commands_path: '',
    custom_assertions_path: ['wrappers'],
    page_objects_path: 'page-objects',
    live_output: true,
    disable_colors: false,
    test_workers: {
        enabled: true,
        workers: 'auto'
    },

    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        host: '127.0.0.1',
        port: 4444
    },

    test_settings: {
        default: {
            screenshots: {
                enabled: true,
                on_failure: true,
                path: 'screenshots/default'
            },
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
            },
            globals: {
                itemGridIndexShift: '0',
                dismissAlert: true
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            },
            globals: {
                itemGridIndexShift: '0',
                dismissAlert: true
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                marionette: true
            },
            selenium: {
                cli_args: {
                    'webdriver.gecko.driver': geckodriver.path
                }
            }
        },

        ios_mobile: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    mobileEmulation: {
                        deviceMetrics: {
                            width: 360,
                            height: 640,
                            pixelRatio: 3
                        },
                        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
                    }
                }
            },
            globals: {
                itemGridIndexShift: '2',
                dismissAlert: true
            }
        },

        android_mobile: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    mobileEmulation: {
                        deviceMetrics: {
                            width: 360,
                            height: 640,
                            pixelRatio: 3
                        },
                        userAgent: 'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36',
                    }
                }
            },
            globals: {
                itemGridIndexShift: '1',
                dismissAlert: true
            }
        },

        android_mobile_phjs: {
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path,
                'phantomjs.cli.args' : ['--ignore-ssl-errors=true'],
                'phantomjs.page.settings.userAgent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36',
                'phantomjs.page.viewportSize' : 'width: 1024, height: 768'
            },
            globals: {
                itemGridIndexShift: '1',
                dismissAlert: false
            }
        },

        ios_mobile_phjs: {
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path,
                'phantomjs.cli.args' : ['--ignore-ssl-errors=true'],
                'phantomjs.page.settings.userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'
            },
            globals: {
                itemGridIndexShift: '2',
                dismissAlert: false
            }
        }
    }
};
