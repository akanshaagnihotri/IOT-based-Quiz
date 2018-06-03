var myApp=angular.module("Project",["ngMaterial"])
.controller('ledCtrl',['$scope','$http',function($scope,$http){

$scope.questions=[{
	ques:" Lightning never strikes in the same place twice.",
	ans:true
},
{
	ques:" If you cry in space the tears just stick to your face.",
	ans:true
},
{
	ques:"Approximately one quarter of human bones are in the feet.",
	ans:true
},
{
	ques:"The Great Wall Of China is visible from the moon. ",
	ans:false
},
{
	ques:" Electrons are larger than molecules. ",
	ans:false
},
{
	ques:" Mount Kilimanjaro is the tallest mountain in the world.",
	ans:false
},
{
	ques:" Spiders have six legs",
	ans:false
},
{
	ques:" The human skeleton is made up of less than 100 bones",
	ans:false
},
{
	ques:" If you cut an earthworm in half, both halves can regrow their body.",
	ans:true
}
];$scope.hello=function(data){
	console.log("hey")

	if($scope.questions[0].ans==data){
		alert("yayaya");

	}
	else{
		alert("nonono");
	}
}

$scope.wrong=function(fal,index){
	if($scope.questions[index].ans==fal){
		$http({
        method : "GET",
        url : "192.168.43.213:3000/green"
    }).then(function mySuccess(response) {
        alert("yayaya");
    }, function myError(response) {
        alert("shit");
    });

	
	
}else{
	$http({
        method : "GET",
        url : "192.168.43.213:3000/red"
    }).then(function mySuccess(response) {
        alert("no");
    }, function myError(response) {
        alert("shit");
    });

}
}
$scope.right=function(tru,index){

	if($scope.questions[index].ans==tru){
	$http({
        method : "GET",
        url : "192.168.43.213:3000/green"
    }).then(function mySuccess(response) {
        alert("yayaya");
    }, function myError(response) {
        alert("shit");
    });

	}else{
		$http({
        method : "GET",
        url : "192.168.43.213:3000/red"
    }).then(function mySuccess(response) {
        alert("nonono");
    }, function myError(response) {
        alert("shit");
    });
	}
	
}

 



}]);
