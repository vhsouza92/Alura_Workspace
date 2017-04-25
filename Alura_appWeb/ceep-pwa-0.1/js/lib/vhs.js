function isNullOrUndefined(valor,defaultt){
    if(valor !== "null" && valor !== null && typeof(valor) !== "undefined" ){
        return valor
    }else{    
        return defaultt
    }
}