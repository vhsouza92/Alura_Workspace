angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {

    return $resource('/v1/fotos/:fotoId', null, {
        'update' : { 
            method: 'PUT'
        }
    });
})
.factory('cadastroDeFotos',function(recursoFoto, $q){
    
    var servico = {};
    
    servico.cadastrar = function(foto){
        return $q(function(resolve, reject){
            // aleração
            if(foto._id){
                recursoFoto.update({fotoId: foto._id}, foto, function(){
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