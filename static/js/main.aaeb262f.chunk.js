(this.webpackJsonpportfolio_v2=this.webpackJsonpportfolio_v2||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.daa8a86d.png"},28:function(e,t,a){e.exports=a.p+"static/media/1.75b5e167.png"},29:function(e,t,a){e.exports=a.p+"static/media/2.a38e6a55.png"},30:function(e,t,a){e.exports=a.p+"static/media/3.d921fdab.png"},31:function(e,t,a){e.exports=a(49)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),r=a.n(o),i=(a(36),a(37),a(38),a(24)),l=a.n(i),s=a(11),u=(a(39),a(8)),m=function(e){var t=e.navClicked,a=e.changeNav,n={top:"".concat(t?"0":"-150vh"),left:"".concat(t?"0":"100vw"),transition:"all .85s"};return c.a.createElement("nav",{style:n,className:"navigation"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(u.b,{to:"/",onClick:a},"Homepage")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/projects",onClick:a},"Projects"))))},d=a(10),p=a(12),h="CHANGE_NAV",f=a(9),g=Object(f.a)([function(e){return e.nav}],(function(e){return e.navClicked})),E=Object(f.b)({navClicked:g}),v=Object(p.f)(Object(d.b)(E,(function(e){return{changeNav:function(){return e({type:h})}}}))((function(e){var t=e.changeNav,a=e.navClicked,n=e.history;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"logo-container"},c.a.createElement("img",{src:l.a,alt:"logo",onClick:function(){return n.push("/")}})),c.a.createElement(s.a,{className:"bars",onClick:t}),c.a.createElement(m,{navClicked:a,changeNav:t}))}))),b=(a(45),a(46),function(){return c.a.createElement("div",{className:"social"},c.a.createElement("div",{className:"social__container social__container-1"},c.a.createElement("a",{href:"https://github.com/NokDawn",target:"_blank",rel:"noopener noreferrer"},"github ",c.a.createElement(s.c,null))),c.a.createElement("div",{className:"social__container social__container-2"},c.a.createElement("a",{href:"mailto:nookdawn@gmail.com?Subject=Hi%20friend",target:"_top"},"email ",c.a.createElement(s.b,null))),c.a.createElement("div",{className:"social__container social__container-3"},"resume ",c.a.createElement(s.d,null)))}),k=Object(p.f)((function(e){var t=e.history;return c.a.createElement("div",{className:"homepage"},c.a.createElement("div",{className:"homepage__main"},c.a.createElement("h1",null,c.a.createElement("span",null,"Hi, It's "),c.a.createElement("span",null,"Mateusz Wojtas")),c.a.createElement("h2",null,"I'm a web developer currently living in Gdansk, Poland"),c.a.createElement("span",null,"Contact me if you want to do something special"),c.a.createElement("button",{onClick:function(){return t.push("/projects")}},"See my Projects")),c.a.createElement(b,null))})),j=(a(47),a(48),Object(d.b)(null,(function(e){return{changeClicked:function(t){return e(function(e){return{type:"CHANGE_CLICKED",payload:e}}(t))}}}))((function(e){var t=e.project,a=e.changeClicked,n=t.name,o=t.image,r=t.tags,i=t.clicked,l=t.id,u=t.description,m=t.github,d={opacity:"".concat(i?"1":"0"),transition:"all .5s",top:"".concat(i?"50%":"-50%"),zIndex:1e3};return c.a.createElement("div",{style:{backgroundImage:function(e){return 0===e?"url(".concat(o.Logo,")"):1===e?"url(".concat(o.Logo1,")"):2===e?"url(".concat(o.Logo2,")"):void 0}(l)},className:"grid"},c.a.createElement("button",{className:"button-view",onClick:function(){return a(l)}},"VIEW PROJECT"),c.a.createElement("div",{className:"container",style:d},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:function(e){return 0===e?o.Logo:1===e?o.Logo1:2===e?o.Logo2:void 0}(l),alt:"logo of the project"})),c.a.createElement("div",{className:"project-details"},c.a.createElement(s.e,{onClick:function(){return a(l)}}),c.a.createElement("h4",null,n),c.a.createElement("div",{className:"tags"},r.map((function(e,t){return c.a.createElement("span",{key:t},e)}))),c.a.createElement("span",null,"ABOUT:"),c.a.createElement("p",null,u),c.a.createElement("button",null,"DEMO"),c.a.createElement("button",null,c.a.createElement("a",{href:m,rel:"noopener noreferrer",target:"_blank"},"CODE")))))}))),C=Object(f.a)([function(e){return e.projects}],(function(e){return e.lists})),N=Object(f.b)({projects:C}),w=Object(d.b)(N)((function(e){var t=e.projects;return c.a.createElement("div",{className:"projects-page"},c.a.createElement("h2",null,"Portfolio"),c.a.createElement("p",null,"Here's the list of my recent projects"),c.a.createElement("div",{className:"grids"},t.map((function(e){return c.a.createElement(j,{key:e.id,project:e})})).reverse()),c.a.createElement(b,null))}));var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/projects",component:w}),c.a.createElement(p.a,{path:"/",component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(13),O=a(27),R=a.n(O),x=a(15),L={navClicked:!1},z=a(28),A=a.n(z),S=a(29),D=a.n(S),H=a(30),I=a.n(H),P={lists:[{id:0,name:"My portfolio website",image:{Logo:A.a},tags:["HTML 5","CSS 3","Javascript","React","Redux","React-Router","Reselect"],description:"Simplified portfolio website, i tried to build this website as simple as possible, without any fluff or extra animations",clicked:!1,github:"https://github.com/NokDawn/portfolio_v1"},{id:1,name:"Pizzeria Chilli",image:{Logo1:D.a},tags:["React","Redux","Reselect","Redux Persist","Firestore"],description:"A project for a pizzeria located near to Gdansk, where a client can choose a pizza from the range of different ones, pick the size of the meal and add it to the basket",clicked:!1,github:"https://github.com/NokDawn/Chilli"},{id:2,name:"Shoprrr Clothes Shop",image:{Logo2:I.a},tags:["React","Redux","Redux Saga","Reselect","Redux Persist","Firebase","Authentication","Stripe"],description:"A shop where user can login and logout, items chosen by the customer are saved thanks to persistance, items data is stored on the firestore site",clicked:!1,github:"https://github.com/NokDawn/Clothesstore"}]},G=Object(_.c)({nav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(x.a)({},e,{navClicked:!e.navClicked});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CLICKED":return Object(x.a)({},e,{lists:e.lists.map((function(e,a){return a===t.payload?Object(x.a)({},e,{clicked:!e.clicked}):e}))});default:return e}}}),J=[R.a],M=Object(_.d)(G,_.a.apply(void 0,J));r.a.render(c.a.createElement(d.a,{store:M},c.a.createElement(u.a,null,c.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.aaeb262f.chunk.js.map