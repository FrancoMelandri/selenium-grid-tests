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

    // test_workers: {
    //     enabled: true,
    //     workers: 'auto'
    // },

    selenium: {
        start_process: false,
        server_path: seleniumServer.path,
        host: 'jenkins',
        port: 4444
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
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
        }
    }
};
