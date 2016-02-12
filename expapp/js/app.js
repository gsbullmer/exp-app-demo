(function() {
  "use strict"

  var app = angular.module('expApp', []);

  function Expense(merchant, totalExpense, date, comments, status) {
    this.merchant = merchant;
    this.totalExpense = totalExpense;
    this.date = date;
    this.comments = comments;
    this.status = status;
  }

  var lines = [
    new Expense("Adam", 1500, 312341643256, "", "New"),
    new Expense("Bob", 2749.99, 312341643256, "This was expensive!", "New"),
    new Expense("Chris", 2.49, 312341643256, "Energy drink for lunch.", "Reimbursed")
  ];

  app.controller('ExpenseSheetController', function(){
    this.expenses = lines;

    this.isNewExpense = function(expense) {
      return expense.status === "New";
    };

    this.createNewExpenseLine = function() {
      this.expenses.push(new Expense());
    };
  });

  app.controller('NewExpenseController', function() {
    this.expense = new Expense();
    this.expense.status = "New";

    this.addExpense = function(sheet) {
      sheet.expenses.push(this.expense);
    }
  });

})();
