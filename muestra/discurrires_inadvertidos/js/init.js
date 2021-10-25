'use strict';

/* global variable */
var G = {};
const NO_CACHE = false;

/* underscore custom settings */
_.templateSettings = {
  interpolate: /\[\[=([\s\S]+?)\]\]/g,
  evaluate: /\[\[([\s\S]+?)\]\]/g,
  escape: /\[\[--([\s\S]+?)\]--\]/g
};

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

/* initialization */
$( window ).on({
  load: function(){
      G.body = $('body');
      G.obras = $('.obra .miniatura');
      G.panel_flotante = $('#panel_flotante');

      G.obras.on({
	  click: function(){
	      ampliar_obra($(this).data('idpla'));
	  }
      });
  },
  resize: function(){}
});
