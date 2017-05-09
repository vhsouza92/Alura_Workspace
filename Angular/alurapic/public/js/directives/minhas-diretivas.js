angular.module('minhasDiretivas',[])
.directive('meuPainel', function(){
    var ddo = {};
    ddo.restrict = "AE";
    ddo.scope = {
        titulo: '@titulo'
    };
    
    ddo.transclude = true;
    
    ddo.templateUrl = 'js/directives/meu-painel.html';
    
    return ddo;
        
})
.directive('minhaFoto', function(){
    var ddo = {};
    ddo.restrict = "AE";
    ddo.scope = {
        titulo: '@titulo'
        ,url:   '@'
    };
    
    ddo.transclude = true;
    
    ddo.templateUrl = 'js/directives/minha-foto.html';
    
    return ddo;
        
})
.directive('meuBotaoPerigo', function(){
    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
        nome: '@'
        ,acao: '&'
    };
        
    ddo.template = '<button ng-click="acao()" class="btn btn-danger btn-block">{{nome}}</button>';
    
    return ddo;
        
})
.directive('meuFocus', function(){
    var ddo = {};
    ddo.restrict = "A"
    
    ddo.link = function(scope, element){
        scope.$on("fotoCadastrada", function(){
            element[0].focus();  
        });            
    };
        
    return ddo;
    
})
.directive('meusTitulos', function() {
        var ddo = {};
        ddo.restrict = 'E';
        
        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        
        ddo.controller = function($scope, recursoFoto){
            recursoFoto.query(function(fotos){
                $scope.titulos = fotos.map(function(foto){
                  return foto.titulo;  
                });
            });
        };
        
        return ddo;
});

