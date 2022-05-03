function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{S1vP:function(t,e,a){"use strict";a.r(e),a.d(e,"TasksModule",(function(){return kt}));var n,c,r,o,i,s=a("ofXK"),l=a("tyNb"),p=a("wHSu"),b=a("fXoL"),u=a("fz5A"),d=a("jhN1"),f=a("320Y"),g=a("fkMS"),k=function(){return["cats",1]},h=function(){return["cats",2]},v=function(){return["cats",3]},m=function(){return["cats",4]},_=function(){return["cats",5]},O=function(){return["cats",6]},P=((n=function(){function t(e,a,n,c){_classCallCheck(this,t),this.ts=e,this.title=a,this.meta=n,this.router=c}return _createClass(t,[{key:"ngOnInit",value:function(){this.catIcons=[p.s,p.v,p.y,p.x,p.u,p.t,p.w,p.X],this.updateHeader()}},{key:"updateHeader",value:function(){this.title.setTitle("\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayQuestions.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/tasks/"})}},{key:"goSearch",value:function(){this.router.navigate(["tasks","search"])}}]),t}()).\u0275fac=function(t){return new(t||n)(b.Jb(u.a),b.Jb(d.d),b.Jb(d.c),b.Jb(l.c))},n.\u0275cmp=b.Db({type:n,selectors:[["app-tasks-home"]],decls:9,vars:40,consts:[["title","\u4efb\u52d9\u985e\u5225",3,"showBackIcon","showCustomIcon","customString","customIcon","onClickCustomIcon"],[1,"container"],[1,"cat-wrapper","level"],[3,"theme","title","icon","routerLink","url"]],template:function(t,e){1&t&&(b.Pb(0,"app-header",0),b.Xb("onClickCustomIcon",(function(){return e.goSearch()})),b.Ob(),b.Pb(1,"section",1),b.Pb(2,"div",2),b.Kb(3,"app-category-block",3),b.Kb(4,"app-category-block",3),b.Kb(5,"app-category-block",3),b.Kb(6,"app-category-block",3),b.Kb(7,"app-category-block",3),b.Kb(8,"app-category-block",3),b.Ob(),b.Ob()),2&t&&(b.fc("showBackIcon",!1)("showCustomIcon",!0)("customString","\u641c\u5c0b\u4efb\u52d9")("customIcon",e.catIcons[7]),b.zb(3),b.fc("theme","blue")("title","1-10\u7b49")("icon",e.catIcons[1])("routerLink",b.gc(34,k))("url","/tasks/cats/1"),b.zb(1),b.fc("theme","light-blue")("title","11-20\u7b49")("icon",e.catIcons[2])("routerLink",b.gc(35,h))("url","/tasks/cats/2"),b.zb(1),b.fc("theme","light-green")("title","21-30\u7b49")("icon",e.catIcons[3])("routerLink",b.gc(36,v))("url","/tasks/cats/3"),b.zb(1),b.fc("theme","green")("title","31-40\u7b49")("icon",e.catIcons[4])("routerLink",b.gc(37,m))("url","/tasks/cats/4"),b.zb(1),b.fc("theme","yellow")("title","41-50\u7b49")("icon",e.catIcons[5])("routerLink",b.gc(38,_))("url","/tasks/cats/5"),b.zb(1),b.fc("theme","orange")("title","51-70\u7b49")("icon",e.catIcons[6])("routerLink",b.gc(39,O))("url","/tasks/cats/6"))},directives:[f.a,g.a,l.d],styles:[".container[_ngcontent-%COMP%]{width:90%;margin:0 auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.title[_ngcontent-%COMP%]{margin:16px auto;font-size:18px;font-weight:700}.cat-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:flex-start}.cat-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}"]}),n),C=a("5cuq"),x=a("6NWb"),y=((i=function(){function t(){_classCallCheck(this,t),this.typeMapping=[{name:"crop",typeValues:[8,9,27]},{name:"crop-master",typeValues:[16,75,79]},{name:"farm-basic",typeValues:[17,18,19,21,23,35,40,46,73,76]},{name:"farm-building",typeValues:[3,59,78]},{name:"farm-fishing",typeValues:[67,68]},{name:"farm-others",typeValues:[80,77]},{name:"role",typeValues:[1,11,12]}]}return _createClass(t,[{key:"transform",value:function(t){var e="",a=parseInt(t.toString());return this.typeMapping.forEach((function(t){t.typeValues.indexOf(a)>=0&&(e=t.name)})),e}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275pipe=b.Ib({name:"taskType",type:i,pure:!0}),i),w=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){return t.startsWith("1",0)?"":t}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275pipe=b.Ib({name:"taskDescription",type:o,pure:!0}),o),M=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){var e="";return""!==t.item1&&(e="".concat(t.item1," * ").concat(t.item1_number)),"0"!==t.item2&&(e+=", ".concat(t.item2," * ").concat(t.item2_number)),e}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275pipe=b.Ib({name:"taskReward",type:r,pure:!0}),r),I=((c=function(){function t(){_classCallCheck(this,t),this.cropLevel=["","\u4e0b\u7d1a","\u4e2d\u7d1a","\u4e0a\u7d1a","\u7279\u7d1a"],this.cropGrade=["","\u521d\u5b78\u8005","\u884c\u5bb6","\u5c08\u5bb6","\u9054\u4eba","\u738b"],this.cropCategory=["","\u8449\u83dc\u985e","\u6839\u83dc\u985e","\u6c34\u679c\u852c\u83dc\u985e","\u7a40\u7269\u985e"]}return _createClass(t,[{key:"transform",value:function(t){var e;if("number"!=typeof(arguments.length<=1?void 0:arguments[1])&&"string"!=typeof(arguments.length<=1?void 0:arguments[1]))e="";else{var a=arguments.length<=1?void 0:arguments[1];switch("string"==typeof a&&(a=parseInt(a)),a){case 1:e="\u7b49\u7d1a\u9054\u5230 ".concat(t.value1," \u7b49");break;case 2:e="\u5b8c\u6210 ".concat(t.value1," \u7814\u7a76");break;case 3:e="\u64c1\u6709 ".concat(t.value4," \u500b ").concat(t.value1);break;case 5:e="\u7d66 ".concat(t.task_npc,"(NPC) ").concat(t.value1," \u91d1\u5e63");break;case 6:e="\u81f3\u5546\u5e97\u8cfc\u8cb7 ".concat(t.value3,"\u500b ").concat(t.value1);break;case 7:e="\u7d66 ".concat(t.task_npc,"(NPC) ").concat(t.value3,"\u500b ").concat(t.value1);break;case 8:case 9:e="\u7e73\u4ea4 ".concat(t.value3,"\u500b ").concat(this.cropLevel[t.value2]).concat(t.value1);break;case 11:e="\u89d2\u8272\u9ad4\u529b\u503c\u9054\u5230 "+t.value1;break;case 12:e="\u89d2\u8272\u6280\u8853\u503c\u9054\u5230 "+t.value1;break;case 14:e="\u524d\u5f80 ".concat(t.value1," \u7684\u5bb6");break;case 16:e="".concat(t.value1," \u719f\u7df4\u5ea6\u9054\u5230 ").concat(this.cropGrade[t.value2]);break;case 17:e="\u7a2e\u690d ".concat(t.value2," \u500b ").concat(t.value1);case 18:e="\u7a2e\u690d ".concat(t.value2," \u500b ").concat(t.value1);break;case 19:e="\u8015\u571f ".concat(t.value1," \u6b21");break;case 21:e="\u4e0b\u57fa\u80a5 ".concat(t.value1," \u6b21");break;case 23:e="\u88fd\u4f5c ".concat(t.value2," \u500b ").concat(t.value1);break;case 26:e="\u65bc\u7ce7\u5009\u4e00\u6b21\u8ca9\u8ce3 ".concat(t.value1," \u91d1\u5e63"),console.log("\u4e00\u53e3\u6c23\u8ca9\u8ce3");break;case 27:e="\u6536\u5272 ".concat(t.value3," \u500b ").concat(this.cropLevel[t.value2]).concat(t.value1);break;case 28:e="\u4f7f\u7528 ".concat(t.value2," \u500b ").concat(t.value1);break;case 35:e="\u65bd\u80a5 ".concat(t.value1," \u6b21");break;case 40:e="\u81f3\u6c34\u4e95\u88dd\u6c34 ".concat(t.value1," \u6b21");break;case 46:e="\u6f86\u6c34 ".concat(t.value1," \u6b21");break;case 47:e="\u8cfc\u8cb7 ".concat(t.value3," \u500b ").concat(t.value1);break;case 59:e="\u88dd\u7f6e ".concat(t.value4," \u500b ").concat(t.value1);break;case 67:e="\u91e3\u9b5a ".concat(t.value1," \u6b21");break;case 68:e="\u91e3 ".concat(t.value3," \u96bb ").concat(t.value1);break;case 69:e="\u9023\u52d5 Facebook \u5e33\u865f";break;case 73:e="\u6536\u5272 ".concat(t.value1," \u500b\u8f49\u86cb\u4f5c\u7269");break;case 74:e="\u8f49\u86cb ".concat(t.value1," \u6b21");break;case 75:e="\u5c07 ".concat(t.value2," \u500b\u4f5c\u7269\u719f\u7df4\u5ea6\u63d0\u5347\u81f3 ").concat(this.cropGrade[t.value1]);break;case 76:e="\u6536\u5272 ".concat(t.value1," \u500b\u8b8a\u7570\u4f5c\u7269");break;case 77:e="\u6253 ".concat(t.value1," \u96bb\u571f\u64a5\u9f20");break;case 78:e="\u64f4\u5927\u8fb2\u5834\u5f8c\uff0c\u79fb\u9664\u969c\u7919\u7269(\u77f3\u982d\u3001\u6a39\u679d\u7b49)";break;case 79:e="".concat(this.cropCategory[t.value3]," \u4e2d ").concat(t.value2," \u500b\u719f\u7df4\u5ea6\u9054 ").concat(this.cropGrade[t.value1]);break;case 80:e=0==t.value2?"\u7d50\u7de3\u6a39\u4e2d\u64c1\u6709 ".concat(t.value1," \u500b\u63a8\u85a6\u4eba"):"\u7d50\u7de3\u6a39\u4e2d ".concat(t.value1," \u500b\u63a8\u85a6\u4eba\u7b49\u7d1a\u9054\u5230 ").concat(t.value2);break;case 81:e="\u81f3\u8a2d\u5b9a\u4e2d\u5c07\u904a\u6232\u5e33\u865f\u9023\u52d5\u793e\u7fa4\u5e33\u865f";break;case 82:e="\u81f3\u8a2d\u5b9a\u4e2d\u5c07\u904a\u6232\u5e33\u865f\u9023\u52d5 line ";break;case 83:e="\u5b8c\u6210\u68ee\u6797\u7684\u5192\u96aa";break;case 99:e="\u8207 ".concat(t.value1,"(NPC) \u5c0d\u8a71")}}return e}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275pipe=b.Ib({name:"taskRequire",type:c,pure:!0}),c),z=function(t){return["/tasks",t]};function T(t,e){if(1&t&&(b.Pb(0,"a",4),b.tc(1),b.Ob()),2&t){var a=b.Zb();b.fc("routerLink",b.hc(2,z,a.task.id)),b.zb(1),b.vc(" ",a.task.name," ")}}function F(t,e){if(1&t&&(b.Pb(0,"div",5),b.ac(1,"taskType"),b.Pb(2,"span",6),b.tc(3,"Lv."),b.Ob(),b.tc(4),b.Ob()),2&t){var a=b.Zb();b.fc("ngClass",b.bc(1,2,a.task.task_info.task_type)),b.zb(4),b.vc("",a.task.task_info.request_level," ")}}function L(t,e){if(1&t&&(b.Pb(0,"span",12),b.Kb(1,"fa-icon",13),b.tc(2),b.Ob()),2&t){var a=b.Zb(2);b.zb(1),b.fc("icon",a.expIcon),b.zb(1),b.vc(" ",a.task.task_info.exp," ")}}function R(t,e){if(1&t&&(b.Pb(0,"span",14),b.Kb(1,"fa-icon",13),b.tc(2),b.Ob()),2&t){var a=b.Zb(2);b.zb(1),b.fc("icon",a.moneyIcon),b.zb(1),b.vc(" ",a.task.task_info.price," ")}}function K(t,e){if(1&t&&(b.Pb(0,"span",15),b.Kb(1,"fa-icon",13),b.tc(2),b.Ob()),2&t){var a=b.Zb(2);b.zb(1),b.fc("icon",a.rCoinIcon),b.zb(1),b.vc(" ",a.task.task_info.price," ")}}function Z(t,e){if(1&t&&(b.Pb(0,"span",16),b.Kb(1,"fa-icon",13),b.tc(2),b.Ob()),2&t){var a=b.Zb(2);b.zb(1),b.fc("icon",a.itemIcon),b.zb(1),b.vc(" ",("0"!==a.task.task_info.item1?1:0)+("0"!==a.task.task_info.item2?1:0)," ")}}function V(t,e){if(1&t&&(b.Pb(0,"div",7),b.rc(1,L,3,2,"span",8),b.rc(2,R,3,2,"span",9),b.rc(3,K,3,2,"span",10),b.rc(4,Z,3,2,"span",11),b.Ob()),2&t){var a=b.Zb();b.zb(1),b.fc("ngIf",a.task.task_info.exp>0),b.zb(1),b.fc("ngIf",1==a.task.task_info.price_type),b.zb(1),b.fc("ngIf",2==a.task.task_info.price_type),b.zb(1),b.fc("ngIf",a.task.task_info.w_item)}}var j,J=function(){return{border:"1px solid var(--blue)",boxShadow:"1px 1px 6px 1px rgba(0, 0, 0, 0.2)",borderRadius:"32px 4px 4px 32px"}},q=((j=function(){function t(){_classCallCheck(this,t),this.expIcon=p.bb,this.moneyIcon=p.p,this.rCoinIcon=p.V,this.itemIcon=p.q}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||j)},j.\u0275cmp=b.Db({type:j,selectors:[["app-tasks-list-item"]],inputs:{task:"task"},decls:7,vars:9,consts:[[1,"task-wrapper",3,"title","subtitle","img_url","actions","routerLink","url","customStyle"],["titleTemplate",""],["coverTemplate",""],["actionTemplate",""],[1,"title",3,"routerLink"],[1,"level",3,"ngClass"],[2,"font-size","10px","font-weight","400"],[1,"action"],["class","part exp",4,"ngIf"],["class","part price",4,"ngIf"],["class","part rprice",4,"ngIf"],["class","part item",4,"ngIf"],[1,"part","exp"],[3,"icon"],[1,"part","price"],[1,"part","rprice"],[1,"part","item"]],template:function(t,e){if(1&t&&(b.Pb(0,"app-item-block",0),b.rc(1,T,2,4,"ng-template",null,1,b.sc),b.rc(3,F,5,4,"ng-template",null,2,b.sc),b.rc(5,V,5,4,"ng-template",null,3,b.sc),b.Ob()),2&t){var a=b.kc(2),n=b.kc(4),c=b.kc(6);b.fc("title",a)("img_url",n)("actions",c)("routerLink",b.hc(6,z,e.task.id))("url","/tasks/"+e.task.id)("customStyle",b.gc(8,J))}},directives:[C.a,l.d,l.f,s.i,s.k,x.a],pipes:[y],styles:[".subtitle[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{padding:4px 8px;text-align:center;text-align:left;color:var(--black)}.title[_ngcontent-%COMP%]{font-weight:600;font-size:16px}.level[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%]{font-size:14px}.level[_ngcontent-%COMP%]{width:32px;height:32px;line-height:32px;font-weight:600;background-color:var(--blue);color:var(--white);text-align:center;padding:4px;border-radius:50%}.level.crop[_ngcontent-%COMP%]{background-color:var(--red)}.level.crop-master[_ngcontent-%COMP%]{background-color:var(--purple)}.level.farm-basic[_ngcontent-%COMP%]{background-color:var(--primary)}.level.farm-building[_ngcontent-%COMP%]{background-color:var(--dark-blue)}.level.farm-fishing[_ngcontent-%COMP%]{background-color:var(--light-blue)}.level.farm-others[_ngcontent-%COMP%]{background-color:var(--orange)}.level.role[_ngcontent-%COMP%]{background-color:var(--yellow)}.action[_ngcontent-%COMP%]{padding:2px 0 0 8px}.word[_ngcontent-%COMP%]{font-size:14px;padding:4px}.part[_ngcontent-%COMP%]{display:inline-block;font-size:12px;margin:0 4px}.exp[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-blue)}.price[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--yellow)}.rprice[_ngcontent-%COMP%]{color:var(--primary)}.item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-purple)}"]}),j);function D(t,e){1&t&&b.Kb(0,"app-tasks-list-item",3),2&t&&b.fc("task",e.$implicit)}var S,N=((S=function(){function t(e,a,n,c){var r=this;_classCallCheck(this,t),this.route=e,this.ts=a,this.title=n,this.meta=c,this.checkIcon=p.b,this.expIcon=p.bb,this.moneyIcon=p.p,this.rCoinIcon=p.V,this.itemIcon=p.q,this.route.params.subscribe((function(t){r.data=r.ts.getCategory(t.id),r.pageTitle=r.data.name+" (".concat(r.data.details.length,"\u500b)")}))}return _createClass(t,[{key:"ngOnInit",value:function(){this.title.setTitle("\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayQuestions.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/tasks/"})}}]),t}()).\u0275fac=function(t){return new(t||S)(b.Jb(l.a),b.Jb(u.a),b.Jb(d.d),b.Jb(d.c))},S.\u0275cmp=b.Db({type:S,selectors:[["app-tasks-group"]],decls:3,vars:3,consts:[[3,"title","align"],[1,"container"],[3,"task",4,"ngFor","ngForOf"],[3,"task"]],template:function(t,e){1&t&&(b.Kb(0,"app-header",0),b.Pb(1,"section",1),b.rc(2,D,1,1,"app-tasks-list-item",2),b.Ob()),2&t&&(b.fc("title",e.pageTitle)("align","center"),b.zb(2),b.fc("ngForOf",e.data.details))},directives:[f.a,s.j,q],styles:[".level[_ngcontent-%COMP%]{width:32px;height:32px;line-height:32px;font-size:14px;font-weight:600;background-color:var(--blue);color:var(--white);text-align:center;padding:4px;border-radius:50%}.subtitle[_ngcontent-%COMP%]{padding:2px 0 0 8px}.word[_ngcontent-%COMP%]{font-size:14px;padding:4px}.part[_ngcontent-%COMP%]{display:inline-block;font-size:12px;margin:0 4px}.exp[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-blue)}.price[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--yellow)}.rprice[_ngcontent-%COMP%]{color:var(--primary)}.item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-purple)}"]}),S);function G(t,e){if(1&t&&(b.Pb(0,"div",16),b.Pb(1,"p",17),b.tc(2),b.ac(3,"taskDescription"),b.Ob(),b.Ob()),2&t){var a=b.Zb();b.zb(2),b.vc(" ",b.bc(3,1,a.data.task_info.task_description)," ")}}var X=function(t){return["/tasks",t]};function H(t,e){if(1&t&&(b.Pb(0,"span",20),b.tc(1),b.Ob()),2&t){var a=b.Zb(2);b.fc("routerLink",b.hc(2,X,a.preTaskId[0])),b.zb(1),b.vc(" ",a.data.task_info.pre_task1," ")}}function B(t,e){if(1&t&&(b.Pb(0,"span",20),b.tc(1),b.Ob()),2&t){var a=b.Zb(2);b.fc("routerLink",b.hc(2,X,a.preTaskId[1])),b.zb(1),b.vc(" ",a.data.task_info.pre_task2," ")}}function E(t,e){if(1&t&&(b.Pb(0,"span",20),b.tc(1),b.Ob()),2&t){var a=b.Zb(2);b.fc("routerLink",b.hc(2,X,a.preTaskId[2])),b.zb(1),b.vc(" ",a.data.task_info.pre_task3," ")}}function $(t,e){if(1&t&&(b.Pb(0,"div",18),b.Pb(1,"div",4),b.tc(2,"\u524d\u7f6e\u4efb\u52d9"),b.Ob(),b.Pb(3,"div",5),b.rc(4,H,2,4,"span",19),b.rc(5,B,2,4,"span",19),b.rc(6,E,2,4,"span",19),b.Ob(),b.Ob()),2&t){var a=b.Zb();b.zb(4),b.fc("ngIf","0"!==a.preTaskId[0]),b.zb(1),b.fc("ngIf","0"!==a.preTaskId[1]),b.zb(1),b.fc("ngIf","0"!==a.preTaskId[2])}}function Q(t,e){if(1&t&&(b.Pb(0,"p"),b.tc(1),b.Ob()),2&t){var a=e.$implicit,n=e.index;b.zb(1),b.wc(" ",n+1,". ",a," ")}}function W(t,e){if(1&t&&(b.Pb(0,"div",21),b.Pb(1,"div",4),b.tc(2,"\u5efa\u8b70\u4f5c\u6cd5"),b.Ob(),b.Pb(3,"div",5),b.rc(4,Q,2,2,"p",22),b.Ob(),b.Ob()),2&t){var a=b.Zb();b.zb(4),b.fc("ngForOf",a.data.suggestions)}}function A(t,e){if(1&t&&(b.Pb(0,"span",26),b.Kb(1,"fa-icon",27),b.tc(2," \u91d1\u5e63 "),b.Ob()),2&t){var a=b.Zb(2);b.zb(1),b.fc("icon",a.moneyIcon)}}function Y(t,e){if(1&t&&(b.Pb(0,"span",28),b.Kb(1,"fa-icon",27),b.tc(2," R\u5e63 "),b.Ob()),2&t){var a=b.Zb(2);b.zb(1),b.fc("icon",a.rCoinIcon)}}function U(t,e){if(1&t&&(b.Pb(0,"p",23),b.rc(1,A,3,1,"span",24),b.rc(2,Y,3,1,"span",25),b.tc(3),b.ac(4,"number"),b.Ob()),2&t){var a=b.Zb();b.zb(1),b.fc("ngIf",1==a.data.task_info.price_type),b.zb(1),b.fc("ngIf",2==a.data.task_info.price_type),b.zb(1),b.vc(" ",b.bc(4,3,a.data.task_info.price)," ")}}function tt(t,e){if(1&t&&(b.Pb(0,"p",29),b.Pb(1,"span",30),b.Kb(2,"fa-icon",27),b.tc(3," \u7d93\u9a57\u503c "),b.Ob(),b.tc(4),b.ac(5,"number"),b.Ob()),2&t){var a=b.Zb();b.zb(2),b.fc("icon",a.expIcon),b.zb(2),b.vc(" ",b.bc(5,2,a.data.task_info.exp)," ")}}function et(t,e){if(1&t&&(b.Pb(0,"p",31),b.Pb(1,"span",30),b.Kb(2,"fa-icon",27),b.tc(3," \u7269\u54c1 "),b.Ob(),b.Pb(4,"span",32),b.tc(5),b.ac(6,"taskReward"),b.Ob(),b.Ob()),2&t){var a=b.Zb();b.zb(2),b.fc("icon",a.itemIcon),b.zb(3),b.uc(b.bc(6,2,a.data.task_info))}}function at(t,e){if(1&t&&(b.Pb(0,"span",20),b.tc(1),b.Ob()),2&t){var a=e.$implicit;b.fc("routerLink",b.hc(3,X,a.id)),b.zb(1),b.wc(" Lv",a.task_info.request_level,". ",a.name," ")}}function nt(t,e){if(1&t&&(b.Pb(0,"div"),b.rc(1,at,2,5,"span",33),b.Ob()),2&t){var a=b.Zb();b.zb(1),b.fc("ngForOf",a.relatedTasks)}}function ct(t,e){1&t&&(b.Pb(0,"p"),b.tc(1,"\u7121"),b.Ob())}var rt,ot=((rt=function(){function t(e,a,n,c){var r=this;_classCallCheck(this,t),this.route=e,this.ts=a,this.title=n,this.meta=c,this.expIcon=p.bb,this.moneyIcon=p.p,this.rCoinIcon=p.V,this.itemIcon=p.q,this.relatedTasks=[],this.preTaskId=["0","0","0"],this.route.params.subscribe((function(t){var e=r.ts.getTaskById(""+t.id);r.data=Object.assign({},e),r.pageTitle="Lv".concat(r.data.task_info.request_level,". ").concat(r.data.name),r.relatedTasks=r.ts.searchRelated(r.data);var a="0",n="0",c="0";"0"!==r.data.task_info.pre_task1&&(a=r.getTaskId(r.data.task_info.pre_task1)),"0"!==r.data.task_info.pre_task2&&(n=r.getTaskId(r.data.task_info.pre_task2)),"0"!==r.data.task_info.pre_task3&&(c=r.getTaskId(r.data.task_info.pre_task3)),r.preTaskId=[a,n,c],r.title.setTitle(r.data.name+" | \u4efb\u52d9 | RealFarm \u5c0f\u5e6b\u624b"),r.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u300c".concat(r.data.name,"\u300d\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002")}),r.meta.updateTag({name:"apple-mobile-web-app-title",content:r.data.name+" | \u4efb\u52d9 | RealFarm \u5c0f\u5e6b\u624b"}),r.meta.updateTag({property:"og:title",content:r.data.name+" | \u4efb\u52d9 | RealFarm \u5c0f\u5e6b\u624b"}),r.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d".concat(r.data.name,"\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002")}),r.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayQuestions.jpg"}),r.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/tasks/"+r.data.id})}))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getTaskId",value:function(t){return this.ts.getTaskByName(t).id}}]),t}()).\u0275fac=function(t){return new(t||rt)(b.Jb(l.a),b.Jb(u.a),b.Jb(d.d),b.Jb(d.c))},rt.\u0275cmp=b.Db({type:rt,selectors:[["app-tasks-detail"]],decls:29,vars:16,consts:[[3,"title","align"],[1,"container"],["class","detail-wrapper",4,"ngIf"],[1,"part","task-detail"],[1,"title"],[1,"content"],["class","part pre-task",4,"ngIf"],["class","part suggestion",4,"ngIf"],[1,"part","reward"],["id","money-reward",4,"ngIf"],["id","exp-reward",4,"ngIf"],["id","item-reward",4,"ngIf"],[1,"part","related"],[1,"subtitle"],[4,"ngIf","ngIfElse"],["noneTemplate",""],[1,"detail-wrapper"],[1,"description"],[1,"part","pre-task"],["class","task-name",3,"routerLink",4,"ngIf"],[1,"task-name",3,"routerLink"],[1,"part","suggestion"],[4,"ngFor","ngForOf"],["id","money-reward"],["class","reward-title coin",4,"ngIf"],["class","reward-title rcoin",4,"ngIf"],[1,"reward-title","coin"],[3,"icon"],[1,"reward-title","rcoin"],["id","exp-reward"],[1,"reward-title"],["id","item-reward"],[2,"display","inline-block"],["class","task-name",3,"routerLink",4,"ngFor","ngForOf"]],template:function(t,e){if(1&t&&(b.Kb(0,"app-header",0),b.Pb(1,"section",1),b.rc(2,G,4,3,"div",2),b.ac(3,"taskDescription"),b.Pb(4,"div",3),b.Pb(5,"div",4),b.tc(6,"\u4efb\u52d9\u8981\u6c42"),b.Ob(),b.Pb(7,"div",5),b.Pb(8,"p"),b.tc(9),b.ac(10,"taskRequire"),b.Ob(),b.Ob(),b.Ob(),b.rc(11,$,7,3,"div",6),b.rc(12,W,5,1,"div",7),b.Pb(13,"div",8),b.Pb(14,"div",4),b.tc(15,"\u5b8c\u6210\u734e\u52f5"),b.Ob(),b.Pb(16,"div",5),b.rc(17,U,5,5,"p",9),b.rc(18,tt,6,4,"p",10),b.rc(19,et,7,4,"p",11),b.Ob(),b.Ob(),b.Pb(20,"div",12),b.Pb(21,"div",4),b.tc(22,"\u76f8\u95dc\u4efb\u52d9"),b.Ob(),b.Pb(23,"div",13),b.tc(24,"(\u540c \u4f5c\u7269\u3001 NPC \u6216 \u9023\u7e8c\u4efb\u52d9 \u7b49\u7b49)"),b.Ob(),b.Pb(25,"div",5),b.rc(26,nt,2,1,"div",14),b.rc(27,ct,2,0,"ng-template",null,15,b.sc),b.Ob(),b.Ob(),b.Ob()),2&t){var a=b.kc(28);b.fc("title",e.pageTitle)("align","center"),b.zb(2),b.fc("ngIf",""!==b.bc(3,11,e.data.task_info.task_description)),b.zb(7),b.uc(b.cc(10,13,e.data.task_info,e.data.task_info.task_type)),b.zb(2),b.fc("ngIf","0"!==e.data.task_info.pre_task1),b.zb(1),b.fc("ngIf",e.data.suggestions),b.zb(5),b.fc("ngIf",e.data.task_info.price_type>0),b.zb(1),b.fc("ngIf",e.data.task_info.exp>0),b.zb(1),b.fc("ngIf",e.data.task_info.w_item),b.zb(7),b.fc("ngIf",e.relatedTasks.length>0)("ngIfElse",a)}},directives:[f.a,s.k,l.d,s.j,x.a],pipes:[w,I,s.d,M],styles:['.container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.part[_ngcontent-%COMP%]{width:calc(100% - 16px);max-width:500px;position:relative;margin:8px auto;border-radius:8px 8px 4px 4px;border:1px solid var(--blue)}.part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:8px 0;font-size:16px;font-weight:600;border-radius:8px 8px 0 0}.part[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;text-align:center;color:var(--white);background-color:var(--dark-blue)}.part[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:-1px;padding-top:2px;padding-bottom:8px;font-size:14px;font-weight:500}.part.task-detail[_ngcontent-%COMP%], .part.task-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--red)}.part.task-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--red)}.part.pre-task[_ngcontent-%COMP%], .part.pre-task[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--orange)}.part.pre-task[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--orange)}.part.suggestion[_ngcontent-%COMP%], .part.suggestion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--yellow)}.part.suggestion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--yellow)}.part.reward[_ngcontent-%COMP%], .part.reward[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--green)}.part.reward[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--green)}.detail-wrapper[_ngcontent-%COMP%]{position:relative;width:90%;margin:4px auto;background:var(--object-bg);border-radius:8px}.detail-wrapper[_ngcontent-%COMP%]:before{position:absolute;top:-15px;left:calc(50% - 15px);content:"";width:0;height:0;border-style:solid;border-left:15px solid transparent;border-bottom:20px solid var(--object-bg);border-right:15px solid transparent;border-top:0 solid transparent}.content[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{padding:8px}p[_ngcontent-%COMP%]{padding:4px;margin:8px auto}.task-name[_ngcontent-%COMP%]{padding:6px;margin:4px;box-shadow:1px 1px 4px 1px rgba(0,0,0,.15)}.reward-title[_ngcontent-%COMP%], .task-name[_ngcontent-%COMP%]{display:inline-block;border:1px solid var(--black);border-radius:4px}.reward-title[_ngcontent-%COMP%]{padding:4px;margin-right:8px;font-size:14px}#money-reward[_ngcontent-%COMP%]   .reward-title.coin[_ngcontent-%COMP%]{border-color:#cece65;color:#cece65}#money-reward[_ngcontent-%COMP%]   .reward-title.rcoin[_ngcontent-%COMP%]{border-color:var(--primary);color:var(--primary)}#exp-reward[_ngcontent-%COMP%]   .reward-title[_ngcontent-%COMP%]{border-color:#4d4dcc;color:#4d4dcc}#item-reward[_ngcontent-%COMP%]   .reward-title[_ngcontent-%COMP%]{border-color:var(--dark-purple);color:var(--dark-purple)}']}),rt),it=a("3Pt+");function st(t,e){if(1&t&&(b.Pb(0,"div",9),b.Pb(1,"div"),b.tc(2),b.Ob(),b.Ob()),2&t){var a=b.Zb();b.zb(2),b.vc("\u641c\u5c0b\u7d50\u679c\u5171 ",a.results.length," \u500b")}}function lt(t,e){1&t&&b.Kb(0,"app-tasks-list-item",10),2&t&&b.fc("task",e.$implicit)}var pt,bt,ut,dt=[{path:"",component:P},{path:"cats",children:[{path:":id",component:N}]},{path:"search",component:(pt=function(){function t(e,a){var n=this;_classCallCheck(this,t),this.ts=e,this.route=a,this.searchIcon=p.X,this.searchValue="",this.searchPart="name",this.results=[],this.route.queryParams.subscribe((function(t){t.q&&(n.searchValue=t.q,n.search())}))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"search",value:function(){console.log(this.searchValue,this.searchPart),""!==this.searchValue&&(this.results=this.ts.searchTask(this.searchValue,this.searchPart))}}]),t}(),pt.\u0275fac=function(t){return new(t||pt)(b.Jb(u.a),b.Jb(l.a))},pt.\u0275cmp=b.Db({type:pt,selectors:[["app-tasks-search"]],decls:9,vars:4,consts:[["title","\u641c\u5c0b\u4efb\u52d9"],[1,"container"],[1,"input-wrapper"],[1,"input-box"],["type","text",3,"ngModel","ngModelChange"],[1,"icon-button"],[3,"icon"],["class","result-info",4,"ngIf"],[3,"task",4,"ngFor","ngForOf"],[1,"result-info"],[3,"task"]],template:function(t,e){1&t&&(b.Kb(0,"app-header",0),b.Pb(1,"section",1),b.Pb(2,"div",2),b.Pb(3,"div",3),b.Pb(4,"input",4),b.Xb("ngModelChange",(function(t){return e.searchValue=t}))("ngModelChange",(function(){return e.search()})),b.Ob(),b.Pb(5,"div",5),b.Kb(6,"fa-icon",6),b.Ob(),b.Ob(),b.Ob(),b.rc(7,st,3,1,"div",7),b.rc(8,lt,1,1,"app-tasks-list-item",8),b.Ob()),2&t&&(b.zb(4),b.fc("ngModel",e.searchValue),b.zb(2),b.fc("icon",e.searchIcon),b.zb(1),b.fc("ngIf",""!==e.searchValue),b.zb(1),b.fc("ngForOf",e.results))},directives:[f.a,it.b,it.i,it.k,x.a,s.k,s.j,q],styles:[".input-wrapper[_ngcontent-%COMP%]{width:75%;max-width:256px;margin:12px auto}input[_ngcontent-%COMP%]{flex:1;min-width:64px;border:0;outline:0}.input-box[_ngcontent-%COMP%]{width:100%;border-radius:4px;border:1px solid var(--black);padding:4px;display:flex;align-items:center}.icon-button[_ngcontent-%COMP%]{width:16px;height:16px;font-size:16px}.result-info[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),pt)},{path:":id",component:ot}],ft=((bt=function t(){_classCallCheck(this,t)}).\u0275mod=b.Hb({type:bt}),bt.\u0275inj=b.Gb({factory:function(t){return new(t||bt)},imports:[[s.b,l.g.forChild(dt)],l.g]}),bt),gt=a("jICo"),kt=((ut=function t(){_classCallCheck(this,t)}).\u0275mod=b.Hb({type:ut}),ut.\u0275inj=b.Gb({factory:function(t){return new(t||ut)},imports:[[s.b,ft,gt.a,x.b,it.h,it.o]]}),ut)}}]);