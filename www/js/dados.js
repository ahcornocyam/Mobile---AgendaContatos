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
            console.log( localStorage.todos );
        },

    methods :{
        adicionar :function(){
           var pessoa = this.pessoa;
            
            if( pessoa != null ){
                this.pessoas.push( { pessoa : pessoa } );
                //um lembrete pra mim, passando os dados para o formato JSON
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
            localStorage.todos = JSON.stringify(this.pessoas);
        }
    }


})