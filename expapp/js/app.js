(function() {
  "use strict"

  function expense(merchant, totalExpense, date, comments) {
    this.merchant = merchant;
    this.totalExpense = totalExpense;
    this.date = date;
    this.comments = comments;
    this.status = "New";
  }

  var lines = [
    new expense("Adam", 1500, 312341643256, ""),
    new expense("Bob", 2749.99, 312341643256, "This was expensive!"),
    new expense("Chris", 2.49, 312341643256, "Energy drink for lunch.")
  ];

  var app = angular.module('expApp', []);

  app.controller('ExpenseController', function(){
    this.expenses = lines;
  });

})();
