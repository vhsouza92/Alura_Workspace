angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {

    return $resource('/v1/fotos/:fotoId', null, {
        'update' : { 
            method: 'PUT'
        }
    });
})
.factory('cadastroDeFotos',function(recursoFoto, $q, $rootScope){
    
    var servico = {};
    
    servico.cadastrar = function(foto){
        return $q(function(resolve, reject){
            
            var evento = "fotoCadastrada"
            // aleração
            if(foto._id){
                recursoFoto.update({fotoId: foto._id}, foto, function(){
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem: 'Foto "' +foto.titulo+ '" foi alterada com sucesso.'
                        ,incluido: false
                    });
                 
                },function(erro){
                    console.log(erro);
                    reject({
                        mensagem:'Não foi possível alterar "'+foto.titulo+'".'
                    })
                });
            // Inclusao
            }else{
                recursoFoto.save(foto,function(){
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem: 'Foto "' +foto.titulo+ '" foi incluída com sucesso.'
                        ,incluido: true
                    });
                },function(erro){
                    reject({
                        mensagem:'Não foi possível salvar "'+foto.titulo+'".'
                    });
                });  
            } 
            
        });
    };
    
    return servico;
});