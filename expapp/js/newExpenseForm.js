(function() {
  'useStrict'

  /* global angular */
  angular.module('newExpenseForm', [])

    .controller('NewExpenseFormController', ['$scope', function($scope) {
      $scope.newExpense = {};

      $scope.saveExpense = function() {
        if ($scope.expenseForm.$valid) {
          $scope.expenses.push($scope.newExpense);
          $scope.cancelExpense();
        } else {
          console.log($scope.expenseForm.$error);
        }
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
