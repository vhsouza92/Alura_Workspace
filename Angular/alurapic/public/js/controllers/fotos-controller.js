// "http://casseta.globo.com/platb/files/2020/2010/07/jabulani_700.jpg"

angular.module('alurapic').controller('FotosController',function($scope, $http){
   
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    
    

    
    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    });
    
    $scope.remover = function(foto){
        
        $http.delete('v1/fotos/' + foto._id)
            .success(function(){
                var indexFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indexFoto,1);
                $scope.mensagem = "Foto '" + foto.titulo + "' foi removido com sucesso!";
                
            }).error(function(erro){
                $scope.mensagem = "Não foi possível deletar " + foto.titulo;                 
            });
    };    
});



// http://wallpapercave.com/wp/JDaR3BA.jpg


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // modo 01
    // var promisse = $http.get('v1/fotos');
    // promisse.then(function(retorno){
    //     $scope.fotos = retorno.data;
    // }).catch(function(err){
    //     console.log(err);
    // });