(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{S1vP:function(t,e,n){"use strict";n.r(e),n.d(e,"TasksModule",function(){return rt});var a=n("ofXK"),c=n("tyNb"),r=n("wHSu"),o=n("fXoL"),i=n("fz5A"),s=n("jhN1"),p=n("320Y"),l=n("fkMS");const b=function(){return["cats",1]},g=function(){return["cats",2]},u=function(){return["cats",3]},d=function(){return["cats",4]},f=function(){return["cats",5]},k=function(){return["cats",6]};let h=(()=>{class t{constructor(t,e,n,a){this.ts=t,this.title=e,this.meta=n,this.router=a}ngOnInit(){this.catIcons=[r.u,r.x,r.A,r.z,r.w,r.v,r.y,r.hb],this.updateHeader()}updateHeader(){this.title.setTitle("\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayQuestions.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/tasks/"})}goSearch(){this.router.navigate(["tasks","search"])}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(i.a),o.Lb(s.d),o.Lb(s.c),o.Lb(c.c))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-tasks-home"]],decls:9,vars:40,consts:[["title","\u4efb\u52d9\u985e\u5225",3,"showBackIcon","showCustomIcon","customString","customIcon","onClickCustomIcon"],[1,"container"],[1,"cat-wrapper","level"],[3,"theme","title","icon","routerLink","url"]],template:function(t,e){1&t&&(o.Rb(0,"app-header",0),o.Yb("onClickCustomIcon",function(){return e.goSearch()}),o.Qb(),o.Rb(1,"section",1),o.Rb(2,"div",2),o.Mb(3,"app-category-block",3),o.Mb(4,"app-category-block",3),o.Mb(5,"app-category-block",3),o.Mb(6,"app-category-block",3),o.Mb(7,"app-category-block",3),o.Mb(8,"app-category-block",3),o.Qb(),o.Qb()),2&t&&(o.gc("showBackIcon",!1)("showCustomIcon",!0)("customString","\u641c\u5c0b\u4efb\u52d9")("customIcon",e.catIcons[7]),o.Bb(3),o.gc("theme","blue")("title","1-10\u7b49")("icon",e.catIcons[1])("routerLink",o.ic(34,b))("url","/tasks/cats/1"),o.Bb(1),o.gc("theme","light-blue")("title","11-20\u7b49")("icon",e.catIcons[2])("routerLink",o.ic(35,g))("url","/tasks/cats/2"),o.Bb(1),o.gc("theme","light-green")("title","21-30\u7b49")("icon",e.catIcons[3])("routerLink",o.ic(36,u))("url","/tasks/cats/3"),o.Bb(1),o.gc("theme","green")("title","31-40\u7b49")("icon",e.catIcons[4])("routerLink",o.ic(37,d))("url","/tasks/cats/4"),o.Bb(1),o.gc("theme","yellow")("title","41-50\u7b49")("icon",e.catIcons[5])("routerLink",o.ic(38,f))("url","/tasks/cats/5"),o.Bb(1),o.gc("theme","orange")("title","51-70\u7b49")("icon",e.catIcons[6])("routerLink",o.ic(39,k))("url","/tasks/cats/6"))},directives:[p.a,l.a,c.d],styles:[".container[_ngcontent-%COMP%]{width:90%;margin:0 auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.title[_ngcontent-%COMP%]{margin:16px auto;font-size:18px;font-weight:700}.cat-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:flex-start}.cat-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}"]}),t})();var m=n("5cuq"),v=n("6NWb");let _=(()=>{class t{constructor(){this.typeMapping=[{name:"crop",typeValues:[8,9,27]},{name:"crop-master",typeValues:[16,75,79]},{name:"farm-basic",typeValues:[17,18,19,21,23,35,40,46,73,76]},{name:"farm-building",typeValues:[3,59,78]},{name:"farm-fishing",typeValues:[67,68]},{name:"farm-others",typeValues:[80,77]},{name:"role",typeValues:[1,11,12]}]}transform(t,...e){let n="",a=parseInt(t.toString());return this.typeMapping.forEach(t=>{t.typeValues.indexOf(a)>=0&&(n=t.name)}),n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Kb({name:"taskType",type:t,pure:!0}),t})(),x=(()=>{class t{transform(t,...e){return t.startsWith("1",0)?"":t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Kb({name:"taskDescription",type:t,pure:!0}),t})(),M=(()=>{class t{transform(t,...e){let n="";return""!==t.item1&&(n=`${t.item1} * ${t.item1_number}`),"0"!==t.item2&&(n+=`, ${t.item2} * ${t.item2_number}`),n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Kb({name:"taskReward",type:t,pure:!0}),t})(),C=(()=>{class t{constructor(){this.cropLevel=["","\u4e0b\u7d1a","\u4e2d\u7d1a","\u4e0a\u7d1a","\u7279\u7d1a"],this.cropGrade=["","\u521d\u5b78\u8005","\u884c\u5bb6","\u5c08\u5bb6","\u9054\u4eba","\u738b"],this.cropCategory=["","\u8449\u83dc\u985e","\u6839\u83dc\u985e","\u6c34\u679c\u852c\u83dc\u985e","\u7a40\u7269\u985e"]}transform(t,...e){let n;if("number"!=typeof e[0]&&"string"!=typeof e[0])n="";else{let a=e[0];switch("string"==typeof a&&(a=parseInt(a)),a){case 1:n=`\u7b49\u7d1a\u9054\u5230 ${t.value1} \u7b49`;break;case 2:n=`\u5b8c\u6210 ${t.value1} \u7814\u7a76`;break;case 3:n=`\u64c1\u6709 ${t.value4} \u500b ${t.value1}`;break;case 5:n=`\u7d66 ${t.task_npc}(NPC) ${t.value1} \u91d1\u5e63`;break;case 6:n=`\u81f3\u5546\u5e97\u8cfc\u8cb7 ${t.value3}\u500b ${t.value1}`;break;case 7:n=`\u7d66 ${t.task_npc}(NPC) ${t.value3}\u500b ${t.value1}`;break;case 8:case 9:n=`\u7e73\u4ea4 ${t.value3}\u500b ${this.cropLevel[t.value2]}${t.value1}`;break;case 11:n=`\u89d2\u8272\u9ad4\u529b\u503c\u9054\u5230 ${t.value1}`;break;case 12:n=`\u89d2\u8272\u6280\u8853\u503c\u9054\u5230 ${t.value1}`;break;case 14:n=`\u524d\u5f80 ${t.value1} \u7684\u5bb6`;break;case 16:n=`${t.value1} \u719f\u7df4\u5ea6\u9054\u5230 ${this.cropGrade[t.value2]}`;break;case 17:n=`\u7a2e\u690d ${t.value2} \u500b ${t.value1}`;case 18:n=`\u7a2e\u690d ${t.value2} \u500b ${t.value1}`;break;case 19:n=`\u8015\u571f ${t.value1} \u6b21`;break;case 21:n=`\u4e0b\u57fa\u80a5 ${t.value1} \u6b21`;break;case 23:n=`\u88fd\u4f5c ${t.value2} \u500b ${t.value1}`;break;case 26:n=`\u65bc\u7ce7\u5009\u4e00\u6b21\u8ca9\u8ce3 ${t.value1} \u91d1\u5e63`;break;case 27:n=`\u6536\u5272 ${t.value3} \u500b ${this.cropLevel[t.value2]}${t.value1}`;break;case 28:n=`\u4f7f\u7528 ${t.value2} \u500b ${t.value1}`;break;case 35:n=`\u65bd\u80a5 ${t.value1} \u6b21`;break;case 40:n=`\u81f3\u6c34\u4e95\u88dd\u6c34 ${t.value1} \u6b21`;break;case 46:n=`\u6f86\u6c34 ${t.value1} \u6b21`;break;case 47:n=`\u8cfc\u8cb7 ${t.value3} \u500b ${t.value1}`;break;case 59:n=`\u88dd\u7f6e ${t.value4} \u500b ${t.value1}`;break;case 67:n=`\u91e3\u9b5a ${t.value1} \u6b21`;break;case 68:n=`\u91e3 ${t.value3} \u96bb ${t.value1}`;break;case 69:n="\u9023\u52d5 Facebook \u5e33\u865f";break;case 73:n=`\u6536\u5272 ${t.value1} \u500b\u8f49\u86cb\u4f5c\u7269`;break;case 74:n=`\u8f49\u86cb ${t.value1} \u6b21`;break;case 75:n=`\u5c07 ${t.value2} \u500b\u4f5c\u7269\u719f\u7df4\u5ea6\u63d0\u5347\u81f3 ${this.cropGrade[t.value1]}`;break;case 76:n=`\u6536\u5272 ${t.value1} \u500b\u8b8a\u7570\u4f5c\u7269`;break;case 77:n=`\u6253 ${t.value1} \u96bb\u571f\u64a5\u9f20`;break;case 78:n="\u64f4\u5927\u8fb2\u5834\u5f8c\uff0c\u79fb\u9664\u969c\u7919\u7269(\u77f3\u982d\u3001\u6a39\u679d\u7b49)";break;case 79:n=`${this.cropCategory[t.value3]} \u4e2d ${t.value2} \u500b\u719f\u7df4\u5ea6\u9054 ${this.cropGrade[t.value1]}`;break;case 80:n=0==t.value2?`\u7d50\u7de3\u6a39\u4e2d\u64c1\u6709 ${t.value1} \u500b\u63a8\u85a6\u4eba`:`\u7d50\u7de3\u6a39\u4e2d ${t.value1} \u500b\u63a8\u85a6\u4eba\u7b49\u7d1a\u9054\u5230 ${t.value2}`;break;case 81:n="\u81f3\u8a2d\u5b9a\u4e2d\u5c07\u904a\u6232\u5e33\u865f\u9023\u52d5\u793e\u7fa4\u5e33\u865f";break;case 82:n="\u81f3\u8a2d\u5b9a\u4e2d\u5c07\u904a\u6232\u5e33\u865f\u9023\u52d5 line ";break;case 83:n="\u5b8c\u6210\u68ee\u6797\u7684\u5192\u96aa";break;case 99:n=`\u8207 ${t.value1}(NPC) \u5c0d\u8a71`}}return n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Kb({name:"taskRequire",type:t,pure:!0}),t})();const w=function(t){return["/tasks",t]};function O(t,e){if(1&t&&(o.Rb(0,"a",4),o.vc(1),o.Qb()),2&t){const t=o.ac();o.gc("routerLink",o.jc(2,w,t.task.id)),o.Bb(1),o.xc(" ",t.task.name," ")}}function y(t,e){if(1&t&&(o.Rb(0,"div",5),o.bc(1,"taskType"),o.Rb(2,"span",6),o.vc(3,"Lv."),o.Qb(),o.vc(4),o.Qb()),2&t){const t=o.ac();o.gc("ngClass",o.cc(1,2,t.task.task_info.task_type)),o.Bb(4),o.xc("",t.task.task_info.request_level," ")}}function P(t,e){if(1&t&&(o.Rb(0,"span",12),o.Mb(1,"fa-icon",13),o.vc(2),o.Qb()),2&t){const t=o.ac(2);o.Bb(1),o.gc("icon",t.expIcon),o.Bb(1),o.xc(" ",t.task.task_info.exp," ")}}function I(t,e){if(1&t&&(o.Rb(0,"span",14),o.Mb(1,"fa-icon",13),o.vc(2),o.Qb()),2&t){const t=o.ac(2);o.Bb(1),o.gc("icon",t.moneyIcon),o.Bb(1),o.xc(" ",t.task.task_info.price," ")}}function R(t,e){if(1&t&&(o.Rb(0,"span",15),o.Mb(1,"fa-icon",13),o.vc(2),o.Qb()),2&t){const t=o.ac(2);o.Bb(1),o.gc("icon",t.rCoinIcon),o.Bb(1),o.xc(" ",t.task.task_info.price," ")}}function $(t,e){if(1&t&&(o.Rb(0,"span",16),o.Mb(1,"fa-icon",13),o.vc(2),o.Qb()),2&t){const t=o.ac(2);o.Bb(1),o.gc("icon",t.itemIcon),o.Bb(1),o.xc(" ",("0"!==t.task.task_info.item1?1:0)+("0"!==t.task.task_info.item2?1:0)," ")}}function B(t,e){if(1&t&&(o.Rb(0,"div",7),o.tc(1,P,3,2,"span",8),o.tc(2,I,3,2,"span",9),o.tc(3,R,3,2,"span",10),o.tc(4,$,3,2,"span",11),o.Qb()),2&t){const t=o.ac();o.Bb(1),o.gc("ngIf",t.task.task_info.exp>0),o.Bb(1),o.gc("ngIf",1==t.task.task_info.price_type),o.Bb(1),o.gc("ngIf",2==t.task.task_info.price_type),o.Bb(1),o.gc("ngIf",t.task.task_info.w_item)}}const Q=function(){return{border:"1px solid var(--blue)",boxShadow:"1px 1px 6px 1px rgba(0, 0, 0, 0.2)",borderRadius:"32px 4px 4px 32px"}};let T=(()=>{class t{constructor(){this.expIcon=r.nb,this.moneyIcon=r.q,this.rCoinIcon=r.fb,this.itemIcon=r.s}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Fb({type:t,selectors:[["app-tasks-list-item"]],inputs:{task:"task"},decls:7,vars:9,consts:[[1,"task-wrapper",3,"title","subtitle","img_url","actions","routerLink","url","customStyle"],["titleTemplate",""],["coverTemplate",""],["actionTemplate",""],[1,"title",3,"routerLink"],[1,"level",3,"ngClass"],[2,"font-size","10px","font-weight","400"],[1,"action"],["class","part exp",4,"ngIf"],["class","part price",4,"ngIf"],["class","part rprice",4,"ngIf"],["class","part item",4,"ngIf"],[1,"part","exp"],[3,"icon"],[1,"part","price"],[1,"part","rprice"],[1,"part","item"]],template:function(t,e){if(1&t&&(o.Rb(0,"app-item-block",0),o.tc(1,O,2,4,"ng-template",null,1,o.uc),o.tc(3,y,5,4,"ng-template",null,2,o.uc),o.tc(5,B,5,4,"ng-template",null,3,o.uc),o.Qb()),2&t){const t=o.mc(2),n=o.mc(4),a=o.mc(6);o.gc("title",t)("img_url",n)("actions",a)("routerLink",o.jc(6,w,e.task.id))("url","/tasks/"+e.task.id)("customStyle",o.ic(8,Q))}},directives:[m.a,c.d,c.f,a.j,a.l,v.a],pipes:[_],styles:[".subtitle[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{padding:4px 8px;text-align:center;text-align:left;color:var(--black)}.title[_ngcontent-%COMP%]{font-weight:600;font-size:16px}.level[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%]{font-size:14px}.level[_ngcontent-%COMP%]{width:32px;height:32px;line-height:32px;font-weight:600;background-color:var(--blue);color:var(--white);text-align:center;padding:4px;border-radius:50%}.level.crop[_ngcontent-%COMP%]{background-color:var(--red)}.level.crop-master[_ngcontent-%COMP%]{background-color:var(--purple)}.level.farm-basic[_ngcontent-%COMP%]{background-color:var(--primary)}.level.farm-building[_ngcontent-%COMP%]{background-color:var(--dark-blue)}.level.farm-fishing[_ngcontent-%COMP%]{background-color:var(--light-blue)}.level.farm-others[_ngcontent-%COMP%]{background-color:var(--orange)}.level.role[_ngcontent-%COMP%]{background-color:var(--yellow)}.action[_ngcontent-%COMP%]{padding:2px 0 0 8px}.word[_ngcontent-%COMP%]{font-size:14px;padding:4px}.part[_ngcontent-%COMP%]{display:inline-block;font-size:12px;margin:0 4px}.exp[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-blue)}.price[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--yellow)}.rprice[_ngcontent-%COMP%]{color:var(--primary)}.item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-purple)}"]}),t})();function L(t,e){1&t&&o.Mb(0,"app-tasks-list-item",3),2&t&&o.gc("task",e.$implicit)}let F=(()=>{class t{constructor(t,e,n,a){this.route=t,this.ts=e,this.title=n,this.meta=a,this.checkIcon=r.b,this.expIcon=r.nb,this.moneyIcon=r.q,this.rCoinIcon=r.fb,this.itemIcon=r.s,this.route.params.subscribe(t=>{this.data=this.ts.getCategory(t.id),this.pageTitle=this.data.name+` (${this.data.details.length}\u500b)`})}ngOnInit(){this.title.setTitle("\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:"\u4efb\u52d9\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u6240\u6709\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002"}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayQuestions.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/tasks/"})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(c.a),o.Lb(i.a),o.Lb(s.d),o.Lb(s.c))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-tasks-group"]],decls:3,vars:3,consts:[[3,"title","align"],[1,"container"],[3,"task",4,"ngFor","ngForOf"],[3,"task"]],template:function(t,e){1&t&&(o.Mb(0,"app-header",0),o.Rb(1,"section",1),o.tc(2,L,1,1,"app-tasks-list-item",2),o.Qb()),2&t&&(o.gc("title",e.pageTitle)("align","center"),o.Bb(2),o.gc("ngForOf",e.data.details))},directives:[p.a,a.k,T],styles:[".level[_ngcontent-%COMP%]{width:32px;height:32px;line-height:32px;font-size:14px;font-weight:600;background-color:var(--blue);color:var(--white);text-align:center;padding:4px;border-radius:50%}.subtitle[_ngcontent-%COMP%]{padding:2px 0 0 8px}.word[_ngcontent-%COMP%]{font-size:14px;padding:4px}.part[_ngcontent-%COMP%]{display:inline-block;font-size:12px;margin:0 4px}.exp[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-blue)}.price[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--yellow)}.rprice[_ngcontent-%COMP%]{color:var(--primary)}.item[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--dark-purple)}"]}),t})();function j(t,e){if(1&t&&(o.Rb(0,"div",16),o.Rb(1,"p",17),o.vc(2),o.bc(3,"taskDescription"),o.Qb(),o.Qb()),2&t){const t=o.ac();o.Bb(2),o.xc(" ",o.cc(3,1,t.data.task_info.task_description)," ")}}const z=function(t){return["/tasks",t]};function V(t,e){if(1&t&&(o.Rb(0,"span",20),o.vc(1),o.Qb()),2&t){const t=o.ac(2);o.gc("routerLink",o.jc(2,z,t.preTaskId[0])),o.Bb(1),o.xc(" ",t.data.task_info.pre_task1," ")}}function q(t,e){if(1&t&&(o.Rb(0,"span",20),o.vc(1),o.Qb()),2&t){const t=o.ac(2);o.gc("routerLink",o.jc(2,z,t.preTaskId[1])),o.Bb(1),o.xc(" ",t.data.task_info.pre_task2," ")}}function S(t,e){if(1&t&&(o.Rb(0,"span",20),o.vc(1),o.Qb()),2&t){const t=o.ac(2);o.gc("routerLink",o.jc(2,z,t.preTaskId[2])),o.Bb(1),o.xc(" ",t.data.task_info.pre_task3," ")}}function N(t,e){if(1&t&&(o.Rb(0,"div",18),o.Rb(1,"div",4),o.vc(2,"\u524d\u7f6e\u4efb\u52d9"),o.Qb(),o.Rb(3,"div",5),o.tc(4,V,2,4,"span",19),o.tc(5,q,2,4,"span",19),o.tc(6,S,2,4,"span",19),o.Qb(),o.Qb()),2&t){const t=o.ac();o.Bb(4),o.gc("ngIf","0"!==t.preTaskId[0]),o.Bb(1),o.gc("ngIf","0"!==t.preTaskId[1]),o.Bb(1),o.gc("ngIf","0"!==t.preTaskId[2])}}function D(t,e){if(1&t&&(o.Rb(0,"p"),o.vc(1),o.Qb()),2&t){const t=e.$implicit,n=e.index;o.Bb(1),o.yc(" ",n+1,". ",t," ")}}function K(t,e){if(1&t&&(o.Rb(0,"div",21),o.Rb(1,"div",4),o.vc(2,"\u5efa\u8b70\u4f5c\u6cd5"),o.Qb(),o.Rb(3,"div",5),o.tc(4,D,2,2,"p",22),o.Qb(),o.Qb()),2&t){const t=o.ac();o.Bb(4),o.gc("ngForOf",t.data.suggestions)}}function G(t,e){if(1&t&&(o.Rb(0,"span",26),o.Mb(1,"fa-icon",27),o.vc(2," \u91d1\u5e63 "),o.Qb()),2&t){const t=o.ac(2);o.Bb(1),o.gc("icon",t.moneyIcon)}}function J(t,e){if(1&t&&(o.Rb(0,"span",28),o.Mb(1,"fa-icon",27),o.vc(2," R\u5e63 "),o.Qb()),2&t){const t=o.ac(2);o.Bb(1),o.gc("icon",t.rCoinIcon)}}function E(t,e){if(1&t&&(o.Rb(0,"p",23),o.tc(1,G,3,1,"span",24),o.tc(2,J,3,1,"span",25),o.vc(3),o.bc(4,"number"),o.Qb()),2&t){const t=o.ac();o.Bb(1),o.gc("ngIf",1==t.data.task_info.price_type),o.Bb(1),o.gc("ngIf",2==t.data.task_info.price_type),o.Bb(1),o.xc(" ",o.cc(4,3,t.data.task_info.price)," ")}}function H(t,e){if(1&t&&(o.Rb(0,"p",29),o.Rb(1,"span",30),o.Mb(2,"fa-icon",27),o.vc(3," \u7d93\u9a57\u503c "),o.Qb(),o.vc(4),o.bc(5,"number"),o.Qb()),2&t){const t=o.ac();o.Bb(2),o.gc("icon",t.expIcon),o.Bb(2),o.xc(" ",o.cc(5,2,t.data.task_info.exp)," ")}}function Y(t,e){if(1&t&&(o.Rb(0,"p",31),o.Rb(1,"span",30),o.Mb(2,"fa-icon",27),o.vc(3," \u7269\u54c1 "),o.Qb(),o.Rb(4,"span",32),o.vc(5),o.bc(6,"taskReward"),o.Qb(),o.Qb()),2&t){const t=o.ac();o.Bb(2),o.gc("icon",t.itemIcon),o.Bb(3),o.wc(o.cc(6,2,t.data.task_info))}}function A(t,e){if(1&t&&(o.Rb(0,"span",20),o.vc(1),o.Qb()),2&t){const t=e.$implicit;o.gc("routerLink",o.jc(3,z,t.id)),o.Bb(1),o.yc(" Lv",t.task_info.request_level,". ",t.name," ")}}function W(t,e){if(1&t&&(o.Rb(0,"div"),o.tc(1,A,2,5,"span",33),o.Qb()),2&t){const t=o.ac();o.Bb(1),o.gc("ngForOf",t.relatedTasks)}}function X(t,e){1&t&&(o.Rb(0,"p"),o.vc(1,"\u7121"),o.Qb())}let U=(()=>{class t{constructor(t,e,n,a){this.route=t,this.ts=e,this.title=n,this.meta=a,this.expIcon=r.nb,this.moneyIcon=r.q,this.rCoinIcon=r.fb,this.itemIcon=r.s,this.relatedTasks=[],this.preTaskId=["0","0","0"],this.route.params.subscribe(t=>{let e=this.ts.getTaskById(`${t.id}`);this.data=Object.assign({},e),this.pageTitle=`Lv${this.data.task_info.request_level}. ${this.data.name}`,this.relatedTasks=this.ts.searchRelated(this.data);let n="0",a="0",c="0";"0"!==this.data.task_info.pre_task1&&(n=this.getTaskId(this.data.task_info.pre_task1)),"0"!==this.data.task_info.pre_task2&&(a=this.getTaskId(this.data.task_info.pre_task2)),"0"!==this.data.task_info.pre_task3&&(c=this.getTaskId(this.data.task_info.pre_task3)),this.preTaskId=[n,a,c],this.title.setTitle(`${this.data.name} | \u4efb\u52d9 | RealFarm \u5c0f\u5e6b\u624b`),this.meta.updateTag({name:"description",content:`RealFarm \u760b\u7a2e\u83dc\u4e2d\u300c${this.data.name}\u300d\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002`}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:`${this.data.name} | \u4efb\u52d9 | RealFarm \u5c0f\u5e6b\u624b`}),this.meta.updateTag({property:"og:title",content:`${this.data.name} | \u4efb\u52d9 | RealFarm \u5c0f\u5e6b\u624b`}),this.meta.updateTag({property:"og:description",content:`RealFarm \u760b\u7a2e\u83dc\u4e2d${this.data.name}\u4efb\u52d9\u5167\u5bb9\uff0c\u5305\u62ec\u4efb\u52d9\u7b49\u7d1a\u3001\u8981\u6c42\u3001\u734e\u52f5\u3001\u7d93\u9a57\u503c\u3001\u76f8\u95dc\u4efb\u52d9\u3001\u524d\u7f6e\u4efb\u52d9\u7b49\u7b49\u3002`}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayQuestions.jpg"}),this.meta.updateTag({property:"og:url",content:`https://bobosheep.github.io/farm-tool/tasks/${this.data.id}`})})}ngOnInit(){}getTaskId(t){return this.ts.getTaskByName(t).id}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(c.a),o.Lb(i.a),o.Lb(s.d),o.Lb(s.c))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-tasks-detail"]],decls:29,vars:16,consts:[[3,"title","align"],[1,"container"],["class","detail-wrapper",4,"ngIf"],[1,"part","task-detail"],[1,"title"],[1,"content"],["class","part pre-task",4,"ngIf"],["class","part suggestion",4,"ngIf"],[1,"part","reward"],["id","money-reward",4,"ngIf"],["id","exp-reward",4,"ngIf"],["id","item-reward",4,"ngIf"],[1,"part","related"],[1,"subtitle"],[4,"ngIf","ngIfElse"],["noneTemplate",""],[1,"detail-wrapper"],[1,"description"],[1,"part","pre-task"],["class","task-name",3,"routerLink",4,"ngIf"],[1,"task-name",3,"routerLink"],[1,"part","suggestion"],[4,"ngFor","ngForOf"],["id","money-reward"],["class","reward-title coin",4,"ngIf"],["class","reward-title rcoin",4,"ngIf"],[1,"reward-title","coin"],[3,"icon"],[1,"reward-title","rcoin"],["id","exp-reward"],[1,"reward-title"],["id","item-reward"],[2,"display","inline-block"],["class","task-name",3,"routerLink",4,"ngFor","ngForOf"]],template:function(t,e){if(1&t&&(o.Mb(0,"app-header",0),o.Rb(1,"section",1),o.tc(2,j,4,3,"div",2),o.bc(3,"taskDescription"),o.Rb(4,"div",3),o.Rb(5,"div",4),o.vc(6,"\u4efb\u52d9\u8981\u6c42"),o.Qb(),o.Rb(7,"div",5),o.Rb(8,"p"),o.vc(9),o.bc(10,"taskRequire"),o.Qb(),o.Qb(),o.Qb(),o.tc(11,N,7,3,"div",6),o.tc(12,K,5,1,"div",7),o.Rb(13,"div",8),o.Rb(14,"div",4),o.vc(15,"\u5b8c\u6210\u734e\u52f5"),o.Qb(),o.Rb(16,"div",5),o.tc(17,E,5,5,"p",9),o.tc(18,H,6,4,"p",10),o.tc(19,Y,7,4,"p",11),o.Qb(),o.Qb(),o.Rb(20,"div",12),o.Rb(21,"div",4),o.vc(22,"\u76f8\u95dc\u4efb\u52d9"),o.Qb(),o.Rb(23,"div",13),o.vc(24,"(\u540c \u4f5c\u7269\u3001 NPC \u6216 \u9023\u7e8c\u4efb\u52d9 \u7b49\u7b49)"),o.Qb(),o.Rb(25,"div",5),o.tc(26,W,2,1,"div",14),o.tc(27,X,2,0,"ng-template",null,15,o.uc),o.Qb(),o.Qb(),o.Qb()),2&t){const t=o.mc(28);o.gc("title",e.pageTitle)("align","center"),o.Bb(2),o.gc("ngIf",""!==o.cc(3,11,e.data.task_info.task_description)),o.Bb(7),o.wc(o.dc(10,13,e.data.task_info,e.data.task_info.task_type)),o.Bb(2),o.gc("ngIf","0"!==e.data.task_info.pre_task1),o.Bb(1),o.gc("ngIf",e.data.suggestions),o.Bb(5),o.gc("ngIf",e.data.task_info.price_type>0),o.Bb(1),o.gc("ngIf",e.data.task_info.exp>0),o.Bb(1),o.gc("ngIf",e.data.task_info.w_item),o.Bb(7),o.gc("ngIf",e.relatedTasks.length>0)("ngIfElse",t)}},directives:[p.a,a.l,c.d,a.k,v.a],pipes:[x,C,a.e,M],styles:['.container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.part[_ngcontent-%COMP%]{width:calc(100% - 16px);max-width:500px;position:relative;margin:8px auto;border-radius:8px 8px 4px 4px;border:1px solid var(--blue)}.part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:8px 0;font-size:16px;font-weight:600;border-radius:8px 8px 0 0}.part[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .part[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;text-align:center;color:var(--white);background-color:var(--dark-blue)}.part[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:-1px;padding-top:2px;padding-bottom:8px;font-size:14px;font-weight:500}.part.task-detail[_ngcontent-%COMP%], .part.task-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--red)}.part.task-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--red)}.part.pre-task[_ngcontent-%COMP%], .part.pre-task[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--orange)}.part.pre-task[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--orange)}.part.suggestion[_ngcontent-%COMP%], .part.suggestion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--yellow)}.part.suggestion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--yellow)}.part.reward[_ngcontent-%COMP%], .part.reward[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-color:var(--green)}.part.reward[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--green)}.detail-wrapper[_ngcontent-%COMP%]{position:relative;width:90%;margin:4px auto;background:var(--object-bg);border-radius:8px}.detail-wrapper[_ngcontent-%COMP%]:before{position:absolute;top:-15px;left:calc(50% - 15px);content:"";width:0;height:0;border-width:0 15px 20px;border-style:solid;border-color:transparent transparent var(--object-bg) transparent}.content[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{padding:8px}p[_ngcontent-%COMP%]{padding:4px;margin:8px auto}.task-name[_ngcontent-%COMP%]{padding:6px;margin:4px;box-shadow:1px 1px 4px 1px rgba(0,0,0,.15)}.reward-title[_ngcontent-%COMP%], .task-name[_ngcontent-%COMP%]{display:inline-block;border:1px solid var(--black);border-radius:4px}.reward-title[_ngcontent-%COMP%]{padding:4px;margin-right:8px;font-size:14px}#money-reward[_ngcontent-%COMP%]   .reward-title.coin[_ngcontent-%COMP%]{border-color:#cece65;color:#cece65}#money-reward[_ngcontent-%COMP%]   .reward-title.rcoin[_ngcontent-%COMP%]{border-color:var(--primary);color:var(--primary)}#exp-reward[_ngcontent-%COMP%]   .reward-title[_ngcontent-%COMP%]{border-color:#4d4dcc;color:#4d4dcc}#item-reward[_ngcontent-%COMP%]   .reward-title[_ngcontent-%COMP%]{border-color:var(--dark-purple);color:var(--dark-purple)}']}),t})();var Z=n("3Pt+");function tt(t,e){if(1&t&&(o.Rb(0,"div",9),o.Rb(1,"div"),o.vc(2),o.Qb(),o.Qb()),2&t){const t=o.ac();o.Bb(2),o.xc("\u641c\u5c0b\u7d50\u679c\u5171 ",t.results.length," \u500b")}}function et(t,e){1&t&&o.Mb(0,"app-tasks-list-item",10),2&t&&o.gc("task",e.$implicit)}const nt=[{path:"",component:h},{path:"cats",children:[{path:":id",component:F}]},{path:"search",component:(()=>{class t{constructor(t,e){this.ts=t,this.route=e,this.searchIcon=r.hb,this.searchValue="",this.searchPart="name",this.results=[],this.route.queryParams.subscribe(t=>{t.q&&(this.searchValue=t.q,this.search())})}ngOnInit(){}search(){""!==this.searchValue&&(this.results=this.ts.searchTask(this.searchValue,this.searchPart))}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(i.a),o.Lb(c.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-tasks-search"]],decls:9,vars:4,consts:[["title","\u641c\u5c0b\u4efb\u52d9"],[1,"container"],[1,"input-wrapper"],[1,"input-box"],["type","text",3,"ngModel","ngModelChange"],[1,"icon-button"],[3,"icon"],["class","result-info",4,"ngIf"],[3,"task",4,"ngFor","ngForOf"],[1,"result-info"],[3,"task"]],template:function(t,e){1&t&&(o.Mb(0,"app-header",0),o.Rb(1,"section",1),o.Rb(2,"div",2),o.Rb(3,"div",3),o.Rb(4,"input",4),o.Yb("ngModelChange",function(t){return e.searchValue=t})("ngModelChange",function(){return e.search()}),o.Qb(),o.Rb(5,"div",5),o.Mb(6,"fa-icon",6),o.Qb(),o.Qb(),o.Qb(),o.tc(7,tt,3,1,"div",7),o.tc(8,et,1,1,"app-tasks-list-item",8),o.Qb()),2&t&&(o.Bb(4),o.gc("ngModel",e.searchValue),o.Bb(2),o.gc("icon",e.searchIcon),o.Bb(1),o.gc("ngIf",""!==e.searchValue),o.Bb(1),o.gc("ngForOf",e.results))},directives:[p.a,Z.b,Z.j,Z.m,v.a,a.l,a.k,T],styles:[".input-wrapper[_ngcontent-%COMP%]{width:75%;max-width:256px;margin:12px auto}input[_ngcontent-%COMP%]{flex:1;min-width:64px;border:0;outline:0}.input-box[_ngcontent-%COMP%]{width:100%;border-radius:4px;border:1px solid var(--black);padding:4px;display:flex;align-items:center}.icon-button[_ngcontent-%COMP%]{width:16px;height:16px;font-size:16px}.result-info[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),t})()},{path:":id",component:U}];let at=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[a.c,c.g.forChild(nt)],c.g]}),t})();var ct=n("jICo");let rt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[a.c,at,ct.a,v.b,Z.h,Z.q]]}),t})()}}]);