/**
 * Created by Donny on 17/3/22.
 */
(function () {
    'use strict';

    angular.module('myApp.routers', ['ui.router'])
        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/app/home');

            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: './tpls/menu.html',
                    controller: 'AppController'
                })
                .state('app.home', {
                    url: '/home',
                    templateUrl: './tpls/home.html',
                    controller: 'HomeController'
                })
                .state('app.news', {
                    url: '/news',
                    templateUrl: './tpls/news.html',
                    controller: 'NewsController'
                })
                .state('app.idea', {
                    url: '/idea',
                    templateUrl: './tpls/idea.html',
                    controller: 'IdeaController'
                })
                .state('app.work', {
                    url: '/work',
                    templateUrl: './tpls/work.html',
                    controller: 'WorkController'
                });
        }]);

}());