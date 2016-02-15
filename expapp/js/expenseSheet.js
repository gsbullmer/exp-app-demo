(function() {
  'useStrict'

  /* global angular */
  angular.module('expenseSheet', ['expenseLine', 'expenseForm'])

    .controller('ExpenseSheetController', ['$scope', function($scope) {
      $scope.expenses = lines;
      $scope.editing = undefined;
      $scope.headers = [
        "Date",
        "Merchant",
        "Amount",
        "Comments",
        "Status",
        "Actions"
      ];

      $scope.createNewExpenseLine = function() {
        var newExpense = new Expense();
        newExpense.status = "New";
        $scope.setEditing(newExpense);
        $scope.expenses.push(newExpense);
      };

      $scope.setEditing = function(expense) {
        $scope.editing = expense;
      };

    }])

    .directive('expenseLine', function() {
      return {
        restrict: "A",
        templateUrl: "templates/expense-line.html",
        controller: "ExpenseController"
      };
    })

    .directive('expenseForm', function() {
      return {
        restrict: "A",
        templateUrl: "templates/expense-form.html",
        controller: "ExpenseFormController"
      };
    })
  ;

  function Expense(merchant, totalExpense, date, comments, status) {
    this.merchant = merchant;
    this.totalExpense = totalExpense;
    this.date = new Date(date);
    this.comments = comments;
    this.status = status;
  };

  var lines = [
    new Expense("Adam", 1500, 312341643256, "", "New"),
    new Expense("Bob", 2749.99, 312341643256, "This was expensive!", "New"),
    new Expense("Chris", 2.49, 312341643256, "Energy drink for lunch.", "Reimbursed")
  ];

})();
