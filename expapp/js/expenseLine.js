(function() {
  'useStrict'

  /* global angular */
  angular.module('expenseLine', [])

    .controller('ExpenseController', ['$scope', function($scope) {
      $scope.isEditing = $scope.$invalid;

      $scope.isNewExpense = function() {
        return $scope.expense.status === "New";
      }

      $scope.editExpense = function() {
        //$scope.isEditing = true;
        $scope.setEditing($scope.expense);
        //$scope.newExpense = $scope.expense;
      };

      $scope.updateExpense = function() {
        $scope.isEditing = false;
        $scope.expense = $scope.newExpense;
      };

      $scope.resetExpense = function() {
        $scope.isEditing = false;
        $scope.newExpense = $scope.expense;
      };

      $scope.removeExpense = function() {
        for (var i in $scope.expenses) {
          if ($scope.expenses[i] === $scope.expense) {
            $scope.expenses.splice(i,1);
          }
        }
      };

      //$scope.resetExpense();
    }])
  ;

})();
