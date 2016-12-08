angular.module('starter.controllers', [])


.controller('activateCardCtrl', function($scope, $state, $stateParams, $cordovaCamera, $http) {

     $scope.navigateTo = function (stateName) {

        console.log('State change',stateName);

       /* $http.post('localhost:8080/dendphoto/'+'imgURI')
             .succss(function(data)
             {
        console.log("image  sent scucessfyuly"+data)
             })
             .error(function(data)
             {
             console.log("image doen not sent scucessfyuly"+data)
             })*/
        $state.go(stateName);

    };


  $scope.takePhoto = function(){
      var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : false,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            targetWidth : 200,
            targetHeight : 100,
            saveToPhotoAlbum: false
        };

      $cordovaCamera.getPicture(options).then(function(imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
          // error
        });
  });


});





