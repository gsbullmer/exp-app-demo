(function() {
  angular.module('expenseLine', [])

    .controller('ExpenseController', ['$scope', function($scope) {

      $scope.editExpense = function() {
        $scope.expense.isEditing = true;
        $scope.newExpense = $scope.expense;
      };

      $scope.updateExpense = function() {
        $scope.newExpense.isEditing = false;
        $scope.expense = $scope.newExpense;
      };

      $scope.resetExpense = function() {
        $scope.expense.isEditing = false;
        $scope.newExpense = $scope.expense;
      };

      $scope.removeExpense = function() {
        for (var i in $scope.expenses) {
          if ($scope.expenses[i] === $scope.expense) {
            $scope.expenses.splice(i,1);
          }
        }
      };

      $scope.resetExpense();
    }])
  ;

})();
