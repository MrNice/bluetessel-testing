/* globals require, console */
require('tesselate')({
  modules: {
    A: ['ble-ble113a', 'blue']
  },
  development: true
}, run);

function run(tessel, m) {
  var blue = m.blue;
  console.log(blue);
}