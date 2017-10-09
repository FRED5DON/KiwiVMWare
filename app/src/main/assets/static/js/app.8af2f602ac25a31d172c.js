webpackJsonp([0],{

/***/ "+sdG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5fUZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    URL_HOST :"https://api.64clouds.com/",
    API : {
        SHELL_CMD_BASE : "v1/basicShell/exec",
        SHELL_CMD_CHDIR : "v1/basicShell/cd",
    }

});


/***/ }),

/***/ "64Ck":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
});


/***/ }),

/***/ "6N1T":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9nK/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_KiwiConsole_vue__ = __webpack_require__("kRJH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79180bb7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_KiwiConsole_vue__ = __webpack_require__("X9cp");
function injectStyle (ssrContext) {
  __webpack_require__("yI9p")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_KiwiConsole_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79180bb7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_KiwiConsole_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "BLvK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("Spjz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_widgets_Nav_vue__ = __webpack_require__("gAoT");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const offset = screen.availHeight+1800;
var initialPos = offset;
var toastTask;
(function(){
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.kiwi-modal').height(screen.availHeight+'px');
})();

var cmds = (function() {
    var cmds = localStorage.getItem("cmds");
    if (cmds) {
        cmds = JSON.parse(cmds);
    } else {
        cmds = [];
    }
    return cmds;
})();
function saveSmdTolocal(cmds,cmd) {
    if (!/^\s+$/g.test(cmd)) {
        cmds.push(cmd);
        localStorage.setItem("cmds", JSON.stringify(cmds));
    }
}
function toggle() {
    initialPos = initialPos ^ offset;
    if (initialPos == 0) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').removeClass('noscroll');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html').removeClass('noscroll');
    } else {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').addClass('noscroll');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html').addClass('noscroll');
    }
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.kiwi-modal').css({
        bottom: initialPos - offset + 'px'
    });
}
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'kiwi-modal',
    components: { 'fd-nav': __WEBPACK_IMPORTED_MODULE_1__components_widgets_Nav_vue__["a" /* default */] },
    data() {
        return {
            cmds: cmds,
            msg: "Empty"
        }
    },
    created: function() {
        // this.$on('navClose', this.show)
    },
    methods: {
        historySelect:function(mCmd){
            this.$emit('cmdSelect', mCmd);
        },
        addCmd: function(mCmd) {
            if (mCmd && mCmd !=this.cmds[this.cmds.length-1]) {
                cmds.push(mCmd);
                saveSmdTolocal(this.cmds,mCmd);
            }
        },
        leftClick:function(){
            this.cmds=cmds=[];
            localStorage.setItem("cmds", "[]");
        },
        show: function(title,leftMenu) {
            if(title) this.$refs.fdnav.setTitle(title);
            if(leftMenu) this.$refs.fdnav.setLeftText(leftMenu);
            toggle();
        }
    }
});


/***/ }),

/***/ "BM8h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Statis_vue__ = __webpack_require__("omn6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_85786e04_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Statis_vue__ = __webpack_require__("X5MA");
function injectStyle (ssrContext) {
  __webpack_require__("JIs2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Statis_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_85786e04_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Statis_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "JEwF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("Spjz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const offset= -245;
var initialPos = offset;
var toastTask;
function toggle() {
    initialPos = initialPos ^ offset;
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.toast').css({
        bottom: initialPos + 'px'
    });
}
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'toast',
    data() {
        return {
            msg: "Empty"
        }
    }, methods: {
        show: function(text) {
            this.msg = text;
            toggle();
            if (toastTask) {
                clearTimeout(toastTask);
            }
            toastTask = setTimeout(function() {
                toggle();
            }, 2000)
        }
    }
});


/***/ }),

/***/ "JIs2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("64Ck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_647b9ed0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("lNMg");
function injectStyle (ssrContext) {
  __webpack_require__("6N1T")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_647b9ed0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "RBqe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__ = __webpack_require__("BLvK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b72cd396_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__ = __webpack_require__("Vt3m");
function injectStyle (ssrContext) {
  __webpack_require__("aqnL")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b72cd396"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b72cd396_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "S1J1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toast"},[_c('h1',[_vm._v(_vm._s(_vm.msg))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Spjz":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"=="function"&&__webpack_require__("nErl")&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return r}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/***/ }),

/***/ "Vt3m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kiwi-modal enableMouse"},[_c('fd-nav',{ref:"fdnav",on:{"navClose":_vm.show,"navLeftClick":_vm.leftClick}}),_vm._v(" "),_c('ul',{staticClass:"kiwimodal-content "},_vm._l((_vm.cmds),function(item,index){return _c('li',{on:{"click":function($event){_vm.historySelect(item)}}},[_vm._v("\n            "+_vm._s(item)+"\n        ")])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "X5MA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"statis"},[_c('div',{staticStyle:{"width":"100%","height":"140px","margin":"0px","pading":"0px"},attrs:{"id":"chart_network_io_chart_div"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "X9cp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kiwiconsole"},[_c('pre',{attrs:{"id":"commands"},domProps:{"innerHTML":_vm._s(_vm.vueData.records.join(''))}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.uioptions.cmdIsBlocked),expression:"uioptions.cmdIsBlocked"}],staticClass:"loading"},[_c('span'),_vm._v(" "),_c('span'),_vm._v(" "),_c('span'),_vm._v(" "),_c('span'),_vm._v(" "),_c('span')]),_vm._v(" "),_c('form',{staticStyle:{"display":"table"},attrs:{"id":"sender"}},[_c('div',[_vm._v("[root ")]),_vm._v(" "),_c('div',{attrs:{"id":"currentDirName"},domProps:{"innerHTML":_vm._s(_vm.vueData.currentDirName)}}),_vm._v(" "),_c('div',{attrs:{"id":"command","contenteditable":"true"},domProps:{"innerHTML":_vm._s(_vm.vueData.command)},on:{"keydown":function($event){if(!('button' in $event)&&$event.keyCode!==13){ return null; }$event.preventDefault();_vm.send($event)}}})]),_vm._v(" "),_c('div',{staticClass:"widget",on:{"touchmove":function($event){$event.preventDefault();_vm.dragWidget($event)}}},[_c('div',{staticClass:"widget-launcher",on:{"click":_vm.showHistory}},[_vm._v("\n      history\n    ")])]),_vm._v(" "),_c('fd-modal',{ref:"modal",on:{"cmdSelect":_vm.cmdSelect}}),_vm._v(" "),_c('fd-toast',{ref:"toast"})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_console_KiwiConsole__ = __webpack_require__("9nK/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_console_Statis__ = __webpack_require__("BM8h");




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])
/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [
    {
      path: '/kiwi/console',
      name: 'Kiwi Console',
      component: __WEBPACK_IMPORTED_MODULE_2__components_console_KiwiConsole__["a" /* default */]
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: __WEBPACK_IMPORTED_MODULE_3__components_console_Statis__["a" /* default */]
    }
  ]
}));


/***/ }),

/***/ "aqnL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gAoT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Nav_vue__ = __webpack_require__("qmo7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_842b94aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Nav_vue__ = __webpack_require__("txU4");
function injectStyle (ssrContext) {
  __webpack_require__("+sdG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-842b94aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Nav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_842b94aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Nav_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "k4bn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kRJH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_widgets_Modal_vue__ = __webpack_require__("RBqe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_widgets_Toast_vue__ = __webpack_require__("pbEx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("Spjz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_urltools__ = __webpack_require__("yxZK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_kiwi__ = __webpack_require__("5fUZ");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var currentVueComponent;
var vueData = {
  currentDirName: '/]#&nbsp;',
  command: '',
  records: []
}
var urlTool = new __WEBPACK_IMPORTED_MODULE_3_urltools__["a" /* default */]();
var veid, api_key, command;
var uioptions = {
  cmdIsBlocked: false
}
//stack源有效文件夹路径 stackpre即将切换的文件夹路径
var tempCd, stack = [], stackpre = [];
veid = urlTool.getQueryString('veid')
api_key = urlTool.getQueryString('api_key')
var cdirs;
function sendCMD(cmd) {
  command = cmd;
  if (!command || uioptions.cmdIsBlocked) { return; }
  currentVueComponent.$refs.modal.addCmd(cmd);
  var rawDir = stack.join('/');
  var rootS = `/${rawDir}`
  rootS = rootS.replace(/\/+/g, '/')
  var shmd = `<code>[root&nbsp;${rootS}]# ${command}</code><br>`;
  vueData.records.push(shmd)
  // jQuery('#commands').append(shmd);
  __WEBPACK_IMPORTED_MODULE_2_jquery___default()('#command').html('');
  // vueData.command='';
  var cddir;
  //供实际操作的cd 命令 stack&stackpre
  cdirs = stack.concat([]);
  if (/^\s*?cd\s+/g.test(command)) {
    tempCd = command.replace(/^\s*?cd\s+/g, '')
    if (tempCd.length == 0) {
      currentVueComponent.$refs.toast.show("Plez Check UR Command!");
      return;
    }
    stackpre = tempCd.split('/');
    if (stackpre[0] != '/') {
      stackpre.reverse();
      while (stackpre.length > 0) {
        var cd_dir = stackpre.pop();
        if (cd_dir == '..') {
          cdirs.pop();
          continue;
        }
        cdirs.push(cd_dir)
      }
    }
    command = '';
  }
  cddir = 'cd /' + cdirs.join('/') + ";";
  cddir = cddir.replace(/\/+/g, '/')
  var cd_url = `${__WEBPACK_IMPORTED_MODULE_4_kiwi__["a" /* default */].URL_HOST}\
${__WEBPACK_IMPORTED_MODULE_4_kiwi__["a" /* default */].API.SHELL_CMD_CHDIR}?
veid=${veid}&api_key=${api_key}&currentDir=%2F&newDir=` + cdirs.join('/')
  var url = `${__WEBPACK_IMPORTED_MODULE_4_kiwi__["a" /* default */].URL_HOST}\
${__WEBPACK_IMPORTED_MODULE_4_kiwi__["a" /* default */].API.SHELL_CMD_BASE}?
veid=${veid}&api_key=${api_key}&command=${cddir}${command}`;
  if (veid && api_key) {
    uioptions.cmdIsBlocked = true;
    var isError = void 0;
    if (tempCd && cdirs.length > 0) {
      __WEBPACK_IMPORTED_MODULE_2_jquery___default.a.ajax({
        url: cd_url,
        async: false,
        method: 'GET',
        success: function(message, e, xhr) {
          if (tempCd) {
            stack = [].concat(cdirs);
            tempCd = void 0;
            var rawCd = '/' + stack.join('/');
            rawCd = rawCd.replace(/\/+/g, '/')
            vueData.currentDirName = `${rawCd}]#&nbsp;`;
          }
          var response = JSON.parse(xhr.responseText);
          if ((isError = response.error) != 0) {
            vueData.records.push('<span class="error">' + response.message + '</span><br/>');
          }
        },
        failure: function(message, e, xhr) {
          isError = 1;
          var response = JSON.parse(xhr.responseText);
          vueData.records.push('<span class="error">' + response.message + '</span><br/>');
        }
      })
    }
    if (isError) {
      uioptions.cmdIsBlocked = false;
      return;
    }
    if (command == '') {
      uioptions.cmdIsBlocked = false;
      return;
    }
    __WEBPACK_IMPORTED_MODULE_2_jquery___default.a.ajax({
      url: url,
      async: true,
      timeout: 60000,
      method: 'GET',
      success: function(message, e, xhr) {
        var response = JSON.parse(xhr.responseText);
        if (response.error == 0) {
          if (tempCd) {
            stack = [].concat(cdirs);
            tempCd = void 0;
          }
          var rawCd = '/' + stack.join('/');
          rawCd = rawCd.replace(/\/+/g, '/')
          vueData.currentDirName = `${rawCd}]#&nbsp;`;
          // jQuery('#currentDirName').html(`${rawCd}]#&nbsp;`);
        }
        vueData.records.push(html_encode(response.message));
        setTimeout(
          function() {
            // if (document.body.scrollHeightt - screen.availHeight > 0) {
            document.body.scrollTop = document.body.scrollHeight - screen.availHeight;
            // }
          },
          100);
        uioptions.cmdIsBlocked = false;
      },
      failure: function(message, e, xhr) {
        var response = JSON.parse(xhr.responseText);
        vueData.records.push('<span class="error">' + response.message + '</span><br/>');
        uioptions.cmdIsBlocked = false;
      }
    });

  } else {

  }
}

function html_encode(str) {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&/g, "&gt;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/ /g, "&nbsp;");
  s = s.replace(/\'/g, "&#39;");
  s = s.replace(/\"/g, "&quot;");
  s = s.replace(/\n/g, "<br>");
  return s;
}

const OFFSET = - 64
const MARGIN = 16
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'kiwiconsole',
  components: { 'fd-toast': __WEBPACK_IMPORTED_MODULE_1__components_widgets_Toast_vue__["a" /* default */], 'fd-modal': __WEBPACK_IMPORTED_MODULE_0__components_widgets_Modal_vue__["a" /* default */] },
  data() {
    return {
      vueData: vueData,
      uioptions: uioptions
    }
  },
  created() {
    currentVueComponent = this;
  },
  methods: {
    send: function(event) {
      sendCMD(event.target.innerText)
    },
    cmdSelect: function(cmd) {
      currentVueComponent.$refs.modal.show();
      vueData.command = cmd;
      __WEBPACK_IMPORTED_MODULE_2_jquery___default()('#command').focus();
    },
    showHistory: function() {
      currentVueComponent.$refs.modal.show("Command Records", "Clear");
    },
    dragWidget: function(event) {
      var widget = document.querySelector('.widget')
      var x = event.touches[0].clientX
      var y = event.touches[0].clientY
      x = x < OFFSET ? OFFSET : x
      y = y < OFFSET ? OFFSET : y
      x = x + MARGIN < screen.availWidth ? x : screen.availWidth - MARGIN
      y = y + MARGIN < screen.availHeight ? y : screen.availHeight - MARGIN
      widget.style.left = x + 'px'
      widget.style.top = y + 'px'
    }
  }
});


/***/ }),

/***/ "lNMg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "omn6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_widgets_Toast_vue__ = __webpack_require__("pbEx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_scripts_dygraph_combined_js__ = __webpack_require__("swaC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_scripts_dygraph_combined_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_scripts_dygraph_combined_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("Spjz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_urltools__ = __webpack_require__("yxZK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_kiwi__ = __webpack_require__("5fUZ");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// document.write('<script src="../../../static/scripts/dygraph-combined.js"><\/script>')







var getData = function(mData) {
  var data = [];
  var len=mData.length;
  for (var j = 0; j < len; ++j) {
    var date=new Date();
    date.setTime(mData[j].timestamp*1000);
    data[j] = [date];
    data[j][1] = mData[j].network_in_bytes/1024;
    data[j][2] = mData[j].network_out_bytes/1024;
    data[j][3] = mData[j].network_conntrack;
    data[j][4] = mData[j].disk_read_bytes/1024;
    data[j][5] = mData[j].disk_write_bytes/1024;
    data[j][6] = mData[j].mem_alloc_kbytes;
    data[j][7] = mData[j].mem_used_kbytes;
    data[j][8] = mData[j].numproc;
    data[j][9] = mData[j].failcnt;

  }
  return data;
};

var makeGraph = function(div, data, isStacked) {
   
  var g = new __WEBPACK_IMPORTED_MODULE_1__static_scripts_dygraph_combined_js___default.a(
    div,
    getData(data),
    {
      width: 480,
      height: 320,
      
      stackedGraph: isStacked,

      highlightCircleSize: 2,
      strokeWidth: 1,
      strokeBorderWidth: isStacked ? null : 1,

      highlightSeriesOpts: {
        strokeWidth: 3,
        strokeBorderWidth: 1,
        highlightCircleSize: 5
      }
    });
  var onclick = function(ev) {
    if (g.isSeriesLocked()) {
      g.clearSelection();
    } else {
      g.setSelection(g.getSelection(), g.getHighlightSeries(), true);
    }
  };
  g.updateOptions({ clickCallback: onclick }, true);
  g.setSelection(false, 's005');
  //console.log(g);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'statis',
  components: { 'fd-toast': __WEBPACK_IMPORTED_MODULE_0__components_widgets_Toast_vue__["a" /* default */] },
  data() {
    return {

    }
  },
  created() {
    var that = this;
    setTimeout(function() {
      that.chart_network_io_drawChart();
    }, 50);
  },
  methods: {
    chart_network_io_drawChart: function() {
      console.log(document.querySelector('#chart_network_io_chart_div'))
      var chart_network_io_options = {
        "labels": ["Date", "IN bps", "OUT bps"],
        "labelsKMB": true, "ylabel": "Bits per second", "colors": ["#00b040", "#0050c0"],
        "title": "Network I\/O", "gridLineColor": "#c0c0c0", "includeZero": true,
        "strokeWidth": 2, "labelsDivStyles": { "textAlign": "right" },
        "labelsDivWidth": 100, "fillGraph": true, "fillAlpha": 0.12, "titleHeight": 14,
        "dateWindow": [1507361702000, 1507448102000]
      }
      var data=[
        {
            "timestamp": "1480075202",
            "network_in_bytes": "135517596",
            "network_out_bytes": "88413892",
            "network_conntrack": "40",
            "disk_read_bytes": "0",
            "disk_write_bytes": "209305600",
            "la_5min_100": "1",
            "mem_alloc_kbytes": "11798",
            "mem_used_kbytes": "6409",
            "numproc": "9",
            "failcnt": "0"
        },
        {
            "timestamp": "1480089602",
            "network_in_bytes": "310514258",
            "network_out_bytes": "311941240",
            "network_conntrack": "44",
            "disk_read_bytes": "1646592",
            "disk_write_bytes": "811008",
            "la_5min_100": "0",
            "mem_alloc_kbytes": "16011",
            "mem_used_kbytes": "8391",
            "numproc": "12",
            "failcnt": "0"
        },{
            "timestamp": "1480075202",
            "network_in_bytes": "135517596",
            "network_out_bytes": "88413892",
            "network_conntrack": "40",
            "disk_read_bytes": "0",
            "disk_write_bytes": "209305600",
            "la_5min_100": "1",
            "mem_alloc_kbytes": "11798",
            "mem_used_kbytes": "6409",
            "numproc": "9",
            "failcnt": "0"
        },
        {
            "timestamp": "1480089602",
            "network_in_bytes": "310514258",
            "network_out_bytes": "311941240",
            "network_conntrack": "44",
            "disk_read_bytes": "1646592",
            "disk_write_bytes": "811008",
            "la_5min_100": "0",
            "mem_alloc_kbytes": "16011",
            "mem_used_kbytes": "8391",
            "numproc": "12",
            "failcnt": "0"
        },{
            "timestamp": "1480075202",
            "network_in_bytes": "135517596",
            "network_out_bytes": "88413892",
            "network_conntrack": "40",
            "disk_read_bytes": "0",
            "disk_write_bytes": "209305600",
            "la_5min_100": "1",
            "mem_alloc_kbytes": "11798",
            "mem_used_kbytes": "6409",
            "numproc": "9",
            "failcnt": "0"
        },
        {
            "timestamp": "1480089602",
            "network_in_bytes": "310514258",
            "network_out_bytes": "311941240",
            "network_conntrack": "44",
            "disk_read_bytes": "1646592",
            "disk_write_bytes": "811008",
            "la_5min_100": "0",
            "mem_alloc_kbytes": "16011",
            "mem_used_kbytes": "8391",
            "numproc": "12",
            "failcnt": "0"
        },];
      makeGraph(document.querySelector('#chart_network_io_chart_div'),data, false);
      // var chart_network_io_chart = new Dygraph(
      //  document.querySelector('#chart_network_io_chart_div'),
      //   [

      //   ]
      //   , chart_network_io_options
      // );
    }
  }
});


/***/ }),

/***/ "pbEx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Toast_vue__ = __webpack_require__("JEwF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32bde4af_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Toast_vue__ = __webpack_require__("S1J1");
function injectStyle (ssrContext) {
  __webpack_require__("k4bn")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-32bde4af"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_Toast_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32bde4af_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Toast_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "qmo7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("Spjz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const offset = -screen.availHeight;
var initialPos = offset;
var toastTask;

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'kiwi-nav',
    data() {
        return {
            leftText: "",
            title: "Empty",
            rightText: "Close",
        }
    }, methods: {
        setLeftText: function(text) {
            this.leftText = text;
        },
        setTitle: function(text) {
            this.title = text;
        },
        setRightText: function(text) {
            this.rightText = text;
        },
        toggle: function() {
            toggle();
            if (toastTask) {
                clearTimeout(toastTask);
            }
            toastTask = setTimeout(function() {
                toggle();
            }, 2000)
        },
        close: function(text) {
            this.$emit('navClose', '');
        },
        leftClick: function(text) {
            this.$emit('navLeftClick', '');
        }
    }
});


/***/ }),

/***/ "swaC":
/***/ (function(module, exports) {

/*! @license Copyright 2014 Dan Vanderkam (danvdk@gmail.com) MIT-licensed (http://opensource.org/licenses/MIT) */
!function(t){"use strict";for(var e,a,i={},r=function(){},n="memory".split(","),o="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");e=n.pop();)t[e]=t[e]||i;for(;a=o.pop();)t[a]=t[a]||r}(this.console=this.console||{}),function(){"use strict";CanvasRenderingContext2D.prototype.installPattern=function(t){if("undefined"!=typeof this.isPatternInstalled)throw"Must un-install old line pattern before installing a new one.";this.isPatternInstalled=!0;var e=[0,0],a=[],i=this.beginPath,r=this.lineTo,n=this.moveTo,o=this.stroke;this.uninstallPattern=function(){this.beginPath=i,this.lineTo=r,this.moveTo=n,this.stroke=o,this.uninstallPattern=void 0,this.isPatternInstalled=void 0},this.beginPath=function(){a=[],i.call(this)},this.moveTo=function(t,e){a.push([[t,e]]),n.call(this,t,e)},this.lineTo=function(t,e){var i=a[a.length-1];i.push([t,e])},this.stroke=function(){if(0===a.length)return void o.call(this);for(var i=0;i<a.length;i++)for(var s=a[i],l=s[0][0],h=s[0][1],p=1;p<s.length;p++){var g=s[p][0],d=s[p][1];this.save();var u=g-l,c=d-h,y=Math.sqrt(u*u+c*c),_=Math.atan2(c,u);this.translate(l,h),n.call(this,0,0),this.rotate(_);for(var v=e[0],f=0;y>f;){var x=t[v];f+=e[1]?e[1]:x,f>y?(e=[v,f-y],f=y):e=[(v+1)%t.length,0],v%2===0?r.call(this,f,0):n.call(this,f,0),v=(v+1)%t.length}this.restore(),l=g,h=d}o.call(this),a=[]}},CanvasRenderingContext2D.prototype.uninstallPattern=function(){throw"Must install a line pattern before uninstalling it."}}();var DygraphOptions=function(){return function(){"use strict";var t=function(t){this.dygraph_=t,this.yAxes_=[],this.xAxis_={},this.series_={},this.global_=this.dygraph_.attrs_,this.user_=this.dygraph_.user_attrs_||{},this.labels_=[],this.highlightSeries_=this.get("highlightSeriesOpts")||{},this.reparseSeries()};t.AXIS_STRING_MAPPINGS_={y:0,Y:0,y1:0,Y1:0,y2:1,Y2:1},t.axisToIndex_=function(e){if("string"==typeof e){if(t.AXIS_STRING_MAPPINGS_.hasOwnProperty(e))return t.AXIS_STRING_MAPPINGS_[e];throw"Unknown axis : "+e}if("number"==typeof e){if(0===e||1===e)return e;throw"Dygraphs only supports two y-axes, indexed from 0-1."}if(e)throw"Unknown axis : "+e;return 0},t.prototype.reparseSeries=function(){var e=this.get("labels");if(e){this.labels_=e.slice(1),this.yAxes_=[{series:[],options:{}}],this.xAxis_={options:{}},this.series_={};var a=!this.user_.series;if(a){for(var i=0,r=0;r<this.labels_.length;r++){var n=this.labels_[r],o=this.user_[n]||{},s=0,l=o.axis;"object"==typeof l&&(s=++i,this.yAxes_[s]={series:[n],options:l}),l||this.yAxes_[0].series.push(n),this.series_[n]={idx:r,yAxis:s,options:o}}for(var r=0;r<this.labels_.length;r++){var n=this.labels_[r],o=this.series_[n].options,l=o.axis;if("string"==typeof l){if(!this.series_.hasOwnProperty(l))return void console.error("Series "+n+" wants to share a y-axis with series "+l+", which does not define its own axis.");var s=this.series_[l].yAxis;this.series_[n].yAxis=s,this.yAxes_[s].series.push(n)}}}else for(var r=0;r<this.labels_.length;r++){var n=this.labels_[r],o=this.user_.series[n]||{},s=t.axisToIndex_(o.axis);this.series_[n]={idx:r,yAxis:s,options:o},this.yAxes_[s]?this.yAxes_[s].series.push(n):this.yAxes_[s]={series:[n],options:{}}}var h=this.user_.axes||{};Dygraph.update(this.yAxes_[0].options,h.y||{}),this.yAxes_.length>1&&Dygraph.update(this.yAxes_[1].options,h.y2||{}),Dygraph.update(this.xAxis_.options,h.x||{})}},t.prototype.get=function(t){var e=this.getGlobalUser_(t);return null!==e?e:this.getGlobalDefault_(t)},t.prototype.getGlobalUser_=function(t){return this.user_.hasOwnProperty(t)?this.user_[t]:null},t.prototype.getGlobalDefault_=function(t){return this.global_.hasOwnProperty(t)?this.global_[t]:Dygraph.DEFAULT_ATTRS.hasOwnProperty(t)?Dygraph.DEFAULT_ATTRS[t]:null},t.prototype.getForAxis=function(t,e){var a,i;if("number"==typeof e)a=e,i=0===a?"y":"y2";else{if("y1"==e&&(e="y"),"y"==e)a=0;else if("y2"==e)a=1;else{if("x"!=e)throw"Unknown axis "+e;a=-1}i=e}var r=-1==a?this.xAxis_:this.yAxes_[a];if(r){var n=r.options;if(n.hasOwnProperty(t))return n[t]}if("x"!==e||"logscale"!==t){var o=this.getGlobalUser_(t);if(null!==o)return o}var s=Dygraph.DEFAULT_ATTRS.axes[i];return s.hasOwnProperty(t)?s[t]:this.getGlobalDefault_(t)},t.prototype.getForSeries=function(t,e){if(e===this.dygraph_.getHighlightSeries()&&this.highlightSeries_.hasOwnProperty(t))return this.highlightSeries_[t];if(!this.series_.hasOwnProperty(e))throw"Unknown series: "+e;var a=this.series_[e],i=a.options;return i.hasOwnProperty(t)?i[t]:this.getForAxis(t,a.yAxis)},t.prototype.numAxes=function(){return this.yAxes_.length},t.prototype.axisForSeries=function(t){return this.series_[t].yAxis},t.prototype.axisOptions=function(t){return this.yAxes_[t].options},t.prototype.seriesForAxis=function(t){return this.yAxes_[t].series},t.prototype.seriesNames=function(){return this.labels_};return t}()}(),DygraphLayout=function(){"use strict";var t=function(t){this.dygraph_=t,this.points=[],this.setNames=[],this.annotations=[],this.yAxes_=null,this.xTicks_=null,this.yTicks_=null};return t.prototype.addDataset=function(t,e){this.points.push(e),this.setNames.push(t)},t.prototype.getPlotArea=function(){return this.area_},t.prototype.computePlotArea=function(){var t={x:0,y:0};t.w=this.dygraph_.width_-t.x-this.dygraph_.getOption("rightGap"),t.h=this.dygraph_.height_;var e={chart_div:this.dygraph_.graphDiv,reserveSpaceLeft:function(e){var a={x:t.x,y:t.y,w:e,h:t.h};return t.x+=e,t.w-=e,a},reserveSpaceRight:function(e){var a={x:t.x+t.w-e,y:t.y,w:e,h:t.h};return t.w-=e,a},reserveSpaceTop:function(e){var a={x:t.x,y:t.y,w:t.w,h:e};return t.y+=e,t.h-=e,a},reserveSpaceBottom:function(e){var a={x:t.x,y:t.y+t.h-e,w:t.w,h:e};return t.h-=e,a},chartRect:function(){return{x:t.x,y:t.y,w:t.w,h:t.h}}};this.dygraph_.cascadeEvents_("layout",e),this.area_=t},t.prototype.setAnnotations=function(t){this.annotations=[];for(var e=this.dygraph_.getOption("xValueParser")||function(t){return t},a=0;a<t.length;a++){var i={};if(!t[a].xval&&void 0===t[a].x)return void console.error("Annotations must have an 'x' property");if(t[a].icon&&(!t[a].hasOwnProperty("width")||!t[a].hasOwnProperty("height")))return void console.error("Must set width and height when setting annotation.icon property");Dygraph.update(i,t[a]),i.xval||(i.xval=e(i.x)),this.annotations.push(i)}},t.prototype.setXTicks=function(t){this.xTicks_=t},t.prototype.setYAxes=function(t){this.yAxes_=t},t.prototype.evaluate=function(){this._xAxis={},this._evaluateLimits(),this._evaluateLineCharts(),this._evaluateLineTicks(),this._evaluateAnnotations()},t.prototype._evaluateLimits=function(){var t=this.dygraph_.xAxisRange();this._xAxis.minval=t[0],this._xAxis.maxval=t[1];var e=t[1]-t[0];this._xAxis.scale=0!==e?1/e:1,this.dygraph_.getOptionForAxis("logscale","x")&&(this._xAxis.xlogrange=Dygraph.log10(this._xAxis.maxval)-Dygraph.log10(this._xAxis.minval),this._xAxis.xlogscale=0!==this._xAxis.xlogrange?1/this._xAxis.xlogrange:1);for(var a=0;a<this.yAxes_.length;a++){var i=this.yAxes_[a];i.minyval=i.computedValueRange[0],i.maxyval=i.computedValueRange[1],i.yrange=i.maxyval-i.minyval,i.yscale=0!==i.yrange?1/i.yrange:1,this.dygraph_.getOption("logscale")&&(i.ylogrange=Dygraph.log10(i.maxyval)-Dygraph.log10(i.minyval),i.ylogscale=0!==i.ylogrange?1/i.ylogrange:1,(!isFinite(i.ylogrange)||isNaN(i.ylogrange))&&console.error("axis "+a+" of graph at "+i.g+" can't be displayed in log scale for range ["+i.minyval+" - "+i.maxyval+"]"))}},t.calcXNormal_=function(t,e,a){return a?(Dygraph.log10(t)-Dygraph.log10(e.minval))*e.xlogscale:(t-e.minval)*e.scale},t.calcYNormal_=function(t,e,a){if(a){var i=1-(Dygraph.log10(e)-Dygraph.log10(t.minyval))*t.ylogscale;return isFinite(i)?i:0/0}return 1-(e-t.minyval)*t.yscale},t.prototype._evaluateLineCharts=function(){for(var e=this.dygraph_.getOption("stackedGraph"),a=this.dygraph_.getOptionForAxis("logscale","x"),i=0;i<this.points.length;i++){for(var r=this.points[i],n=this.setNames[i],o=this.dygraph_.getOption("connectSeparatedPoints",n),s=this.dygraph_.axisPropertiesForSeries(n),l=this.dygraph_.attributes_.getForSeries("logscale",n),h=0;h<r.length;h++){var p=r[h];p.x=t.calcXNormal_(p.xval,this._xAxis,a);var g=p.yval;e&&(p.y_stacked=t.calcYNormal_(s,p.yval_stacked,l),null===g||isNaN(g)||(g=p.yval_stacked)),null===g&&(g=0/0,o||(p.yval=0/0)),p.y=t.calcYNormal_(s,g,l)}this.dygraph_.dataHandler_.onLineEvaluated(r,s,l)}},t.prototype._evaluateLineTicks=function(){var t,e,a,i;for(this.xticks=[],t=0;t<this.xTicks_.length;t++)e=this.xTicks_[t],a=e.label,i=this.dygraph_.toPercentXCoord(e.v),i>=0&&1>i&&this.xticks.push([i,a]);for(this.yticks=[],t=0;t<this.yAxes_.length;t++)for(var r=this.yAxes_[t],n=0;n<r.ticks.length;n++)e=r.ticks[n],a=e.label,i=this.dygraph_.toPercentYCoord(e.v,t),i>0&&1>=i&&this.yticks.push([t,i,a])},t.prototype._evaluateAnnotations=function(){var t,e={};for(t=0;t<this.annotations.length;t++){var a=this.annotations[t];e[a.xval+","+a.series]=a}if(this.annotated_points=[],this.annotations&&this.annotations.length)for(var i=0;i<this.points.length;i++){var r=this.points[i];for(t=0;t<r.length;t++){var n=r[t],o=n.xval+","+n.name;o in e&&(n.annotation=e[o],this.annotated_points.push(n))}}},t.prototype.removeAllDatasets=function(){delete this.points,delete this.setNames,delete this.setPointsLengths,delete this.setPointsOffsets,this.points=[],this.setNames=[],this.setPointsLengths=[],this.setPointsOffsets=[]},t}(),DygraphCanvasRenderer=function(){"use strict";var t=function(t,e,a,i){if(this.dygraph_=t,this.layout=i,this.element=e,this.elementContext=a,this.height=t.height_,this.width=t.width_,!this.isIE&&!Dygraph.isCanvasSupported(this.element))throw"Canvas is not supported.";if(this.area=i.getPlotArea(),this.dygraph_.isUsingExcanvas_)this._createIEClipArea();else if(!Dygraph.isAndroid()){var r=this.dygraph_.canvas_ctx_;r.beginPath(),r.rect(this.area.x,this.area.y,this.area.w,this.area.h),r.clip(),r=this.dygraph_.hidden_ctx_,r.beginPath(),r.rect(this.area.x,this.area.y,this.area.w,this.area.h),r.clip()}};return t.prototype.clear=function(){var t;if(this.isIE)try{this.clearDelay&&(this.clearDelay.cancel(),this.clearDelay=null),t=this.elementContext}catch(e){return}t=this.elementContext,t.clearRect(0,0,this.width,this.height)},t.prototype.render=function(){this._updatePoints(),this._renderLineChart()},t.prototype._createIEClipArea=function(){function t(t){if(0!==t.w&&0!==t.h){var i=document.createElement("div");i.className=e,i.style.backgroundColor=r,i.style.position="absolute",i.style.left=t.x+"px",i.style.top=t.y+"px",i.style.width=t.w+"px",i.style.height=t.h+"px",a.appendChild(i)}}for(var e="dygraph-clip-div",a=this.dygraph_.graphDiv,i=a.childNodes.length-1;i>=0;i--)a.childNodes[i].className==e&&a.removeChild(a.childNodes[i]);for(var r=document.bgColor,n=this.dygraph_.graphDiv;n!=document;){var o=n.currentStyle.backgroundColor;if(o&&"transparent"!=o){r=o;break}n=n.parentNode}var s=this.area;t({x:0,y:0,w:s.x,h:this.height}),t({x:s.x,y:0,w:this.width-s.x,h:s.y}),t({x:s.x+s.w,y:0,w:this.width-s.x-s.w,h:this.height}),t({x:s.x,y:s.y+s.h,w:this.width-s.x,h:this.height-s.h-s.y})},t._getIteratorPredicate=function(e){return e?t._predicateThatSkipsEmptyPoints:null},t._predicateThatSkipsEmptyPoints=function(t,e){return null!==t[e].yval},t._drawStyledLine=function(e,a,i,r,n,o,s){var l=e.dygraph,h=l.getBooleanOption("stepPlot",e.setName);Dygraph.isArrayLike(r)||(r=null);var p=l.getBooleanOption("drawGapEdgePoints",e.setName),g=e.points,d=e.setName,u=Dygraph.createIterator(g,0,g.length,t._getIteratorPredicate(l.getBooleanOption("connectSeparatedPoints",d))),c=r&&r.length>=2,y=e.drawingContext;y.save(),c&&y.installPattern(r);var _=t._drawSeries(e,u,i,s,n,p,h,a);t._drawPointsOnLine(e,_,o,a,s),c&&y.uninstallPattern(),y.restore()},t._drawSeries=function(t,e,a,i,r,n,o,s){var l,h,p=null,g=null,d=null,u=[],c=!0,y=t.drawingContext;y.beginPath(),y.strokeStyle=s,y.lineWidth=a;for(var _=e.array_,v=e.end_,f=e.predicate_,x=e.start_;v>x;x++){if(h=_[x],f){for(;v>x&&!f(_,x);)x++;if(x==v)break;h=_[x]}if(null===h.canvasy||h.canvasy!=h.canvasy)o&&null!==p&&(y.moveTo(p,g),y.lineTo(h.canvasx,g)),p=g=null;else{if(l=!1,n||!p){e.nextIdx_=x,e.next(),d=e.hasNext?e.peek.canvasy:null;var m=null===d||d!=d;l=!p&&m,n&&(!c&&!p||e.hasNext&&m)&&(l=!0)}null!==p?a&&(o&&(y.moveTo(p,g),y.lineTo(h.canvasx,g)),y.lineTo(h.canvasx,h.canvasy)):y.moveTo(h.canvasx,h.canvasy),(r||l)&&u.push([h.canvasx,h.canvasy,h.idx]),p=h.canvasx,g=h.canvasy}c=!1}return y.stroke(),u},t._drawPointsOnLine=function(t,e,a,i,r){for(var n=t.drawingContext,o=0;o<e.length;o++){var s=e[o];n.save(),a.call(t.dygraph,t.dygraph,t.setName,n,s[0],s[1],i,r,s[2]),n.restore()}},t.prototype._updatePoints=function(){for(var t=this.layout.points,e=t.length;e--;)for(var a=t[e],i=a.length;i--;){var r=a[i];r.canvasx=this.area.w*r.x+this.area.x,r.canvasy=this.area.h*r.y+this.area.y}},t.prototype._renderLineChart=function(t,e){var a,i,r=e||this.elementContext,n=this.layout.points,o=this.layout.setNames;this.colors=this.dygraph_.colorsMap_;var s=this.dygraph_.getOption("plotter"),l=s;Dygraph.isArrayLike(l)||(l=[l]);var h={};for(a=0;a<o.length;a++){i=o[a];var p=this.dygraph_.getOption("plotter",i);p!=s&&(h[i]=p)}for(a=0;a<l.length;a++)for(var g=l[a],d=a==l.length-1,u=0;u<n.length;u++)if(i=o[u],!t||i==t){var c=n[u],y=g;if(i in h){if(!d)continue;y=h[i]}var _=this.colors[i],v=this.dygraph_.getOption("strokeWidth",i);r.save(),r.strokeStyle=_,r.lineWidth=v,y({points:c,setName:i,drawingContext:r,color:_,strokeWidth:v,dygraph:this.dygraph_,axis:this.dygraph_.axisPropertiesForSeries(i),plotArea:this.area,seriesIndex:u,seriesCount:n.length,singleSeriesName:t,allSeriesPoints:n}),r.restore()}},t._Plotters={linePlotter:function(e){t._linePlotter(e)},fillPlotter:function(e){t._fillPlotter(e)},errorPlotter:function(e){t._errorPlotter(e)}},t._linePlotter=function(e){var a=e.dygraph,i=e.setName,r=e.strokeWidth,n=a.getNumericOption("strokeBorderWidth",i),o=a.getOption("drawPointCallback",i)||Dygraph.Circles.DEFAULT,s=a.getOption("strokePattern",i),l=a.getBooleanOption("drawPoints",i),h=a.getNumericOption("pointSize",i);n&&r&&t._drawStyledLine(e,a.getOption("strokeBorderColor",i),r+2*n,s,l,o,h),t._drawStyledLine(e,e.color,r,s,l,o,h)},t._errorPlotter=function(e){var a=e.dygraph,i=e.setName,r=a.getBooleanOption("errorBars")||a.getBooleanOption("customBars");if(r){var n=a.getBooleanOption("fillGraph",i);n&&console.warn("Can't use fillGraph option with error bars");var o,s=e.drawingContext,l=e.color,h=a.getNumericOption("fillAlpha",i),p=a.getBooleanOption("stepPlot",i),g=e.points,d=Dygraph.createIterator(g,0,g.length,t._getIteratorPredicate(a.getBooleanOption("connectSeparatedPoints",i))),u=0/0,c=0/0,y=[-1,-1],_=Dygraph.toRGB_(l),v="rgba("+_.r+","+_.g+","+_.b+","+h+")";s.fillStyle=v,s.beginPath();for(var f=function(t){return null===t||void 0===t||isNaN(t)};d.hasNext;){var x=d.next();!p&&f(x.y)||p&&!isNaN(c)&&f(c)?u=0/0:(o=[x.y_bottom,x.y_top],p&&(c=x.y),isNaN(o[0])&&(o[0]=x.y),isNaN(o[1])&&(o[1]=x.y),o[0]=e.plotArea.h*o[0]+e.plotArea.y,o[1]=e.plotArea.h*o[1]+e.plotArea.y,isNaN(u)||(p?(s.moveTo(u,y[0]),s.lineTo(x.canvasx,y[0]),s.lineTo(x.canvasx,y[1])):(s.moveTo(u,y[0]),s.lineTo(x.canvasx,o[0]),s.lineTo(x.canvasx,o[1])),s.lineTo(u,y[1]),s.closePath()),y=o,u=x.canvasx)}s.fill()}},t._fastCanvasProxy=function(t){var e=[],a=null,i=null,r=1,n=2,o=0,s=function(t){if(!(e.length<=1)){for(var a=e.length-1;a>0;a--){var i=e[a];if(i[0]==n){var o=e[a-1];o[1]==i[1]&&o[2]==i[2]&&e.splice(a,1)}}for(var a=0;a<e.length-1;){var i=e[a];i[0]==n&&e[a+1][0]==n?e.splice(a,1):a++}if(e.length>2&&!t){var s=0;e[0][0]==n&&s++;for(var l=null,h=null,a=s;a<e.length;a++){var i=e[a];if(i[0]==r)if(null===l&&null===h)l=a,h=a;else{var p=i[2];p<e[l][2]?l=a:p>e[h][2]&&(h=a)}}var g=e[l],d=e[h];e.splice(s,e.length-s),h>l?(e.push(g),e.push(d)):l>h?(e.push(d),e.push(g)):e.push(g)}}},l=function(a){s(a);for(var l=0,h=e.length;h>l;l++){var p=e[l];p[0]==r?t.lineTo(p[1],p[2]):p[0]==n&&t.moveTo(p[1],p[2])}e.length&&(i=e[e.length-1][1]),o+=e.length,e=[]},h=function(t,r,n){var o=Math.round(r);if(null===a||o!=a){var s=a-i>1,h=o-a>1,p=s||h;l(p),a=o}e.push([t,r,n])};return{moveTo:function(t,e){h(n,t,e)},lineTo:function(t,e){h(r,t,e)},stroke:function(){l(!0),t.stroke()},fill:function(){l(!0),t.fill()},beginPath:function(){l(!0),t.beginPath()},closePath:function(){l(!0),t.closePath()},_count:function(){return o}}},t._fillPlotter=function(e){if(!e.singleSeriesName&&0===e.seriesIndex){for(var a=e.dygraph,i=a.getLabels().slice(1),r=i.length;r>=0;r--)a.visibility()[r]||i.splice(r,1);var n=function(){for(var t=0;t<i.length;t++)if(a.getBooleanOption("fillGraph",i[t]))return!0;return!1}();if(n)for(var o,s,l=e.plotArea,h=e.allSeriesPoints,p=h.length,g=a.getNumericOption("fillAlpha"),d=a.getBooleanOption("stackedGraph"),u=a.getColors(),c={},y=function(t,e,a,i){if(t.lineTo(e,a),d)for(var r=i.length-1;r>=0;r--){var n=i[r];t.lineTo(n[0],n[1])}},_=p-1;_>=0;_--){var v=e.drawingContext,f=i[_];if(a.getBooleanOption("fillGraph",f)){var x=a.getBooleanOption("stepPlot",f),m=u[_],D=a.axisPropertiesForSeries(f),w=1+D.minyval*D.yscale;0>w?w=0:w>1&&(w=1),w=l.h*w+l.y;var A,b=h[_],T=Dygraph.createIterator(b,0,b.length,t._getIteratorPredicate(a.getBooleanOption("connectSeparatedPoints",f))),E=0/0,C=[-1,-1],L=Dygraph.toRGB_(m),P="rgba("+L.r+","+L.g+","+L.b+","+g+")";v.fillStyle=P,v.beginPath();var S,O=!0;(b.length>2*a.width_||Dygraph.FORCE_FAST_PROXY)&&(v=t._fastCanvasProxy(v));for(var M,R=[];T.hasNext;)if(M=T.next(),Dygraph.isOK(M.y)||x){if(d){if(!O&&S==M.xval)continue;O=!1,S=M.xval,o=c[M.canvasx];var F;F=void 0===o?w:s?o[0]:o,A=[M.canvasy,F],x?-1===C[0]?c[M.canvasx]=[M.canvasy,w]:c[M.canvasx]=[M.canvasy,C[0]]:c[M.canvasx]=M.canvasy}else A=isNaN(M.canvasy)&&x?[l.y+l.h,w]:[M.canvasy,w];isNaN(E)?(v.moveTo(M.canvasx,A[1]),v.lineTo(M.canvasx,A[0])):(x?(v.lineTo(M.canvasx,C[0]),v.lineTo(M.canvasx,A[0])):v.lineTo(M.canvasx,A[0]),d&&(R.push([E,C[1]]),R.push(s&&o?[M.canvasx,o[1]]:[M.canvasx,A[1]]))),C=A,E=M.canvasx}else y(v,E,C[1],R),R=[],E=0/0,null===M.y_stacked||isNaN(M.y_stacked)||(c[M.canvasx]=l.h*M.y_stacked+l.y);s=x,A&&M&&(y(v,M.canvasx,A[1],R),R=[]),v.fill()}}}},t}(),Dygraph=function(){"use strict";var t=function(t,e,a,i){this.is_initial_draw_=!0,this.readyFns_=[],void 0!==i?(console.warn("Using deprecated four-argument dygraph constructor"),this.__old_init__(t,e,a,i)):this.__init__(t,e,a)};return t.NAME="Dygraph",t.VERSION="1.1.1",t.__repr__=function(){return"["+t.NAME+" "+t.VERSION+"]"},t.toString=function(){return t.__repr__()},t.DEFAULT_ROLL_PERIOD=1,t.DEFAULT_WIDTH=480,t.DEFAULT_HEIGHT=320,t.ANIMATION_STEPS=12,t.ANIMATION_DURATION=200,t.KMB_LABELS=["K","M","B","T","Q"],t.KMG2_BIG_LABELS=["k","M","G","T","P","E","Z","Y"],t.KMG2_SMALL_LABELS=["m","u","n","p","f","a","z","y"],t.numberValueFormatter=function(e,a){var i=a("sigFigs");if(null!==i)return t.floatFormat(e,i);var r,n=a("digitsAfterDecimal"),o=a("maxNumberWidth"),s=a("labelsKMB"),l=a("labelsKMG2");if(r=0!==e&&(Math.abs(e)>=Math.pow(10,o)||Math.abs(e)<Math.pow(10,-n))?e.toExponential(n):""+t.round_(e,n),s||l){var h,p=[],g=[];s&&(h=1e3,p=t.KMB_LABELS),l&&(s&&console.warn("Setting both labelsKMB and labelsKMG2. Pick one!"),h=1024,p=t.KMG2_BIG_LABELS,g=t.KMG2_SMALL_LABELS);for(var d=Math.abs(e),u=t.pow(h,p.length),c=p.length-1;c>=0;c--,u/=h)if(d>=u){r=t.round_(e/u,n)+p[c];break}if(l){var y=String(e.toExponential()).split("e-");2===y.length&&y[1]>=3&&y[1]<=24&&(r=y[1]%3>0?t.round_(y[0]/t.pow(10,y[1]%3),n):Number(y[0]).toFixed(2),r+=g[Math.floor(y[1]/3)-1])}}return r},t.numberAxisLabelFormatter=function(e,a,i){return t.numberValueFormatter.call(this,e,i)},t.SHORT_MONTH_NAMES_=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t.dateAxisLabelFormatter=function(e,a,i){var r=i("labelsUTC"),n=r?t.DateAccessorsUTC:t.DateAccessorsLocal,o=n.getFullYear(e),s=n.getMonth(e),l=n.getDate(e),h=n.getHours(e),p=n.getMinutes(e),g=n.getSeconds(e),d=n.getSeconds(e);if(a>=t.DECADAL)return""+o;if(a>=t.MONTHLY)return t.SHORT_MONTH_NAMES_[s]+"&#160;"+o;var u=3600*h+60*p+g+.001*d;return 0===u||a>=t.DAILY?t.zeropad(l)+"&#160;"+t.SHORT_MONTH_NAMES_[s]:t.hmsString_(h,p,g)},t.dateAxisFormatter=t.dateAxisLabelFormatter,t.dateValueFormatter=function(e,a){return t.dateString_(e,a("labelsUTC"))},t.Plotters=DygraphCanvasRenderer._Plotters,t.DEFAULT_ATTRS={highlightCircleSize:3,highlightSeriesOpts:null,highlightSeriesBackgroundAlpha:.5,labelsDivWidth:250,labelsDivStyles:{},labelsSeparateLines:!1,labelsShowZeroValues:!0,labelsKMB:!1,labelsKMG2:!1,showLabelsOnHighlight:!0,digitsAfterDecimal:2,maxNumberWidth:6,sigFigs:null,strokeWidth:1,strokeBorderWidth:0,strokeBorderColor:"white",axisTickSize:3,axisLabelFontSize:14,rightGap:5,showRoller:!1,xValueParser:t.dateParser,delimiter:",",sigma:2,errorBars:!1,fractions:!1,wilsonInterval:!0,customBars:!1,fillGraph:!1,fillAlpha:.15,connectSeparatedPoints:!1,stackedGraph:!1,stackedGraphNaNFill:"all",hideOverlayOnMouseOut:!0,legend:"onmouseover",stepPlot:!1,avoidMinZero:!1,xRangePad:0,yRangePad:null,drawAxesAtZero:!1,titleHeight:28,xLabelHeight:18,yLabelWidth:18,drawXAxis:!0,drawYAxis:!0,axisLineColor:"black",axisLineWidth:.3,gridLineWidth:.3,axisLabelColor:"black",axisLabelWidth:50,drawYGrid:!0,drawXGrid:!0,gridLineColor:"rgb(128,128,128)",interactionModel:null,animatedZooms:!1,showRangeSelector:!1,rangeSelectorHeight:40,rangeSelectorPlotStrokeColor:"#808FAB",rangeSelectorPlotFillColor:"#A7B1C4",showInRangeSelector:null,plotter:[t.Plotters.fillPlotter,t.Plotters.errorPlotter,t.Plotters.linePlotter],plugins:[],axes:{x:{pixelsPerLabel:70,axisLabelWidth:60,axisLabelFormatter:t.dateAxisLabelFormatter,valueFormatter:t.dateValueFormatter,drawGrid:!0,drawAxis:!0,independentTicks:!0,ticker:null},y:{axisLabelWidth:50,pixelsPerLabel:30,valueFormatter:t.numberValueFormatter,axisLabelFormatter:t.numberAxisLabelFormatter,drawGrid:!0,drawAxis:!0,independentTicks:!0,ticker:null},y2:{axisLabelWidth:50,pixelsPerLabel:30,valueFormatter:t.numberValueFormatter,axisLabelFormatter:t.numberAxisLabelFormatter,drawAxis:!0,drawGrid:!1,independentTicks:!1,ticker:null}}},t.HORIZONTAL=1,t.VERTICAL=2,t.PLUGINS=[],t.addedAnnotationCSS=!1,t.prototype.__old_init__=function(e,a,i,r){if(null!==i){for(var n=["Date"],o=0;o<i.length;o++)n.push(i[o]);t.update(r,{labels:n})}this.__init__(e,a,r)},t.prototype.__init__=function(e,a,i){if(/MSIE/.test(navigator.userAgent)&&!window.opera&&"undefined"!=typeof G_vmlCanvasManager&&"complete"!=document.readyState){var r=this;return void setTimeout(function(){r.__init__(e,a,i)},100)}if((null===i||void 0===i)&&(i={}),i=t.mapLegacyOptions_(i),"string"==typeof e&&(e=document.getElementById(e)),!e)return void console.error("Constructing dygraph with a non-existent div!");this.isUsingExcanvas_="undefined"!=typeof G_vmlCanvasManager,this.maindiv_=e,this.file_=a,this.rollPeriod_=i.rollPeriod||t.DEFAULT_ROLL_PERIOD,this.previousVerticalX_=-1,this.fractions_=i.fractions||!1,this.dateWindow_=i.dateWindow||null,this.annotations_=[],this.zoomed_x_=!1,this.zoomed_y_=!1,e.innerHTML="",""===e.style.width&&i.width&&(e.style.width=i.width+"px"),""===e.style.height&&i.height&&(e.style.height=i.height+"px"),""===e.style.height&&0===e.clientHeight&&(e.style.height=t.DEFAULT_HEIGHT+"px",""===e.style.width&&(e.style.width=t.DEFAULT_WIDTH+"px")),this.width_=e.clientWidth||i.width||0,this.height_=e.clientHeight||i.height||0,i.stackedGraph&&(i.fillGraph=!0),this.user_attrs_={},t.update(this.user_attrs_,i),this.attrs_={},t.updateDeep(this.attrs_,t.DEFAULT_ATTRS),this.boundaryIds_=[],this.setIndexByName_={},this.datasetIndex_=[],this.registeredEvents_=[],this.eventListeners_={},this.attributes_=new DygraphOptions(this),this.createInterface_(),this.plugins_=[];for(var n=t.PLUGINS.concat(this.getOption("plugins")),o=0;o<n.length;o++){var s,l=n[o];s="undefined"!=typeof l.activate?l:new l;var h={plugin:s,events:{},options:{},pluginOptions:{}},p=s.activate(this);for(var g in p)p.hasOwnProperty(g)&&(h.events[g]=p[g]);this.plugins_.push(h)}for(var o=0;o<this.plugins_.length;o++){var d=this.plugins_[o];for(var g in d.events)if(d.events.hasOwnProperty(g)){var u=d.events[g],c=[d.plugin,u];g in this.eventListeners_?this.eventListeners_[g].push(c):this.eventListeners_[g]=[c]}}this.createDragInterface_(),this.start_()},t.prototype.cascadeEvents_=function(e,a){if(!(e in this.eventListeners_))return!1;var i={dygraph:this,cancelable:!1,defaultPrevented:!1,preventDefault:function(){if(!i.cancelable)throw"Cannot call preventDefault on non-cancelable event.";i.defaultPrevented=!0},propagationStopped:!1,stopPropagation:function(){i.propagationStopped=!0}};t.update(i,a);var r=this.eventListeners_[e];if(r)for(var n=r.length-1;n>=0;n--){var o=r[n][0],s=r[n][1];if(s.call(o,i),i.propagationStopped)break}return i.defaultPrevented},t.prototype.getPluginInstance_=function(t){for(var e=0;e<this.plugins_.length;e++){var a=this.plugins_[e];if(a.plugin instanceof t)return a.plugin}return null},t.prototype.isZoomed=function(t){if(null===t||void 0===t)return this.zoomed_x_||this.zoomed_y_;if("x"===t)return this.zoomed_x_;if("y"===t)return this.zoomed_y_;throw"axis parameter is ["+t+"] must be null, 'x' or 'y'."},t.prototype.toString=function(){var t=this.maindiv_,e=t&&t.id?t.id:t;return"[Dygraph "+e+"]"},t.prototype.attr_=function(t,e){return e?this.attributes_.getForSeries(t,e):this.attributes_.get(t)},t.prototype.getOption=function(t,e){return this.attr_(t,e)},t.prototype.getNumericOption=function(t,e){return this.getOption(t,e)},t.prototype.getStringOption=function(t,e){return this.getOption(t,e)},t.prototype.getBooleanOption=function(t,e){return this.getOption(t,e)},t.prototype.getFunctionOption=function(t,e){return this.getOption(t,e)},t.prototype.getOptionForAxis=function(t,e){return this.attributes_.getForAxis(t,e)},t.prototype.optionsViewForAxis_=function(t){var e=this;return function(a){var i=e.user_attrs_.axes;return i&&i[t]&&i[t].hasOwnProperty(a)?i[t][a]:"x"===t&&"logscale"===a?!1:"undefined"!=typeof e.user_attrs_[a]?e.user_attrs_[a]:(i=e.attrs_.axes,i&&i[t]&&i[t].hasOwnProperty(a)?i[t][a]:"y"==t&&e.axes_[0].hasOwnProperty(a)?e.axes_[0][a]:"y2"==t&&e.axes_[1].hasOwnProperty(a)?e.axes_[1][a]:e.attr_(a))}},t.prototype.rollPeriod=function(){return this.rollPeriod_},t.prototype.xAxisRange=function(){return this.dateWindow_?this.dateWindow_:this.xAxisExtremes()},t.prototype.xAxisExtremes=function(){var t=this.getNumericOption("xRangePad")/this.plotter_.area.w;if(0===this.numRows())return[0-t,1+t];var e=this.rawData_[0][0],a=this.rawData_[this.rawData_.length-1][0];if(t){var i=a-e;e-=i*t,a+=i*t}return[e,a]},t.prototype.yAxisRange=function(t){if("undefined"==typeof t&&(t=0),0>t||t>=this.axes_.length)return null;var e=this.axes_[t];return[e.computedValueRange[0],e.computedValueRange[1]]},t.prototype.yAxisRanges=function(){for(var t=[],e=0;e<this.axes_.length;e++)t.push(this.yAxisRange(e));return t},t.prototype.toDomCoords=function(t,e,a){return[this.toDomXCoord(t),this.toDomYCoord(e,a)]},t.prototype.toDomXCoord=function(t){if(null===t)return null;var e=this.plotter_.area,a=this.xAxisRange();return e.x+(t-a[0])/(a[1]-a[0])*e.w},t.prototype.toDomYCoord=function(t,e){var a=this.toPercentYCoord(t,e);if(null===a)return null;var i=this.plotter_.area;return i.y+a*i.h},t.prototype.toDataCoords=function(t,e,a){return[this.toDataXCoord(t),this.toDataYCoord(e,a)]},t.prototype.toDataXCoord=function(e){if(null===e)return null;var a=this.plotter_.area,i=this.xAxisRange();if(this.attributes_.getForAxis("logscale","x")){var r=(e-a.x)/a.w,n=t.log10(i[0]),o=t.log10(i[1]),s=n+r*(o-n),l=Math.pow(t.LOG_SCALE,s);return l}return i[0]+(e-a.x)/a.w*(i[1]-i[0])},t.prototype.toDataYCoord=function(e,a){if(null===e)return null;var i=this.plotter_.area,r=this.yAxisRange(a);if("undefined"==typeof a&&(a=0),this.attributes_.getForAxis("logscale",a)){var n=(e-i.y)/i.h,o=t.log10(r[0]),s=t.log10(r[1]),l=s-n*(s-o),h=Math.pow(t.LOG_SCALE,l);return h}return r[0]+(i.y+i.h-e)/i.h*(r[1]-r[0])},t.prototype.toPercentYCoord=function(e,a){if(null===e)return null;"undefined"==typeof a&&(a=0);var i,r=this.yAxisRange(a),n=this.attributes_.getForAxis("logscale",a);if(n){var o=t.log10(r[0]),s=t.log10(r[1]);i=(s-t.log10(e))/(s-o)}else i=(r[1]-e)/(r[1]-r[0]);return i},t.prototype.toPercentXCoord=function(e){if(null===e)return null;var a,i=this.xAxisRange(),r=this.attributes_.getForAxis("logscale","x");if(r===!0){var n=t.log10(i[0]),o=t.log10(i[1]);a=(t.log10(e)-n)/(o-n)}else a=(e-i[0])/(i[1]-i[0]);return a},t.prototype.numColumns=function(){return this.rawData_?this.rawData_[0]?this.rawData_[0].length:this.attr_("labels").length:0},t.prototype.numRows=function(){return this.rawData_?this.rawData_.length:0},t.prototype.getValue=function(t,e){return 0>t||t>this.rawData_.length?null:0>e||e>this.rawData_[t].length?null:this.rawData_[t][e]},t.prototype.createInterface_=function(){var e=this.maindiv_;this.graphDiv=document.createElement("div"),this.graphDiv.style.textAlign="left",this.graphDiv.style.position="relative",e.appendChild(this.graphDiv),this.canvas_=t.createCanvas(),this.canvas_.style.position="absolute",this.hidden_=this.createPlotKitCanvas_(this.canvas_),this.canvas_ctx_=t.getContext(this.canvas_),this.hidden_ctx_=t.getContext(this.hidden_),this.resizeElements_(),this.graphDiv.appendChild(this.hidden_),this.graphDiv.appendChild(this.canvas_),this.mouseEventElement_=this.createMouseEventElement_(),this.layout_=new DygraphLayout(this);var a=this;this.mouseMoveHandler_=function(t){a.mouseMove_(t)},this.mouseOutHandler_=function(e){var i=e.target||e.fromElement,r=e.relatedTarget||e.toElement;t.isNodeContainedBy(i,a.graphDiv)&&!t.isNodeContainedBy(r,a.graphDiv)&&a.mouseOut_(e)},this.addAndTrackEvent(window,"mouseout",this.mouseOutHandler_),this.addAndTrackEvent(this.mouseEventElement_,"mousemove",this.mouseMoveHandler_),this.resizeHandler_||(this.resizeHandler_=function(t){a.resize()},this.addAndTrackEvent(window,"resize",this.resizeHandler_))},t.prototype.resizeElements_=function(){this.graphDiv.style.width=this.width_+"px",this.graphDiv.style.height=this.height_+"px";var e=t.getContextPixelRatio(this.canvas_ctx_);this.canvas_.width=this.width_*e,this.canvas_.height=this.height_*e,this.canvas_.style.width=this.width_+"px",this.canvas_.style.height=this.height_+"px",1!==e&&this.canvas_ctx_.scale(e,e);var a=t.getContextPixelRatio(this.hidden_ctx_);this.hidden_.width=this.width_*a,this.hidden_.height=this.height_*a,this.hidden_.style.width=this.width_+"px",this.hidden_.style.height=this.height_+"px",1!==a&&this.hidden_ctx_.scale(a,a)},t.prototype.destroy=function(){this.canvas_ctx_.restore(),this.hidden_ctx_.restore();for(var e=this.plugins_.length-1;e>=0;e--){var a=this.plugins_.pop();a.plugin.destroy&&a.plugin.destroy()}var i=function(t){for(;t.hasChildNodes();)i(t.firstChild),t.removeChild(t.firstChild)};this.removeTrackedEvents_(),t.removeEvent(window,"mouseout",this.mouseOutHandler_),t.removeEvent(this.mouseEventElement_,"mousemove",this.mouseMoveHandler_),t.removeEvent(window,"resize",this.resizeHandler_),this.resizeHandler_=null,i(this.maindiv_);var r=function(t){for(var e in t)"object"==typeof t[e]&&(t[e]=null)};r(this.layout_),r(this.plotter_),r(this)},t.prototype.createPlotKitCanvas_=function(e){var a=t.createCanvas();return a.style.position="absolute",a.style.top=e.style.top,a.style.left=e.style.left,a.width=this.width_,a.height=this.height_,a.style.width=this.width_+"px",a.style.height=this.height_+"px",a},t.prototype.createMouseEventElement_=function(){if(this.isUsingExcanvas_){var t=document.createElement("div");return t.style.position="absolute",t.style.backgroundColor="white",t.style.filter="alpha(opacity=0)",t.style.width=this.width_+"px",t.style.height=this.height_+"px",this.graphDiv.appendChild(t),t}return this.canvas_},t.prototype.setColors_=function(){var e=this.getLabels(),a=e.length-1;this.colors_=[],this.colorsMap_={};for(var i=this.getNumericOption("colorSaturation")||1,r=this.getNumericOption("colorValue")||.5,n=Math.ceil(a/2),o=this.getOption("colors"),s=this.visibility(),l=0;a>l;l++)if(s[l]){
    var h=e[l+1],p=this.attributes_.getForSeries("color",h);if(!p)if(o)p=o[l%o.length];else{var g=l%2?n+(l+1)/2:Math.ceil((l+1)/2),d=1*g/(1+a);p=t.hsvToRGB(d,i,r)}this.colors_.push(p),this.colorsMap_[h]=p}},t.prototype.getColors=function(){return this.colors_},t.prototype.getPropertiesForSeries=function(t){for(var e=-1,a=this.getLabels(),i=1;i<a.length;i++)if(a[i]==t){e=i;break}return-1==e?null:{name:t,column:e,visible:this.visibility()[e-1],color:this.colorsMap_[t],axis:1+this.attributes_.axisForSeries(t)}},t.prototype.createRollInterface_=function(){this.roller_||(this.roller_=document.createElement("input"),this.roller_.type="text",this.roller_.style.display="none",this.graphDiv.appendChild(this.roller_));var t=this.getBooleanOption("showRoller")?"block":"none",e=this.plotter_.area,a={position:"absolute",zIndex:10,top:e.y+e.h-25+"px",left:e.x+1+"px",display:t};this.roller_.size="2",this.roller_.value=this.rollPeriod_;for(var i in a)a.hasOwnProperty(i)&&(this.roller_.style[i]=a[i]);var r=this;this.roller_.onchange=function(){r.adjustRoll(r.roller_.value)}},t.prototype.createDragInterface_=function(){var e={isZooming:!1,isPanning:!1,is2DPan:!1,dragStartX:null,dragStartY:null,dragEndX:null,dragEndY:null,dragDirection:null,prevEndX:null,prevEndY:null,prevDragDirection:null,cancelNextDblclick:!1,initialLeftmostDate:null,xUnitsPerPixel:null,dateRange:null,px:0,py:0,boundedDates:null,boundedValues:null,tarp:new t.IFrameTarp,initializeMouseDown:function(e,a,i){e.preventDefault?e.preventDefault():(e.returnValue=!1,e.cancelBubble=!0);var r=t.findPos(a.canvas_);i.px=r.x,i.py=r.y,i.dragStartX=t.dragGetX_(e,i),i.dragStartY=t.dragGetY_(e,i),i.cancelNextDblclick=!1,i.tarp.cover()},destroy:function(){var t=this;if((t.isZooming||t.isPanning)&&(t.isZooming=!1,t.dragStartX=null,t.dragStartY=null),t.isPanning){t.isPanning=!1,t.draggingDate=null,t.dateRange=null;for(var e=0;e<i.axes_.length;e++)delete i.axes_[e].draggingValue,delete i.axes_[e].dragValueRange}t.tarp.uncover()}},a=this.getOption("interactionModel"),i=this,r=function(t){return function(a){t(a,i,e)}};for(var n in a)a.hasOwnProperty(n)&&this.addAndTrackEvent(this.mouseEventElement_,n,r(a[n]));if(!a.willDestroyContextMyself){var o=function(t){e.destroy()};this.addAndTrackEvent(document,"mouseup",o)}},t.prototype.drawZoomRect_=function(e,a,i,r,n,o,s,l){var h=this.canvas_ctx_;o==t.HORIZONTAL?h.clearRect(Math.min(a,s),this.layout_.getPlotArea().y,Math.abs(a-s),this.layout_.getPlotArea().h):o==t.VERTICAL&&h.clearRect(this.layout_.getPlotArea().x,Math.min(r,l),this.layout_.getPlotArea().w,Math.abs(r-l)),e==t.HORIZONTAL?i&&a&&(h.fillStyle="rgba(128,128,128,0.33)",h.fillRect(Math.min(a,i),this.layout_.getPlotArea().y,Math.abs(i-a),this.layout_.getPlotArea().h)):e==t.VERTICAL&&n&&r&&(h.fillStyle="rgba(128,128,128,0.33)",h.fillRect(this.layout_.getPlotArea().x,Math.min(r,n),this.layout_.getPlotArea().w,Math.abs(n-r))),this.isUsingExcanvas_&&(this.currentZoomRectArgs_=[e,a,i,r,n,0,0,0])},t.prototype.clearZoomRect_=function(){this.currentZoomRectArgs_=null,this.canvas_ctx_.clearRect(0,0,this.width_,this.height_)},t.prototype.doZoomX_=function(t,e){this.currentZoomRectArgs_=null;var a=this.toDataXCoord(t),i=this.toDataXCoord(e);this.doZoomXDates_(a,i)},t.prototype.doZoomXDates_=function(t,e){var a=this.xAxisRange(),i=[t,e];this.zoomed_x_=!0;var r=this;this.doAnimatedZoom(a,i,null,null,function(){r.getFunctionOption("zoomCallback")&&r.getFunctionOption("zoomCallback").call(r,t,e,r.yAxisRanges())})},t.prototype.doZoomY_=function(t,e){this.currentZoomRectArgs_=null;for(var a=this.yAxisRanges(),i=[],r=0;r<this.axes_.length;r++){var n=this.toDataYCoord(t,r),o=this.toDataYCoord(e,r);i.push([o,n])}this.zoomed_y_=!0;var s=this;this.doAnimatedZoom(null,null,a,i,function(){if(s.getFunctionOption("zoomCallback")){var t=s.xAxisRange();s.getFunctionOption("zoomCallback").call(s,t[0],t[1],s.yAxisRanges())}})},t.zoomAnimationFunction=function(t,e){var a=1.5;return(1-Math.pow(a,-t))/(1-Math.pow(a,-e))},t.prototype.resetZoom=function(){var t=!1,e=!1,a=!1;null!==this.dateWindow_&&(t=!0,e=!0);for(var i=0;i<this.axes_.length;i++)"undefined"!=typeof this.axes_[i].valueWindow&&null!==this.axes_[i].valueWindow&&(t=!0,a=!0);if(this.clearSelection(),t){this.zoomed_x_=!1,this.zoomed_y_=!1;var r=this.rawData_[0][0],n=this.rawData_[this.rawData_.length-1][0];if(!this.getBooleanOption("animatedZooms")){for(this.dateWindow_=null,i=0;i<this.axes_.length;i++)null!==this.axes_[i].valueWindow&&delete this.axes_[i].valueWindow;return this.drawGraph_(),void(this.getFunctionOption("zoomCallback")&&this.getFunctionOption("zoomCallback").call(this,r,n,this.yAxisRanges()))}var o=null,s=null,l=null,h=null;if(e&&(o=this.xAxisRange(),s=[r,n]),a){l=this.yAxisRanges();var p=this.gatherDatasets_(this.rolledSeries_,null),g=p.extremes;for(this.computeYAxisRanges_(g),h=[],i=0;i<this.axes_.length;i++){var d=this.axes_[i];h.push(null!==d.valueRange&&void 0!==d.valueRange?d.valueRange:d.extremeRange)}}var u=this;this.doAnimatedZoom(o,s,l,h,function(){u.dateWindow_=null;for(var t=0;t<u.axes_.length;t++)null!==u.axes_[t].valueWindow&&delete u.axes_[t].valueWindow;u.getFunctionOption("zoomCallback")&&u.getFunctionOption("zoomCallback").call(u,r,n,u.yAxisRanges())})}},t.prototype.doAnimatedZoom=function(e,a,i,r,n){var o,s,l=this.getBooleanOption("animatedZooms")?t.ANIMATION_STEPS:1,h=[],p=[];if(null!==e&&null!==a)for(o=1;l>=o;o++)s=t.zoomAnimationFunction(o,l),h[o-1]=[e[0]*(1-s)+s*a[0],e[1]*(1-s)+s*a[1]];if(null!==i&&null!==r)for(o=1;l>=o;o++){s=t.zoomAnimationFunction(o,l);for(var g=[],d=0;d<this.axes_.length;d++)g.push([i[d][0]*(1-s)+s*r[d][0],i[d][1]*(1-s)+s*r[d][1]]);p[o-1]=g}var u=this;t.repeatAndCleanup(function(t){if(p.length)for(var e=0;e<u.axes_.length;e++){var a=p[t][e];u.axes_[e].valueWindow=[a[0],a[1]]}h.length&&(u.dateWindow_=h[t]),u.drawGraph_()},l,t.ANIMATION_DURATION/l,n)},t.prototype.getArea=function(){return this.plotter_.area},t.prototype.eventToDomCoords=function(e){if(e.offsetX&&e.offsetY)return[e.offsetX,e.offsetY];var a=t.findPos(this.mouseEventElement_),i=t.pageX(e)-a.x,r=t.pageY(e)-a.y;return[i,r]},t.prototype.findClosestRow=function(e){for(var a=1/0,i=-1,r=this.layout_.points,n=0;n<r.length;n++)for(var o=r[n],s=o.length,l=0;s>l;l++){var h=o[l];if(t.isValidPoint(h,!0)){var p=Math.abs(h.canvasx-e);a>p&&(a=p,i=h.idx)}}return i},t.prototype.findClosestPoint=function(e,a){for(var i,r,n,o,s,l,h,p=1/0,g=this.layout_.points.length-1;g>=0;--g)for(var d=this.layout_.points[g],u=0;u<d.length;++u)o=d[u],t.isValidPoint(o)&&(r=o.canvasx-e,n=o.canvasy-a,i=r*r+n*n,p>i&&(p=i,s=o,l=g,h=o.idx));var c=this.layout_.setNames[l];return{row:h,seriesName:c,point:s}},t.prototype.findStackedPoint=function(e,a){for(var i,r,n=this.findClosestRow(e),o=0;o<this.layout_.points.length;++o){var s=this.getLeftBoundary_(o),l=n-s,h=this.layout_.points[o];if(!(l>=h.length)){var p=h[l];if(t.isValidPoint(p)){var g=p.canvasy;if(e>p.canvasx&&l+1<h.length){var d=h[l+1];if(t.isValidPoint(d)){var u=d.canvasx-p.canvasx;if(u>0){var c=(e-p.canvasx)/u;g+=c*(d.canvasy-p.canvasy)}}}else if(e<p.canvasx&&l>0){var y=h[l-1];if(t.isValidPoint(y)){var u=p.canvasx-y.canvasx;if(u>0){var c=(p.canvasx-e)/u;g+=c*(y.canvasy-p.canvasy)}}}(0===o||a>g)&&(i=p,r=o)}}}var _=this.layout_.setNames[r];return{row:n,seriesName:_,point:i}},t.prototype.mouseMove_=function(t){var e=this.layout_.points;if(void 0!==e&&null!==e){var a=this.eventToDomCoords(t),i=a[0],r=a[1],n=this.getOption("highlightSeriesOpts"),o=!1;if(n&&!this.isSeriesLocked()){var s;s=this.getBooleanOption("stackedGraph")?this.findStackedPoint(i,r):this.findClosestPoint(i,r),o=this.setSelection(s.row,s.seriesName)}else{var l=this.findClosestRow(i);o=this.setSelection(l)}var h=this.getFunctionOption("highlightCallback");h&&o&&h.call(this,t,this.lastx_,this.selPoints_,this.lastRow_,this.highlightSet_)}},t.prototype.getLeftBoundary_=function(t){if(this.boundaryIds_[t])return this.boundaryIds_[t][0];for(var e=0;e<this.boundaryIds_.length;e++)if(void 0!==this.boundaryIds_[e])return this.boundaryIds_[e][0];return 0},t.prototype.animateSelection_=function(e){var a=10,i=30;void 0===this.fadeLevel&&(this.fadeLevel=0),void 0===this.animateId&&(this.animateId=0);var r=this.fadeLevel,n=0>e?r:a-r;if(0>=n)return void(this.fadeLevel&&this.updateSelection_(1));var o=++this.animateId,s=this;t.repeatAndCleanup(function(t){s.animateId==o&&(s.fadeLevel+=e,0===s.fadeLevel?s.clearSelection():s.updateSelection_(s.fadeLevel/a))},n,i,function(){})},t.prototype.updateSelection_=function(e){this.cascadeEvents_("select",{selectedRow:this.lastRow_,selectedX:this.lastx_,selectedPoints:this.selPoints_});var a,i=this.canvas_ctx_;if(this.getOption("highlightSeriesOpts")){i.clearRect(0,0,this.width_,this.height_);var r=1-this.getNumericOption("highlightSeriesBackgroundAlpha");if(r){var n=!0;if(n){if(void 0===e)return void this.animateSelection_(1);r*=e}i.fillStyle="rgba(255,255,255,"+r+")",i.fillRect(0,0,this.width_,this.height_)}this.plotter_._renderLineChart(this.highlightSet_,i)}else if(this.previousVerticalX_>=0){var o=0,s=this.attr_("labels");for(a=1;a<s.length;a++){var l=this.getNumericOption("highlightCircleSize",s[a]);l>o&&(o=l)}var h=this.previousVerticalX_;i.clearRect(h-o-1,0,2*o+2,this.height_)}if(this.isUsingExcanvas_&&this.currentZoomRectArgs_&&t.prototype.drawZoomRect_.apply(this,this.currentZoomRectArgs_),this.selPoints_.length>0){var p=this.selPoints_[0].canvasx;for(i.save(),a=0;a<this.selPoints_.length;a++){var g=this.selPoints_[a];if(t.isOK(g.canvasy)){var d=this.getNumericOption("highlightCircleSize",g.name),u=this.getFunctionOption("drawHighlightPointCallback",g.name),c=this.plotter_.colors[g.name];u||(u=t.Circles.DEFAULT),i.lineWidth=this.getNumericOption("strokeWidth",g.name),i.strokeStyle=c,i.fillStyle=c,u.call(this,this,g.name,i,p,g.canvasy,c,d,g.idx)}}i.restore(),this.previousVerticalX_=p}},t.prototype.setSelection=function(t,e,a){this.selPoints_=[];var i=!1;if(t!==!1&&t>=0){t!=this.lastRow_&&(i=!0),this.lastRow_=t;for(var r=0;r<this.layout_.points.length;++r){var n=this.layout_.points[r],o=t-this.getLeftBoundary_(r);if(o<n.length&&n[o].idx==t){var s=n[o];null!==s.yval&&this.selPoints_.push(s)}else for(var l=0;l<n.length;++l){var s=n[l];if(s.idx==t){null!==s.yval&&this.selPoints_.push(s);break}}}}else this.lastRow_>=0&&(i=!0),this.lastRow_=-1;return this.selPoints_.length?this.lastx_=this.selPoints_[0].xval:this.lastx_=-1,void 0!==e&&(this.highlightSet_!==e&&(i=!0),this.highlightSet_=e),void 0!==a&&(this.lockedSet_=a),i&&this.updateSelection_(void 0),i},t.prototype.mouseOut_=function(t){this.getFunctionOption("unhighlightCallback")&&this.getFunctionOption("unhighlightCallback").call(this,t),this.getBooleanOption("hideOverlayOnMouseOut")&&!this.lockedSet_&&this.clearSelection()},t.prototype.clearSelection=function(){return this.cascadeEvents_("deselect",{}),this.lockedSet_=!1,this.fadeLevel?void this.animateSelection_(-1):(this.canvas_ctx_.clearRect(0,0,this.width_,this.height_),this.fadeLevel=0,this.selPoints_=[],this.lastx_=-1,this.lastRow_=-1,void(this.highlightSet_=null))},t.prototype.getSelection=function(){if(!this.selPoints_||this.selPoints_.length<1)return-1;for(var t=0;t<this.layout_.points.length;t++)for(var e=this.layout_.points[t],a=0;a<e.length;a++)if(e[a].x==this.selPoints_[0].x)return e[a].idx;return-1},t.prototype.getHighlightSeries=function(){return this.highlightSet_},t.prototype.isSeriesLocked=function(){return this.lockedSet_},t.prototype.loadedEvent_=function(t){this.rawData_=this.parseCSV_(t),this.cascadeDataDidUpdateEvent_(),this.predraw_()},t.prototype.addXTicks_=function(){var t;t=this.dateWindow_?[this.dateWindow_[0],this.dateWindow_[1]]:this.xAxisExtremes();var e=this.optionsViewForAxis_("x"),a=e("ticker")(t[0],t[1],this.plotter_.area.w,e,this);this.layout_.setXTicks(a)},t.prototype.getHandlerClass_=function(){var e;return e=this.attr_("dataHandler")?this.attr_("dataHandler"):this.fractions_?this.getBooleanOption("errorBars")?t.DataHandlers.FractionsBarsHandler:t.DataHandlers.DefaultFractionHandler:this.getBooleanOption("customBars")?t.DataHandlers.CustomBarsHandler:this.getBooleanOption("errorBars")?t.DataHandlers.ErrorBarsHandler:t.DataHandlers.DefaultHandler},t.prototype.predraw_=function(){var t=new Date;this.dataHandler_=new(this.getHandlerClass_()),this.layout_.computePlotArea(),this.computeYAxes_(),this.is_initial_draw_||(this.canvas_ctx_.restore(),this.hidden_ctx_.restore()),this.canvas_ctx_.save(),this.hidden_ctx_.save(),this.plotter_=new DygraphCanvasRenderer(this,this.hidden_,this.hidden_ctx_,this.layout_),this.createRollInterface_(),this.cascadeEvents_("predraw"),this.rolledSeries_=[null];for(var e=1;e<this.numColumns();e++){var a=this.dataHandler_.extractSeries(this.rawData_,e,this.attributes_);this.rollPeriod_>1&&(a=this.dataHandler_.rollingAverage(a,this.rollPeriod_,this.attributes_)),this.rolledSeries_.push(a)}this.drawGraph_();var i=new Date;this.drawingTimeMs_=i-t},t.PointType=void 0,t.stackPoints_=function(t,e,a,i){for(var r=null,n=null,o=null,s=-1,l=function(e){if(!(s>=e))for(var a=e;a<t.length;++a)if(o=null,!isNaN(t[a].yval)&&null!==t[a].yval){s=a,o=t[a];break}},h=0;h<t.length;++h){var p=t[h],g=p.xval;void 0===e[g]&&(e[g]=0);var d=p.yval;isNaN(d)||null===d?"none"==i?d=0:(l(h),d=n&&o&&"none"!=i?n.yval+(o.yval-n.yval)*((g-n.xval)/(o.xval-n.xval)):n&&"all"==i?n.yval:o&&"all"==i?o.yval:0):n=p;var u=e[g];r!=g&&(u+=d,e[g]=u),r=g,p.yval_stacked=u,u>a[1]&&(a[1]=u),u<a[0]&&(a[0]=u)}},t.prototype.gatherDatasets_=function(e,a){var i,r,n,o,s,l,h=[],p=[],g=[],d={},u=e.length-1;for(i=u;i>=1;i--)if(this.visibility()[i-1]){if(a){l=e[i];var c=a[0],y=a[1];for(n=null,o=null,r=0;r<l.length;r++)l[r][0]>=c&&null===n&&(n=r),l[r][0]<=y&&(o=r);null===n&&(n=0);for(var _=n,v=!0;v&&_>0;)_--,v=null===l[_][1];null===o&&(o=l.length-1);var f=o;for(v=!0;v&&f<l.length-1;)f++,v=null===l[f][1];_!==n&&(n=_),f!==o&&(o=f),h[i-1]=[n,o],l=l.slice(n,o+1)}else l=e[i],h[i-1]=[0,l.length-1];var x=this.attr_("labels")[i],m=this.dataHandler_.getExtremeYValues(l,a,this.getBooleanOption("stepPlot",x)),D=this.dataHandler_.seriesToPoints(l,x,h[i-1][0]);this.getBooleanOption("stackedGraph")&&(s=this.attributes_.axisForSeries(x),void 0===g[s]&&(g[s]=[]),t.stackPoints_(D,g[s],m,this.getBooleanOption("stackedGraphNaNFill"))),d[x]=m,p[i]=D}return{points:p,extremes:d,boundaryIds:h}},t.prototype.drawGraph_=function(){var t=new Date,e=this.is_initial_draw_;this.is_initial_draw_=!1,this.layout_.removeAllDatasets(),this.setColors_(),this.attrs_.pointSize=.5*this.getNumericOption("highlightCircleSize");var a=this.gatherDatasets_(this.rolledSeries_,this.dateWindow_),i=a.points,r=a.extremes;this.boundaryIds_=a.boundaryIds,this.setIndexByName_={};var n=this.attr_("labels");n.length>0&&(this.setIndexByName_[n[0]]=0);for(var o=0,s=1;s<i.length;s++)this.setIndexByName_[n[s]]=s,this.visibility()[s-1]&&(this.layout_.addDataset(n[s],i[s]),this.datasetIndex_[s]=o++);this.computeYAxisRanges_(r),this.layout_.setYAxes(this.axes_),this.addXTicks_();var l=this.zoomed_x_;if(this.zoomed_x_=l,this.layout_.evaluate(),this.renderGraph_(e),this.getStringOption("timingName")){var h=new Date;console.log(this.getStringOption("timingName")+" - drawGraph: "+(h-t)+"ms")}},t.prototype.renderGraph_=function(t){this.cascadeEvents_("clearChart"),this.plotter_.clear(),this.getFunctionOption("underlayCallback")&&this.getFunctionOption("underlayCallback").call(this,this.hidden_ctx_,this.layout_.getPlotArea(),this,this);var e={canvas:this.hidden_,drawingContext:this.hidden_ctx_};if(this.cascadeEvents_("willDrawChart",e),this.plotter_.render(),this.cascadeEvents_("didDrawChart",e),this.lastRow_=-1,this.canvas_.getContext("2d").clearRect(0,0,this.width_,this.height_),null!==this.getFunctionOption("drawCallback")&&this.getFunctionOption("drawCallback").call(this,this,t),t)for(this.readyFired_=!0;this.readyFns_.length>0;){var a=this.readyFns_.pop();a(this)}},t.prototype.computeYAxes_=function(){var e,a,i,r,n;if(void 0!==this.axes_&&this.user_attrs_.hasOwnProperty("valueRange")===!1)for(e=[],i=0;i<this.axes_.length;i++)e.push(this.axes_[i].valueWindow);for(this.axes_=[],a=0;a<this.attributes_.numAxes();a++)r={g:this},t.update(r,this.attributes_.axisOptions(a)),this.axes_[a]=r;if(n=this.attr_("valueRange"),n&&(this.axes_[0].valueRange=n),void 0!==e){var o=Math.min(e.length,this.axes_.length);for(i=0;o>i;i++)this.axes_[i].valueWindow=e[i]}for(a=0;a<this.axes_.length;a++)if(0===a)r=this.optionsViewForAxis_("y"+(a?"2":"")),n=r("valueRange"),n&&(this.axes_[a].valueRange=n);else{var s=this.user_attrs_.axes;s&&s.y2&&(n=s.y2.valueRange,n&&(this.axes_[a].valueRange=n))}},t.prototype.numAxes=function(){return this.attributes_.numAxes()},t.prototype.axisPropertiesForSeries=function(t){return this.axes_[this.attributes_.axisForSeries(t)]},t.prototype.computeYAxisRanges_=function(t){for(var e,a,i,r,n,o=function(t){return isNaN(parseFloat(t))},s=this.attributes_.numAxes(),l=0;s>l;l++){var h=this.axes_[l],p=this.attributes_.getForAxis("logscale",l),g=this.attributes_.getForAxis("includeZero",l),d=this.attributes_.getForAxis("independentTicks",l);if(i=this.attributes_.seriesForAxis(l),e=!0,r=.1,null!==this.getNumericOption("yRangePad")&&(e=!1,r=this.getNumericOption("yRangePad")/this.plotter_.area.h),0===i.length)h.extremeRange=[0,1];else{for(var u,c,y=1/0,_=-(1/0),v=0;v<i.length;v++)t.hasOwnProperty(i[v])&&(u=t[i[v]][0],null!==u&&(y=Math.min(u,y)),c=t[i[v]][1],null!==c&&(_=Math.max(c,_)));g&&!p&&(y>0&&(y=0),0>_&&(_=0)),y==1/0&&(y=0),_==-(1/0)&&(_=1),a=_-y,0===a&&(0!==_?a=Math.abs(_):(_=1,a=1));var f,x;if(p)if(e)f=_+r*a,x=y;else{var m=Math.exp(Math.log(a)*r);f=_*m,x=y/m}else f=_+r*a,x=y-r*a,e&&!this.getBooleanOption("avoidMinZero")&&(0>x&&y>=0&&(x=0),f>0&&0>=_&&(f=0));h.extremeRange=[x,f]}if(h.valueWindow)h.computedValueRange=[h.valueWindow[0],h.valueWindow[1]];else if(h.valueRange){var D=o(h.valueRange[0])?h.extremeRange[0]:h.valueRange[0],w=o(h.valueRange[1])?h.extremeRange[1]:h.valueRange[1];if(!e)if(h.logscale){var m=Math.exp(Math.log(a)*r);D*=m,w/=m}else a=w-D,D-=a*r,w+=a*r;h.computedValueRange=[D,w]}else h.computedValueRange=h.extremeRange;if(d){h.independentTicks=d;var A=this.optionsViewForAxis_("y"+(l?"2":"")),b=A("ticker");h.ticks=b(h.computedValueRange[0],h.computedValueRange[1],this.plotter_.area.h,A,this),n||(n=h)}}if(void 0===n)throw'Configuration Error: At least one axis has to have the "independentTicks" option activated.';for(var l=0;s>l;l++){var h=this.axes_[l];if(!h.independentTicks){for(var A=this.optionsViewForAxis_("y"+(l?"2":"")),b=A("ticker"),T=n.ticks,E=n.computedValueRange[1]-n.computedValueRange[0],C=h.computedValueRange[1]-h.computedValueRange[0],L=[],P=0;P<T.length;P++){var S=(T[P].v-n.computedValueRange[0])/E,O=h.computedValueRange[0]+S*C;L.push(O)}h.ticks=b(h.computedValueRange[0],h.computedValueRange[1],this.plotter_.area.h,A,this,L)}}},t.prototype.detectTypeFromString_=function(t){var e=!1,a=t.indexOf("-");a>0&&"e"!=t[a-1]&&"E"!=t[a-1]||t.indexOf("/")>=0||isNaN(parseFloat(t))?e=!0:8==t.length&&t>"19700101"&&"20371231">t&&(e=!0),this.setXAxisOptions_(e)},t.prototype.setXAxisOptions_=function(e){e?(this.attrs_.xValueParser=t.dateParser,this.attrs_.axes.x.valueFormatter=t.dateValueFormatter,this.attrs_.axes.x.ticker=t.dateTicker,this.attrs_.axes.x.axisLabelFormatter=t.dateAxisLabelFormatter):(this.attrs_.xValueParser=function(t){return parseFloat(t)},this.attrs_.axes.x.valueFormatter=function(t){return t},this.attrs_.axes.x.ticker=t.numericTicks,this.attrs_.axes.x.axisLabelFormatter=this.attrs_.axes.x.valueFormatter)},t.prototype.parseCSV_=function(e){var a,i,r=[],n=t.detectLineDelimiter(e),o=e.split(n||"\n"),s=this.getStringOption("delimiter");-1==o[0].indexOf(s)&&o[0].indexOf("	")>=0&&(s="	");var l=0;"labels"in this.user_attrs_||(l=1,this.attrs_.labels=o[0].split(s),this.attributes_.reparseSeries());for(var h,p=0,g=!1,d=this.attr_("labels").length,u=!1,c=l;c<o.length;c++){var y=o[c];if(p=c,0!==y.length&&"#"!=y[0]){var _=y.split(s);if(!(_.length<2)){var v=[];if(g||(this.detectTypeFromString_(_[0]),h=this.getFunctionOption("xValueParser"),g=!0),v[0]=h(_[0],this),this.fractions_)for(i=1;i<_.length;i++)a=_[i].split("/"),2!=a.length?(console.error('Expected fractional "num/den" values in CSV data but found a value \''+_[i]+"' on line "+(1+c)+" ('"+y+"') which is not of this form."),v[i]=[0,0]):v[i]=[t.parseFloat_(a[0],c,y),t.parseFloat_(a[1],c,y)];else if(this.getBooleanOption("errorBars"))for(_.length%2!=1&&console.error("Expected alternating (value, stdev.) pairs in CSV data but line "+(1+c)+" has an odd number of values ("+(_.length-1)+"): '"+y+"'"),i=1;i<_.length;i+=2)v[(i+1)/2]=[t.parseFloat_(_[i],c,y),t.parseFloat_(_[i+1],c,y)];else if(this.getBooleanOption("customBars"))for(i=1;i<_.length;i++){var f=_[i];/^ *$/.test(f)?v[i]=[null,null,null]:(a=f.split(";"),3==a.length?v[i]=[t.parseFloat_(a[0],c,y),t.parseFloat_(a[1],c,y),t.parseFloat_(a[2],c,y)]:console.warn('When using customBars, values must be either blank or "low;center;high" tuples (got "'+f+'" on line '+(1+c)))}else for(i=1;i<_.length;i++)v[i]=t.parseFloat_(_[i],c,y);if(r.length>0&&v[0]<r[r.length-1][0]&&(u=!0),v.length!=d&&console.error("Number of columns in line "+c+" ("+v.length+") does not agree with number of labels ("+d+") "+y),0===c&&this.attr_("labels")){var x=!0;for(i=0;x&&i<v.length;i++)v[i]&&(x=!1);if(x){console.warn("The dygraphs 'labels' option is set, but the first row of CSV data ('"+y+"') appears to also contain labels. Will drop the CSV labels and use the option labels.");continue}}r.push(v)}}}return u&&(console.warn("CSV is out of order; order it correctly to speed loading."),r.sort(function(t,e){return t[0]-e[0]})),r},t.prototype.parseArray_=function(e){if(0===e.length)return console.error("Can't plot empty data set"),null;if(0===e[0].length)return console.error("Data set cannot contain an empty row"),null;var a;if(null===this.attr_("labels")){for(console.warn("Using default labels. Set labels explicitly via 'labels' in the options parameter"),this.attrs_.labels=["X"],a=1;a<e[0].length;a++)this.attrs_.labels.push("Y"+a);this.attributes_.reparseSeries()}else{var i=this.attr_("labels");if(i.length!=e[0].length)return console.error("Mismatch between number of labels ("+i+") and number of columns in array ("+e[0].length+")"),null}if(t.isDateLike(e[0][0])){this.attrs_.axes.x.valueFormatter=t.dateValueFormatter,this.attrs_.axes.x.ticker=t.dateTicker,this.attrs_.axes.x.axisLabelFormatter=t.dateAxisLabelFormatter;var r=t.clone(e);for(a=0;a<e.length;a++){if(0===r[a].length)return console.error("Row "+(1+a)+" of data is empty"),null;if(null===r[a][0]||"function"!=typeof r[a][0].getTime||isNaN(r[a][0].getTime()))return console.error("x value in row "+(1+a)+" is not a Date"),null;r[a][0]=r[a][0].getTime()}return r}return this.attrs_.axes.x.valueFormatter=function(t){return t},this.attrs_.axes.x.ticker=t.numericTicks,this.attrs_.axes.x.axisLabelFormatter=t.numberAxisLabelFormatter,e},t.prototype.parseDataTable_=function(e){var a=function(t){var e=String.fromCharCode(65+t%26);for(t=Math.floor(t/26);t>0;)e=String.fromCharCode(65+(t-1)%26)+e.toLowerCase(),t=Math.floor((t-1)/26);return e},i=e.getNumberOfColumns(),r=e.getNumberOfRows(),n=e.getColumnType(0);if("date"==n||"datetime"==n)this.attrs_.xValueParser=t.dateParser,this.attrs_.axes.x.valueFormatter=t.dateValueFormatter,this.attrs_.axes.x.ticker=t.dateTicker,this.attrs_.axes.x.axisLabelFormatter=t.dateAxisLabelFormatter;else{if("number"!=n)return console.error("only 'date', 'datetime' and 'number' types are supported for column 1 of DataTable input (Got '"+n+"')"),null;this.attrs_.xValueParser=function(t){return parseFloat(t)},this.attrs_.axes.x.valueFormatter=function(t){return t},this.attrs_.axes.x.ticker=t.numericTicks,this.attrs_.axes.x.axisLabelFormatter=this.attrs_.axes.x.valueFormatter}var o,s,l=[],h={},p=!1;for(o=1;i>o;o++){var g=e.getColumnType(o);if("number"==g)l.push(o);else if("string"==g&&this.getBooleanOption("displayAnnotations")){var d=l[l.length-1];h.hasOwnProperty(d)?h[d].push(o):h[d]=[o],p=!0}else console.error("Only 'number' is supported as a dependent type with Gviz. 'string' is only supported if displayAnnotations is true")}var u=[e.getColumnLabel(0)];for(o=0;o<l.length;o++)u.push(e.getColumnLabel(l[o])),this.getBooleanOption("errorBars")&&(o+=1);this.attrs_.labels=u,i=u.length;var c=[],y=!1,_=[];for(o=0;r>o;o++){var v=[];if("undefined"!=typeof e.getValue(o,0)&&null!==e.getValue(o,0)){if(v.push("date"==n||"datetime"==n?e.getValue(o,0).getTime():e.getValue(o,0)),this.getBooleanOption("errorBars"))for(s=0;i-1>s;s++)v.push([e.getValue(o,1+2*s),e.getValue(o,2+2*s)]);else{for(s=0;s<l.length;s++){var f=l[s];if(v.push(e.getValue(o,f)),p&&h.hasOwnProperty(f)&&null!==e.getValue(o,h[f][0])){var x={};x.series=e.getColumnLabel(f),x.xval=v[0],x.shortText=a(_.length),x.text="";for(var m=0;m<h[f].length;m++)m&&(x.text+="\n"),x.text+=e.getValue(o,h[f][m]);_.push(x)}}for(s=0;s<v.length;s++)isFinite(v[s])||(v[s]=null)}c.length>0&&v[0]<c[c.length-1][0]&&(y=!0),c.push(v)}else console.warn("Ignoring row "+o+" of DataTable because of undefined or null first column.")}y&&(console.warn("DataTable is out of order; order it correctly to speed loading."),c.sort(function(t,e){return t[0]-e[0]})),this.rawData_=c,_.length>0&&this.setAnnotations(_,!0),this.attributes_.reparseSeries()},t.prototype.cascadeDataDidUpdateEvent_=function(){this.cascadeEvents_("dataDidUpdate",{})},t.prototype.start_=function(){var e=this.file_;if("function"==typeof e&&(e=e()),t.isArrayLike(e))this.rawData_=this.parseArray_(e),this.cascadeDataDidUpdateEvent_(),this.predraw_();else if("object"==typeof e&&"function"==typeof e.getColumnRange)this.parseDataTable_(e),this.cascadeDataDidUpdateEvent_(),this.predraw_();else if("string"==typeof e){var a=t.detectLineDelimiter(e);if(a)this.loadedEvent_(e);else{var i;i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var r=this;i.onreadystatechange=function(){4==i.readyState&&(200===i.status||0===i.status)&&r.loadedEvent_(i.responseText)},i.open("GET",e,!0),i.send(null)}}else console.error("Unknown data format: "+typeof e)},t.prototype.updateOptions=function(e,a){"undefined"==typeof a&&(a=!1);var i=e.file,r=t.mapLegacyOptions_(e);"rollPeriod"in r&&(this.rollPeriod_=r.rollPeriod),"dateWindow"in r&&(this.dateWindow_=r.dateWindow,"isZoomedIgnoreProgrammaticZoom"in r||(this.zoomed_x_=null!==r.dateWindow)),"valueRange"in r&&!("isZoomedIgnoreProgrammaticZoom"in r)&&(this.zoomed_y_=null!==r.valueRange);var n=t.isPixelChangingOptionList(this.attr_("labels"),r);t.updateDeep(this.user_attrs_,r),this.attributes_.reparseSeries(),i?(this.cascadeEvents_("dataWillUpdate",{}),this.file_=i,a||this.start_()):a||(n?this.predraw_():this.renderGraph_(!1))},t.mapLegacyOptions_=function(t){var e={};for(var a in t)t.hasOwnProperty(a)&&"file"!=a&&t.hasOwnProperty(a)&&(e[a]=t[a]);var i=function(t,a,i){e.axes||(e.axes={}),e.axes[t]||(e.axes[t]={}),e.axes[t][a]=i},r=function(a,r,n){"undefined"!=typeof t[a]&&(console.warn("Option "+a+" is deprecated. Use the "+n+" option for the "+r+" axis instead. (e.g. { axes : { "+r+" : { "+n+" : ... } } } (see http://dygraphs.com/per-axis.html for more information."),i(r,n,t[a]),delete e[a])};return r("xValueFormatter","x","valueFormatter"),r("pixelsPerXLabel","x","pixelsPerLabel"),r("xAxisLabelFormatter","x","axisLabelFormatter"),r("xTicker","x","ticker"),r("yValueFormatter","y","valueFormatter"),r("pixelsPerYLabel","y","pixelsPerLabel"),r("yAxisLabelFormatter","y","axisLabelFormatter"),r("yTicker","y","ticker"),r("drawXGrid","x","drawGrid"),r("drawXAxis","x","drawAxis"),r("drawYGrid","y","drawGrid"),r("drawYAxis","y","drawAxis"),r("xAxisLabelWidth","x","axisLabelWidth"),r("yAxisLabelWidth","y","axisLabelWidth"),e},t.prototype.resize=function(t,e){if(!this.resize_lock){this.resize_lock=!0,null===t!=(null===e)&&(console.warn("Dygraph.resize() should be called with zero parameters or two non-NULL parameters. Pretending it was zero."),t=e=null);var a=this.width_,i=this.height_;t?(this.maindiv_.style.width=t+"px",this.maindiv_.style.height=e+"px",this.width_=t,this.height_=e):(this.width_=this.maindiv_.clientWidth,this.height_=this.maindiv_.clientHeight),(a!=this.width_||i!=this.height_)&&(this.resizeElements_(),this.predraw_()),this.resize_lock=!1}},t.prototype.adjustRoll=function(t){this.rollPeriod_=t,this.predraw_()},t.prototype.visibility=function(){for(this.getOption("visibility")||(this.attrs_.visibility=[]);this.getOption("visibility").length<this.numColumns()-1;)this.attrs_.visibility.push(!0);return this.getOption("visibility")},t.prototype.setVisibility=function(t,e){var a=this.visibility();0>t||t>=a.length?console.warn("invalid series number in setVisibility: "+t):(a[t]=e,this.predraw_())},t.prototype.size=function(){return{width:this.width_,height:this.height_}},t.prototype.setAnnotations=function(e,a){return t.addAnnotationRule(),this.annotations_=e,this.layout_?(this.layout_.setAnnotations(this.annotations_),void(a||this.predraw_())):void console.warn("Tried to setAnnotations before dygraph was ready. Try setting them in a ready() block. See dygraphs.com/tests/annotation.html")},t.prototype.annotations=function(){return this.annotations_},t.prototype.getLabels=function(){var t=this.attr_("labels");return t?t.slice():null},t.prototype.indexFromSetName=function(t){return this.setIndexByName_[t]},t.prototype.ready=function(t){this.is_initial_draw_?this.readyFns_.push(t):t.call(this,this)},t.addAnnotationRule=function(){if(!t.addedAnnotationCSS){var e="border: 1px solid black; background-color: white; text-align: center;",a=document.createElement("style");a.type="text/css",document.getElementsByTagName("head")[0].appendChild(a);for(var i=0;i<document.styleSheets.length;i++)if(!document.styleSheets[i].disabled){var r=document.styleSheets[i];try{if(r.insertRule){var n=r.cssRules?r.cssRules.length:0;r.insertRule(".dygraphDefaultAnnotation { "+e+" }",n)}else r.addRule&&r.addRule(".dygraphDefaultAnnotation",e);return void(t.addedAnnotationCSS=!0)}catch(o){}}console.warn("Unable to add default annotation CSS rule; display may be off.")}},"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=t),t}();!function(){"use strict";function t(t){var e=a.exec(t);if(!e)return null;var i=parseInt(e[1],10),r=parseInt(e[2],10),n=parseInt(e[3],10);return e[4]?{r:i,g:r,b:n,a:parseFloat(e[4])}:{r:i,g:r,b:n}}Dygraph.LOG_SCALE=10,Dygraph.LN_TEN=Math.log(Dygraph.LOG_SCALE),Dygraph.log10=function(t){return Math.log(t)/Dygraph.LN_TEN},Dygraph.DOTTED_LINE=[2,2],Dygraph.DASHED_LINE=[7,3],Dygraph.DOT_DASH_LINE=[7,2,2,2],Dygraph.getContext=function(t){return t.getContext("2d")},Dygraph.addEvent=function(t,e,a){t.addEventListener?t.addEventListener(e,a,!1):(t[e+a]=function(){a(window.event)},t.attachEvent("on"+e,t[e+a]))},Dygraph.prototype.addAndTrackEvent=function(t,e,a){Dygraph.addEvent(t,e,a),this.registeredEvents_.push({elem:t,type:e,fn:a})},Dygraph.removeEvent=function(t,e,a){if(t.removeEventListener)t.removeEventListener(e,a,!1);else{try{t.detachEvent("on"+e,t[e+a])}catch(i){}t[e+a]=null}},Dygraph.prototype.removeTrackedEvents_=function(){if(this.registeredEvents_)for(var t=0;t<this.registeredEvents_.length;t++){var e=this.registeredEvents_[t];Dygraph.removeEvent(e.elem,e.type,e.fn)}this.registeredEvents_=[]},Dygraph.cancelEvent=function(t){return t=t?t:window.event,t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.cancel=!0,t.returnValue=!1,!1},Dygraph.hsvToRGB=function(t,e,a){var i,r,n;if(0===e)i=a,r=a,n=a;else{var o=Math.floor(6*t),s=6*t-o,l=a*(1-e),h=a*(1-e*s),p=a*(1-e*(1-s));switch(o){case 1:i=h,r=a,n=l;break;case 2:i=l,r=a,n=p;break;case 3:i=l,r=h,n=a;break;case 4:i=p,r=l,n=a;break;case 5:i=a,r=l,n=h;break;case 6:case 0:i=a,r=p,n=l}}return i=Math.floor(255*i+.5),r=Math.floor(255*r+.5),n=Math.floor(255*n+.5),"rgb("+i+","+r+","+n+")"},Dygraph.findPos=function(t){var e=0,a=0;if(t.offsetParent)for(var i=t;;){var r="0",n="0";if(window.getComputedStyle){
    var o=window.getComputedStyle(i,null);r=o.borderLeft||"0",n=o.borderTop||"0"}if(e+=parseInt(r,10),a+=parseInt(n,10),e+=i.offsetLeft,a+=i.offsetTop,!i.offsetParent)break;i=i.offsetParent}else t.x&&(e+=t.x),t.y&&(a+=t.y);for(;t&&t!=document.body;)e-=t.scrollLeft,a-=t.scrollTop,t=t.parentNode;return{x:e,y:a}},Dygraph.pageX=function(t){if(t.pageX)return!t.pageX||t.pageX<0?0:t.pageX;var e=document.documentElement,a=document.body;return t.clientX+(e.scrollLeft||a.scrollLeft)-(e.clientLeft||0)},Dygraph.pageY=function(t){if(t.pageY)return!t.pageY||t.pageY<0?0:t.pageY;var e=document.documentElement,a=document.body;return t.clientY+(e.scrollTop||a.scrollTop)-(e.clientTop||0)},Dygraph.dragGetX_=function(t,e){return Dygraph.pageX(t)-e.px},Dygraph.dragGetY_=function(t,e){return Dygraph.pageY(t)-e.py},Dygraph.isOK=function(t){return!!t&&!isNaN(t)},Dygraph.isValidPoint=function(t,e){return t?null===t.yval?!1:null===t.x||void 0===t.x?!1:null===t.y||void 0===t.y?!1:isNaN(t.x)||!e&&isNaN(t.y)?!1:!0:!1},Dygraph.floatFormat=function(t,e){var a=Math.min(Math.max(1,e||2),21);return Math.abs(t)<.001&&0!==t?t.toExponential(a-1):t.toPrecision(a)},Dygraph.zeropad=function(t){return 10>t?"0"+t:""+t},Dygraph.DateAccessorsLocal={getFullYear:function(t){return t.getFullYear()},getMonth:function(t){return t.getMonth()},getDate:function(t){return t.getDate()},getHours:function(t){return t.getHours()},getMinutes:function(t){return t.getMinutes()},getSeconds:function(t){return t.getSeconds()},getMilliseconds:function(t){return t.getMilliseconds()},getDay:function(t){return t.getDay()},makeDate:function(t,e,a,i,r,n,o){return new Date(t,e,a,i,r,n,o)}},Dygraph.DateAccessorsUTC={getFullYear:function(t){return t.getUTCFullYear()},getMonth:function(t){return t.getUTCMonth()},getDate:function(t){return t.getUTCDate()},getHours:function(t){return t.getUTCHours()},getMinutes:function(t){return t.getUTCMinutes()},getSeconds:function(t){return t.getUTCSeconds()},getMilliseconds:function(t){return t.getUTCMilliseconds()},getDay:function(t){return t.getUTCDay()},makeDate:function(t,e,a,i,r,n,o){return new Date(Date.UTC(t,e,a,i,r,n,o))}},Dygraph.hmsString_=function(t,e,a){var i=Dygraph.zeropad,r=i(t)+":"+i(e);return a&&(r+=":"+i(a)),r},Dygraph.dateString_=function(t,e){var a=Dygraph.zeropad,i=e?Dygraph.DateAccessorsUTC:Dygraph.DateAccessorsLocal,r=new Date(t),n=i.getFullYear(r),o=i.getMonth(r),s=i.getDate(r),l=i.getHours(r),h=i.getMinutes(r),p=i.getSeconds(r),g=""+n,d=a(o+1),u=a(s),c=3600*l+60*h+p,y=g+"/"+d+"/"+u;return c&&(y+=" "+Dygraph.hmsString_(l,h,p)),y},Dygraph.round_=function(t,e){var a=Math.pow(10,e);return Math.round(t*a)/a},Dygraph.binarySearch=function(t,e,a,i,r){if((null===i||void 0===i||null===r||void 0===r)&&(i=0,r=e.length-1),i>r)return-1;(null===a||void 0===a)&&(a=0);var n,o=function(t){return t>=0&&t<e.length},s=parseInt((i+r)/2,10),l=e[s];return l==t?s:l>t?a>0&&(n=s-1,o(n)&&e[n]<t)?s:Dygraph.binarySearch(t,e,a,i,s-1):t>l?0>a&&(n=s+1,o(n)&&e[n]>t)?s:Dygraph.binarySearch(t,e,a,s+1,r):-1},Dygraph.dateParser=function(t){var e,a;if((-1==t.search("-")||-1!=t.search("T")||-1!=t.search("Z"))&&(a=Dygraph.dateStrToMillis(t),a&&!isNaN(a)))return a;if(-1!=t.search("-")){for(e=t.replace("-","/","g");-1!=e.search("-");)e=e.replace("-","/");a=Dygraph.dateStrToMillis(e)}else 8==t.length?(e=t.substr(0,4)+"/"+t.substr(4,2)+"/"+t.substr(6,2),a=Dygraph.dateStrToMillis(e)):a=Dygraph.dateStrToMillis(t);return(!a||isNaN(a))&&console.error("Couldn't parse "+t+" as a date"),a},Dygraph.dateStrToMillis=function(t){return new Date(t).getTime()},Dygraph.update=function(t,e){if("undefined"!=typeof e&&null!==e)for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);return t},Dygraph.updateDeep=function(t,e){function a(t){return"object"==typeof Node?t instanceof Node:"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName}if("undefined"!=typeof e&&null!==e)for(var i in e)e.hasOwnProperty(i)&&(null===e[i]?t[i]=null:Dygraph.isArrayLike(e[i])?t[i]=e[i].slice():a(e[i])?t[i]=e[i]:"object"==typeof e[i]?(("object"!=typeof t[i]||null===t[i])&&(t[i]={}),Dygraph.updateDeep(t[i],e[i])):t[i]=e[i]);return t},Dygraph.isArrayLike=function(t){var e=typeof t;return"object"!=e&&("function"!=e||"function"!=typeof t.item)||null===t||"number"!=typeof t.length||3===t.nodeType?!1:!0},Dygraph.isDateLike=function(t){return"object"!=typeof t||null===t||"function"!=typeof t.getTime?!1:!0},Dygraph.clone=function(t){for(var e=[],a=0;a<t.length;a++)e.push(Dygraph.isArrayLike(t[a])?Dygraph.clone(t[a]):t[a]);return e},Dygraph.createCanvas=function(){var t=document.createElement("canvas"),e=/MSIE/.test(navigator.userAgent)&&!window.opera;return e&&"undefined"!=typeof G_vmlCanvasManager&&(t=G_vmlCanvasManager.initElement(t)),t},Dygraph.getContextPixelRatio=function(t){try{var e=window.devicePixelRatio,a=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return void 0!==e?e/a:1}catch(i){return 1}},Dygraph.isAndroid=function(){return/Android/.test(navigator.userAgent)},Dygraph.Iterator=function(t,e,a,i){e=e||0,a=a||t.length,this.hasNext=!0,this.peek=null,this.start_=e,this.array_=t,this.predicate_=i,this.end_=Math.min(t.length,e+a),this.nextIdx_=e-1,this.next()},Dygraph.Iterator.prototype.next=function(){if(!this.hasNext)return null;for(var t=this.peek,e=this.nextIdx_+1,a=!1;e<this.end_;){if(!this.predicate_||this.predicate_(this.array_,e)){this.peek=this.array_[e],a=!0;break}e++}return this.nextIdx_=e,a||(this.hasNext=!1,this.peek=null),t},Dygraph.createIterator=function(t,e,a,i){return new Dygraph.Iterator(t,e,a,i)},Dygraph.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),Dygraph.repeatAndCleanup=function(t,e,a,i){var r,n=0,o=(new Date).getTime();if(t(n),1==e)return void i();var s=e-1;!function l(){n>=e||Dygraph.requestAnimFrame.call(window,function(){var e=(new Date).getTime(),h=e-o;r=n,n=Math.floor(h/a);var p=n-r,g=n+p>s;g||n>=s?(t(s),i()):(0!==p&&t(n),l())})}()};var e={annotationClickHandler:!0,annotationDblClickHandler:!0,annotationMouseOutHandler:!0,annotationMouseOverHandler:!0,axisLabelColor:!0,axisLineColor:!0,axisLineWidth:!0,clickCallback:!0,drawCallback:!0,drawHighlightPointCallback:!0,drawPoints:!0,drawPointCallback:!0,drawXGrid:!0,drawYGrid:!0,fillAlpha:!0,gridLineColor:!0,gridLineWidth:!0,hideOverlayOnMouseOut:!0,highlightCallback:!0,highlightCircleSize:!0,interactionModel:!0,isZoomedIgnoreProgrammaticZoom:!0,labelsDiv:!0,labelsDivStyles:!0,labelsDivWidth:!0,labelsKMB:!0,labelsKMG2:!0,labelsSeparateLines:!0,labelsShowZeroValues:!0,legend:!0,panEdgeFraction:!0,pixelsPerYLabel:!0,pointClickCallback:!0,pointSize:!0,rangeSelectorPlotFillColor:!0,rangeSelectorPlotStrokeColor:!0,showLabelsOnHighlight:!0,showRoller:!0,strokeWidth:!0,underlayCallback:!0,unhighlightCallback:!0,zoomCallback:!0};Dygraph.isPixelChangingOptionList=function(t,a){var i={};if(t)for(var r=1;r<t.length;r++)i[t[r]]=!0;var n=function(t){for(var a in t)if(t.hasOwnProperty(a)&&!e[a])return!0;return!1};for(var o in a)if(a.hasOwnProperty(o))if("highlightSeriesOpts"==o||i[o]&&!a.series){if(n(a[o]))return!0}else if("series"==o||"axes"==o){var s=a[o];for(var l in s)if(s.hasOwnProperty(l)&&n(s[l]))return!0}else if(!e[o])return!0;return!1},Dygraph.Circles={DEFAULT:function(t,e,a,i,r,n,o){a.beginPath(),a.fillStyle=n,a.arc(i,r,o,0,2*Math.PI,!1),a.fill()}},Dygraph.IFrameTarp=function(){this.tarps=[]},Dygraph.IFrameTarp.prototype.cover=function(){for(var t=document.getElementsByTagName("iframe"),e=0;e<t.length;e++){var a=t[e],i=Dygraph.findPos(a),r=i.x,n=i.y,o=a.offsetWidth,s=a.offsetHeight,l=document.createElement("div");l.style.position="absolute",l.style.left=r+"px",l.style.top=n+"px",l.style.width=o+"px",l.style.height=s+"px",l.style.zIndex=999,document.body.appendChild(l),this.tarps.push(l)}},Dygraph.IFrameTarp.prototype.uncover=function(){for(var t=0;t<this.tarps.length;t++)this.tarps[t].parentNode.removeChild(this.tarps[t]);this.tarps=[]},Dygraph.detectLineDelimiter=function(t){for(var e=0;e<t.length;e++){var a=t.charAt(e);if("\r"===a)return e+1<t.length&&"\n"===t.charAt(e+1)?"\r\n":a;if("\n"===a)return e+1<t.length&&"\r"===t.charAt(e+1)?"\n\r":a}return null},Dygraph.isNodeContainedBy=function(t,e){if(null===e||null===t)return!1;for(var a=t;a&&a!==e;)a=a.parentNode;return a===e},Dygraph.pow=function(t,e){return 0>e?1/Math.pow(t,-e):Math.pow(t,e)};var a=/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*([01](?:\.\d+)?))?\)$/;Dygraph.toRGB_=function(e){var a=t(e);if(a)return a;var i=document.createElement("div");i.style.backgroundColor=e,i.style.visibility="hidden",document.body.appendChild(i);var r;return r=window.getComputedStyle?window.getComputedStyle(i,null).backgroundColor:i.currentStyle.backgroundColor,document.body.removeChild(i),t(r)},Dygraph.isCanvasSupported=function(t){var e;try{e=t||document.createElement("canvas"),e.getContext("2d")}catch(a){var i=navigator.appVersion.match(/MSIE (\d\.\d)/),r=-1!=navigator.userAgent.toLowerCase().indexOf("opera");return!i||i[1]<6||r?!1:!0}return!0},Dygraph.parseFloat_=function(t,e,a){var i=parseFloat(t);if(!isNaN(i))return i;if(/^ *$/.test(t))return null;if(/^ *nan *$/i.test(t))return 0/0;var r="Unable to parse '"+t+"' as a number";return void 0!==a&&void 0!==e&&(r+=" on line "+(1+(e||0))+" ('"+a+"') of CSV."),console.error(r),null}}(),function(){"use strict";Dygraph.GVizChart=function(t){this.container=t},Dygraph.GVizChart.prototype.draw=function(t,e){this.container.innerHTML="","undefined"!=typeof this.date_graph&&this.date_graph.destroy(),this.date_graph=new Dygraph(this.container,t,e)},Dygraph.GVizChart.prototype.setSelection=function(t){var e=!1;t.length&&(e=t[0].row),this.date_graph.setSelection(e)},Dygraph.GVizChart.prototype.getSelection=function(){var t=[],e=this.date_graph.getSelection();if(0>e)return t;for(var a=this.date_graph.layout_.points,i=0;i<a.length;++i)t.push({row:e,column:i+1});return t}}(),function(){"use strict";var t=100;Dygraph.Interaction={},Dygraph.Interaction.maybeTreatMouseOpAsClick=function(t,e,a){a.dragEndX=Dygraph.dragGetX_(t,a),a.dragEndY=Dygraph.dragGetY_(t,a);var i=Math.abs(a.dragEndX-a.dragStartX),r=Math.abs(a.dragEndY-a.dragStartY);2>i&&2>r&&void 0!==e.lastx_&&-1!=e.lastx_&&Dygraph.Interaction.treatMouseOpAsClick(e,t,a),a.regionWidth=i,a.regionHeight=r},Dygraph.Interaction.startPan=function(t,e,a){var i,r;a.isPanning=!0;var n=e.xAxisRange();if(e.getOptionForAxis("logscale","x")?(a.initialLeftmostDate=Dygraph.log10(n[0]),a.dateRange=Dygraph.log10(n[1])-Dygraph.log10(n[0])):(a.initialLeftmostDate=n[0],a.dateRange=n[1]-n[0]),a.xUnitsPerPixel=a.dateRange/(e.plotter_.area.w-1),e.getNumericOption("panEdgeFraction")){var o=e.width_*e.getNumericOption("panEdgeFraction"),s=e.xAxisExtremes(),l=e.toDomXCoord(s[0])-o,h=e.toDomXCoord(s[1])+o,p=e.toDataXCoord(l),g=e.toDataXCoord(h);a.boundedDates=[p,g];var d=[],u=e.height_*e.getNumericOption("panEdgeFraction");for(i=0;i<e.axes_.length;i++){r=e.axes_[i];var c=r.extremeRange,y=e.toDomYCoord(c[0],i)+u,_=e.toDomYCoord(c[1],i)-u,v=e.toDataYCoord(y,i),f=e.toDataYCoord(_,i);d[i]=[v,f]}a.boundedValues=d}for(a.is2DPan=!1,a.axes=[],i=0;i<e.axes_.length;i++){r=e.axes_[i];var x={},m=e.yAxisRange(i),D=e.attributes_.getForAxis("logscale",i);D?(x.initialTopValue=Dygraph.log10(m[1]),x.dragValueRange=Dygraph.log10(m[1])-Dygraph.log10(m[0])):(x.initialTopValue=m[1],x.dragValueRange=m[1]-m[0]),x.unitsPerPixel=x.dragValueRange/(e.plotter_.area.h-1),a.axes.push(x),(r.valueWindow||r.valueRange)&&(a.is2DPan=!0)}},Dygraph.Interaction.movePan=function(t,e,a){a.dragEndX=Dygraph.dragGetX_(t,a),a.dragEndY=Dygraph.dragGetY_(t,a);var i=a.initialLeftmostDate-(a.dragEndX-a.dragStartX)*a.xUnitsPerPixel;a.boundedDates&&(i=Math.max(i,a.boundedDates[0]));var r=i+a.dateRange;if(a.boundedDates&&r>a.boundedDates[1]&&(i-=r-a.boundedDates[1],r=i+a.dateRange),e.getOptionForAxis("logscale","x")?e.dateWindow_=[Math.pow(Dygraph.LOG_SCALE,i),Math.pow(Dygraph.LOG_SCALE,r)]:e.dateWindow_=[i,r],a.is2DPan)for(var n=a.dragEndY-a.dragStartY,o=0;o<e.axes_.length;o++){var s=e.axes_[o],l=a.axes[o],h=n*l.unitsPerPixel,p=a.boundedValues?a.boundedValues[o]:null,g=l.initialTopValue+h;p&&(g=Math.min(g,p[1]));var d=g-l.dragValueRange;p&&d<p[0]&&(g-=d-p[0],d=g-l.dragValueRange),e.attributes_.getForAxis("logscale",o)?s.valueWindow=[Math.pow(Dygraph.LOG_SCALE,d),Math.pow(Dygraph.LOG_SCALE,g)]:s.valueWindow=[d,g]}e.drawGraph_(!1)},Dygraph.Interaction.endPan=Dygraph.Interaction.maybeTreatMouseOpAsClick,Dygraph.Interaction.startZoom=function(t,e,a){a.isZooming=!0,a.zoomMoved=!1},Dygraph.Interaction.moveZoom=function(t,e,a){a.zoomMoved=!0,a.dragEndX=Dygraph.dragGetX_(t,a),a.dragEndY=Dygraph.dragGetY_(t,a);var i=Math.abs(a.dragStartX-a.dragEndX),r=Math.abs(a.dragStartY-a.dragEndY);a.dragDirection=r/2>i?Dygraph.VERTICAL:Dygraph.HORIZONTAL,e.drawZoomRect_(a.dragDirection,a.dragStartX,a.dragEndX,a.dragStartY,a.dragEndY,a.prevDragDirection,a.prevEndX,a.prevEndY),a.prevEndX=a.dragEndX,a.prevEndY=a.dragEndY,a.prevDragDirection=a.dragDirection},Dygraph.Interaction.treatMouseOpAsClick=function(t,e,a){for(var i=t.getFunctionOption("clickCallback"),r=t.getFunctionOption("pointClickCallback"),n=null,o=-1,s=Number.MAX_VALUE,l=0;l<t.selPoints_.length;l++){var h=t.selPoints_[l],p=Math.pow(h.canvasx-a.dragEndX,2)+Math.pow(h.canvasy-a.dragEndY,2);!isNaN(p)&&(-1==o||s>p)&&(s=p,o=l)}var g=t.getNumericOption("highlightCircleSize")+2;if(g*g>=s&&(n=t.selPoints_[o]),n){var d={cancelable:!0,point:n,canvasx:a.dragEndX,canvasy:a.dragEndY},u=t.cascadeEvents_("pointClick",d);if(u)return;r&&r.call(t,e,n)}var d={cancelable:!0,xval:t.lastx_,pts:t.selPoints_,canvasx:a.dragEndX,canvasy:a.dragEndY};t.cascadeEvents_("click",d)||i&&i.call(t,e,t.lastx_,t.selPoints_)},Dygraph.Interaction.endZoom=function(t,e,a){e.clearZoomRect_(),a.isZooming=!1,Dygraph.Interaction.maybeTreatMouseOpAsClick(t,e,a);var i=e.getArea();if(a.regionWidth>=10&&a.dragDirection==Dygraph.HORIZONTAL){var r=Math.min(a.dragStartX,a.dragEndX),n=Math.max(a.dragStartX,a.dragEndX);r=Math.max(r,i.x),n=Math.min(n,i.x+i.w),n>r&&e.doZoomX_(r,n),a.cancelNextDblclick=!0}else if(a.regionHeight>=10&&a.dragDirection==Dygraph.VERTICAL){var o=Math.min(a.dragStartY,a.dragEndY),s=Math.max(a.dragStartY,a.dragEndY);o=Math.max(o,i.y),s=Math.min(s,i.y+i.h),s>o&&e.doZoomY_(o,s),a.cancelNextDblclick=!0}a.dragStartX=null,a.dragStartY=null},Dygraph.Interaction.startTouch=function(t,e,a){t.preventDefault(),t.touches.length>1&&(a.startTimeForDoubleTapMs=null);for(var i=[],r=0;r<t.touches.length;r++){var n=t.touches[r];i.push({pageX:n.pageX,pageY:n.pageY,dataX:e.toDataXCoord(n.pageX),dataY:e.toDataYCoord(n.pageY)})}if(a.initialTouches=i,1==i.length)a.initialPinchCenter=i[0],a.touchDirections={x:!0,y:!0};else if(i.length>=2){a.initialPinchCenter={pageX:.5*(i[0].pageX+i[1].pageX),pageY:.5*(i[0].pageY+i[1].pageY),dataX:.5*(i[0].dataX+i[1].dataX),dataY:.5*(i[0].dataY+i[1].dataY)};var o=180/Math.PI*Math.atan2(a.initialPinchCenter.pageY-i[0].pageY,i[0].pageX-a.initialPinchCenter.pageX);o=Math.abs(o),o>90&&(o=90-o),a.touchDirections={x:67.5>o,y:o>22.5}}a.initialRange={x:e.xAxisRange(),y:e.yAxisRange()}},Dygraph.Interaction.moveTouch=function(t,e,a){a.startTimeForDoubleTapMs=null;var i,r=[];for(i=0;i<t.touches.length;i++){var n=t.touches[i];r.push({pageX:n.pageX,pageY:n.pageY})}var o,s=a.initialTouches,l=a.initialPinchCenter;o=1==r.length?r[0]:{pageX:.5*(r[0].pageX+r[1].pageX),pageY:.5*(r[0].pageY+r[1].pageY)};var h={pageX:o.pageX-l.pageX,pageY:o.pageY-l.pageY},p=a.initialRange.x[1]-a.initialRange.x[0],g=a.initialRange.y[0]-a.initialRange.y[1];h.dataX=h.pageX/e.plotter_.area.w*p,h.dataY=h.pageY/e.plotter_.area.h*g;var d,u;if(1==r.length)d=1,u=1;else if(r.length>=2){var c=s[1].pageX-l.pageX;d=(r[1].pageX-o.pageX)/c;var y=s[1].pageY-l.pageY;u=(r[1].pageY-o.pageY)/y}d=Math.min(8,Math.max(.125,d)),u=Math.min(8,Math.max(.125,u));var _=!1;if(a.touchDirections.x&&(e.dateWindow_=[l.dataX-h.dataX+(a.initialRange.x[0]-l.dataX)/d,l.dataX-h.dataX+(a.initialRange.x[1]-l.dataX)/d],_=!0),a.touchDirections.y)for(i=0;1>i;i++){var v=e.axes_[i],f=e.attributes_.getForAxis("logscale",i);f||(v.valueWindow=[l.dataY-h.dataY+(a.initialRange.y[0]-l.dataY)/u,l.dataY-h.dataY+(a.initialRange.y[1]-l.dataY)/u],_=!0)}if(e.drawGraph_(!1),_&&r.length>1&&e.getFunctionOption("zoomCallback")){var x=e.xAxisRange();e.getFunctionOption("zoomCallback").call(e,x[0],x[1],e.yAxisRanges())}},Dygraph.Interaction.endTouch=function(t,e,a){if(0!==t.touches.length)Dygraph.Interaction.startTouch(t,e,a);else if(1==t.changedTouches.length){var i=(new Date).getTime(),r=t.changedTouches[0];a.startTimeForDoubleTapMs&&i-a.startTimeForDoubleTapMs<500&&a.doubleTapX&&Math.abs(a.doubleTapX-r.screenX)<50&&a.doubleTapY&&Math.abs(a.doubleTapY-r.screenY)<50?e.resetZoom():(a.startTimeForDoubleTapMs=i,a.doubleTapX=r.screenX,a.doubleTapY=r.screenY)}};var e=function(t,e,a){return e>t?e-t:t>a?t-a:0},a=function(t,a){var i=Dygraph.findPos(a.canvas_),r={left:i.x,right:i.x+a.canvas_.offsetWidth,top:i.y,bottom:i.y+a.canvas_.offsetHeight},n={x:Dygraph.pageX(t),y:Dygraph.pageY(t)},o=e(n.x,r.left,r.right),s=e(n.y,r.top,r.bottom);return Math.max(o,s)};Dygraph.Interaction.defaultModel={mousedown:function(e,i,r){if(!e.button||2!=e.button){r.initializeMouseDown(e,i,r),e.altKey||e.shiftKey?Dygraph.startPan(e,i,r):Dygraph.startZoom(e,i,r);var n=function(e){if(r.isZooming){var n=a(e,i);t>n?Dygraph.moveZoom(e,i,r):null!==r.dragEndX&&(r.dragEndX=null,r.dragEndY=null,i.clearZoomRect_())}else r.isPanning&&Dygraph.movePan(e,i,r)},o=function(t){r.isZooming?null!==r.dragEndX?Dygraph.endZoom(t,i,r):Dygraph.Interaction.maybeTreatMouseOpAsClick(t,i,r):r.isPanning&&Dygraph.endPan(t,i,r),Dygraph.removeEvent(document,"mousemove",n),Dygraph.removeEvent(document,"mouseup",o),r.destroy()};i.addAndTrackEvent(document,"mousemove",n),i.addAndTrackEvent(document,"mouseup",o)}},willDestroyContextMyself:!0,touchstart:function(t,e,a){Dygraph.Interaction.startTouch(t,e,a)},touchmove:function(t,e,a){Dygraph.Interaction.moveTouch(t,e,a)},touchend:function(t,e,a){Dygraph.Interaction.endTouch(t,e,a)},dblclick:function(t,e,a){if(a.cancelNextDblclick)return void(a.cancelNextDblclick=!1);var i={canvasx:a.dragEndX,canvasy:a.dragEndY};e.cascadeEvents_("dblclick",i)||t.altKey||t.shiftKey||e.resetZoom()}},Dygraph.DEFAULT_ATTRS.interactionModel=Dygraph.Interaction.defaultModel,Dygraph.defaultInteractionModel=Dygraph.Interaction.defaultModel,Dygraph.endZoom=Dygraph.Interaction.endZoom,Dygraph.moveZoom=Dygraph.Interaction.moveZoom,Dygraph.startZoom=Dygraph.Interaction.startZoom,Dygraph.endPan=Dygraph.Interaction.endPan,Dygraph.movePan=Dygraph.Interaction.movePan,Dygraph.startPan=Dygraph.Interaction.startPan,Dygraph.Interaction.nonInteractiveModel_={mousedown:function(t,e,a){a.initializeMouseDown(t,e,a)},mouseup:Dygraph.Interaction.maybeTreatMouseOpAsClick},Dygraph.Interaction.dragIsPanInteractionModel={mousedown:function(t,e,a){a.initializeMouseDown(t,e,a),Dygraph.startPan(t,e,a)},mousemove:function(t,e,a){a.isPanning&&Dygraph.movePan(t,e,a)},mouseup:function(t,e,a){a.isPanning&&Dygraph.endPan(t,e,a)}}}(),function(){"use strict";Dygraph.TickList=void 0,Dygraph.Ticker=void 0,Dygraph.numericLinearTicks=function(t,e,a,i,r,n){var o=function(t){return"logscale"===t?!1:i(t)};return Dygraph.numericTicks(t,e,a,o,r,n)},Dygraph.numericTicks=function(t,e,a,i,r,n){var o,s,l,h,p=i("pixelsPerLabel"),g=[];if(n)for(o=0;o<n.length;o++)g.push({v:n[o]});else{if(i("logscale")){h=Math.floor(a/p);var d=Dygraph.binarySearch(t,Dygraph.PREFERRED_LOG_TICK_VALUES,1),u=Dygraph.binarySearch(e,Dygraph.PREFERRED_LOG_TICK_VALUES,-1);-1==d&&(d=0),-1==u&&(u=Dygraph.PREFERRED_LOG_TICK_VALUES.length-1);var c=null;if(u-d>=h/4){for(var y=u;y>=d;y--){var _=Dygraph.PREFERRED_LOG_TICK_VALUES[y],v=Math.log(_/t)/Math.log(e/t)*a,f={v:_};null===c?c={tickValue:_,pixel_coord:v}:Math.abs(v-c.pixel_coord)>=p?c={tickValue:_,pixel_coord:v}:f.label="",g.push(f)}g.reverse()}}if(0===g.length){var x,m,D=i("labelsKMG2");D?(x=[1,2,4,8,16,32,64,128,256],m=16):(x=[1,2,5,10,20,50,100],m=10);var w,A,b,T,E=Math.ceil(a/p),C=Math.abs(e-t)/E,L=Math.floor(Math.log(C)/Math.log(m)),P=Math.pow(m,L);for(s=0;s<x.length&&(w=P*x[s],A=Math.floor(t/w)*w,b=Math.ceil(e/w)*w,h=Math.abs(b-A)/w,T=a/h,!(T>p));s++);for(A>b&&(w*=-1),o=0;h>=o;o++)l=A+o*w,g.push({v:l})}}var S=i("axisLabelFormatter");for(o=0;o<g.length;o++)void 0===g[o].label&&(g[o].label=S.call(r,g[o].v,0,i,r));return g},Dygraph.dateTicker=function(t,e,a,i,r,n){var o=Dygraph.pickDateTickGranularity(t,e,a,i);return o>=0?Dygraph.getDateAxis(t,e,o,i,r):[]},Dygraph.SECONDLY=0,Dygraph.TWO_SECONDLY=1,Dygraph.FIVE_SECONDLY=2,Dygraph.TEN_SECONDLY=3,Dygraph.THIRTY_SECONDLY=4,Dygraph.MINUTELY=5,Dygraph.TWO_MINUTELY=6,Dygraph.FIVE_MINUTELY=7,Dygraph.TEN_MINUTELY=8,Dygraph.THIRTY_MINUTELY=9,Dygraph.HOURLY=10,Dygraph.TWO_HOURLY=11,Dygraph.SIX_HOURLY=12,Dygraph.DAILY=13,Dygraph.TWO_DAILY=14,Dygraph.WEEKLY=15,Dygraph.MONTHLY=16,Dygraph.QUARTERLY=17,Dygraph.BIANNUAL=18,Dygraph.ANNUAL=19,Dygraph.DECADAL=20,Dygraph.CENTENNIAL=21,Dygraph.NUM_GRANULARITIES=22,Dygraph.DATEFIELD_Y=0,Dygraph.DATEFIELD_M=1,Dygraph.DATEFIELD_D=2,Dygraph.DATEFIELD_HH=3,Dygraph.DATEFIELD_MM=4,Dygraph.DATEFIELD_SS=5,Dygraph.DATEFIELD_MS=6,Dygraph.NUM_DATEFIELDS=7,Dygraph.TICK_PLACEMENT=[],Dygraph.TICK_PLACEMENT[Dygraph.SECONDLY]={datefield:Dygraph.DATEFIELD_SS,step:1,spacing:1e3},Dygraph.TICK_PLACEMENT[Dygraph.TWO_SECONDLY]={datefield:Dygraph.DATEFIELD_SS,step:2,spacing:2e3},Dygraph.TICK_PLACEMENT[Dygraph.FIVE_SECONDLY]={datefield:Dygraph.DATEFIELD_SS,step:5,spacing:5e3},Dygraph.TICK_PLACEMENT[Dygraph.TEN_SECONDLY]={datefield:Dygraph.DATEFIELD_SS,step:10,spacing:1e4},Dygraph.TICK_PLACEMENT[Dygraph.THIRTY_SECONDLY]={datefield:Dygraph.DATEFIELD_SS,step:30,spacing:3e4},Dygraph.TICK_PLACEMENT[Dygraph.MINUTELY]={datefield:Dygraph.DATEFIELD_MM,step:1,spacing:6e4},Dygraph.TICK_PLACEMENT[Dygraph.TWO_MINUTELY]={datefield:Dygraph.DATEFIELD_MM,step:2,spacing:12e4},Dygraph.TICK_PLACEMENT[Dygraph.FIVE_MINUTELY]={datefield:Dygraph.DATEFIELD_MM,step:5,spacing:3e5},Dygraph.TICK_PLACEMENT[Dygraph.TEN_MINUTELY]={datefield:Dygraph.DATEFIELD_MM,step:10,spacing:6e5},Dygraph.TICK_PLACEMENT[Dygraph.THIRTY_MINUTELY]={datefield:Dygraph.DATEFIELD_MM,step:30,spacing:18e5},Dygraph.TICK_PLACEMENT[Dygraph.HOURLY]={datefield:Dygraph.DATEFIELD_HH,step:1,spacing:36e5},Dygraph.TICK_PLACEMENT[Dygraph.TWO_HOURLY]={datefield:Dygraph.DATEFIELD_HH,step:2,spacing:72e5},Dygraph.TICK_PLACEMENT[Dygraph.SIX_HOURLY]={datefield:Dygraph.DATEFIELD_HH,step:6,spacing:216e5},Dygraph.TICK_PLACEMENT[Dygraph.DAILY]={datefield:Dygraph.DATEFIELD_D,step:1,spacing:864e5},Dygraph.TICK_PLACEMENT[Dygraph.TWO_DAILY]={datefield:Dygraph.DATEFIELD_D,step:2,spacing:1728e5},Dygraph.TICK_PLACEMENT[Dygraph.WEEKLY]={datefield:Dygraph.DATEFIELD_D,step:7,spacing:6048e5},Dygraph.TICK_PLACEMENT[Dygraph.MONTHLY]={datefield:Dygraph.DATEFIELD_M,step:1,spacing:2629817280},Dygraph.TICK_PLACEMENT[Dygraph.QUARTERLY]={datefield:Dygraph.DATEFIELD_M,step:3,spacing:216e5*365.2524},Dygraph.TICK_PLACEMENT[Dygraph.BIANNUAL]={datefield:Dygraph.DATEFIELD_M,step:6,spacing:432e5*365.2524},Dygraph.TICK_PLACEMENT[Dygraph.ANNUAL]={datefield:Dygraph.DATEFIELD_Y,step:1,spacing:864e5*365.2524},Dygraph.TICK_PLACEMENT[Dygraph.DECADAL]={datefield:Dygraph.DATEFIELD_Y,step:10,spacing:315578073600},Dygraph.TICK_PLACEMENT[Dygraph.CENTENNIAL]={datefield:Dygraph.DATEFIELD_Y,step:100,spacing:3155780736e3},Dygraph.PREFERRED_LOG_TICK_VALUES=function(){for(var t=[],e=-39;39>=e;e++)for(var a=Math.pow(10,e),i=1;9>=i;i++){var r=a*i;t.push(r)}return t}(),Dygraph.pickDateTickGranularity=function(t,e,a,i){for(var r=i("pixelsPerLabel"),n=0;n<Dygraph.NUM_GRANULARITIES;n++){var o=Dygraph.numDateTicks(t,e,n);if(a/o>=r)return n}return-1},Dygraph.numDateTicks=function(t,e,a){var i=Dygraph.TICK_PLACEMENT[a].spacing;return Math.round(1*(e-t)/i)},Dygraph.getDateAxis=function(t,e,a,i,r){var n=i("axisLabelFormatter"),o=i("labelsUTC"),s=o?Dygraph.DateAccessorsUTC:Dygraph.DateAccessorsLocal,l=Dygraph.TICK_PLACEMENT[a].datefield,h=Dygraph.TICK_PLACEMENT[a].step,p=Dygraph.TICK_PLACEMENT[a].spacing,g=new Date(t),d=[];d[Dygraph.DATEFIELD_Y]=s.getFullYear(g),d[Dygraph.DATEFIELD_M]=s.getMonth(g),d[Dygraph.DATEFIELD_D]=s.getDate(g),d[Dygraph.DATEFIELD_HH]=s.getHours(g),d[Dygraph.DATEFIELD_MM]=s.getMinutes(g),d[Dygraph.DATEFIELD_SS]=s.getSeconds(g),d[Dygraph.DATEFIELD_MS]=s.getMilliseconds(g);var u=d[l]%h;a==Dygraph.WEEKLY&&(u=s.getDay(g)),d[l]-=u;for(var c=l+1;c<Dygraph.NUM_DATEFIELDS;c++)d[c]=c===Dygraph.DATEFIELD_D?1:0;var y=[],_=s.makeDate.apply(null,d),v=_.getTime();if(a<=Dygraph.HOURLY)for(t>v&&(v+=p,_=new Date(v));e>=v;)y.push({v:v,label:n.call(r,_,a,i,r)}),v+=p,_=new Date(v);else for(t>v&&(d[l]+=h,_=s.makeDate.apply(null,d),v=_.getTime());e>=v;)(a>=Dygraph.DAILY||s.getHours(_)%h===0)&&y.push({v:v,label:n.call(r,_,a,i,r)}),d[l]+=h,_=s.makeDate.apply(null,d),v=_.getTime();return y},Dygraph&&Dygraph.DEFAULT_ATTRS&&Dygraph.DEFAULT_ATTRS.axes&&Dygraph.DEFAULT_ATTRS.axes.x&&Dygraph.DEFAULT_ATTRS.axes.y&&Dygraph.DEFAULT_ATTRS.axes.y2&&(Dygraph.DEFAULT_ATTRS.axes.x.ticker=Dygraph.dateTicker,Dygraph.DEFAULT_ATTRS.axes.y.ticker=Dygraph.numericTicks,Dygraph.DEFAULT_ATTRS.axes.y2.ticker=Dygraph.numericTicks)}(),Dygraph.Plugins={},Dygraph.Plugins.Annotations=function(){"use strict";var t=function(){this.annotations_=[]};return t.prototype.toString=function(){return"Annotations Plugin"},t.prototype.activate=function(t){return{clearChart:this.clearChart,didDrawChart:this.didDrawChart}},t.prototype.detachLabels=function(){for(var t=0;t<this.annotations_.length;t++){var e=this.annotations_[t];e.parentNode&&e.parentNode.removeChild(e),this.annotations_[t]=null}this.annotations_=[]},t.prototype.clearChart=function(t){this.detachLabels()},t.prototype.didDrawChart=function(t){var e=t.dygraph,a=e.layout_.annotated_points;if(a&&0!==a.length)for(var i=t.canvas.parentNode,r={position:"absolute",fontSize:e.getOption("axisLabelFontSize")+"px",zIndex:10,overflow:"hidden"},n=function(t,a,i){return function(r){var n=i.annotation;n.hasOwnProperty(t)?n[t](n,i,e,r):e.getOption(a)&&e.getOption(a)(n,i,e,r)}},o=t.dygraph.plotter_.area,s={},l=0;l<a.length;l++){var h=a[l];if(!(h.canvasx<o.x||h.canvasx>o.x+o.w||h.canvasy<o.y||h.canvasy>o.y+o.h)){var p=h.annotation,g=6;p.hasOwnProperty("tickHeight")&&(g=p.tickHeight);var d=document.createElement("div");for(var u in r)r.hasOwnProperty(u)&&(d.style[u]=r[u]);p.hasOwnProperty("icon")||(d.className="dygraphDefaultAnnotation"),p.hasOwnProperty("cssClass")&&(d.className+=" "+p.cssClass);var c=p.hasOwnProperty("width")?p.width:16,y=p.hasOwnProperty("height")?p.height:16;if(p.hasOwnProperty("icon")){var _=document.createElement("img");_.src=p.icon,_.width=c,_.height=y,d.appendChild(_)}else h.annotation.hasOwnProperty("shortText")&&d.appendChild(document.createTextNode(h.annotation.shortText));var v=h.canvasx-c/2;d.style.left=v+"px";var f=0;if(p.attachAtBottom){var x=o.y+o.h-y-g;s[v]?x-=s[v]:s[v]=0,s[v]+=g+y,f=x}else f=h.canvasy-y-g;d.style.top=f+"px",d.style.width=c+"px",d.style.height=y+"px",d.title=h.annotation.text,d.style.color=e.colorsMap_[h.name],d.style.borderColor=e.colorsMap_[h.name],p.div=d,e.addAndTrackEvent(d,"click",n("clickHandler","annotationClickHandler",h,this)),e.addAndTrackEvent(d,"mouseover",n("mouseOverHandler","annotationMouseOverHandler",h,this)),e.addAndTrackEvent(d,"mouseout",n("mouseOutHandler","annotationMouseOutHandler",h,this)),e.addAndTrackEvent(d,"dblclick",n("dblClickHandler","annotationDblClickHandler",h,this)),i.appendChild(d),this.annotations_.push(d);var m=t.drawingContext;if(m.save(),m.strokeStyle=e.colorsMap_[h.name],m.beginPath(),p.attachAtBottom){var x=f+y;m.moveTo(h.canvasx,x),m.lineTo(h.canvasx,x+g)}else m.moveTo(h.canvasx,h.canvasy),m.lineTo(h.canvasx,h.canvasy-2-g);m.closePath(),m.stroke(),m.restore()}}},t.prototype.destroy=function(){this.detachLabels()},t}(),Dygraph.Plugins.Axes=function(){"use strict";var t=function(){this.xlabels_=[],this.ylabels_=[]};return t.prototype.toString=function(){return"Axes Plugin"},t.prototype.activate=function(t){return{layout:this.layout,clearChart:this.clearChart,willDrawChart:this.willDrawChart}},t.prototype.layout=function(t){var e=t.dygraph;if(e.getOptionForAxis("drawAxis","y")){var a=e.getOptionForAxis("axisLabelWidth","y")+2*e.getOptionForAxis("axisTickSize","y");t.reserveSpaceLeft(a)}if(e.getOptionForAxis("drawAxis","x")){var i;i=e.getOption("xAxisHeight")?e.getOption("xAxisHeight"):e.getOptionForAxis("axisLabelFontSize","x")+2*e.getOptionForAxis("axisTickSize","x"),t.reserveSpaceBottom(i)}if(2==e.numAxes()){if(e.getOptionForAxis("drawAxis","y2")){var a=e.getOptionForAxis("axisLabelWidth","y2")+2*e.getOptionForAxis("axisTickSize","y2");t.reserveSpaceRight(a)}}else e.numAxes()>2&&e.error("Only two y-axes are supported at this time. (Trying to use "+e.numAxes()+")")},t.prototype.detachLabels=function(){function t(t){for(var e=0;e<t.length;e++){var a=t[e];a.parentNode&&a.parentNode.removeChild(a)}}t(this.xlabels_),t(this.ylabels_),this.xlabels_=[],this.ylabels_=[]},t.prototype.clearChart=function(t){this.detachLabels()},t.prototype.willDrawChart=function(t){function e(t){return Math.round(t)+.5}function a(t){return Math.round(t)-.5}var i=t.dygraph;if(i.getOptionForAxis("drawAxis","x")||i.getOptionForAxis("drawAxis","y")||i.getOptionForAxis("drawAxis","y2")){var r,n,o,s,l,h=t.drawingContext,p=t.canvas.parentNode,g=i.width_,d=i.height_,u=function(t){return{position:"absolute",fontSize:i.getOptionForAxis("axisLabelFontSize",t)+"px",zIndex:10,color:i.getOptionForAxis("axisLabelColor",t),width:i.getOptionForAxis("axisLabelWidth",t)+"px",lineHeight:"normal",overflow:"hidden"}},c={x:u("x"),y:u("y"),y2:u("y2")},y=function(t,e,a){var i=document.createElement("div"),r=c["y2"==a?"y2":e];for(var n in r)r.hasOwnProperty(n)&&(i.style[n]=r[n]);var o=document.createElement("div");return o.className="dygraph-axis-label dygraph-axis-label-"+e+(a?" dygraph-axis-label-"+a:""),o.innerHTML=t,i.appendChild(o),i};h.save();var _=i.layout_,v=t.dygraph.plotter_.area,f=function(t){return function(e){return i.getOptionForAxis(e,t)}};if(i.getOptionForAxis("drawAxis","y")){if(_.yticks&&_.yticks.length>0){var x=i.numAxes(),m=[f("y"),f("y2")];for(l=0;l<_.yticks.length;l++){if(s=_.yticks[l],"function"==typeof s)return;n=v.x;var D=1,w="y1",A=m[0];1==s[0]&&(n=v.x+v.w,D=-1,w="y2",A=m[1]);var b=A("axisLabelFontSize");o=v.y+s[1]*v.h,r=y(s[2],"y",2==x?w:null);var T=o-b/2;0>T&&(T=0),T+b+3>d?r.style.bottom="0":r.style.top=T+"px",0===s[0]?(r.style.left=v.x-A("axisLabelWidth")-A("axisTickSize")+"px",r.style.textAlign="right"):1==s[0]&&(r.style.left=v.x+v.w+A("axisTickSize")+"px",r.style.textAlign="left"),r.style.width=A("axisLabelWidth")+"px",p.appendChild(r),this.ylabels_.push(r)}var E=this.ylabels_[0],b=i.getOptionForAxis("axisLabelFontSize","y"),C=parseInt(E.style.top,10)+b;C>d-b&&(E.style.top=parseInt(E.style.top,10)-b/2+"px")}var L;if(i.getOption("drawAxesAtZero")){var P=i.toPercentXCoord(0);(P>1||0>P||isNaN(P))&&(P=0),L=e(v.x+P*v.w)}else L=e(v.x);h.strokeStyle=i.getOptionForAxis("axisLineColor","y"),h.lineWidth=i.getOptionForAxis("axisLineWidth","y"),h.beginPath(),h.moveTo(L,a(v.y)),h.lineTo(L,a(v.y+v.h)),h.closePath(),h.stroke(),2==i.numAxes()&&(h.strokeStyle=i.getOptionForAxis("axisLineColor","y2"),h.lineWidth=i.getOptionForAxis("axisLineWidth","y2"),h.beginPath(),h.moveTo(a(v.x+v.w),a(v.y)),h.lineTo(a(v.x+v.w),a(v.y+v.h)),h.closePath(),h.stroke())}if(i.getOptionForAxis("drawAxis","x")){if(_.xticks){var A=f("x");for(l=0;l<_.xticks.length;l++){s=_.xticks[l],n=v.x+s[0]*v.w,o=v.y+v.h,r=y(s[1],"x"),r.style.textAlign="center",r.style.top=o+A("axisTickSize")+"px";var S=n-A("axisLabelWidth")/2;S+A("axisLabelWidth")>g&&(S=g-A("axisLabelWidth"),r.style.textAlign="right"),0>S&&(S=0,r.style.textAlign="left"),r.style.left=S+"px",r.style.width=A("axisLabelWidth")+"px",
    p.appendChild(r),this.xlabels_.push(r)}}h.strokeStyle=i.getOptionForAxis("axisLineColor","x"),h.lineWidth=i.getOptionForAxis("axisLineWidth","x"),h.beginPath();var O;if(i.getOption("drawAxesAtZero")){var P=i.toPercentYCoord(0,0);(P>1||0>P)&&(P=1),O=a(v.y+P*v.h)}else O=a(v.y+v.h);h.moveTo(e(v.x),O),h.lineTo(e(v.x+v.w),O),h.closePath(),h.stroke()}h.restore()}},t}(),Dygraph.Plugins.ChartLabels=function(){"use strict";var t=function(){this.title_div_=null,this.xlabel_div_=null,this.ylabel_div_=null,this.y2label_div_=null};t.prototype.toString=function(){return"ChartLabels Plugin"},t.prototype.activate=function(t){return{layout:this.layout,didDrawChart:this.didDrawChart}};var e=function(t){var e=document.createElement("div");return e.style.position="absolute",e.style.left=t.x+"px",e.style.top=t.y+"px",e.style.width=t.w+"px",e.style.height=t.h+"px",e};t.prototype.detachLabels_=function(){for(var t=[this.title_div_,this.xlabel_div_,this.ylabel_div_,this.y2label_div_],e=0;e<t.length;e++){var a=t[e];a&&a.parentNode&&a.parentNode.removeChild(a)}this.title_div_=null,this.xlabel_div_=null,this.ylabel_div_=null,this.y2label_div_=null};var a=function(t,e,a,i,r){var n=document.createElement("div");n.style.position="absolute",1==a?n.style.left="0px":n.style.left=e.x+"px",n.style.top=e.y+"px",n.style.width=e.w+"px",n.style.height=e.h+"px",n.style.fontSize=t.getOption("yLabelWidth")-2+"px";var o=document.createElement("div");o.style.position="absolute",o.style.width=e.h+"px",o.style.height=e.w+"px",o.style.top=e.h/2-e.w/2+"px",o.style.left=e.w/2-e.h/2+"px",o.style.textAlign="center";var s="rotate("+(1==a?"-":"")+"90deg)";o.style.transform=s,o.style.WebkitTransform=s,o.style.MozTransform=s,o.style.OTransform=s,o.style.msTransform=s,"undefined"!=typeof document.documentMode&&document.documentMode<9&&(o.style.filter="progid:DXImageTransform.Microsoft.BasicImage(rotation="+(1==a?"3":"1")+")",o.style.left="0px",o.style.top="0px");var l=document.createElement("div");return l.className=i,l.innerHTML=r,o.appendChild(l),n.appendChild(o),n};return t.prototype.layout=function(t){this.detachLabels_();var i=t.dygraph,r=t.chart_div;if(i.getOption("title")){var n=t.reserveSpaceTop(i.getOption("titleHeight"));this.title_div_=e(n),this.title_div_.style.textAlign="center",this.title_div_.style.fontSize=i.getOption("titleHeight")-8+"px",this.title_div_.style.fontWeight="bold",this.title_div_.style.zIndex=10;var o=document.createElement("div");o.className="dygraph-label dygraph-title",o.innerHTML=i.getOption("title"),this.title_div_.appendChild(o),r.appendChild(this.title_div_)}if(i.getOption("xlabel")){var s=t.reserveSpaceBottom(i.getOption("xLabelHeight"));this.xlabel_div_=e(s),this.xlabel_div_.style.textAlign="center",this.xlabel_div_.style.fontSize=i.getOption("xLabelHeight")-2+"px";var o=document.createElement("div");o.className="dygraph-label dygraph-xlabel",o.innerHTML=i.getOption("xlabel"),this.xlabel_div_.appendChild(o),r.appendChild(this.xlabel_div_)}if(i.getOption("ylabel")){var l=t.reserveSpaceLeft(0);this.ylabel_div_=a(i,l,1,"dygraph-label dygraph-ylabel",i.getOption("ylabel")),r.appendChild(this.ylabel_div_)}if(i.getOption("y2label")&&2==i.numAxes()){var h=t.reserveSpaceRight(0);this.y2label_div_=a(i,h,2,"dygraph-label dygraph-y2label",i.getOption("y2label")),r.appendChild(this.y2label_div_)}},t.prototype.didDrawChart=function(t){var e=t.dygraph;this.title_div_&&(this.title_div_.children[0].innerHTML=e.getOption("title")),this.xlabel_div_&&(this.xlabel_div_.children[0].innerHTML=e.getOption("xlabel")),this.ylabel_div_&&(this.ylabel_div_.children[0].children[0].innerHTML=e.getOption("ylabel")),this.y2label_div_&&(this.y2label_div_.children[0].children[0].innerHTML=e.getOption("y2label"))},t.prototype.clearChart=function(){},t.prototype.destroy=function(){this.detachLabels_()},t}(),Dygraph.Plugins.Grid=function(){"use strict";var t=function(){};return t.prototype.toString=function(){return"Gridline Plugin"},t.prototype.activate=function(t){return{willDrawChart:this.willDrawChart}},t.prototype.willDrawChart=function(t){function e(t){return Math.round(t)+.5}function a(t){return Math.round(t)-.5}var i,r,n,o,s=t.dygraph,l=t.drawingContext,h=s.layout_,p=t.dygraph.plotter_.area;if(s.getOptionForAxis("drawGrid","y")){for(var g=["y","y2"],d=[],u=[],c=[],y=[],_=[],n=0;n<g.length;n++)c[n]=s.getOptionForAxis("drawGrid",g[n]),c[n]&&(d[n]=s.getOptionForAxis("gridLineColor",g[n]),u[n]=s.getOptionForAxis("gridLineWidth",g[n]),_[n]=s.getOptionForAxis("gridLinePattern",g[n]),y[n]=_[n]&&_[n].length>=2);for(o=h.yticks,l.save(),n=0;n<o.length;n++){var v=o[n][0];c[v]&&(y[v]&&l.installPattern(_[v]),l.strokeStyle=d[v],l.lineWidth=u[v],i=e(p.x),r=a(p.y+o[n][1]*p.h),l.beginPath(),l.moveTo(i,r),l.lineTo(i+p.w,r),l.closePath(),l.stroke(),y[v]&&l.uninstallPattern())}l.restore()}if(s.getOptionForAxis("drawGrid","x")){o=h.xticks,l.save();var _=s.getOptionForAxis("gridLinePattern","x"),y=_&&_.length>=2;for(y&&l.installPattern(_),l.strokeStyle=s.getOptionForAxis("gridLineColor","x"),l.lineWidth=s.getOptionForAxis("gridLineWidth","x"),n=0;n<o.length;n++)i=e(p.x+o[n][0]*p.w),r=a(p.y+p.h),l.beginPath(),l.moveTo(i,r),l.lineTo(i,p.y),l.closePath(),l.stroke();y&&l.uninstallPattern(),l.restore()}},t.prototype.destroy=function(){},t}(),Dygraph.Plugins.Legend=function(){"use strict";var t=function(){this.legend_div_=null,this.is_generated_div_=!1};t.prototype.toString=function(){return"Legend Plugin"};var e;t.prototype.activate=function(t){var e,a=t.getOption("labelsDivWidth"),i=t.getOption("labelsDiv");if(i&&null!==i)e="string"==typeof i||i instanceof String?document.getElementById(i):i;else{var r={position:"absolute",fontSize:"14px",zIndex:10,width:a+"px",top:"0px",left:t.size().width-a-2+"px",background:"white",lineHeight:"normal",textAlign:"left",overflow:"hidden"};Dygraph.update(r,t.getOption("labelsDivStyles")),e=document.createElement("div"),e.className="dygraph-legend";for(var n in r)if(r.hasOwnProperty(n))try{e.style[n]=r[n]}catch(o){console.warn("You are using unsupported css properties for your browser in labelsDivStyles")}t.graphDiv.appendChild(e),this.is_generated_div_=!0}return this.legend_div_=e,this.one_em_width_=10,{select:this.select,deselect:this.deselect,predraw:this.predraw,didDrawChart:this.didDrawChart}};var a=function(t){var e=document.createElement("span");e.setAttribute("style","margin: 0; padding: 0 0 0 1em; border: 0;"),t.appendChild(e);var a=e.offsetWidth;return t.removeChild(e),a},i=function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};return t.prototype.select=function(e){var a=e.selectedX,i=e.selectedPoints,r=e.selectedRow,n=e.dygraph.getOption("legend");if("never"===n)return void(this.legend_div_.style.display="none");if("follow"===n){var o=e.dygraph.plotter_.area,s=e.dygraph.getOption("labelsDivWidth"),l=e.dygraph.getOptionForAxis("axisLabelWidth","y"),h=i[0].x*o.w+20,p=i[0].y*o.h-20;h+s+1>window.scrollX+window.innerWidth&&(h=h-40-s-(l-o.x)),e.dygraph.graphDiv.appendChild(this.legend_div_),this.legend_div_.style.left=l+h+"px",this.legend_div_.style.top=p+"px"}var g=t.generateLegendHTML(e.dygraph,a,i,this.one_em_width_,r);this.legend_div_.innerHTML=g,this.legend_div_.style.display=""},t.prototype.deselect=function(e){var i=e.dygraph.getOption("legend");"always"!==i&&(this.legend_div_.style.display="none");var r=a(this.legend_div_);this.one_em_width_=r;var n=t.generateLegendHTML(e.dygraph,void 0,void 0,r,null);this.legend_div_.innerHTML=n},t.prototype.didDrawChart=function(t){this.deselect(t)},t.prototype.predraw=function(t){if(this.is_generated_div_){t.dygraph.graphDiv.appendChild(this.legend_div_);var e=t.dygraph.plotter_.area,a=t.dygraph.getOption("labelsDivWidth");this.legend_div_.style.left=e.x+e.w-a-1+"px",this.legend_div_.style.top=e.y+"px",this.legend_div_.style.width=a+"px"}},t.prototype.destroy=function(){this.legend_div_=null},t.generateLegendHTML=function(t,a,r,n,o){if(t.getOption("showLabelsOnHighlight")!==!0)return"";var s,l,h,p,g,d=t.getLabels();if("undefined"==typeof a){if("always"!=t.getOption("legend"))return"";for(l=t.getOption("labelsSeparateLines"),s="",h=1;h<d.length;h++){var u=t.getPropertiesForSeries(d[h]);u.visible&&(""!==s&&(s+=l?"<br/>":" "),g=t.getOption("strokePattern",d[h]),p=e(g,u.color,n),s+="<span style='font-weight: bold; color: "+u.color+";'>"+p+" "+i(d[h])+"</span>")}return s}var c=t.optionsViewForAxis_("x"),y=c("valueFormatter");s=y.call(t,a,c,d[0],t,o,0),""!==s&&(s+=":");var _=[],v=t.numAxes();for(h=0;v>h;h++)_[h]=t.optionsViewForAxis_("y"+(h?1+h:""));var f=t.getOption("labelsShowZeroValues");l=t.getOption("labelsSeparateLines");var x=t.getHighlightSeries();for(h=0;h<r.length;h++){var m=r[h];if((0!==m.yval||f)&&Dygraph.isOK(m.canvasy)){l&&(s+="<br/>");var u=t.getPropertiesForSeries(m.name),D=_[u.axis-1],w=D("valueFormatter"),A=w.call(t,m.yval,D,m.name,t,o,d.indexOf(m.name)),b=m.name==x?" class='highlight'":"";s+="<span"+b+"> <b><span style='color: "+u.color+";'>"+i(m.name)+"</span></b>:&#160;"+A+"</span>"}}return s},e=function(t,e,a){var i=/MSIE/.test(navigator.userAgent)&&!window.opera;if(i)return"&mdash;";if(!t||t.length<=1)return'<div style="display: inline-block; position: relative; bottom: .5ex; padding-left: 1em; height: 1px; border-bottom: 2px solid '+e+';"></div>';var r,n,o,s,l,h=0,p=0,g=[];for(r=0;r<=t.length;r++)h+=t[r%t.length];if(l=Math.floor(a/(h-t[0])),l>1){for(r=0;r<t.length;r++)g[r]=t[r]/a;p=g.length}else{for(l=1,r=0;r<t.length;r++)g[r]=t[r]/h;p=g.length+1}var d="";for(n=0;l>n;n++)for(r=0;p>r;r+=2)o=g[r%g.length],s=r<t.length?g[(r+1)%g.length]:0,d+='<div style="display: inline-block; position: relative; bottom: .5ex; margin-right: '+s+"em; padding-left: "+o+"em; height: 1px; border-bottom: 2px solid "+e+';"></div>';return d},t}(),Dygraph.Plugins.RangeSelector=function(){"use strict";var t=function(){this.isIE_=/MSIE/.test(navigator.userAgent)&&!window.opera,this.hasTouchInterface_="undefined"!=typeof TouchEvent,this.isMobileDevice_=/mobile|android/gi.test(navigator.appVersion),this.interfaceCreated_=!1};return t.prototype.toString=function(){return"RangeSelector Plugin"},t.prototype.activate=function(t){return this.dygraph_=t,this.isUsingExcanvas_=t.isUsingExcanvas_,this.getOption_("showRangeSelector")&&this.createInterface_(),{layout:this.reserveSpace_,predraw:this.renderStaticLayer_,didDrawChart:this.renderInteractiveLayer_}},t.prototype.destroy=function(){this.bgcanvas_=null,this.fgcanvas_=null,this.leftZoomHandle_=null,this.rightZoomHandle_=null,this.iePanOverlay_=null},t.prototype.getOption_=function(t,e){return this.dygraph_.getOption(t,e)},t.prototype.setDefaultOption_=function(t,e){this.dygraph_.attrs_[t]=e},t.prototype.createInterface_=function(){this.createCanvases_(),this.isUsingExcanvas_&&this.createIEPanOverlay_(),this.createZoomHandles_(),this.initInteraction_(),this.getOption_("animatedZooms")&&(console.warn("Animated zooms and range selector are not compatible; disabling animatedZooms."),this.dygraph_.updateOptions({animatedZooms:!1},!0)),this.interfaceCreated_=!0,this.addToGraph_()},t.prototype.addToGraph_=function(){var t=this.graphDiv_=this.dygraph_.graphDiv;t.appendChild(this.bgcanvas_),t.appendChild(this.fgcanvas_),t.appendChild(this.leftZoomHandle_),t.appendChild(this.rightZoomHandle_)},t.prototype.removeFromGraph_=function(){var t=this.graphDiv_;t.removeChild(this.bgcanvas_),t.removeChild(this.fgcanvas_),t.removeChild(this.leftZoomHandle_),t.removeChild(this.rightZoomHandle_),this.graphDiv_=null},t.prototype.reserveSpace_=function(t){this.getOption_("showRangeSelector")&&t.reserveSpaceBottom(this.getOption_("rangeSelectorHeight")+4)},t.prototype.renderStaticLayer_=function(){this.updateVisibility_()&&(this.resize_(),this.drawStaticLayer_())},t.prototype.renderInteractiveLayer_=function(){this.updateVisibility_()&&!this.isChangingRange_&&(this.placeZoomHandles_(),this.drawInteractiveLayer_())},t.prototype.updateVisibility_=function(){var t=this.getOption_("showRangeSelector");if(t)this.interfaceCreated_?this.graphDiv_&&this.graphDiv_.parentNode||this.addToGraph_():this.createInterface_();else if(this.graphDiv_){this.removeFromGraph_();var e=this.dygraph_;setTimeout(function(){e.width_=0,e.resize()},1)}return t},t.prototype.resize_=function(){function t(t,e,a){var i=Dygraph.getContextPixelRatio(e);t.style.top=a.y+"px",t.style.left=a.x+"px",t.width=a.w*i,t.height=a.h*i,t.style.width=a.w+"px",t.style.height=a.h+"px",1!=i&&e.scale(i,i)}var e=this.dygraph_.layout_.getPlotArea(),a=0;this.dygraph_.getOptionForAxis("drawAxis","x")&&(a=this.getOption_("xAxisHeight")||this.getOption_("axisLabelFontSize")+2*this.getOption_("axisTickSize")),this.canvasRect_={x:e.x,y:e.y+e.h+a+4,w:e.w,h:this.getOption_("rangeSelectorHeight")},t(this.bgcanvas_,this.bgcanvas_ctx_,this.canvasRect_),t(this.fgcanvas_,this.fgcanvas_ctx_,this.canvasRect_)},t.prototype.createCanvases_=function(){this.bgcanvas_=Dygraph.createCanvas(),this.bgcanvas_.className="dygraph-rangesel-bgcanvas",this.bgcanvas_.style.position="absolute",this.bgcanvas_.style.zIndex=9,this.bgcanvas_ctx_=Dygraph.getContext(this.bgcanvas_),this.fgcanvas_=Dygraph.createCanvas(),this.fgcanvas_.className="dygraph-rangesel-fgcanvas",this.fgcanvas_.style.position="absolute",this.fgcanvas_.style.zIndex=9,this.fgcanvas_.style.cursor="default",this.fgcanvas_ctx_=Dygraph.getContext(this.fgcanvas_)},t.prototype.createIEPanOverlay_=function(){this.iePanOverlay_=document.createElement("div"),this.iePanOverlay_.style.position="absolute",this.iePanOverlay_.style.backgroundColor="white",this.iePanOverlay_.style.filter="alpha(opacity=0)",this.iePanOverlay_.style.display="none",this.iePanOverlay_.style.cursor="move",this.fgcanvas_.appendChild(this.iePanOverlay_)},t.prototype.createZoomHandles_=function(){var t=new Image;t.className="dygraph-rangesel-zoomhandle",t.style.position="absolute",t.style.zIndex=10,t.style.visibility="hidden",t.style.cursor="col-resize",/MSIE 7/.test(navigator.userAgent)?(t.width=7,t.height=14,t.style.backgroundColor="white",t.style.border="1px solid #333333"):(t.width=9,t.height=16,t.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAAZiS0dEANAAzwDP4Z7KegAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9sHGw0cMqdt1UwAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAaElEQVQoz+3SsRFAQBCF4Z9WJM8KCDVwownl6YXsTmCUsyKGkZzcl7zkz3YLkypgAnreFmDEpHkIwVOMfpdi9CEEN2nGpFdwD03yEqDtOgCaun7sqSTDH32I1pQA2Pb9sZecAxc5r3IAb21d6878xsAAAAAASUVORK5CYII="),this.isMobileDevice_&&(t.width*=2,t.height*=2),this.leftZoomHandle_=t,this.rightZoomHandle_=t.cloneNode(!1)},t.prototype.initInteraction_=function(){var t,e,a,i,r,n,o,s,l,h,p,g,d,u,c=this,y=document,_=0,v=null,f=!1,x=!1,m=!this.isMobileDevice_&&!this.isUsingExcanvas_,D=new Dygraph.IFrameTarp;t=function(t){var e=c.dygraph_.xAxisExtremes(),a=(e[1]-e[0])/c.canvasRect_.w,i=e[0]+(t.leftHandlePos-c.canvasRect_.x)*a,r=e[0]+(t.rightHandlePos-c.canvasRect_.x)*a;return[i,r]},e=function(t){return Dygraph.cancelEvent(t),f=!0,_=t.clientX,v=t.target?t.target:t.srcElement,("mousedown"===t.type||"dragstart"===t.type)&&(Dygraph.addEvent(y,"mousemove",a),Dygraph.addEvent(y,"mouseup",i)),c.fgcanvas_.style.cursor="col-resize",D.cover(),!0},a=function(t){if(!f)return!1;Dygraph.cancelEvent(t);var e=t.clientX-_;if(Math.abs(e)<4)return!0;_=t.clientX;var a,i=c.getZoomHandleStatus_();v==c.leftZoomHandle_?(a=i.leftHandlePos+e,a=Math.min(a,i.rightHandlePos-v.width-3),a=Math.max(a,c.canvasRect_.x)):(a=i.rightHandlePos+e,a=Math.min(a,c.canvasRect_.x+c.canvasRect_.w),a=Math.max(a,i.leftHandlePos+v.width+3));var n=v.width/2;return v.style.left=a-n+"px",c.drawInteractiveLayer_(),m&&r(),!0},i=function(t){return f?(f=!1,D.uncover(),Dygraph.removeEvent(y,"mousemove",a),Dygraph.removeEvent(y,"mouseup",i),c.fgcanvas_.style.cursor="default",m||r(),!0):!1},r=function(){try{var e=c.getZoomHandleStatus_();if(c.isChangingRange_=!0,e.isZoomed){var a=t(e);c.dygraph_.doZoomXDates_(a[0],a[1])}else c.dygraph_.resetZoom()}finally{c.isChangingRange_=!1}},n=function(t){if(c.isUsingExcanvas_)return t.srcElement==c.iePanOverlay_;var e=c.leftZoomHandle_.getBoundingClientRect(),a=e.left+e.width/2;e=c.rightZoomHandle_.getBoundingClientRect();var i=e.left+e.width/2;return t.clientX>a&&t.clientX<i},o=function(t){return!x&&n(t)&&c.getZoomHandleStatus_().isZoomed?(Dygraph.cancelEvent(t),x=!0,_=t.clientX,"mousedown"===t.type&&(Dygraph.addEvent(y,"mousemove",s),Dygraph.addEvent(y,"mouseup",l)),!0):!1},s=function(t){if(!x)return!1;Dygraph.cancelEvent(t);var e=t.clientX-_;if(Math.abs(e)<4)return!0;_=t.clientX;var a=c.getZoomHandleStatus_(),i=a.leftHandlePos,r=a.rightHandlePos,n=r-i;i+e<=c.canvasRect_.x?(i=c.canvasRect_.x,r=i+n):r+e>=c.canvasRect_.x+c.canvasRect_.w?(r=c.canvasRect_.x+c.canvasRect_.w,i=r-n):(i+=e,r+=e);var o=c.leftZoomHandle_.width/2;return c.leftZoomHandle_.style.left=i-o+"px",c.rightZoomHandle_.style.left=r-o+"px",c.drawInteractiveLayer_(),m&&h(),!0},l=function(t){return x?(x=!1,Dygraph.removeEvent(y,"mousemove",s),Dygraph.removeEvent(y,"mouseup",l),m||h(),!0):!1},h=function(){try{c.isChangingRange_=!0,c.dygraph_.dateWindow_=t(c.getZoomHandleStatus_()),c.dygraph_.drawGraph_(!1)}finally{c.isChangingRange_=!1}},p=function(t){if(!f&&!x){var e=n(t)?"move":"default";e!=c.fgcanvas_.style.cursor&&(c.fgcanvas_.style.cursor=e)}},g=function(t){"touchstart"==t.type&&1==t.targetTouches.length?e(t.targetTouches[0])&&Dygraph.cancelEvent(t):"touchmove"==t.type&&1==t.targetTouches.length?a(t.targetTouches[0])&&Dygraph.cancelEvent(t):i(t)},d=function(t){"touchstart"==t.type&&1==t.targetTouches.length?o(t.targetTouches[0])&&Dygraph.cancelEvent(t):"touchmove"==t.type&&1==t.targetTouches.length?s(t.targetTouches[0])&&Dygraph.cancelEvent(t):l(t)},u=function(t,e){for(var a=["touchstart","touchend","touchmove","touchcancel"],i=0;i<a.length;i++)c.dygraph_.addAndTrackEvent(t,a[i],e)},this.setDefaultOption_("interactionModel",Dygraph.Interaction.dragIsPanInteractionModel),this.setDefaultOption_("panEdgeFraction",1e-4);var w=window.opera?"mousedown":"dragstart";this.dygraph_.addAndTrackEvent(this.leftZoomHandle_,w,e),this.dygraph_.addAndTrackEvent(this.rightZoomHandle_,w,e),this.isUsingExcanvas_?this.dygraph_.addAndTrackEvent(this.iePanOverlay_,"mousedown",o):(this.dygraph_.addAndTrackEvent(this.fgcanvas_,"mousedown",o),this.dygraph_.addAndTrackEvent(this.fgcanvas_,"mousemove",p)),this.hasTouchInterface_&&(u(this.leftZoomHandle_,g),u(this.rightZoomHandle_,g),u(this.fgcanvas_,d))},t.prototype.drawStaticLayer_=function(){var t=this.bgcanvas_ctx_;t.clearRect(0,0,this.canvasRect_.w,this.canvasRect_.h);try{this.drawMiniPlot_()}catch(e){console.warn(e)}var a=.5;this.bgcanvas_ctx_.lineWidth=1,t.strokeStyle="gray",t.beginPath(),t.moveTo(a,a),t.lineTo(a,this.canvasRect_.h-a),t.lineTo(this.canvasRect_.w-a,this.canvasRect_.h-a),t.lineTo(this.canvasRect_.w-a,a),t.stroke()},t.prototype.drawMiniPlot_=function(){var t=this.getOption_("rangeSelectorPlotFillColor"),e=this.getOption_("rangeSelectorPlotStrokeColor");if(t||e){var a=this.getOption_("stepPlot"),i=this.computeCombinedSeriesAndLimits_(),r=i.yMax-i.yMin,n=this.bgcanvas_ctx_,o=.5,s=this.dygraph_.xAxisExtremes(),l=Math.max(s[1]-s[0],1e-30),h=(this.canvasRect_.w-o)/l,p=(this.canvasRect_.h-o)/r,g=this.canvasRect_.w-o,d=this.canvasRect_.h-o,u=null,c=null;n.beginPath(),n.moveTo(o,d);for(var y=0;y<i.data.length;y++){var _=i.data[y],v=null!==_[0]?(_[0]-s[0])*h:0/0,f=null!==_[1]?d-(_[1]-i.yMin)*p:0/0;(a||null===u||Math.round(v)!=Math.round(u))&&(isFinite(v)&&isFinite(f)?(null===u?n.lineTo(v,d):a&&n.lineTo(v,c),n.lineTo(v,f),u=v,c=f):(null!==u&&(a?(n.lineTo(v,c),n.lineTo(v,d)):n.lineTo(u,d)),u=c=null))}if(n.lineTo(g,d),n.closePath(),t){var x=this.bgcanvas_ctx_.createLinearGradient(0,0,0,d);x.addColorStop(0,"white"),x.addColorStop(1,t),this.bgcanvas_ctx_.fillStyle=x,n.fill()}e&&(this.bgcanvas_ctx_.strokeStyle=e,this.bgcanvas_ctx_.lineWidth=1.5,n.stroke())}},t.prototype.computeCombinedSeriesAndLimits_=function(){var t,e=this.dygraph_,a=this.getOption_("logscale"),i=e.numColumns(),r=e.getLabels(),n=new Array(i),o=!1;for(t=1;i>t;t++){var s=this.getOption_("showInRangeSelector",r[t]);n[t]=s,null!==s&&(o=!0)}if(!o)for(t=0;t<n.length;t++)n[t]=!0;var l=[],h=e.dataHandler_,p=e.attributes_;for(t=1;t<e.numColumns();t++)if(n[t]){var g=h.extractSeries(e.rawData_,t,p);e.rollPeriod()>1&&(g=h.rollingAverage(g,e.rollPeriod(),p)),l.push(g)}var d=[];for(t=0;t<l[0].length;t++){for(var u=0,c=0,y=0;y<l.length;y++){var _=l[y][t][1];null===_||isNaN(_)||(c++,u+=_)}d.push([l[0][t][0],u/c])}var v=Number.MAX_VALUE,f=-Number.MAX_VALUE;for(t=0;t<d.length;t++){var x=d[t][1];null!==x&&isFinite(x)&&(!a||x>0)&&(v=Math.min(v,x),f=Math.max(f,x))}var m=.25;if(a)for(f=Dygraph.log10(f),f+=f*m,v=Dygraph.log10(v),t=0;t<d.length;t++)d[t][1]=Dygraph.log10(d[t][1]);else{var D,w=f-v;D=w<=Number.MIN_VALUE?f*m:w*m,f+=D,v-=D}return{data:d,yMin:v,yMax:f}},t.prototype.placeZoomHandles_=function(){var t=this.dygraph_.xAxisExtremes(),e=this.dygraph_.xAxisRange(),a=t[1]-t[0],i=Math.max(0,(e[0]-t[0])/a),r=Math.max(0,(t[1]-e[1])/a),n=this.canvasRect_.x+this.canvasRect_.w*i,o=this.canvasRect_.x+this.canvasRect_.w*(1-r),s=Math.max(this.canvasRect_.y,this.canvasRect_.y+(this.canvasRect_.h-this.leftZoomHandle_.height)/2),l=this.leftZoomHandle_.width/2;this.leftZoomHandle_.style.left=n-l+"px",this.leftZoomHandle_.style.top=s+"px",this.rightZoomHandle_.style.left=o-l+"px",this.rightZoomHandle_.style.top=this.leftZoomHandle_.style.top,this.leftZoomHandle_.style.visibility="visible",this.rightZoomHandle_.style.visibility="visible"},t.prototype.drawInteractiveLayer_=function(){var t=this.fgcanvas_ctx_;t.clearRect(0,0,this.canvasRect_.w,this.canvasRect_.h);var e=1,a=this.canvasRect_.w-e,i=this.canvasRect_.h-e,r=this.getZoomHandleStatus_();if(t.strokeStyle="black",r.isZoomed){var n=Math.max(e,r.leftHandlePos-this.canvasRect_.x),o=Math.min(a,r.rightHandlePos-this.canvasRect_.x);t.fillStyle="rgba(240, 240, 240, 0.6)",t.fillRect(0,0,n,this.canvasRect_.h),t.fillRect(o,0,this.canvasRect_.w-o,this.canvasRect_.h),t.beginPath(),t.moveTo(e,e),t.lineTo(n,e),t.lineTo(n,i),t.lineTo(o,i),t.lineTo(o,e),t.lineTo(a,e),t.stroke(),this.isUsingExcanvas_&&(this.iePanOverlay_.style.width=o-n+"px",this.iePanOverlay_.style.left=n+"px",this.iePanOverlay_.style.height=i+"px",this.iePanOverlay_.style.display="inline")}else t.beginPath(),t.moveTo(e,e),t.lineTo(e,i),t.lineTo(a,i),t.lineTo(a,e),t.stroke(),this.iePanOverlay_&&(this.iePanOverlay_.style.display="none")},t.prototype.getZoomHandleStatus_=function(){var t=this.leftZoomHandle_.width/2,e=parseFloat(this.leftZoomHandle_.style.left)+t,a=parseFloat(this.rightZoomHandle_.style.left)+t;return{leftHandlePos:e,rightHandlePos:a,isZoomed:e-1>this.canvasRect_.x||a+1<this.canvasRect_.x+this.canvasRect_.w}},t}(),Dygraph.PLUGINS.push(Dygraph.Plugins.Legend,Dygraph.Plugins.Axes,Dygraph.Plugins.RangeSelector,Dygraph.Plugins.ChartLabels,Dygraph.Plugins.Annotations,Dygraph.Plugins.Grid),Dygraph.DataHandler=function(){},Dygraph.DataHandlers={},function(){"use strict";var t=Dygraph.DataHandler;t.X=0,t.Y=1,t.EXTRAS=2,t.prototype.extractSeries=function(t,e,a){},t.prototype.seriesToPoints=function(e,a,i){for(var r=[],n=0;n<e.length;++n){var o=e[n],s=o[1],l=null===s?null:t.parseFloat(s),h={x:0/0,y:0/0,xval:t.parseFloat(o[0]),yval:l,name:a,idx:n+i};r.push(h)}return this.onPointsCreated_(e,r),r},t.prototype.onPointsCreated_=function(t,e){},t.prototype.rollingAverage=function(t,e,a){},t.prototype.getExtremeYValues=function(t,e,a){},t.prototype.onLineEvaluated=function(t,e,a){},t.prototype.computeYInterpolation_=function(t,e,a){var i=e[1]-t[1],r=e[0]-t[0],n=i/r,o=(a-t[0])*n;return t[1]+o},t.prototype.getIndexesInWindow_=function(t,e){var a=0,i=t.length-1;if(e){for(var r=0,n=e[0],o=e[1];r<t.length-1&&t[r][0]<n;)a++,r++;for(r=t.length-1;r>0&&t[r][0]>o;)i--,r--}return i>=a?[a,i]:[0,t.length-1]},t.parseFloat=function(t){return null===t?0/0:t}}(),function(){"use strict";Dygraph.DataHandlers.DefaultHandler=function(){};var t=Dygraph.DataHandlers.DefaultHandler;t.prototype=new Dygraph.DataHandler,t.prototype.extractSeries=function(t,e,a){for(var i=[],r=a.get("logscale"),n=0;n<t.length;n++){var o=t[n][0],s=t[n][e];r&&0>=s&&(s=null),i.push([o,s])}return i},t.prototype.rollingAverage=function(t,e,a){e=Math.min(e,t.length);var i,r,n,o,s,l=[];if(1==e)return t;for(i=0;i<t.length;i++){for(o=0,s=0,r=Math.max(0,i-e+1);i+1>r;r++)n=t[r][1],null===n||isNaN(n)||(s++,o+=t[r][1]);s?l[i]=[t[i][0],o/s]:l[i]=[t[i][0],null]}return l},t.prototype.getExtremeYValues=function(t,e,a){for(var i,r=null,n=null,o=0,s=t.length-1,l=o;s>=l;l++)i=t[l][1],null===i||isNaN(i)||((null===n||i>n)&&(n=i),(null===r||r>i)&&(r=i));return[r,n]}}(),function(){"use strict";Dygraph.DataHandlers.DefaultFractionHandler=function(){};var t=Dygraph.DataHandlers.DefaultFractionHandler;t.prototype=new Dygraph.DataHandlers.DefaultHandler,t.prototype.extractSeries=function(t,e,a){for(var i,r,n,o,s,l,h=[],p=100,g=a.get("logscale"),d=0;d<t.length;d++)i=t[d][0],n=t[d][e],g&&null!==n&&(n[0]<=0||n[1]<=0)&&(n=null),null!==n?(o=n[0],s=n[1],null===o||isNaN(o)?h.push([i,o,[o,s]]):(l=s?o/s:0,r=p*l,h.push([i,r,[o,s]]))):h.push([i,null,[null,null]]);return h},t.prototype.rollingAverage=function(t,e,a){e=Math.min(e,t.length);var i,r=[],n=0,o=0,s=100;for(i=0;i<t.length;i++){n+=t[i][2][0],o+=t[i][2][1],i-e>=0&&(n-=t[i-e][2][0],o-=t[i-e][2][1]);var l=t[i][0],h=o?n/o:0;r[i]=[l,s*h]}return r}}(),function(){"use strict";Dygraph.DataHandlers.BarsHandler=function(){Dygraph.DataHandler.call(this)},Dygraph.DataHandlers.BarsHandler.prototype=new Dygraph.DataHandler;var t=Dygraph.DataHandlers.BarsHandler;t.prototype.extractSeries=function(t,e,a){},t.prototype.rollingAverage=function(t,e,a){},t.prototype.onPointsCreated_=function(t,e){for(var a=0;a<t.length;++a){var i=t[a],r=e[a];r.y_top=0/0,r.y_bottom=0/0,r.yval_minus=Dygraph.DataHandler.parseFloat(i[2][0]),r.yval_plus=Dygraph.DataHandler.parseFloat(i[2][1])}},t.prototype.getExtremeYValues=function(t,e,a){for(var i,r=null,n=null,o=0,s=t.length-1,l=o;s>=l;l++)if(i=t[l][1],null!==i&&!isNaN(i)){var h=t[l][2][0],p=t[l][2][1];h>i&&(h=i),i>p&&(p=i),(null===n||p>n)&&(n=p),(null===r||r>h)&&(r=h)}return[r,n]},t.prototype.onLineEvaluated=function(t,e,a){for(var i,r=0;r<t.length;r++)i=t[r],i.y_top=DygraphLayout.calcYNormal_(e,i.yval_minus,a),i.y_bottom=DygraphLayout.calcYNormal_(e,i.yval_plus,a)}}(),function(){"use strict";Dygraph.DataHandlers.CustomBarsHandler=function(){};var t=Dygraph.DataHandlers.CustomBarsHandler;t.prototype=new Dygraph.DataHandlers.BarsHandler,t.prototype.extractSeries=function(t,e,a){for(var i,r,n,o=[],s=a.get("logscale"),l=0;l<t.length;l++)i=t[l][0],n=t[l][e],s&&null!==n&&(n[0]<=0||n[1]<=0||n[2]<=0)&&(n=null),null!==n?(r=n[1],o.push(null===r||isNaN(r)?[i,r,[r,r]]:[i,r,[n[0],n[2]]])):o.push([i,null,[null,null]]);return o},t.prototype.rollingAverage=function(t,e,a){e=Math.min(e,t.length);var i,r,n,o,s,l,h,p=[];for(r=0,o=0,n=0,s=0,l=0;l<t.length;l++){if(i=t[l][1],h=t[l][2],p[l]=t[l],null===i||isNaN(i)||(r+=h[0],o+=i,n+=h[1],s+=1),l-e>=0){var g=t[l-e];null===g[1]||isNaN(g[1])||(r-=g[2][0],o-=g[1],n-=g[2][1],s-=1)}s?p[l]=[t[l][0],1*o/s,[1*r/s,1*n/s]]:p[l]=[t[l][0],null,[null,null]]}return p}}(),function(){"use strict";Dygraph.DataHandlers.ErrorBarsHandler=function(){};var t=Dygraph.DataHandlers.ErrorBarsHandler;t.prototype=new Dygraph.DataHandlers.BarsHandler,t.prototype.extractSeries=function(t,e,a){for(var i,r,n,o,s=[],l=a.get("sigma"),h=a.get("logscale"),p=0;p<t.length;p++)i=t[p][0],o=t[p][e],h&&null!==o&&(o[0]<=0||o[0]-l*o[1]<=0)&&(o=null),null!==o?(r=o[0],null===r||isNaN(r)?s.push([i,r,[r,r,r]]):(n=l*o[1],s.push([i,r,[r-n,r+n,o[1]]]))):s.push([i,null,[null,null,null]]);return s},t.prototype.rollingAverage=function(t,e,a){e=Math.min(e,t.length);var i,r,n,o,s,l,h,p,g,d=[],u=a.get("sigma");for(i=0;i<t.length;i++){for(s=0,p=0,l=0,r=Math.max(0,i-e+1);i+1>r;r++)n=t[r][1],null===n||isNaN(n)||(l++,s+=n,p+=Math.pow(t[r][2][2],2));l?(h=Math.sqrt(p)/l,g=s/l,d[i]=[t[i][0],g,[g-u*h,g+u*h]]):(o=1==e?t[i][1]:null,d[i]=[t[i][0],o,[o,o]])}return d}}(),function(){"use strict";Dygraph.DataHandlers.FractionsBarsHandler=function(){};var t=Dygraph.DataHandlers.FractionsBarsHandler;t.prototype=new Dygraph.DataHandlers.BarsHandler,t.prototype.extractSeries=function(t,e,a){for(var i,r,n,o,s,l,h,p,g=[],d=100,u=a.get("sigma"),c=a.get("logscale"),y=0;y<t.length;y++)i=t[y][0],n=t[y][e],c&&null!==n&&(n[0]<=0||n[1]<=0)&&(n=null),null!==n?(o=n[0],s=n[1],null===o||isNaN(o)?g.push([i,o,[o,o,o,s]]):(l=s?o/s:0,h=s?u*Math.sqrt(l*(1-l)/s):1,p=d*h,r=d*l,g.push([i,r,[r-p,r+p,o,s]]))):g.push([i,null,[null,null,null,null]]);return g},t.prototype.rollingAverage=function(t,e,a){e=Math.min(e,t.length);var i,r,n,o,s=[],l=a.get("sigma"),h=a.get("wilsonInterval"),p=0,g=0,d=100;for(n=0;n<t.length;n++){p+=t[n][2][2],g+=t[n][2][3],n-e>=0&&(p-=t[n-e][2][2],g-=t[n-e][2][3]);var u=t[n][0],c=g?p/g:0;if(h)if(g){var y=0>c?0:c,_=g,v=l*Math.sqrt(y*(1-y)/_+l*l/(4*_*_)),f=1+l*l/g;i=(y+l*l/(2*g)-v)/f,r=(y+l*l/(2*g)+v)/f,s[n]=[u,y*d,[i*d,r*d]]}else s[n]=[u,0,[0,0]];else o=g?l*Math.sqrt(c*(1-c)/g):1,s[n]=[u,d*c,[d*(c-o),d*(c+o)]]}return s}}();
    //# sourceMappingURL=dygraph-combined.js.map

/***/ }),

/***/ "txU4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kiwi-nav"},[_c('span',{on:{"click":function($event){$event.preventDefault();_vm.leftClick($event)}}},[_vm._v(_vm._s(_vm.leftText))]),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('span',{on:{"click":function($event){$event.preventDefault();_vm.close($event)}}},[_vm._v(_vm._s(_vm.rightText))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "x35b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("7+uW");
var App_vue_1 = __webpack_require__("M93x");
var router_1 = __webpack_require__("YaEn");
vue_1.default.config.productionTip = false;
new vue_1.default({
    el: '#app',
    router: router_1.default,
    template: '<App/>',
    components: { App: App_vue_1.default }
});


/***/ }),

/***/ "yI9p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yxZK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var URLTools=(function(){
    function URLTools () {
    }
    URLTools.prototype.getQueryStringByQuery=function(urlQuery,key){
        var theRequest = new Object();
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
        var r = urlQuery.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    }
    
    URLTools.prototype.getQueryString=function(key){
        return this.getQueryStringByQuery(location.search, key);
    }
    
    return URLTools;
})();
/* harmony default export */ __webpack_exports__["a"] = (URLTools);


/***/ })

},["x35b"]);
//# sourceMappingURL=app.8af2f602ac25a31d172c.js.map