(function(t){function e(e){for(var r,c,o=e[0],s=e[1],u=e[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},c={app:0},a={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b724a":"9a6ea733","chunk-3cdd6e1b":"3036067d","chunk-567247ea":"d138650b","chunk-6e64621f":"49a111c4","chunk-ed1bb540":"aebd4a49","chunk-8ed0cc10":"99d8618c","chunk-c97c1010":"5f01486c"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-3cdd6e1b":1,"chunk-567247ea":1,"chunk-6e64621f":1,"chunk-ed1bb540":1,"chunk-8ed0cc10":1,"chunk-c97c1010":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0b724a":"31d6cfe0","chunk-3cdd6e1b":"30abc048","chunk-567247ea":"dfe76c0c","chunk-6e64621f":"b196eec8","chunk-ed1bb540":"4a0ca89a","chunk-8ed0cc10":"79f7c097","chunk-c97c1010":"2e38d34e"}[t]+".css",a=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete c[t],f.parentNode.removeChild(f),n(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){c[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0212":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},3208:function(t,e,n){t.exports=n.p+"img/profile-active.fd66b281.svg"},"498c":function(t,e,n){"use strict";n("86a6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("62de"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd")},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("672b"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/shop"}},[r("img",{attrs:{slot:"item-icon",src:n("aaef"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("7843"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("3208"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},d=l,f=(n("498c"),n("2877")),m=Object(f["a"])(d,s,u,!1,null,"c1d7bc1c",null),p=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.ActiveStyle},[t._t("item-text")],2)])},b=[],v=(n("ac1f"),n("5319"),{name:"TabBarItem",computed:{isActive:function(){return this.$route.path==this.path},ActiveStyle:function(){return this.isActive?{color:this.activeColor}:{}}},props:{path:String,activeColor:{type:String,default:"blue"}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=v,k=(n("8374"),Object(f["a"])(g,h,b,!1,null,"d5947dfc",null)),y=k.exports,x={name:"MainTabBar",components:{TabBarItem:y,TabBar:p}},_=x,w=Object(f["a"])(_,i,o,!1,null,"09b23e17",null),O=w.exports,S={name:"App",components:{MainTabBar:O}},j=S,P=(n("034f"),Object(f["a"])(j,c,a,!1,null,null,null)),T=P.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),E=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-567247ea"),n.e("chunk-ed1bb540")]).then(n.bind(null,"77b8"))},A=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-3cdd6e1b")]).then(n.bind(null,"f4ba"))},L=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-c97c1010")]).then(n.bind(null,"24e5"))},$=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-8ed0cc10")]).then(n.bind(null,"893c"))},B=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-567247ea"),n.e("chunk-6e64621f")]).then(n.bind(null,"6ab7"))};r["a"].use(C["a"]);var M,N=[{path:"/",redirect:"home"},{path:"/home",component:E},{path:"/category",component:A},{path:"/shop",component:L,meta:{title:"购物车"}},{path:"/profile",component:$},{path:"/detail/:iid",component:B}],D=new C["a"]({routes:N,mode:"history"}),I=D,q=n("2f62"),J=n("ade3"),F="add_counter",H="add_to_cart",K=(M={},Object(J["a"])(M,F,(function(t,e){e.count+=1})),Object(J["a"])(M,H,(function(t,e){e.checked=!0,t.cartList.push(e)})),M),U=(n("7db0"),{addCart:function(t,e){return new Promise((function(n,r){var c=t.state.cartList.find((function(t){return t.iid===e.iid}));c?(t.commit(F,c),n("当前商品数量加1")):(e.count=1,t.commit(H,e),n("添加了新的商品"))}))}}),z={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};r["a"].use(q["a"]);var G={cartList:[]},Q=new q["a"].Store({state:G,mutations:K,actions:U,getters:z}),R=Q,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},W=[],X={name:"Toast",props:{},data:function(){return{message:"",isShow:!1}},methods:{show:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;this.isShow=!0,this.message=t,setTimeout((function(){e.isShow=!1,e.message=""}),n)}}},Y=X,Z=(n("6198"),Object(f["a"])(Y,V,W,!1,null,"283c8528",null)),tt=Z.exports,et={install:function(t){var e=t.extend(tt),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},nt=et,rt=n("fe3c"),ct=n.n(rt),at=n("3c68"),it=n.n(at);r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(nt),r["a"].use(it.a,{loading:n("bc5e")}),ct.a.attach(document.body),new r["a"]({render:function(t){return t(T)},router:I,store:R,toast:nt}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},6198:function(t,e,n){"use strict";n("0212")},"62de":function(t,e,n){t.exports=n.p+"img/home-active.cc40b6f2.svg"},"672b":function(t,e,n){t.exports=n.p+"img/category-active.cb2cc09f.svg"},7843:function(t,e,n){t.exports=n.p+"img/shop-active.3f0a2016.svg"},8374:function(t,e,n){"use strict";n("eda2")},"85ec":function(t,e,n){},"86a6":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},aaef:function(t,e,n){t.exports=n.p+"img/shop.c68224ce.svg"},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.48bcea0d.png"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},eda2:function(t,e,n){}});
//# sourceMappingURL=app.5d9bf915.js.map