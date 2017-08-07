'use strict';

module.exports = {
    src_folders: ['specs'],
    output_folder: 'reports',

    selenium: {
        start_process: false,
    },

    test_settings: {
        default: {
            launch_url: 'https://d3n8p9i24grlvo.cloudfront.net/',
            selenium_port: 9515,
            selenium_host: 'localhost',
            default_path_prefix: '',
            silent: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                path: 'e2e/screenshots',
            },
            skip_testcases_on_fail: false,
            desiredCapabilities: {
                browserName: 'chrome',
                marionette: false,
                chromeOptions: {
                    args: ['--headless', '--no-sandbox'],
                },
                acceptSslCerts: true,
            },
        },
    },
};
