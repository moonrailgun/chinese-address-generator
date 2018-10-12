const { fabricateFullAddress } = require('../generator4');

for (var i = 0; i < 1000; i++) {
  let tmp = fabricateFullAddress(true);
  console.log(tmp);
}

for (var i = 0; i < 1000; i++) {
  let tmp = fabricateFullAddress();
  console.log(tmp);
}
