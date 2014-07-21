/* globals require, console */
require('tesselate')({
  modules: {
    A: ['ble-ble113a', 'blue']
  },
  development: true
}, run);

function run(tessel, m) {
  console.log('Hooray we are logging something');
}