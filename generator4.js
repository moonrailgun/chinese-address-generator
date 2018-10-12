const generator = require('./generator');
const { getRandom } = require('./utils');
const fs = require('fs');
let level4 = fs.readFileSync('./data/level4.txt', { encoding: 'utf8' });

level4 = level4.split('\n');
level4 = level4.map(row => row.split(','));

function generateLevel4() {
  const city = generator.generateLevel3();
  const subs = level4.filter(l => l[0].startsWith(city.code));
  const sub = getRandom(subs);
  if(!sub) {
    return generateLevel4(); // 如果找不到符合条件的，则迭代
  }
  return {
    region: city.region + sub[1],
    code: sub[0].toString(),
  }
}

module.exports = generateLevel4;
