"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[550],{550:function(t,n,r){r.r(n),r.d(n,{default:function(){return m}});var e=r(861),a=r(439),c=r(757),u=r.n(c),i=r(119),o=r(390),s=r(791),f=r(689),p=r(94),h="castItem_listCasts__QLOBv",d="castItem_error__v6Mkb",v=r(184),l=function(t){var n=t.datacast,r=n.map((function(t){var n=t.id,r=t.original_name,e=t.character,a=t.profile_path;return(0,v.jsxs)("li",{id:n,children:[a?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+a,alt:e,width:"300",height:"450",loading:"lazy"}):(0,v.jsx)("div",{className:d,children:"Sorry, the path to image is broken or ampty"}),(0,v.jsx)("h2",{children:r}),(0,v.jsx)("h3",{children:e})]},n)}));return(0,v.jsx)("ul",{className:h,children:r})},m=function(){var t=(0,s.useState)(!1),n=(0,a.Z)(t,2),r=n[0],c=n[1],h=(0,s.useState)([]),d=(0,a.Z)(h,2),m=d[0],g=d[1],k=(0,f.UO)().movie_id;return(0,s.useEffect)((function(){c(!0);var t=function(){var t=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.vQ)(k);case 3:r=t.sent,g(null!==(n=r.cast)&&void 0!==n&&n.length?r.cast:[]),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),p.Am.error("Something wrong...");case 10:return t.prev=10,c(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[k]),(0,v.jsxs)("div",{children:[r&&(0,v.jsx)(i.a,{}),Boolean(m.length)?(0,v.jsx)(l,{datacast:m}):(0,v.jsx)("p",{children:"We don`t have any information for this query"})]})}},390:function(t,n,r){r.d(n,{TP:function(){return v},_L:function(){return d},q:function(){return g},tx:function(){return m},vQ:function(){return l}});var e=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="ec2e434cc9bc9d3a38f01279780f56eb",o="/trending/movie/day",s="/search/movie",f="/movie",p="/credits",h="/reviews";function d(){return u.Z.get("".concat(o,"?api_key=").concat(i)).then((function(t){return t.data}))}var v=function(){var t=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.Z.get("".concat(f,"/").concat(n,"?api_key=").concat(i)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.Z.get("".concat(f,"/").concat(n).concat(p,"?api_key=").concat(i)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,e.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.Z.get("".concat(f,"/").concat(n).concat(h,"?api_key=").concat(i)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=(0,e.Z)(c().mark((function t(n,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.Z.get("".concat(s,"?api_key=").concat(i,"&query=").concat(n,"&page=").concat(r)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=550.aae76512.chunk.js.map