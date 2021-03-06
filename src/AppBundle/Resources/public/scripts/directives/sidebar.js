/**
 * Created by sergej on 19.11.15.
 */

(function() {
    'use strict';

    angular.module('app')
        .directive('sidebar', function(){
            return {
                restrict: 'AC', // E = Element, A = Attribute, C = Class, M = Comment
                templateUrl: 'bundles/app/views/sidebar.html',
                scope: true,
                transclude : false,
                controller: 'SidebarCtrl'
            };
        })
})()