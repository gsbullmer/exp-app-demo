(function() {
  "use strict"

  var app = angular.module('expApp', ['expenseSheet'])

    .directive('expenseTable', function() {
      return {
        'restrict': "E",
        'templateUrl': "templates/expense-sheet.html",
        'controller': "ExpenseSheetController"
      };
    })
  ;
})();
