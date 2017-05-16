class NegociacaoController {
    
     
    constructor(){
        
        let $ = document.querySelector.bind(document);
        
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
        
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);       
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
        
        this.inputData.value = DateHelper.dateNow();
    }
    
    
    adicionar(event){
        
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação Incluída com sucesso!";
        
        this._limpaFormulario();
        
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes);       
    }
    
    _criaNegociacao(){
        
       let negociacao = new Negociacao(
                new Date(DateHelper.textoParaData(this.inputData.value))
                ,this.inputQuantidade.value
                ,this.inputValor.value
        ); 
        
        return negociacao;
    }
    
    _limpaFormulario(){
        this.inputData.value = DateHelper.dateNow();
        this.inputQuantidade.value = "1";
        this.inputValor.value = "10"
        this.inputData.focus();
    }
    
}
    
    
    
    
    
    
    
//     //OR//
//     let data = new Date(
//             ...this.inputData.value
//             .split('-')
//             .map((item,index) => item - index % 2)
//         );
        
// }
    
    



   