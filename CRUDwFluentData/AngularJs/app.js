angular.module("ChinookApp", ['ngRoute'])


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
            }).
            when('/custAdd', {
                templateUrl: 'AngularJs/partials/CustomerAdd.html',
                controller: 'CustomerAddCtrl'
            }).
            when('/custUpdate/:id', {
                templateUrl: 'AngularJs/partials/CustomerUpdate.html',
                controller: 'CustomerUpdateCtrl'
            });
        }
    ]);
