(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30f5e157"],{3477:function(t,s,e){"use strict";var n=e("8ff4"),r=e.n(n);r.a},"78c1":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-page"},[e("div",{staticClass:"container-flex bg--gray"},[e("div",{staticClass:"container-flex_content"},[e("div",{staticClass:"app-test app-box"},[10==t.currentLesson.length?e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",style:"width:"+t.currentIndex+"0%"},[e("span",{staticClass:"sr-only"},[t._v(t._s(t.currentIndex)+"/10")])])]):t._e(),e("div",{staticClass:"font-view"},[e("div",{staticClass:"content"},[t._v("\n            "+t._s(t.currentLesson[t.currentIndex])+"\n          ")])])]),e("div",{staticClass:"app-box"},[e("div",{staticClass:"oprate"},[e("van-button",{attrs:{type:"primary",size:"large"},on:{click:function(s){return t.getResult(!0)}}},[e("van-icon",{attrs:{name:"success",size:"0.32rem"}}),t._v("正确")],1),e("van-button",{attrs:{type:"danger",size:"large"},on:{click:function(s){return t.getResult()}}},[e("van-icon",{attrs:{name:"cross",size:"0.32rem"}}),t._v("错误")],1)],1)])])])])},r=[],i={computed:{currentIndex:function(){return this.$store.state.lesson.currentIndex},currentLesson:function(){return this.$store.state.lesson.currentLesson},review:function(){return this.$store.state.lesson.review}},methods:{getResult:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t?this.$store.commit("lesson/setRight",this.currentLesson[this.currentIndex]):this.$store.commit("lesson/setWrong",this.currentLesson[this.currentIndex]),this.currentIndex===this.currentLesson.length&&this.$router.push("/result")}}},a=i,c=(e("3477"),e("2877")),o=Object(c["a"])(a,n,r,!1,null,"405eba96",null);s["default"]=o.exports},"8ff4":function(t,s,e){}}]);