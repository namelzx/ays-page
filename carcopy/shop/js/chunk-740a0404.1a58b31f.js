(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-740a0404"],{"5e59":function(t,e,n){"use strict";var i=n("9760"),s=n.n(i);s.a},"769e":function(t,e,n){},9760:function(t,e,n){},a412:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toptitle nb",class:t.shadow?"bm":"",style:t.pstyle},[t._m(0),n("div",{staticClass:"name"},[t._v(t._s(t.title))])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"toptitle-imgs"},[i("img",{attrs:{src:n("f5a4")}})])}],o=(n("b0c0"),{props:{title:{type:String,default:""},colorstr:{type:String,default:"#333"}},data:function(){return{pbstyle:{background:"#ffffff",color:this.colorstr},pstyle:void 0,shadow:void 0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>150?(this.pstyle=this.pbstyle,this.pstyle.color="#000 !important",this.name={color:"#000"},this.src=2):(this.pstyle="",this.src=1,this.name={color:"#fff"})}}}),a=o,l=(n("5e59"),n("2877")),r=Object(l["a"])(a,i,s,!1,null,"0a693a99",null);e["a"]=r.exports},a434:function(t,e,n){"use strict";var i=n("23e7"),s=n("23cb"),o=n("a691"),a=n("50c4"),l=n("7b0b"),r=n("65f0"),c=n("8418"),d=n("1dde"),u=n("ae40"),h=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,A=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var n,i,d,u,h,f,m=l(this),b=a(m.length),w=s(t,b),y=arguments.length;if(0===y?n=i=0:1===y?(n=0,i=b-w):(n=y-2,i=A(p(o(e),0),b-w)),b+n-i>v)throw TypeError(g);for(d=r(m,i),u=0;u<i;u++)h=w+u,h in m&&c(d,u,m[h]);if(d.length=i,n<i){for(u=w;u<b-i;u++)h=u+i,f=u+n,h in m?m[f]=m[h]:delete m[f];for(u=b;u>b-i+n;u--)delete m[u-1]}else if(n>i)for(u=b-i;u>w;u--)h=u+i-1,f=u+n-1,h in m?m[f]=m[h]:delete m[f];for(u=0;u<n;u++)m[u+w]=arguments[u+2];return m.length=b-i+n,d}})},d853:function(t,e,n){"use strict";var i=n("769e"),s=n.n(i);s.a},dd0f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("div",{on:{click:t.toggleRetun}},[n("Toptitle",{attrs:{title:t.title}})],1),n("div",{staticClass:"order-wrap"},[t._l(t.list,(function(e,i){return n("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[n("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(n){return t.handelDelete(e.id,i)}}})]},proxy:!0}],null,!0)},[n("van-cell",{attrs:{border:!0,title:e.realName,value:e.shop_user_name},on:{click:function(n){return t.togglePick(e)}}})],1)})),n("div",{staticClass:"continue",on:{click:t.toggleAdd}},[n("van-icon",{staticClass:"add-item",attrs:{name:"add-o"}}),t._v(" 添加店员 ")],1),n("div",{staticClass:"add-tips"},[t._v("一个店铺最多10名店员,满额后不可再添加")])],2),n("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v("请输入店员名称")]),n("span",{staticClass:"names"},[t._v("添加店员名称")]),n("van-cell-group",[n("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:t.realName,callback:function(e){t.realName=e},expression:"realName"}})],1),n("div",{staticClass:"content-bottom"},[n("div",{staticClass:"cancel",on:{click:function(e){return t.handelCancel()}}},[t._v("取消")]),n("div",{staticClass:"1",on:{click:function(e){return t.handelSaved()}}},[t._v("确认添加")])])],1)])],1)},s=[],o=(n("a4d3"),n("4de4"),n("4160"),n("a434"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),a=n("c36e"),l=n("565f"),r=n("a412"),c=n("e41f"),d=n("2f62"),u=n("e692");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"UploadVideo",computed:f({},Object(d["b"])(["sele_shop","userInfo"])),data:function(){return Object(o["a"])({show:!1,title:"店员管理",index:void 0,list:[],realName:"",id:void 0},"show",!1)},created:function(){this.id=this.$route.query.id,this.getlist()},methods:{handelCancel:function(){this.show=!1},togglePick:function(t){console.log(t),this.$router.push({path:"/assistant/code",query:{user_id:t.id}})},handelDelete:function(t,e){var n=this,i={user_id:t,shop_id:this.sele_shop.id};console.log(i),Object(u["d"])(i).then((function(t){n.list.splice(e,1),n.$toast("删除成功")}))},getlist:function(){var t=this,e={shop_id:this.sele_shop.id,user_id:this.userInfo.id};Object(u["e"])(e).then((function(e){t.list=e.data?e.data:[]}))},handelSaved:function(){var t=this,e={shop_id:this.sele_shop.id,realName:this.realName};Object(u["o"])(e).then((function(e){10001!==e.code?(t.$toast("添加成功"),t.realName="",t.getlist(),t.show=!t.show):t.$toast(e.msg)})),console.log(e)},toggleRetun:function(){this.$router.go(-1)},toggleAdd:function(){if(10===this.list.length)return this.$toast("最多只能加10个店员!!!"),!0;this.show=!0}},components:{Toptitle:r["a"],SwipeCell:a["a"],Popup:c["a"],Field:l["a"]}},A=p,v=(n("d853"),n("2877")),g=Object(v["a"])(A,i,s,!1,null,"13b81460",null);e["default"]=g.exports},f5a4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhUlEQVR4Xu3Zy03EMBSF4WunAGiBDkzSAFQMHUADtlICHRAKSIIiMZsRy/s4R3Y2s7Pyf7azuJOk8yd13i8DYJyAzgXGFej8APB8BEspJef8llLaaq3PWhtHcQX+4j9SSo8i8lNrvX5VHniA+/h931/WdV1V6kWwr4B1/IUIewI84mEBvOIhATzj4QC846EAIuJhAKLiIQAi48MBouNDARDiwwBQ4kMAkOLdAdDiXQEQ490AUONdAJDjzQHQ400BGOLNAFjiTQCY4tUB2OLVAeZ5/r6NrrWnt1pT4Pt1VIeiy7JsIvJwnud2HMer5viaAuC6AtM0fTIhqJ6Aa5fYENQB2BBMAJgQzABYEEwBGBDMAdARXACQEdwAUBFcARAR3AHQEEIAkBDCAFAQQgEQEMIBohEgACIRYACiEKAAIhDgALwRIAE8EWABvBCgATwQ4AH+QfhqrT1pjckpAG4IOed3Edlaa6U7AK1g03+GrF7Scl2aK2CFMACsZFnWHSeAZaes3vMXMBn6UISvQ8QAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-740a0404.1a58b31f.js.map