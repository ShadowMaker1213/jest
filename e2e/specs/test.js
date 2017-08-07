"use strict";
const chromedriver = require('chromedriver');
const test = {
    before() {
        chromedriver.start();
    },
    after() {
        chromedriver.stop();
    },
    'First user journey e2e test'(client) {
        client
            .url(client.launch_url)
            .useXpath()
            .click('//*[contains(text(), "Treffer anzeigen")]')
            .assert.urlContains('search-results')
            .useCss()
            .waitForElementVisible('.title', 5000)
            .click('.search-result-item a')
            .assert.urlContains('car')
            .end();
    },
};
module.exports = test;
