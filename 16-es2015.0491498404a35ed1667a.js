(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{C0n6:function(t,n,e){"use strict";e.r(n),e.d(n,"CropsModule",(function(){return A}));var o=e("SVse"),i=e("iInd"),c=e("wHSu"),r=e("8Y7J"),a=e("m7U+"),s=e("cUpR"),p=e("320Y"),l=e("JmOq"),b=e("Nv++"),d=e("5cuq");function g(t,n){if(1&t&&(r.Ob(0,"div",3),r.sc(1),r.Ob(2,"span",4),r.sc(3),r.Nb(),r.Nb()),2&t){const t=r.Xb();r.yb(1),r.uc(" ",t.seed.name," "),r.yb(2),r.uc("Lv. ",t.seed.crop_info.level,"")}}function f(t,n){if(1&t&&(r.Ob(0,"div",5),r.sc(1),r.Nb()),2&t){const t=r.Xb();r.yb(1),r.vc(" ",t.displayPrefix[t.displayPart],": ","seed_nutrient"===t.displayPart?t.seed.crop_info.day_nutrient*t.seed.crop_info.rising_time:t.seed.crop_info[t.displayPart]," ")}}let u=(()=>{class t{constructor(){this.displayPart="rising_time"}ngOnInit(){this.displayPrefix={level:"\u7b49\u7d1a\u8981\u6c42",rising_time:"\u7a2e\u690d\u5929\u6578 ",day_nutrient:"\u65e5\u990a\u5206\u503c",seed_nutrient:"\u7a2e\u5b50\u7e3d\u990a\u5206",seeding_nutrient:"\u5e7c\u82d7\u7e3d\u990a\u5206",dry_days:"\u8010\u65f1\u5929\u6578",wet_days:"\u8010\u6fd5\u5929\u6578",low_temp:"\u6700\u4f4e\u6eab\u5ea6",high_temp:"\u6700\u9ad8\u6eab\u5ea6",superior_skill:"\u4e0a\u7d1a\u6280\u8853",harvest_time:"\u8150\u721b\u5929\u6578"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-crop-list-item"]],inputs:{seed:"seed",displayPart:"displayPart"},decls:5,vars:4,consts:[["titleTpl",""],["subtitleTpl",""],[3,"title","subtitle","img_url","url"],[1,"title"],[1,"level"],[1,"subtitle"]],template:function(t,n){if(1&t&&(r.qc(0,g,4,2,"ng-template",null,0,r.rc),r.qc(2,f,2,2,"ng-template",null,1,r.rc),r.Jb(4,"app-item-block",2)),2&t){const t=r.jc(1),e=r.jc(3);r.yb(4),r.dc("title",t)("subtitle",e)("img_url",n.seed.img)("url","/crops/"+n.seed.name)}},directives:[d.a],styles:[".wrapper[_ngcontent-%COMP%]{min-width:180px;display:flex;flex-flow:row nowrap}.image[_ngcontent-%COMP%]{margin:8px;width:48px;height:48px;display:flex;align-items:center;border-radius:8px;overflow:hidden;background-color:#feeac7}.image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:center}.subtitle[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{padding:4px}.title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.subtitle[_ngcontent-%COMP%]{font-size:10px;font-weight:500}.title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{display:inline-block;background-color:var(--gray);color:var(--white);width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:2px 4px;font-size:10px;border-radius:4px}"]}),t})(),h=(()=>{class t{transform(t,...n){let e,o=n[0];return 0===o?e=t.filter(t=>t.crop_info.category<7&&t.crop_info.level>=0&&t.crop_info.level<20):1===o?e=t.filter(t=>t.crop_info.category<7&&t.crop_info.level>=20&&t.crop_info.level<40):2===o?e=t.filter(t=>t.crop_info.category<7&&t.crop_info.level>=40&&t.crop_info.level<60):3===o?e=t.filter(t=>t.crop_info.category<7&&t.crop_info.level>=60&&t.crop_info.level<80):7===o?e=t.filter(t=>7===t.crop_info.category):9===o&&(e=t.filter(t=>9===t.crop_info.category)),e}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=r.Hb({name:"cropCategory",type:t,pure:!0}),t})();function m(t,n){if(1&t){const t=r.Pb();r.Ob(0,"span"),r.sc(1),r.Nb(),r.Ob(2,"div",7),r.Vb("click",(function(){r.kc(t);const n=r.Xb().index;return r.Xb().togglePart(n)})),r.Jb(3,"fa-icon",8),r.Nb()}if(2&t){const t=r.Xb().$implicit,n=r.Xb();r.yb(1),r.uc(" ",t.name," "),r.yb(2),r.dc("icon",t.isOpen?n.closeIcon:n.openIcon)}}const O=function(t){return[t]};function _(t,n){if(1&t&&r.Jb(0,"app-crop-list-item",9),2&t){const t=n.$implicit,e=n.index,o=r.Xb().$implicit;r.dc("seed",t)("displayPart",t.crop_info.category<7?"superior_skill":7===t.crop_info.category?"seed_nutrient":"rising_time")("ngClass",e%2==0&&e===o.elements-1?"last":"")("routerLink",r.gc(4,O,t.name))}}function v(t,n){if(1&t&&(r.Ob(0,"div"),r.Jb(1,"app-divider",3),r.qc(2,m,4,2,"ng-template",null,4,r.rc),r.Ob(4,"div",5),r.qc(5,_,1,6,"app-crop-list-item",6),r.Yb(6,"cropCategory"),r.Nb(),r.Nb()),2&t){const t=n.$implicit,e=r.jc(3),o=r.Xb();r.yb(1),r.dc("title",e)("align","center")("showDivider",!1),r.yb(3),r.dc("ngClass",t.isOpen?"active":""),r.yb(1),r.dc("ngForOf",r.ac(6,5,o.seeds,t.catID))}}let y=(()=>{class t{constructor(t,n,e,o){this.ss=t,this.router=n,this.title=e,this.meta=o,this.searchIcon=c.hb,this.openIcon=c.i,this.closeIcon=c.j}ngOnInit(){this.updateHeader(),this.catImgs=[],this.toggles=[],this.seeds=this.ss.getAllCrops(),this.seeds.forEach(t=>{null==t.crop_info&&console.log(t)}),this.catDetails=[{name:"Lv.1-19",catID:0,coverImg:this.seeds.filter(t=>t.crop_info.level>=1)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>t.crop_info.level>=1&&t.crop_info.level<20).length},{name:"Lv.20-39",catID:1,coverImg:this.seeds.filter(t=>t.crop_info.level>=20)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>t.crop_info.level>=20&&t.crop_info.level<40).length},{name:"Lv.40-59",catID:2,coverImg:this.seeds.filter(t=>t.crop_info.level>=40)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>t.crop_info.level>=40&&t.crop_info.level<60).length},{name:"Lv.60-69",catID:3,coverImg:this.seeds.filter(t=>t.crop_info.level>=60)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>t.crop_info.level>=60&&t.crop_info.level<70).length},{name:"\u7da0\u80a5\u4f5c\u7269",catID:7,coverImg:this.seeds.filter(t=>7===t.crop_info.category)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>7===t.crop_info.category).length},{name:"\u7279\u6b8a\u4f5c\u7269",catID:9,coverImg:this.seeds.filter(t=>9===t.crop_info.category)[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter(t=>9===t.crop_info.category).length}]}updateHeader(){this.title.setTitle("\u4f5c\u7269\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u5404\u4f5c\u7269\u7684\u8cc7\u8a0a\u3002\u53ef\u67e5\u8a62\u4f5c\u7269\u7684\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u7b49\u7b49\u3002"}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:"\u4f5c\u7269\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:"\u4f5c\u7269\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u5404\u4f5c\u7269\u7684\u8cc7\u8a0a\u3002\u53ef\u67e5\u8a62\u4f5c\u7269\u7684\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u7b49\u7b49\u3002"}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayCrops.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/crops/"})}search(){this.router.navigate(["crops","search"])}togglePart(t){this.catDetails[t].isOpen=!this.catDetails[t].isOpen}}return t.\u0275fac=function(n){return new(n||t)(r.Ib(a.a),r.Ib(i.c),r.Ib(s.d),r.Ib(s.c))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-crops-home"]],decls:3,vars:5,consts:[["title","\u4f5c\u7269\u5217\u8868","subtitle","\u7a2e\u5b50/\u5e7c\u82d7\u8cc7\u8a0a",3,"showBackIcon","showCustomIcon","customIcon","customString","onClickCustomIcon"],[1,"container"],[4,"ngFor","ngForOf"],[3,"title","align","showDivider"],["catTemplate",""],[1,"seeds",3,"ngClass"],["class","seed",3,"seed","displayPart","ngClass","routerLink",4,"ngFor","ngForOf"],[1,"expansion",3,"click"],[3,"icon"],[1,"seed",3,"seed","displayPart","ngClass","routerLink"]],template:function(t,n){1&t&&(r.Ob(0,"app-header",0),r.Vb("onClickCustomIcon",(function(){return n.search()})),r.Nb(),r.Ob(1,"section",1),r.qc(2,v,7,8,"div",2),r.Nb()),2&t&&(r.dc("showBackIcon",!1)("showCustomIcon",!0)("customIcon",n.searchIcon)("customString","\u6389\u843d\u7269"),r.yb(2),r.dc("ngForOf",n.catDetails))},directives:[p.a,o.k,l.a,o.j,b.a,u,i.d],pipes:[h],styles:[".cat-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:flex-start}.cat-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}.seeds[_ngcontent-%COMP%], .seeds.active[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;justify-content:space-around;align-content:flex-start;transition:.5s ease-in-out}.seeds.active[_ngcontent-%COMP%]{max-height:1024px}.seeds[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.seed[_ngcontent-%COMP%]{flex:1;width:50%;max-width:212px}.seed.last[_ngcontent-%COMP%]{justify-self:flex-start}.seed[_ngcontent-%COMP%]:hover{opacity:.7;cursor:pointer}div.expansion[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:6px;right:-24px;margin-left:8px;border:0;width:24px;height:24px;line-height:24px;text-align:center;background-color:var(--primary);color:var(--white);border-radius:50%;box-shadow:0 2px 4px 2px rgba(0,0,0,.15)}"]}),t})();var x=e("kvnP"),w=e("2bwA");function C(t,n){if(1&t&&(r.Ob(0,"div",19),r.Ob(1,"div",10),r.sc(2,"\u719f\u7df4\u5ea6\u9700\u6c42"),r.Nb(),r.Ob(3,"div",20),r.Ob(4,"div",12),r.Ob(5,"div",13),r.Jb(6,"fa-icon",14),r.sc(7," \u884c\u5bb6 "),r.Nb(),r.Ob(8,"span",15),r.sc(9),r.Nb(),r.Ob(10,"span",16),r.sc(11,"\u500b(\u4e0a\u7d1a)"),r.Nb(),r.Nb(),r.Ob(12,"div",12),r.Ob(13,"div",13),r.Jb(14,"fa-icon",14),r.sc(15," \u5c08\u5bb6 "),r.Nb(),r.Ob(16,"span",15),r.sc(17),r.Nb(),r.Ob(18,"span",16),r.sc(19,"\u500b(\u7279\u7d1a)"),r.Nb(),r.Nb(),r.Ob(20,"div",12),r.Ob(21,"div",13),r.Jb(22,"fa-icon",14),r.sc(23," \u9054\u4eba "),r.Nb(),r.Ob(24,"span",15),r.sc(25),r.Nb(),r.Ob(26,"span",16),r.sc(27,"\u500b(\u7279\u7d1a)"),r.Nb(),r.Nb(),r.Ob(28,"div",12),r.Ob(29,"div",13),r.Jb(30,"fa-icon",14),r.sc(31," \u738b "),r.Nb(),r.Ob(32,"span",15),r.sc(33),r.Nb(),r.Ob(34,"span",16),r.sc(35,"\u500b(Real \u788e\u7247)"),r.Nb(),r.Nb(),r.Ob(36,"div",12),r.Ob(37,"div",13),r.Jb(38,"fa-icon",14),r.sc(39," \u795e "),r.Nb(),r.Ob(40,"span",15),r.sc(41),r.Nb(),r.Ob(42,"span",16),r.sc(43,"\u500b(Real \u788e\u7247)"),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t){const t=r.Xb();r.yb(6),r.dc("icon",t.trophyIcon),r.yb(3),r.uc("",t.crop.master.master1," "),r.yb(5),r.dc("icon",t.trophyIcon),r.yb(3),r.uc("",t.crop.master.master2," "),r.yb(5),r.dc("icon",t.trophyIcon),r.yb(3),r.uc("",t.crop.master.master3," "),r.yb(5),r.dc("icon",t.trophyIcon),r.yb(3),r.uc("",t.crop.master.master4," "),r.yb(5),r.dc("icon",t.trophyIcon),r.yb(3),r.uc("",t.crop.master.master5," ")}}function N(t,n){if(1&t&&(r.Ob(0,"div",21),r.Ob(1,"div",10),r.sc(2,"\u5e7c\u82d7"),r.Nb(),r.Ob(3,"div",11),r.Ob(4,"div",12),r.Ob(5,"div",13),r.Jb(6,"fa-icon",14),r.sc(7," \u683d\u57f9\u5929\u6578 "),r.Nb(),r.Ob(8,"span",15),r.sc(9),r.Nb(),r.Ob(10,"span",16),r.sc(11,"\u65e5"),r.Nb(),r.Nb(),r.Ob(12,"div",12),r.Ob(13,"div",13),r.Jb(14,"fa-icon",14),r.sc(15," \u990a\u5206\u9700\u6c42 "),r.Nb(),r.Ob(16,"span",15),r.sc(17),r.Nb(),r.Nb(),r.Ob(18,"div",12),r.Ob(19,"div",13),r.Jb(20,"fa-icon",14),r.sc(21," \u80b2\u82d7\u6750\u6599 "),r.Nb(),r.Jb(22,"img",22),r.Ob(23,"span",23),r.sc(24),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t){const t=r.Xb();r.yb(6),r.dc("icon",t.dayIcon),r.yb(3),r.uc("",t.crop.crop_info.rising_time-t.crop.crop_info.sprout_time," "),r.yb(5),r.dc("icon",t.nutrientIcon),r.yb(3),r.uc("",t.crop.crop_info.seedling_nutrient," "),r.yb(3),r.dc("icon",t.bedSoilIcon),r.yb(2),r.dc("src",t.crop.bed_soil.img,r.mc)("alt",t.crop.bed_soil.name),r.yb(2),r.tc(t.crop.bed_soil.name)}}function P(t,n){1&t&&r.Jb(0,"app-consumable-item",33),2&t&&r.dc("itemName",n.$implicit)("imgWidth",36)}function M(t,n){if(1&t&&(r.Ob(0,"span",34),r.sc(1),r.Nb()),2&t){const t=n.index;r.dc("ngClass",n.$implicit),r.yb(1),r.tc(t+1)}}function I(t,n){if(1&t&&(r.Ob(0,"span",34),r.sc(1),r.Nb()),2&t){const t=n.index;r.dc("ngClass",n.$implicit),r.yb(1),r.tc(t+1)}}function k(t,n){if(1&t&&(r.Ob(0,"span",34),r.sc(1),r.Nb()),2&t){const t=n.index;r.dc("ngClass",n.$implicit),r.yb(1),r.tc(t+1)}}function J(t,n){if(1&t&&(r.Ob(0,"span",34),r.sc(1),r.Nb()),2&t){const t=n.index;r.dc("ngClass",n.$implicit),r.yb(1),r.tc(t+1)}}function F(t,n){if(1&t&&(r.Ob(0,"span",34),r.sc(1),r.Nb()),2&t){const t=n.index;r.dc("ngClass",n.$implicit),r.yb(1),r.tc(t+1)}}function q(t,n){if(1&t&&(r.Ob(0,"div",24),r.Ob(1,"div",10),r.sc(2,"\u57fa\u672c\u8cc7\u8a0a"),r.Nb(),r.Ob(3,"div",11),r.Ob(4,"div",12),r.Ob(5,"div",13),r.Jb(6,"fa-icon",14),r.sc(7," \u4e0a\u7d1a\u6280\u8853\u503c "),r.Nb(),r.Jb(8,"span",25),r.Ob(9,"span",15),r.sc(10),r.Nb(),r.Nb(),r.Ob(11,"div",12),r.Ob(12,"div",13),r.Jb(13,"fa-icon",14),r.sc(14," \u653e\u721b\u6642\u9593 "),r.Nb(),r.Jb(15,"span",25),r.Ob(16,"span",15),r.sc(17),r.Nb(),r.Ob(18,"span",16),r.sc(19," \u5206\u9418 "),r.Nb(),r.Nb(),r.Ob(20,"div",12),r.Ob(21,"div",13),r.Jb(22,"fa-icon",14),r.sc(23," \u57fa\u790e\u7d93\u9a57\u503c "),r.Nb(),r.Jb(24,"span",25),r.Ob(25,"span",15),r.sc(26),r.Nb(),r.Nb(),r.Ob(27,"div",12),r.Ob(28,"div",13),r.Jb(29,"fa-icon",14),r.sc(30," \u4e0a\u7d1a\u552e\u50f9 "),r.Nb(),r.Ob(31,"span",15),r.sc(32),r.Yb(33,"number"),r.Nb(),r.Nb(),r.Ob(34,"div",12),r.Ob(35,"div",13),r.Jb(36,"fa-icon",14),r.sc(37," \u8010\u65f1\u5929\u6578 "),r.Nb(),r.Ob(38,"span",15),r.sc(39),r.Nb(),r.Ob(40,"span",16),r.sc(41,"\u65e5"),r.Nb(),r.Nb(),r.Ob(42,"div",12),r.Ob(43,"div",13),r.Jb(44,"fa-icon",14),r.sc(45," \u8010\u6fd5\u5929\u6578 "),r.Nb(),r.Ob(46,"span",15),r.sc(47),r.Nb(),r.Ob(48,"span",16),r.sc(49,"\u65e5"),r.Nb(),r.Nb(),r.Ob(50,"div",12),r.Ob(51,"div",13),r.Jb(52,"fa-icon",14),r.sc(53," \u9069\u5408\u6eab\u5ea6 "),r.Nb(),r.Ob(54,"span",15),r.Ob(55,"span",26),r.sc(56),r.Nb(),r.sc(57," ~ "),r.Ob(58,"span",27),r.sc(59),r.Nb(),r.Nb(),r.Ob(60,"span",16),r.sc(61," \u5ea6"),r.Nb(),r.Nb(),r.Ob(62,"div",12),r.Ob(63,"div",13),r.Jb(64,"fa-icon",14),r.sc(65," \u80b2\u82d7\u5929\u6578 "),r.Nb(),r.Ob(66,"span",15),r.sc(67),r.Nb(),r.Ob(68,"span",16),r.sc(69,"\u65e5"),r.Nb(),r.Nb(),r.Ob(70,"div",12),r.Ob(71,"div",13),r.Jb(72,"fa-icon",14),r.sc(73," \u65e5\u990a\u5206\u9700\u6c42 "),r.Nb(),r.Ob(74,"span",15),r.sc(75),r.Nb(),r.Nb(),r.Ob(76,"div",12),r.Ob(77,"div",13),r.Jb(78,"fa-icon",14),r.sc(79," \u7a2e\u5b50\u50f9\u683c "),r.Nb(),r.Ob(80,"span",15),r.sc(81),r.Yb(82,"number"),r.Nb(),r.Nb(),r.Ob(83,"div",28),r.Ob(84,"div",13),r.Jb(85,"fa-icon",14),r.sc(86," \u6389\u843d\u7269 "),r.Nb(),r.Ob(87,"div",29),r.qc(88,P,1,2,"app-consumable-item",30),r.Nb(),r.Nb(),r.Ob(89,"div",31),r.Ob(90,"div",13),r.Jb(91,"fa-icon",14),r.sc(92," \u9069\u5408\u6708\u4efd "),r.Nb(),r.Ob(93,"p"),r.sc(94," \u5ba4\u5916\u7530"),r.Jb(95,"br"),r.qc(96,M,2,2,"span",32),r.Nb(),r.Ob(97,"p"),r.sc(98," \u96a7\u9053\u7db2\u5ba4"),r.Jb(99,"br"),r.qc(100,I,2,2,"span",32),r.Nb(),r.Ob(101,"p"),r.sc(102," \u7db2\u5ba4"),r.Jb(103,"br"),r.qc(104,k,2,2,"span",32),r.Nb(),r.Ob(105,"p"),r.sc(106," \u6eab\u5ba4"),r.Jb(107,"br"),r.qc(108,J,2,2,"span",32),r.Nb(),r.Ob(109,"p"),r.sc(110," \u52a0\u71b1\u6eab\u5ba4"),r.Jb(111,"br"),r.qc(112,F,2,2,"span",32),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t){const t=r.Xb();r.yb(6),r.dc("icon",t.skillIcon),r.yb(4),r.uc(" ",t.crop.crop_info.superior_skill," "),r.yb(3),r.dc("icon",t.durationIcon),r.yb(4),r.uc(" ",t.crop.crop_info.harvest_time," "),r.yb(5),r.dc("icon",t.expIcon),r.yb(4),r.uc(" ",t.crop.crop_info.exp_base," "),r.yb(3),r.dc("icon",t.priceIcon),r.yb(3),r.uc(" $ ",r.ac(33,29,2*t.crop.crop_info.price_base,"1.0-0")," "),r.yb(4),r.dc("icon",t.dryIcon),r.yb(3),r.uc(" ",t.crop.crop_info.dry_days," "),r.yb(5),r.dc("icon",t.wetIcon),r.yb(3),r.uc(" ",t.crop.crop_info.wet_days," "),r.yb(5),r.dc("icon",t.tempIcon),r.yb(4),r.tc(t.crop.crop_info.low_temp),r.yb(3),r.tc(t.crop.crop_info.high_temp),r.yb(5),r.dc("icon",t.risingIcon),r.yb(3),r.uc("",t.crop.crop_info.sprout_time," "),r.yb(5),r.dc("icon",t.nutrientIcon),r.yb(3),r.uc("",t.crop.crop_info.day_nutrient," "),r.yb(3),r.dc("icon",t.priceIcon),r.yb(3),r.uc(" $ ",r.ac(82,32,t.crop.crop_info.seed_cost,"1.0-0")," "),r.yb(4),r.dc("icon",t.dropIcon),r.yb(3),r.dc("ngForOf",t.crop.drops),r.yb(3),r.dc("icon",t.monthIcon),r.yb(5),r.dc("ngForOf",t.openField),r.yb(4),r.dc("ngForOf",t.vinylTunnel),r.yb(4),r.dc("ngForOf",t.vinylHouse),r.yb(4),r.dc("ngForOf",t.greenHouse),r.yb(4),r.dc("ngForOf",t.boilerHouse)}}function T(t,n){if(1&t&&r.Jb(0,"app-consumable-item",39),2&t){const t=r.Xb().$implicit;r.dc("itemName",t)("imgWidth",36)}}function j(t,n){if(1&t&&r.sc(0),2&t){const t=r.Xb().$implicit;r.uc(" ",t," ")}}function z(t,n){if(1&t&&(r.Ob(0,"span",36),r.qc(1,T,1,2,"app-consumable-item",37),r.qc(2,j,1,1,"ng-template",null,38,r.rc),r.Nb()),2&t){const t=r.jc(3),n=r.Xb(2);r.dc("ngClass","\u9285\u74dc"===n.crop.name||"\u9280\u74dc"===n.crop.name?"":"text"),r.yb(1),r.dc("ngIf","\u9285\u74dc"===n.crop.name||"\u9280\u74dc"===n.crop.name)("ngIfElse",t)}}function H(t,n){if(1&t&&(r.Ob(0,"div",24),r.Ob(1,"div",10),r.sc(2,"\u57fa\u672c\u8cc7\u8a0a"),r.Nb(),r.Ob(3,"div",11),r.Ob(4,"div",28),r.Ob(5,"div",13),r.Jb(6,"fa-icon",14),r.sc(7," \u6389\u843d\u7269 "),r.Nb(),r.Ob(8,"div",29),r.qc(9,z,4,3,"span",35),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t){const t=r.Xb();r.yb(6),r.dc("icon",t.dropIcon),r.yb(3),r.dc("ngForOf",t.crop.drops)}}let $=(()=>{class t{constructor(t,n,e,o,i,r){this.ss=t,this.route=n,this.location=e,this.cs=o,this.title=i,this.meta=r,this.durationIcon=c.m,this.expIcon=c.nb,this.skillIcon=c.U,this.priceIcon=c.q,this.trophyIcon=c.yb,this.monthIcon=c.g,this.dayIcon=c.h,this.tempIcon=c.sb,this.nutrientIcon=c.cb,this.risingIcon=c.ib,this.dryIcon=c.G,this.wetIcon=c.n,this.dropIcon=c.L,this.bedSoilIcon=c.M,this.route.paramMap.subscribe(t=>{this.seedName=t.get("id");let n=this.ss.searchSeed(this.seedName);this.crop=Object.assign({},n),this.crop.crop_info.seed_nutrient=this.crop.crop_info.rising_time*this.crop.crop_info.day_nutrient,this.crop.crop_info.seedling_nutrient=(this.crop.crop_info.rising_time-this.crop.crop_info.sprout_time)*this.crop.crop_info.day_nutrient,this.updateHTMLHeader()})}ngOnInit(){this.openField=[],this.vinylTunnel=[],this.vinylHouse=[],this.greenHouse=[],this.boilerHouse=[];for(let t=0;t<12;t++)this.openField.push(""),this.vinylTunnel.push(""),this.vinylHouse.push(""),this.greenHouse.push(""),this.boilerHouse.push("");this.crop.crop_info.open_field.forEach(t=>{this.openField[t-1]="active"}),this.crop.crop_info.vinyl_tunnel.forEach(t=>{this.vinylTunnel[t-1]="active"}),this.crop.crop_info.vinyl_house.forEach(t=>{this.vinylHouse[t-1]="active"}),this.crop.crop_info.green_house.forEach(t=>{this.greenHouse[t-1]="active"}),this.crop.crop_info.boiler_house.forEach(t=>{this.boilerHouse[t-1]="active"})}updateHTMLHeader(){this.title.setTitle(this.crop.name+" | \u4f5c\u7269 | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:`RealFarm \u760b\u7a2e\u83dc\u4e2d${this.crop.name}\u7684\u8cc7\u8a0a\uff0c\u5305\u62ec\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u3002`}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:this.crop.name+" | \u4f5c\u7269 | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:this.crop.name+" | \u4f5c\u7269 | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:`RealFarm \u760b\u7a2e\u83dc\u4e2d${this.crop.name}\u7684\u8cc7\u8a0a\uff0c\u5305\u62ec\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u3002`}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayCrops.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/crops/"+this.crop.name})}goBack(){this.location.back()}}return t.\u0275fac=function(n){return new(n||t)(r.Ib(a.a),r.Ib(i.a),r.Ib(o.h),r.Ib(x.a),r.Ib(s.d),r.Ib(s.c))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-crops-detail"]],decls:34,vars:12,consts:[[1,"container"],[1,"title","crop"],[1,"image"],["width","100%",3,"src","alt"],[1,"text-part"],[1,"level"],[1,"right-part"],[1,"back",3,"click"],["class","wrapper red",4,"ngIf"],[1,"wrapper","orange"],[1,"part-name"],[1,"details"],[1,"detail"],[1,"title"],[3,"icon"],[1,"value"],[1,"suffix"],["class","wrapper yellow",4,"ngIf"],["class","wrapper green",4,"ngIf"],[1,"wrapper","red"],["id","master",1,"details"],[1,"wrapper","yellow"],["width","48",2,"vertical-align","top",3,"src","alt"],[1,"suffix",2,"vertical-align","bottom","padding","4px"],[1,"wrapper","green"],[1,"prefix"],[2,"color","var(--info)"],[2,"color","var(--danger)"],["id","drops",1,"detail"],[1,"drops-wrapper"],["class","drop",3,"itemName","imgWidth",4,"ngFor","ngForOf"],["id","fitMonth",1,"detail"],["class","month",3,"ngClass",4,"ngFor","ngForOf"],[1,"drop",3,"itemName","imgWidth"],[1,"month",3,"ngClass"],["class","drop",3,"ngClass",4,"ngFor","ngForOf"],[1,"drop",3,"ngClass"],[3,"itemName","imgWidth",4,"ngIf","ngIfElse"],["dropNameTemplate",""],[3,"itemName","imgWidth"]],template:function(t,n){1&t&&(r.Ob(0,"section",0),r.Ob(1,"div",1),r.Ob(2,"div",2),r.Jb(3,"img",3),r.Nb(),r.Ob(4,"div",4),r.Ob(5,"span",5),r.sc(6),r.Nb(),r.Ob(7,"div"),r.sc(8),r.Nb(),r.Nb(),r.Ob(9,"div",6),r.Ob(10,"span",7),r.Vb("click",(function(){return n.goBack()})),r.sc(11,"\u56de\u4e0a\u4e00\u9801"),r.Nb(),r.Nb(),r.Nb(),r.qc(12,C,44,10,"div",8),r.Ob(13,"div",9),r.Ob(14,"div",10),r.sc(15,"\u7a2e\u5b50"),r.Nb(),r.Ob(16,"div",11),r.Ob(17,"div",12),r.Ob(18,"div",13),r.Jb(19,"fa-icon",14),r.sc(20," \u683d\u57f9\u5929\u6578 "),r.Nb(),r.Ob(21,"span",15),r.sc(22),r.Nb(),r.Ob(23,"span",16),r.sc(24,"\u65e5"),r.Nb(),r.Nb(),r.Ob(25,"div",12),r.Ob(26,"div",13),r.Jb(27,"fa-icon",14),r.sc(28," \u990a\u5206\u9700\u6c42 "),r.Nb(),r.Ob(29,"span",15),r.sc(30),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.qc(31,N,25,8,"div",17),r.qc(32,q,113,35,"div",18),r.qc(33,H,10,2,"div",18),r.Nb()),2&t&&(r.yb(3),r.dc("src",n.crop.img,r.mc)("alt",n.crop.name+"\u7684\u5716\u7247"),r.yb(3),r.uc(" Lv. ",n.crop.crop_info.level,""),r.yb(2),r.tc(n.seedName),r.yb(4),r.dc("ngIf",n.crop.crop_info.category<7),r.yb(7),r.dc("icon",n.dayIcon),r.yb(3),r.uc("",n.crop.crop_info.rising_time," "),r.yb(5),r.dc("icon",n.nutrientIcon),r.yb(3),r.uc("",n.crop.crop_info.seed_nutrient," "),r.yb(1),r.dc("ngIf",n.crop.crop_info.category<7),r.yb(1),r.dc("ngIf",n.crop.crop_info.category<7),r.yb(1),r.dc("ngIf",9===n.crop.crop_info.category))},directives:[o.l,b.a,o.k,w.a,o.j],pipes:[o.e],styles:[".container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.title.crop[_ngcontent-%COMP%]{margin:12px 8px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.title[_ngcontent-%COMP%]{flex:1}.title[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{margin:4px;width:56px;height:56px;display:flex;align-items:center;border-radius:8px;overflow:hidden;background-color:#feeac7}.title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{background-color:var(--gray);color:var(--white);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:4px;font-size:14px;border-radius:4px}.title[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{text-align:center;margin:4px 8px}.title[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]{font-size:20px;font-weight:600;display:flex;flex-direction:column}.title[_ngcontent-%COMP%] > .right-part[_ngcontent-%COMP%]{flex:1;align-self:flex-start}.back[_ngcontent-%COMP%]{width:58px;padding:4px;color:var(--white);font-size:14px;float:right;justify-self:flex-end;margin-right:16px;border-radius:4px;background-color:var(--secondary)}.wrapper[_ngcontent-%COMP%]{position:relative;width:calc(100% - 26px);margin:8px;border:1px solid var(--black);border-radius:4px;padding:12px 4px 4px}.wrapper[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--black);position:absolute;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:2px 12px;background-color:var(--white);font-size:14px;font-weight:600;top:-8px;left:12px}.wrapper.info[_ngcontent-%COMP%]{border:1px solid var(--info)}.wrapper.info[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--info)}.wrapper.primary[_ngcontent-%COMP%]{border:1px solid var(--primary)}.wrapper.primary[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--primary)}.wrapper.secondary[_ngcontent-%COMP%]{border:1px solid var(--secondary)}.wrapper.secondary[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--secondary)}.wrapper.danger[_ngcontent-%COMP%]{border:1px solid var(--danger)}.wrapper.danger[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--danger)}.wrapper.success[_ngcontent-%COMP%]{border:1px solid var(--success)}.wrapper.success[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--success)}.wrapper.red[_ngcontent-%COMP%]{border:1px solid var(--red)}.wrapper.red[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--red)}.wrapper.orange[_ngcontent-%COMP%]{border:1px solid var(--orange)}.wrapper.orange[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--orange)}.wrapper.yellow[_ngcontent-%COMP%]{border:1px solid var(--yellow)}.wrapper.yellow[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--yellow)}.wrapper.green[_ngcontent-%COMP%]{border:1px solid var(--green)}.wrapper.green[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--green)}.wrapper.blue[_ngcontent-%COMP%]{border:1px solid var(--blue)}.wrapper.blue[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--blue)}.wrapper.dark-blue[_ngcontent-%COMP%]{border:1px solid var(--dark-blue)}.wrapper.dark-blue[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--dark-blue)}.details[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:100%}.detail[_ngcontent-%COMP%]{min-width:132px;width:40%;padding:4px auto;margin:14px 12px}.detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:var(--white);font-size:16px;padding:4px 12px;margin:4px 2px;font-weight:500;border-radius:16px}.title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding-right:4px}.wrapper.primary[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--primary)}.wrapper.secondary[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--secondary)}.wrapper.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--info)}.wrapper.danger[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--danger)}.wrapper.red[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--red)}.wrapper.orange[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--orange)}.wrapper.yellow[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--yellow)}.wrapper.green[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--green)}.wrapper.blue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--blue)}.wrapper.dark-blue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--dark-blue)}.wrapper.purple[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--purple)}#drops[_ngcontent-%COMP%], #fitMonth[_ngcontent-%COMP%]{flex-grow:1;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.month[_ngcontent-%COMP%]{display:inline-block;margin:1px 2px;width:20px;height:20px;line-height:20px;font-size:12px;text-align:center;border-radius:10px;background-color:var(--gray);color:var(--white)}.month.active[_ngcontent-%COMP%]{background-color:var(--success)}.detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:2px;font-size:24px;font-weight:600}#drops[_ngcontent-%COMP%]{margin-bottom:24px}.drops-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;flex-flow:row wrap;justify-content:flex-start}.drop[_ngcontent-%COMP%]{width:36px;height:36px;padding:6px;margin:4px;border-radius:50%;box-shadow:0 2px 8px 4px rgba(0,0,0,.15)}.drop.text[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:auto;border-radius:8px}#master[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{flex:1}.suffix[_ngcontent-%COMP%]{display:inline-block}"]}),t})();var L=e("s7LF");function X(t,n){if(1&t&&(r.Ob(0,"div",10),r.sc(1),r.Ob(2,"span",11),r.sc(3),r.Nb(),r.Nb()),2&t){const t=r.Xb().$implicit;r.yb(1),r.uc(" ",t.name," "),r.yb(2),r.uc("Lv. ",t.crop_info.level,"")}}function D(t,n){if(1&t&&(r.Ob(0,"span",14),r.sc(1),r.Nb()),2&t){const t=n.$implicit,e=r.Xb(3);r.dc("ngClass",""!==e.searchValue&&t.search(e.searchValue)>=0?"activate":""),r.yb(1),r.uc(" ",t," ")}}function R(t,n){if(1&t&&(r.Ob(0,"div",12),r.qc(1,D,2,2,"span",13),r.Nb()),2&t){const t=r.Xb().$implicit;r.yb(1),r.dc("ngForOf",t.drops)}}const V=function(t){return["../",t]};function E(t,n){if(1&t&&(r.Ob(0,"app-item-block",7),r.qc(1,X,4,2,"ng-template",null,8,r.rc),r.qc(3,R,2,1,"ng-template",null,9,r.rc),r.Nb()),2&t){const t=n.$implicit,e=r.jc(2),o=r.jc(4);r.dc("title",e)("img_url",t.img)("subtitle",o)("routerLink",r.gc(4,V,t.name))}}const S=[{path:"",component:y},{path:"search",component:(()=>{class t{constructor(t,n){this.ss=t,this.route=n,this.searchIcon=c.hb,this.searchValue="",this.results=[],this.route.queryParams.subscribe(t=>{t.q&&(this.searchValue=t.q,this.search())})}ngOnInit(){}search(){""!==this.searchValue&&(this.results=this.ss.searchDrop(this.searchValue,!0))}}return t.\u0275fac=function(n){return new(n||t)(r.Ib(a.a),r.Ib(i.a))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-crops-search"]],decls:8,vars:4,consts:[[3,"title"],[1,"input-wrapper"],[1,"input-box"],["type","text",3,"ngModel","ngModelChange"],[1,"icon-button"],[3,"icon"],["routerLinkActive","'activate'",3,"title","img_url","subtitle","routerLink",4,"ngFor","ngForOf"],["routerLinkActive","'activate'",3,"title","img_url","subtitle","routerLink"],["titleTpl",""],["dropsTemplate",""],[1,"title"],[1,"level"],[1,"drops"],["class","drop",3,"ngClass",4,"ngFor","ngForOf"],[1,"drop",3,"ngClass"]],template:function(t,n){1&t&&(r.Jb(0,"app-header",0),r.Ob(1,"section"),r.Ob(2,"div",1),r.Ob(3,"div",2),r.Ob(4,"input",3),r.Vb("ngModelChange",(function(t){return n.searchValue=t}))("ngModelChange",(function(){return n.search()})),r.Nb(),r.Ob(5,"div",4),r.Jb(6,"fa-icon",5),r.Nb(),r.Nb(),r.Nb(),r.qc(7,E,5,6,"app-item-block",6),r.Nb()),2&t&&(r.dc("title","\u641c\u5c0b\u6389\u843d\u7269"),r.yb(4),r.dc("ngModel",n.searchValue),r.yb(2),r.dc("icon",n.searchIcon),r.yb(1),r.dc("ngForOf",n.results))},directives:[p.a,L.b,L.j,L.m,b.a,o.k,d.a,i.e,i.d,o.j],styles:[".input-wrapper[_ngcontent-%COMP%]{width:75%;max-width:256px;margin:12px auto}input[_ngcontent-%COMP%]{flex:1;min-width:64px;border:0;outline:0}.input-box[_ngcontent-%COMP%]{width:100%;border-radius:4px;border:1px solid var(--black);padding:4px;display:flex;align-items:center}.icon-button[_ngcontent-%COMP%]{width:16px;height:16px;font-size:16px}.drops[_ngcontent-%COMP%]{width:100%;padding:0 8px;display:flex;justify-content:center;flex-flow:row wrap}.title[_ngcontent-%COMP%]{font-size:16px;font-weight:600;text-align:center;margin:8px 0;padding:4px 0}.title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{background-color:var(--gray);color:var(--white);padding:2px 4px;font-size:10px;border-radius:4px}.drop[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{display:inline-block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.drop[_ngcontent-%COMP%]{padding:4px 8px;margin:2px 4px;border:1px solid var(--gray);border-radius:4px}.drop.activate[_ngcontent-%COMP%]{border-color:var(--success);color:var(--success)}"]}),t})()},{path:":id",component:$}];let W=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[o.c,i.g.forChild(S)]]}),t})();var Y=e("jICo");let A=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},providers:[a.a],imports:[[o.c,W,L.h,Y.a,i.g,b.b]]}),t})()}}]);