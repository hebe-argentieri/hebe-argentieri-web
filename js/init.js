'use strict';

/* global variable */
var G = {};
const NO_CACHE = true;

/* underscore custom settings */
_.templateSettings = {
  interpolate: /\[\[=([\s\S]+?)\]\]/g,
  evaluate: /\[\[([\s\S]+?)\]\]/g,
  escape: /\[\[--([\s\S]+?)\]--\]/g
};

/* initialization */
$( window ).on({
  load: function(){
    yml_load( './cfg/general.yml', page_activate );
  },
  resize: function(){
    logo_fix();
  }
});
