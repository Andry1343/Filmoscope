"use strict";(self.webpackChunkfilmoscope=self.webpackChunkfilmoscope||[]).push([[501],{6501:function(n,t,e){e.r(t),e.d(t,{Reviews:function(){return w},default:function(){return Z}});var r,c,a,u=e(9439),o=e(168),i=e(225),s=i.Z.p(r||(r=(0,o.Z)(["\n  font-weight: 200;\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),p=i.Z.p(c||(c=(0,o.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),f=e(184);function h(n){var t=n.review,e=t.author,r=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)(s,{children:["Author: ",e]}),(0,f.jsxs)(p,{children:["``",r,"``"]})]})}var l=i.Z.ul(a||(a=(0,o.Z)(["\n  padding: 30px 0;\n  border-bottom: 1px solid black;\n  border-image: 1px solid black;\n"])));function d(n){var t=n.reviews;return(0,f.jsx)(l,{children:t.map((function(n){return(0,f.jsx)(h,{review:n},n.id)}))})}var v,x=e(2791),m=e(7689),b=e(7529),g=i.Z.p(v||(v=(0,o.Z)(["\n    font-size: 20px;\n    font-weight: 500;\n    padding: 20px 0;\n    border-bottom: 1px solid black;\n    border-image: 1px solid black;\n"]))),w=function(){var n=(0,x.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],c=(0,x.useState)(null),a=(0,u.Z)(c,2),o=a[0],i=a[1],s=(0,m.UO)().movieId;return(0,x.useEffect)((function(){(0,b.tx)(Number(s)).then((function(n){return r(n.data.results)})).catch((function(n){return i(n.message)}))}),[s]),(0,f.jsxs)(f.Fragment,{children:[o&&"Something wrong, please reload the page...",e.length>0?(0,f.jsx)(d,{reviews:e}):(0,f.jsx)(g,{children:"There is no reviews yet..."})]})},Z=w},7529:function(n,t,e){e.d(t,{Df:function(){return f},TP:function(){return v},UN:function(){return l},Wd:function(){return m},tx:function(){return g}});var r=e(5861),c=e(4687),a=e.n(c),u=e(1912),o="d94f1660bc08f9c6e6ef31fbeee3057f",i="https://api.themoviedb.org/3/",s="trending/movie/day",p="search/movie";function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i).concat(s,"?api_key=").concat(o,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i).concat(p,"?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=501.90f12767.chunk.js.map