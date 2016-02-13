(function() {
  angular.module('expenseLine', [])

    .controller('ExpenseController', ['$scope', function($scope) {

      $scope.updateExpense = function() {
        $scope.newExpense.isEditing = false;
        $scope.expense = angular.copy($scope.newExpense);
      }

      $scope.resetExpense = function() {
        $scope.newExpense = angular.copy($scope.expense);
      }

      $scope.resetExpense();
    }])
  ;

})();
