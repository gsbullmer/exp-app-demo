(function() {
  'useStrict'

  /* global angular */
  angular.module('expenseForm', [])

    .controller('ExpenseFormController', ['$scope', function($scope) {

      $scope.expense = {};
      $scope.$watch("editing", function(newValue, oldValue) {
        console.log("onChange() called");
        if ($scope.editing) {
          $scope.expense = angular.copy($scope.editing);
        } else {
          $scope.expense = {};
        }
      });

      $scope.addOrUpdateExpense = function() {
        if ($scope.editing) {
          $scope.editing.merchant = $scope.expense.merchant;
          $scope.editing.totalExpense = $scope.expense.totalExpense;
          $scope.editing.date = $scope.expense.date;
          $scope.editing.comments = $scope.expense.comments;
          $scope.editing.status = $scope.expense.status;
          $scope.setEditing(undefined);
        } else {
          $scope.expenses.push($scope.expense);
        }
        $scope.expense = {};
      };

      $scope.cancelExpense = function() {
        $scope.setEditing(undefined);
      };

    }])
  ;

})();
