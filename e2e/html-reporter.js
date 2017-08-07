"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const handlebars = require('handlebars');
const rootdir = 'e2e';
const template = `${rootdir}/html-reporter.hbs`;
module.exports = {
    write: (results, options, done) => {
        const reportFilename = 'index.html';
        const reportFilePath = path.join(__dirname, options.output_folder, reportFilename);
        fs.readFile(template, (err, data) => {
            if (err)
                throw err;
            fs.readdir(`${rootdir}/screenshots/test/`, (err, files) => {
                if (err)
                    throw err;
                const filesnams = files.map((file) => {
                    return file;
                });
                const template = data.toString();
                const html = handlebars.compile(template)({
                    results: results,
                    options: options,
                    filenames: filesnams,
                    timestamp: new Date().toString(),
                    browser: options.filename_prefix.split('_').join(' ')
                });
                fs.mkdir(`${rootdir}/${options.output_folder}`, (err) => {
                    console.log('mkdir done');
                    if (err)
                        throw err;
                    fs.writeFile(reportFilePath, html, (err) => {
                        if (err)
                            throw err;
                        console.log('Report generated: ' + reportFilePath);
                        done();
                    });
                });
            });
        });
    }
};
