(this["webpackJsonpreact-apple-basket"]=this["webpackJsonpreact-apple-basket"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s),c=i(3),r=i.n(c),a=i(4),p=i(7),l=i.n(p),u=i(8),o=i(1),h=function(){function e(){Object(a.a)(this,e),this.appleList=[],this.buttonText="\u6458\u82f9\u679c",this.isPicking=!1,Object(o.o)(this,{appleList:o.p,buttonText:o.p,isPicking:o.p,pickApples:o.j.bound,eatApples:o.f.bound,overApples:o.g,overApplesWeight:o.g,overApplesSum:o.g,eatApplesWeight:o.g,eatApplesSum:o.g})}return Object(u.a)(e,[{key:"pickApples",value:l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isPicking){e.next=2;break}return e.abrupt("return",!1);case 2:return this.buttonText="\u6b63\u5728\u91c7\u6458...",this.isPicking=!0,e.next=6,setTimeout((function(){t.appleList.push({id:t.createAppleId(),title:"\u7ea2\u82f9\u679c - ".concat(t.createAppleId(),"\u53f7"),isEat:!1,weight:t.createWeight()}),t.isPicking=!1,t.buttonText="\u6458\u82f9\u679c"}),2e3);case 6:case"end":return e.stop()}}),e,this)}))},{key:"eatApples",value:function(e){var t=this.appleList.findIndex((function(t){return t.id===e}));-1!==t&&(this.appleList[t].isEat=!0)}},{key:"createAppleId",value:function(){return this.appleList.length+1}},{key:"createWeight",value:function(){return parseInt(200*Math.random())}},{key:"overApples",get:function(){return this.appleList.filter((function(e){return!e.isEat}))}},{key:"overApplesWeight",get:function(){return this.appleList.filter((function(e){return!e.isEat})).reduce((function(e,t){return e+t.weight}),0)}},{key:"overApplesSum",get:function(){return this.appleList.filter((function(e){return!e.isEat})).length}},{key:"eatApplesWeight",get:function(){return this.appleList.filter((function(e){return e.isEat})).reduce((function(e,t){return e+t.weight}),0)}},{key:"eatApplesSum",get:function(){return this.appleList.filter((function(e){return e.isEat})).length}}]),e}(),d=i(2),j=Object(s.createContext)(),b=function(e){var t=e.store,i=e.children;return Object(d.jsx)(j.Provider,{value:t,children:i})},v=function(){return Object(s.useContext)(j)},f=i(5);var m=Object(f.a)((function(e){var t=e.item,i=v().appleStore.eatApples;return Object(d.jsxs)("div",{className:"appleItem",children:[Object(d.jsx)("div",{className:"apple",children:Object(d.jsx)("img",{src:"/images/apple.png",alt:""})}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("div",{className:"name",children:t.title}),Object(d.jsxs)("div",{className:"weight",children:[t.weight,"\u514b"]})]}),Object(d.jsx)("div",{className:"btn-div",children:Object(d.jsx)("button",{onClick:function(){return i(t.id)},children:" \u5403\u6389 "})})]})}));var g=Object(f.a)((function(){var e,t=v().appleStore,i=t.pickApples,s=t.overApples,n=t.overApplesWeight,c=t.overApplesSum,r=t.eatApplesWeight,a=t.eatApplesSum,p=t.isPicking,l=t.buttonText;return s.length||(e=Object(d.jsx)("div",{className:"empty-tip",children:"\u82f9\u679c\u7bee\u5b50\u7a7a\u7a7a\u5982\u4e5f"},"empty")),console.log(t.appleList),Object(d.jsxs)("div",{className:"appleBusket",children:[Object(d.jsx)("div",{className:"title",children:"\u82f9\u679c\u7bee\u5b50"}),Object(d.jsxs)("div",{className:"stats",children:[Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("div",{className:"head",children:"\u5f53\u524d"}),Object(d.jsxs)("div",{className:"content",children:[c,"\u4e2a\u82f9\u679c\uff0c",n,"\u514b"]})]}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("div",{className:"head",children:"\u5df2\u5403\u6389"}),Object(d.jsxs)("div",{className:"content",children:[a,"\u4e2a\u82f9\u679c\uff0c",r,"\u514b"]})]})]}),Object(d.jsxs)("div",{className:"appleList",children:[s.map((function(e){return Object(d.jsx)(m,{item:e},e.id)})),e]}),Object(d.jsx)("div",{className:"btn-div",children:Object(d.jsx)("button",{className:p?"disabled":"",onClick:i,children:l})})]})})),x=new function e(){Object(a.a)(this,e),this.appleStore=new h};var O=function(){return Object(d.jsx)(b,{store:x,children:Object(d.jsx)(g,{})})};i(16),i(17);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fb8a4a37.chunk.js.map