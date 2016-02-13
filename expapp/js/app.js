(function() {
  "use strict"

  var app = angular.module('expApp', [])

    .controller('ExpenseSheetController', ['$scope', function($scope) {
      $scope.expenses = lines;

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

    .controller('NewExpenseController', ['$scope', function($scope) {
      var newExpense = new Expense();

      $scope.addExpense = function() {
        $scope.expenses.push(newExpense);
        newExpense = new Expense();
      }
    }])
  ;

  function Expense(merchant, totalExpense, date, comments, isReimbursed) {
    this.merchant = merchant;
    this.totalExpense = totalExpense;
    this.date = new Date(date);
    this.comments = comments;
    this.isReimbursed = isReimbursed;
  }

  var lines = [
    new Expense("Adam", 1500, 312341643256, "", false),
    new Expense("Bob", 2749.99, 312341643256, "This was expensive!", false),
    new Expense("Chris", 2.49, 312341643256, "Energy drink for lunch.", true)
  ];

})();
