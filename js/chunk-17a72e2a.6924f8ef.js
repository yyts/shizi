(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17a72e2a"],{"43ef":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-page"},[a("div",{staticClass:"container-flex bg--gray"},[a("div",{staticClass:"container-flex_content"},[a("div",{staticClass:"app-record"},[a("div",{staticClass:"hts"},[t._v("做题记录")]),a("div",{staticClass:"app-box"},[a("ul",t._l(t.list,function(s,i){return a("li",{key:"key-list-"+i},[a("div",{staticClass:"time"},[t._v(t._s(s[0]))]),a("div",{staticClass:"item"},[a("div",{staticClass:"ht",class:{bad:s[1].length<8}},[a("div",[a("strong",[t._v(t._s(s[1].length||"")+"0")]),t._v("分")])]),a("div",{staticClass:"content"},[a("div",{staticClass:"right"},[t._v(t._s(s[1]||"-"))]),a("div",{staticClass:"wrong"},[t._v(t._s(s[2]||"-"))])])])])}),0)]),t.showLoading?a("van-loading",{attrs:{type:"spinner"}}):t._e(),t.showDefault?a("div",{staticClass:"app-box app-default"},[a("van-icon",{attrs:{name:"info-o",size:"1rem",color:"#eee"}}),a("br"),t._v("\n          还没有记录～\n        ")],1):t._e()],1)])]),a("div",{staticClass:"app-box"},[a("van-button",{attrs:{type:"primary",block:""},on:{click:function(s){return t.$router.go(-1)}}},[t._v("返回")])],1)])},n=[],e=(a("28a5"),{data:function(){return{list:[],showLoading:!0,showDefault:!1}},mounted:function(){var t=this,s=localStorage.result,a=[];if(!s)return this.showLoading=!1,void(this.showDefault=!0);a=s.split("|"),this.showLoading=!1,a.map(function(s){t.list.push(s.split(","))})}}),o=e,c=(a("c93a"),a("2877")),l=Object(c["a"])(o,i,n,!1,null,"7a98acfd",null);s["default"]=l.exports},"7a62":function(t,s,a){},c93a:function(t,s,a){"use strict";var i=a("7a62"),n=a.n(i);n.a}}]);