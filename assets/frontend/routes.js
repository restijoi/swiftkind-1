(function () {
  'use strict';

  angular
    .module('swiftkind')
    .config(routes)
  ;

  /* ROUTES
   * @desc : swiftkind routes
   */
  function routes ($urlMatcherFactoryProvider, $stateProvider, $locationProvider, $urlRouterProvider, TEMPLATE_URL) {
    $urlRouterProvider.otherwise('/');
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
      .state('legacy', {
        abstract : true,
        url      : '',
        template : '<ui-view></ui-view>'
      })
      .state('landing', {
        url          : '/',
        templateUrl  : TEMPLATE_URL + 'landing.html',
        controller   : 'LandingController',
        controllerAs : 'ctrl'
      })
    ;

    $locationProvider.html5Mode(true);
  };

})();