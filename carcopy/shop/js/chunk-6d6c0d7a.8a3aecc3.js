(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d6c0d7a"],{"02bf":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky",style:t.getPosition},[n("div",{staticClass:"sticky-warp"},[t._t("default")],2)])},r=[],o=(n("a9e3"),n("ac1f"),n("466d"),{data:function(){return{}},computed:{getPosition:function(){var t=this.cssSupport("position","sticky")?"sticky":"relative";return"position:"+t}},props:{},beforeMount:function(){},mounted:function(){this.init()},deactivated:function(){if(!this.cssSupport("position","sticky")){var t=this.$el.querySelector(".sticky-warp");t.position="absolute"}},methods:{init:function(){if(!this.cssSupport("position","sticky")){var t=this.$el,e=this.$el.parentNode,n=this.$el.querySelector(".sticky-warp"),i=this.getNumberValue(document.defaultView.getComputedStyle(t).top);this.addScrollListen(e,(function(e){t.getBoundingClientRect().top<=i&&(n.style.position="fixed"),t.getBoundingClientRect().top>=0&&"absolute"!=n.style.position&&(n.style.position="absolute")}))}},cssSupport:function(t,e){var n=document.createElement("div");return t in n.style&&(n.style[t]=e,n.style[t]===e)},getNumberValue:function(t){var e=String(t).match(/^\-?\+?[0-9]+/g);return e?Number(e):void 0},addScrollListen:function(t,e){t.addEventListener("y-scroll",(function(t){e&&e(t)}))}}}),a=o,s=(n("91d6"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,"6ae45c62",null);e["a"]=c.exports},4176:function(t,e,n){"use strict";var i=n("91b3"),r=n.n(i);r.a},"466d":function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),o=n("50c4"),a=n("1d80"),s=n("8aa5"),c=n("14c3");i("match",1,(function(t,e,n){return[function(e){var n=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),u=String(this);if(!a.global)return c(a,u);var l=a.unicode;a.lastIndex=0;var f,d=[],p=0;while(null!==(f=c(a,u))){var v=String(f[0]);d[p]=v,""===v&&(a.lastIndex=s(u,o(a.lastIndex),l)),p++}return 0===p?null:d}]}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("5899"),o="["+r+"]",a=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,n){var i=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var o,a;return r&&"function"==typeof(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&r(t,a),t}},8608:function(t,e,n){},"91b3":function(t,e,n){},"91d6":function(t,e,n){"use strict";var i=n("8608"),r=n.n(i);r.a},a9e3:function(t,e,n){"use strict";var i=n("83ab"),r=n("da84"),o=n("94ca"),a=n("6eeb"),s=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),p=n("241c").f,v=n("06cf").f,h=n("9bf2").f,y=n("58a8").trim,b="Number",g=r[b],N=g.prototype,I=c(d(N))==b,_=function(t){var e,n,i,r,o,a,s,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=y(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(o=u.slice(2),a=o.length,s=0;s<a;s++)if(c=o.charCodeAt(s),c<48||c>r)return NaN;return parseInt(o,i)}return+u};if(o(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var S,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(I?f((function(){N.valueOf.call(n)})):c(n)!=b)?u(new g(_(e)),n,E):_(e)},k=i?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;k.length>m;m++)s(g,S=k[m])&&!s(E,S)&&h(E,S,v(g,S));E.prototype=N,N.constructor=E,a(r,b,E)}},feda:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(10,(function(e,i){return n("div",[n("sticky-slot",{staticClass:"stickyTop"},[n("div",{staticClass:"tab"},[t._v(" 假装这是一个tab栏，当页面滚动的时候要固定在顶部"+t._s(i)+" ")])]),n("ul",t._l(t.headerData,(function(e,i){return n("li",{key:i},[t._v(t._s(e))])})),0),n("ul",t._l(t.footerData,(function(e,i){return n("li",{key:i},[t._v(t._s(e))])})),0)],1)})),0)},r=[],o=n("02bf"),a={components:{stickySlot:o["a"]},data:function(){return{headerData:[],footerData:[]}},created:function(){for(var t=0;t<20;t++)this.headerData.push("第"+t+"条数据");for(var e=20;e<500;e++)this.footerData.push("第"+e+"条数据")}},s=a,c=(n("4176"),n("2877")),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6d6c0d7a.8a3aecc3.js.map