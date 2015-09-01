angular.module("ChinookApp")

    .controller("CustomersListCtrl", function ($scope, $http) {
        $http.get('api/Customer').
        success(function (data, status, headers, config) {
            $scope.customers = data;

        }).
        error(function (data, status, headers, config) {
            console.log('CustomerListCtrl error');
        });
    });
