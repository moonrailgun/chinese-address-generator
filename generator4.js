const generator = require('./generator');
const path = require('path');
const { getRandom, randomNum } = require('./utils');
const fs = require('fs');
let level4 = fs.readFileSync(path.resolve(__dirname, './data/level4.txt'), { encoding: 'utf8' });

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


function fabricateFullAddress(hasCode = false) {
  const street = generateLevel4();
  const buildNo = (randomNum(1400) + 1).toString().padStart(3, '0'); // 001 - 1400
  const room = (randomNum(8) + 1) + '0' + randomNum(9); // 101 - 909

  let address = `${street.region}${buildNo}号${room}室`;
  if(!hasCode) {
    return address;
  }else {
    return {
      region: address,
      code: street.code
    }
  }
}

exports.fabricateFullAddress = fabricateFullAddress;
exports.generateLevel4 = generateLevel4;
