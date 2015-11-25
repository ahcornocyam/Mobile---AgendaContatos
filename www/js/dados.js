new Vue({
    el      : '#agenda',
    data    : {
        pessoa      : {            
            nome    : null,
            cidade  : null,
            email   : null,
            fone    : null
        },
        pessoas     : []        
    },
    ready :function(){     
        this.mostrar(); 
    },

    methods :{
        adicionar : function(){
            var index = this.pesquisa( this.pessoa );
            console.log( index );
            if( this.pessoas.indexOf( index ) === -1 ){
                this.pessoas.push( { pessoa : this.pessoa } );
                //um lembrete pra mim, passando os dados para o formato JSON
                localStorage.todos = JSON.stringify( this.pessoas );
                this.pessoa = null;
            }else if( this.pessoas.indexOf ( index ) > -1 ){
                localStorage.todos = JSON.stringify( this.pessoas );
                this.pessoa = null;            
            }else{
                alert( 'dados nulos' );                 
            } 
            $( '.button-collapse' ).sideNav( 'hide' );             
        } ,
        mostrar : function(){           
            if( localStorage.todos ){
                // um lembrete pra mim passando os dados de volta como objeto para mostrar no banco
                this.pessoas = JSON.parse( localStorage.todos );
            }
        },
        remover : function( index ){
            this.pessoas.splice( index, 1 );
            localStorage.todos = JSON.stringify( this.pessoas );
        },        
        editacao : function( pessoa ){
            $( '.button-collapse' ).sideNav( 'show' );
            this.pessoa  =  pessoa;            
        },
        pesquisa : function(){

            var resultado,
                tamanho  = this.pessoas.length;

            for( var i = 0; i < tamanho ; i++ ){
                if ( this.pessoas[i] == this.pessoa ){
                    resultado = i ;                   
                }           
            }
            return resultado;
        }
    }

})