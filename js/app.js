/**
 * Created by Donny on 17/5/3.
 */
(function (angular) {
    angular.module('myApp', [
        'ui.router',
        'myApp.routers',
        'myApp.directives',
        'myApp.services',
        'myApp.controllers'
    ]);
})(angular);