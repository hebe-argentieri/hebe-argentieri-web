'use strict';

/**
  General Functions
*/

const ampliar_obra = function (id){
    let cnt_obra = _.template($('#'+id).html());
    const mostrar = function(e){
	let cf = 'activo obra',
	    cb = 'bloqueado';
	if(e){
	    G.panel_flotante.addClass(cf);
	    G.body.addClass(cb);
	}else{
	    G.panel_flotante.removeClass(cf);
	    G.body.removeClass(cb)
	}
    }
    G.panel_flotante.find('.contenido').eq(0).html(cnt_obra);
    mostrar(true);
    G.panel_flotante.find('.cerrar').on({
	click: function(){
	    mostrar(false);
	}
    });
}
