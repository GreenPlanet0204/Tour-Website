webpackJsonp([14],{"4+cb":function(t,e,s){"use strict";e.a={data:function(){return{steps:[{title:this.$t("booking.steps.1.title"),number:1},{title:"line"},{title:this.$t("booking.steps.2.title"),number:2},{title:"line"},{title:this.$t("booking.steps.3.title"),number:3},{title:"line"},{title:this.$t("booking.steps.4.title"),number:4}]}},created:function(){this.isB2b&&(this.steps=[{title:this.$t("booking.steps.1.title"),number:1},{title:"line"},{title:this.$t("booking.steps.2.title"),number:2},{title:"line"},{title:this.$t("booking.steps.4.title"),number:3}])},methods:{isActive:function(t){return t===this.currentStep||this.currentStep>=t},isAvailable:function(t){return t<=this.availableSteps&&3!==t}},props:{isB2b:{type:Boolean,required:!1,default:!1},currentStep:{type:Number,required:!0},availableSteps:{type:Number,required:!0},handleStepChange:{type:Function,required:!1,default:function(){}}}}},"8qkx":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("B6N9"),a=s("CXPb"),n=s("VU/8")(i.a,a.a,!1,null,null,null);n.options.__file="pages/_lang/booking/success.vue",e.default=n.exports},AsmH:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"BookingProgress"},[s("ul",t._l(t.steps,function(e,i){return s("li",{key:i,class:{"is-line":"line"===e.title},attrs:{"aria-hidden":"line"===e.title}},["line"!==e.title?s("button",{staticClass:"Button Button--progress",class:{"is-active":t.isActive(e.number)},attrs:{type:"button"},on:{click:function(s){t.isAvailable(e.number)&&t.handleStepChange(e.number)}}},[e.number?s("span",{staticClass:"Button-number"},[t._v(t._s(e.number))]):t._e(),s("span",{staticClass:"Button-title"},[t._v(t._s(e.title))])]):t._e()])}),0)])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},B6N9:function(t,e,s){"use strict";var i=s("Xxa5"),a=s.n(i),n=s("exGp"),r=s.n(n),o=s("WbkS");e.a={data:function(){return{data:"",isPrivate:"private"===this.$route.query.order_number,revenue:10}},components:{bookingProgress:o.a},head:{htmlAttrs:{class:"is-boxed-layout fontsLoaded"}},mounted:function(){var t=r()(a.a.mark(function t(){var e=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isPrivate){t.next=7;break}return this.$nextTick(function(){e.$nuxt.$loading.start()}),t.next=4,this.$axios.$get("success?order_number="+this.$route.query.order_number);case 4:this.data=t.sent,this.data.revenue&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"purchase",ecommerce:{purchase:{actionField:{id:this.$route.query.order_number,revenue:this.data.revenue},products:[{name:this.data.tour_name}]}}})),this.$nuxt.$loading.finish();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},CXPb:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"BoxedLayout Booking"},[s("p",{staticClass:"BoxedLayout-siteTitle"},[s("nuxt-link",{attrs:{to:{name:"lang",params:{lang:t.$i18n.locale}}}},[t._v("Adriatic Sunsets")])],1),t.data.tour_name?s("bookingProgress",{attrs:{"current-step":4,"available-steps":4}}):t._e(),s("div",{staticClass:"BoxedLayout-main"},[t.data.tour_name?[s("h1",{staticClass:"BoxedLayout-mainTitle"},[t._v(t._s(t.$t("booking.success.mainTitle"))+" "),s("span",[t._v(t._s(t.data.tour_name))])]),s("p",{staticClass:"BoxedLayout-subTitle"},[t._v(t._s(t.data.date)+" @ "+t._s(t.data.time)+" "+t._s(t.$t("booking.from"))+" "+t._s(t.data.pickup_point))]),t.data.b2b?t._e():s("p",{staticClass:"Booking-voucher"},[t._v(t._s(t.$t("booking.success.voucher")))]),t.data.b2b?[s("a",{staticClass:"Booking-voucher",attrs:{href:t.data.voucher_url}},[t._v(t._s(t.$t("booking.success.voucherB2b")))])]:t._e()]:t.isPrivate?[s("h1",{staticClass:"BoxedLayout-mainTitle"},[t._v(t._s(t.$t("booking.success.mainTitle"))+" "),s("span",[t._v(t._s(t.$t("booking.success.privateRental")))])]),s("p",{staticClass:"Booking-voucher"},[t._v(t._s(t.$t("booking.success.privateInfo")))])]:t.data?[s("h1",{staticClass:"BoxedLayout-mainTitle"},[t._v(t._s(t.data))])]:t._e(),s("p",{staticClass:"BoxedLayout-back"},[t._v(t._s(t.$t("booking.continueTo"))+" "),s("nuxt-link",{attrs:{to:{name:"lang",params:{lang:t.$i18n.locale}}}},[t._v(t._s(t.$t("booking.homepage")))])],1)],2)],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},WbkS:function(t,e,s){"use strict";var i=s("4+cb"),a=s("AsmH"),n=s("VU/8")(i.a,a.a,!1,null,null,null);n.options.__file="components/bookingProgress.vue",e.a=n.exports}});