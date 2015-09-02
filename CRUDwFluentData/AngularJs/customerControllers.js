angular.module("ChinookApp")

    .controller("CustomersListCtrl", function ($scope, $http, $location) {
        $http.get('api/Customer').
        success(function (data, status, headers, config) {
            $scope.customers = data;

        }).
        error(function (data, status, headers, config) {
            console.log('CustomerListCtrl error');
        });

        $scope.showDetails = function (custId) {
            $location.path('/custDetails/' + custId);
        };

        $scope.deleteCustomer = function (custId) {
            $location.path('/custDelete/' + custId);
        }
    })

    .controller("CustomerDetailsCtrl", function ($scope, $http, $routeParams) {
        $http.get('api/Customer', {
            params: { id: $routeParams.id }
        }).
        success(function (data, status, headers, config) {
            $scope.customer = data;

        }).
        error(function (data, status, headers, config) {
            console.log('CustomersDetailsCtrl error');
        });
    }).

    controller("CustomerDeleteCtrl", function ($scope, $http, $routeParams, $location) {
        $http.get('api/Customer', {
            params: { id: $routeParams.id }
        }).
        success(function (data, status, headers, config) {
            $scope.customer = data;
        }).
        error(function (data, status, headers, config) {
            console.log('CustomersDeleteCtrl error');
        });

        $scope.confirmDeletion = function (custId) {
            $http.delete('api/Customer', {
                params: { id: custId }
            }).
            success(function (data, status, headers, config) {
                $location.path('/');
            }).
            error(function (data, status, headers, config) {
                console.log('confirmDeletion error');
            });
        };
    }).

    controller("CustomerAddCtrl", function ($scope, $http, $location) {
        $scope.newCustomer = {};

        $scope.sendCustomer = function () {
            $http.post('api/Customer', $scope.newCustomer).
            success(function (data, status, headers, config) {
                $location.path('/custDetails/' + data);
            }).
            error(function (data, status, headers, config) {
                console.log('CustomerAddCtrl error');
            });
        }
    });