(function(e){function t(t){for(var r,a,c=t[0],i=t[1],f=t[2],d=0,s=[];d<c.length;d++)a=c[d],o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(s.length)s.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-05169ae4":"789a7f8e","chunk-06db2872":"77eba7f4","chunk-292b0380":"c37a958f","chunk-2d0aba9c":"99be17a6","chunk-2d0c1074":"1e6af150","chunk-2d21a3d2":"4b92c9b9","chunk-2d229803":"1d7e3761","chunk-2d230cb3":"a569fac4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-05169ae4":1,"chunk-06db2872":1,"chunk-292b0380":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-05169ae4":"838635d9","chunk-06db2872":"6f5c6b45","chunk-292b0380":"e17da21f","chunk-2d0aba9c":"31d6cfe0","chunk-2d0c1074":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d229803":"31d6cfe0","chunk-2d230cb3":"31d6cfe0"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var f=u[c],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){f=s[c],d=f.getAttribute("data-href");if(d===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete a[e],l.parentNode.removeChild(l),n(u)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e),f=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var s=setTimeout(function(){f({type:"timeout",target:d})},12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=t,f=f.slice();for(var s=0;s<f.length;s++)t(f[s]);var l=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u={name:"App"},c=u,i=(n("034f"),n("2877")),f=Object(i["a"])(c,a,o,!1,null,null,null),d=f.exports,s=n("75fc"),l=n("2f62");r["default"].use(l["a"]);var h=new l["a"].Store({state:{menuItems:[{name:"home",size:18,type:"md-home",text:"主页"},{text:"二级菜单",type:"ios-paper",children:[{type:"ios-grid",name:"t1",text:"表格"},{text:"三级菜单",type:"ios-paper",children:[{type:"ios-notifications-outline",name:"msg",text:"查看消息"},{type:"md-lock",name:"password",text:"修改密码"},{type:"md-person",name:"userinfo",text:"基本资料"}]}]}]},mutations:{setMenus:function(e,t){e.menuItems=Object(s["a"])(t)}}}),p=h,m=n("a18c"),b=n("e069"),g=n.n(b),v=n("bc3a"),k=n.n(v),y=(n("dcad"),n("96cf"),n("3b8d")),w=n("ed08"),x=!1;m["b"].beforeEach(function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t,n,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(b["LoadingBar"].start(),localStorage.getItem("token"))if("/login"===t.path)r({path:"/"});else if(x)r();else try{a=Object(w["a"])(p.state.menuItems),m["b"].addRoutes(a),x=!0,r({path:t.path||"/"})}catch(n){Object(w["b"])(),r("/login?redirect=".concat(t.path))}else x=!1,"/login"===t.path?r():r("/login?redirect=".concat(t.path));case 2:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}()),m["b"].afterEach(function(){b["LoadingBar"].finish()}),r["default"].config.productionTip=!1,r["default"].use(g.a),k.a.defaults.baseURL="",k.a.defaults.timeout=5e3,r["default"].prototype.$axios=k.a,new r["default"]({el:"#app",router:m["b"],store:p,render:function(e){return e(d)}})},"64a9":function(e,t,n){},a18c:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"c",function(){return f});var r=n("2b0e"),a=n("8c4f");r["default"].use(a["a"]);var o=[{path:"/login",name:"login",component:function(){return n.e("chunk-05169ae4").then(n.bind(null,"578a"))}},{path:"/",redirect:"/home"}],u={home:{path:"home",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},t1:{path:"t1",name:"t1",component:function(){return n.e("chunk-2d0aba9c").then(n.bind(null,"15df"))}},password:{path:"password",name:"password",component:function(){return n.e("chunk-2d0c1074").then(n.bind(null,"43fe"))}},msg:{path:"msg",name:"msg",component:function(){return n.e("chunk-2d229803").then(n.bind(null,"de5a"))}},userinfo:{path:"userinfo",name:"userinfo",component:function(){return n.e("chunk-2d230cb3").then(n.bind(null,"ee96"))}}},c=function(){return new a["a"]({routes:o})},i=c();function f(){var e=c();i.matcher=e.matcher}t["b"]=i},ed08:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u});n("7f7f");var r=n("a18c");function a(e){var t=[],r=[];return t.push({path:"/",component:function(){return n.e("chunk-292b0380").then(n.bind(null,"86d6"))},children:r}),e.forEach(function(e){o(r,e)}),r.push({path:"error",name:"error",component:function(){return n.e("chunk-06db2872").then(n.bind(null,"3fb9"))}}),t.push({path:"*",redirect:"/error"}),t}function o(e,t){t.name?e.push(r["a"][t.name]):t.children&&t.children.forEach(function(t){o(e,t)})}function u(){localStorage.setItem("token",""),localStorage.setItem("userImg",""),localStorage.setItem("userName",""),Object(r["c"])()}}});
//# sourceMappingURL=app.fc4f8d85.js.map