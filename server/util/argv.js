const argv = require('minimist')(process.argv.slice(2));
let obj = {};
argv['_'].map((item) => {
  const temp = item.split('=');
  obj[temp[0]] = temp[1];
});
module.exports = obj;
