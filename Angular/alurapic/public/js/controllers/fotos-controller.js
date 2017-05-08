// "http://casseta.globo.com/platb/files/2020/2010/07/jabulani_700.jpg"

angular.module('alurapic').controller('FotosController',function($scope, recursoFoto){
   
    // $scope.logo = "data:image/jpeg;base64,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" 
    $scope.logo = "https://cdn.pixabay.com/photo/2016/03/31/19/51/acceptation-1295324_960_720.png";
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    
    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
            
    },function(erro){
        alert("deu merda");
        console.log(erro);
    });
            
    
    $scope.remover = function(foto){
        
        recursoFoto.delete({fotoId: foto._id}, function(){
            var indexFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indexFoto,1);
            $scope.mensagem = "Foto '" + foto.titulo + "' foi removido com sucesso!";
                    
        },function(erro){
            $scope.mensagem = "Não foi possível deletar " + foto.titulo;                 
        });
    };
});



// check foto::::


// var app = angular.module('plunker', []);

// app.controller('MainCtrl', function($scope, Utils) {
//     $scope.test = function() {
//         Utils.isImage($scope.source).then(function(result) {
//             $scope.result = result;
//         });
//     };
// });

// app.factory('Utils', function($q) {
//     return {
//         isImage: function(src) {
        
//             var deferred = $q.defer();
        
//             var image = new Image();
//             image.onerror = function() {
//                 deferred.resolve(false);
//             };
//             image.onload = function() {z
//                 deferred.resolve(true);
//             };
//             image.src = src;
        
//             return deferred.promise;
//         }
//     };
// });

///////////////////////////////////////////////////////////////////////////////

// <!DOCTYPE html>
// <html ng-app="plunker">

// <head>
//     <meta charset="utf-8" />
//     <title>AngularJS Plunker</title>
//     <script>
//         document.write('<base href="' + document.location + '" />');
//     </script>
//     <link rel="stylesheet" href="style.css" />
//     <script data-require="angular.js@1.2.x" src="http://code.angularjs.org/1.2.14/angular.js" data-semver="1.2.14"></script>
//     <script src="app.js"></script>
// </head>

// <body ng-controller="MainCtrl">
    
//     Sourse to test: <input type="text" ng-model="source" /> <button ng-click="test()">Check</button>
//     <div>Result: {{result}}</div>
    
// </body>

// </html>


























// http://wallpapercave.com/wp/JDaR3BA.jpg


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // modo 01
    // var promisse = $http.get('v1/fotos');
    // promisse.then(function(retorno){
    //     $scope.fotos = retorno.data;
    // }).catch(function(err){
    //     console.log(err);
    // });