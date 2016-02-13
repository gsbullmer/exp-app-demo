(function() {
  "use strict"

  var app = angular.module('expApp', ['expenseTable'])

    .directive('expenseTable', function() {
      return {
        "restrict": "E",
        "templateUrl": "templates/expense-table.html",
        "controller": "ExpenseSheetController"
      };
    })
  ;
})();
