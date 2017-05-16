class View{
    
    constructor(element){
        
        this.elemento = element;
        
    }
    
    update(model){
        
        this.elemento.innerHTML = this.template(model);
        
    }
    
    
    template(){
        
        throw new Error("O método Template deve ser implementado!") 
        
    }
    
}