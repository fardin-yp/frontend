(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2208],{6503:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Admin/routes/messages/Messages",function(){return t(5625)}])},5625:function(e,n,t){"use strict";t.r(n);var s=t(4051),r=t.n(s),i=t(5893),a=t(9669),c=t.n(a),l=t(7294);function o(e,n,t,s,r,i,a){try{var c=e[i](a),l=c.value}catch(o){return void t(o)}c.done?n(l):Promise.resolve(l).then(s,r)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(s,r){var i=e.apply(n,t);function a(e){o(i,s,r,a,c,"next",e)}function c(e){o(i,s,r,a,c,"throw",e)}a(void 0)}))}}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(n){u(e,n,t[n])}))}return e}n.default=function(e){var n=e.route,t=(0,l.useState)(null),s=t[0],a=t[1],o=(0,l.useState)(null),u=o[0],x=o[1],h=(0,l.useState)(null),g=h[0],f=h[1],m=(0,l.useState)(null),b=m[0],j=m[1],w=(0,l.useState)(!1),y=w[0],v=w[1],k=(0,l.useState)(10),C=k[0],_=k[1];(0,l.useEffect)((function(){var e=function(){var e=d(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c().get("http://dreamweb.runflare.run/adminRoute/getMessages",{withCredentials:!0}).then((function(e){a(e.data.Contacts),x(e.data.Consaltings),f(e.data.Exclusives)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=function(){var e=d(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={type:b.type,id:b._id},v(!0),e.prev=2,e.next=5,c().post("http://dreamweb.runflare.run/adminRoute/deleteMessages",n,{withCredentials:!0}).then((function(e){e.data.Consaltings&&(x(e.data.Consaltings),v(!1),j(null)),e.data.Contacts&&(a(e.data.Contacts),v(!1),j(null)),e.data.Exclusives&&(f(e.data.Exclusives),v(!1),j(null))}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),v(!1);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){_((function(e){return e+10}))};return(0,l.useEffect)((function(){_(10)}),[n]),(0,i.jsxs)("div",{className:"products",style:{flexFlow:"column",alignItems:"center",justifyContent:"flex-start"},children:[b&&(0,i.jsxs)("div",{className:"secc-comment",style:{zIndex:"151"},children:[(0,i.jsx)("h1",{children:"\u0622\u06cc\u0627\u0627\u06cc\u0646 \u067e\u06cc\u0627\u0645 \u062d\u0630\u0641 \u0634\u0648\u062f\u061f"}),(0,i.jsx)("img",{src:"/uploads/warning.png",alt:""}),(0,i.jsxs)("button",{disabled:y,onClick:S,children:[y&&(0,i.jsx)("div",{style:{height:"30px",width:"30px",top:"25%"},className:"loading-spinner"}),"\u062d\u0630\u0641 \u067e\u06cc\u0627\u0645"]})]}),b&&(0,i.jsx)("div",{style:{zIndex:"1"},onClick:function(){return j(null)},id:"backDrop",children:"hello"}),"send-exclusive"===n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{height:"max-content",width:"70%",background:"#3f51b5",padding:"10px",borderRadius:"10px",color:"white"},children:"\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0647\u0627\u06cc \u0648\u0628\u0633\u0627\u06cc\u062a \u0627\u062e\u062a\u0635\u0627\u0635\u06cc"}),g&&g.slice(0,C).map((function(e){return(0,i.jsxs)("div",{className:"Admin-messages",children:[(0,i.jsx)("img",{src:"/images/cancel (1).png",onClick:function(){return j(p({},e,{type:"exclusives"}))},alt:""}),(0,i.jsxs)("b",{children:["\u067e\u06cc\u0627\u0645 \u0627\u0632  : ",e.name]}),(0,i.jsxs)("p",{children:["\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633 : ",e.number]}),(0,i.jsxs)("p",{children:[" \u0627\u06cc\u0645\u06cc\u0644 : ",e.email]}),(0,i.jsxs)("p",{children:[" \u062a\u0648\u0636\u06cc\u062d\u0627\u062a : ",e.des]})]},e._id)})),g&&g.length>C&&(0,i.jsxs)("div",{style:{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",background:"white",padding:"0px 15px",borderRadius:"10px",boxShadow:" 0px 2px 8px rgba(0,0,0,0.1) , 0px 0px 15px rgba(0,0,0,0.1)"},onClick:E,children:[(0,i.jsx)("img",{style:{width:"20px"},src:"/images/down-arrow.png",alt:""}),(0,i.jsx)("p",{style:{fontWeight:"600",fontSize:"18px",opacity:"0.7"},children:"\u0646\u062a\u0627\u06cc\u062c \u0628\u06cc\u0634\u062a\u0631 "})]})]}),"send-consulting"===n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{height:"max-content",width:"70%",background:"#3f51b5",padding:"10px",borderRadius:"10px",color:"white"},children:"\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0647\u0627\u06cc \u0645\u0634\u0627\u0648\u0631\u0647"}),u&&u.map((function(e){return(0,i.jsxs)("div",{className:"Admin-messages",children:[(0,i.jsx)("img",{src:"/images/cancel (1).png",onClick:function(){return j(p({},e,{type:"consaltings"}))},alt:""}),(0,i.jsxs)("b",{children:["\u067e\u06cc\u0627\u0645 \u0627\u0632  : ",e.name]}),(0,i.jsxs)("p",{children:["\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633 : ",e.number]})]},e._id)})),u&&u.length>C&&(0,i.jsxs)("div",{style:{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",background:"white",padding:"0px 15px",borderRadius:"10px",boxShadow:" 0px 2px 8px rgba(0,0,0,0.1) , 0px 0px 15px rgba(0,0,0,0.1)"},onClick:E,children:[(0,i.jsx)("img",{style:{width:"20px"},src:"/images/down-arrow.png",alt:""}),(0,i.jsx)("p",{style:{fontWeight:"600",fontSize:"18px",opacity:"0.7"},children:"\u0646\u062a\u0627\u06cc\u062c \u0628\u06cc\u0634\u062a\u0631 "})]})]}),"contact-us"===n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{height:"max-content",width:"70%",background:"#3f51b5",padding:"10px",borderRadius:"10px",color:"white"},children:"\u067e\u06cc\u0627\u0645 \u0647\u0627\u06cc \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627"}),s&&s.map((function(e){return(0,i.jsxs)("div",{className:"Admin-messages",children:[(0,i.jsx)("img",{src:"/images/cancel (1).png",onClick:function(){return j(p({},e,{type:"contacts"}))},alt:""}),(0,i.jsxs)("b",{children:["\u067e\u06cc\u0627\u0645 \u0627\u0632  : ",e.name]}),(0,i.jsxs)("p",{children:[" \u0627\u06cc\u0645\u06cc\u0644 : ",e.email]}),(0,i.jsxs)("p",{children:[" \u0645\u0648\u0636\u0648\u0639 \u067e\u06cc\u0627\u0645 : ",e.message]}),(0,i.jsxs)("p",{children:[" \u062a\u0648\u0636\u06cc\u062d\u0627\u062a : ",e.des]})]},e._id)})),s&&s.length>C&&(0,i.jsxs)("div",{style:{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",background:"white",padding:"0px 15px",borderRadius:"10px",boxShadow:" 0px 2px 8px rgba(0,0,0,0.1) , 0px 0px 15px rgba(0,0,0,0.1)"},onClick:E,children:[(0,i.jsx)("img",{style:{width:"20px"},src:"/images/down-arrow.png",alt:""}),(0,i.jsx)("p",{style:{fontWeight:"600",fontSize:"18px",opacity:"0.7"},children:"\u0646\u062a\u0627\u06cc\u062c \u0628\u06cc\u0634\u062a\u0631 "})]})]})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return n=6503,e(e.s=n);var n}));var n=e.O();_N_E=n}]);