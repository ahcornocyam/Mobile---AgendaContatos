new Vue({
    el      : '#agenda',
    data    : {
        pessoa      : {
            nome    : null,
            cidade  : null,
            email   : null,
            fone    :null
        },
        pessoas     : []        
    },
    ready :function(){            
        this.mostrar();        
    },

    methods :{
        salvar : function(e){
            e.preventDefault();
            var index  = index = this.pesquisa( this.pessoa );            
            if ( index === undefined ){
                this.pessoas.push( { pessoa : this.pessoa } );
                localStorage.todos = JSON.stringify( this.pessoas );
                this.pessoa = null;                  

            }else if(index >= 0 ){                   
                this.pessoas.splice( index , 1, { pessoa :this.pessoa } );
                localStorage.todos = JSON.stringify( this.pessoas );                     
                this.pessoa = null; 
            }            
            $( '.button-collapse' ).sideNav( 'hide' );             
        } ,
        mostrar : function(){           
            if( localStorage.todos ){
                // um lembrete pra mim passando os dados de volta como objeto para mostrar no banco
                this.pessoas = JSON.parse( localStorage.todos );
            }
        },
        remover : function( pessoa ){             
            var index = this.pesquisa( pessoa );           
            this.pessoas.splice( index , 1 );
            localStorage.todos = JSON.stringify( this.pessoas );
        },        
        editacao : function( pessoa ){ 
            $( '.button-collapse' ).sideNav( 'show' );
            this.pessoa = pessoa;            
        },
        pesquisa : function( pessoa ){
            var resultado;
            for ( var i = 0 ; i < this.pessoas.length; i++ ){                
                if( this.pessoas[i].pessoa ===  pessoa ){                    
                    resultado = i;
                }            
            }
            return resultado;
        }        
    }
})