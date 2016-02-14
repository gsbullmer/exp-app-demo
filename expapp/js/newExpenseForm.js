(function() {
  'useStrict'
  
  /* global angular */
  angular.module('newExpenseForm', [])

    .controller('NewExpenseFormController', ['$scope', function($scope) {
      $scope.newExpense = {};

      $scope.saveExpense = function(save) {
        if (save) {
          $scope.expenses.push($scope.newExpense);
        }
        $scope.newExpense = {};
        $scope.hasNewExpense = false;
      };

    }])
  ;

})();
