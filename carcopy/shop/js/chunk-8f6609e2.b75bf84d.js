(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f6609e2"],{2422:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"upload-container"},[i("div",{on:{click:t.toggleRetun}},[i("Toptitle",{attrs:{title:t.title}})],1),t.showAds?i("div",{staticClass:"bg-wrap"},[t._m(0),i("div",{staticClass:"close-btn",on:{click:t.toggleAds}},[i("van-icon",{attrs:{name:"close"}})],1)]):t._e(),i("div",{staticClass:"color-bg"}),i("div",{staticClass:"order-wrap"},[i("p",{staticClass:"tips"},[t._v("*仅限上传2天内安装完成订单")]),t._l(t.uploadList,(function(s){return i("div",{key:s.id,staticClass:"order-card"},[i("div",{staticClass:"card-item"},[i("div",{staticClass:"order-num-time"},[i("div",{staticClass:"order-num"},[t._v(t._s(s.id))]),i("div",{staticClass:"order-time"},[t._v(t._s(s.create_time))])]),i("div",{staticClass:"car-type"},[i("div",{staticClass:"item-left"},[t._v("车型:")]),i("div",{staticClass:"item-right"},[t._v(t._s(s.model_title))])]),i("div",{staticClass:"order-product"},[i("div",{staticClass:"item-left"},[t._v("产品:")]),i("div",{staticClass:"item-right"},[t._v(t._s(s.product_titile))])]),i("div",{staticClass:"shop-assit"},[i("div",{staticClass:"shop"},[t._v(t._s(s.shop_title))]),i("div",{staticClass:"assit"},[t._v(" "+t._s(s.shopkeeper))])]),i("div",{staticClass:"upload-btn",on:{click:function(i){return t.toggleConfirm(s.id,s.id)}}},[t._v("上传视频")])])])}))],2),t.showBigTips?i("div",{staticClass:"big-tips"},[i("p",[t._v("请提供电商派单产品的安装前后视频,视频内可内置门店信息。视频将会推广到快手、抖音、优酷等平台。视频要求15秒内,高清无码无压缩。")]),i("van-icon",{staticClass:"dismiss-btn",attrs:{name:"cross"},on:{click:t.toggleBigTips}})],1):t._e(),t.showBinConfirm?i("div",{staticClass:"big-confirm"},[i("div",{staticClass:"confirmBox"},[t._m(1),i("div",{staticClass:"conf-character"},[i("div",{staticClass:"conf-order"},[t._v(" 是否为 "),i("span",[t._v(t._s(t.orderId))]),t._v("订单上传 ")]),i("div",{staticClass:"conf-order"},[t._v("安装前后视频")])]),i("div",{staticClass:"conf-btn"},[i("div",{staticClass:"conf-ca",on:{click:t.clickCancel}},[t._v("取消")]),i("div",{staticClass:"conf-en",on:{click:t.clickToUpload}},[t._v("确定")])])])]):t._e()])},o=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"bg-img"},[i("div",{staticClass:"bg-title"},[t._v("提示！")]),i("div",{staticClass:"bg-content"},[i("p",[t._v("1.视频上传限2天内安装完成的订单")]),i("p",[t._v(" 2.请提供电商派单产品的安装前后视频，视频内可内置门店信息。 视频将会推广到快手、抖音、优酷、土豆、微博、爱奇艺、懂车帝、汽车之家、淘宝。 视频要求15秒内，高清无码无压缩。 ")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"conf-imgs"},[e("img",{attrs:{src:i("6138")}})])}],a=i("5530"),r=i("a412"),n=i("f8b7"),c=i("2f62"),d={name:"Upload",data:function(){return{title:"视频上传",showAds:!0,showBigTips:!0,showBinConfirm:!1,orderNums:"",orderId:"",listQuery:{limit:20,page:1,user_id:void 0},uploadList:[{id:"1",order_num:"5502",type:"别克2017君威1.5t精英版",prod:"征服者S",shop:"阿帕车灯（凯斯店）",assit:"姜卫卫",time:"2019-09-08 12:00"},{id:"2",order_num:"5502",type:"别克2017君威1.5t精英版",prod:"征服者S",shop:"阿帕车灯（凯斯店）",assit:"姜卫卫",time:"2019-09-08 12:00"},{id:"3",order_num:"5502",type:"别克2017君威1.5t精英版",prod:"征服者S",shop:"阿帕车灯（凯斯店）",assit:"姜卫卫",time:"2019-09-08 12:00"}]}},computed:Object(a["a"])({},Object(c["c"])(["userInfo"])),methods:{toggleRetun:function(){this.$router.push({path:"/"})},toggleAds:function(){this.showAds=!this.showAds},toggleBigTips:function(){this.showBigTips=!this.showBigTips},toggleConfirm:function(t,s){this.orderId=t,this.orderNums=s,this.showBinConfirm=!this.showBinConfirm},clickCancel:function(){this.showBinConfirm=!1},clickToUpload:function(){var t=this.orderId;this.$router.push({path:"/upload-video",query:{id:t}})},getlist:function(){var t=this;Object(n["c"])(this.listQuery).then((function(s){console.log(s),t.uploadList=s.data.data}))}},components:{Toptitle:r["a"]},created:function(){this.listQuery.user_id=this.userInfo.id,this.getlist(),void 0!==this.$route.query.showAds&&(this.showAds=!1)}},l=d,u=(i("4ad0"),i("2877")),f=Object(u["a"])(l,e,o,!1,null,"22dc2d06",null);s["default"]=f.exports},"4ad0":function(t,s,i){"use strict";var e=i("5390"),o=i.n(e);o.a},5390:function(t,s,i){},"5e59":function(t,s,i){"use strict";var e=i("9760"),o=i.n(e);o.a},6138:function(t,s,i){t.exports=i.p+"img/vidicon.a61745d2.png"},9760:function(t,s,i){},a412:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"toptitle nb",class:t.shadow?"bm":"",style:t.pstyle},[t._m(0),i("div",{staticClass:"name"},[t._v(t._s(t.title))])])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"toptitle-imgs"},[e("img",{attrs:{src:i("f5a4")}})])}],a=(i("b0c0"),{props:{title:{type:String,default:""},colorstr:{type:String,default:"#333"}},data:function(){return{pbstyle:{background:"#ffffff",color:this.colorstr},pstyle:void 0,shadow:void 0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>150?(this.pstyle=this.pbstyle,this.pstyle.color="#000 !important",this.name={color:"#000"},this.src=2):(this.pstyle="",this.src=1,this.name={color:"#fff"})}}}),r=a,n=(i("5e59"),i("2877")),c=Object(n["a"])(r,e,o,!1,null,"0a693a99",null);s["a"]=c.exports},f5a4:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhUlEQVR4Xu3Zy03EMBSF4WunAGiBDkzSAFQMHUADtlICHRAKSIIiMZsRy/s4R3Y2s7Pyf7azuJOk8yd13i8DYJyAzgXGFej8APB8BEspJef8llLaaq3PWhtHcQX+4j9SSo8i8lNrvX5VHniA+/h931/WdV1V6kWwr4B1/IUIewI84mEBvOIhATzj4QC846EAIuJhAKLiIQAi48MBouNDARDiwwBQ4kMAkOLdAdDiXQEQ490AUONdAJDjzQHQ400BGOLNAFjiTQCY4tUB2OLVAeZ5/r6NrrWnt1pT4Pt1VIeiy7JsIvJwnud2HMer5viaAuC6AtM0fTIhqJ6Aa5fYENQB2BBMAJgQzABYEEwBGBDMAdARXACQEdwAUBFcARAR3AHQEEIAkBDCAFAQQgEQEMIBohEgACIRYACiEKAAIhDgALwRIAE8EWABvBCgATwQ4AH+QfhqrT1pjckpAG4IOed3Edlaa6U7AK1g03+GrF7Scl2aK2CFMACsZFnWHSeAZaes3vMXMBn6UISvQ8QAAAAASUVORK5CYII="},f8b7:function(t,s,i){"use strict";i.d(s,"b",(function(){return o})),i.d(s,"e",(function(){return a})),i.d(s,"d",(function(){return r})),i.d(s,"g",(function(){return n})),i.d(s,"c",(function(){return c})),i.d(s,"f",(function(){return d})),i.d(s,"a",(function(){return l}));var e=i("b775");function o(t){return Object(e["a"])({url:"/Order/GetDataByList",method:"get",params:t})}function a(t){return Object(e["a"])({url:"/Order/GetIdBydetails",method:"get",params:{id:t}})}function r(t){return Object(e["a"])({url:"/Order/GetIdByStatus",method:"post",data:t})}function n(t){return Object(e["a"])({url:"/Order/PostNoteByAdd",method:"post",data:t})}function c(t){return Object(e["a"])({url:"/Order/GetIdBy2DayOrder",method:"get",params:t})}function d(t){return Object(e["a"])({url:"/Order/PostDataByVideo",method:"post",data:t})}function l(t){return Object(e["a"])({url:"/Order/GetCodeBycheckCode",method:"get",params:{code:t}})}}}]);
//# sourceMappingURL=chunk-8f6609e2.b75bf84d.js.map