(function() {
  "use strict"

  var app = angular.module('expApp', []);

  function Expense(merchant, totalExpense, date, comments) {
    this.merchant = merchant;
    this.totalExpense = totalExpense;
    this.date = date;
    this.comments = comments;
    this.status = "New";
  }

  var lines = [
    new Expense("Adam", 1500, 312341643256, ""),
    new Expense("Bob", 2749.99, 312341643256, "This was expensive!"),
    new Expense("Chris", 2.49, 312341643256, "Energy drink for lunch.")
  ];

  app.controller('ExpenseController', function(){
    this.expenses = lines;
  });

})();
