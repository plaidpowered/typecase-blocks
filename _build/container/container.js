!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}({3:function(e,t){var n=wp.i18n.__,r=wp.blocks.registerBlockType,o=wp.editor.InnerBlocks;r("typecase/container",{title:n("Container"),icon:"welcome-widgets-menus",category:"layout",keywords:[],supports:{html:!1,anchor:!0,align:["wide","full"]},edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement(o,null))},save:function(e){return wp.element.createElement("div",null,wp.element.createElement(o.Content,null))}})}});