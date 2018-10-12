const generator = require('../generator');

for (var i = 0; i < 1000; i++) {
  let tmp = generator.generateLevel1();
  console.log(tmp.region, tmp.code);
}
