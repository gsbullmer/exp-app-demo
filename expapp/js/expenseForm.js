(function() {
  'useStrict'

  /* global angular */
  angular.module('expenseForm', [])

    .controller('ExpenseFormController', ['$scope', function($scope) {
      $scope.newExpense = {};

      $scope.saveExpense = function() {
        $scope.expenses.push($scope.newExpense);
        $scope.cancelExpense();
      };

      $scope.cancelExpense = function() {
        $scope.newExpense = {};
        $scope.newExpense.status = "New";
        $scope.hasNewExpense = false;
      };

      // Cancel new expense and set status to "New"
      $scope.cancelExpense();

    }])
  ;

})();
