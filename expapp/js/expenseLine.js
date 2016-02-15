(function() {
  'useStrict'

  /* global angular */
  angular.module('expenseLine', [])

    .controller('ExpenseController', ['$scope', function($scope) {

      $scope.isNewExpense = function() {
        return $scope.expense.status === "New";
      }

    }])
  ;

})();
