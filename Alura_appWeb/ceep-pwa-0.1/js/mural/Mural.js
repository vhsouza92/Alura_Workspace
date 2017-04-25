const Mural = (function(_render, Filtro){
    "use strict"
    
    //FIRSTLOAD--------------------------------------------------
    let cartoes  = getMuralUsuario();
    
    
    cartoes.forEach(cartao => { 
        prepararCartoes(cartao);
    });

    const render = () => _render({cartoes: cartoes, filtro: Filtro.tagsETexto});

    render();
    
    //Recupera Cartoes Cadastrados por Usuário--------------------
    function getMuralUsuario(){
        let cartoesLocal = localStorage.getItem(usuario); 
        
        if(cartoesLocal){
            return JSON.parse(cartoesLocal).map(cartaoLocal => new Cartao(cartaoLocal.conteudo, cartaoLocal.tipo))
        }else{
            return [];
        }
    };
    
    //Filtro Pagina----------------------------------------------
    Filtro.on("filtrado", render);
    
    
    // Prepara cartão para serem inseridos na lista--------------
    function prepararCartoes(cartao){
        cartao.on("mudanca.**", salvarCartoes);
        cartao.on("remocao", ()=>{
                                    cartoes = cartoes.slice(0);
                                    cartoes.splice(cartoes.indexOf(cartao),1);
                                    salvarCartoes();
                                    render();
        });
    }
    
    //Salvar Cartões----------------------------------------------
    function salvarCartoes(){
       localStorage.setItem(usuario, JSON.stringify( cartoes.map( cartao =>   ({conteudo: cartao.conteudo 
                                                                                   ,tipo: cartao.tipo
                                                                                }))
                                                    )
                            );
    }

    //Adicionar Cartão na lista-----------------------------------
    function adiciona(cartao){
        if(logado){
            cartoes.push(cartao);
            salvarCartoes();
            prepararCartoes(cartao);
            render();
            return true;
        } else {
            alert("Usuário não identificado!");
        }
    }

    return Object.seal({
        adiciona
    });
    
    
    
    login.on("login", ()=>{
        cartoes = getMuralUsuario()
        render()
    })

    login.on("logout", ()=> {
        cartoes = []
        render()
    })
    

})(Mural_render, Filtro)