const execFile = require('child_process').execFile;

module.exports = {
  getStatus: () => {
    return new Promise((resolve, reject) => {
      execFile('./jxa/getStatus', (error, stdout, stderr) => {
        let json = null;

        try {
          json = JSON.parse(stdout.trim());
        } catch (e) {
          reject([e, error, stderr]);
        }

        resolve(json);
      });
    });
  }
};
