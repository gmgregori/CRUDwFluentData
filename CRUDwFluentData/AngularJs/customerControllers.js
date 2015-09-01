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
    });