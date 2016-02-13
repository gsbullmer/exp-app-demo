(function() {
  angular.module('expenseSheet', [])

    .controller('ExpenseSheetController', ['$scope', function($scope) {
      $scope.expenses = lines;
      $scope.headers = [
        "Date",
        "Merchant",
        "Amount",
        "Comments",
        "Status",
        "Actions"
      ];

      $scope.createNewExpenseLine = function() {
        $scope.expenses.push(new Expense());
      };

      $scope.removeExpense = function(expense) {
        for (var i in $scope.expenses) {
          if ($scope.expenses[i] === expense) {
            $scope.expenses.splice(i, 1);
          }
        }
      };
    }])

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

  function Expense(merchant, totalExpense, date, comments, isReimbursed) {
    this.merchant = merchant;
    this.totalExpense = totalExpense;
    this.date = new Date(date);
    this.comments = comments;
    this.isReimbursed = isReimbursed;
    this.isEditing = false;
  };

  var lines = [
    new Expense("Adam", 1500, 312341643256, "", false),
    new Expense("Bob", 2749.99, 312341643256, "This was expensive!", false),
    new Expense("Chris", 2.49, 312341643256, "Energy drink for lunch.", true)
  ];

})();
