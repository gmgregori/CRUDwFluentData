﻿angular.module("ChinookApp", ['ngRoute'])


    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'AngularJs/partials/CustomersList.html',
                controller: 'CustomersListCtrl'
            }).
            when('/custDetails/:id', {
                templateUrl: 'AngularJs/partials/CustomerDetails.html',
                controller: 'CustomerDetailsCtrl'
            }).
            when('/custDelete/:id', {
                templateUrl: 'AngularJs/partials/CustomerDelete.html',
                controller: 'CustomerDeleteCtrl'
            });
        }
    ]);
