const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

    });
  });
}

module.exports = countStudents;
