/**
 * Created by Donny on 17/3/22.
 */
(function () {
    'use strict';

    angular.module('myApp.services', [])
        .factory('uuid', function () {
            var uuid = {};

            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            uuid.create = function () {
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            };

            return uuid;
        })

}());