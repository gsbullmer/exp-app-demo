(function() {
  angular.module('expenseLine', [])

    .controller('ExpenseController', ['$scope', function($scope) {

      $scope.editExpense = function() {
        $scope.expense.isEditing = true;
        $scope.newExpense = angular.copy($scope.expense);
      };

      $scope.updateExpense = function() {
        $scope.newExpense.isEditing = false;
        $scope.expense = angular.copy($scope.newExpense);
      };

      $scope.resetExpense = function() {
        $scope.expense.isEditing = false;
        $scope.newExpense = angular.copy($scope.expense);
      };

      $scope.resetExpense();
    }])
  ;

})();
