angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos){
    
    $scope.foto = {};
    $scope.mensagem = "";
    
    if($routeParams.fotoId){
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto;
        },function(erro){
            console.log(erro);
            $scope.mensagem = "Não foi possível localizar foto.";
        });
    }
    
    $scope.submeter = function(){
        if($scope.formulario.$valid){
           
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;
                if(dados.incluido) $scope.foto = {};    
                           
            }).catch(function(erro){
                $scope.mensagem = erro.mensagem;
            })
        }
    }; 
})