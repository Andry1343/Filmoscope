"use strict";(self.webpackChunkfilmoscope=self.webpackChunkfilmoscope||[]).push([[733],{733:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return w},default:function(){return b}});var r,c,a,u,i=e(439),o=e(791),s=e(529),p=e(689),f=e(168),d=e(934),l=d.Z.li(r||(r=(0,f.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);\n"]))),h=d.Z.img(c||(c=(0,f.Z)(["\n  width: 100%;\n"]))),x=d.Z.p(a||(a=(0,f.Z)(["\n  font-weight: 200;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n"]))),m=e(184);function g(n){var t=n.actor,e=t.profile_path,r=t.name,c=t.character;return(0,m.jsx)(m.Fragment,{children:e&&(0,m.jsxs)(l,{children:[(0,m.jsx)(h,{src:"".concat("https://image.tmdb.org/t/p/w500")+e,alt:r}),(0,m.jsx)(x,{style:{fontSize:"20px"},children:r}),(0,m.jsxs)(x,{children:["Character: ",c]})]})})}var v=d.Z.ul(u||(u=(0,f.Z)(["\n  padding: 30px 0;\n  text-decoration: none;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(1, 1fr);\n  grid-gap: 20px;\n  border-bottom: 1px solid black;\n  border-image: 1px solid black;\n"]))),w=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],c=(0,p.UO)().movieId,a=(0,o.useState)(null),u=(0,i.Z)(a,2),f=u[0],d=u[1];return(0,o.useEffect)((function(){(0,s.Wd)(Number(c)).then((function(n){return r(n.data.cast)})).catch((function(n){return d(n.message)}))}),[c]),(0,m.jsxs)(m.Fragment,{children:[f&&"Something wrong, reload the page...",(0,m.jsx)(v,{children:e.map((function(n){return(0,m.jsx)(g,{actor:n},n.id)}))})]})},b=w},529:function(n,t,e){e.d(t,{Df:function(){return f},TP:function(){return x},UN:function(){return l},Wd:function(){return g},tx:function(){return w}});var r=e(861),c=e(687),a=e.n(c),u=e(912),i="d94f1660bc08f9c6e6ef31fbeee3057f",o="https://api.themoviedb.org/3/",s="trending/movie/week",p="search/movie";function f(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o).concat(s,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o).concat(p,"?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=733.6fd5b533.chunk.js.map