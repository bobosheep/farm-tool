(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{mTXl:function(e,t,n){"use strict";n.r(t),n.d(t,"IncomeModule",(function(){return F}));var i=n("ofXK"),o=n("tyNb"),r=n("3Pt+"),c=n("fXoL"),a=n("uOO6"),b=n("2MiI");let s=(()=>{class e{constructor(){this.cancel=new c.n}ngOnInit(){this.farmNumber=60,this.priceAddition=250,this.setPrice()}setPrice(){this.sellPrice=this.data.expectedValue*(1+this.priceAddition/100),this.income=this.sellPrice*this.data.harvest-this.data.cost,this.total=this.income*this.farmNumber}closeModal(){this.cancel.emit(!0)}setPriceAddition(e){this.setPrice()}setFarmNumber(e){this.setPrice()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Db({type:e,selectors:[["app-result-modal"]],inputs:{data:"data"},outputs:{cancel:"cancel"},decls:84,vars:44,consts:[[1,"modal"],[1,"background",3,"click"],[1,"wrapper"],[1,"close-button",3,"click"],[1,"header"],[1,"title"],[1,"content"],[1,"info"],[1,"label"],[1,"detail"],[1,"info","tune-part"],["type","range","min","-60","max","300","step","1",3,"ngModel","ngModelChange"],["type","range","min","1","max","60","step","1",3,"ngModel","ngModelChange"],[1,"part","title"],[1,"footer"]],template:function(e,t){1&e&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Xb("click",(function(){return t.closeModal()})),c.Ob(),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Xb("click",(function(){return t.closeModal()})),c.tc(4,"x"),c.Ob(),c.Pb(5,"div",4),c.Pb(6,"div",5),c.tc(7,"\u9810\u671f\u7d50\u679c"),c.Ob(),c.Ob(),c.Pb(8,"div",6),c.Pb(9,"div",7),c.Pb(10,"div",8),c.tc(11,"\u8fb2\u7530\u6210\u672c (\u55ae\u683c)"),c.Ob(),c.Pb(12,"span",9),c.tc(13),c.ac(14,"number"),c.Ob(),c.Ob(),c.Pb(15,"div",7),c.Pb(16,"div",8),c.tc(17,"\u4f5c\u7269\u9810\u671f\u552e\u50f9 (\u55ae\u500b)"),c.Ob(),c.Pb(18,"span",9),c.tc(19),c.ac(20,"number"),c.Ob(),c.Ob(),c.Pb(21,"div",7),c.Pb(22,"div",8),c.tc(23,"\u9810\u671f\u6536\u76ca (\u55ae\u683c)"),c.Ob(),c.Pb(24,"span",9),c.tc(25),c.ac(26,"number"),c.Ob(),c.Ob(),c.Pb(27,"div",10),c.Pb(28,"div",8),c.tc(29,"\u6642\u50f9\u52a0\u6210"),c.Ob(),c.Pb(30,"span",9),c.tc(31),c.Ob(),c.Pb(32,"input",11),c.Xb("ngModelChange",(function(e){return t.priceAddition=e}))("ngModelChange",(function(e){return t.setPriceAddition(e)})),c.Ob(),c.Ob(),c.Pb(33,"div",10),c.Pb(34,"div",8),c.tc(35,"\u7e3d\u7530\u6578"),c.Ob(),c.Pb(36,"span",9),c.tc(37),c.Ob(),c.Pb(38,"input",12),c.Xb("ngModelChange",(function(e){return t.farmNumber=e}))("ngModelChange",(function(e){return t.setFarmNumber(e)})),c.Ob(),c.Ob(),c.Pb(39,"div",7),c.Pb(40,"div",8),c.tc(41,"\u7e3d\u6536\u76ca"),c.Ob(),c.Pb(42,"span",9),c.tc(43),c.ac(44,"number"),c.Ob(),c.Ob(),c.Pb(45,"div",13),c.tc(46,"\u8a73\u7d30\u8cc7\u8a0a"),c.Ob(),c.Pb(47,"div",7),c.Pb(48,"div",8),c.tc(49,"\u7e3d\u6536\u5272\u91cf"),c.Ob(),c.Pb(50,"span"),c.tc(51),c.ac(52,"number"),c.Ob(),c.Ob(),c.Pb(53,"div",7),c.Pb(54,"div",8),c.tc(55,"\u6536\u5272\u4e0a\u7d1a\u6a5f\u7387"),c.Ob(),c.Pb(56,"span",8),c.tc(57),c.ac(58,"number"),c.Ob(),c.Ob(),c.Pb(59,"div",7),c.Pb(60,"div",8),c.tc(61,"\u6536\u5272\u7279\u7d1a\u6a5f\u7387"),c.Ob(),c.Pb(62,"span"),c.tc(63),c.ac(64,"number"),c.Ob(),c.Ob(),c.Pb(65,"div",7),c.Pb(66,"div",8),c.tc(67,"\u6536\u5272\u7279\u4e0a\u6a5f\u7387"),c.Ob(),c.Pb(68,"span"),c.tc(69),c.ac(70,"number"),c.Ob(),c.Ob(),c.Pb(71,"div",7),c.Pb(72,"div",8),c.tc(73,"\u5f69\u8679\u51fa\u73fe\u6a5f\u7387"),c.Ob(),c.Pb(74,"span"),c.tc(75),c.ac(76,"number"),c.Ob(),c.Ob(),c.Pb(77,"div",7),c.Pb(78,"div",8),c.tc(79,"\u7279\u7d1a\u6210\u529f\u6a5f\u7387"),c.Ob(),c.Pb(80,"span"),c.tc(81),c.ac(82,"number"),c.Ob(),c.Ob(),c.Ob(),c.Kb(83,"div",14),c.Ob(),c.Ob()),2&e&&(c.zb(13),c.vc("$",c.cc(14,20,t.data.cost,"1.0-0"),""),c.zb(6),c.vc("$",c.cc(20,23,t.sellPrice,"1.0-0"),""),c.zb(5),c.qc("color",t.income>0?"var(--success)":"var(--danger)"),c.zb(1),c.vc(" $",c.cc(26,26,t.income,"1.0-0")," "),c.zb(5),c.qc("color",t.priceAddition>0?"var(--success)":"var(--danger)"),c.zb(1),c.vc(" ",t.priceAddition,"% "),c.zb(1),c.fc("ngModel",t.priceAddition),c.zb(5),c.uc(t.farmNumber),c.zb(1),c.fc("ngModel",t.farmNumber),c.zb(4),c.qc("color",t.total>0?"var(--success)":"var(--danger)"),c.zb(1),c.vc(" $",c.cc(44,29,t.total,"1.0-0")," "),c.zb(8),c.uc(c.bc(52,32,t.data.harvest)),c.zb(6),c.vc("",c.bc(58,34,100*t.data.superiorProp),"%"),c.zb(6),c.vc("",c.bc(64,36,100*t.data.premiumProp),"%"),c.zb(6),c.vc("",c.bc(70,38,100*t.data.superiorPremiumProp),"%"),c.zb(6),c.vc("",c.bc(76,40,t.data.rainbow),"%"),c.zb(6),c.vc("",c.bc(82,42,t.data.premium),"%"))},directives:[r.n,r.b,r.i,r.k],pipes:[i.d],styles:[".modal[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;z-index:10;background-color:rgba(0,0,0,.8)}.background[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]{width:100vw;height:100vh;position:fixed;top:0;left:0}.wrapper[_ngcontent-%COMP%]{z-index:15;position:relative;border-radius:4px;background-color:var(--white);min-width:300px;max-width:375px;min-height:300px;max-height:640px;overflow:auto;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center}.header[_ngcontent-%COMP%]{flex:1;flex-flow:row wrap;justify-content:center;padding:16px}.content[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{width:100%;align-items:center}.content[_ngcontent-%COMP%]{flex:2;padding:4px;flex-flow:column wrap;justify-content:flex-start}.footer[_ngcontent-%COMP%]{flex:1;width:100%;flex-flow:row wrap;justify-content:flex-end;align-items:center;padding:16px}.title[_ngcontent-%COMP%]{font-size:24px;font-weight:600;text-align:center}.info[_ngcontent-%COMP%]{display:flex;padding:4px;margin:2px 8px;flex-flow:row wrap;justify-content:flex-start;align-items:center}.info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{padding:4px;margin-right:12px;font-size:16;font-weight:500;min-width:72px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.info[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{min-width:40px;margin:4px}.part.title[_ngcontent-%COMP%]{font-size:18px;padding:8px}input[type=range][_ngcontent-%COMP%]{max-width:108px}.close-button[_ngcontent-%COMP%]{position:absolute;right:12px;top:6px;font-size:24px;font-weight:600;color:var(--primary)}.close-button[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),e})();function l(e,t){if(1&e&&(c.Pb(0,"option",15),c.tc(1),c.Ob()),2&e){const e=t.$implicit;c.fc("value",e),c.zb(1),c.uc(e)}}function p(e,t){if(1&e){const e=c.Qb();c.Pb(0,"app-result-modal",16),c.Xb("cancel",(function(t){return c.lc(e),c.Zb().closeModal(t)})),c.Ob()}if(2&e){const e=c.Zb();c.fc("data",e.result)}}function m(e,t){1&e&&(c.Pb(0,"div",18),c.Pb(1,"label"),c.tc(2,"\u5de5\u4eba\u9ede\u83dc (3\u683c)"),c.Ob(),c.Kb(3,"input",25),c.Ob())}function u(e,t){1&e&&(c.Pb(0,"div",18),c.Pb(1,"label"),c.tc(2,"\u5e8a\u571f\u50f9 (\u55ae\u50f9)"),c.Ob(),c.Kb(3,"input",26),c.Ob())}function d(e,t){if(1&e){const e=c.Qb();c.Pb(0,"div",2),c.Pb(1,"div",17),c.tc(2,"\u6210\u672c\u8a08\u7b97 (\u4e00\u500b\u7530)"),c.Ob(),c.Pb(3,"div",18),c.Pb(4,"div"),c.Pb(5,"label"),c.tc(6," \u6709\u7121\u9130\u5c45\u4e92\u52a9 "),c.Ob(),c.Pb(7,"input",19),c.Xb("ngModelChange",(function(t){return c.lc(e),c.Zb().haveAssistance=t})),c.Ob(),c.Ob(),c.Ob(),c.Pb(8,"form",3),c.rc(9,m,4,0,"div",20),c.rc(10,u,4,0,"div",20),c.Pb(11,"div",18),c.Pb(12,"label"),c.tc(13,"\u57fa\u80a5\u50f9 (\u55ae\u50f9)"),c.Ob(),c.Kb(14,"input",21),c.Ob(),c.Pb(15,"div",22),c.Pb(16,"div"),c.Pb(17,"label"),c.tc(18,"\u80a5\u6599\u50f9 (\u55ae\u50f9)"),c.Ob(),c.Kb(19,"input",23),c.Ob(),c.Pb(20,"div"),c.Pb(21,"label"),c.tc(22,"\u6578\u91cf"),c.Ob(),c.Kb(23,"input",24),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&e){const e=c.Zb();c.zb(7),c.fc("ngModel",e.haveAssistance),c.zb(1),c.fc("formGroup",e.costForm),c.zb(1),c.fc("ngIf",e.haveAssistance),c.zb(1),c.fc("ngIf",!e.isSeed)}}function h(e,t){if(1&e&&(c.Pb(0,"option",15),c.tc(1),c.Ob()),2&e){const e=t.$implicit;c.fc("value",e.name),c.zb(1),c.uc(e.name)}}function f(e,t){if(1&e&&(c.Pb(0,"option",15),c.tc(1),c.Ob()),2&e){const e=t.$implicit;c.fc("value",e.name),c.zb(1),c.uc(e.name)}}function v(e,t){if(1&e&&(c.Pb(0,"option",15),c.tc(1),c.Ob()),2&e){const e=t.$implicit;c.fc("value",e.name),c.zb(1),c.uc(e.name)}}function P(e,t){if(1&e){const e=c.Qb();c.Pb(0,"div",2),c.Pb(1,"div",17),c.tc(2,"\u4f5c\u7269\u8cc7\u8a0a"),c.Ob(),c.Pb(3,"form",3),c.Pb(4,"div",18),c.Pb(5,"label"),c.tc(6,"\u4f5c\u7269\u7b49\u7d1a"),c.Ob(),c.Pb(7,"select",27),c.Xb("change",(function(t){return c.lc(e),c.Zb().selectSeedLevel(t)})),c.rc(8,h,2,2,"option",6),c.Ob(),c.Pb(9,"div",28),c.Pb(10,"span"),c.tc(11),c.Ob(),c.Pb(12,"span"),c.tc(13),c.Ob(),c.Ob(),c.Ob(),c.Pb(14,"div",29),c.Pb(15,"div",30),c.Pb(16,"div",18),c.tc(17,"\u8b8a\u7570\u5c6c\u6027"),c.Ob(),c.Pb(18,"div",18),c.Kb(19,"input",31),c.Pb(20,"label"),c.tc(21,"\u7279\u7d1a\u6210\u529f\u7387\u4e0a\u5347 10% "),c.Ob(),c.Ob(),c.Pb(22,"div",18),c.Kb(23,"input",32),c.Pb(24,"label"),c.tc(25,"\u7279\u7d1a\u767c\u751f\u7387 10% "),c.Ob(),c.Ob(),c.Pb(26,"div",18),c.Kb(27,"input",33),c.Pb(28,"label"),c.tc(29,"\u6536\u5272\u91cf\u589e\u52a0 25% "),c.Ob(),c.Ob(),c.Pb(30,"div",18),c.Kb(31,"input",34),c.Pb(32,"label"),c.tc(33," 5% \u6a5f\u7387\u4e0a\u5347\u4e00\u968e\u6bb5"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(34,"div",18),c.Pb(35,"label"),c.tc(36,"\u7530\u5730"),c.Ob(),c.Pb(37,"select",35),c.Xb("change",(function(t){return c.lc(e),c.Zb().selectFarmLevel(t)})),c.rc(38,f,2,2,"option",6),c.Ob(),c.Pb(39,"div",28),c.Pb(40,"span"),c.tc(41),c.Ob(),c.Pb(42,"span"),c.tc(43),c.Ob(),c.Ob(),c.Ob(),c.Pb(44,"div",18),c.Pb(45,"label"),c.tc(46,"\u6eab\u5ba4"),c.Ob(),c.Pb(47,"select",36),c.Xb("change",(function(t){return c.lc(e),c.Zb().selectGreenhouseLevel(t)})),c.rc(48,v,2,2,"option",6),c.Ob(),c.Pb(49,"div",28),c.Pb(50,"span"),c.tc(51),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&e){const e=c.Zb();c.zb(3),c.fc("formGroup",e.harvestForm),c.zb(5),c.fc("ngForOf",e.seedLevels),c.zb(3),c.vc(" \u7279\u7d1a+",e.seedLevel.premium,"% "),c.zb(2),c.vc(" \u5f69\u8679+",e.seedLevel.rainbow,"% "),c.zb(25),c.fc("ngForOf",e.farmLevels),c.zb(3),c.vc(" \u6536\u5272\u91cf+",e.farmLevel.harvestRate,"% "),c.zb(2),c.vc(" \u5f69\u8679+",e.farmLevel.rainbow,"% "),c.zb(5),c.fc("ngForOf",e.greenhouseLevels),c.zb(3),c.vc(" \u6536\u5272\u91cf+",e.greenhouseLevel.harvestRate,"% ")}}function g(e,t){if(1&e&&(c.Pb(0,"span"),c.tc(1),c.Ob()),2&e){const e=c.Zb().$implicit;c.zb(1),c.vc("\u7279\u7d1a+",e.premium,"%")}}function O(e,t){if(1&e&&(c.Pb(0,"span"),c.tc(1),c.Ob()),2&e){const e=c.Zb().$implicit;c.zb(1),c.vc("\u5f69\u8679+",e.rainbow,"%")}}function w(e,t){if(1&e&&(c.Pb(0,"span"),c.tc(1),c.Ob()),2&e){const e=c.Zb().$implicit;c.zb(1),c.vc("\u6536\u5272\u91cf+",e.harvest,"")}}function x(e,t){if(1&e&&(c.Pb(0,"span"),c.tc(1),c.Ob()),2&e){const e=c.Zb().$implicit;c.zb(1),c.vc("\u6536\u5272\u91cf+",e.harvestRate,"%")}}function C(e,t){if(1&e){const e=c.Qb();c.Pb(0,"div",41),c.Pb(1,"span",17),c.tc(2),c.Ob(),c.Pb(3,"div",28),c.rc(4,g,2,1,"span",42),c.rc(5,O,2,1,"span",42),c.rc(6,w,2,1,"span",42),c.rc(7,x,2,1,"span",42),c.Ob(),c.Pb(8,"div",43),c.Xb("click",(function(){c.lc(e);const n=t.$implicit;return c.Zb(2).removeEquipment(n)})),c.tc(9,"\u2013"),c.Ob(),c.Ob()}if(2&e){const e=t.$implicit;c.zb(2),c.uc(e.part),c.zb(2),c.fc("ngIf",e.premium>0),c.zb(1),c.fc("ngIf",e.rainbow>0),c.zb(1),c.fc("ngIf",e.harvest>0),c.zb(1),c.fc("ngIf",e.harvestRate>0)}}function M(e,t){if(1&e&&(c.Pb(0,"option",15),c.tc(1),c.Ob()),2&e){const e=t.$implicit;c.fc("value",e),c.zb(1),c.uc(e)}}function z(e,t){if(1&e){const e=c.Qb();c.Pb(0,"div",44),c.Pb(1,"div"),c.Pb(2,"label",45),c.tc(3,"\u88dd\u5099"),c.Ob(),c.Pb(4,"select",46),c.rc(5,M,2,2,"option",6),c.Ob(),c.Ob(),c.Pb(6,"div"),c.Pb(7,"label"),c.tc(8,"+\u7279\u7d1a\u6210\u529f\u7387(%)"),c.Ob(),c.Kb(9,"input",47),c.Ob(),c.Pb(10,"div"),c.Pb(11,"label"),c.tc(12,"+\u5f69\u8679\u51fa\u73fe\u7387(%)"),c.Ob(),c.Kb(13,"input",48),c.Ob(),c.Pb(14,"div"),c.Pb(15,"label"),c.tc(16,"+\u6536\u5272\u91cf(\u500b)"),c.Ob(),c.Kb(17,"input",49),c.Ob(),c.Pb(18,"div"),c.Pb(19,"label"),c.tc(20,"+\u6536\u5272\u91cf(%)"),c.Ob(),c.Kb(21,"input",50),c.Ob(),c.Pb(22,"div"),c.Pb(23,"button",51),c.Xb("click",(function(){return c.lc(e),c.Zb(2).addEquipment()})),c.tc(24,"+\u65b0\u589e\u6b64\u88dd\u5099"),c.Ob(),c.Ob(),c.Ob()}if(2&e){const e=c.Zb(2);c.zb(5),c.fc("ngForOf",e.equipmentList)}}function _(e,t){if(1&e&&(c.Pb(0,"div",2),c.Pb(1,"div",17),c.tc(2,"\u670d\u88dd & \u8fb2\u5177"),c.Ob(),c.Pb(3,"form",3),c.Pb(4,"div",18),c.Pb(5,"div",37),c.Pb(6,"div",38),c.rc(7,C,10,5,"div",39),c.Ob(),c.rc(8,z,25,1,"div",40),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&e){const e=c.Zb();c.zb(3),c.fc("formGroup",e.harvestForm),c.zb(4),c.fc("ngForOf",e.addEquipments),c.zb(1),c.fc("ngIf",e.equipmentList.length>0)}}function L(e,t){if(1&e){const e=c.Qb();c.Pb(0,"div",2),c.Pb(1,"div",17),c.tc(2,"\u5176\u4ed6"),c.Ob(),c.Pb(3,"div",18),c.Pb(4,"div"),c.Pb(5,"input",19),c.Xb("ngModelChange",(function(t){return c.lc(e),c.Zb().others.rainbowDuck=t})),c.Ob(),c.Pb(6,"label"),c.tc(7,"\u4f7f\u7528\u5f69\u8679\u9d28 (\u5c07\u5f69\u8679\u6a5f\u7387\u8abf\u70ba100%)"),c.Ob(),c.Ob(),c.Ob(),c.Pb(8,"div",18),c.Pb(9,"label",52),c.tc(10,"\u4f7f\u7528\u589e\u91cf\u5291"),c.Ob(),c.Pb(11,"div"),c.Pb(12,"input",53),c.Xb("change",(function(){return c.lc(e),c.Zb().selectPotion(0)})),c.Ob(),c.Pb(13,"label"),c.tc(14,"\u7121"),c.Ob(),c.Ob(),c.Pb(15,"div"),c.Pb(16,"input",53),c.Xb("change",(function(){return c.lc(e),c.Zb().selectPotion(1)})),c.Ob(),c.Pb(17,"label"),c.tc(18,"\u5fae\u91cf\u7684\u589e\u7522\u91cf\u5feb\u5291 (+50%)"),c.Ob(),c.Ob(),c.Pb(19,"div"),c.Pb(20,"input",53),c.Xb("change",(function(){return c.lc(e),c.Zb().selectPotion(2)})),c.Ob(),c.Pb(21,"label"),c.tc(22,"\u5c11\u91cf\u7684\u589e\u7522\u91cf\u5feb\u5291 (+100%)"),c.Ob(),c.Ob(),c.Pb(23,"div"),c.Pb(24,"input",53),c.Xb("change",(function(){return c.lc(e),c.Zb().selectPotion(3)})),c.Ob(),c.Pb(25,"label"),c.tc(26,"\u9069\u7576\u7684\u589e\u7522\u91cf\u5feb\u5291 (+150%)"),c.Ob(),c.Ob(),c.Pb(27,"div"),c.Pb(28,"input",53),c.Xb("change",(function(){return c.lc(e),c.Zb().selectPotion(4)})),c.Ob(),c.Pb(29,"label"),c.tc(30,"\u723d\u5feb\u7684\u589e\u7522\u91cf\u5feb\u5291 (+200%)"),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&e){const e=c.Zb();c.zb(5),c.fc("ngModel",e.others.rainbowDuck),c.zb(7),c.fc("checked",e.others.potion.none),c.zb(4),c.fc("checked",e.others.potion.tiny),c.zb(4),c.fc("checked",e.others.potion.small),c.zb(4),c.fc("checked",e.others.potion.mid),c.zb(4),c.fc("checked",e.others.potion.big)}}const y=[{path:"",component:(()=>{class e{constructor(e){this.ss=e,this.isSeed=!0,this.haveAssistance=!0}ngOnInit(){document.title="\u6536\u76ca\u8a08\u7b97 | RealFarm \u5c0f\u5e6b\u624b",this.seedName=this.ss.getAllCropsName(),this.isSeed=!0,this.haveAssistance=!0,this.seedLevels=[{name:"\u521d\u5b78\u8005",rainbow:0,premium:0},{name:"\u884c\u5bb6",rainbow:0,premium:25},{name:"\u5c08\u5bb6",rainbow:0,premium:40},{name:"\u9054\u4eba",rainbow:25,premium:55},{name:"\u738b",rainbow:30,premium:70},{name:"\u795e",rainbow:40,premium:85}],this.farmLevels=[{name:"\u5341\u5206\u8ca7\u7620\u7684\u8fb2\u7530",rainbow:0,harvestRate:0},{name:"\u7a0d\u5fae\u8ca7\u7620\u7684\u8fb2\u7530",rainbow:10,harvestRate:10},{name:"\u52c9\u5f37\u80fd\u4f7f\u7528\u7684\u8fb2\u7530",rainbow:20,harvestRate:20},{name:"\u7a0d\u5fae\u80a5\u6c83\u7684\u8fb2\u7530",rainbow:30,harvestRate:30},{name:"\u5341\u5206\u80a5\u6c83\u7684\u8fb2\u7530",rainbow:40,harvestRate:40},{name:"\u80a5\u6ecb\u6ecb\u7684\u8fb2\u7530",rainbow:50,harvestRate:50}],this.greenhouseLevels=[{name:"\u7121",harvestRate:0},{name:"\u7db2\u5ba4",harvestRate:10},{name:"\u6eab\u5ba4",harvestRate:20},{name:"\u52a0\u71b1\u6eab\u5ba4",harvestRate:30}],this.equipmentList=["\u5e3d\u5b50","\u8863\u670d","\u978b\u5b50","\u92e4\u982d","\u93df\u5b50","\u82b1\u93df","\u6f86\u6c34\u58fa","\u942e\u5200","\u83dc\u7c43"],this.addEquipments=[],this.seedLevel=this.seedLevels[0],this.farmLevel=this.farmLevels[0],this.greenhouseLevel=this.greenhouseLevels[0],this.others={rainbowDuck:!1,blessTree:0,potion:{none:!0,tiny:!1,small:!1,mid:!1,big:!1}},this.formReset(),this.showResult=!1,this.result={cost:0,harvest:0,premium:0,rainbow:0,superiorProp:0,premiumProp:0,superiorPremiumProp:0,expectedValue:0,priceAddition:0,sellPrice:0,income:0}}formReset(){this.costForm=new r.e({seed:new r.c(this.seedName[0]),bedSoil:new r.c(0),baseFertilizer:new r.c(0),fertilizer:new r.c(0),fertilizerNumber:new r.c(0),assistanceCost:new r.c(0),drinkCost:new r.c(0)}),this.harvestForm=new r.e({specialSeed:new r.e({premium:new r.c(!1),rainbow:new r.c(!1),harvest:new r.c(!1),levelUp:new r.c(!1)}),seedLevel:new r.c(this.seedLevel.name),farmLevel:new r.c(this.farmLevel.name),greenhouseLevel:new r.c(this.greenhouseLevel.name),equipment:new r.e({part:new r.c(this.equipmentList[0]),rainbow:new r.c(0),premium:new r.c(0),harvest:new r.c(0),harvestRate:new r.c(0)}),other:new r.e({rainbowDuck:new r.c(!1),treeBless:new r.c(!1)})})}selectSeed(){this.isSeed=!this.isSeed}checkAssistance(){this.haveAssistance=!this.haveAssistance}selectSeedLevel(e){this.seedLevel=this.seedLevels.filter(e=>e.name===this.harvestForm.get("seedLevel").value)[0]}selectFarmLevel(e){this.farmLevel=this.farmLevels.filter(e=>e.name===this.harvestForm.get("farmLevel").value)[0]}selectGreenhouseLevel(e){this.greenhouseLevel=this.greenhouseLevels.filter(e=>e.name===this.harvestForm.get("greenhouseLevel").value)[0]}addEquipment(){let e={part:this.harvestForm.get("equipment").get("part").value,rainbow:this.harvestForm.get("equipment").get("rainbow").value,premium:this.harvestForm.get("equipment").get("premium").value,harvest:this.harvestForm.get("equipment").get("harvest").value,harvestRate:this.harvestForm.get("equipment").get("harvestRate").value};0===e.premium&&0===e.rainbow&&0===e.harvest&&0===e.harvestRate||(this.equipmentList=this.equipmentList.filter(t=>t!==e.part),this.addEquipments=[...this.addEquipments,e],this.harvestForm.get("equipment").setValue({part:this.equipmentList[0],rainbow:0,premium:0,harvest:0,harvestRate:0}))}removeEquipment(e){this.addEquipments=this.addEquipments.filter(t=>t.part!==e.part),this.equipmentList=[...this.equipmentList,e.part]}selectPotion(e){0===e?this.others.potion={none:!0,tiny:!1,small:!1,mid:!1,big:!1}:1===e?this.others.potion={none:!1,tiny:!0,small:!1,mid:!1,big:!1}:2===e?this.others.potion={none:!1,tiny:!1,small:!0,mid:!1,big:!1}:3===e?this.others.potion={none:!1,tiny:!1,small:!1,mid:!0,big:!1}:4===e&&(this.others.potion={none:!1,tiny:!1,small:!1,mid:!1,big:!0})}computeCost(){const e=this.costForm;let t=this.ss.searchSeed(e.get("seed").value).crop_info.seed_cost+e.get("baseFertilizer").value+e.get("fertilizer").value*e.get("fertilizerNumber").value;return t+=this.isSeed?0:e.get("bedSoil").value,t+=this.haveAssistance?Math.floor(e.get("assistanceCost").value/3):0,Math.floor(t)}computeHarvest(){let e=this.farmLevel.harvestRate+this.greenhouseLevel.harvestRate,t=this.isSeed?3:10,n=this.harvestForm.get("specialSeed").get("harvest").value?1.25:1,i=0;return t+=this.haveAssistance?2:0,this.addEquipments.forEach(e=>{e.harvestRate&&(n*=1+e.harvestRate/100),e.harvest&&(t+=e.harvest)}),i=t*(1+e/100)*n,this.others.potion.tiny?i*=1.5:this.others.potion.small?i*=2:this.others.potion.mid?i*=2.5:this.others.potion.big&&(i*=3),Math.round(i)}computePremium(){let e=this.seedLevel.premium;return e*=this.harvestForm.get("specialSeed").get("premium").value?1.1:1,this.addEquipments.forEach(t=>{t.premium&&(e*=1+t.premium/100)}),e}computeRainbow(){let e=this.farmLevel.rainbow;return e*=1+this.seedLevel.rainbow/100,e*=this.harvestForm.get("specialSeed").get("rainbow").value?1.1:1,this.addEquipments.forEach(t=>{t.rainbow&&(e*=1+t.rainbow/100)}),this.others.rainbowDuck&&(e=100),"\u521d\u5b78\u8005"===this.seedLevel.name?0:e}computeProp(e,t){e=Math.min(100,e),e/=100,t=Math.min(100,t),t/=100;let n=this.harvestForm.get("specialSeed").get("levelUp").value?.05:0,i=(1-t)*(1-n)+t*(1-e),o=t*e*(1-n)+(1-t)*n,r=t*e*n;return i=Math.round(1e4*i)/1e4,o=Math.round(1e4*o)/1e4,r=Math.round(1e4*r)/1e4,{superiorProp:i,premiumProp:o,superiorPremiumProp:r}}computePrice(e,t){const n=2*this.ss.searchSeed(e).crop_info.price_base;return Math.floor(n*t.superiorProp+5*n*t.premiumProp+10*n*t.superiorPremiumProp)}computeAll(){let e;this.result.cost=this.computeCost(),this.result.harvest=this.computeHarvest(),this.result.premium=this.computePremium(),this.result.rainbow=this.computeRainbow(),e=this.computeProp(this.result.premium,this.result.rainbow),this.result.superiorProp=e.superiorProp,this.result.premiumProp=e.premiumProp,this.result.superiorPremiumProp=e.superiorPremiumProp,this.result.expectedValue=this.computePrice(this.costForm.get("seed").value,e),this.showResult=!0}closeModal(e){this.showResult=!1}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(a.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-income"]],decls:33,vars:10,consts:[["title","\u8a08\u7b97\u8fb2\u7530\u6536\u76ca",3,"showBackIcon"],[1,"container"],[1,"section"],[3,"formGroup"],[1,"form-element","seed-part"],["id","seedSelection","name","","formControlName","seed"],[3,"value",4,"ngFor","ngForOf"],["type","radio","name","isSeed",3,"checked","change"],[3,"ngTemplateOutlet"],[1,"button",3,"click"],[3,"data","cancel",4,"ngIf"],["costTemplate",""],["harvestTemplate",""],["equipmentTemplate",""],["otherTemplate",""],[3,"value"],[3,"data","cancel"],[1,"title"],[1,"form-element"],["type","checkbox",3,"ngModel","ngModelChange"],["class","form-element",4,"ngIf"],["type","number","step","1000","formControlName","baseFertilizer"],[1,"form-element","count-element"],["type","number","step","1000","formControlName","fertilizer"],["type","number","step","1","formControlName","fertilizerNumber"],["type","number","step","10000","formControlName","assistanceCost"],["type","number","step","1000","formControlName","bedSoil"],["formControlName","seedLevel",3,"change"],[1,"detail"],["id","special-seed",1,"form-element"],["formGroupName","specialSeed"],["type","checkbox","formControlName","premium"],["type","checkbox","formControlName","rainbow"],["type","checkbox","formControlName","harvest"],["type","checkbox","formControlName","levelUp"],["formControlName","farmLevel",3,"change"],["formControlName","greenhouseLevel",3,"change"],["formGroupName","equipment"],[1,"equipment-details"],["class","equipment-detail",4,"ngFor","ngForOf"],["class","form-element equipment-part",4,"ngIf"],[1,"equipment-detail"],[4,"ngIf"],[1,"remove-button",3,"click"],[1,"form-element","equipment-part"],["for",""],["formControlName","part"],["formControlName","premium","type","number","step","0.1"],["formControlName","rainbow","type","number","step","0.1"],["formControlName","harvest","type","number","step","1"],["formControlName","harvestRate","type","number","step","1"],[1,"add-button",3,"click"],[2,"font-size","18px"],["type","radio","name","potion",3,"checked","change"]],template:function(e,t){if(1&e&&(c.Kb(0,"app-header",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"form",3),c.Pb(4,"div",4),c.Pb(5,"div"),c.Pb(6,"label"),c.tc(7,"\u9078\u64c7\u7a2e\u5b50"),c.Ob(),c.Pb(8,"select",5),c.rc(9,l,2,2,"option",6),c.Ob(),c.Ob(),c.Pb(10,"div"),c.Pb(11,"label"),c.tc(12,"\u7a2e\u5b50"),c.Ob(),c.Pb(13,"input",7),c.Xb("change",(function(){return t.selectSeed()})),c.Ob(),c.Ob(),c.Pb(14,"div"),c.Pb(15,"label"),c.tc(16,"\u5e7c\u82d7 "),c.Ob(),c.Pb(17,"input",7),c.Xb("change",(function(){return t.selectSeed()})),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Lb(18,8),c.Lb(19,8),c.Lb(20,8),c.Lb(21,8),c.Pb(22,"button",9),c.Xb("click",(function(){return t.computeAll()})),c.tc(23,"\u8a08\u7b97\u6536\u76ca"),c.Ob(),c.rc(24,p,1,1,"app-result-modal",10),c.Ob(),c.rc(25,d,24,4,"ng-template",null,11,c.sc),c.rc(27,P,52,9,"ng-template",null,12,c.sc),c.rc(29,_,9,3,"ng-template",null,13,c.sc),c.rc(31,L,31,6,"ng-template",null,14,c.sc)),2&e){const e=c.kc(26),n=c.kc(28),i=c.kc(30),o=c.kc(32);c.fc("showBackIcon",!1),c.zb(3),c.fc("formGroup",t.costForm),c.zb(6),c.fc("ngForOf",t.seedName),c.zb(4),c.fc("checked",t.isSeed),c.zb(4),c.fc("checked",!t.isSeed),c.zb(1),c.fc("ngTemplateOutlet",e),c.zb(1),c.fc("ngTemplateOutlet",n),c.zb(1),c.fc("ngTemplateOutlet",i),c.zb(1),c.fc("ngTemplateOutlet",o),c.zb(3),c.fc("ngIf",t.showResult)}},directives:[b.a,r.r,r.j,r.f,r.p,r.i,r.d,i.j,i.m,i.k,r.l,r.q,s,r.a,r.k,r.m,r.b,r.g],styles:["select[_ngcontent-%COMP%]{min-width:150px;height:32px;line-height:32px;-webkit-appearance:menulist-button;-moz-appearance:none}.title[_ngcontent-%COMP%]{padding:16px 8px;font-size:18px;font-weight:600;text-align:center}.container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;border-top:1px solid var(--gray)}.section[_ngcontent-%COMP%]{width:85%;padding:16px 8px}.form-element[_ngcontent-%COMP%]{width:100%;margin:16px auto;display:flex;flex-direction:column;justify-content:center}.form-element[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{padding:4px;font-size:14px;font-weight:400}.detail[_ngcontent-%COMP%]{display:inline}.detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin:auto 4px auto 0;color:var(--info)}.form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex:1;font-size:16px;padding:4px;margin:0 2px;text-align:left}.form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-element[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;padding:4px;border-radius:4px;margin:0 2px}.section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;padding:4px}.form-element.count-element[_ngcontent-%COMP%]{flex-flow:row wrap;justify-content:flex-start}.form-element.count-element[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%;display:flex;flex-flow:column}#special-seed[_ngcontent-%COMP%]{flex-direction:column}#special-seed[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]{display:block}.form-element.equipment-part[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:flex-start}.equipment-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;margin:4px auto}.equipment-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .equipment-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{width:36px}.equipment-part[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content}button[_ngcontent-%COMP%]{color:var(--white);font-size:18px;width:75%;height:48px;background:var(--primary);border-radius:4px;border:0}.button[_ngcontent-%COMP%]{margin:16px auto}.add-button[_ngcontent-%COMP%]{width:100%;color:var(--black);border:1px solid var(--black);background:var(--white);font-size:14px;height:28px}.equipment-detail[_ngcontent-%COMP%]{width:90%;margin:4px auto}.equipment-detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:36px;font-size:14px;font-weight:500}.equipment-detail[_ngcontent-%COMP%]   .detial[_ngcontent-%COMP%]{flex:3}.equipment-detail[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{display:inline-block;text-align:center;line-height:20px;width:20px;height:20px;font-size:14px;font-weight:600;color:var(--danger);background-color:inherit;border-radius:50%;border:1px solid var(--danger)}"]}),e})()},{}];let k=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[i.b,o.g.forChild(y)]]}),e})();var q=n("j1ZV");let F=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[i.b,k,r.o,r.h,r.o,q.a]]}),e})()}}]);