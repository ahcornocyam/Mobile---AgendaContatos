(function($) {
    $.fn.waiting = function(options) {
        options = $.extend({modo: 'normal'}, options);
        this.fadeOut(options.modo);
        return this;
    };
})(jQuery);
$(document).ready(function(){  

    $("[data-activates=slide-out]").sideNav({
        menuWidth   : 240,        
        edge        : 'right'        
    });

    $('.collapside').collapsible({
        accordion : true,        
    });

    $("#fone").mask("(00) 0000-0009"); 

    $(".jquery-waiting-base-container").waiting({modo:"normal"});$("[data-activates=slide-out]").sideNav({
        menuWidth   : 240,        
        edge        : 'right',        
    });

    $('.collapside').collapsible({
        accordion : true,        
    });

    $("#fone").mask("(00) 0000-0009"); 


});