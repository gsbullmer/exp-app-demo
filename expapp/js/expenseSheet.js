(function() {
  angular.module('expenseSheet', ['expenseLine'])

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
        this.expense = new Expense();
        this.expense.status = "New";
        this.expense.isEditing = true;
        $scope.expenses.push(this.expense);
      };

      $scope.removeExpense = function(expense) {
        for (var i in $scope.expenses) {
          console.log($scope.expenses[i] === expense);
          if ($scope.expenses[i] === expense) {
            $scope.expenses.splice(i, 1);
          }
        }
      };
    }])

    .directive('expenseLine', function() {
      return {
        restrict: "A",
        templateUrl: "templates/expense-line.html",
        controller: "ExpenseController"
      };
    })
  ;

  function Expense(merchant, totalExpense, date, comments, status, isEditing) {
    this.merchant = merchant;
    this.totalExpense = totalExpense;
    this.date = new Date(date);
    this.comments = comments;
    this.status = status;
    this.isEditing = isEditing;
  };

  var lines = [
    new Expense("Adam", 1500, 312341643256, "", "New", false),
    new Expense("Bob", 2749.99, 312341643256, "This was expensive!", "New", false),
    new Expense("Chris", 2.49, 312341643256, "Energy drink for lunch.", "Reimbursed", false)
  ];

})();
