const chromedriver = require('chromedriver');

const test = {
    before() {
        chromedriver.start();
    },

    after() {
        chromedriver.stop();
    },

    'First user journey e2e test'(client: any) {
        client
            .url(client.launch_url)
            .useXpath()
            .click('//*[contains(text(), "Treffer anzeigen")]')
            .assert.urlContains('search-results 123')
            .useCss()
            .waitForElementVisible('.title', 5000)
            .click('.search-result-item a')
            .assert.urlContains('car')
            .end();
    },
};

export = test;
