(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-576020b4"],{9434:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"official-container"},[a("div",{staticClass:"cate-bar"},[""===t.searchValue?[t._l(t.actionBar,(function(s,e){return a("div",{key:s.id,staticClass:"bar-item",class:{active:t.curIndex===e},on:{click:function(s){return t.changeBar(e)}}},[a("span",[t._v(t._s(s.name))])])})),a("van-icon",{staticClass:"search-icon",attrs:{name:"search"},on:{click:t.showSearch}})]:[a("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":"",shape:"round"},on:{search:t.onSearch},model:{value:t.searchValue,callback:function(s){t.searchValue=s},expression:"searchValue"}},[a("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])])]],2),t.showSearchBar?a("div",{staticClass:"whole-search"},[a("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":"",shape:"round"},on:{search:t.onSearch},model:{value:t.searchValue,callback:function(s){t.searchValue=s},expression:"searchValue"}},[a("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])])],1):t._e(),a("div",{staticClass:"bar-content"},t._l(t.tabs,(function(s,e){return e===t.curIndex?a("div",{key:e},[t._l(s.list,(function(s,e){return[a("div",{staticClass:"content-item"},[a("div",{staticClass:"item-bg-left"},[a("p",[t._v(t._s(s.condition)+"抵")]),a("p",[a("span",[t._v("¥")]),t._v(t._s(s.sub_price))]),a("p",[t._v("到店还有精美礼品一份")])]),a("div",{staticClass:"item-info-right"},[a("p",[t._v(t._s(s.order_num)+" / "+t._s(s.type))]),a("div",{staticClass:"owner-info"},[a("span",{staticClass:"info-left"},[t._v("车主:")]),a("span",[t._v(t._s(s.owner))])]),a("div",{staticClass:"owner-info"},[a("span",{staticClass:"info-left"},[t._v("电话:")]),a("span",[t._v(t._s(s.phone))])]),a("div",{staticClass:"date-action"},[a("div",{staticClass:"da date"},[t._v(t._s(s.order_date))]),a("div",{staticClass:"da status"},["1"===s.status?a("span",[t._v("待核销")]):t._e(),"2"===s.status?a("span",[t._v("已核销")]):t._e(),"3"===s.status?a("span",[t._v("已退货")]):t._e(),"4"===s.status?a("span",[t._v("已评价")]):t._e()]),"1"===s.status?a("div",{staticClass:"da action",on:{click:t.toggleShowCode}},[t._v("确认核销")]):t._e(),"4"===s.status?a("div",{staticClass:"da rate",on:{click:function(s){return t.clickRate(e)}}},[a("span",[t._v("评价")])]):t._e()])])]),t._l(s.rate,(function(i){return t.curRate===e&&t.showRate?a("div",{key:s.id,staticClass:"rate-content"},[a("div",{staticClass:"star"},[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#FF5861"},model:{value:i.rate_star,callback:function(s){t.$set(i,"rate_star",s)},expression:"rate.rate_star"}})],1),a("div",{staticClass:"rate-text"},[a("span",[t._v(t._s(i.content))])]),a("div",{staticClass:"img-list"},t._l(i.imgList,(function(t){return a("div",{staticClass:"img-item"},[a("img",{attrs:{src:t,alt:""}})])})),0)]):t._e()}))]}))],2):t._e()})),0),t.showCode?a("div",{staticClass:"code-input"},[a("div",{staticClass:"code-wrap"},[t.slipSucc?[a("h6",{staticClass:"code-title"},[t._v("核销提示")]),a("h6",{staticClass:"status-msg"},[t._v("核销成功")]),a("div",{staticClass:"action-btn",on:{click:t.goBack}},[a("span",[t._v("返回")])])]:[a("h6",{staticClass:"code-title"},[t._v("请输入核销码")]),a("h6",{staticClass:"code-desc"},[t._v("为订单5501进行核销")]),a("van-search",{attrs:{placeholder:"请输入核销码","input-align":"center"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),a("div",{staticClass:"action-btn"},[a("span",{on:{click:t.toggleShowCode}},[t._v("取消")]),a("span",{on:{click:t.clickToSlip}},[t._v("确认")])])]],2)]):t._e()])},i=[],n={name:"Official",data:function(){return{curIndex:0,curRate:0,showSearchBar:!1,actionBar:[{id:"1",name:"全部"},{id:"2",name:"待核销"},{id:"3",name:"已核销"},{id:"4",name:"已退货"},{id:"5",name:"已评价"}],showCode:!1,slipSucc:!1,value:"",tabs:[{list:[{id:"1",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈启勇",status:"1",condition:"100",sub_price:"600",order_num:5502,order_date:"2019.09.08"},{id:"2",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈东梅",status:"4",condition:"200",sub_price:"400",order_num:9527,order_date:"2019.09.08",rate:[{id:"1",rate_star:4.5,content:"买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车",imgList:["https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png","https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png","https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"]}]}]},{list:[{id:"1",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈启勇",status:"1",condition:"100",sub_price:"600",order_num:5502,order_date:"2019.09.08"},{id:"2",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈东梅",status:"1",condition:"200",sub_price:"400",order_num:9527,order_date:"2019.09.08"}]},{list:[{id:"1",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈启勇",status:"2",condition:"100",sub_price:"600",order_num:5502,order_date:"2019.09.08"},{id:"2",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈东梅",status:"2",condition:"200",sub_price:"400",order_num:9527,order_date:"2019.09.08"}]},{list:[{id:"1",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈启勇",status:"3",condition:"100",sub_price:"600",order_num:5502,order_date:"2019.09.08"},{id:"2",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈东梅",status:"3",condition:"200",sub_price:"400",order_num:9527,order_date:"2019.09.08"}]},{list:[{id:"1",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈启勇",status:"4",condition:"100",sub_price:"600",order_num:5502,order_date:"2019.09.08",rate:[{id:"1",rate_star:4.5,content:"买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车",imgList:["https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png","https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png","https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"]}]},{id:"2",type:"别克2017君威1.5t精英版",phone:"18665431625",owner:"陈东梅",status:"4",condition:"200",sub_price:"400",order_num:9527,order_date:"2019.09.08",rate:[{id:"1",rate_star:4.5,content:"买了小四有一个月了，总体来说都比较满意，唯一的遗憾就是灯光不是很给力，毕竟刚提车也不久，还不舍得拆大灯，就一直忍着。直到前几天晚上回家，因为对向车道车",imgList:["https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png","https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png","https://kedand.oss-cn-beijing.aliyuncs.com/uploads/swiper-img.png"]}]}]}],showRate:!1,searchValue:""}},methods:{changeBar:function(t){this.curIndex=t},clickRate:function(t){console.log(t),this.curRate=t,this.showRate=!this.showRate},toggleShowCode:function(){this.showCode=!this.showCode},clickToSlip:function(){this.slipSucc=!this.slipSucc},goBack:function(){this.toggleShowCode(),this.$router.push("/official")},showSearch:function(){this.showSearchBar=!this.showSearchBar},onSearch:function(){this.showSearch()}}},c=n,o=(a("c765"),a("2877")),r=Object(o["a"])(c,e,i,!1,null,"a6c99778",null);s["default"]=r.exports},c765:function(t,s,a){"use strict";var e=a("ecea"),i=a.n(e);i.a},ecea:function(t,s,a){}}]);
//# sourceMappingURL=chunk-576020b4.127753ad.js.map