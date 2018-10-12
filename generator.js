const level3 = require('./data/level3.json');
const { getRandom } = require('./utils');

const checkSub = function(dict) {
  return dict.regionEntitys && dict.regionEntitys instanceof Array && dict.regionEntitys.length > 0
}

// 生成一级地址
function generateLevel1() {
  const province = getRandom(level3)
  return {
    region: province.region,
    code: province.code
  }
}

// 生成二级地址
function generateLevel2() {
  const dict = level3.filter(i => checkSub(i));
  const province = getRandom(dict);
  const city = getRandom(province.regionEntitys);
  return {
    region: province.region + city.region,
    code: city.code
  };
}

// 生成三级地址
function generateLevel3() {
  const dict = level3.filter(i => checkSub(i));
  const province = getRandom(dict);
  const city = getRandom(province.regionEntitys);
  if(!city.regionEntitys) {
    return generateLevel3(); // 如果没有三级区域。则迭代
  }
  const region = getRandom(city.regionEntitys);
  return {
    region: province.region + city.region + region.region,
    code: region.code
  };
}

exports.generateLevel1 = generateLevel1;
exports.generateLevel2 = generateLevel2;
exports.generateLevel3 = generateLevel3;
