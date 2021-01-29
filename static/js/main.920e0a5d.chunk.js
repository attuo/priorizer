(this["webpackJsonppriorizer-app"]=this["webpackJsonppriorizer-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=(a(26),a(7)),l=a(3),s=a(5),u=a(9),d=a(13);var m=a(40);a(27);var b=function(e){var t=e.areaKey,a=e.title,n=e.add;return r.a.createElement("div",{className:"area-title"},r.a.createElement("h2",{className:"title-text"},a),r.a.createElement("button",{onClick:function(){return n(t)}},r.a.createElement(m.a,null)))},f=a(45),v=a(44),p=a(41),g=a(42),O=a(43);var E=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1];function o(t){t.key===e&&c(!0)}var i=function(t){t.key===e&&c(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}}),[]),r};a(30);var j=function(e){var t=e.data,a=e.areaKey,c=e.index,o=e.change,i=e.remove,l=Object(n.useState)(!1),d=Object(s.a)(l,2),m=d[0],b=d[1],f=Object(n.useState)(t.text),v=Object(s.a)(f,2),j=v[0],h=v[1],w=Object(n.useRef)(null),k=E("Enter"),y=E("Escape"),N=Object(n.useCallback)((function(){k&&(o(a,c,j),b(!1))}),[k,j,o]),x=Object(n.useCallback)((function(){y&&(h(t.text),b(!1))}),[y,t.text]);Object(n.useEffect)((function(){m&&w.current.focus()}),[m]),Object(n.useEffect)((function(){m&&(N(),x())}),[N,x,m]);var S=Object(n.useCallback)((function(e){h(e.target.value)}),[h]),I=function(){o(a,c,j),b(!1)},C=function(){b(!0)};return r.a.createElement(u.b,{key:t.id,draggableId:t.id,index:c},(function(e,n){return r.a.createElement("div",Object.assign({className:"todo ".concat(n.isDragging?" active":""," ").concat(m?" active":""),ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement("div",{className:"text-section"},m?r.a.createElement("textarea",{className:"text-input",ref:w,value:j,onChange:S}):r.a.createElement("span",{className:"text-input"},t.text)),r.a.createElement("div",{className:"button-section"},m?r.a.createElement("button",{className:"action-button save-button",onClick:I},r.a.createElement(p.a,null)):r.a.createElement("button",{className:"action-button edit-button",onClick:C},r.a.createElement(g.a,null)),r.a.createElement("button",{className:"action-button remove-button",onClick:function(){return i(a,c)}},r.a.createElement(O.a,null))))}))};a(34);var h=function(e){var t=e.areaKey,a=e.todos,n=e.change,c=e.remove;return r.a.createElement("div",{className:"area-content"},r.a.createElement(u.c,{key:t,droppableId:t},(function(e,o){return r.a.createElement("div",Object.assign({className:"area-droppable"+(o.isDraggingOver?" dragging-over":"")},e.droppableProps,{ref:e.innerRef}),r.a.createElement(f.a,{component:null},a.map((function(e,a){return r.a.createElement(v.a,{key:e.id,classNames:"item",timeout:300,exit:!1},r.a.createElement(j,{areaKey:t,key:e.id,data:e,index:a,change:n,remove:c}))}))),e.placeholder)})))};a(35);var w=function(e){var t=e.data,a=e.areaKey,n=e.add,c=e.change,o=e.remove,i=t.name.toLowerCase();return r.a.createElement("div",{key:a,className:"area ".concat(i,"-area")},r.a.createElement(b,{areaKey:a,title:t.name,add:n}),r.a.createElement(h,{areaKey:a,todos:t.items,change:c,remove:o}))};a(36);var k=function(){var e=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),r=Object(s.a)(a,2),c=r[0],o=r[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("areaList",{doArea:{name:"Do",items:[]},scheduleArea:{name:"Schedule",items:[]},delegateArea:{name:"Delegate",items:[]},eliminateArea:{name:"Eliminate",items:[]},doneArea:{name:"Done",items:[]}}),t=Object(s.a)(e,2),a=t[0],c=t[1],o=function(e){var t={id:Math.random().toString(36).substr(2,9),text:""},n=a[e];n.items.push(t);var r=Object(l.a)(Object(l.a)({},a),{},Object(i.a)({},e,n));c(r)},m=function(e,t){var n=a[e];n.items.splice(t,1);var r=Object(l.a)(Object(l.a)({},a),{},Object(i.a)({},e,n));c(r)},b=function(e,t,n){var r=a[e];r.items[t].text=n;var o=Object(l.a)(Object(l.a)({},a),{},Object(i.a)({},e,r));c(o)},f=Object.entries(a).map((function(e,t){var a=Object(s.a)(e,2),n=a[0],c=a[1];return r.a.createElement(w,{key:n,areaKey:n,data:c,add:o,change:b,remove:m})}));return r.a.createElement("div",{className:"platform"},r.a.createElement("div",{className:"label urgent"},"Urgent"),r.a.createElement("div",{className:"label not-urgent"},"Not urgent"),r.a.createElement("div",{className:"label important"},"Important"),r.a.createElement("div",{className:"label not-important"},"Not important"),r.a.createElement(u.a,{onDragEnd:function(e){return function(e,t,a){if(e.destination){var n=e.source,r=e.destination;if(n.droppableId!==r.droppableId){var c,o=t[n.droppableId],u=t[r.droppableId],m=Object(d.a)(o.items),b=Object(d.a)(u.items),f=m.splice(n.index,1),v=Object(s.a)(f,1)[0];b.splice(r.index,0,v),a(Object(l.a)(Object(l.a)({},t),{},(c={},Object(i.a)(c,n.droppableId,Object(l.a)(Object(l.a)({},o),{},{items:m})),Object(i.a)(c,r.droppableId,Object(l.a)(Object(l.a)({},u),{},{items:b})),c)))}else{var p=t[n.droppableId],g=Object(d.a)(p.items),O=g.splice(n.index,1),E=Object(s.a)(O,1)[0];g.splice(r.index,0,E),a(Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},n.droppableId,Object(l.a)(Object(l.a)({},p),{},{items:g}))))}}}(e,a,c)}},f))};a(37);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(t,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.920e0a5d.chunk.js.map