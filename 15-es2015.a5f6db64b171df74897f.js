(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{C0n6:function(t,n,e){"use strict";e.r(n),e.d(n,"CropsModule",(function(){return q}));var o=e("ofXK"),i=e("tyNb"),c=e("wHSu"),r=e("fXoL"),a=e("m7U+"),s=e("jhN1"),p=e("320Y"),l=e("JmOq"),b=e("6NWb"),d=e("5cuq");function g(t,n){if(1&t&&(r.Pb(0,"div",3),r.tc(1),r.Pb(2,"span",4),r.tc(3),r.Ob(),r.Ob()),2&t){const t=r.Zb();r.zb(1),r.vc(" ",t.seed.name," "),r.zb(2),r.vc("Lv. ",t.seed.crop_info.level,"")}}function f(t,n){if(1&t&&(r.Pb(0,"div",5),r.tc(1),r.Ob()),2&t){const t=r.Zb();r.zb(1),r.wc(" ",t.displayPrefix[t.displayPart],": ","seed_nutrient"===t.displayPart?t.seed.crop_info.day_nutrient*t.seed.crop_info.rising_time:t.seed.crop_info[t.displayPart]," ")}}let h=(()=>{class t{constructor(){this.displayPart="rising_time"}ngOnInit(){this.displayPrefix={level:"\u7b49\u7d1a\u8981\u6c42",rising_time:"\u7a2e\u690d\u5929\u6578 ",day_nutrient:"\u65e5\u990a\u5206\u503c",seed_nutrient:"\u7a2e\u5b50\u7e3d\u990a\u5206",seeding_nutrient:"\u5e7c\u82d7\u7e3d\u990a\u5206",dry_days:"\u8010\u65f1\u5929\u6578",wet_days:"\u8010\u6fd5\u5929\u6578",low_temp:"\u6700\u4f4e\u6eab\u5ea6",high_temp:"\u6700\u9ad8\u6eab\u5ea6",superior_skill:"\u4e0a\u7d1a\u6280\u8853",harvest_time:"\u8150\u721b\u5929\u6578"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-crop-list-item"]],inputs:{seed:"seed",displayPart:"displayPart"},decls:5,vars:3,consts:[["titleTpl",""],["subtitleTpl",""],[3,"title","subtitle","img_url"],[1,"title"],[1,"level"],[1,"subtitle"]],template:function(t,n){if(1&t&&(r.rc(0,g,4,2,"ng-template",null,0,r.sc),r.rc(2,f,2,2,"ng-template",null,1,r.sc),r.Kb(4,"app-item-block",2)),2&t){const t=r.kc(1),e=r.kc(3);r.zb(4),r.fc("title",t)("subtitle",e)("img_url",n.seed.img)}},directives:[d.a],styles:[".wrapper[_ngcontent-%COMP%]{min-width:180px;display:flex;flex-flow:row nowrap}.image[_ngcontent-%COMP%]{margin:8px;width:48px;height:48px;display:flex;align-items:center;border-radius:8px;overflow:hidden;background-color:#feeac7}.image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:center}.subtitle[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{padding:4px}.title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.subtitle[_ngcontent-%COMP%]{font-size:10px;font-weight:500}.title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{display:inline-block;background-color:var(--gray);color:var(--white);width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:2px 4px;font-size:10px;border-radius:4px}"]}),t})(),u=(()=>{class t{transform(t,...n){let e,o=n[0];return 0===o?e=t.filter(t=>t.crop_info.category<7&&t.crop_info.level>=0&&t.crop_info.level<20):1===o?e=t.filter(t=>t.crop_info.category<7&&t.crop_info.level>=20&&t.crop_info.level<40):2===o?e=t.filter(t=>t.crop_info.category<7&&t.crop_info.level>=40&&t.crop_info.level<60):3===o?e=t.filter(t=>t.crop_info.category<7&&t.crop_info.level>=60&&t.crop_info.level<80):7===o?e=t.filter(t=>7===t.crop_info.category):9===o&&(e=t.filter(t=>9===t.crop_info.category)),e}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=r.Ib({name:"cropCategory",type:t,pure:!0}),t})();function m(t,n){if(1&t){const t=r.Qb();r.Pb(0,"span"),r.tc(1),r.Ob(),r.Pb(2,"div",7),r.Xb("click",(function(){r.lc(t);const n=r.Zb().index;return r.Zb().togglePart(n)})),r.Kb(3,"fa-icon",8),r.Ob()}if(2&t){const t=r.Zb().$implicit,n=r.Zb();r.zb(1),r.vc(" ",t.name," "),r.zb(2),r.fc("icon",t.isOpen?n.closeIcon:n.openIcon)}}const O=function(t){return[t]};function P(t,n){if(1&t&&r.Kb(0,"app-crop-list-item",9),2&t){const t=n.$implicit,e=n.index,o=r.Zb().$implicit;r.fc("seed",t)("displayPart",t.crop_info.category<7?"superior_skill":7===t.crop_info.category?"seed_nutrient":"rising_time")("ngClass",e%2==0&&e===o.elements-1?"last":"")("routerLink",r.hc(4,O,t.name))}}function v(t,n){if(1&t&&(r.Pb(0,"div"),r.Kb(1,"app-divider",3),r.rc(2,m,4,2,"ng-template",null,4,r.sc),r.Pb(4,"div",5),r.rc(5,P,1,6,"app-crop-list-item",6),r.ac(6,"cropCategory"),r.Ob(),r.Ob()),2&t){const t=n.$implicit,e=r.kc(3),o=r.Zb();r.zb(1),r.fc("title",e)("align","center")("showDivider",!1),r.zb(3),r.fc("ngClass",t.isOpen?"active":""),r.zb(1),r.fc("ngForOf",r.cc(6,5,o.seeds,t.catID))}}let _=(()=>{class t{constructor(t,n,e,o){this.ss=t,this.router=n,this.title=e,this.meta=o,this.searchIcon=c.X,this.openIcon=c.i,this.closeIcon=c.j}ngOnInit(){this.catImgs=[],this.toggles=[],this.seeds=this.ss.getAllCrops(),this.seeds.forEach(t=>{null==t.crop_info&&console.log(t)}),this.catDetails=[{name:"Lv.1-19",catID:0,coverImg:this.seeds.filter(t=>t.crop_info.level>=1)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>t.crop_info.level>=1&&t.crop_info.level<20).length},{name:"Lv.20-39",catID:1,coverImg:this.seeds.filter(t=>t.crop_info.level>=20)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>t.crop_info.level>=20&&t.crop_info.level<40).length},{name:"Lv.40-59",catID:2,coverImg:this.seeds.filter(t=>t.crop_info.level>=40)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>t.crop_info.level>=40&&t.crop_info.level<60).length},{name:"Lv.60-69",catID:3,coverImg:this.seeds.filter(t=>t.crop_info.level>=60)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>t.crop_info.level>=60&&t.crop_info.level<70).length},{name:"\u7da0\u80a5\u4f5c\u7269",catID:7,coverImg:this.seeds.filter(t=>7===t.crop_info.category)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>7===t.crop_info.category).length},{name:"\u7279\u6b8a\u4f5c\u7269",catID:9,coverImg:this.seeds.filter(t=>9===t.crop_info.category)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>9===t.crop_info.category).length}],this.title.setTitle("\u4f5c\u7269\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u5404\u4f5c\u7269\u7684\u8cc7\u8a0a\u3002\u53ef\u67e5\u8a62\u4f5c\u7269\u7684\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u7b49\u7b49\u3002"}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:"\u4f5c\u7269\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:"\u4f5c\u7269\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u5404\u4f5c\u7269\u7684\u8cc7\u8a0a\u3002\u53ef\u67e5\u8a62\u4f5c\u7269\u7684\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u7b49\u7b49\u3002"}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayCrops.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/crops/"})}search(){this.router.navigate(["crops","search"])}togglePart(t){this.catDetails[t].isOpen=!this.catDetails[t].isOpen}}return t.\u0275fac=function(n){return new(n||t)(r.Jb(a.a),r.Jb(i.c),r.Jb(s.d),r.Jb(s.c))},t.\u0275cmp=r.Db({type:t,selectors:[["app-crops-home"]],decls:3,vars:5,consts:[["title","\u4f5c\u7269\u5217\u8868","subtitle","\u7a2e\u5b50/\u5e7c\u82d7\u8cc7\u8a0a",3,"showBackIcon","showCustomIcon","customIcon","customString","onClickCustomIcon"],[1,"container"],[4,"ngFor","ngForOf"],[3,"title","align","showDivider"],["catTemplate",""],[1,"seeds",3,"ngClass"],["class","seed",3,"seed","displayPart","ngClass","routerLink",4,"ngFor","ngForOf"],[1,"expansion",3,"click"],[3,"icon"],[1,"seed",3,"seed","displayPart","ngClass","routerLink"]],template:function(t,n){1&t&&(r.Pb(0,"app-header",0),r.Xb("onClickCustomIcon",(function(){return n.search()})),r.Ob(),r.Pb(1,"section",1),r.rc(2,v,7,8,"div",2),r.Ob()),2&t&&(r.fc("showBackIcon",!1)("showCustomIcon",!0)("customIcon",n.searchIcon)("customString","\u6389\u843d\u7269"),r.zb(2),r.fc("ngForOf",n.catDetails))},directives:[p.a,o.j,l.a,o.i,b.a,h,i.d],pipes:[u],styles:[".cat-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:flex-start}.cat-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}.seeds[_ngcontent-%COMP%], .seeds.active[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;justify-content:space-around;align-content:flex-start;transition:.5s ease-in-out}.seeds.active[_ngcontent-%COMP%]{max-height:1024px}.seeds[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.seed[_ngcontent-%COMP%]{flex:1;width:50%;max-width:212px}.seed.last[_ngcontent-%COMP%]{justify-self:flex-start}.seed[_ngcontent-%COMP%]:hover{opacity:.7;cursor:pointer}div.expansion[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:6px;right:-24px;margin-left:8px;border:0;width:24px;height:24px;line-height:24px;text-align:center;background-color:var(--primary);color:var(--white);border-radius:50%;box-shadow:0 2px 4px 2px rgba(0,0,0,.15)}"]}),t})();var x=e("kvnP"),w=e("2bwA");function C(t,n){if(1&t&&(r.Pb(0,"div",19),r.Pb(1,"div",10),r.tc(2,"\u719f\u7df4\u5ea6\u9700\u6c42"),r.Ob(),r.Pb(3,"div",20),r.Pb(4,"div",12),r.Pb(5,"div",13),r.Kb(6,"fa-icon",14),r.tc(7," \u884c\u5bb6 "),r.Ob(),r.Pb(8,"span",15),r.tc(9),r.Ob(),r.Pb(10,"span",16),r.tc(11,"\u500b(\u4e0a\u7d1a)"),r.Ob(),r.Ob(),r.Pb(12,"div",12),r.Pb(13,"div",13),r.Kb(14,"fa-icon",14),r.tc(15," \u5c08\u5bb6 "),r.Ob(),r.Pb(16,"span",15),r.tc(17),r.Ob(),r.Pb(18,"span",16),r.tc(19,"\u500b(\u7279\u7d1a)"),r.Ob(),r.Ob(),r.Pb(20,"div",12),r.Pb(21,"div",13),r.Kb(22,"fa-icon",14),r.tc(23," \u9054\u4eba "),r.Ob(),r.Pb(24,"span",15),r.tc(25),r.Ob(),r.Pb(26,"span",16),r.tc(27,"\u500b(\u7279\u7d1a)"),r.Ob(),r.Ob(),r.Pb(28,"div",12),r.Pb(29,"div",13),r.Kb(30,"fa-icon",14),r.tc(31," \u738b "),r.Ob(),r.Pb(32,"span",15),r.tc(33),r.Ob(),r.Pb(34,"span",16),r.tc(35,"\u500b(Real \u788e\u7247)"),r.Ob(),r.Ob(),r.Pb(36,"div",12),r.Pb(37,"div",13),r.Kb(38,"fa-icon",14),r.tc(39," \u795e "),r.Ob(),r.Pb(40,"span",15),r.tc(41),r.Ob(),r.Pb(42,"span",16),r.tc(43,"\u500b(Real \u788e\u7247)"),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&t){const t=r.Zb();r.zb(6),r.fc("icon",t.trophyIcon),r.zb(3),r.vc("",t.crop.master.master1," "),r.zb(5),r.fc("icon",t.trophyIcon),r.zb(3),r.vc("",t.crop.master.master2," "),r.zb(5),r.fc("icon",t.trophyIcon),r.zb(3),r.vc("",t.crop.master.master3," "),r.zb(5),r.fc("icon",t.trophyIcon),r.zb(3),r.vc("",t.crop.master.master4," "),r.zb(5),r.fc("icon",t.trophyIcon),r.zb(3),r.vc("",t.crop.master.master5," ")}}function y(t,n){if(1&t&&(r.Pb(0,"div",21),r.Pb(1,"div",10),r.tc(2,"\u5e7c\u82d7"),r.Ob(),r.Pb(3,"div",11),r.Pb(4,"div",12),r.Pb(5,"div",13),r.Kb(6,"fa-icon",14),r.tc(7," \u683d\u57f9\u5929\u6578 "),r.Ob(),r.Pb(8,"span",15),r.tc(9),r.Ob(),r.Pb(10,"span",16),r.tc(11,"\u65e5"),r.Ob(),r.Ob(),r.Pb(12,"div",12),r.Pb(13,"div",13),r.Kb(14,"fa-icon",14),r.tc(15," \u990a\u5206\u9700\u6c42 "),r.Ob(),r.Pb(16,"span",15),r.tc(17),r.Ob(),r.Ob(),r.Pb(18,"div",12),r.Pb(19,"div",13),r.Kb(20,"fa-icon",14),r.tc(21," \u80b2\u82d7\u6750\u6599 "),r.Ob(),r.Kb(22,"img",22),r.Pb(23,"span",23),r.tc(24),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&t){const t=r.Zb();r.zb(6),r.fc("icon",t.dayIcon),r.zb(3),r.vc("",t.crop.crop_info.rising_time-t.crop.crop_info.sprout_time," "),r.zb(5),r.fc("icon",t.nutrientIcon),r.zb(3),r.vc("",t.crop.crop_info.seedling_nutrient," "),r.zb(3),r.fc("icon",t.bedSoilIcon),r.zb(2),r.fc("src",t.crop.bed_soil.img,r.nc)("alt",t.crop.bed_soil.name),r.zb(2),r.uc(t.crop.bed_soil.name)}}function M(t,n){1&t&&r.Kb(0,"app-consumable-item",33),2&t&&r.fc("itemName",n.$implicit)("imgWidth",36)}function z(t,n){if(1&t&&(r.Pb(0,"span",34),r.tc(1),r.Ob()),2&t){const t=n.index;r.fc("ngClass",n.$implicit),r.zb(1),r.uc(t+1)}}function I(t,n){if(1&t&&(r.Pb(0,"span",34),r.tc(1),r.Ob()),2&t){const t=n.index;r.fc("ngClass",n.$implicit),r.zb(1),r.uc(t+1)}}function k(t,n){if(1&t&&(r.Pb(0,"span",34),r.tc(1),r.Ob()),2&t){const t=n.index;r.fc("ngClass",n.$implicit),r.zb(1),r.uc(t+1)}}function K(t,n){if(1&t&&(r.Pb(0,"span",34),r.tc(1),r.Ob()),2&t){const t=n.index;r.fc("ngClass",n.$implicit),r.zb(1),r.uc(t+1)}}function F(t,n){if(1&t&&(r.Pb(0,"span",34),r.tc(1),r.Ob()),2&t){const t=n.index;r.fc("ngClass",n.$implicit),r.zb(1),r.uc(t+1)}}function T(t,n){if(1&t&&(r.Pb(0,"div",24),r.Pb(1,"div",10),r.tc(2,"\u57fa\u672c\u8cc7\u8a0a"),r.Ob(),r.Pb(3,"div",11),r.Pb(4,"div",12),r.Pb(5,"div",13),r.Kb(6,"fa-icon",14),r.tc(7," \u4e0a\u7d1a\u6280\u8853\u503c "),r.Ob(),r.Kb(8,"span",25),r.Pb(9,"span",15),r.tc(10),r.Ob(),r.Ob(),r.Pb(11,"div",12),r.Pb(12,"div",13),r.Kb(13,"fa-icon",14),r.tc(14," \u653e\u721b\u6642\u9593 "),r.Ob(),r.Kb(15,"span",25),r.Pb(16,"span",15),r.tc(17),r.Ob(),r.Pb(18,"span",16),r.tc(19," \u5206\u9418 "),r.Ob(),r.Ob(),r.Pb(20,"div",12),r.Pb(21,"div",13),r.Kb(22,"fa-icon",14),r.tc(23," \u57fa\u790e\u7d93\u9a57\u503c "),r.Ob(),r.Kb(24,"span",25),r.Pb(25,"span",15),r.tc(26),r.Ob(),r.Ob(),r.Pb(27,"div",12),r.Pb(28,"div",13),r.Kb(29,"fa-icon",14),r.tc(30," \u4e0a\u7d1a\u552e\u50f9 "),r.Ob(),r.Pb(31,"span",15),r.tc(32),r.ac(33,"number"),r.Ob(),r.Ob(),r.Pb(34,"div",12),r.Pb(35,"div",13),r.Kb(36,"fa-icon",14),r.tc(37," \u8010\u65f1\u5929\u6578 "),r.Ob(),r.Pb(38,"span",15),r.tc(39),r.Ob(),r.Pb(40,"span",16),r.tc(41,"\u65e5"),r.Ob(),r.Ob(),r.Pb(42,"div",12),r.Pb(43,"div",13),r.Kb(44,"fa-icon",14),r.tc(45," \u8010\u6fd5\u5929\u6578 "),r.Ob(),r.Pb(46,"span",15),r.tc(47),r.Ob(),r.Pb(48,"span",16),r.tc(49,"\u65e5"),r.Ob(),r.Ob(),r.Pb(50,"div",12),r.Pb(51,"div",13),r.Kb(52,"fa-icon",14),r.tc(53," \u9069\u5408\u6eab\u5ea6 "),r.Ob(),r.Pb(54,"span",15),r.Pb(55,"span",26),r.tc(56),r.Ob(),r.tc(57," ~ "),r.Pb(58,"span",27),r.tc(59),r.Ob(),r.Ob(),r.Pb(60,"span",16),r.tc(61," \u5ea6"),r.Ob(),r.Ob(),r.Pb(62,"div",12),r.Pb(63,"div",13),r.Kb(64,"fa-icon",14),r.tc(65," \u80b2\u82d7\u5929\u6578 "),r.Ob(),r.Pb(66,"span",15),r.tc(67),r.Ob(),r.Pb(68,"span",16),r.tc(69,"\u65e5"),r.Ob(),r.Ob(),r.Pb(70,"div",12),r.Pb(71,"div",13),r.Kb(72,"fa-icon",14),r.tc(73," \u65e5\u990a\u5206\u9700\u6c42 "),r.Ob(),r.Pb(74,"span",15),r.tc(75),r.Ob(),r.Ob(),r.Pb(76,"div",12),r.Pb(77,"div",13),r.Kb(78,"fa-icon",14),r.tc(79," \u7a2e\u5b50\u50f9\u683c "),r.Ob(),r.Pb(80,"span",15),r.tc(81),r.ac(82,"number"),r.Ob(),r.Ob(),r.Pb(83,"div",28),r.Pb(84,"div",13),r.Kb(85,"fa-icon",14),r.tc(86," \u6389\u843d\u7269 "),r.Ob(),r.Pb(87,"div",29),r.rc(88,M,1,2,"app-consumable-item",30),r.Ob(),r.Ob(),r.Pb(89,"div",31),r.Pb(90,"div",13),r.Kb(91,"fa-icon",14),r.tc(92," \u9069\u5408\u6708\u4efd "),r.Ob(),r.Pb(93,"p"),r.tc(94," \u5ba4\u5916\u7530"),r.Kb(95,"br"),r.rc(96,z,2,2,"span",32),r.Ob(),r.Pb(97,"p"),r.tc(98," \u96a7\u9053\u7db2\u5ba4"),r.Kb(99,"br"),r.rc(100,I,2,2,"span",32),r.Ob(),r.Pb(101,"p"),r.tc(102," \u7db2\u5ba4"),r.Kb(103,"br"),r.rc(104,k,2,2,"span",32),r.Ob(),r.Pb(105,"p"),r.tc(106," \u6eab\u5ba4"),r.Kb(107,"br"),r.rc(108,K,2,2,"span",32),r.Ob(),r.Pb(109,"p"),r.tc(110," \u52a0\u71b1\u6eab\u5ba4"),r.Kb(111,"br"),r.rc(112,F,2,2,"span",32),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&t){const t=r.Zb();r.zb(6),r.fc("icon",t.skillIcon),r.zb(4),r.vc(" ",t.crop.crop_info.superior_skill," "),r.zb(3),r.fc("icon",t.durationIcon),r.zb(4),r.vc(" ",t.crop.crop_info.harvest_time," "),r.zb(5),r.fc("icon",t.expIcon),r.zb(4),r.vc(" ",t.crop.crop_info.exp_base," "),r.zb(3),r.fc("icon",t.priceIcon),r.zb(3),r.vc(" $ ",r.cc(33,29,2*t.crop.crop_info.price_base,"1.0-0")," "),r.zb(4),r.fc("icon",t.dryIcon),r.zb(3),r.vc(" ",t.crop.crop_info.dry_days," "),r.zb(5),r.fc("icon",t.wetIcon),r.zb(3),r.vc(" ",t.crop.crop_info.wet_days," "),r.zb(5),r.fc("icon",t.tempIcon),r.zb(4),r.uc(t.crop.crop_info.low_temp),r.zb(3),r.uc(t.crop.crop_info.high_temp),r.zb(5),r.fc("icon",t.risingIcon),r.zb(3),r.vc("",t.crop.crop_info.sprout_time," "),r.zb(5),r.fc("icon",t.nutrientIcon),r.zb(3),r.vc("",t.crop.crop_info.day_nutrient," "),r.zb(3),r.fc("icon",t.priceIcon),r.zb(3),r.vc(" $ ",r.cc(82,32,t.crop.crop_info.seed_cost,"1.0-0")," "),r.zb(4),r.fc("icon",t.dropIcon),r.zb(3),r.fc("ngForOf",t.crop.drops),r.zb(3),r.fc("icon",t.monthIcon),r.zb(5),r.fc("ngForOf",t.openField),r.zb(4),r.fc("ngForOf",t.vinylTunnel),r.zb(4),r.fc("ngForOf",t.vinylHouse),r.zb(4),r.fc("ngForOf",t.greenHouse),r.zb(4),r.fc("ngForOf",t.boilerHouse)}}function D(t,n){if(1&t&&r.Kb(0,"app-consumable-item",39),2&t){const t=r.Zb().$implicit;r.fc("itemName",t)("imgWidth",36)}}function $(t,n){if(1&t&&r.tc(0),2&t){const t=r.Zb().$implicit;r.vc(" ",t," ")}}function j(t,n){if(1&t&&(r.Pb(0,"span",36),r.rc(1,D,1,2,"app-consumable-item",37),r.rc(2,$,1,1,"ng-template",null,38,r.sc),r.Ob()),2&t){const t=r.kc(3),n=r.Zb(2);r.fc("ngClass","\u9285\u74dc"===n.crop.name||"\u9280\u74dc"===n.crop.name?"":"text"),r.zb(1),r.fc("ngIf","\u9285\u74dc"===n.crop.name||"\u9280\u74dc"===n.crop.name)("ngIfElse",t)}}function H(t,n){if(1&t&&(r.Pb(0,"div",24),r.Pb(1,"div",10),r.tc(2,"\u57fa\u672c\u8cc7\u8a0a"),r.Ob(),r.Pb(3,"div",11),r.Pb(4,"div",28),r.Pb(5,"div",13),r.Kb(6,"fa-icon",14),r.tc(7," \u6389\u843d\u7269 "),r.Ob(),r.Pb(8,"div",29),r.rc(9,j,4,3,"span",35),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&t){const t=r.Zb();r.zb(6),r.fc("icon",t.dropIcon),r.zb(3),r.fc("ngForOf",t.crop.drops)}}let L=(()=>{class t{constructor(t,n,e,o,i,r){this.ss=t,this.route=n,this.location=e,this.cs=o,this.title=i,this.meta=r,this.durationIcon=c.l,this.expIcon=c.bb,this.skillIcon=c.O,this.priceIcon=c.p,this.trophyIcon=c.lb,this.monthIcon=c.g,this.dayIcon=c.h,this.tempIcon=c.gb,this.nutrientIcon=c.T,this.risingIcon=c.Y,this.dryIcon=c.A,this.wetIcon=c.m,this.dropIcon=c.F,this.bedSoilIcon=c.G,this.route.paramMap.subscribe(t=>{this.seedName=t.get("id");let n=this.ss.searchSeed(this.seedName);this.crop=Object.assign({},n),this.crop.crop_info.seed_nutrient=this.crop.crop_info.rising_time*this.crop.crop_info.day_nutrient,this.crop.crop_info.seedling_nutrient=(this.crop.crop_info.rising_time-this.crop.crop_info.sprout_time)*this.crop.crop_info.day_nutrient,this.updateHTMLHeader()})}ngOnInit(){this.openField=[],this.vinylTunnel=[],this.vinylHouse=[],this.greenHouse=[],this.boilerHouse=[];for(let t=0;t<12;t++)this.openField.push(""),this.vinylTunnel.push(""),this.vinylHouse.push(""),this.greenHouse.push(""),this.boilerHouse.push("");this.crop.crop_info.open_field.forEach(t=>{this.openField[t-1]="active"}),this.crop.crop_info.vinyl_tunnel.forEach(t=>{this.vinylTunnel[t-1]="active"}),this.crop.crop_info.vinyl_house.forEach(t=>{this.vinylHouse[t-1]="active"}),this.crop.crop_info.green_house.forEach(t=>{this.greenHouse[t-1]="active"}),this.crop.crop_info.boiler_house.forEach(t=>{this.boilerHouse[t-1]="active"})}updateHTMLHeader(){this.title.setTitle(this.crop.name+" | \u4f5c\u7269 | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:`RealFarm \u760b\u7a2e\u83dc\u4e2d${this.crop.name}\u7684\u8cc7\u8a0a\uff0c\u5305\u62ec\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u3002`}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:this.crop.name+" | \u4f5c\u7269 | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:this.crop.name+" | \u4f5c\u7269 | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:`RealFarm \u760b\u7a2e\u83dc\u4e2d${this.crop.name}\u7684\u8cc7\u8a0a\uff0c\u5305\u62ec\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u3002`}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayCrops.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/crops/"+this.crop.name})}goBack(){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(r.Jb(a.a),r.Jb(i.a),r.Jb(o.g),r.Jb(x.a),r.Jb(s.d),r.Jb(s.c))},t.\u0275cmp=r.Db({type:t,selectors:[["app-crops-detail"]],decls:34,vars:12,consts:[[1,"container"],[1,"title","crop"],[1,"image"],["width","100%",3,"src","alt"],[1,"text-part"],[1,"level"],[1,"right-part"],[1,"back",3,"click"],["class","wrapper red",4,"ngIf"],[1,"wrapper","orange"],[1,"part-name"],[1,"details"],[1,"detail"],[1,"title"],[3,"icon"],[1,"value"],[1,"suffix"],["class","wrapper yellow",4,"ngIf"],["class","wrapper green",4,"ngIf"],[1,"wrapper","red"],["id","master",1,"details"],[1,"wrapper","yellow"],["width","48",2,"vertical-align","top",3,"src","alt"],[1,"suffix",2,"vertical-align","bottom","padding","4px"],[1,"wrapper","green"],[1,"prefix"],[2,"color","var(--info)"],[2,"color","var(--danger)"],["id","drops",1,"detail"],[1,"drops-wrapper"],["class","drop",3,"itemName","imgWidth",4,"ngFor","ngForOf"],["id","fitMonth",1,"detail"],["class","month",3,"ngClass",4,"ngFor","ngForOf"],[1,"drop",3,"itemName","imgWidth"],[1,"month",3,"ngClass"],["class","drop",3,"ngClass",4,"ngFor","ngForOf"],[1,"drop",3,"ngClass"],[3,"itemName","imgWidth",4,"ngIf","ngIfElse"],["dropNameTemplate",""],[3,"itemName","imgWidth"]],template:function(t,n){1&t&&(r.Pb(0,"section",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Kb(3,"img",3),r.Ob(),r.Pb(4,"div",4),r.Pb(5,"span",5),r.tc(6),r.Ob(),r.Pb(7,"div"),r.tc(8),r.Ob(),r.Ob(),r.Pb(9,"div",6),r.Pb(10,"span",7),r.Xb("click",(function(){return n.goBack()})),r.tc(11,"\u56de\u4e0a\u4e00\u9801"),r.Ob(),r.Ob(),r.Ob(),r.rc(12,C,44,10,"div",8),r.Pb(13,"div",9),r.Pb(14,"div",10),r.tc(15,"\u7a2e\u5b50"),r.Ob(),r.Pb(16,"div",11),r.Pb(17,"div",12),r.Pb(18,"div",13),r.Kb(19,"fa-icon",14),r.tc(20," \u683d\u57f9\u5929\u6578 "),r.Ob(),r.Pb(21,"span",15),r.tc(22),r.Ob(),r.Pb(23,"span",16),r.tc(24,"\u65e5"),r.Ob(),r.Ob(),r.Pb(25,"div",12),r.Pb(26,"div",13),r.Kb(27,"fa-icon",14),r.tc(28," \u990a\u5206\u9700\u6c42 "),r.Ob(),r.Pb(29,"span",15),r.tc(30),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.rc(31,y,25,8,"div",17),r.rc(32,T,113,35,"div",18),r.rc(33,H,10,2,"div",18),r.Ob()),2&t&&(r.zb(3),r.fc("src",n.crop.img,r.nc)("alt",n.crop.name+"\u7684\u5716\u7247"),r.zb(3),r.vc(" Lv. ",n.crop.crop_info.level,""),r.zb(2),r.uc(n.seedName),r.zb(4),r.fc("ngIf",n.crop.crop_info.category<7),r.zb(7),r.fc("icon",n.dayIcon),r.zb(3),r.vc("",n.crop.crop_info.rising_time," "),r.zb(5),r.fc("icon",n.nutrientIcon),r.zb(3),r.vc("",n.crop.crop_info.seed_nutrient," "),r.zb(1),r.fc("ngIf",n.crop.crop_info.category<7),r.zb(1),r.fc("ngIf",n.crop.crop_info.category<7),r.zb(1),r.fc("ngIf",9===n.crop.crop_info.category))},directives:[o.k,b.a,o.j,w.a,o.i],pipes:[o.d],styles:[".container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.title.crop[_ngcontent-%COMP%]{margin:12px 8px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.title[_ngcontent-%COMP%]{flex:1}.title[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{margin:4px;width:56px;height:56px;display:flex;align-items:center;border-radius:8px;overflow:hidden;background-color:#feeac7}.title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{background-color:var(--gray);color:var(--white);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:4px;font-size:14px;border-radius:4px}.title[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{text-align:center;margin:4px 8px}.title[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]{font-size:20px;font-weight:600;display:flex;flex-direction:column}.title[_ngcontent-%COMP%] > .right-part[_ngcontent-%COMP%]{flex:1;align-self:flex-start}.back[_ngcontent-%COMP%]{width:58px;padding:4px;color:var(--white);font-size:14px;float:right;justify-self:flex-end;margin-right:16px;border-radius:4px;background-color:var(--secondary)}.wrapper[_ngcontent-%COMP%]{position:relative;width:calc(100% - 26px);margin:8px;border:1px solid var(--black);border-radius:4px;padding:12px 4px 4px}.wrapper[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--black);position:absolute;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:2px 12px;background-color:var(--white);font-size:14px;font-weight:600;top:-8px;left:12px}.wrapper.info[_ngcontent-%COMP%]{border:1px solid var(--info)}.wrapper.info[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--info)}.wrapper.primary[_ngcontent-%COMP%]{border:1px solid var(--primary)}.wrapper.primary[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--primary)}.wrapper.secondary[_ngcontent-%COMP%]{border:1px solid var(--secondary)}.wrapper.secondary[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--secondary)}.wrapper.danger[_ngcontent-%COMP%]{border:1px solid var(--danger)}.wrapper.danger[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--danger)}.wrapper.success[_ngcontent-%COMP%]{border:1px solid var(--success)}.wrapper.success[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--success)}.wrapper.red[_ngcontent-%COMP%]{border:1px solid var(--red)}.wrapper.red[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--red)}.wrapper.orange[_ngcontent-%COMP%]{border:1px solid var(--orange)}.wrapper.orange[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--orange)}.wrapper.yellow[_ngcontent-%COMP%]{border:1px solid var(--yellow)}.wrapper.yellow[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--yellow)}.wrapper.green[_ngcontent-%COMP%]{border:1px solid var(--green)}.wrapper.green[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--green)}.wrapper.blue[_ngcontent-%COMP%]{border:1px solid var(--blue)}.wrapper.blue[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--blue)}.wrapper.dark-blue[_ngcontent-%COMP%]{border:1px solid var(--dark-blue)}.wrapper.dark-blue[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--dark-blue)}.details[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:100%}.detail[_ngcontent-%COMP%]{min-width:132px;width:40%;padding:4px auto;margin:14px 12px}.detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:var(--white);font-size:16px;padding:4px 12px;margin:4px 2px;font-weight:500;border-radius:16px}.title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding-right:4px}.wrapper.primary[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--primary)}.wrapper.secondary[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--secondary)}.wrapper.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--info)}.wrapper.danger[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--danger)}.wrapper.red[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--red)}.wrapper.orange[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--orange)}.wrapper.yellow[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--yellow)}.wrapper.green[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--green)}.wrapper.blue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--blue)}.wrapper.dark-blue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--dark-blue)}.wrapper.purple[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--purple)}#drops[_ngcontent-%COMP%], #fitMonth[_ngcontent-%COMP%]{flex-grow:1;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.month[_ngcontent-%COMP%]{display:inline-block;margin:1px 2px;width:20px;height:20px;line-height:20px;font-size:12px;text-align:center;border-radius:10px;background-color:var(--gray);color:var(--white)}.month.active[_ngcontent-%COMP%]{background-color:var(--success)}.detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:2px;font-size:24px;font-weight:600}#drops[_ngcontent-%COMP%]{margin-bottom:24px}.drops-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;flex-flow:row wrap;justify-content:flex-start}.drop[_ngcontent-%COMP%]{width:36px;height:36px;padding:6px;margin:4px;border-radius:50%;box-shadow:0 2px 8px 4px rgba(0,0,0,.15)}.drop.text[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:auto;border-radius:8px}#master[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{flex:1}.suffix[_ngcontent-%COMP%]{display:inline-block}"]}),t})();var Z=e("3Pt+");function J(t,n){if(1&t&&(r.Pb(0,"div",10),r.tc(1),r.Pb(2,"span",11),r.tc(3),r.Ob(),r.Ob()),2&t){const t=r.Zb().$implicit;r.zb(1),r.vc(" ",t.name," "),r.zb(2),r.vc("Lv. ",t.crop_info.level,"")}}function N(t,n){if(1&t&&(r.Pb(0,"span",14),r.tc(1),r.Ob()),2&t){const t=n.$implicit,e=r.Zb(3);r.fc("ngClass",""!==e.searchValue&&t.search(e.searchValue)>=0?"activate":""),r.zb(1),r.vc(" ",t," ")}}function R(t,n){if(1&t&&(r.Pb(0,"div",12),r.rc(1,N,2,2,"span",13),r.Ob()),2&t){const t=r.Zb().$implicit;r.zb(1),r.fc("ngForOf",t.drops)}}const E=function(t){return["../",t]};function V(t,n){if(1&t&&(r.Pb(0,"app-item-block",7),r.rc(1,J,4,2,"ng-template",null,8,r.sc),r.rc(3,R,2,1,"ng-template",null,9,r.sc),r.Ob()),2&t){const t=n.$implicit,e=r.kc(2),o=r.kc(4);r.fc("title",e)("img_url",t.img)("subtitle",o)("routerLink",r.hc(4,E,t.name))}}const X=[{path:"",component:_},{path:"search",component:(()=>{class t{constructor(t,n){this.ss=t,this.route=n,this.searchIcon=c.X,this.searchValue="",this.results=[],this.route.queryParams.subscribe(t=>{t.q&&(this.searchValue=t.q,this.search())})}ngOnInit(){}search(){""!==this.searchValue&&(this.results=this.ss.searchDrop(this.searchValue,!0))}}return t.\u0275fac=function(n){return new(n||t)(r.Jb(a.a),r.Jb(i.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-crops-search"]],decls:8,vars:4,consts:[[3,"title"],[1,"input-wrapper"],[1,"input-box"],["type","text",3,"ngModel","ngModelChange"],[1,"icon-button"],[3,"icon"],["routerLinkActive","'activate'",3,"title","img_url","subtitle","routerLink",4,"ngFor","ngForOf"],["routerLinkActive","'activate'",3,"title","img_url","subtitle","routerLink"],["titleTpl",""],["dropsTemplate",""],[1,"title"],[1,"level"],[1,"drops"],["class","drop",3,"ngClass",4,"ngFor","ngForOf"],[1,"drop",3,"ngClass"]],template:function(t,n){1&t&&(r.Kb(0,"app-header",0),r.Pb(1,"section"),r.Pb(2,"div",1),r.Pb(3,"div",2),r.Pb(4,"input",3),r.Xb("ngModelChange",(function(t){return n.searchValue=t}))("ngModelChange",(function(){return n.search()})),r.Ob(),r.Pb(5,"div",4),r.Kb(6,"fa-icon",5),r.Ob(),r.Ob(),r.Ob(),r.rc(7,V,5,6,"app-item-block",6),r.Ob()),2&t&&(r.fc("title","\u641c\u5c0b\u6389\u843d\u7269"),r.zb(4),r.fc("ngModel",n.searchValue),r.zb(2),r.fc("icon",n.searchIcon),r.zb(1),r.fc("ngForOf",n.results))},directives:[p.a,Z.b,Z.i,Z.k,b.a,o.j,d.a,i.e,i.d,o.i],styles:[".input-wrapper[_ngcontent-%COMP%]{width:75%;max-width:256px;margin:12px auto}input[_ngcontent-%COMP%]{flex:1;min-width:64px;border:0;outline:0}.input-box[_ngcontent-%COMP%]{width:100%;border-radius:4px;border:1px solid var(--black);padding:4px;display:flex;align-items:center}.icon-button[_ngcontent-%COMP%]{width:16px;height:16px;font-size:16px}.drops[_ngcontent-%COMP%]{width:100%;padding:0 8px;display:flex;justify-content:center;flex-flow:row wrap}.title[_ngcontent-%COMP%]{font-size:16px;font-weight:600;text-align:center;margin:8px 0;padding:4px 0}.title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{background-color:var(--gray);color:var(--white);padding:2px 4px;font-size:10px;border-radius:4px}.drop[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{display:inline-block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.drop[_ngcontent-%COMP%]{padding:4px 8px;margin:2px 4px;border:1px solid var(--gray);border-radius:4px}.drop.activate[_ngcontent-%COMP%]{border-color:var(--success);color:var(--success)}"]}),t})()},{path:":id",component:L}];let W=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[o.b,i.g.forChild(X)]]}),t})();var S=e("jICo");let q=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},providers:[a.a],imports:[[o.b,W,Z.h,S.a,i.g,b.b]]}),t})()}}]);