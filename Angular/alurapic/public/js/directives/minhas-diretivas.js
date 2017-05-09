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
    
    ddo.scope = {
        focado: '='
    }
    
    ddo.link = function(scope, element){
        scope.$watch('focado', function(){
            if(scope.focado){
                element[0].focus();
                scope.focado = false;
            }
        });        
        
    }
        
    return ddo;
    
});

