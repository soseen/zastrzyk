(this["webpackJsonpinjections-tracker"]=this["webpackJsonpinjections-tracker"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/notification.4e6ff350.mp3"},function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=(n(10),n(1)),s=(n(11),function(e){var t=e.date,n=("0"+t.getHours().toLocaleString()).slice(-2)+" : "+("0"+t.getMinutes()).slice(-2)+" : "+("0"+t.getSeconds()).slice(-2);return c.a.createElement("div",{className:"clock"},c.a.createElement("p",{className:"time"},n))}),l=n(4),u=n.n(l),d=function(e){var t=e.scheduledHour,n=e.date,o=Object(a.useState)(!1),r=Object(i.a)(o,2),s=r[0],l=r[1],d=Object(a.useState)(!1),m=Object(i.a)(d,2),f=m[0],h=m[1],p=new Audio(u.a);Object(a.useEffect)((function(){!1===f&&!1===s&&t-n.getHours()===1&&n.getMinutes()>=40?(console.log(t),h(!0),p.play()):!0===f&&!1===s&&t-n.getHours()!==1&&h(!1)}),[f,s,n,t]);return c.a.createElement("div",{onClick:function(e){!s&&f&&h(!1),l(!s)},className:"injection ".concat(s?"injected":""," ").concat(f?"highlighted":"")},c.a.createElement("div",{className:"injection-description"},c.a.createElement("p",null,"Zastrzyk"),c.a.createElement("p",null,"".concat(t,":00"))))};var m=function(){var e=Object(a.useState)(new Date),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){o(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(s,{date:n}),c.a.createElement(d,{scheduledHour:9,date:n}),c.a.createElement(d,{scheduledHour:18,date:n}),c.a.createElement(d,{scheduledHour:22,date:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.86be8724.chunk.js.map