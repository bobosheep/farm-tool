(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2MiI":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n("fXoL"),o=n("wHSu"),c=n("ofXK"),r=n("tyNb"),a=n("Nv++");function s(e,t){if(1&e){const e=i.Qb();i.Pb(0,"fa-icon",10),i.Xb("click",(function(){return i.lc(e),i.Zb().goBack()})),i.Ob()}if(2&e){const e=i.Zb();i.fc("icon",e.faArrowLeft)}}function b(e,t){if(1&e&&(i.Nb(0),i.Lb(1,11),i.Mb()),2&e){const e=t.ngIf;i.zb(1),i.fc("ngTemplateOutlet",e)}}function l(e,t){if(1&e&&(i.Pb(0,"div",12),i.tc(1),i.Ob()),2&e){const e=i.Zb();i.zb(1),i.uc(e.title)}}function m(e,t){if(1&e&&(i.Nb(0),i.Lb(1,11),i.Mb()),2&e){const e=t.ngIf;i.zb(1),i.fc("ngTemplateOutlet",e)}}function p(e,t){if(1&e&&(i.Pb(0,"div",13),i.tc(1),i.Ob()),2&e){const e=i.Zb();i.zb(1),i.uc(e.subtitle)}}function u(e,t){if(1&e){const e=i.Qb();i.Pb(0,"fa-icon",14),i.Xb("click",(function(){return i.lc(e),i.Zb().onClickIcon()})),i.Ob()}if(2&e){const e=i.Zb();i.fc("icon",e.customIcon)}}function d(e,t){if(1&e&&(i.Nb(0),i.Lb(1,11),i.Mb()),2&e){const e=t.ngIf;i.zb(1),i.fc("ngTemplateOutlet",e)}}function h(e,t){if(1&e&&(i.Pb(0,"div",15),i.tc(1),i.Ob()),2&e){const e=i.Zb();i.zb(1),i.uc(e.customString)}}let f=(()=>{class e{constructor(e,t,n){this.location=e,this.router=t,this.route=n,this.faArrowLeft=o.a,this.align="center",this.showBackIcon=!0,this.showCustomIcon=!1,this.onClickBack=new i.n,this.onClickCustomIcon=new i.n}goBack(){this.onClickBack.emit(!0),this.location.back()}getTemplate(e){return e instanceof i.K?e:null}onClickIcon(){this.onClickCustomIcon.emit(!0)}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(c.g),i.Jb(r.c),i.Jb(r.a))},e.\u0275cmp=i.Db({type:e,selectors:[["app-header"]],inputs:{title:"title",subtitle:"subtitle",showBackIcon:"showBackIcon",showCustomIcon:"showCustomIcon",customIcon:"customIcon",customString:"customString",align:"align"},outputs:{onClickCustomIcon:"onClickCustomIcon",onClickBack:"onClickBack"},decls:15,vars:9,consts:[[1,"wrapper"],[1,"icon-wrapper","back"],[3,"icon","click",4,"ngIf"],[1,"content",3,"ngClass"],[4,"ngIf","ngIfElse"],["defaultTitle",""],["defaultSubtitle",""],[1,"icon-wrapper","custom-icon"],["class","icon",3,"icon","click",4,"ngIf"],["defaultCustomString",""],[3,"icon","click"],[3,"ngTemplateOutlet"],[1,"title"],[1,"subtitle"],[1,"icon",3,"icon","click"],[1,"custom-string"]],template:function(e,t){if(1&e&&(i.Pb(0,"div",0),i.Pb(1,"div",1),i.rc(2,s,1,1,"fa-icon",2),i.Ob(),i.Pb(3,"div",3),i.rc(4,b,2,1,"ng-container",4),i.rc(5,l,2,1,"ng-template",null,5,i.sc),i.rc(7,m,2,1,"ng-container",4),i.rc(8,p,2,1,"ng-template",null,6,i.sc),i.Ob(),i.Pb(10,"div",7),i.rc(11,u,1,1,"fa-icon",8),i.rc(12,d,2,1,"ng-container",4),i.rc(13,h,2,1,"ng-template",null,9,i.sc),i.Ob(),i.Ob()),2&e){const e=i.kc(6),n=i.kc(9),o=i.kc(14);i.zb(2),i.fc("ngIf",t.showBackIcon),i.zb(1),i.fc("ngClass",t.align),i.zb(1),i.fc("ngIf",t.getTemplate(t.title))("ngIfElse",e),i.zb(3),i.fc("ngIf",t.getTemplate(t.subtitle))("ngIfElse",n),i.zb(4),i.fc("ngIf",t.showCustomIcon),i.zb(1),i.fc("ngIf",t.getTemplate(t.customString))("ngIfElse",o)}},directives:[c.k,c.i,a.a,c.m],styles:[".wrapper[_ngcontent-%COMP%]{width:100%;height:48px;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}.content[_ngcontent-%COMP%], .icon-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:auto 8px}.content.left[_ngcontent-%COMP%]{flex:1;flex-direction:row;justify-content:flex-start;align-items:center}.subtitle[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{margin:2px}.icon[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.custom-string[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%]{font-size:14px}.icon-wrapper[_ngcontent-%COMP%]{min-width:32px}"]}),e})()},mTXl:function(e,t,n){"use strict";n.r(t),n.d(t,"IncomeModule",(function(){return F}));var i=n("ofXK"),o=n("tyNb"),c=n("3Pt+"),r=n("fXoL"),a=n("uOO6");let s=(()=>{class e{constructor(){this.potionHarvestRate=[0,50,100,150,200],this.seedLevels=[{id:0,name:"\u521d\u5b78\u8005",rainbow:0,premium:0},{id:1,name:"\u884c\u5bb6",rainbow:0,premium:25},{id:2,name:"\u5c08\u5bb6",rainbow:0,premium:40},{id:3,name:"\u9054\u4eba",rainbow:25,premium:55},{id:4,name:"\u738b",rainbow:30,premium:70},{id:5,name:"\u795e",rainbow:40,premium:85}],this.farmLevels=[{id:0,name:"\u5341\u5206\u8ca7\u7620\u7684\u8fb2\u7530",rainbow:0,harvestRate:0},{id:1,name:"\u7a0d\u5fae\u8ca7\u7620\u7684\u8fb2\u7530",rainbow:10,harvestRate:10},{id:2,name:"\u52c9\u5f37\u80fd\u4f7f\u7528\u7684\u8fb2\u7530",rainbow:20,harvestRate:20},{id:3,name:"\u7a0d\u5fae\u80a5\u6c83\u7684\u8fb2\u7530",rainbow:30,harvestRate:30},{id:4,name:"\u5341\u5206\u80a5\u6c83\u7684\u8fb2\u7530",rainbow:40,harvestRate:40},{id:5,name:"\u80a5\u6ecb\u6ecb\u7684\u8fb2\u7530",rainbow:50,harvestRate:50}],this.greenhouseLevels=[{id:0,name:"\u7121",harvestRate:0},{id:1,name:"\u7db2\u5ba4",harvestRate:10},{id:2,name:"\u6eab\u5ba4",harvestRate:20},{id:3,name:"\u52a0\u71b1\u6eab\u5ba4",harvestRate:30}]}calcFarmCost(e,t,n,i,o,c){let r;return r=e+n+i*o+c,r+=Math.floor(t/3),Math.floor(r)}calcHarvest(e,t,n,i,o,c,r){let a=e?3:10,s=t?1.25:1,b=this.farmLevels[i].harvestRate+this.greenhouseLevels[o].harvestRate,l=0,m=0,p=this.potionHarvestRate[r],u=0;return a+=n?2:0,c.forEach(e=>{e.harvestRate&&(m+=e.harvestRate),e.harvest&&(l+=e.harvest)}),u=(a+l)*(1+b/100)*(1+(m+p)/100)*s,Math.round(u)}calcPremium(e,t,n){let i=this.seedLevels[t].premium;return i*=e?1.1:1,n.forEach(e=>{e.premium&&(i*=1+e.premium/100)}),i}calcRainbow(e,t,n,i,o){let c=this.farmLevels[n].rainbow;return c*=1+this.seedLevels[t].rainbow/100,c*=e?1.1:1,i.forEach(e=>{e.rainbow&&(c*=1+e.rainbow/100)}),o&&(c=100),c=0===t?0:c,c}calcProp(e,t,n){let i=Math.min(100,t),o=Math.min(100,n);i/=100,o/=100;let c=e?.05:0,r=(1-o)*(1-c)+o*(1-i),a=o*i*(1-c)+(1-o)*c,s=o*i*c;return r=Math.round(1e4*r)/1e4,a=Math.round(1e4*a)/1e4,s=Math.round(1e4*s)/1e4,{superiorProp:r,premiumProp:a,superiorPremiumProp:s}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=n("2MiI"),l=n("wHSu"),m=n("Nv++");let p=(()=>{class e{constructor(){this.cancel=new r.n,this.closeIcon=l.gb,this.benefitIcon=l.o}ngOnInit(){this.farmNumber=60,this.priceAddition=250,this.setPrice(),this.isOpenDesc=!1}setPrice(){this.sellPrice=this.data.expectedValue*(1+this.priceAddition/100),this.income=this.sellPrice*this.data.harvest-this.data.cost,this.total=this.income*this.farmNumber-this.otherCost}closeModal(){this.cancel.emit(!0)}setPriceAddition(e){this.setPrice()}setFarmNumber(e){this.setPrice()}toggleDescription(){this.isOpenDesc=!this.isOpenDesc}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-result-modal"]],inputs:{data:"data",otherCost:"otherCost"},outputs:{cancel:"cancel"},decls:138,vars:77,consts:[[1,"modal"],[1,"background",3,"click"],[1,"wrapper"],[1,"header"],[1,"title"],[1,"content",3,"ngClass"],[1,"info"],[1,"label",2,"font-size","14px",3,"click"],[1,"toggle",3,"ngClass"],[1,"label"],[1,"detail"],[1,"description"],[1,"part","title"],[3,"icon"],[1,"content"],[1,"info","tune-part"],["type","range","min","-60","max","300","step","1",3,"ngModel","ngModelChange"],["type","range","min","1","max","60","step","1",3,"ngModel","ngModelChange"],[1,"footer"],[1,"button","close-button",3,"click"]],template:function(e,t){1&e&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.Xb("click",(function(){return t.closeModal()})),r.Ob(),r.Pb(2,"div",2),r.Pb(3,"div",3),r.Pb(4,"div",4),r.tc(5,"\u8fb2\u7530\u6536\u5272\u8cc7\u8a0a"),r.Ob(),r.Ob(),r.Pb(6,"div",5),r.Pb(7,"div",6),r.Pb(8,"div",7),r.Xb("click",(function(){return t.toggleDescription()})),r.tc(9),r.Kb(10,"div",8),r.Ob(),r.Ob(),r.Pb(11,"div",6),r.Pb(12,"div",9),r.tc(13,"\u6536\u5272\u91cf"),r.Ob(),r.Pb(14,"span",10),r.tc(15),r.ac(16,"number"),r.Ob(),r.Pb(17,"div",11),r.tc(18,"\u55ae\u683c\u8fb2\u7530\u53ef\u6536\u6210\u4f5c\u7269\u7684\u6578\u91cf"),r.Ob(),r.Ob(),r.Pb(19,"div",6),r.Pb(20,"div",9),r.tc(21,"\u5f69\u8679\u51fa\u73fe\u6a5f\u7387"),r.Ob(),r.Pb(22,"span",10),r.tc(23),r.ac(24,"number"),r.Ob(),r.Pb(25,"div",11),r.tc(26,"\u55ae\u683c\u8fb2\u7530\u51fa\u73fe\u5f69\u8679\u7684\u6a5f\u7387"),r.Ob(),r.Ob(),r.Pb(27,"div",6),r.Pb(28,"div",9),r.tc(29,"\u7279\u7d1a\u6210\u529f\u6a5f\u7387"),r.Ob(),r.Pb(30,"span",10),r.tc(31),r.ac(32,"number"),r.Ob(),r.Pb(33,"div",11),r.tc(34,"\u55ae\u683c\u8fb2\u7530\u70ba\u5f69\u8679\u6642\uff0c\u53ef\u6210\u70ba\u7279\u7d1a\u4f5c\u7269\u7684\u6a5f\u7387"),r.Ob(),r.Ob(),r.Pb(35,"div",6),r.Pb(36,"div",9),r.tc(37,"\u6536\u5272\u4e0a\u7d1a\u6a5f\u7387"),r.Ob(),r.Pb(38,"span",10),r.tc(39),r.ac(40,"number"),r.Ob(),r.Pb(41,"div",11),r.tc(42,"\u55ae\u683c\u6536\u5272\u4f5c\u7269\u6642\uff0c\u53ef\u80fd\u70ba\u4e0a\u7d1a\u7684\u6a5f\u7387"),r.Ob(),r.Ob(),r.Pb(43,"div",6),r.Pb(44,"div",9),r.tc(45,"\u6536\u5272\u7279\u7d1a\u6a5f\u7387"),r.Ob(),r.Pb(46,"span",10),r.tc(47),r.ac(48,"number"),r.Ob(),r.Pb(49,"div",11),r.tc(50,"\u55ae\u683c\u6536\u5272\u4f5c\u7269\u6642\uff0c\u53ef\u80fd\u70ba\u7279\u7d1a\u7684\u6a5f\u7387"),r.Ob(),r.Ob(),r.Pb(51,"div",6),r.Pb(52,"div",9),r.tc(53,"\u6536\u5272\u7279\u4e0a\u6a5f\u7387"),r.Ob(),r.Pb(54,"span",10),r.tc(55),r.ac(56,"number"),r.Ob(),r.Pb(57,"div",11),r.tc(58,"\u55ae\u683c\u6536\u5272\u4f5c\u7269\u6642\uff0c\u53ef\u80fd\u70ba\u7279\u4e0a\u7684\u6a5f\u7387"),r.Ob(),r.Ob(),r.Pb(59,"div",12),r.Kb(60,"fa-icon",13),r.tc(61," \u6536\u76ca\u9810\u4f30 "),r.Ob(),r.Pb(62,"div",14),r.Pb(63,"div",6),r.Pb(64,"div",9),r.tc(65,"\u8fb2\u7530\u6210\u672c (\u55ae\u683c)"),r.Ob(),r.Pb(66,"span",10),r.tc(67),r.ac(68,"number"),r.Ob(),r.Pb(69,"div",11),r.tc(70,"\u55ae\u683c\u8fb2\u7530\u6240\u9700\u8981\u7684\u6210\u672c"),r.Ob(),r.Ob(),r.Pb(71,"div",6),r.Pb(72,"div",9),r.tc(73,"\u4f5c\u7269\u552e\u50f9\u671f\u671b\u503c"),r.Ob(),r.Pb(74,"span",10),r.tc(75),r.ac(76,"number"),r.Ob(),r.Pb(77,"div",11),r.tc(78," \u4f5c\u7269\u57fa\u65bc\u6536\u5272\u4e0a\u7d1a\u3001\u7279\u7d1a\u8207\u7279\u4e0a\u6a5f\u7387\u4e58\u4e0a\u552e\u50f9\u6240\u7b97\u51fa\u7684\u671f\u671b\u503c\u518d\u52a0\u4e0a\u6642\u50f9\u52a0\u6210 "),r.Ob(),r.Ob(),r.Pb(79,"div",6),r.Pb(80,"div",9),r.tc(81,"\u9810\u671f\u6536\u76ca (\u55ae\u683c)"),r.Ob(),r.Pb(82,"span",10),r.tc(83),r.ac(84,"number"),r.Ob(),r.Pb(85,"div",11),r.tc(86," \u55ae\u683c\u8fb2\u7530\u7684\u9810\u671f\u6536\u76ca\u3002"),r.Kb(87,"br"),r.tc(88," \u516c\u5f0f\u70ba"),r.Pb(89,"i"),r.tc(90,"\u552e\u50f9\u671f\u671b\u503c * \u6536\u5272\u91cf - \u6210\u672c"),r.Ob(),r.Ob(),r.Ob(),r.Pb(91,"div",15),r.Pb(92,"div",9),r.tc(93,"\u6642\u50f9\u52a0\u6210"),r.Ob(),r.Pb(94,"span",10),r.tc(95),r.Ob(),r.Pb(96,"input",16),r.Xb("ngModelChange",(function(e){return t.priceAddition=e}))("ngModelChange",(function(e){return t.setPriceAddition(e)})),r.Ob(),r.Ob(),r.Pb(97,"div",15),r.Pb(98,"div",9),r.tc(99,"\u7e3d\u7530\u6578"),r.Ob(),r.Pb(100,"span",10),r.tc(101),r.Ob(),r.Pb(102,"input",17),r.Xb("ngModelChange",(function(e){return t.farmNumber=e}))("ngModelChange",(function(e){return t.setFarmNumber(e)})),r.Ob(),r.Ob(),r.Pb(103,"div",6),r.Pb(104,"div",9),r.tc(105,"\u8fb2\u7530\u6536\u76ca"),r.Ob(),r.Pb(106,"span",10),r.tc(107),r.ac(108,"number"),r.Ob(),r.Pb(109,"div",11),r.tc(110),r.Kb(111,"br"),r.tc(112),r.ac(113,"number"),r.Ob(),r.Ob(),r.Pb(114,"div",6),r.Pb(115,"div",9),r.tc(116,"\u984d\u5916\u6210\u672c"),r.Ob(),r.Pb(117,"span",10),r.tc(118),r.ac(119,"number"),r.Ob(),r.Pb(120,"div",11),r.tc(121),r.ac(122,"number"),r.Ob(),r.Ob(),r.Pb(123,"div",6),r.Pb(124,"div",9),r.tc(125,"\u7e3d\u6536\u76ca"),r.Ob(),r.Pb(126,"span",10),r.tc(127),r.ac(128,"number"),r.Ob(),r.Pb(129,"div",11),r.tc(130),r.Kb(131,"br"),r.tc(132),r.ac(133,"number"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(134,"div",18),r.Pb(135,"div",19),r.Xb("click",(function(){return t.closeModal()})),r.Kb(136,"fa-icon",13),r.tc(137," \u95dc\u9589 "),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&e&&(r.zb(6),r.fc("ngClass",t.isOpenDesc?"active":""),r.zb(3),r.vc(" ",t.isOpenDesc?"\u95dc\u9589":"\u958b\u555f","\u6b04\u4f4d\u8aaa\u660e "),r.zb(1),r.fc("ngClass",t.isOpenDesc?"active":""),r.zb(5),r.uc(r.bc(16,38,t.data.harvest)),r.zb(8),r.vc("",r.bc(24,40,t.data.rainbow),"%"),r.zb(8),r.vc("",r.bc(32,42,t.data.premium),"%"),r.zb(8),r.vc("",r.bc(40,44,100*t.data.superiorProp),"%"),r.zb(8),r.vc("",r.bc(48,46,100*t.data.premiumProp),"%"),r.zb(8),r.vc("",r.bc(56,48,100*t.data.superiorPremiumProp),"%"),r.zb(5),r.fc("icon",t.benefitIcon),r.zb(7),r.vc("$",r.cc(68,50,t.data.cost,"1.0-0"),""),r.zb(8),r.vc("$",r.cc(76,53,t.sellPrice,"1.0-0"),""),r.zb(7),r.qc("color",t.income>0?"var(--success)":"var(--danger)"),r.zb(1),r.vc(" $",r.cc(84,56,t.income,"1.0-0")," "),r.zb(11),r.qc("color",t.priceAddition>0?"var(--success)":"var(--danger)"),r.zb(1),r.vc(" ",t.priceAddition,"% "),r.zb(1),r.fc("ngModel",t.priceAddition),r.zb(5),r.uc(t.farmNumber),r.zb(1),r.fc("ngModel",t.farmNumber),r.zb(4),r.qc("color",t.total>0?"var(--success)":"var(--danger)"),r.zb(1),r.vc(" $",r.cc(108,59,t.income*t.farmNumber,"1.0-0")," "),r.zb(3),r.vc(" \u6536\u5272\u8a72\u4f5c\u7269\u4e00\u8f2a ",t.farmNumber," \u7530\uff0c"),r.zb(2),r.wc(" \u6263\u9664\u57fa\u672c\u6210\u672c\u5f8c\u9810\u4f30\u5f8c\u6703",t.total>=0?"\u8cfa":"\u8ce0","\u7d04 $",r.cc(113,62,t.income*t.farmNumber,"1.0-0")," "),r.zb(5),r.qc("color","var(--danger)"),r.zb(1),r.vc(" $",r.cc(119,65,t.otherCost,"1.0-0")," "),r.zb(3),r.vc(" \u8fb2\u4f5c\u6642\uff0c\u984d\u5916\u82b1\u8cbb\uff08\u98f2\u6599\u7b49\uff09 $",r.cc(122,68,t.otherCost,"1.0-0")," "),r.zb(5),r.qc("color",t.total>0?"var(--success)":"var(--danger)"),r.zb(1),r.vc(" $",r.cc(128,71,t.total,"1.0-0")," "),r.zb(3),r.vc(" \u6536\u5272\u8a72\u4f5c\u7269\u4e00\u8f2a ",t.farmNumber," \u7530\uff0c"),r.zb(2),r.wc(" \u7d93\u9810\u4f30\u5f8c\u6703",t.total>=0?"\u8cfa":"\u8ce0","\u7d04 $",r.cc(133,74,t.total,"1.0-0")," "),r.zb(4),r.fc("icon",t.closeIcon))},directives:[i.i,m.a,c.n,c.b,c.i,c.k],pipes:[i.d],styles:['.modal[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;z-index:10;background-color:rgba(0,0,0,.8)}.background[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]{width:100vw;height:100vh;position:fixed;top:0;left:0}.wrapper[_ngcontent-%COMP%]{z-index:15;border-radius:4px;background-color:var(--white);min-width:320px;max-width:450px;min-height:300px;max-height:640px;overflow-y:auto;display:flex;flex-flow:column nowrap;justify-content:flex-start}.header[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{align-items:center}.header[_ngcontent-%COMP%]{flex:1;width:100%;flex-flow:row wrap;justify-content:center;margin:16px auto}.content[_ngcontent-%COMP%]{flex:2;padding:4px;flex-flow:column wrap;justify-content:flex-start}.content[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]{width:95%;align-items:center}.footer[_ngcontent-%COMP%]{flex:1;flex-flow:row wrap;justify-content:flex-end;margin:8px auto}.title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;text-align:center}.info[_ngcontent-%COMP%]{display:flex;padding:4px;margin:2px 4px;flex-flow:row wrap;justify-content:flex-start;align-items:center}.info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{padding:4px;margin-right:12px;font-size:16;font-weight:500;min-width:128px;max-width:128px}.info[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{font-weight:600;min-width:40px;margin:4px}.description[_ngcontent-%COMP%]{flex-basis:95%;font-size:14px;color:var(--info);padding-left:4px;display:none;transition:.5s}.content.active[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{display:inline-block}.part.title[_ngcontent-%COMP%]{margin-top:12px;font-size:18px;padding:8px 8px 8px 20px;text-align:left}input[type=range][_ngcontent-%COMP%]{width:100%;margin-top:2px;margin-bottom:6px}.button[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:4px 12px;font-size:18px;line-height:20px;color:var(--primary);border:1px solid var(--primary);border-radius:8px;margin:4px 8px}.button[_ngcontent-%COMP%]:hover{cursor:pointer}.close-button[_ngcontent-%COMP%]{float:right;font-weight:600;color:var(--red);border:1px solid var(--red);border-radius:8px}.toggle[_ngcontent-%COMP%]{display:inline-block;margin-left:16px;width:24px;height:8px;border-radius:8px;position:relative}.toggle[_ngcontent-%COMP%], .toggle[_ngcontent-%COMP%]:after{background-color:var(--gray);transition-duration:.3s}.toggle[_ngcontent-%COMP%]:after{content:"";width:16px;height:16px;border-radius:50%;position:absolute;left:-8px;top:-4px}.toggle.active[_ngcontent-%COMP%]:after{background-color:var(--green);left:calc(100% - 8px)}']}),e})();function u(e,t){if(1&e&&(r.Pb(0,"option",15),r.tc(1),r.Ob()),2&e){const e=t.$implicit;r.fc("value",e),r.zb(1),r.uc(e)}}function d(e,t){if(1&e){const e=r.Qb();r.Pb(0,"app-result-modal",16),r.Xb("cancel",(function(t){return r.lc(e),r.Zb().closeModal(t)})),r.Ob()}if(2&e){const e=r.Zb();r.fc("data",e.result)("otherCost",e.computeOtherCost())}}function h(e,t){1&e&&(r.Pb(0,"div",18),r.Pb(1,"label"),r.tc(2," \u9ede\u83dc\u91d1\u50f9\u683c (3\u683c)"),r.Ob(),r.Kb(3,"input",27),r.Ob())}function f(e,t){1&e&&(r.Pb(0,"div",18),r.Pb(1,"label"),r.tc(2," \u5e8a\u571f\u50f9 (\u55ae\u50f9)"),r.Ob(),r.Kb(3,"input",28),r.Ob())}function g(e,t){if(1&e){const e=r.Qb();r.Pb(0,"div",2),r.Pb(1,"div",17),r.tc(2,"\u6210\u672c\u8a08\u7b97 (\u4e00\u500b\u7530)"),r.Ob(),r.Pb(3,"div",18),r.Pb(4,"div"),r.Pb(5,"label"),r.tc(6," \u6709\u7121\u9130\u5c45\u4e92\u52a9 "),r.Ob(),r.Pb(7,"input",19),r.Xb("ngModelChange",(function(t){return r.lc(e),r.Zb().haveAssistance=t})),r.Ob(),r.Ob(),r.Ob(),r.Pb(8,"form",3),r.rc(9,h,4,0,"div",20),r.rc(10,f,4,0,"div",20),r.Pb(11,"div",18),r.Pb(12,"label"),r.tc(13," \u57fa\u80a5\u50f9 (\u55ae\u50f9)"),r.Ob(),r.Kb(14,"input",21),r.Ob(),r.Pb(15,"div",22),r.Pb(16,"div"),r.Pb(17,"label"),r.tc(18,"\u80a5\u6599\u50f9 (\u55ae\u50f9)"),r.Ob(),r.Kb(19,"input",23),r.Ob(),r.Pb(20,"div"),r.Pb(21,"label"),r.tc(22,"\u6578\u91cf "),r.Ob(),r.Kb(23,"input",24),r.Ob(),r.Ob(),r.Pb(24,"div",22),r.Pb(25,"div"),r.Pb(26,"label"),r.tc(27,"\u98f2\u6599\u50f9 (\u55ae\u50f9)"),r.Ob(),r.Kb(28,"input",25),r.Ob(),r.Pb(29,"div"),r.Pb(30,"label"),r.tc(31,"\u6578\u91cf (\u4e00\u8f2a\u7530)"),r.Ob(),r.Kb(32,"input",26),r.Ob(),r.Ob(),r.Ob(),r.Ob()}if(2&e){const e=r.Zb();r.zb(7),r.fc("ngModel",e.haveAssistance),r.zb(1),r.fc("formGroup",e.costForm),r.zb(1),r.fc("ngIf",e.haveAssistance),r.zb(1),r.fc("ngIf",!e.isSeed)}}function v(e,t){if(1&e&&(r.Pb(0,"option",15),r.tc(1),r.Ob()),2&e){const e=t.$implicit;r.fc("value",e.name),r.zb(1),r.uc(e.name)}}function P(e,t){if(1&e&&(r.Pb(0,"option",15),r.tc(1),r.Ob()),2&e){const e=t.$implicit;r.fc("value",e.name),r.zb(1),r.uc(e.name)}}function O(e,t){if(1&e&&(r.Pb(0,"option",15),r.tc(1),r.Ob()),2&e){const e=t.$implicit;r.fc("value",e.name),r.zb(1),r.uc(e.name)}}function w(e,t){if(1&e){const e=r.Qb();r.Pb(0,"div",2),r.Pb(1,"div",17),r.tc(2,"\u4f5c\u7269\u8cc7\u8a0a"),r.Ob(),r.Pb(3,"form",3),r.Pb(4,"div",18),r.Pb(5,"label"),r.tc(6,"\u4f5c\u7269\u7b49\u7d1a"),r.Ob(),r.Pb(7,"select",29),r.Xb("change",(function(t){return r.lc(e),r.Zb().selectSeedLevel(t)})),r.rc(8,v,2,2,"option",6),r.Ob(),r.Pb(9,"div",30),r.Pb(10,"span"),r.tc(11),r.Ob(),r.Pb(12,"span"),r.tc(13),r.Ob(),r.Ob(),r.Ob(),r.Pb(14,"div",31),r.Pb(15,"div",32),r.Pb(16,"div",18),r.tc(17,"\u8b8a\u7570\u5c6c\u6027"),r.Ob(),r.Pb(18,"div",18),r.Kb(19,"input",33),r.Pb(20,"label"),r.tc(21,"\u7279\u7d1a\u6210\u529f\u7387\u4e0a\u5347 10% "),r.Ob(),r.Ob(),r.Pb(22,"div",18),r.Kb(23,"input",34),r.Pb(24,"label"),r.tc(25,"\u7279\u7d1a\u767c\u751f\u7387 10% "),r.Ob(),r.Ob(),r.Pb(26,"div",18),r.Kb(27,"input",35),r.Pb(28,"label"),r.tc(29,"\u6536\u5272\u91cf\u589e\u52a0 25% "),r.Ob(),r.Ob(),r.Pb(30,"div",18),r.Kb(31,"input",36),r.Pb(32,"label"),r.tc(33," 5% \u6a5f\u7387\u4e0a\u5347\u4e00\u968e\u6bb5"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(34,"div",18),r.Pb(35,"label"),r.tc(36,"\u7530\u5730"),r.Ob(),r.Pb(37,"select",37),r.Xb("change",(function(t){return r.lc(e),r.Zb().selectFarmLevel(t)})),r.rc(38,P,2,2,"option",6),r.Ob(),r.Pb(39,"div",30),r.Pb(40,"span"),r.tc(41),r.Ob(),r.Pb(42,"span"),r.tc(43),r.Ob(),r.Ob(),r.Ob(),r.Pb(44,"div",18),r.Pb(45,"label"),r.tc(46,"\u6eab\u5ba4"),r.Ob(),r.Pb(47,"select",38),r.Xb("change",(function(t){return r.lc(e),r.Zb().selectGreenhouseLevel(t)})),r.rc(48,O,2,2,"option",6),r.Ob(),r.Pb(49,"div",30),r.Pb(50,"span"),r.tc(51),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob()}if(2&e){const e=r.Zb();r.zb(3),r.fc("formGroup",e.harvestForm),r.zb(5),r.fc("ngForOf",e.seedLevels),r.zb(3),r.vc(" \u7279\u7d1a+",e.seedLevel.premium,"% "),r.zb(2),r.vc(" \u5f69\u8679+",e.seedLevel.rainbow,"% "),r.zb(25),r.fc("ngForOf",e.farmLevels),r.zb(3),r.vc(" \u6536\u5272\u91cf+",e.farmLevel.harvestRate,"% "),r.zb(2),r.vc(" \u5f69\u8679+",e.farmLevel.rainbow,"% "),r.zb(5),r.fc("ngForOf",e.greenhouseLevels),r.zb(3),r.vc(" \u6536\u5272\u91cf+",e.greenhouseLevel.harvestRate,"% ")}}function C(e,t){if(1&e&&(r.Pb(0,"span"),r.tc(1),r.Ob()),2&e){const e=r.Zb().$implicit;r.zb(1),r.vc("\u7279\u7d1a+",e.premium,"%")}}function x(e,t){if(1&e&&(r.Pb(0,"span"),r.tc(1),r.Ob()),2&e){const e=r.Zb().$implicit;r.zb(1),r.vc("\u5f69\u8679+",e.rainbow,"%")}}function M(e,t){if(1&e&&(r.Pb(0,"span"),r.tc(1),r.Ob()),2&e){const e=r.Zb().$implicit;r.zb(1),r.vc("\u6536\u5272\u91cf+",e.harvest,"")}}function z(e,t){if(1&e&&(r.Pb(0,"span"),r.tc(1),r.Ob()),2&e){const e=r.Zb().$implicit;r.zb(1),r.vc("\u6536\u5272\u91cf+",e.harvestRate,"%")}}function k(e,t){if(1&e){const e=r.Qb();r.Pb(0,"div",43),r.Pb(1,"span",17),r.tc(2),r.Ob(),r.Pb(3,"div",30),r.rc(4,C,2,1,"span",44),r.rc(5,x,2,1,"span",44),r.rc(6,M,2,1,"span",44),r.rc(7,z,2,1,"span",44),r.Ob(),r.Pb(8,"div",45),r.Xb("click",(function(){r.lc(e);const n=t.$implicit;return r.Zb(2).removeEquipment(n)})),r.tc(9,"\u2013"),r.Ob(),r.Ob()}if(2&e){const e=t.$implicit;r.zb(2),r.uc(e.part),r.zb(2),r.fc("ngIf",e.premium>0),r.zb(1),r.fc("ngIf",e.rainbow>0),r.zb(1),r.fc("ngIf",e.harvest>0),r.zb(1),r.fc("ngIf",e.harvestRate>0)}}function _(e,t){if(1&e&&(r.Pb(0,"option",15),r.tc(1),r.Ob()),2&e){const e=t.$implicit;r.fc("value",e),r.zb(1),r.uc(e)}}function y(e,t){if(1&e){const e=r.Qb();r.Pb(0,"div",46),r.Pb(1,"div"),r.Pb(2,"label",47),r.tc(3,"\u88dd\u5099"),r.Ob(),r.Pb(4,"select",48),r.rc(5,_,2,2,"option",6),r.Ob(),r.Ob(),r.Pb(6,"div"),r.Pb(7,"label"),r.tc(8,"+\u7279\u7d1a\u6210\u529f\u7387(%)"),r.Ob(),r.Kb(9,"input",49),r.Ob(),r.Pb(10,"div"),r.Pb(11,"label"),r.tc(12,"+\u5f69\u8679\u51fa\u73fe\u7387(%)"),r.Ob(),r.Kb(13,"input",50),r.Ob(),r.Pb(14,"div"),r.Pb(15,"label"),r.tc(16,"+\u6536\u5272\u91cf(\u500b)"),r.Ob(),r.Kb(17,"input",51),r.Ob(),r.Pb(18,"div"),r.Pb(19,"label"),r.tc(20,"+\u6536\u5272\u91cf(%)"),r.Ob(),r.Kb(21,"input",52),r.Ob(),r.Pb(22,"div"),r.Pb(23,"button",53),r.Xb("click",(function(){return r.lc(e),r.Zb(2).addEquipment()})),r.tc(24,"+\u65b0\u589e\u6b64\u88dd\u5099"),r.Ob(),r.Ob(),r.Ob()}if(2&e){const e=r.Zb(2);r.zb(5),r.fc("ngForOf",e.equipmentList)}}function L(e,t){if(1&e&&(r.Pb(0,"div",2),r.Pb(1,"div",17),r.tc(2,"\u670d\u88dd & \u8fb2\u5177"),r.Ob(),r.Pb(3,"form",3),r.Pb(4,"div",18),r.Pb(5,"div",39),r.Pb(6,"div",40),r.rc(7,k,10,5,"div",41),r.Ob(),r.rc(8,y,25,1,"div",42),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(3),r.fc("formGroup",e.harvestForm),r.zb(4),r.fc("ngForOf",e.addEquipments),r.zb(1),r.fc("ngIf",e.equipmentList.length>0)}}function I(e,t){if(1&e){const e=r.Qb();r.Pb(0,"div",2),r.Pb(1,"div",17),r.tc(2,"\u5176\u4ed6"),r.Ob(),r.Pb(3,"div",18),r.Pb(4,"div"),r.Pb(5,"input",19),r.Xb("ngModelChange",(function(t){return r.lc(e),r.Zb().others.rainbowDuck=t})),r.Ob(),r.Pb(6,"label"),r.tc(7,"\u4f7f\u7528\u5f69\u8679\u9d28 (\u5c07\u5f69\u8679\u6a5f\u7387\u8abf\u70ba100%)"),r.Ob(),r.Ob(),r.Ob(),r.Pb(8,"div",18),r.Pb(9,"label",54),r.tc(10,"\u4f7f\u7528\u589e\u91cf\u5291"),r.Ob(),r.Pb(11,"div"),r.Pb(12,"input",55),r.Xb("change",(function(){return r.lc(e),r.Zb().selectPotion(0)})),r.Ob(),r.Pb(13,"label"),r.tc(14,"\u7121"),r.Ob(),r.Ob(),r.Pb(15,"div"),r.Pb(16,"input",55),r.Xb("change",(function(){return r.lc(e),r.Zb().selectPotion(1)})),r.Ob(),r.Pb(17,"label"),r.tc(18,"\u5fae\u91cf\u7684\u589e\u7522\u91cf\u5feb\u5291 (+50%)"),r.Ob(),r.Ob(),r.Pb(19,"div"),r.Pb(20,"input",55),r.Xb("change",(function(){return r.lc(e),r.Zb().selectPotion(2)})),r.Ob(),r.Pb(21,"label"),r.tc(22,"\u5c11\u91cf\u7684\u589e\u7522\u91cf\u5feb\u5291 (+100%)"),r.Ob(),r.Ob(),r.Pb(23,"div"),r.Pb(24,"input",55),r.Xb("change",(function(){return r.lc(e),r.Zb().selectPotion(3)})),r.Ob(),r.Pb(25,"label"),r.tc(26,"\u9069\u7576\u7684\u589e\u7522\u91cf\u5feb\u5291 (+150%)"),r.Ob(),r.Ob(),r.Pb(27,"div"),r.Pb(28,"input",55),r.Xb("change",(function(){return r.lc(e),r.Zb().selectPotion(4)})),r.Ob(),r.Pb(29,"label"),r.tc(30,"\u723d\u5feb\u7684\u589e\u7522\u91cf\u5feb\u5291 (+200%)"),r.Ob(),r.Ob(),r.Ob(),r.Ob()}if(2&e){const e=r.Zb();r.zb(5),r.fc("ngModel",e.others.rainbowDuck),r.zb(7),r.fc("checked",e.others.potion.none),r.zb(4),r.fc("checked",e.others.potion.tiny),r.zb(4),r.fc("checked",e.others.potion.small),r.zb(4),r.fc("checked",e.others.potion.mid),r.zb(4),r.fc("checked",e.others.potion.big)}}const q=[{path:"",component:(()=>{class e{constructor(e,t){this.ss=e,this.cs=t,this.isSeed=!0,this.haveAssistance=!0}ngOnInit(){document.title="\u6536\u76ca\u8a08\u7b97 | RealFarm \u5c0f\u5e6b\u624b",this.seedName=this.ss.getAllCropsName(),this.isSeed=!0,this.haveAssistance=!0,this.seedLevels=[{id:0,name:"\u521d\u5b78\u8005",rainbow:0,premium:0},{id:1,name:"\u884c\u5bb6",rainbow:0,premium:25},{id:2,name:"\u5c08\u5bb6",rainbow:0,premium:40},{id:3,name:"\u9054\u4eba",rainbow:25,premium:55},{id:4,name:"\u738b",rainbow:30,premium:70},{id:5,name:"\u795e",rainbow:40,premium:85}],this.farmLevels=[{id:0,name:"\u5341\u5206\u8ca7\u7620\u7684\u8fb2\u7530",rainbow:0,harvestRate:0},{id:1,name:"\u7a0d\u5fae\u8ca7\u7620\u7684\u8fb2\u7530",rainbow:10,harvestRate:10},{id:2,name:"\u52c9\u5f37\u80fd\u4f7f\u7528\u7684\u8fb2\u7530",rainbow:20,harvestRate:20},{id:3,name:"\u7a0d\u5fae\u80a5\u6c83\u7684\u8fb2\u7530",rainbow:30,harvestRate:30},{id:4,name:"\u5341\u5206\u80a5\u6c83\u7684\u8fb2\u7530",rainbow:40,harvestRate:40},{id:5,name:"\u80a5\u6ecb\u6ecb\u7684\u8fb2\u7530",rainbow:50,harvestRate:50}],this.greenhouseLevels=[{id:0,name:"\u7121",harvestRate:0},{id:1,name:"\u7db2\u5ba4",harvestRate:10},{id:2,name:"\u6eab\u5ba4",harvestRate:20},{id:3,name:"\u52a0\u71b1\u6eab\u5ba4",harvestRate:30}],this.equipmentList=["\u5e3d\u5b50","\u8863\u670d","\u978b\u5b50","\u92e4\u982d","\u93df\u5b50","\u82b1\u93df","\u6f86\u6c34\u58fa","\u942e\u5200","\u83dc\u7c43"],this.addEquipments=[],this.seedLevel=this.seedLevels[0],this.farmLevel=this.farmLevels[0],this.greenhouseLevel=this.greenhouseLevels[0],this.others={rainbowDuck:!1,blessTree:0,potion:{none:!0,tiny:!1,small:!1,mid:!1,big:!1}},this.formReset(),this.showResult=!1,this.result={cost:0,harvest:0,premium:0,rainbow:0,superiorProp:0,premiumProp:0,superiorPremiumProp:0,expectedValue:0,priceAddition:0,sellPrice:0,income:0}}formReset(){this.costForm=new c.e({seed:new c.c(this.seedName[0]),bedSoil:new c.c(0),baseFertilizer:new c.c(0),fertilizer:new c.c(0),fertilizerNumber:new c.c(0),assistanceCost:new c.c(0),drink:new c.c(0),drinkNumber:new c.c(0)}),this.harvestForm=new c.e({specialSeed:new c.e({premium:new c.c(!1),rainbow:new c.c(!1),harvest:new c.c(!1),levelUp:new c.c(!1)}),seedLevel:new c.c(this.seedLevel.name),farmLevel:new c.c(this.farmLevel.name),greenhouseLevel:new c.c(this.greenhouseLevel.name),equipment:new c.e({part:new c.c(this.equipmentList[0]),rainbow:new c.c(0),premium:new c.c(0),harvest:new c.c(0),harvestRate:new c.c(0)}),other:new c.e({rainbowDuck:new c.c(!1),treeBless:new c.c(!1)})})}selectSeed(){this.isSeed=!this.isSeed}checkAssistance(){this.haveAssistance=!this.haveAssistance}selectSeedLevel(e){this.seedLevel=this.seedLevels.filter(e=>e.name===this.harvestForm.get("seedLevel").value)[0]}selectFarmLevel(e){this.farmLevel=this.farmLevels.filter(e=>e.name===this.harvestForm.get("farmLevel").value)[0]}selectGreenhouseLevel(e){this.greenhouseLevel=this.greenhouseLevels.filter(e=>e.name===this.harvestForm.get("greenhouseLevel").value)[0]}addEquipment(){let e={part:this.harvestForm.get("equipment").get("part").value,rainbow:this.harvestForm.get("equipment").get("rainbow").value,premium:this.harvestForm.get("equipment").get("premium").value,harvest:this.harvestForm.get("equipment").get("harvest").value,harvestRate:this.harvestForm.get("equipment").get("harvestRate").value};0===e.premium&&0===e.rainbow&&0===e.harvest&&0===e.harvestRate||(this.equipmentList=this.equipmentList.filter(t=>t!==e.part),this.addEquipments=[...this.addEquipments,e],this.harvestForm.get("equipment").setValue({part:this.equipmentList[0],rainbow:0,premium:0,harvest:0,harvestRate:0}))}removeEquipment(e){this.addEquipments=this.addEquipments.filter(t=>t.part!==e.part),this.equipmentList=[...this.equipmentList,e.part]}selectPotion(e){0===e?this.others.potion={none:!0,tiny:!1,small:!1,mid:!1,big:!1}:1===e?this.others.potion={none:!1,tiny:!0,small:!1,mid:!1,big:!1}:2===e?this.others.potion={none:!1,tiny:!1,small:!0,mid:!1,big:!1}:3===e?this.others.potion={none:!1,tiny:!1,small:!1,mid:!0,big:!1}:4===e&&(this.others.potion={none:!1,tiny:!1,small:!1,mid:!1,big:!0})}computeCost(){const e=this.costForm,t=this.ss.searchSeed(e.get("seed").value).crop_info.seed_cost,n=this.haveAssistance?e.get("assistanceCost").value:0,i=this.isSeed?0:e.get("bedSoil").value;let o;return o=this.cs.calcFarmCost(t,n,e.get("baseFertilizer").value,e.get("fertilizer").value,e.get("fertilizerNumber").value,i),o}computeOtherCost(){const e=this.costForm;let t=e.get("drink").value*e.get("drinkNumber").value;return Math.floor(t)}computeHarvest(){let e=0,t=0,n=this.harvestForm.get("specialSeed").get("harvest").value;return this.others.potion.tiny?t=1:this.others.potion.small?t=2:this.others.potion.mid?t=3:this.others.potion.big&&(t=4),e=this.cs.calcHarvest(this.isSeed,n,this.haveAssistance,this.farmLevel.id,this.greenhouseLevel.id,this.addEquipments,t),Math.round(e)}computePremium(){let e=0,t=this.harvestForm.get("specialSeed").get("premium").value;return e=this.cs.calcPremium(t,this.seedLevel.id,this.addEquipments),e}computeRainbow(){let e=0,t=this.harvestForm.get("specialSeed").get("rainbow").value;return e=this.cs.calcRainbow(t,this.seedLevel.id,this.farmLevel.id,this.addEquipments,this.others.rainbowDuck),e}computeProp(e,t){let n={},i=this.harvestForm.get("specialSeed").get("levelUp").value;return n=this.cs.calcProp(i,e,t),n}computePrice(e,t){const n=2*this.ss.searchSeed(e).crop_info.price_base;return Math.floor(n*t.superiorProp+5*n*t.premiumProp+10*n*t.superiorPremiumProp)}computeAll(){let e;this.result.cost=this.computeCost(),this.result.harvest=this.computeHarvest(),this.result.premium=this.computePremium(),this.result.rainbow=this.computeRainbow(),e=this.computeProp(this.result.premium,this.result.rainbow),this.result.superiorProp=e.superiorProp,this.result.premiumProp=e.premiumProp,this.result.superiorPremiumProp=e.superiorPremiumProp,this.result.expectedValue=this.computePrice(this.costForm.get("seed").value,e),this.showResult=!0}closeModal(e){this.showResult=!1}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(a.a),r.Jb(s))},e.\u0275cmp=r.Db({type:e,selectors:[["app-income"]],decls:33,vars:10,consts:[["title","\u8a08\u7b97\u8fb2\u7530\u6536\u76ca","subtitle","\u53ef\u540c\u6642\u8a08\u7b97\u6536\u5272\u91cf\u3001\u5f69\u8679\u6a5f\u7387\u548c\u7279\u7d1a\u6a5f\u7387\u7b49",3,"showBackIcon"],[1,"container"],[1,"section"],[3,"formGroup"],[1,"form-element","seed-part"],["id","seedSelection","name","","formControlName","seed"],[3,"value",4,"ngFor","ngForOf"],["type","radio","name","isSeed",3,"checked","change"],[3,"ngTemplateOutlet"],[1,"button",3,"click"],[3,"data","otherCost","cancel",4,"ngIf"],["costTemplate",""],["harvestTemplate",""],["equipmentTemplate",""],["otherTemplate",""],[3,"value"],[3,"data","otherCost","cancel"],[1,"title"],[1,"form-element"],["type","checkbox",3,"ngModel","ngModelChange"],["class","form-element",4,"ngIf"],["type","number","step","1000","formControlName","baseFertilizer"],[1,"form-element","count-element"],["type","number","step","1000","formControlName","fertilizer"],["type","number","step","1","formControlName","fertilizerNumber"],["type","number","step","1000","formControlName","drink"],["type","number","step","1","formControlName","drinkNumber"],["type","number","step","10000","formControlName","assistanceCost"],["type","number","step","1000","formControlName","bedSoil"],["formControlName","seedLevel",3,"change"],[1,"detail"],["id","special-seed",1,"form-element"],["formGroupName","specialSeed"],["type","checkbox","formControlName","premium"],["type","checkbox","formControlName","rainbow"],["type","checkbox","formControlName","harvest"],["type","checkbox","formControlName","levelUp"],["formControlName","farmLevel",3,"change"],["formControlName","greenhouseLevel",3,"change"],["formGroupName","equipment"],[1,"equipment-details"],["class","equipment-detail",4,"ngFor","ngForOf"],["class","form-element equipment-part",4,"ngIf"],[1,"equipment-detail"],[4,"ngIf"],[1,"remove-button",3,"click"],[1,"form-element","equipment-part"],["for",""],["formControlName","part"],["formControlName","premium","type","number","step","0.1"],["formControlName","rainbow","type","number","step","0.1"],["formControlName","harvest","type","number","step","1"],["formControlName","harvestRate","type","number","step","1"],[1,"add-button",3,"click"],[2,"font-size","18px"],["type","radio","name","potion",3,"checked","change"]],template:function(e,t){if(1&e&&(r.Kb(0,"app-header",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"form",3),r.Pb(4,"div",4),r.Pb(5,"div"),r.Pb(6,"label"),r.tc(7,"\u9078\u64c7\u6b32\u7a2e\u690d\u4f5c\u7269"),r.Ob(),r.Pb(8,"select",5),r.rc(9,u,2,2,"option",6),r.Ob(),r.Ob(),r.Pb(10,"div"),r.Pb(11,"label"),r.tc(12,"\u4f7f\u7528\u7a2e\u5b50"),r.Ob(),r.Pb(13,"input",7),r.Xb("change",(function(){return t.selectSeed()})),r.Ob(),r.Ob(),r.Pb(14,"div"),r.Pb(15,"label"),r.tc(16,"\u4f7f\u7528\u5e7c\u82d7 "),r.Ob(),r.Pb(17,"input",7),r.Xb("change",(function(){return t.selectSeed()})),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Lb(18,8),r.Lb(19,8),r.Lb(20,8),r.Lb(21,8),r.Pb(22,"button",9),r.Xb("click",(function(){return t.computeAll()})),r.tc(23,"\u8a08\u7b97\u6536\u76ca"),r.Ob(),r.rc(24,d,1,2,"app-result-modal",10),r.Ob(),r.rc(25,g,33,4,"ng-template",null,11,r.sc),r.rc(27,w,52,9,"ng-template",null,12,r.sc),r.rc(29,L,9,3,"ng-template",null,13,r.sc),r.rc(31,I,31,6,"ng-template",null,14,r.sc)),2&e){const e=r.kc(26),n=r.kc(28),i=r.kc(30),o=r.kc(32);r.fc("showBackIcon",!1),r.zb(3),r.fc("formGroup",t.costForm),r.zb(6),r.fc("ngForOf",t.seedName),r.zb(4),r.fc("checked",t.isSeed),r.zb(4),r.fc("checked",!t.isSeed),r.zb(1),r.fc("ngTemplateOutlet",e),r.zb(1),r.fc("ngTemplateOutlet",n),r.zb(1),r.fc("ngTemplateOutlet",i),r.zb(1),r.fc("ngTemplateOutlet",o),r.zb(3),r.fc("ngIf",t.showResult)}},directives:[b.a,c.r,c.j,c.f,c.p,c.i,c.d,i.j,i.m,i.k,c.l,c.q,p,c.a,c.k,c.m,c.b,c.g],styles:["select[_ngcontent-%COMP%]{min-width:150px;height:32px;line-height:32px;-webkit-appearance:menulist-button;-moz-appearance:none}.title[_ngcontent-%COMP%]{padding:16px 8px;font-size:18px;font-weight:600;text-align:center}.container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;border-top:1px solid var(--gray)}.section[_ngcontent-%COMP%]{width:85%;padding:16px 8px}.form-element[_ngcontent-%COMP%]{width:100%;margin:16px auto;display:flex;flex-direction:column;justify-content:center}.form-element[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{padding:4px;font-size:14px;font-weight:400}.detail[_ngcontent-%COMP%]{display:inline}.detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin:auto 4px auto 0;color:var(--info)}.form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex:1;font-size:16px;padding:4px;margin:0 2px;text-align:left}.form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-element[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;padding:4px;border-radius:4px;margin:0 2px}.section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;padding:4px}.form-element.count-element[_ngcontent-%COMP%]{flex-flow:row wrap;justify-content:flex-start}.form-element.count-element[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%;display:flex;flex-flow:column}#special-seed[_ngcontent-%COMP%]{flex-direction:column}#special-seed[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]{display:block}.form-element.equipment-part[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:flex-start}.equipment-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;margin:4px auto}.equipment-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .equipment-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{width:36px}.equipment-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content}button[_ngcontent-%COMP%]{color:var(--white);font-size:18px;width:75%;height:48px;background:var(--red);border-radius:4px;border:0}.button[_ngcontent-%COMP%]{margin:16px auto}.add-button[_ngcontent-%COMP%]{width:100%;color:var(--black);border:1px solid var(--black);background:var(--white);font-size:14px;height:28px}.equipment-detail[_ngcontent-%COMP%]{width:90%;margin:4px auto}.equipment-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:36px;font-size:14px;font-weight:500}.equipment-detail[_ngcontent-%COMP%]   .detial[_ngcontent-%COMP%]{flex:3}.equipment-detail[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{display:inline-block;text-align:center;line-height:20px;width:20px;height:20px;font-size:14px;font-weight:600;color:var(--danger);background-color:inherit;border-radius:50%;border:1px solid var(--danger)}"]}),e})()},{}];let N=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[i.b,o.g.forChild(q)]]}),e})();var R=n("j1ZV");let F=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[i.b,N,c.o,c.h,c.o,R.a,m.b]]}),e})()}}]);