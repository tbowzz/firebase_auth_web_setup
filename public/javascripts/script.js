var myApp = angular.module("myApp",["firebase"]);
myApp.controller("chatController", ["$scope", "$firebaseArray",
 function($scope, $firebaseArray) {
   var ref = firebase.database().ref().child("messages");
   $scope.chats = $firebaseArray(ref);
   $scope.update = function(user) {
       var newmessage = {from:user.name || "anonymous",body:user.chat};
       console.log(newmessage);
       $scope.chats.$add(newmessage);
       user.chat = "";
   }
 }
]);

// we injected the firebase service into the controller. You are enabling a three way binding
// between the html, js, and database. The "child" reference initializes the "messages"
// collection. The call to $add() not only changes the $scope variable so the 
// angular can add the chat to the list, but it also saves the chat to the db on firebase.
// You can also run this in several windows and they will all stay synchronized since changes
// to one window will modify the firebase db and will then update all the other browser data.

// var myApp = angular.module("myApp",[]);
// myApp.controller("chatController", ["$scope",
//   function($scope) {
//     $scope.chats = [];
//     $scope.update = function(user) {
//       var newmessage = {from:user.name || "anonymous",body:user.chat};
//       console.log(newmessage);
//       $scope.chats.push(newmessage);
//       user.chat = "";
//     }
//   } 
// ]);

// var myApp = angular.module("myApp", ["firebase"]);
// myApp.controller("chatController", ["$scope", "$firebaseArray",
// function($scope, $firebaseArray) {
//   var ref = new Firebase("https://incandescent-torch-9913.firebaseio.com/");
//   $scope.chats = $firebaseArray(ref);
//   $scope.update = function(user) {
// 	  var newmessage = {from:user.name || "anonymous",body:user.chat};
//       console.log(newmessage);
// 	  $scope.chats.$add(newmessage);
// 	  user.chat = "";
//   }
// }
// ]);
