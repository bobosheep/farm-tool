(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2MiI":function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var a=n("fXoL"),c=n("wHSu"),i=n("ofXK"),o=n("tyNb"),r=n("Nv++");function s(t,e){if(1&t){const t=a.Qb();a.Pb(0,"fa-icon",10),a.Xb("click",(function(){return a.lc(t),a.Zb().goBack()})),a.Ob()}if(2&t){const t=a.Zb();a.fc("icon",t.faArrowLeft)}}function l(t,e){if(1&t&&(a.Nb(0),a.Lb(1,11),a.Mb()),2&t){const t=e.ngIf;a.zb(1),a.fc("ngTemplateOutlet",t)}}function p(t,e){if(1&t&&(a.Pb(0,"div",12),a.tc(1),a.Ob()),2&t){const t=a.Zb();a.zb(1),a.uc(t.title)}}function b(t,e){if(1&t&&(a.Nb(0),a.Lb(1,11),a.Mb()),2&t){const t=e.ngIf;a.zb(1),a.fc("ngTemplateOutlet",t)}}function f(t,e){if(1&t&&(a.Pb(0,"div",13),a.tc(1),a.Ob()),2&t){const t=a.Zb();a.zb(1),a.uc(t.subtitle)}}function u(t,e){if(1&t){const t=a.Qb();a.Pb(0,"fa-icon",14),a.Xb("click",(function(){return a.lc(t),a.Zb().onClickIcon()})),a.Ob()}if(2&t){const t=a.Zb();a.fc("icon",t.customIcon)}}function g(t,e){if(1&t&&(a.Nb(0),a.Lb(1,11),a.Mb()),2&t){const t=e.ngIf;a.zb(1),a.fc("ngTemplateOutlet",t)}}function d(t,e){if(1&t&&(a.Pb(0,"div",15),a.tc(1),a.Ob()),2&t){const t=a.Zb();a.zb(1),a.uc(t.customString)}}let k=(()=>{class t{constructor(t,e,n){this.location=t,this.router=e,this.route=n,this.faArrowLeft=c.a,this.align="center",this.showBackIcon=!0,this.showCustomIcon=!1,this.onClickBack=new a.n,this.onClickCustomIcon=new a.n}goBack(){this.onClickBack.emit(!0),this.location.back()}getTemplate(t){return t instanceof a.K?t:null}onClickIcon(){this.onClickCustomIcon.emit(!0)}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(i.g),a.Jb(o.c),a.Jb(o.a))},t.\u0275cmp=a.Db({type:t,selectors:[["app-header"]],inputs:{title:"title",subtitle:"subtitle",showBackIcon:"showBackIcon",showCustomIcon:"showCustomIcon",customIcon:"customIcon",customString:"customString",align:"align"},outputs:{onClickCustomIcon:"onClickCustomIcon",onClickBack:"onClickBack"},decls:15,vars:9,consts:[[1,"wrapper"],[1,"icon-wrapper","back"],[3,"icon","click",4,"ngIf"],[1,"content",3,"ngClass"],[4,"ngIf","ngIfElse"],["defaultTitle",""],["defaultSubtitle",""],[1,"icon-wrapper","custom-icon"],["class","icon",3,"icon","click",4,"ngIf"],["defaultCustomString",""],[3,"icon","click"],[3,"ngTemplateOutlet"],[1,"title"],[1,"subtitle"],[1,"icon",3,"icon","click"],[1,"custom-string"]],template:function(t,e){if(1&t&&(a.Pb(0,"div",0),a.Pb(1,"div",1),a.rc(2,s,1,1,"fa-icon",2),a.Ob(),a.Pb(3,"div",3),a.rc(4,l,2,1,"ng-container",4),a.rc(5,p,2,1,"ng-template",null,5,a.sc),a.rc(7,b,2,1,"ng-container",4),a.rc(8,f,2,1,"ng-template",null,6,a.sc),a.Ob(),a.Pb(10,"div",7),a.rc(11,u,1,1,"fa-icon",8),a.rc(12,g,2,1,"ng-container",4),a.rc(13,d,2,1,"ng-template",null,9,a.sc),a.Ob(),a.Ob()),2&t){const t=a.kc(6),n=a.kc(9),c=a.kc(14);a.zb(2),a.fc("ngIf",e.showBackIcon),a.zb(1),a.fc("ngClass",e.align),a.zb(1),a.fc("ngIf",e.getTemplate(e.title))("ngIfElse",t),a.zb(3),a.fc("ngIf",e.getTemplate(e.subtitle))("ngIfElse",n),a.zb(4),a.fc("ngIf",e.showCustomIcon),a.zb(1),a.fc("ngIf",e.getTemplate(e.customString))("ngIfElse",c)}},directives:[i.k,i.i,r.a,i.m],styles:[".wrapper[_ngcontent-%COMP%]{width:100%;height:48px;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}.content[_ngcontent-%COMP%], .icon-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:auto 8px}.content.left[_ngcontent-%COMP%]{flex:1;flex-direction:row;justify-content:flex-start;align-items:center}.subtitle[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{margin:2px}.icon[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.custom-string[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%]{font-size:14px}.icon-wrapper[_ngcontent-%COMP%]{min-width:32px}"]}),t})()},i854:function(t,e,n){"use strict";n.r(e),n.d(e,"TasksModule",(function(){return W}));var a=n("ofXK"),c=n("tyNb"),i=n("wHSu"),o=n("fXoL"),r=n("ptfe"),s=n("jhN1"),l=n("2MiI"),p=n("gQdY");const b=function(){return["cats",1]},f=function(){return["cats",2]},u=function(){return["cats",3]},g=function(){return["cats",4]},d=function(){return["cats",5]},k=function(){return["cats",6]};let m=(()=>{class t{constructor(t,e,n){this.ts=t,this.title=e,this.meta=n}ngOnInit(){this.catIcons=[i.r,i.u,i.x,i.w,i.t,i.s,i.v],this.title.setTitle("\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayQuestions.JPG"})}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(r.a),o.Jb(s.d),o.Jb(s.c))},t.\u0275cmp=o.Db({type:t,selectors:[["app-tasks-home"]],decls:9,vars:31,consts:[["title","\u4efb\u52d9\u985e\u5225",3,"showBackIcon"],[1,"container"],[1,"cat-wrapper"],[3,"theme","title","icon","routerLink"]],template:function(t,e){1&t&&(o.Kb(0,"app-header",0),o.Pb(1,"section",1),o.Pb(2,"div",2),o.Kb(3,"app-category-block",3),o.Kb(4,"app-category-block",3),o.Kb(5,"app-category-block",3),o.Kb(6,"app-category-block",3),o.Kb(7,"app-category-block",3),o.Kb(8,"app-category-block",3),o.Ob(),o.Ob()),2&t&&(o.fc("showBackIcon",!1),o.zb(3),o.fc("theme","blue")("title","1-10\u7b49")("icon",e.catIcons[1])("routerLink",o.gc(25,b)),o.zb(1),o.fc("theme","light-blue")("title","11-20\u7b49")("icon",e.catIcons[2])("routerLink",o.gc(26,f)),o.zb(1),o.fc("theme","light-green")("title","21-30\u7b49")("icon",e.catIcons[3])("routerLink",o.gc(27,u)),o.zb(1),o.fc("theme","green")("title","31-40\u7b49")("icon",e.catIcons[4])("routerLink",o.gc(28,g)),o.zb(1),o.fc("theme","yellow")("title","41-50\u7b49")("icon",e.catIcons[5])("routerLink",o.gc(29,d)),o.zb(1),o.fc("theme","orange")("title","51-70\u7b49")("icon",e.catIcons[6])("routerLink",o.gc(30,k)))},directives:[l.a,p.a,c.d],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.title[_ngcontent-%COMP%]{margin:16px auto;font-size:18px;font-weight:700}.cat-wrapper[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:center;align-items:flex-start}.cat-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}"]}),t})();var v=n("H0Ny"),h=n("Nv++");let O=(()=>{class t{transform(t,...e){return""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Ib({name:"taskType",type:t,pure:!0}),t})(),_=(()=>{class t{transform(t,...e){return t.startsWith("1",0)?"":t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Ib({name:"taskDescription",type:t,pure:!0}),t})(),P=(()=>{class t{transform(t,...e){let n="";return""!==t.item1&&(n=`${t.item1}*${t.item1_number}`),"0"!==t.item2&&(n+=`, ${t.item2}*${t.item2_number}`),n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Ib({name:"taskReward",type:t,pure:!0}),t})(),I=(()=>{class t{constructor(){this.cropLevel=["","\u4e0b\u7d1a","\u4e2d\u7d1a","\u4e0a\u7d1a","\u7279\u7d1a"],this.cropGrade=["","\u521d\u5b78\u8005","\u884c\u5bb6","\u5c08\u5bb6","\u9054\u4eba","\u738b"],this.cropCategory=["","\u8449\u83dc\u985e","\u6839\u83dc\u985e","\u6c34\u679c\u852c\u83dc\u985e","\u7a40\u7269\u985e"]}transform(t,...e){let n;if("number"!=typeof e[0]&&"string"!=typeof e[0])n="";else{let a=e[0];switch("string"==typeof a&&(a=parseInt(a)),a){case 1:n=`\u7b49\u7d1a\u9054\u5230 ${t.value1} \u7b49`;break;case 2:n=`\u5b8c\u6210 ${t.value1} \u7814\u7a76`;break;case 3:n=`\u64c1\u6709 ${t.value4} \u500b ${t.value1}`;break;case 5:n=`\u7d66 ${t.task_npc}(NPC) ${t.value1} \u91d1\u5e63`;break;case 6:n=`\u81f3\u5546\u5e97\u8cfc\u8cb7 ${t.value3}\u500b ${t.value1}`;break;case 7:n=`\u7d66 ${t.task_npc}(NPC) ${t.value3}\u500b ${t.value1}`;break;case 8:case 9:n=`\u7e73\u4ea4 ${t.value3}\u500b ${this.cropLevel[t.value2]}${t.value1}`;break;case 11:n="\u89d2\u8272\u9ad4\u529b\u503c\u9054\u5230 "+t.value1;break;case 12:n="\u89d2\u8272\u6280\u8853\u503c\u9054\u5230 "+t.value1;break;case 14:n=`\u524d\u5f80 ${t.value1} \u7684\u5bb6`;break;case 16:n=`${t.value1} \u719f\u7df4\u5ea6\u9054\u5230 ${this.cropGrade[t.value2]}`;break;case 17:n=`\u7a2e\u690d ${t.value2} \u500b ${t.value1}`;case 18:n=`\u7a2e\u690d ${t.value2} \u500b ${t.value1}`;break;case 19:n=`\u8015\u571f ${t.value1} \u6b21`;break;case 21:n=`\u4e0b\u57fa\u80a5 ${t.value1} \u6b21`;break;case 23:n=`\u88fd\u4f5c ${t.value2} \u500b ${t.value1}`;break;case 26:n=`\u65bc\u7ce7\u5009\u4e00\u6b21\u8ca9\u8ce3 ${t.value1} \u91d1\u5e63`,console.log("\u4e00\u53e3\u6c23\u8ca9\u8ce3");break;case 27:n=`\u6536\u5272 ${t.value3} \u500b ${this.cropLevel[t.value2]}${t.value1}`;break;case 28:n=`\u4f7f\u7528 ${t.value2} \u500b ${t.value1}`;break;case 35:n=`\u65bd\u80a5 ${t.value1} \u6b21`;break;case 40:n=`\u81f3\u6c34\u4e95\u88dd\u6c34 ${t.value1} \u6b21`;break;case 46:n=`\u6f86\u6c34 ${t.value1} \u6b21`;break;case 47:n=`\u8cfc\u8cb7 ${t.value3} \u500b ${t.value1}`;break;case 59:n=`\u88dd\u7f6e ${t.value4} \u500b ${t.value1}`;break;case 67:n=`\u91e3\u9b5a ${t.value1} \u6b21`;break;case 68:n=`\u91e3 ${t.value3} \u96bb ${t.value1}`;break;case 69:n="\u9023\u52d5 Facebook \u5e33\u865f";break;case 73:n=`\u6536\u5272 ${t.value1} \u500b\u8f49\u86cb\u4f5c\u7269`;break;case 74:n=`\u8f49\u86cb ${t.value1} \u6b21`;break;case 75:n=`\u5c07 ${t.value2} \u500b\u4f5c\u7269\u719f\u7df4\u5ea6\u63d0\u5347\u81f3 ${this.cropGrade[t.value1]}`;break;case 76:n=`\u6536\u5272 ${t.value1} \u500b\u8b8a\u7570\u4f5c\u7269`;break;case 77:n=`\u6253 ${t.value1} \u96bb\u571f\u64a5\u9f20`;break;case 78:n="\u64f4\u5927\u8fb2\u5834\u5f8c\uff0c\u79fb\u9664\u969c\u7919\u7269(\u77f3\u982d\u3001\u6a39\u679d\u7b49)";break;case 79:n=`${this.cropCategory[t.value3]} \u4e2d ${t.value2} \u500b\u719f\u7df4\u5ea6\u9054 ${this.cropGrade[t.value1]}`;break;case 80:n=0==t.value2?`\u7d50\u7de3\u6a39\u4e2d\u64c1\u6709 ${t.value1} \u500b\u63a8\u85a6\u4eba`:`\u7d50\u7de3\u6a39\u4e2d ${t.value1} \u500b\u63a8\u85a6\u4eba\u7b49\u7d1a\u9054\u5230 ${t.value2}`;break;case 81:n="\u81f3\u8a2d\u5b9a\u4e2d\u5c07\u904a\u6232\u5e33\u865f\u9023\u52d5\u793e\u7fa4\u5e33\u865f";break;case 82:n="\u81f3\u8a2d\u5b9a\u4e2d\u5c07\u904a\u6232\u5e33\u865f\u9023\u52d5 line ";break;case 83:n="\u5b8c\u6210\u68ee\u6797\u7684\u5192\u96aa";break;case 99:n=`\u8207 ${t.value1}(NPC) \u5c0d\u8a71`}}return n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Ib({name:"taskRequire",type:t,pure:!0}),t})();function w(t,e){if(1&t&&(o.Pb(0,"div",6),o.ac(1,"taskType"),o.Pb(2,"span",7),o.tc(3,"Lv."),o.Ob(),o.tc(4),o.Ob()),2&t){const t=o.Zb().$implicit;o.fc("ngClass",o.bc(1,2,t.task_info.task_type)),o.zb(4),o.vc("",t.task_info.request_level," ")}}function C(t,e){if(1&t&&(o.Pb(0,"span",13),o.Kb(1,"fa-icon",14),o.tc(2),o.Ob()),2&t){const t=o.Zb(2).$implicit,e=o.Zb();o.zb(1),o.fc("icon",e.expIcon),o.zb(1),o.vc(" ",t.task_info.exp," ")}}function x(t,e){if(1&t&&(o.Pb(0,"span",15),o.Kb(1,"fa-icon",14),o.tc(2),o.Ob()),2&t){const t=o.Zb(2).$implicit,e=o.Zb();o.zb(1),o.fc("icon",e.moneyIcon),o.zb(1),o.vc(" ",t.task_info.price," ")}}function M(t,e){if(1&t&&(o.Pb(0,"span",16),o.Kb(1,"fa-icon",14),o.tc(2),o.Ob()),2&t){const t=o.Zb(2).$implicit,e=o.Zb();o.zb(1),o.fc("icon",e.rCoinIcon),o.zb(1),o.vc(" ",t.task_info.price," ")}}function y(t,e){if(1&t&&(o.Pb(0,"span",17),o.Kb(1,"fa-icon",14),o.tc(2),o.Ob()),2&t){const t=o.Zb(2).$implicit,e=o.Zb();o.zb(1),o.fc("icon",e.itemIcon),o.zb(1),o.vc(" ",("0"!==t.task_info.item1?1:0)+("0"!==t.task_info.item2?1:0)," ")}}function z(t,e){if(1&t&&(o.Pb(0,"div",8),o.rc(1,C,3,2,"span",9),o.rc(2,x,3,2,"span",10),o.rc(3,M,3,2,"span",11),o.rc(4,y,3,2,"span",12),o.Ob()),2&t){const t=o.Zb().$implicit;o.zb(1),o.fc("ngIf",t.task_info.exp>0),o.zb(1),o.fc("ngIf",1==t.task_info.price_type),o.zb(1),o.fc("ngIf",2==t.task_info.price_type),o.zb(1),o.fc("ngIf",t.task_info.w_item)}}const $=function(t){return["/tasks",t]},T=function(){return{border:"1px solid var(--blue)",boxShadow:"1px 1px 6px 1px rgba(0, 0, 0, 0.2)",borderRadius:"32px 4px 4px 32px"}};function L(t,e){if(1&t&&(o.Pb(0,"app-item-block",3),o.rc(1,w,5,4,"ng-template",null,4,o.sc),o.rc(3,z,5,4,"ng-template",null,5,o.sc),o.Ob()),2&t){const t=e.$implicit,n=o.kc(2),a=o.kc(4);o.fc("title",t.name)("img_url",n)("align","left")("actions",a)("routerLink",o.hc(6,$,t.id))("customStyle",o.gc(8,T))}}function Z(t,e){if(1&t&&(o.Pb(0,"div",16),o.Pb(1,"p",17),o.tc(2),o.ac(3,"taskDescription"),o.Ob(),o.Ob()),2&t){const t=o.Zb();o.zb(2),o.vc(" ",o.bc(3,1,t.data.task_info.task_description)," ")}}const K=function(t){return["/tasks",t]};function F(t,e){if(1&t&&(o.Pb(0,"span",20),o.tc(1),o.Ob()),2&t){const t=o.Zb(2);o.fc("routerLink",o.hc(2,K,t.preTaskId[0])),o.zb(1),o.vc(" ",t.data.task_info.pre_task1," ")}}function B(t,e){if(1&t&&(o.Pb(0,"span",20),o.tc(1),o.Ob()),2&t){const t=o.Zb(2);o.fc("routerLink",o.hc(2,K,t.preTaskId[1])),o.zb(1),o.vc(" ",t.data.task_info.pre_task2," ")}}function N(t,e){if(1&t&&(o.Pb(0,"span",20),o.tc(1),o.Ob()),2&t){const t=o.Zb(2);o.fc("routerLink",o.hc(2,K,t.preTaskId[2])),o.zb(1),o.vc(" ",t.data.task_info.pre_task3," ")}}function j(t,e){if(1&t&&(o.Pb(0,"div",18),o.Pb(1,"div",4),o.tc(2,"\u524d\u7f6e\u4efb\u52d9"),o.Ob(),o.Pb(3,"div",5),o.rc(4,F,2,4,"span",19),o.rc(5,B,2,4,"span",19),o.rc(6,N,2,4,"span",19),o.Ob(),o.Ob()),2&t){const t=o.Zb();o.zb(4),o.fc("ngIf","0"!==t.preTaskId[0]),o.zb(1),o.fc("ngIf","0"!==t.preTaskId[1]),o.zb(1),o.fc("ngIf","0"!==t.preTaskId[2])}}function J(t,e){if(1&t&&(o.Pb(0,"p"),o.tc(1),o.Ob()),2&t){const t=e.$implicit,n=e.index;o.zb(1),o.wc(" ",n+1,". ",t," ")}}function R(t,e){if(1&t&&(o.Pb(0,"div",21),o.Pb(1,"div",4),o.tc(2,"\u5efa\u8b70\u4f5c\u6cd5"),o.Ob(),o.Pb(3,"div",5),o.rc(4,J,2,2,"p",22),o.Ob(),o.Ob()),2&t){const t=o.Zb();o.zb(4),o.fc("ngForOf",t.data.suggestions)}}function S(t,e){if(1&t&&(o.Pb(0,"span",26),o.Kb(1,"fa-icon",27),o.tc(2," \u91d1\u5e63 "),o.Ob()),2&t){const t=o.Zb(2);o.zb(1),o.fc("icon",t.moneyIcon)}}function D(t,e){if(1&t&&(o.Pb(0,"span",28),o.Kb(1,"fa-icon",27),o.tc(2," R\u5e63 "),o.Ob()),2&t){const t=o.Zb(2);o.zb(1),o.fc("icon",t.rCoinIcon)}}function G(t,e){if(1&t&&(o.Pb(0,"p",23),o.rc(1,S,3,1,"span",24),o.rc(2,D,3,1,"span",25),o.tc(3),o.Ob()),2&t){const t=o.Zb();o.zb(1),o.fc("ngIf",1==t.data.task_info.price_type),o.zb(1),o.fc("ngIf",2==t.data.task_info.price_type),o.zb(1),o.vc(" ",t.data.task_info.price," ")}}function E(t,e){if(1&t&&(o.Pb(0,"p",29),o.Pb(1,"span",30),o.Kb(2,"fa-icon",27),o.tc(3," \u7d93\u9a57\u503c "),o.Ob(),o.tc(4),o.Ob()),2&t){const t=o.Zb();o.zb(2),o.fc("icon",t.expIcon),o.zb(2),o.vc(" ",t.data.task_info.exp," ")}}function X(t,e){if(1&t&&(o.Pb(0,"p",31),o.Pb(1,"span",30),o.Kb(2,"fa-icon",27),o.tc(3," \u7269\u54c1 "),o.Ob(),o.Pb(4,"span",32),o.tc(5),o.ac(6,"taskReward"),o.Ob(),o.Ob()),2&t){const t=o.Zb();o.zb(2),o.fc("icon",t.itemIcon),o.zb(3),o.uc(o.bc(6,2,t.data.task_info))}}function q(t,e){if(1&t&&(o.Pb(0,"span",20),o.tc(1),o.Ob()),2&t){const t=e.$implicit;o.fc("routerLink",o.hc(3,K,t.id)),o.zb(1),o.wc(" Lv",t.task_info.request_level,". ",t.name," ")}}function H(t,e){if(1&t&&(o.Pb(0,"div"),o.rc(1,q,2,5,"span",33),o.Ob()),2&t){const t=o.Zb();o.zb(1),o.fc("ngForOf",t.relatedTasks)}}function Q(t,e){1&t&&(o.Pb(0,"p"),o.tc(1,"\u7121"),o.Ob())}const A=[{path:"",component:m},{path:"cats",children:[{path:":id",component:(()=>{class t{constructor(t,e){this.route=t,this.ts=e,this.checkIcon=i.b,this.expIcon=i.ab,this.moneyIcon=i.o,this.rCoinIcon=i.U,this.itemIcon=i.p,this.route.params.subscribe(t=>{this.data=this.ts.getCategory(t.id),this.title=this.data.name+` (${this.data.details.length}\u500b)`})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(c.a),o.Jb(r.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-tasks-group"]],decls:3,vars:3,consts:[[3,"title","align"],[1,"container"],["class","task",3,"title","subtitle","img_url","align","actions","routerLink","customStyle",4,"ngFor","ngForOf"],[1,"task",3,"title","subtitle","img_url","align","actions","routerLink","customStyle"],["coverTemplate",""],["subtitleTemplate",""],[1,"level",3,"ngClass"],[2,"font-size","10px","font-weight","400"],[1,"subtitle"],["class","part exp",4,"ngIf"],["class","part price",4,"ngIf"],["class","part rprice",4,"ngIf"],["class","part item",4,"ngIf"],[1,"part","exp"],[3,"icon"],[1,"part","price"],[1,"part","rprice"],[1,"part","item"]],template:function(t,e){1&t&&(o.Kb(0,"app-header",0),o.Pb(1,"section",1),o.rc(2,L,5,9,"app-item-block",2),o.Ob()),2&t&&(o.fc("title",e.title)("align","center"),o.zb(2),o.fc("ngForOf",e.data.details))},directives:[l.a,a.j,v.a,c.d,a.i,a.k,h.a],pipes:[O],styles:[".level[_ngcontent-%COMP%]{width:32px;height:32px;line-height:32px;font-size:14px;font-weight:600;background-color:var(--blue);color:var(--white);text-align:center;padding:4px;border-radius:50%}.subtitle[_ngcontent-%COMP%]{padding:2px 0 0 8px}.word[_ngcontent-%COMP%]{font-size:14px;padding:4px}.part[_ngcontent-%COMP%]{display:inline-block;font-size:12px;margin:0 4px}.exp[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-blue)}.price[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--yellow)}.rprice[_ngcontent-%COMP%]{color:var(--primary)}.item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-purple)}"]}),t})()}]},{path:":id",component:(()=>{class t{constructor(t,e){this.route=t,this.ts=e,this.expIcon=i.ab,this.moneyIcon=i.o,this.rCoinIcon=i.U,this.itemIcon=i.p,this.relatedTasks=[],this.preTaskId=["0","0","0"],this.route.params.subscribe(t=>{this.data=this.ts.getTaskById(""+t.id),this.title=`Lv${this.data.task_info.request_level}. ${this.data.name}`,this.relatedTasks=this.ts.searchRelated(this.data);let e="0",n="0",a="0";"0"!==this.data.task_info.pre_task1&&(e=this.getTaskId(this.data.task_info.pre_task1)),"0"!==this.data.task_info.pre_task2&&(n=this.getTaskId(this.data.task_info.pre_task2)),"0"!==this.data.task_info.pre_task3&&(a=this.getTaskId(this.data.task_info.pre_task3)),this.preTaskId=[e,n,a]})}ngOnInit(){}getTaskId(t){return this.ts.getTaskByName(t).id}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(c.a),o.Jb(r.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-tasks-detail"]],decls:29,vars:16,consts:[[3,"title","align"],[1,"container"],["class","detail-wrapper",4,"ngIf"],[1,"part","task-detail"],[1,"title"],[1,"content"],["class","part pre-task",4,"ngIf"],["class","part suggestion",4,"ngIf"],[1,"part","reward"],["id","money-reward",4,"ngIf"],["id","exp-reward",4,"ngIf"],["id","item-reward",4,"ngIf"],[1,"part","related"],[1,"subtitle"],[4,"ngIf","ngIfElse"],["noneTemplate",""],[1,"detail-wrapper"],[1,"description"],[1,"part","pre-task"],["class","task-name",3,"routerLink",4,"ngIf"],[1,"task-name",3,"routerLink"],[1,"part","suggestion"],[4,"ngFor","ngForOf"],["id","money-reward"],["class","reward-title coin",4,"ngIf"],["class","reward-title rcoin",4,"ngIf"],[1,"reward-title","coin"],[3,"icon"],[1,"reward-title","rcoin"],["id","exp-reward"],[1,"reward-title"],["id","item-reward"],[2,"display","inline-block"],["class","task-name",3,"routerLink",4,"ngFor","ngForOf"]],template:function(t,e){if(1&t&&(o.Kb(0,"app-header",0),o.Pb(1,"section",1),o.rc(2,Z,4,3,"div",2),o.ac(3,"taskDescription"),o.Pb(4,"div",3),o.Pb(5,"div",4),o.tc(6,"\u4efb\u52d9\u8981\u6c42"),o.Ob(),o.Pb(7,"div",5),o.Pb(8,"p"),o.tc(9),o.ac(10,"taskRequire"),o.Ob(),o.Ob(),o.Ob(),o.rc(11,j,7,3,"div",6),o.rc(12,R,5,1,"div",7),o.Pb(13,"div",8),o.Pb(14,"div",4),o.tc(15,"\u5b8c\u6210\u734e\u52f5"),o.Ob(),o.Pb(16,"div",5),o.rc(17,G,4,3,"p",9),o.rc(18,E,5,2,"p",10),o.rc(19,X,7,4,"p",11),o.Ob(),o.Ob(),o.Pb(20,"div",12),o.Pb(21,"div",4),o.tc(22,"\u76f8\u95dc\u4efb\u52d9"),o.Ob(),o.Pb(23,"div",13),o.tc(24,"(\u540c \u4f5c\u7269\u3001 NPC \u6216 \u9023\u7e8c\u4efb\u52d9 \u7b49\u7b49)"),o.Ob(),o.Pb(25,"div",5),o.rc(26,H,2,1,"div",14),o.rc(27,Q,2,0,"ng-template",null,15,o.sc),o.Ob(),o.Ob(),o.Ob()),2&t){const t=o.kc(28);o.fc("title",e.title)("align","center"),o.zb(2),o.fc("ngIf",""!==o.bc(3,11,e.data.task_info.task_description)),o.zb(7),o.uc(o.cc(10,13,e.data.task_info,e.data.task_info.task_type)),o.zb(2),o.fc("ngIf","0"!==e.data.task_info.pre_task1),o.zb(1),o.fc("ngIf",e.data.suggestions),o.zb(5),o.fc("ngIf",e.data.task_info.price_type>0),o.zb(1),o.fc("ngIf",e.data.task_info.exp>0),o.zb(1),o.fc("ngIf",e.data.task_info.w_item),o.zb(7),o.fc("ngIf",e.relatedTasks.length>0)("ngIfElse",t)}},directives:[l.a,a.k,c.d,a.j,h.a],pipes:[_,I,P],styles:['.container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.part[_ngcontent-%COMP%]{width:calc(100% - 16px);max-width:500px;position:relative;margin:8px auto;border-radius:8px 8px 4px 4px;border:1px solid var(--blue)}.part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:8px 0;font-size:16px;font-weight:600;border-radius:8px 8px 0 0}.part[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;text-align:center;color:var(--white);background-color:var(--dark-blue)}.part[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:-1px;padding-top:2px;padding-bottom:8px;font-size:14px;font-weight:500}.part.task-detail[_ngcontent-%COMP%], .part.task-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--red)}.part.task-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--red)}.part.pre-task[_ngcontent-%COMP%], .part.pre-task[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--orange)}.part.pre-task[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--orange)}.part.suggestion[_ngcontent-%COMP%], .part.suggestion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--yellow)}.part.suggestion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--yellow)}.part.reward[_ngcontent-%COMP%], .part.reward[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--green)}.part.reward[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--green)}.detail-wrapper[_ngcontent-%COMP%]{position:relative;width:90%;margin:4px auto;background:var(--object-bg);border-radius:8px}.detail-wrapper[_ngcontent-%COMP%]:before{position:absolute;top:-15px;left:calc(50% - 15px);content:"";width:0;height:0;border-style:solid;border-left:15px solid transparent;border-bottom:20px solid var(--object-bg);border-right:15px solid transparent;border-top:0 solid transparent}.content[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{padding:8px}p[_ngcontent-%COMP%]{padding:4px;margin:8px auto}.task-name[_ngcontent-%COMP%]{padding:6px;margin:4px;box-shadow:1px 1px 4px 1px rgba(0,0,0,.15)}.reward-title[_ngcontent-%COMP%], .task-name[_ngcontent-%COMP%]{display:inline-block;border:1px solid var(--black);border-radius:4px}.reward-title[_ngcontent-%COMP%]{padding:4px;margin-right:8px;font-size:14px}#money-reward[_ngcontent-%COMP%]   .reward-title.coin[_ngcontent-%COMP%]{border-color:#cece65;color:#cece65}#money-reward[_ngcontent-%COMP%]   .reward-title.rcoin[_ngcontent-%COMP%]{border-color:var(--primary);color:var(--primary)}#exp-reward[_ngcontent-%COMP%]   .reward-title[_ngcontent-%COMP%]{border-color:#4d4dcc;color:#4d4dcc}#item-reward[_ngcontent-%COMP%]   .reward-title[_ngcontent-%COMP%]{border-color:var(--dark-purple);color:var(--dark-purple)}']}),t})()}];let U=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[a.b,c.g.forChild(A)],c.g]}),t})();var V=n("j1ZV");let W=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[a.b,U,V.a,h.b]]}),t})()}}]);