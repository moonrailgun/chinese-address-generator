const generateLevel4 = require('../generator4');

for (var i = 0; i < 1000; i++) {
  let tmp = generateLevel4();
  console.log(tmp.region, tmp.code);
}
