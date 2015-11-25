$(function(){
    $("[data-activates=slide-out]").sideNav({
        menuWidth   : 240,        
        edge        : 'right',        
    });
    
    $('.collapside').collapsible({
        accordion : true,        
    });
    $("#fone").mask("(00) 0000-00009");    
})

    
