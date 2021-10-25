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
