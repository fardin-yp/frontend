(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1025],{6781:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Auth/resetPassword/[reset]",function(){return t(1997)}])},1997:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return h}});var r=t(4051),s=t.n(r),a=t(5893),i=t(9669),c=t.n(i),o=t(7294),u=t(1163),l=t(9008);function d(e,n,t,r,s,a,i){try{var c=e[a](i),o=c.value}catch(u){return void t(u)}c.done?n(o):Promise.resolve(o).then(r,s)}function p(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function i(e){d(a,r,s,i,c,"next",e)}function c(e){d(a,r,s,i,c,"throw",e)}i(void 0)}))}}var h=!0;n.default=function(e){e.logged;var n=(0,o.useState)(""),t=n[0],r=n[1],i=(0,o.useState)(""),d=i[0],h=i[1],f=(0,o.useState)(!1),x=f[0],v=f[1],g=(0,o.useState)(""),w=g[0],j=g[1],m=(0,o.useState)(!1),y=m[0],_=m[1],b=(0,u.useRouter)();function k(){return(k=p(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),j(""),r={password:t,token:b.query.reset,verify:d},e.prev=3,e.next=6,c().post("http://dreamweb.runflare.run/authentication/reset",r).then((function(e){e.data.errMessage&&(j(e.data.errMessage),_(!1)),e.data.errMessage||(v(!0),_(!1))}));case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:case"end":return e.stop()}}),e,null,[[3,8]])})))).apply(this,arguments)}return x&&["open-sec","sec"],(0,a.jsxs)("div",{className:"background",style:{background:"#f4faff"},children:[(0,a.jsxs)(l.default,{children:[(0,a.jsx)("link",{rel:"icon",href:"/art.png"}),(0,a.jsx)("title",{children:"\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u06a9\u0627\u0646\u062a"})]}),!0===x&&(0,a.jsxs)("div",{className:"secc-comment",children:[(0,a.jsx)("img",{src:"/uploads/accept.png",alt:""}),(0,a.jsx)("h1",{children:"\u0631\u0645\u0632 \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062a\u063a\u06cc\u06cc\u0631 \u06cc\u0627\u0641\u062a!"}),(0,a.jsx)("button",{onClick:function(){window.location="/"},children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})]}),!0===x&&(0,a.jsx)("div",{onClick:function(){return v(!1)},id:"backDrop",children:"hello"}),(0,a.jsxs)("form",{className:"reset-card",children:[(0,a.jsx)("p",{children:" \u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u06a9\u0627\u0646\u062a "}),(0,a.jsx)("input",{style:w?{border:"2px solid red"}:null,type:"password",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062c\u062f\u06cc\u062f",onChange:function(e){return r(e.target.value)},value:t}),(0,a.jsx)("input",{style:w?{border:"2px solid red"}:null,type:"password",placeholder:"\u062a\u0627\u06cc\u06cc\u062f \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",onChange:function(e){return h(e.target.value)},value:d}),(0,a.jsx)("div",{style:{width:"72%"},className:"Auth-err",children:w&&(0,a.jsxs)("label",{children:[(0,a.jsx)("img",{style:{width:"20px",height:"20px"},src:"/images/warning (1).png",alt:"warning"})," ",(0,a.jsx)("p",{children:w})]})}),(0,a.jsxs)("button",{style:{position:"relative"},disabled:y,onClick:function(e){return k.apply(this,arguments)},children:["\u062b\u0628\u062a",y&&(0,a.jsx)("div",{style:{borderRight:"5px solid #0d2040"},className:"loading-spinner"})]})]})]})}},9008:function(e,n,t){e.exports=t(5443)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[9774,2888,179],(function(){return n=6781,e(e.s=n);var n}));var n=e.O();_N_E=n}]);