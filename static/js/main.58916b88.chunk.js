(this.webpackJsonp95Recipes=this.webpackJsonp95Recipes||[]).push([[0],{324:function(e,n,t){e.exports=t(632)},345:function(e,n){},347:function(e,n){},377:function(e,n){},378:function(e,n){},443:function(e,n){},632:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(103),o=t.n(r),c=t(104),l=t.n(c),s=t(180),u=t(72),d=t(37),f=t(181),p=t.n(f),m=t(12),g=t(22),h=t(58),v=t.n(h),w=t(323);function b(){var e=Object(d.a)([""]);return b=function(){return e},e}function y(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n"]);return y=function(){return e},e}var E=m.default.div(y()),x=m.default.span(b()),j=function(e){var n=e.name,t=Object(w.a)(e,["name"]);return i.a.createElement(E,t,i.a.createElement(g.Icon,{name:"file_text",style:{marginBottom:4}}),i.a.createElement(x,null,"".concat(n,".txt")))};function k(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n"]);return k=function(){return e},e}var O=m.default.div(k()),I=function(e){var n=e.recipes,t=e.setSelectedRecipe,a=e.openModal;return i.a.createElement(g.Modal,{title:"".concat(Object.keys(n).length," recipes"),icon:"windows_explorer",defaultPosition:{x:0,y:50},style:{marginLeft:20,height:"auto"},width:window.innerWidth-40,menu:[{name:"File",list:i.a.createElement(g.List,null,i.a.createElement(g.List.Item,null,"Filter"))}]},i.a.createElement(g.Frame,{bg:"white",boxShadow:"in",height:"100%",style:{overflowY:"auto",maxHeight:"60vh"}},i.a.createElement(O,null,Object.values(n).map((function(e){return i.a.createElement(j,{key:e.name,onClick:function(){t(e),a()},name:e.name})})))))},S=t(71),R=t.n(S);function M(){var e=Object(d.a)(["\n  font-size: 40px;\n  width: 100%;\n  text-align: center;\n"]);return M=function(){return e},e}v.a.config({driver:v.a.WEBSQL,name:"95Recipes.db",version:1,size:4980736,storeName:"recipes",description:"Contains all recipes information"});var W=m.default.h1(M());var C=function(){var e=Object(a.useState)({}),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)({}),c=Object(u.a)(o,2),d=c[0],f=c[1],m=Object(a.useState)(!1),h=Object(u.a)(m,2),w=h[0],b=h[1];function y(){b(!1)}return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.getItem("recipes");case 2:(n=e.sent)?r(n):p.a.init({key:"1Uou8R5Bgrdl9M8ykKZeSj5MAl_huugiG3rRIQyMtxvI",callback:function(e,n){var t=n.models;Object.values(t).forEach((function(e){delete e.tabletop,delete e.raw;var n=e.elements.findIndex((function(e){return e.Ingredientes.toLowerCase().includes("preparo")}));e.ingredients=e.elements.slice(0,n),e.preparation=e.elements.slice(n+1,e.elements.length)})),v.a.setItem("recipes",t),r(t)},simpleSheet:!0});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i.a.createElement(g.ThemeProvider,null,i.a.createElement(g.GlobalStyle,null),i.a.createElement(W,null,"95 Recipes "),Object.keys(t).length>0&&i.a.createElement(I,{recipes:t,openModal:function(){b(!0)},setSelectedRecipe:f}),w&&i.a.createElement(g.Modal,{width:window.innerWidth,height:window.innerHeight-30,style:{top:0},icon:"bat_exec",title:d.name,closeModal:y,buttons:[{value:"Close",onClick:y}]},i.a.createElement(R.a,{legend:"Ingredients"},d.ingredients.map((function(e){var n,t=(n=e).Quantidade||n.Medida?"Inteiros"===n.Medida?n.Quantidade:n.Quantidade&&n.Medida?"".concat(n.Quantidade," ").concat(n.Medida):void 0:"";return i.a.createElement("div",{key:e.Ingredientes},i.a.createElement("strong",null,"".concat(t," ").concat(e.Ingredientes)),t?"":" a gosto",e["Observa\xe7\xe3o"]&&" - (".concat(e["Observa\xe7\xe3o"].toLowerCase(),")"))}))),d.preparation.length>0&&i.a.createElement(R.a,{legend:"How to prepare",style:{marginTop:8}},i.a.createElement("ol",{style:{margin:0,padding:"0 0 0 12px"}},d.preparation.map((function(e){return i.a.createElement("li",{key:e.Ingredientes},e.Ingredientes)}))))),i.a.createElement(g.Frame,{style:{position:" fixed",bottom:0,left:0,right:0},width:"100%",p:2},i.a.createElement(g.Button,{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"2px 3px"}},i.a.createElement(g.Icon,{name:"logo",style:{marginRight:4},width:20,height:20}),"Start")))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/95Recipes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/95Recipes","/service-worker.js");L?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(n,e)}))}}()}},[[324,1,2]]]);
//# sourceMappingURL=main.58916b88.chunk.js.map