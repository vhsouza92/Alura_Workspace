angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    
    $scope.foto = {};
    $scope.mensagem = "";
    
    if($routeParams.fotoId){
        $http.get('v1/fotos/'+ $routeParams.fotoId)
            .success(function(foto){
                $scope.foto = foto;
            })
            .error(function(erro){
                console.log(erro);
                $scope.mensagem = "Não foi possível localizar foto.";
            });
    }
    
    $scope.submeter = function(){
        if($scope.formulario.$valid){
            
            // Alteração????
            if($routeParams.fotoId) { 
                $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                    .success(function() {
                        $scope.mensagem = 'Foto "' +$scope.foto.titulo +'" foi alterada com sucesso';
                        //$scope.foto = {};
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alterar a foto: "'+ $scope.foto.titulo+'"';
                    });
            } else { 
                $http.post('/v1/fotos', $scope.foto)
                    .success(function() {
                        $scope.mensagem = 'Foto "'+$scope.foto.titulo+'" cadastrada com sucesso';
                        $scope.foto = {};
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível cadastrar a foto';
                    });
            }
        }
    }; 
})