(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c,a,r=n(0),s=n.n(r),o=n(14),i=n.n(o),j=(n(41),n(17)),l=n(3),u=n(13),b=Object(r.createContext)(),d=Object(r.createContext)(),O=n(1),h=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useContext)(b),s=Object(r.useContext)(d);return Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),n.trim()?(s.addNote(n.trim()).then((function(){a.show("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430","success")})).catch((function(){a.show("\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a","danger")})),c("")):a.show("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0443")},children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430",value:n,onChange:function(e){return c(e.target.value)}})})})},x=n(72),p=n(71),f=function(e){var t=e.notes,n=e.onRemove;return Object(O.jsx)(x.a,{component:"ul",className:"list-group",children:t.map((function(e){return Object(O.jsx)(p.a,{classNames:"note",timeout:800,children:Object(O.jsxs)("li",{className:"list-group-item note",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("strong",{children:e.title}),Object(O.jsx)("small",{children:e.date})]}),Object(O.jsx)("button",{type:"button",className:"btn-outline-primary btn-sm",onClick:function(){return n(e.id)},children:"\xd7"})]})},e.id)}))})},m=function(){return Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("div",{className:"spinner-border",role:"status",children:Object(O.jsx)("span",{className:"sr-only",children:"Loading..."})})})},v=function(){var e=Object(r.useContext)(d),t=e.loading,n=e.notes,c=e.fetchNotes,a=e.removeNote;return Object(r.useEffect)((function(){c()}),[]),Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsx)("hr",{}),t?Object(O.jsx)(m,{}):Object(O.jsx)(f,{notes:n,onRemove:a})]})},N=function(){return Object(O.jsx)("div",{className:"jumbotron",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("h1",{className:"display-3",children:["To-do List ",Object(O.jsx)("p",{className:"display-5",children:"React \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435!"})]}),Object(O.jsxs)("p",{className:"lead",children:["\u0412\u0435\u0440\u0441\u0438\u044f ",Object(O.jsx)("strong",{children:"1.7.1"})]})]})})},y=function(){return Object(O.jsxs)("nav",{className:"navbar navbar-dark navbar-expand-lg bg-primary",children:[Object(O.jsx)("div",{className:"navbar-brand",children:"To-do List"}),Object(O.jsxs)("ul",{className:"navbar-nav",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(j.b,{className:"nav-link",to:"/",exact:!0,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(O.jsx)("li",{children:Object(O.jsx)(j.b,{className:"nav-link",to:"/about",children:"\u0418\u043d\u0444\u0430"})})]})]})},g=function(){var e=Object(r.useContext)(b),t=e.alert,n=e.hide;return Object(O.jsx)(p.a,{in:t.visible,timeout:750,classNames:"alert",mountOnEnter:!0,unmountOnExit:!0,children:Object(O.jsxs)("div",{className:"alert alert-".concat(t.type||"warning"," alert-dismissible"),children:[Object(O.jsx)("strong",{children:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!"}),"\xa0",t.text,Object(O.jsx)("button",{onClick:n,type:"button",className:"close","aria-label":"Close",children:Object(O.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})},E=n(9),w=n(5),C="SHOW_ALERT",T="HIDE_ALERT",L="SHOW_LOADER",k="ADD_NOTE",D="FETCH_NOTES",F="REMOVE_NOTE",R=(c={},Object(E.a)(c,C,(function(e,t){var n=t.payload;return Object(w.a)(Object(w.a)({},n),{},{visible:!0})})),Object(E.a)(c,T,(function(e){return Object(w.a)(Object(w.a)({},e),{},{visible:!1})})),Object(E.a)(c,"DEFAULT",(function(e){return e})),c),A=function(e,t){return(R[t.type]||R.DEFAULT)(e,t)},S=function(e){var t=e.children,n=Object(r.useReducer)(A,{visible:!1}),c=Object(u.a)(n,2),a=c[0],s=c[1];return Object(O.jsx)(b.Provider,{value:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";s({type:C,payload:{text:e,type:t}})},hide:function(){return s({type:T})},alert:a},children:t})},_=n(12),H=n.n(_),P=n(19),U=n(34),I=(a={},Object(E.a)(a,L,(function(e){return Object(w.a)(Object(w.a)({},e),{},{loading:!0})})),Object(E.a)(a,k,(function(e,t){var n=t.payload;return Object(w.a)(Object(w.a)({},e),{},{notes:[].concat(Object(U.a)(e.notes),[n])})})),Object(E.a)(a,D,(function(e,t){var n=t.payload;return Object(w.a)(Object(w.a)({},e),{},{notes:n,loading:!1})})),Object(E.a)(a,F,(function(e,t){var n=t.payload;return Object(w.a)(Object(w.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==n}))})})),Object(E.a)(a,"DEFAULT",(function(e){return e})),a),J=function(e,t){return(I[t.type]||I.DEFAULT)(e,t)},B=n(20),M=n.n(B),W="https://to-do-list-d3a89-default-rtdb.firebaseio.com",V=function(e){var t=e.children,n=Object(r.useReducer)(J,{notes:[],loading:!1}),c=Object(u.a)(n,2),a=c[0],s=c[1],o=function(){return s({type:L})},i=function(){var e=Object(P.a)(H.a.mark((function e(){var t,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),e.next=3,M.a.get("".concat(W,"/notes.json"));case 3:t=e.sent,n=Object.keys(t.data).map((function(e){return Object(w.a)(Object(w.a)({},t.data[e]),{},{id:e})})),s({type:D,payload:n});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(P.a)(H.a.mark((function e(t){var n,c,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t,date:(new Date).toJSON()},e.prev=1,e.next=4,M.a.post("".concat(W,"/notes.json"),n);case 4:c=e.sent,a=Object(w.a)(Object(w.a)({},n),{},{id:c.data.name}),s({type:k,payload:a}),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(P.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.delete("".concat(W,"/notes/").concat(t,".json"));case 2:s({type:F,payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(d.Provider,{value:{showLoader:o,addNote:j,removeNote:l,fetchNotes:i,loading:a.loading,notes:a.notes},children:t})};var q=function(){return Object(O.jsx)(V,{children:Object(O.jsx)(S,{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(y,{}),Object(O.jsxs)("div",{className:"container pt-4",children:[Object(O.jsx)(g,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,component:v}),Object(O.jsx)(l.a,{path:"/about",component:N})]})]})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(q,{})}),document.getElementById("root")),z()}},[[70,1,2]]]);
//# sourceMappingURL=main.11334880.chunk.js.map