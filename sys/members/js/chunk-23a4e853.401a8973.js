(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23a4e853"],{"254d":function(t,e,a){},"8ad6":function(t,e,a){"use strict";var s=a("254d"),n=a.n(s);n.a},ede4:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Login"},[a("div",{staticClass:"LoginBox"},[a("div",{staticClass:"log-title"},[t._v("注册登录查看更多内容")]),t.login?a("div",{staticClass:"log-number"},[a("div",{staticClass:"number-account"},[a("div",{staticClass:"acc-left"},[a("div",{staticClass:"acc-area"},[t._v("+86")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{pattern:"[0-9]*",type:"number",oninput:"if(value.length>6)value=value.slice(0,11)",placeholder:"输入手机号",maxlength:"11"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t.codes?a("div",{staticClass:"acc-btn",on:{click:t.codesBnt}},[t._v("获取验证码")]):a("div",{staticClass:"acc-btnNums"},[t._v(t._s(t.total)+"秒后重发")])]),a("div",{staticClass:"number-code"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{oninput:"if(value.length>6)value=value.slice(0,12)",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),a("div",{staticClass:"number-btn",on:{click:t.switcher}},[t._v("一键登录")])]):a("div",{staticClass:"log-phone"},[a("div",{staticClass:"phone-hm"},[a("span",[t._v("+86")]),a("span",{staticClass:"hm-call"},[t._v(t._s(t._f("phoneNum")(t.phone)))])]),a("div",{staticClass:"phone-one",on:{click:function(e){return t.isLog({name:"李太白",phone:"18154543615",openid:"6xhdieyuqwohvuisy"})}}},[a("span",{on:{click:t.togglelog}},[t._v("本机号码一键登录")])]),a("div",{staticClass:"phone-btn",on:{click:t.switcher}},[t._v("切换账号")])])])])},n=[],i=a("5530"),o=a("2f62"),c=a("d399"),l=a("c24f"),u=a("5f87"),d={name:"Login",data:function(){return{total:60,code:"",login:!0,codes:!0,value:"",phone:"13276861407"}},filters:{phoneNum:function(t){if(void 0===t)return"****";var e=t.substring(0,3),a="****";return e+a+t.substring(7,11)}},computed:Object(i["a"])({},Object(o["b"])(["userInfo"])),methods:Object(i["a"])({switcher:function(){var t=this,e={id:this.userInfo.id,code:this.code,phone:this.value};Object(l["a"])(e).then((function(e){if(10001===e.data)return Object(c["a"])(e.msg),!1;2e4===e.code&&(t.$store.dispatch("user/login",e.data),Object(u["b"])(e.data),t.$router.push("/"))}))},codesBnt:function(){var t=this;this.value.length<11?Object(c["a"])("请填写11位数手机号码"):(Object(l["d"])(this.value).then((function(e){var a=window.setInterval((function(){t.total>0?t.total--:(clearInterval(a),t.total=60,t.codes=!t.codes)}),1e3)})),this.codes=!this.codes)},togglelog:function(){this.$router.push({path:"/"})}},Object(o["c"])(["isLog"]))},r=d,v=(a("8ad6"),a("2877")),h=Object(v["a"])(r,s,n,!1,null,"4a5e6c97",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-23a4e853.401a8973.js.map