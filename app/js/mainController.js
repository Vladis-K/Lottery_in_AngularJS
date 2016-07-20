
app.controller("mainCtrl", function ($scope) {

	$scope.description = "List of participants:";

    $scope.names = [
    {name:'Alex',surname:'Gard',email:'alex@email.com', phone: '050 123 456 76'},
    {name:'Mattew',surname:'Rich',email:'mattew@email.ua', phone: '067 123 456 77'},
    {name:'Katrine',surname:'Lee',email:'katrine@email.ua', phone: '099 123 456 78'},
    {name:'Victor',surname:'Baker',email:'victor@email.ua', phone: '050 123 456 79'},
  ];

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    };
    $scope.randomWinner = function () {
        var max =  $scope.names.length;
        var i = Math.floor(Math.random()*max);
        $scope.winner = $scope.names[i];
        $scope.wins.push($scope.winner);

    };
    $scope.editData = function () {
        $scope.names[$scope.indexNames]= ({name: $scope.name, surname: $scope.surname, email:$scope.email, phone:$scope.phone})
    };
    $scope.loadData = function (pos, i) {
        $scope.indexNames = i;
        $scope.name = pos.name;
        $scope.surname = pos.surname;
        $scope.email = pos.email;
        $scope.phone = pos.phone;
    }

});
