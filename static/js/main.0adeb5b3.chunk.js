(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(9),r=c.n(a),i=(c(16),c(17),c(0));var l=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)(d,{})})},o=[{name:"Projeto 1",image:"https://uploads.jovemnerd.com.br/wp-content/uploads/2021/05/luffy-e-o-personagem-favorito-dos-leitores-de-one-piece.jpg",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat debitis voluptates doloremque ducimus placeat aliquam omnis autem blanditiis maxime eum et deserunt pariatur odio, praesentium eaque dignissimos reiciendis, rerum impedit",techs:["React","JavaScript","Redux","Tailwind","CSS"]}];var j=function(){return Object(i.jsxs)("div",{id:"main-content",className:"p-2",children:[Object(i.jsx)(h,{bodyDisplay:!1,project:o[0]}),Object(i.jsx)(h,{bodyDisplay:!1,project:o[0]}),Object(i.jsx)(h,{bodyDisplay:!1,project:o[0]}),Object(i.jsx)(h,{bodyDisplay:!1,project:o[0]})]})};var d=function(){return Object(i.jsx)("section",{className:"h-screen",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{}),Object(i.jsx)("p",{className:"text-yellow-200 text-center text-2xl p-2",children:"Desenvolvedor Front End"}),Object(i.jsx)(p,{}),Object(i.jsx)(h,{bodyDisplay:!0,project:o[0]})]})})};var b=c(3),m="ICARO FERREIRA",x=0;var u=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=c;x<m.length&&(setTimeout((function(){return n(e+m[x-1])}),200),x+=1)}),[c]),Object(i.jsx)("section",{className:"text-yellow-200 text-center pt-6 text-4xl w-full",children:Object(i.jsx)("div",{className:"",children:Object(i.jsxs)("h1",{children:[Object(i.jsx)("span",{children:c}),Object(i.jsx)("span",{className:"animate-pulse",children:"|"})]})})})};c(8);var p=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=t[1],a=function(){n(!c)};return Object(i.jsxs)("div",{className:"shdw grid justify-items-center rounded bg-yellow-100 m-2 mb-16 p-2 mx-auto w-10/12",children:[Object(i.jsxs)("div",{className:"flex space-x-4 text-lg underline",children:[Object(i.jsx)("a",{href:"https://www.linkedin.com/in/icaro-ferreira-gomes-b99681110/",target:"_blank",rel:"noreferrer noopener",children:"Linkedin"}),Object(i.jsx)("a",{href:"https://github.com/icarofgomes",target:"_blank",rel:"noreferrer noopener",children:"Github"})]}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("button",{className:"text-yellow-400 font-bold text-lg",onClick:a,children:"Contato"}),c&&Object(i.jsx)(v,{handleClick:a})]})]})};var h=function(e){var t=e.bodyDisplay,c=void 0!==t&&t,n=e.project,a=n.name,r=n.image,l=n.description,o=n.techs,j=Object(s.useState)(c),d=Object(b.a)(j,2),m=d[0],x=d[1];return Object(i.jsxs)("div",{className:"shdw bg-yellow-100 w-11/12 text-center mx-auto flex-column my-6",children:[Object(i.jsxs)("header",{className:"grid grid-cols-10 gap-4 bg-yellow-400 h-14 text-3xl",onClick:function(){return x(!m)},children:[Object(i.jsx)("h2",{className:"col-start-1 col-end-6 my-auto",children:a}),Object(i.jsx)("div",{className:"col-end-11 col-span-2 my-auto",children:m?"-":"+"})]}),m&&Object(i.jsx)("main",{className:"w-full p-4 grid justify-items-center",children:Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("img",{src:r,className:"w-5/6 mx-auto",alt:a}),Object(i.jsx)("div",{className:"text-left p-2",children:l}),Object(i.jsx)("ul",{className:"text-center mx-auto flex",children:o.map((function(e){return Object(i.jsx)("li",{className:"shadow rounded text-sm bg-yellow-200 p-1 mx-1",children:e})}))})]})})]})},O=(c(19),c(7)),f=c(10),g=c(11);var v=function(e){var t=e.handleClick;return Object(i.jsx)("div",{className:"modal text-center",children:Object(i.jsxs)("div",{className:"bg-yellow-100 m-auto w-10/12 h-48",children:[Object(i.jsx)("h2",{className:"font-bold text-lg pt-1",children:"Contatos"}),Object(i.jsxs)("div",{className:"flex flex-col text-center my-1",children:[Object(i.jsxs)("a",{className:"p-2",href:"https://api.whatsapp.com/send?phone=5511970772734",target:"_blank",rel:"noreferrer noopener",children:[Object(i.jsx)(O.a,{icon:f.a}),Object(i.jsx)("span",{className:"p-1",children:"11 9970772734"})]}),Object(i.jsxs)("a",{className:"p-2",href:"mailto:icaro.iky@gmail.com",target:"_blank",rel:"noreferrer noopener",children:[Object(i.jsx)(O.a,{icon:g.a}),Object(i.jsx)("span",{className:"p-1",children:"icaro.iky@gmail.com"})]})]}),Object(i.jsx)("button",{className:"bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-6",onClick:t,children:"Voltar"})]})})};c(25);var y=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(j,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),N()},8:function(e,t,c){}},[[26,1,2]]]);
//# sourceMappingURL=main.0adeb5b3.chunk.js.map