
import * as fs from 'fs';
import * as path from 'path';
const handlebars = require('handlebars');
const rootdir = 'e2e';
const template = `${rootdir}/html-reporter.hbs`

module.exports = {
  write: (results: any, options: any, done: any) => {

    const reportFilename = 'index.html';
    const reportFilePath = path.join(__dirname, options.output_folder, reportFilename);
    fs.readFile(template, (err: any, data: any) => {
      if (err) throw err;

      fs.readdir(`${rootdir}/screenshots/test/`, (err: any, files: any) => {
        if (err) throw err;
        const filesnams = files.map((file: any) => {
          return file
        })
        const template = data.toString();

        // merge the template with the test results data
        const html = handlebars.compile(template)({
          results: results,
          options: options,
          filenames: filesnams,
          timestamp: new Date().toString(),
          browser: options.filename_prefix.split('_').join(' ')
        });
        
        fs.mkdir(`${rootdir}/${options.output_folder}`, (err:any) => {
          console.log('mkdir done')
          if (err) throw err;
          // write the html to a file

          fs.writeFile(reportFilePath, html, (err: any) => {
            if (err) throw err;
            console.log('Report generated: ' + reportFilePath);
            done();
          });
        })
      })
    });
  }
};