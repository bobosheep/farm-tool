function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2MiI":function(t,n,e){"use strict";e.d(n,"a",(function(){return k}));var a=e("fXoL"),c=e("wHSu"),o=e("ofXK"),i=e("tyNb"),r=e("Nv++");function s(t,n){if(1&t){var e=a.Qb();a.Pb(0,"fa-icon",10),a.Xb("click",(function(){return a.lc(e),a.Zb().goBack()})),a.Ob()}if(2&t){var c=a.Zb();a.fc("icon",c.faArrowLeft)}}function l(t,n){if(1&t&&(a.Nb(0),a.Lb(1,11),a.Mb()),2&t){var e=n.ngIf;a.zb(1),a.fc("ngTemplateOutlet",e)}}function p(t,n){if(1&t&&(a.Pb(0,"div",12),a.tc(1),a.Ob()),2&t){var e=a.Zb();a.zb(1),a.uc(e.title)}}function b(t,n){if(1&t&&(a.Nb(0),a.Lb(1,11),a.Mb()),2&t){var e=n.ngIf;a.zb(1),a.fc("ngTemplateOutlet",e)}}function f(t,n){if(1&t&&(a.Pb(0,"div",13),a.tc(1),a.Ob()),2&t){var e=a.Zb();a.zb(1),a.uc(e.subtitle)}}function u(t,n){if(1&t){var e=a.Qb();a.Pb(0,"fa-icon",14),a.Xb("click",(function(){return a.lc(e),a.Zb().onClickIcon()})),a.Ob()}if(2&t){var c=a.Zb();a.fc("icon",c.customIcon)}}function g(t,n){if(1&t&&(a.Nb(0),a.Lb(1,11),a.Mb()),2&t){var e=n.ngIf;a.zb(1),a.fc("ngTemplateOutlet",e)}}function d(t,n){if(1&t&&(a.Pb(0,"div",15),a.tc(1),a.Ob()),2&t){var e=a.Zb();a.zb(1),a.uc(e.customString)}}var k=function(){var t=function(){function t(n,e,o){_classCallCheck(this,t),this.location=n,this.router=e,this.route=o,this.faArrowLeft=c.a,this.align="center",this.showBackIcon=!0,this.showCustomIcon=!1,this.onClickBack=new a.n,this.onClickCustomIcon=new a.n}return _createClass(t,[{key:"goBack",value:function(){this.onClickBack.emit(!0),this.location.back()}},{key:"getTemplate",value:function(t){return t instanceof a.K?t:null}},{key:"onClickIcon",value:function(){this.onClickCustomIcon.emit(!0)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.Jb(o.g),a.Jb(i.c),a.Jb(i.a))},t.\u0275cmp=a.Db({type:t,selectors:[["app-header"]],inputs:{title:"title",subtitle:"subtitle",showBackIcon:"showBackIcon",showCustomIcon:"showCustomIcon",customIcon:"customIcon",customString:"customString",align:"align"},outputs:{onClickCustomIcon:"onClickCustomIcon",onClickBack:"onClickBack"},decls:15,vars:9,consts:[[1,"wrapper"],[1,"icon-wrapper","back"],[3,"icon","click",4,"ngIf"],[1,"content",3,"ngClass"],[4,"ngIf","ngIfElse"],["defaultTitle",""],["defaultSubtitle",""],[1,"icon-wrapper","custom-icon"],["class","icon",3,"icon","click",4,"ngIf"],["defaultCustomString",""],[3,"icon","click"],[3,"ngTemplateOutlet"],[1,"title"],[1,"subtitle"],[1,"icon",3,"icon","click"],[1,"custom-string"]],template:function(t,n){if(1&t&&(a.Pb(0,"div",0),a.Pb(1,"div",1),a.rc(2,s,1,1,"fa-icon",2),a.Ob(),a.Pb(3,"div",3),a.rc(4,l,2,1,"ng-container",4),a.rc(5,p,2,1,"ng-template",null,5,a.sc),a.rc(7,b,2,1,"ng-container",4),a.rc(8,f,2,1,"ng-template",null,6,a.sc),a.Ob(),a.Pb(10,"div",7),a.rc(11,u,1,1,"fa-icon",8),a.rc(12,g,2,1,"ng-container",4),a.rc(13,d,2,1,"ng-template",null,9,a.sc),a.Ob(),a.Ob()),2&t){var e=a.kc(6),c=a.kc(9),o=a.kc(14);a.zb(2),a.fc("ngIf",n.showBackIcon),a.zb(1),a.fc("ngClass",n.align),a.zb(1),a.fc("ngIf",n.getTemplate(n.title))("ngIfElse",e),a.zb(3),a.fc("ngIf",n.getTemplate(n.subtitle))("ngIfElse",c),a.zb(4),a.fc("ngIf",n.showCustomIcon),a.zb(1),a.fc("ngIf",n.getTemplate(n.customString))("ngIfElse",o)}},directives:[o.k,o.i,r.a,o.m],styles:[".wrapper[_ngcontent-%COMP%]{width:100%;height:48px;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}.content[_ngcontent-%COMP%], .icon-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:auto 8px}.content.left[_ngcontent-%COMP%]{flex:1;flex-direction:row;justify-content:flex-start;align-items:center}.subtitle[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{margin:2px}.icon[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.custom-string[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%]{font-size:14px}.icon-wrapper[_ngcontent-%COMP%]{min-width:32px}"]}),t}()},i854:function(t,n,e){"use strict";e.r(n),e.d(n,"TasksModule",(function(){return it}));var a,c,o,i,r,s=e("ofXK"),l=e("tyNb"),p=e("wHSu"),b=e("fXoL"),f=e("ptfe"),u=e("2MiI"),g=e("gQdY"),d=function(){return["cats",1]},k=function(){return["cats",2]},v=function(){return["cats",3]},_=function(){return["cats",4]},m=function(){return["cats",5]},O=function(){return["cats",6]},C=((a=function(){function t(n){_classCallCheck(this,t),this.ts=n}return _createClass(t,[{key:"ngOnInit",value:function(){document.title="\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b",this.catIcons=[p.r,p.u,p.x,p.w,p.t,p.s,p.v]}}]),t}()).\u0275fac=function(t){return new(t||a)(b.Jb(f.a))},a.\u0275cmp=b.Db({type:a,selectors:[["app-tasks-home"]],decls:9,vars:31,consts:[["title","\u4efb\u52d9\u985e\u5225",3,"showBackIcon"],[1,"container"],[1,"cat-wrapper"],[3,"theme","title","icon","routerLink"]],template:function(t,n){1&t&&(b.Kb(0,"app-header",0),b.Pb(1,"section",1),b.Pb(2,"div",2),b.Kb(3,"app-category-block",3),b.Kb(4,"app-category-block",3),b.Kb(5,"app-category-block",3),b.Kb(6,"app-category-block",3),b.Kb(7,"app-category-block",3),b.Kb(8,"app-category-block",3),b.Ob(),b.Ob()),2&t&&(b.fc("showBackIcon",!1),b.zb(3),b.fc("theme","blue")("title","1-10\u7b49")("icon",n.catIcons[1])("routerLink",b.gc(25,d)),b.zb(1),b.fc("theme","light-blue")("title","11-20\u7b49")("icon",n.catIcons[2])("routerLink",b.gc(26,k)),b.zb(1),b.fc("theme","light-green")("title","21-30\u7b49")("icon",n.catIcons[3])("routerLink",b.gc(27,v)),b.zb(1),b.fc("theme","green")("title","31-40\u7b49")("icon",n.catIcons[4])("routerLink",b.gc(28,_)),b.zb(1),b.fc("theme","yellow")("title","41-50\u7b49")("icon",n.catIcons[5])("routerLink",b.gc(29,m)),b.zb(1),b.fc("theme","orange")("title","51-70\u7b49")("icon",n.catIcons[6])("routerLink",b.gc(30,O)))},directives:[u.a,g.a,l.d],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.title[_ngcontent-%COMP%]{margin:16px auto;font-size:18px;font-weight:700}.cat-wrapper[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:center;align-items:flex-start}.cat-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}"]}),a),h=e("H0Ny"),P=e("Nv++"),w=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){return""}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275pipe=b.Ib({name:"taskType",type:r,pure:!0}),r),I=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){return t.startsWith("1",0)?"":t}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275pipe=b.Ib({name:"taskDescription",type:i,pure:!0}),i),x=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){var n="";return""!==t.item1&&(n="".concat(t.item1,"*").concat(t.item1_number)),"0"!==t.item2&&(n+=", ".concat(t.item2,"*").concat(t.item2_number)),n}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275pipe=b.Ib({name:"taskReward",type:o,pure:!0}),o),y=((c=function(){function t(){_classCallCheck(this,t),this.cropLevel=["","\u4e0b\u7d1a","\u4e2d\u7d1a","\u4e0a\u7d1a","\u7279\u7d1a"],this.cropGrade=["","\u521d\u5b78\u8005","\u884c\u5bb6","\u5c08\u5bb6","\u9054\u4eba","\u738b"],this.cropCategory=["","\u8449\u83dc\u985e","\u6839\u83dc\u985e","\u6c34\u679c\u852c\u83dc\u985e","\u7a40\u7269\u985e"]}return _createClass(t,[{key:"transform",value:function(t){var n;if("number"!=typeof(arguments.length<=1?void 0:arguments[1])&&"string"!=typeof(arguments.length<=1?void 0:arguments[1]))n="";else{var e=arguments.length<=1?void 0:arguments[1];switch("string"==typeof e&&(e=parseInt(e)),e){case 1:n="\u7b49\u7d1a\u9054\u5230 ".concat(t.value1," \u7b49");break;case 2:n="\u5b8c\u6210 ".concat(t.value1," \u7814\u7a76");break;case 3:n="\u64c1\u6709 ".concat(t.value4," \u500b ").concat(t.value1);break;case 5:n="\u7d66 ".concat(t.task_npc,"(NPC) ").concat(t.value1," \u91d1\u5e63");break;case 6:n="\u81f3\u5546\u5e97\u8cfc\u8cb7 ".concat(t.value3,"\u500b ").concat(t.value1);break;case 7:n="\u7d66 ".concat(t.task_npc,"(NPC) ").concat(t.value3,"\u500b ").concat(t.value1);break;case 8:case 9:n="\u7e73\u4ea4 ".concat(t.value3,"\u500b ").concat(this.cropLevel[t.value2]).concat(t.value1);break;case 11:n="\u89d2\u8272\u9ad4\u529b\u503c\u9054\u5230 "+t.value1;break;case 12:n="\u89d2\u8272\u6280\u8853\u503c\u9054\u5230 "+t.value1;break;case 14:n="\u524d\u5f80 ".concat(t.value1," \u7684\u5bb6");break;case 16:n="".concat(t.value1," \u719f\u7df4\u5ea6\u9054\u5230 ").concat(this.cropGrade[t.value2]);break;case 17:n="\u7a2e\u690d ".concat(t.value2," \u500b ").concat(t.value1);case 18:n="\u7a2e\u690d ".concat(t.value2," \u500b ").concat(t.value1);break;case 19:n="\u8015\u571f ".concat(t.value1," \u6b21");break;case 21:n="\u4e0b\u57fa\u80a5 ".concat(t.value1," \u6b21");break;case 23:n="\u88fd\u4f5c ".concat(t.value2," \u500b ").concat(t.value1);break;case 26:n="\u65bc\u7ce7\u5009\u4e00\u6b21\u8ca9\u8ce3 ".concat(t.value1," \u91d1\u5e63"),console.log("\u4e00\u53e3\u6c23\u8ca9\u8ce3");break;case 27:n="\u6536\u5272 ".concat(t.value3," \u500b ").concat(this.cropLevel[t.value2]).concat(t.value1);break;case 28:n="\u4f7f\u7528 ".concat(t.value2," \u500b ").concat(t.value1);break;case 35:n="\u65bd\u80a5 ".concat(t.value1," \u6b21");break;case 40:n="\u81f3\u6c34\u4e95\u88dd\u6c34 ".concat(t.value1," \u6b21");break;case 46:n="\u6f86\u6c34 ".concat(t.value1," \u6b21");break;case 47:n="\u8cfc\u8cb7 ".concat(t.value3," \u500b ").concat(t.value1);break;case 59:n="\u88dd\u7f6e ".concat(t.value4," \u500b ").concat(t.value1);break;case 67:n="\u91e3\u9b5a ".concat(t.value1," \u6b21");break;case 68:n="\u91e3 ".concat(t.value3," \u96bb ").concat(t.value1);break;case 69:n="\u9023\u52d5 Facebook \u5e33\u865f";break;case 73:n="\u6536\u5272 ".concat(t.value1," \u500b\u8f49\u86cb\u4f5c\u7269");break;case 74:n="\u8f49\u86cb ".concat(t.value1," \u6b21");break;case 75:n="\u5c07 ".concat(t.value2," \u500b\u4f5c\u7269\u719f\u7df4\u5ea6\u63d0\u5347\u81f3 ").concat(this.cropGrade[t.value1]);break;case 76:n="\u6536\u5272 ".concat(t.value1," \u500b\u8b8a\u7570\u4f5c\u7269");break;case 77:n="\u6253 ".concat(t.value1," \u96bb\u571f\u64a5\u9f20");break;case 78:n="\u64f4\u5927\u8fb2\u5834\u5f8c\uff0c\u79fb\u9664\u969c\u7919\u7269(\u77f3\u982d\u3001\u6a39\u679d\u7b49)";break;case 79:n="".concat(this.cropCategory[t.value3]," \u4e2d ").concat(t.value2," \u500b\u719f\u7df4\u5ea6\u9054 ").concat(this.cropGrade[t.value1]);break;case 80:n=0==t.value2?"\u7d50\u7de3\u6a39\u4e2d\u64c1\u6709 ".concat(t.value1," \u500b\u63a8\u85a6\u4eba"):"\u7d50\u7de3\u6a39\u4e2d ".concat(t.value1," \u500b\u63a8\u85a6\u4eba\u7b49\u7d1a\u9054\u5230 ").concat(t.value2);break;case 81:n="\u81f3\u8a2d\u5b9a\u4e2d\u5c07\u904a\u6232\u5e33\u865f\u9023\u52d5\u793e\u7fa4\u5e33\u865f";break;case 82:n="\u81f3\u8a2d\u5b9a\u4e2d\u5c07\u904a\u6232\u5e33\u865f\u9023\u52d5 line ";break;case 83:n="\u5b8c\u6210\u68ee\u6797\u7684\u5192\u96aa";break;case 99:n="\u8207 ".concat(t.value1,"(NPC) \u5c0d\u8a71")}}return n}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275pipe=b.Ib({name:"taskRequire",type:c,pure:!0}),c);function M(t,n){if(1&t&&(b.Pb(0,"div",6),b.ac(1,"taskType"),b.Pb(2,"span",7),b.tc(3,"Lv."),b.Ob(),b.tc(4),b.Ob()),2&t){var e=b.Zb().$implicit;b.fc("ngClass",b.bc(1,2,e.task_info.task_type)),b.zb(4),b.vc("",e.task_info.request_level," ")}}function z(t,n){if(1&t&&(b.Pb(0,"span",13),b.Kb(1,"fa-icon",14),b.tc(2),b.Ob()),2&t){var e=b.Zb(2).$implicit,a=b.Zb();b.zb(1),b.fc("icon",a.expIcon),b.zb(1),b.vc(" ",e.task_info.exp," ")}}function T(t,n){if(1&t&&(b.Pb(0,"span",15),b.Kb(1,"fa-icon",14),b.tc(2),b.Ob()),2&t){var e=b.Zb(2).$implicit,a=b.Zb();b.zb(1),b.fc("icon",a.moneyIcon),b.zb(1),b.vc(" ",e.task_info.price," ")}}function L(t,n){if(1&t&&(b.Pb(0,"span",16),b.Kb(1,"fa-icon",14),b.tc(2),b.Ob()),2&t){var e=b.Zb(2).$implicit,a=b.Zb();b.zb(1),b.fc("icon",a.rCoinIcon),b.zb(1),b.vc(" ",e.task_info.price," ")}}function Z(t,n){if(1&t&&(b.Pb(0,"span",17),b.Kb(1,"fa-icon",14),b.tc(2),b.Ob()),2&t){var e=b.Zb(2).$implicit,a=b.Zb();b.zb(1),b.fc("icon",a.itemIcon),b.zb(1),b.vc(" ",("0"!==e.task_info.item1?1:0)+("0"!==e.task_info.item2?1:0)," ")}}function K(t,n){if(1&t&&(b.Pb(0,"div",8),b.rc(1,z,3,2,"span",9),b.rc(2,T,3,2,"span",10),b.rc(3,L,3,2,"span",11),b.rc(4,Z,3,2,"span",12),b.Ob()),2&t){var e=b.Zb().$implicit;b.zb(1),b.fc("ngIf",e.task_info.exp>0),b.zb(1),b.fc("ngIf",1==e.task_info.price_type),b.zb(1),b.fc("ngIf",2==e.task_info.price_type),b.zb(1),b.fc("ngIf",e.task_info.w_item)}}var B=function(t){return["/tasks",t]},j=function(){return{border:"1px solid var(--blue)",boxShadow:"1px 1px 6px 1px rgba(0, 0, 0, 0.2)",borderRadius:"32px 4px 4px 32px"}};function N(t,n){if(1&t&&(b.Pb(0,"app-item-block",3),b.rc(1,M,5,4,"ng-template",null,4,b.sc),b.rc(3,K,5,4,"ng-template",null,5,b.sc),b.Ob()),2&t){var e=n.$implicit,a=b.kc(2),c=b.kc(4);b.fc("title",e.name)("img_url",a)("align","left")("actions",c)("routerLink",b.hc(6,B,e.id))("customStyle",b.gc(8,j))}}function S(t,n){if(1&t&&(b.Pb(0,"div",16),b.Pb(1,"p",17),b.tc(2),b.ac(3,"taskDescription"),b.Ob(),b.Ob()),2&t){var e=b.Zb();b.zb(2),b.vc(" ",b.bc(3,1,e.data.task_info.task_description)," ")}}var F=function(t){return["/tasks",t]};function J(t,n){if(1&t&&(b.Pb(0,"span",20),b.tc(1),b.Ob()),2&t){var e=b.Zb(2);b.fc("routerLink",b.hc(2,F,e.preTaskId[0])),b.zb(1),b.vc(" ",e.data.task_info.pre_task1," ")}}function $(t,n){if(1&t&&(b.Pb(0,"span",20),b.tc(1),b.Ob()),2&t){var e=b.Zb(2);b.fc("routerLink",b.hc(2,F,e.preTaskId[1])),b.zb(1),b.vc(" ",e.data.task_info.pre_task2," ")}}function R(t,n){if(1&t&&(b.Pb(0,"span",20),b.tc(1),b.Ob()),2&t){var e=b.Zb(2);b.fc("routerLink",b.hc(2,F,e.preTaskId[2])),b.zb(1),b.vc(" ",e.data.task_info.pre_task3," ")}}function D(t,n){if(1&t&&(b.Pb(0,"div",18),b.Pb(1,"div",4),b.tc(2,"\u524d\u7f6e\u4efb\u52d9"),b.Ob(),b.Pb(3,"div",5),b.rc(4,J,2,4,"span",19),b.rc(5,$,2,4,"span",19),b.rc(6,R,2,4,"span",19),b.Ob(),b.Ob()),2&t){var e=b.Zb();b.zb(4),b.fc("ngIf","0"!==e.preTaskId[0]),b.zb(1),b.fc("ngIf","0"!==e.preTaskId[1]),b.zb(1),b.fc("ngIf","0"!==e.preTaskId[2])}}function E(t,n){if(1&t&&(b.Pb(0,"p"),b.tc(1),b.Ob()),2&t){var e=n.$implicit,a=n.index;b.zb(1),b.wc(" ",a+1,". ",e," ")}}function G(t,n){if(1&t&&(b.Pb(0,"div",21),b.Pb(1,"div",4),b.tc(2,"\u5efa\u8b70\u4f5c\u6cd5"),b.Ob(),b.Pb(3,"div",5),b.rc(4,E,2,2,"p",22),b.Ob(),b.Ob()),2&t){var e=b.Zb();b.zb(4),b.fc("ngForOf",e.data.suggestions)}}function X(t,n){if(1&t&&(b.Pb(0,"span",26),b.Kb(1,"fa-icon",27),b.tc(2," \u91d1\u5e63 "),b.Ob()),2&t){var e=b.Zb(2);b.zb(1),b.fc("icon",e.moneyIcon)}}function q(t,n){if(1&t&&(b.Pb(0,"span",28),b.Kb(1,"fa-icon",27),b.tc(2," R\u5e63 "),b.Ob()),2&t){var e=b.Zb(2);b.zb(1),b.fc("icon",e.rCoinIcon)}}function H(t,n){if(1&t&&(b.Pb(0,"p",23),b.rc(1,X,3,1,"span",24),b.rc(2,q,3,1,"span",25),b.tc(3),b.Ob()),2&t){var e=b.Zb();b.zb(1),b.fc("ngIf",1==e.data.task_info.price_type),b.zb(1),b.fc("ngIf",2==e.data.task_info.price_type),b.zb(1),b.vc(" ",e.data.task_info.price," ")}}function Q(t,n){if(1&t&&(b.Pb(0,"p",29),b.Pb(1,"span",30),b.Kb(2,"fa-icon",27),b.tc(3," \u7d93\u9a57\u503c "),b.Ob(),b.tc(4),b.Ob()),2&t){var e=b.Zb();b.zb(2),b.fc("icon",e.expIcon),b.zb(2),b.vc(" ",e.data.task_info.exp," ")}}function A(t,n){if(1&t&&(b.Pb(0,"p",31),b.Pb(1,"span",30),b.Kb(2,"fa-icon",27),b.tc(3," \u7269\u54c1 "),b.Ob(),b.Pb(4,"span",32),b.tc(5),b.ac(6,"taskReward"),b.Ob(),b.Ob()),2&t){var e=b.Zb();b.zb(2),b.fc("icon",e.itemIcon),b.zb(3),b.uc(b.bc(6,2,e.data.task_info))}}function U(t,n){if(1&t&&(b.Pb(0,"span",20),b.tc(1),b.Ob()),2&t){var e=n.$implicit;b.fc("routerLink",b.hc(3,F,e.id)),b.zb(1),b.wc(" Lv",e.task_info.request_level,". ",e.name," ")}}function V(t,n){if(1&t&&(b.Pb(0,"div"),b.rc(1,U,2,5,"span",33),b.Ob()),2&t){var e=b.Zb();b.zb(1),b.fc("ngForOf",e.relatedTasks)}}function W(t,n){1&t&&(b.Pb(0,"p"),b.tc(1,"\u7121"),b.Ob())}var Y,tt,nt,et,at=[{path:"",component:C},{path:"cats",children:[{path:":id",component:(tt=function(){function t(n,e){var a=this;_classCallCheck(this,t),this.route=n,this.ts=e,this.checkIcon=p.b,this.expIcon=p.ab,this.moneyIcon=p.o,this.rCoinIcon=p.U,this.itemIcon=p.p,this.route.params.subscribe((function(t){a.data=a.ts.getCategory(t.id),a.title=a.data.name+" (".concat(a.data.details.length,"\u500b)")}))}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),tt.\u0275fac=function(t){return new(t||tt)(b.Jb(l.a),b.Jb(f.a))},tt.\u0275cmp=b.Db({type:tt,selectors:[["app-tasks-group"]],decls:3,vars:3,consts:[[3,"title","align"],[1,"container"],["class","task",3,"title","subtitle","img_url","align","actions","routerLink","customStyle",4,"ngFor","ngForOf"],[1,"task",3,"title","subtitle","img_url","align","actions","routerLink","customStyle"],["coverTemplate",""],["subtitleTemplate",""],[1,"level",3,"ngClass"],[2,"font-size","10px","font-weight","400"],[1,"subtitle"],["class","part exp",4,"ngIf"],["class","part price",4,"ngIf"],["class","part rprice",4,"ngIf"],["class","part item",4,"ngIf"],[1,"part","exp"],[3,"icon"],[1,"part","price"],[1,"part","rprice"],[1,"part","item"]],template:function(t,n){1&t&&(b.Kb(0,"app-header",0),b.Pb(1,"section",1),b.rc(2,N,5,9,"app-item-block",2),b.Ob()),2&t&&(b.fc("title",n.title)("align","center"),b.zb(2),b.fc("ngForOf",n.data.details))},directives:[u.a,s.j,h.a,l.d,s.i,s.k,P.a],pipes:[w],styles:[".level[_ngcontent-%COMP%]{width:32px;height:32px;line-height:32px;font-size:14px;font-weight:600;background-color:var(--blue);color:var(--white);text-align:center;padding:4px;border-radius:50%}.subtitle[_ngcontent-%COMP%]{padding:2px 0 0 8px}.word[_ngcontent-%COMP%]{font-size:14px;padding:4px}.part[_ngcontent-%COMP%]{display:inline-block;font-size:12px;margin:0 4px}.exp[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-blue)}.price[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--yellow)}.rprice[_ngcontent-%COMP%]{color:var(--primary)}.item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-purple)}"]}),tt)}]},{path:":id",component:(Y=function(){function t(n,e){var a=this;_classCallCheck(this,t),this.route=n,this.ts=e,this.expIcon=p.ab,this.moneyIcon=p.o,this.rCoinIcon=p.U,this.itemIcon=p.p,this.relatedTasks=[],this.preTaskId=["0","0","0"],this.route.params.subscribe((function(t){a.data=a.ts.getTaskById(""+t.id),a.title="Lv".concat(a.data.task_info.request_level,". ").concat(a.data.name),a.relatedTasks=a.ts.searchRelated(a.data);var n="0",e="0",c="0";"0"!==a.data.task_info.pre_task1&&(n=a.getTaskId(a.data.task_info.pre_task1)),"0"!==a.data.task_info.pre_task2&&(e=a.getTaskId(a.data.task_info.pre_task2)),"0"!==a.data.task_info.pre_task3&&(c=a.getTaskId(a.data.task_info.pre_task3)),a.preTaskId=[n,e,c]}))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getTaskId",value:function(t){return this.ts.getTaskByName(t).id}}]),t}(),Y.\u0275fac=function(t){return new(t||Y)(b.Jb(l.a),b.Jb(f.a))},Y.\u0275cmp=b.Db({type:Y,selectors:[["app-tasks-detail"]],decls:29,vars:16,consts:[[3,"title","align"],[1,"container"],["class","detail-wrapper",4,"ngIf"],[1,"part","task-detail"],[1,"title"],[1,"content"],["class","part pre-task",4,"ngIf"],["class","part suggestion",4,"ngIf"],[1,"part","reward"],["id","money-reward",4,"ngIf"],["id","exp-reward",4,"ngIf"],["id","item-reward",4,"ngIf"],[1,"part","related"],[1,"subtitle"],[4,"ngIf","ngIfElse"],["noneTemplate",""],[1,"detail-wrapper"],[1,"description"],[1,"part","pre-task"],["class","task-name",3,"routerLink",4,"ngIf"],[1,"task-name",3,"routerLink"],[1,"part","suggestion"],[4,"ngFor","ngForOf"],["id","money-reward"],["class","reward-title coin",4,"ngIf"],["class","reward-title rcoin",4,"ngIf"],[1,"reward-title","coin"],[3,"icon"],[1,"reward-title","rcoin"],["id","exp-reward"],[1,"reward-title"],["id","item-reward"],[2,"display","inline-block"],["class","task-name",3,"routerLink",4,"ngFor","ngForOf"]],template:function(t,n){if(1&t&&(b.Kb(0,"app-header",0),b.Pb(1,"section",1),b.rc(2,S,4,3,"div",2),b.ac(3,"taskDescription"),b.Pb(4,"div",3),b.Pb(5,"div",4),b.tc(6,"\u4efb\u52d9\u8981\u6c42"),b.Ob(),b.Pb(7,"div",5),b.Pb(8,"p"),b.tc(9),b.ac(10,"taskRequire"),b.Ob(),b.Ob(),b.Ob(),b.rc(11,D,7,3,"div",6),b.rc(12,G,5,1,"div",7),b.Pb(13,"div",8),b.Pb(14,"div",4),b.tc(15,"\u5b8c\u6210\u734e\u52f5"),b.Ob(),b.Pb(16,"div",5),b.rc(17,H,4,3,"p",9),b.rc(18,Q,5,2,"p",10),b.rc(19,A,7,4,"p",11),b.Ob(),b.Ob(),b.Pb(20,"div",12),b.Pb(21,"div",4),b.tc(22,"\u76f8\u95dc\u4efb\u52d9"),b.Ob(),b.Pb(23,"div",13),b.tc(24,"(\u540c \u4f5c\u7269\u3001 NPC \u6216 \u9023\u7e8c\u4efb\u52d9 \u7b49\u7b49)"),b.Ob(),b.Pb(25,"div",5),b.rc(26,V,2,1,"div",14),b.rc(27,W,2,0,"ng-template",null,15,b.sc),b.Ob(),b.Ob(),b.Ob()),2&t){var e=b.kc(28);b.fc("title",n.title)("align","center"),b.zb(2),b.fc("ngIf",""!==b.bc(3,11,n.data.task_info.task_description)),b.zb(7),b.uc(b.cc(10,13,n.data.task_info,n.data.task_info.task_type)),b.zb(2),b.fc("ngIf","0"!==n.data.task_info.pre_task1),b.zb(1),b.fc("ngIf",n.data.suggestions),b.zb(5),b.fc("ngIf",n.data.task_info.price_type>0),b.zb(1),b.fc("ngIf",n.data.task_info.exp>0),b.zb(1),b.fc("ngIf",n.data.task_info.w_item),b.zb(7),b.fc("ngIf",n.relatedTasks.length>0)("ngIfElse",e)}},directives:[u.a,s.k,l.d,s.j,P.a],pipes:[I,y,x],styles:['.container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.part[_ngcontent-%COMP%]{width:calc(100% - 16px);max-width:500px;position:relative;margin:8px auto;border-radius:8px 8px 4px 4px;border:1px solid var(--blue)}.part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:8px 0;font-size:16px;font-weight:600;border-radius:8px 8px 0 0}.part[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;text-align:center;color:var(--white);background-color:var(--dark-blue)}.part[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:-1px;padding-top:2px;padding-bottom:8px;font-size:14px;font-weight:500}.part.task-detail[_ngcontent-%COMP%], .part.task-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--red)}.part.task-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--red)}.part.pre-task[_ngcontent-%COMP%], .part.pre-task[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--orange)}.part.pre-task[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--orange)}.part.suggestion[_ngcontent-%COMP%], .part.suggestion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--yellow)}.part.suggestion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--yellow)}.part.reward[_ngcontent-%COMP%], .part.reward[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--green)}.part.reward[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--green)}.detail-wrapper[_ngcontent-%COMP%]{position:relative;width:90%;margin:4px auto;background:var(--object-bg);border-radius:8px}.detail-wrapper[_ngcontent-%COMP%]:before{position:absolute;top:-15px;left:calc(50% - 15px);content:"";width:0;height:0;border-style:solid;border-left:15px solid transparent;border-bottom:20px solid var(--object-bg);border-right:15px solid transparent;border-top:0 solid transparent}.content[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{padding:8px}p[_ngcontent-%COMP%]{padding:4px;margin:8px auto}.task-name[_ngcontent-%COMP%]{padding:6px;margin:4px;box-shadow:1px 1px 4px 1px rgba(0,0,0,.15)}.reward-title[_ngcontent-%COMP%], .task-name[_ngcontent-%COMP%]{display:inline-block;border:1px solid var(--black);border-radius:4px}.reward-title[_ngcontent-%COMP%]{padding:4px;margin-right:8px;font-size:14px}#money-reward[_ngcontent-%COMP%]   .reward-title.coin[_ngcontent-%COMP%]{border-color:#cece65;color:#cece65}#money-reward[_ngcontent-%COMP%]   .reward-title.rcoin[_ngcontent-%COMP%]{border-color:var(--primary);color:var(--primary)}#exp-reward[_ngcontent-%COMP%]   .reward-title[_ngcontent-%COMP%]{border-color:#4d4dcc;color:#4d4dcc}#item-reward[_ngcontent-%COMP%]   .reward-title[_ngcontent-%COMP%]{border-color:var(--dark-purple);color:var(--dark-purple)}']}),Y)}],ct=((nt=function t(){_classCallCheck(this,t)}).\u0275mod=b.Hb({type:nt}),nt.\u0275inj=b.Gb({factory:function(t){return new(t||nt)},imports:[[s.b,l.g.forChild(at)],l.g]}),nt),ot=e("j1ZV"),it=((et=function t(){_classCallCheck(this,t)}).\u0275mod=b.Hb({type:et}),et.\u0275inj=b.Gb({factory:function(t){return new(t||et)},imports:[[s.b,ct,ot.a,P.b]]}),et)}}]);