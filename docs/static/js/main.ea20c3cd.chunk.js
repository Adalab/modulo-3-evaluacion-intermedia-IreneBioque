(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(7),s=t.n(a),r=t(9),l=t(1),i=t(5),o=(t(14),t(8)),d=t(0);var b=function(){var e=Object(c.useState)(o),n=Object(i.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)("all"),b=Object(i.a)(s,2),j=b[0],u=b[1],O=Object(c.useState)({name:"",openOnWeekdays:"",openOnWeekend:""}),p=Object(i.a)(O,2),h=p[0],k=p[1],m=function(e){"name"===e.currentTarget.id?k(Object(l.a)(Object(l.a)({},h),{},{name:e.currentTarget.value})):"midweek"===e.currentTarget.id&&!0===e.currentTarget.checked?k(Object(l.a)(Object(l.a)({},h),{},{openOnWeekdays:!0})):"midweek"===e.currentTarget.id&&!1===e.currentTarget.checked?k(Object(l.a)(Object(l.a)({},h),{},{openOnWeekdays:!1})):"weekend"===e.currentTarget.id&&!0===e.currentTarget.checked?k(Object(l.a)(Object(l.a)({},h),{},{openOnWeekend:!0})):"weekend"===e.currentTarget.id&&!1===e.currentTarget.checked&&k(Object(l.a)(Object(l.a)({},h),{},{openOnWeekend:!1}))},x=function(e){console.log(e.currentTarget.id)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{className:"header__title",children:"Mis clubs"}),Object(d.jsxs)("select",{className:"header__select",onChange:function(e){u(e.target.value),console.log(j)},children:[Object(d.jsx)("option",{value:"all",children:"todos"}),Object(d.jsx)("option",{value:"midweek",children:"los que abren entre semana"}),Object(d.jsx)("option",{value:"weekend",children:"los que abren el fin de semana"})]})]}),Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)("ul",{className:"listclub",children:t.filter((function(e){return"midweek"===j?!0===e.openOnWeekdays:"weekend"!==j||!0===e.openOnWeekend})).map((function(e,n){return Object(d.jsxs)("li",{className:"listclub__li",id:n,children:[Object(d.jsxs)("p",{children:["Nombre: ",e.name]}),Object(d.jsxs)("p",{children:["Abierto entre semana: ",e.openOnWeekdays?"Si":"No"]}),Object(d.jsxs)("p",{children:["Abierto el fin de semana: ",e.openOnWeekend?"Si":"No"]}),Object(d.jsx)("i",{class:"far fa-times-circle",onClick:x})]},n)}))}),Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("h2",{children:"A\xf1adir un nuevo club"}),Object(d.jsxs)("label",{children:["Nombre del club"," ",Object(d.jsx)("input",{type:"text",onChange:m,id:"name"})]}),Object(d.jsxs)("label",{children:["\xbfAbre entre semana?"," ",Object(d.jsx)("input",{type:"checkbox",onChange:m,id:"midweek"})]}),Object(d.jsxs)("label",{children:["\xbfAbre los fines semana?"," ",Object(d.jsx)("input",{type:"checkbox",onChange:m,id:"weekend"})]}),Object(d.jsx)("button",{className:"button",onClick:function(e){e.preventDefault(),a([].concat(Object(r.a)(t),[h]))},children:"A\xf1adir un nuevo club"})]})]})]})};s.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.ea20c3cd.chunk.js.map