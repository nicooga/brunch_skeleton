require('angular');
require('angular-animate');
require('angular-aria');
require('angular-ui-router');
require('angular-material');

angular
  .module('rn3-front', [
    'ngAnimate',
    'ngAria',
    'ui.router',
    'ngMaterial'
  ])
  .component('rn3App', require('components/app/component'));
