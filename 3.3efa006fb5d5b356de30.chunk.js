webpackJsonp([3,9],{"8/eW":function(t,n,e){"use strict";var u=e("5oXY"),o=e("qYm3");e.d(n,"a",function(){return i});var i=function(){function t(t,n){this.route=t,this.apiService=n,this.loading=!0,this.item={},this.itemId=this.route.snapshot.data.id}return t.prototype.ngOnInit=function(){var t=this;this.apiService.getPage(this.itemId).subscribe(function(n){return t.item=JSON.parse(n._body)}).add(function(){return t.loading=!1})},t.ctorParameters=function(){return[{type:u.v},{type:o.a}]},t}()},"816B":function(t,n,e){"use strict";e.d(n,"a",function(){return u});var u=function(){function t(){}return t}()},jtsI:function(t,n,e){"use strict";function u(t){return i.E(0,[(t()(),i.F(null,["\n    "])),(t()(),i.G(0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),i.F(null,["",""])),(t()(),i.F(null,["\n    "])),(t()(),i.G(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(t()(),i.F(null,["\n  "]))],null,function(t,n){var e=n.component;t(n,2,0,e.item.name),t(n,4,0,e.item.content)})}function o(t){return i.E(0,[(t()(),i.G(0,null,null,1,"app-index",[],null,null,null,u,s)),i.H(57344,null,0,r.a,[l.v,a.a],null,null)],function(t,n){t(n,1,0)},null)}var i=e("3j3K"),r=e("8/eW"),l=e("5oXY"),a=e("qYm3");e.d(n,"a",function(){return _});var c=[],s=i.D({encapsulation:2,styles:c,data:{}}),_=i.I("app-index",r.a,o,{},{},[])},"x06+":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("3j3K"),o=e("816B"),i=e("2Je8"),r=e("5oXY"),l=e("yGdQ"),a=e("jtsI"),c=e("8/eW");e.d(n,"PagesModuleNgFactory",function(){return f});var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function u(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(u.prototype=e.prototype,new u)}}(),_=function(t){function n(n){return t.call(this,n,[a.a],[])||this}return s(n,t),Object.defineProperty(n.prototype,"_NgLocalization_4",{get:function(){return null==this.__NgLocalization_4&&(this.__NgLocalization_4=new i.a(this.parent.get(u.c))),this.__NgLocalization_4},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._RouterModule_1=new r.q(this.parent.get(r.r,null),this.parent.get(r.j,null)),this._PagesRoutingModule_2=new l.a,this._PagesModule_3=new o.a,this._ROUTES_5=[[{path:"about",component:c.a,data:{id:1}}]],this._PagesModule_3},n.prototype.getInternal=function(t,n){return t===i.b?this._CommonModule_0:t===r.q?this._RouterModule_1:t===l.a?this._PagesRoutingModule_2:t===o.a?this._PagesModule_3:t===i.g?this._NgLocalization_4:t===r.u?this._ROUTES_5:n},n.prototype.destroyInternal=function(){},n}(u.B),f=new u.C(_,o.a)},yGdQ:function(t,n,e){"use strict";var u=e("8/eW");e.d(n,"a",function(){return o});var o=(u.a,function(){function t(){}return t}())}});