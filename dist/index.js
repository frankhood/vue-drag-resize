!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueDragResize=e():t.VueDragResize=e()}(window,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=25)}([function(t,e,i){var n=i(11);"string"==typeof n&&(n=[[t.i,n,""]]);var r={};r.transform=void 0;i(3)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,i){"use strict";function n(t,e,i,n,r,o,s,a){var h="function"==typeof t?t.options:t;e&&(h.render=e,h.staticRenderFns=i,h._compiled=!0),n&&(h.functional=!0),o&&(h._scopeId="data-v-"+o);var c;if(s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(h.functional){h._injectStyles=c;var u=h.render;h.render=function(t,e){return c.call(e),u(t,e)}}else{var l=h.beforeCreate;h.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:h}}i.d(e,"a",function(){return n})},function(t,e,i){"use strict";function n(t){return a(t)||s(t)||o(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"==typeof t)return h(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(t,e):void 0}}function s(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function c(t){t.forEach(function(t,e){document.documentElement.addEventListener(e,t)})}function u(t){t.forEach(function(t,e){document.documentElement.removeEventListener(e,t)})}var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vdr",class:(t.active||t.isActive?"active":"inactive")+" "+(t.contentClass?t.contentClass:""),style:t.positionStyle,on:{mousedown:function(e){t.bodyDown(e)},touchstart:function(e){t.bodyDown(e)},touchend:function(e){t.up(e)}}},[i("div",{ref:"container",staticClass:"content-container",style:t.sizeStyle},[t._t("default")],2),t._v(" "),t._l(t.sticks,function(e){return i("div",{staticClass:"vdr-stick",class:["vdr-stick-"+e,t.isResizable?"":"not-resizable"],style:t.vdrStick(e),on:{mousedown:function(i){i.stopPropagation(),i.preventDefault(),t.stickDown(e,i)},touchstart:function(i){i.stopPropagation(),i.preventDefault(),t.stickDown(e,i)}}})})],2)},f=[];l._withStripped=!0;var d={y:{t:"top",m:"marginTop",b:"bottom"},x:{l:"left",m:"marginLeft",r:"right"}},p={name:"vue-drag-resize",emits:["clicked","dragging","dragstop","resizing","resizestop","activated","deactivated"],props:{stickSize:{type:Number,default:8},parentScaleX:{type:Number,default:1},parentScaleY:{type:Number,default:1},isActive:{type:Boolean,default:!1},preventActiveBehavior:{type:Boolean,default:!1},isDraggable:{type:Boolean,default:!0},isResizable:{type:Boolean,default:!0},aspectRatio:{type:Boolean,default:!1},parentLimitation:{type:Boolean,default:!1},rightEdgeExceed:{type:Number,default:null},snapToGrid:{type:Boolean,default:!1},gridX:{type:Number,default:50,validator:function(t){return t>=0}},gridY:{type:Number,default:50,validator:function(t){return t>=0}},parentW:{type:Number,default:0,validator:function(t){return t>=0}},parentH:{type:Number,default:0,validator:function(t){return t>=0}},w:{type:[String,Number],default:200,validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},h:{type:[String,Number],default:200,validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},minw:{type:Number,default:50,validator:function(t){return t>=0}},minh:{type:Number,default:50,validator:function(t){return t>=0}},x:{type:Number,default:0,validator:function(t){return"number"==typeof t}},y:{type:Number,default:0,validator:function(t){return"number"==typeof t}},z:{type:[String,Number],default:"auto",validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},sticks:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]}},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both","none"].indexOf(t)}},contentClass:{type:String,required:!1,default:""}},data:function(){return{fixAspectRatio:null,active:null,zIndex:null,parentWidth:null,parentHeight:null,left:null,top:null,right:null,bottom:null,minHeight:null}},beforeCreate:function(){this.stickDrag=!1,this.bodyDrag=!1,this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}},this.currentStick=null},mounted:function(){var t=this;this.parentElement=this.$el.parentNode,this.parentWidth=this.parentW?this.parentW:this.parentElement.clientWidth,this.parentHeight=this.parentH?this.parentH:this.parentElement.clientHeight,this.left=this.x,this.top=this.y,this.right=this.parentWidth-("auto"===this.w?this.$refs.container.scrollWidth:this.w)-this.left,this.bottom=this.parentHeight-("auto"===this.h?this.$refs.container.scrollHeight:this.h)-this.top,this.domEvents=new Map([["mousemove",this.move],["mouseup",this.up],["mouseleave",this.up],["mousedown",this.deselect],["touchmove",this.move],["touchend",this.up],["touchcancel",this.up],["touchstart",this.up]]),c(this.domEvents),this.dragHandle&&n(this.$el.querySelectorAll(this.dragHandle)).forEach(function(e){e.setAttribute("data-drag-handle",t._uid)}),this.dragCancel&&n(this.$el.querySelectorAll(this.dragCancel)).forEach(function(e){e.setAttribute("data-drag-cancel",t._uid)})},beforeDestroy:function(){u(this.domEvents)},methods:{deselect:function(){this.preventActiveBehavior||(this.active=!1)},move:function(t){if(this.stickDrag||this.bodyDrag){t.stopPropagation();var e=void 0!==t.pageX?t.pageX:t.touches[0].pageX,i=void 0!==t.pageY?t.pageY:t.touches[0].pageY,n=this.dimensionsBeforeMove,r={x:(n.pointerX-e)/this.parentScaleX,y:(n.pointerY-i)/this.parentScaleY};if(this.stickDrag&&this.stickMove(r),this.bodyDrag){if("x"===this.axis)r.y=0;else if("y"===this.axis)r.x=0;else if("none"===this.axis)return;this.bodyMove(r)}}},up:function(t){this.stickDrag?this.stickUp(t):this.bodyDrag&&this.bodyUp(t)},bodyDown:function(t){var e=t.target,i=t.button;if(this.preventActiveBehavior||(this.active=!0),(!i||0===i)&&(this.$emit("clicked",t),this.active&&!(this.dragHandle&&e.getAttribute("data-drag-handle")!==this._uid.toString()||this.dragCancel&&e.getAttribute("data-drag-cancel")===this._uid.toString()))){void 0!==t.stopPropagation&&t.stopPropagation(),void 0!==t.preventDefault&&t.preventDefault(),this.isDraggable&&(this.bodyDrag=!0);var n=void 0!==t.pageX?t.pageX:t.touches[0].pageX,r=void 0!==t.pageY?t.pageY:t.touches[0].pageY;this.saveDimensionsBeforeMove({pointerX:n,pointerY:r}),this.parentLimitation&&(this.limits=this.calcDragLimitation())}},bodyMove:function(t){var e=this.dimensionsBeforeMove,i=this.parentWidth,n=this.parentHeight,r=this.gridX,o=this.gridY,s=this.width,a=this.height,h=e.top-t.y,c=e.bottom+t.y,u=e.left-t.x,l=e.right+t.x;if(this.snapToGrid){var f=!0,d=!0,p=h-Math.floor(h/o)*o,m=n-c-Math.floor((n-c)/o)*o,v=u-Math.floor(u/r)*r,g=i-l-Math.floor((i-l)/r)*r;p>o/2&&(p-=o),m>o/2&&(m-=o),v>r/2&&(v-=r),g>r/2&&(g-=r),Math.abs(m)<Math.abs(p)&&(f=!1),Math.abs(g)<Math.abs(v)&&(d=!1),h-=f?p:m,c=n-a-h,u-=d?v:g,l=i-s-u}var b=this.rectCorrectionByLimit({newLeft:u,newRight:l,newTop:h,newBottom:c});this.left=b.newLeft,this.right=b.newRight,this.top=b.newTop,this.bottom=b.newBottom,this.$emit("dragging",this.rect)},bodyUp:function(){this.bodyDrag=!1,this.$emit("dragging",this.rect),this.$emit("dragstop",this.rect),this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}}},stickDown:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.isResizable&&this.active||i){this.stickDrag=!0;var n=void 0!==e.pageX?e.pageX:e.touches[0].pageX,r=void 0!==e.pageY?e.pageY:e.touches[0].pageY;this.saveDimensionsBeforeMove({pointerX:n,pointerY:r}),this.currentStick=t,this.limits=this.calcResizeLimits()}},saveDimensionsBeforeMove:function(t){var e=t.pointerX,i=t.pointerY;this.dimensionsBeforeMove.pointerX=e,this.dimensionsBeforeMove.pointerY=i,this.dimensionsBeforeMove.left=this.left,this.dimensionsBeforeMove.right=this.right,this.dimensionsBeforeMove.top=this.top,this.dimensionsBeforeMove.bottom=this.bottom,this.dimensionsBeforeMove.width=this.width,this.dimensionsBeforeMove.height=this.height,this.aspectFactor=this.width/this.height},stickMove:function(t){var e=this.currentStick,i=this.dimensionsBeforeMove,n=this.gridY,r=this.gridX,o=this.snapToGrid,s=this.parentHeight,a=this.parentWidth,h=i.top,c=i.bottom,u=i.left,l=i.right;switch(e[0]){case"b":c=i.bottom+t.y,o&&(c=s-Math.round((s-c)/n)*n);break;case"t":h=i.top-t.y,o&&(h=Math.round(h/n)*n)}switch(e[1]){case"r":l=i.right+t.x,o&&(l=a-Math.round((a-l)/r)*r);break;case"l":u=i.left-t.x,o&&(u=Math.round(u/r)*r)}var f=this.rectCorrectionByLimit({newLeft:u,newRight:l,newTop:h,newBottom:c});if(u=f.newLeft,l=f.newRight,h=f.newTop,c=f.newBottom,this.aspectRatio){var d=this.rectCorrectionByAspectRatio({newLeft:u,newRight:l,newTop:h,newBottom:c});u=d.newLeft,l=d.newRight,h=d.newTop,c=d.newBottom}this.left=u,this.right=l,this.top=h,this.bottom=c,this.$emit("resizing",this.rect)},stickUp:function(){this.stickDrag=!1,this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}},this.$emit("resizing",this.rect),this.$emit("resizestop",this.rect)},calcDragLimitation:function(){var t=this.parentWidth,e=this.parentHeight,i=this.width;return null===this.rightEdgeExceed||isNaN(this.rightEdgeExceed)||this.width>this.rightEdgeExceed&&(i=this.rightEdgeExceed),{left:{min:0,max:t-i},right:{min:0,max:t-i},top:{min:0,max:e-this.height},bottom:{min:0,max:e-this.height}}},calcResizeLimits:function(){var t=this.aspectFactor,e=this.width,i=this.height,n=this.bottom,r=this.top,o=this.left,s=this.right,a=this.minh,h=this.minw,c=this.parentLimitation?0:null;this.aspectRatio&&(h/a>t?a=h/t:h=t*a);var u={left:{min:c,max:o+(e-h)},right:{min:c,max:s+(e-h)},top:{min:c,max:r+(i-a)},bottom:{min:c,max:n+(i-a)}};if(this.aspectRatio){var l={left:{min:o-Math.min(r,n)*t*2,max:o+(i-a)/2*t*2},right:{min:s-Math.min(r,n)*t*2,max:s+(i-a)/2*t*2},top:{min:r-Math.min(o,s)/t*2,max:r+(e-h)/2/t*2},bottom:{min:n-Math.min(o,s)/t*2,max:n+(e-h)/2/t*2}};"m"===this.currentStick[0]?(u.left={min:Math.max(u.left.min,l.left.min),max:Math.min(u.left.max,l.left.max)},u.right={min:Math.max(u.right.min,l.right.min),max:Math.min(u.right.max,l.right.max)}):"m"===this.currentStick[1]&&(u.top={min:Math.max(u.top.min,l.top.min),max:Math.min(u.top.max,l.top.max)},u.bottom={min:Math.max(u.bottom.min,l.bottom.min),max:Math.min(u.bottom.max,l.bottom.max)})}return u},sideCorrectionByLimit:function(t,e){var i=e;return null!==t.min&&e<t.min?i=t.min:null!==t.max&&t.max<e&&(i=t.max),i},rectCorrectionByLimit:function(t){var e=this.limits,i=t.newRight,n=t.newLeft,r=t.newBottom,o=t.newTop;return n=this.sideCorrectionByLimit(e.left,n),i=this.sideCorrectionByLimit(e.right,i),o=this.sideCorrectionByLimit(e.top,o),r=this.sideCorrectionByLimit(e.bottom,r),{newLeft:n,newRight:i,newTop:o,newBottom:r}},rectCorrectionByAspectRatio:function(t){var e=t.newLeft,i=t.newRight,n=t.newTop,r=t.newBottom,o=this.parentWidth,s=this.parentHeight,a=this.currentStick,h=this.aspectFactor,c=this.dimensionsBeforeMove,u=o-e-i,l=s-n-r;if("m"===a[1]){var f=l-c.height;e-=f*h/2,i-=f*h/2}else if("m"===a[0]){var d=u-c.width;n-=d/h/2,r-=d/h/2}else u/l>h?(u=h*l,"l"===a[1]?e=o-i-u:i=o-e-u):(l=u/h,"t"===a[0]?n=s-r-l:r=s-n-l);return{newLeft:e,newRight:i,newTop:n,newBottom:r}}},computed:{positionStyle:function(){return{top:this.top+"px",left:this.left+"px",zIndex:this.zIndex}},sizeStyle:function(){return{width:"auto"==this.w?"auto":this.width+"px",height:"auto"==this.h?"auto":this.height+"px"}},vdrStick:function(){var t=this;return function(e){var i={width:"".concat(t.stickSize/t.parentScaleX,"px"),height:"".concat(t.stickSize/t.parentScaleY,"px")};return i[d.y[e[0]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),i[d.x[e[1]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),i}},width:function(){return this.parentWidth-this.left-this.right},height:function(){return this.parentHeight-this.top-this.bottom},rect:function(){return{left:Math.round(this.left),top:Math.round(this.top),width:Math.round(this.width),height:Math.round(this.height)}}},watch:{active:function(t){t?this.$emit("activated"):this.$emit("deactivated")},isActive:{immediate:!0,handler:function(t){this.active=t}},z:{immediate:!0,handler:function(t){(t>=0||"auto"===t)&&(this.zIndex=t)}},x:{handler:function(t,e){var i=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.left){var n=e-t;this.bodyDown({pageX:this.left,pageY:this.top}),this.bodyMove({x:n,y:0}),this.$nextTick(function(){i.bodyUp()})}}},y:{handler:function(t,e){var i=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.top){var n=e-t;this.bodyDown({pageX:this.left,pageY:this.top}),this.bodyMove({x:0,y:n}),this.$nextTick(function(){i.bodyUp()})}}},w:{handler:function(t,e){var i=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.width){var n=e-t;this.stickDown("mr",{pageX:this.right,pageY:this.top+this.height/2},!0),this.stickMove({x:n,y:0}),this.$nextTick(function(){i.stickUp()})}}},h:{handler:function(t,e){var i=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.height){var n=e-t;this.stickDown("bm",{pageX:this.left+this.width/2,pageY:this.bottom},!0),this.stickMove({x:0,y:n}),this.$nextTick(function(){i.stickUp()})}}},parentW:function(t){this.right=t-this.width-this.left,this.parentWidth=t},parentH:function(t){this.bottom=t-this.height-this.top,this.parentHeight=t}}},m=p,v=(i(12),i(1)),g=Object(v.a)(m,l,f,!1,null,null,null);g.options.__file="src/components/vue-drag-resize.vue";e.a=g.exports},function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=p[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(u(n.parts[o],e))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(u(n.parts[o],e));p[n.id]={id:n.id,refs:1,parts:s}}}}function r(t,e){for(var i=[],n={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a=o[1],h=o[2],c=o[3],u={css:a,media:h,sourceMap:c};n[s]?n[s].parts.push(u):i.push(n[s]={id:s,parts:[u]})}return i}function o(t,e){var i=v(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=y[y.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),o(t,e),e}function h(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),o(t,e),e}function c(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function u(t,e){var i,n,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=b++;i=g||(g=a(e)),n=l.bind(null,i,c,!1),r=l.bind(null,i,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=h(e),n=d.bind(null,i,e),r=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(e),n=f.bind(null,i),r=function(){s(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function l(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function f(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function d(t,e,i){var n=i.css,r=i.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(n=x(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var p={},m=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(i){return void 0===e[i]&&(e[i]=t.call(this,i)),e[i]}}(function(t){return document.querySelector(t)}),g=null,b=0,y=[],x=i(10);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=r(t,e);return n(i,e),function(t){for(var o=[],s=0;s<i.length;s++){var a=i[s],h=p[a.id];h.refs--,o.push(h)}if(t){n(r(t,e),e)}for(var s=0;s<o.length;s++){var h=o[s];if(0===h.refs){for(var c=0;c<h.parts.length;c++)h.parts[c]();delete p[h.id]}}}};var w=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){function i(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var o=n(r);return[i].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([o]).join("\n")}return[i].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},,,,,function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,n=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?i+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,'\n.vdr,.vdr.active:before{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.vdr.active:before{content:"";width:100%;height:100%;top:0;left:0;outline:1px dashed #d6d6d6\n}\n.vdr-stick{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;font-size:1px;background:#fff;border:1px solid #6c6c6c;-webkit-box-shadow:0 0 2px #bbb;box-shadow:0 0 2px #bbb\n}\n.inactive .vdr-stick{display:none\n}\n.vdr-stick-br,.vdr-stick-tl{cursor:nwse-resize\n}\n.vdr-stick-bm,.vdr-stick-tm{left:50%;cursor:ns-resize\n}\n.vdr-stick-bl,.vdr-stick-tr{cursor:nesw-resize\n}\n.vdr-stick-ml,.vdr-stick-mr{top:50%;cursor:ew-resize\n}\n.vdr-stick.not-resizable{display:none\n}\n.content-container{display:block;position:relative\n}',""])},function(t,e,i){"use strict";var n=i(0),r=i.n(n);r.a},,,,,,,,,,,,,function(t,e,i){"use strict";i.r(e),function(t){function n(t){n.installed||(n.installed=!0,t.component("vue-drag-resize",r.a))}i.d(e,"install",function(){return n});var r=i(2),o={install:n},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==t&&(s=t.Vue),s&&s.use(o),e.default=r.a}.call(this,i(5))}])});