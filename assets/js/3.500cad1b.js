(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{311:function(t,e,i){},336:function(t,e,i){"use strict";i(337);var s=i(10),a=i(171),n=i(16),l=/./.toString,o=function(t){i(27)(RegExp.prototype,"toString",t,!0)};i(20)(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?o(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?a.call(t):void 0)}):"toString"!=l.name&&o(function(){return l.call(this)})},337:function(t,e,i){i(16)&&"g"!=/./g.flags&&i(17).f(RegExp.prototype,"flags",{configurable:!0,get:i(171)})},338:function(t,e,i){var s=Date.prototype,a=s.toString,n=s.getTime;new Date(NaN)+""!="Invalid Date"&&i(27)(s,"toString",function(){var t=n.call(this);return t==t?a.call(this):"Invalid Date"})},339:function(t,e,i){"use strict";var s=i(311);i.n(s).a},344:function(t,e,i){"use strict";i.r(e);i(336),i(338),i(46),i(70);var s={data:function(){return{fullHeight:0,isMounted:!1,headerFixed:!1,active:"0"}},watch:{fullHeight:function(t){if(!this.timer){this.fullHeight=t,this.timer=!0;var e=this;setTimeout(function(){e.timer=!1},400)}}},mounted:function(){var t=this;i.e(5).then(i.t.bind(null,341,7)).then(function(t){(new t.WOW).init()}),this.fullHeight=document.documentElement.clientHeight,window.onresize=function(){return window.fullHeight=document.documentElement.clientHeight,void(t.fullHeight=window.fullHeight)},this.isMounted=!0,this.$nextTick(function(){var t=document.getElementById("menu");this.offsetTop=t.offsetTop,this.offsetHeight=t.offsetHeight}),window.addEventListener("scroll",this.handleScroll)},created:function(){},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{toSection:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth"})},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.getElementById("menu");this.offsetTop=e.offsetTop,this.headerFixed=t>.85*this.fullHeight+60;var i=document.querySelectorAll(".home-section"),s=[];i.forEach(function(t){s.push(t.offsetTop)});for(var a=-1,n=0;n<s.length;n++)t>=s[n]-40&&(a=n);this.active=(a+1).toString()},handlerClick:function(t){/^http/.test(t)?window.open(t):this.$router.push(t)}}},a=(i(339),i(26)),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout"},[i("div",{staticClass:"header",attrs:{height:t.fullHeight+"px"}},[i("div",{style:{height:.6*t.fullHeight+"px"}},[i("div",{staticStyle:{height:"100%",position:"relative"}},[1==t.isMounted?i("ring"):t._e()],1)]),t._v(" "),i("div",{style:{height:.26*t.fullHeight+"px"}},[i("div",{staticStyle:{color:"#fff","text-align":"center","font-size":"4.3rem"}},[t._v("Crypto Lab")]),t._v(" "),i("div",{staticStyle:{color:"#666","text-align":"center","font-size":"2rem"}},[t._v("SUSTech")])]),t._v(" "),i("el-row",[i("el-col",{staticClass:"hidden-sm-and-down"},[i("div",{class:t.headerFixed?"isFixed":"",staticStyle:{"background-color":"#212121"},attrs:{id:"menu"}},[i("el-menu",{staticClass:"layout-nav",staticStyle:{"border-bottom":"none"},attrs:{mode:"horizontal","background-color":"#212121","text-color":"#fff","active-text-color":"#ef6c00","default-active":t.active}},[i("el-menu-item",{attrs:{index:"1"},on:{click:function(e){return t.toSection("about")}}},[t._v(" About\n                        ")]),t._v(" "),i("el-menu-item",{attrs:{index:"2"},on:{click:function(e){return t.toSection("research")}}},[t._v(" Research\n                        ")]),t._v(" "),i("el-menu-item",{attrs:{index:"3"},on:{click:function(e){return t.toSection("people")}}},[t._v(" People\n                        ")]),t._v(" "),i("el-menu-item",{attrs:{index:"4"},on:{click:function(e){return t.toSection("contact")}}},[t._v(" Contact\n                        ")])],1)],1)])],1),t._v(" "),t.headerFixed?i("div",{staticClass:"hidden-sm-and-down",staticStyle:{height:"60px"}}):t._e(),t._v(" "),i("div",{staticClass:"hidden-md-and-up",staticStyle:{height:"60px"}}),t._v(" "),i("div",{style:{height:.15*t.fullHeight-60+"px"}})],1),t._v(" "),i("div",{staticClass:"home-section",attrs:{id:"about"}},[i("el-row",[i("el-col",{attrs:{span:16,offset:4}},[i("h2",{staticClass:"section-title"},[t._v("About")])])],1),t._v(" "),i("el-row",{staticClass:"wow fadeInUpBig",staticStyle:{"padding-top":"20px"},attrs:{"data-wow-duration":"1s"}},[i("el-col",{attrs:{lg:4,xl:4,sm:2,xs:2}},[i("div",[t._v(" ")])]),t._v(" "),i("el-col",{attrs:{span:7}},[i("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[i("div",{staticStyle:{"font-size":"36px"}},[t._v("Cryptography")]),t._v(" "),i("ul",{staticStyle:{"font-size":"18px"}},[i("li",[t._v("Multi-Party Computation")]),t._v(" "),i("li",[t._v("Zero-Knowledge")]),t._v(" "),i("li",[t._v("Verifiable Computation")])])])],1),t._v(" "),i("el-col",{attrs:{lg:2,xl:2,sm:2,xs:2}},[i("div",[t._v(" ")])]),t._v(" "),i("el-col",{attrs:{span:7}},[i("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[i("div",{staticStyle:{"font-size":"36px"}},[t._v("Code and Deisgn")]),t._v(" "),i("ul",{staticStyle:{"font-size":"18px"}},[i("li",[t._v("Error Correcting Code")]),t._v(" "),i("li",[t._v("Combinatorial Design")]),t._v(" "),i("li",[t._v("Sequence Design")])])])],1),t._v(" "),i("el-col",{attrs:{lg:4,xl:4,sm:2,xs:2}},[i("div",[t._v(" ")])])],1)],1),t._v(" "),i("div",{staticClass:"home-section",attrs:{id:"research"}},[i("el-row",[i("el-col",{attrs:{span:16,offset:4}},[i("h2",{staticClass:"section-title"},[t._v("Research")])])],1),t._v(" "),i("el-row",[i("el-col",{attrs:{lg:4,sm:2,xs:1}},[i("div",[t._v(" ")])]),t._v(" "),i("el-col",{attrs:{lg:16,sm:20,xs:22}},[i("ul",{staticStyle:{"font-size":"18px","line-height":"2"}},[i("li",[t._v(' [J18] (with H. Yan, Z. Zhou, J. Weng, J. Wen and T. Helleseth) "Differential spectrum of Kasami power permutations over odd characteristic finite fields,"\n            '),i("i",[t._v("IEEE Transactions on Information Theory, ")]),t._v(" to appear, DOI10.1109/TIT.2019.2910070.\n\n          ")]),t._v(" "),i("li",[t._v(' [J17] (with J. Michel) "Almost designs and their links with balanced incomplete block designs," '),i("i",[t._v("Designs Codes and Cryptography, ")]),t._v(" to appear, https://doi.org/10.1007/s10623-018-00596-4.\n\n          ")]),t._v(" "),i("li",[t._v(' [J16] (with J. Michel) "Almost difference sets in nonabelian groups,"\n            '),i("i",[t._v("Designs Codes and Cryptography")]),t._v(", vo\n              "),i("span",{attrs:{lang:"en-us"}},[t._v("l. 87, pp. 1243-1251, 2019")]),t._v(".\n\n          ")]),t._v(" "),i("li",[t._v(' [J15] (with J. Michel) "Some new balanced and almost balanced quaternary sequences with low autocorrelation," '),i("i",[t._v("Cryptography and Communications")]),t._v(", vol. 11, pp. 191-206, 2019.\n\n          ")])])]),t._v(" "),i("el-col",{attrs:{lg:4,sm:2,xs:1}},[i("div",[t._v(" ")])])],1)],1),t._v(" "),i("div",{staticClass:"home-section",attrs:{id:"people"}},[i("el-row",[i("el-col",{attrs:{span:16,offset:4}},[i("h2",{staticClass:"section-title"},[t._v("People")])])],1),t._v(" "),i("el-row",[i("el-col",{attrs:{lg:4,xl:4,sm:2,xs:0}},[i("div",[t._v(" ")])]),t._v(" "),i("el-col",{attrs:{lg:16,xl:16,sm:24,xs:24}},[i("el-card",{staticStyle:{margin:"10px"},attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[i("el-row",[i("el-col",{attrs:{span:18}},[i("div",{staticStyle:{margin:"20px"}},[i("div",{staticStyle:{"text-align":"center","font-size":"24px","padding-bottom":"16px"}},[t._v("Prof. Qi Wang")]),t._v(" "),i("div",[t._v("\n                                    Prof. Qi Wang received Ph.D. in Computer Science and Engineering in The Hong Kong University of Science and Technology in 2011. Before that, he received B.Eng. in Information Security in University of Science and Technology of China in 2007.\n                                    "),i("ul",[i("li",[t._v("2014- , Southern University of Science and Technology, Assistant Professor")]),t._v(" "),i("li",[t._v("2013-2014 The Hong Kong University of Science and Technology, Research Associate ")]),t._v(" "),i("li",[t._v("2011-2013 Otto-von-Guericke University Magdeburg, Alexander von Humboldt Fellow ")])])])])]),t._v(" "),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"block",staticStyle:{margin:"20px"}},[i("el-image",{attrs:{src:"http://static.cse.sustech.edu.cn/thumb.php?h=257&w=170&s=3&src=upload/images/20161208/ea1630db8c1b021e79de70438f9998ac.jpg"}},[i("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("\n                                        加载中"),i("span",{staticClass:"dot"},[t._v("...")])])])],1)])],1)],1)],1),t._v(" "),i("el-col",{attrs:{lg:4,xl:4,sm:2,xs:0}},[i("div",[t._v(" ")])])],1),t._v(" "),i("el-row",[i("el-col",{attrs:{lg:4,xl:4,sm:2,xs:0}},[i("div",[t._v(" ")])]),t._v(" "),i("el-col",{attrs:{lg:8,xl:8,sm:24,xs:24}},[i("el-card",{staticStyle:{margin:"10px"},attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[i("div",{staticStyle:{"text-align":"center",margin:"10px"}},[i("img",{staticClass:"image",attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}})]),t._v(" "),i("div",{staticStyle:{padding:"14px"}},[i("span",[t._v("好吃的汉堡")]),t._v(" "),i("div",{staticClass:"bottom clearfix"},[i("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1),t._v(" "),i("el-col",{attrs:{lg:8,xl:8,sm:24,xs:24}},[i("el-card",{staticStyle:{margin:"10px"},attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[i("div",{staticStyle:{"text-align":"center",margin:"10px"}},[i("img",{staticClass:"image",attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}})]),t._v(" "),i("div",{staticStyle:{padding:"14px"}},[i("span",[t._v("好吃的汉堡")]),t._v(" "),i("div",{staticClass:"bottom clearfix"},[i("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1),t._v(" "),i("el-col",{attrs:{lg:4,xl:4,sm:2,xs:0}},[i("div",[t._v(" ")])])],1),t._v(" "),i("el-row",[i("el-col",{attrs:{lg:4,xl:4,sm:2,xs:0}},[i("div",[t._v(" ")])]),t._v(" "),i("el-col",{attrs:{lg:8,xl:8,sm:24,xs:24}},[i("el-card",{staticStyle:{margin:"10px"},attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[i("div",{staticStyle:{"text-align":"center",margin:"10px"}},[i("img",{staticClass:"image",attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}})]),t._v(" "),i("div",{staticStyle:{padding:"14px"}},[i("span",[t._v("好吃的汉堡")]),t._v(" "),i("div",{staticClass:"bottom clearfix"},[i("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1),t._v(" "),i("el-col",{attrs:{lg:8,xl:8,sm:24,xs:24}},[i("el-card",{staticStyle:{margin:"10px"},attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[i("div",{staticStyle:{"text-align":"center",margin:"10px"}},[i("img",{staticClass:"image",attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}})]),t._v(" "),i("div",{staticStyle:{padding:"14px"}},[i("span",[t._v("好吃的汉堡")]),t._v(" "),i("div",{staticClass:"bottom clearfix"},[i("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1),t._v(" "),i("el-col",{attrs:{lg:4,xl:4,sm:2,xs:0}},[i("div",[t._v(" ")])])],1)],1),t._v(" "),i("div",{staticClass:"home-section",attrs:{id:"contact"}},[i("el-row",[i("el-col",{attrs:{span:16,offset:4}},[i("h2",{staticClass:"section-title"},[t._v("Contact")])])],1),t._v(" "),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8,offset:4}},[i("div",{staticStyle:{"text-align":"center"}})]),t._v(" "),i("el-col",{attrs:{span:4}},[i("div",{staticStyle:{"text-align":"center"}})])],1)],1)])},[],!1,null,"5e62223e",null);e.default=n.exports}}]);