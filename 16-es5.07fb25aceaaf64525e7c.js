function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{C0n6:function(t,n,e){"use strict";e.r(n),e.d(n,"CropsModule",(function(){return tt}));var i=e("ofXK"),o=e("tyNb"),r=e("wHSu"),c=e("fXoL"),a=e("m7U+"),p=e("jhN1"),s=e("320Y"),l=e("JmOq"),b=e("6NWb"),d=e("5cuq");function f(t,n){if(1&t&&(c.Pb(0,"div",3),c.tc(1),c.Pb(2,"span",4),c.tc(3),c.Ob(),c.Ob()),2&t){var e=c.Zb();c.zb(1),c.vc(" ",e.seed.name," "),c.zb(2),c.vc("Lv. ",e.seed.crop_info.level,"")}}function g(t,n){if(1&t&&(c.Pb(0,"div",5),c.tc(1),c.Ob()),2&t){var e=c.Zb();c.zb(1),c.wc(" ",e.displayPrefix[e.displayPart],": ","seed_nutrient"===e.displayPart?e.seed.crop_info.day_nutrient*e.seed.crop_info.rising_time:e.seed.crop_info[e.displayPart]," ")}}var u,h,m=((h=function(){function t(){_classCallCheck(this,t),this.displayPart="rising_time"}return _createClass(t,[{key:"ngOnInit",value:function(){this.displayPrefix={level:"\u7b49\u7d1a\u8981\u6c42",rising_time:"\u7a2e\u690d\u5929\u6578 ",day_nutrient:"\u65e5\u990a\u5206\u503c",seed_nutrient:"\u7a2e\u5b50\u7e3d\u990a\u5206",seeding_nutrient:"\u5e7c\u82d7\u7e3d\u990a\u5206",dry_days:"\u8010\u65f1\u5929\u6578",wet_days:"\u8010\u6fd5\u5929\u6578",low_temp:"\u6700\u4f4e\u6eab\u5ea6",high_temp:"\u6700\u9ad8\u6eab\u5ea6",superior_skill:"\u4e0a\u7d1a\u6280\u8853",harvest_time:"\u8150\u721b\u5929\u6578"}}}]),t}()).\u0275fac=function(t){return new(t||h)},h.\u0275cmp=c.Db({type:h,selectors:[["app-crop-list-item"]],inputs:{seed:"seed",displayPart:"displayPart"},decls:5,vars:4,consts:[["titleTpl",""],["subtitleTpl",""],[3,"title","subtitle","img_url","url"],[1,"title"],[1,"level"],[1,"subtitle"]],template:function(t,n){if(1&t&&(c.rc(0,f,4,2,"ng-template",null,0,c.sc),c.rc(2,g,2,2,"ng-template",null,1,c.sc),c.Kb(4,"app-item-block",2)),2&t){var e=c.kc(1),i=c.kc(3);c.zb(4),c.fc("title",e)("subtitle",i)("img_url",n.seed.img)("url","/crops/"+n.seed.name)}},directives:[d.a],styles:[".wrapper[_ngcontent-%COMP%]{min-width:180px;display:flex;flex-flow:row nowrap}.image[_ngcontent-%COMP%]{margin:8px;width:48px;height:48px;display:flex;align-items:center;border-radius:8px;overflow:hidden;background-color:#feeac7}.image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:flex-start;justify-content:center}.subtitle[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{padding:4px}.title[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.subtitle[_ngcontent-%COMP%]{font-size:10px;font-weight:500}.title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{display:inline-block;background-color:var(--gray);color:var(--white);width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:2px 4px;font-size:10px;border-radius:4px}"]}),h),v=((u=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){var n,e=arguments.length<=1?void 0:arguments[1];return 0===e?n=t.filter((function(t){return t.crop_info.category<7&&t.crop_info.level>=0&&t.crop_info.level<20})):1===e?n=t.filter((function(t){return t.crop_info.category<7&&t.crop_info.level>=20&&t.crop_info.level<40})):2===e?n=t.filter((function(t){return t.crop_info.category<7&&t.crop_info.level>=40&&t.crop_info.level<60})):3===e?n=t.filter((function(t){return t.crop_info.category<7&&t.crop_info.level>=60&&t.crop_info.level<80})):7===e?n=t.filter((function(t){return 7===t.crop_info.category})):9===e&&(n=t.filter((function(t){return 9===t.crop_info.category}))),n}}]),t}()).\u0275fac=function(t){return new(t||u)},u.\u0275pipe=c.Ib({name:"cropCategory",type:u,pure:!0}),u);function O(t,n){if(1&t){var e=c.Qb();c.Pb(0,"span"),c.tc(1),c.Ob(),c.Pb(2,"div",7),c.Xb("click",(function(){c.lc(e);var t=c.Zb().index;return c.Zb().togglePart(t)})),c.Kb(3,"fa-icon",8),c.Ob()}if(2&t){var i=c.Zb().$implicit,o=c.Zb();c.zb(1),c.vc(" ",i.name," "),c.zb(2),c.fc("icon",i.isOpen?o.closeIcon:o.openIcon)}}var P=function(t){return[t]};function _(t,n){if(1&t&&c.Kb(0,"app-crop-list-item",9),2&t){var e=n.$implicit,i=n.index,o=c.Zb().$implicit;c.fc("seed",e)("displayPart",e.crop_info.category<7?"superior_skill":7===e.crop_info.category?"seed_nutrient":"rising_time")("ngClass",i%2==0&&i===o.elements-1?"last":"")("routerLink",c.hc(4,P,e.name))}}function x(t,n){if(1&t&&(c.Pb(0,"div"),c.Kb(1,"app-divider",3),c.rc(2,O,4,2,"ng-template",null,4,c.sc),c.Pb(4,"div",5),c.rc(5,_,1,6,"app-crop-list-item",6),c.ac(6,"cropCategory"),c.Ob(),c.Ob()),2&t){var e=n.$implicit,i=c.kc(3),o=c.Zb();c.zb(1),c.fc("title",i)("align","center")("showDivider",!1),c.zb(3),c.fc("ngClass",e.isOpen?"active":""),c.zb(1),c.fc("ngForOf",c.cc(6,5,o.seeds,e.catID))}}var w,C=((w=function(){function t(n,e,i,o){_classCallCheck(this,t),this.ss=n,this.router=e,this.title=i,this.meta=o,this.searchIcon=r.ab,this.openIcon=r.i,this.closeIcon=r.j}return _createClass(t,[{key:"ngOnInit",value:function(){this.updateHeader(),this.catImgs=[],this.toggles=[],this.seeds=this.ss.getAllCrops(),this.seeds.forEach((function(t){null==t.crop_info&&console.log(t)})),this.catDetails=[{name:"Lv.1-19",catID:0,coverImg:this.seeds.filter((function(t){return t.crop_info.level>=1}))[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter((function(t){return t.crop_info.level>=1&&t.crop_info.level<20})).length},{name:"Lv.20-39",catID:1,coverImg:this.seeds.filter((function(t){return t.crop_info.level>=20}))[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter((function(t){return t.crop_info.level>=20&&t.crop_info.level<40})).length},{name:"Lv.40-59",catID:2,coverImg:this.seeds.filter((function(t){return t.crop_info.level>=40}))[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter((function(t){return t.crop_info.level>=40&&t.crop_info.level<60})).length},{name:"Lv.60-69",catID:3,coverImg:this.seeds.filter((function(t){return t.crop_info.level>=60}))[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter((function(t){return t.crop_info.level>=60&&t.crop_info.level<70})).length},{name:"\u7da0\u80a5\u4f5c\u7269",catID:7,coverImg:this.seeds.filter((function(t){return 7===t.crop_info.category}))[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter((function(t){return 7===t.crop_info.category})).length},{name:"\u7279\u6b8a\u4f5c\u7269",catID:9,coverImg:this.seeds.filter((function(t){return 9===t.crop_info.category}))[0].img,isOpen:!0,theme:"default",elements:this.seeds.filter((function(t){return 9===t.crop_info.category})).length}]}},{key:"updateHeader",value:function(){this.title.setTitle("\u4f5c\u7269\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u5404\u4f5c\u7269\u7684\u8cc7\u8a0a\u3002\u53ef\u67e5\u8a62\u4f5c\u7269\u7684\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u7b49\u7b49\u3002"}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:"\u4f5c\u7269\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:"\u4f5c\u7269\u8cc7\u8a0a | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d\u5404\u4f5c\u7269\u7684\u8cc7\u8a0a\u3002\u53ef\u67e5\u8a62\u4f5c\u7269\u7684\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u7b49\u7b49\u3002"}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayCrops.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/crops/"})}},{key:"search",value:function(){this.router.navigate(["crops","search"])}},{key:"togglePart",value:function(t){this.catDetails[t].isOpen=!this.catDetails[t].isOpen}}]),t}()).\u0275fac=function(t){return new(t||w)(c.Jb(a.a),c.Jb(o.c),c.Jb(p.d),c.Jb(p.c))},w.\u0275cmp=c.Db({type:w,selectors:[["app-crops-home"]],decls:3,vars:5,consts:[["title","\u4f5c\u7269\u5217\u8868","subtitle","\u7a2e\u5b50/\u5e7c\u82d7\u8cc7\u8a0a",3,"showBackIcon","showCustomIcon","customIcon","customString","onClickCustomIcon"],[1,"container"],[4,"ngFor","ngForOf"],[3,"title","align","showDivider"],["catTemplate",""],[1,"seeds",3,"ngClass"],["class","seed",3,"seed","displayPart","ngClass","routerLink",4,"ngFor","ngForOf"],[1,"expansion",3,"click"],[3,"icon"],[1,"seed",3,"seed","displayPart","ngClass","routerLink"]],template:function(t,n){1&t&&(c.Pb(0,"app-header",0),c.Xb("onClickCustomIcon",(function(){return n.search()})),c.Ob(),c.Pb(1,"section",1),c.rc(2,x,7,8,"div",2),c.Ob()),2&t&&(c.fc("showBackIcon",!1)("showCustomIcon",!0)("customIcon",n.searchIcon)("customString","\u6389\u843d\u7269"),c.zb(2),c.fc("ngForOf",n.catDetails))},directives:[s.a,i.j,l.a,i.i,b.a,m,o.d],pipes:[v],styles:[".cat-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:flex-start}.cat-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}.seeds[_ngcontent-%COMP%], .seeds.active[_ngcontent-%COMP%]{width:100%;display:flex;flex-flow:row wrap;justify-content:space-around;align-content:flex-start;transition:.5s ease-in-out}.seeds.active[_ngcontent-%COMP%]{max-height:1024px}.seeds[_ngcontent-%COMP%]{max-height:0;overflow:hidden}.seed[_ngcontent-%COMP%]{flex:1;width:50%;max-width:212px}.seed.last[_ngcontent-%COMP%]{justify-self:flex-start}.seed[_ngcontent-%COMP%]:hover{opacity:.7;cursor:pointer}div.expansion[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:6px;right:-24px;margin-left:8px;border:0;width:24px;height:24px;line-height:24px;text-align:center;background-color:var(--primary);color:var(--white);border-radius:50%;box-shadow:0 2px 4px 2px rgba(0,0,0,.15)}"]}),w),y=e("kvnP"),M=e("2bwA");function k(t,n){if(1&t&&(c.Pb(0,"div",19),c.Pb(1,"div",10),c.tc(2,"\u719f\u7df4\u5ea6\u9700\u6c42"),c.Ob(),c.Pb(3,"div",20),c.Pb(4,"div",12),c.Pb(5,"div",13),c.Kb(6,"fa-icon",14),c.tc(7," \u884c\u5bb6 "),c.Ob(),c.Pb(8,"span",15),c.tc(9),c.Ob(),c.Pb(10,"span",16),c.tc(11,"\u500b(\u4e0a\u7d1a)"),c.Ob(),c.Ob(),c.Pb(12,"div",12),c.Pb(13,"div",13),c.Kb(14,"fa-icon",14),c.tc(15," \u5c08\u5bb6 "),c.Ob(),c.Pb(16,"span",15),c.tc(17),c.Ob(),c.Pb(18,"span",16),c.tc(19,"\u500b(\u7279\u7d1a)"),c.Ob(),c.Ob(),c.Pb(20,"div",12),c.Pb(21,"div",13),c.Kb(22,"fa-icon",14),c.tc(23," \u9054\u4eba "),c.Ob(),c.Pb(24,"span",15),c.tc(25),c.Ob(),c.Pb(26,"span",16),c.tc(27,"\u500b(\u7279\u7d1a)"),c.Ob(),c.Ob(),c.Pb(28,"div",12),c.Pb(29,"div",13),c.Kb(30,"fa-icon",14),c.tc(31," \u738b "),c.Ob(),c.Pb(32,"span",15),c.tc(33),c.Ob(),c.Pb(34,"span",16),c.tc(35,"\u500b(Real \u788e\u7247)"),c.Ob(),c.Ob(),c.Pb(36,"div",12),c.Pb(37,"div",13),c.Kb(38,"fa-icon",14),c.tc(39," \u795e "),c.Ob(),c.Pb(40,"span",15),c.tc(41),c.Ob(),c.Pb(42,"span",16),c.tc(43,"\u500b(Real \u788e\u7247)"),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t){var e=c.Zb();c.zb(6),c.fc("icon",e.trophyIcon),c.zb(3),c.vc("",e.crop.master.master1," "),c.zb(5),c.fc("icon",e.trophyIcon),c.zb(3),c.vc("",e.crop.master.master2," "),c.zb(5),c.fc("icon",e.trophyIcon),c.zb(3),c.vc("",e.crop.master.master3," "),c.zb(5),c.fc("icon",e.trophyIcon),c.zb(3),c.vc("",e.crop.master.master4," "),c.zb(5),c.fc("icon",e.trophyIcon),c.zb(3),c.vc("",e.crop.master.master5," ")}}function z(t,n){if(1&t&&(c.Pb(0,"div",21),c.Pb(1,"div",10),c.tc(2,"\u5e7c\u82d7"),c.Ob(),c.Pb(3,"div",11),c.Pb(4,"div",12),c.Pb(5,"div",13),c.Kb(6,"fa-icon",14),c.tc(7," \u683d\u57f9\u5929\u6578 "),c.Ob(),c.Pb(8,"span",15),c.tc(9),c.Ob(),c.Pb(10,"span",16),c.tc(11,"\u65e5"),c.Ob(),c.Ob(),c.Pb(12,"div",12),c.Pb(13,"div",13),c.Kb(14,"fa-icon",14),c.tc(15," \u990a\u5206\u9700\u6c42 "),c.Ob(),c.Pb(16,"span",15),c.tc(17),c.Ob(),c.Ob(),c.Pb(18,"div",12),c.Pb(19,"div",13),c.Kb(20,"fa-icon",14),c.tc(21," \u80b2\u82d7\u6750\u6599 "),c.Ob(),c.Kb(22,"img",22),c.Pb(23,"span",23),c.tc(24),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t){var e=c.Zb();c.zb(6),c.fc("icon",e.dayIcon),c.zb(3),c.vc("",e.crop.crop_info.rising_time-e.crop.crop_info.sprout_time," "),c.zb(5),c.fc("icon",e.nutrientIcon),c.zb(3),c.vc("",e.crop.crop_info.seedling_nutrient," "),c.zb(3),c.fc("icon",e.bedSoilIcon),c.zb(2),c.fc("src",e.crop.bed_soil.img,c.nc)("alt",e.crop.bed_soil.name),c.zb(2),c.uc(e.crop.bed_soil.name)}}function I(t,n){1&t&&c.Kb(0,"app-consumable-item",33),2&t&&c.fc("itemName",n.$implicit)("imgWidth",36)}function K(t,n){if(1&t&&(c.Pb(0,"span",34),c.tc(1),c.Ob()),2&t){var e=n.index;c.fc("ngClass",n.$implicit),c.zb(1),c.uc(e+1)}}function F(t,n){if(1&t&&(c.Pb(0,"span",34),c.tc(1),c.Ob()),2&t){var e=n.index;c.fc("ngClass",n.$implicit),c.zb(1),c.uc(e+1)}}function T(t,n){if(1&t&&(c.Pb(0,"span",34),c.tc(1),c.Ob()),2&t){var e=n.index;c.fc("ngClass",n.$implicit),c.zb(1),c.uc(e+1)}}function H(t,n){if(1&t&&(c.Pb(0,"span",34),c.tc(1),c.Ob()),2&t){var e=n.index;c.fc("ngClass",n.$implicit),c.zb(1),c.uc(e+1)}}function j(t,n){if(1&t&&(c.Pb(0,"span",34),c.tc(1),c.Ob()),2&t){var e=n.index;c.fc("ngClass",n.$implicit),c.zb(1),c.uc(e+1)}}function D(t,n){if(1&t&&(c.Pb(0,"div",24),c.Pb(1,"div",10),c.tc(2,"\u57fa\u672c\u8cc7\u8a0a"),c.Ob(),c.Pb(3,"div",11),c.Pb(4,"div",12),c.Pb(5,"div",13),c.Kb(6,"fa-icon",14),c.tc(7," \u4e0a\u7d1a\u6280\u8853\u503c "),c.Ob(),c.Kb(8,"span",25),c.Pb(9,"span",15),c.tc(10),c.Ob(),c.Ob(),c.Pb(11,"div",12),c.Pb(12,"div",13),c.Kb(13,"fa-icon",14),c.tc(14," \u653e\u721b\u6642\u9593 "),c.Ob(),c.Kb(15,"span",25),c.Pb(16,"span",15),c.tc(17),c.Ob(),c.Pb(18,"span",16),c.tc(19," \u5206\u9418 "),c.Ob(),c.Ob(),c.Pb(20,"div",12),c.Pb(21,"div",13),c.Kb(22,"fa-icon",14),c.tc(23," \u57fa\u790e\u7d93\u9a57\u503c "),c.Ob(),c.Kb(24,"span",25),c.Pb(25,"span",15),c.tc(26),c.Ob(),c.Ob(),c.Pb(27,"div",12),c.Pb(28,"div",13),c.Kb(29,"fa-icon",14),c.tc(30," \u4e0a\u7d1a\u552e\u50f9 "),c.Ob(),c.Pb(31,"span",15),c.tc(32),c.ac(33,"number"),c.Ob(),c.Ob(),c.Pb(34,"div",12),c.Pb(35,"div",13),c.Kb(36,"fa-icon",14),c.tc(37," \u8010\u65f1\u5929\u6578 "),c.Ob(),c.Pb(38,"span",15),c.tc(39),c.Ob(),c.Pb(40,"span",16),c.tc(41,"\u65e5"),c.Ob(),c.Ob(),c.Pb(42,"div",12),c.Pb(43,"div",13),c.Kb(44,"fa-icon",14),c.tc(45," \u8010\u6fd5\u5929\u6578 "),c.Ob(),c.Pb(46,"span",15),c.tc(47),c.Ob(),c.Pb(48,"span",16),c.tc(49,"\u65e5"),c.Ob(),c.Ob(),c.Pb(50,"div",12),c.Pb(51,"div",13),c.Kb(52,"fa-icon",14),c.tc(53," \u9069\u5408\u6eab\u5ea6 "),c.Ob(),c.Pb(54,"span",15),c.Pb(55,"span",26),c.tc(56),c.Ob(),c.tc(57," ~ "),c.Pb(58,"span",27),c.tc(59),c.Ob(),c.Ob(),c.Pb(60,"span",16),c.tc(61," \u5ea6"),c.Ob(),c.Ob(),c.Pb(62,"div",12),c.Pb(63,"div",13),c.Kb(64,"fa-icon",14),c.tc(65," \u80b2\u82d7\u5929\u6578 "),c.Ob(),c.Pb(66,"span",15),c.tc(67),c.Ob(),c.Pb(68,"span",16),c.tc(69,"\u65e5"),c.Ob(),c.Ob(),c.Pb(70,"div",12),c.Pb(71,"div",13),c.Kb(72,"fa-icon",14),c.tc(73," \u65e5\u990a\u5206\u9700\u6c42 "),c.Ob(),c.Pb(74,"span",15),c.tc(75),c.Ob(),c.Ob(),c.Pb(76,"div",12),c.Pb(77,"div",13),c.Kb(78,"fa-icon",14),c.tc(79," \u7a2e\u5b50\u50f9\u683c "),c.Ob(),c.Pb(80,"span",15),c.tc(81),c.ac(82,"number"),c.Ob(),c.Ob(),c.Pb(83,"div",28),c.Pb(84,"div",13),c.Kb(85,"fa-icon",14),c.tc(86," \u6389\u843d\u7269 "),c.Ob(),c.Pb(87,"div",29),c.rc(88,I,1,2,"app-consumable-item",30),c.Ob(),c.Ob(),c.Pb(89,"div",31),c.Pb(90,"div",13),c.Kb(91,"fa-icon",14),c.tc(92," \u9069\u5408\u6708\u4efd "),c.Ob(),c.Pb(93,"p"),c.tc(94," \u5ba4\u5916\u7530"),c.Kb(95,"br"),c.rc(96,K,2,2,"span",32),c.Ob(),c.Pb(97,"p"),c.tc(98," \u96a7\u9053\u7db2\u5ba4"),c.Kb(99,"br"),c.rc(100,F,2,2,"span",32),c.Ob(),c.Pb(101,"p"),c.tc(102," \u7db2\u5ba4"),c.Kb(103,"br"),c.rc(104,T,2,2,"span",32),c.Ob(),c.Pb(105,"p"),c.tc(106," \u6eab\u5ba4"),c.Kb(107,"br"),c.rc(108,H,2,2,"span",32),c.Ob(),c.Pb(109,"p"),c.tc(110," \u52a0\u71b1\u6eab\u5ba4"),c.Kb(111,"br"),c.rc(112,j,2,2,"span",32),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t){var e=c.Zb();c.zb(6),c.fc("icon",e.skillIcon),c.zb(4),c.vc(" ",e.crop.crop_info.superior_skill," "),c.zb(3),c.fc("icon",e.durationIcon),c.zb(4),c.vc(" ",e.crop.crop_info.harvest_time," "),c.zb(5),c.fc("icon",e.expIcon),c.zb(4),c.vc(" ",e.crop.crop_info.exp_base," "),c.zb(3),c.fc("icon",e.priceIcon),c.zb(3),c.vc(" $ ",c.cc(33,29,2*e.crop.crop_info.price_base,"1.0-0")," "),c.zb(4),c.fc("icon",e.dryIcon),c.zb(3),c.vc(" ",e.crop.crop_info.dry_days," "),c.zb(5),c.fc("icon",e.wetIcon),c.zb(3),c.vc(" ",e.crop.crop_info.wet_days," "),c.zb(5),c.fc("icon",e.tempIcon),c.zb(4),c.uc(e.crop.crop_info.low_temp),c.zb(3),c.uc(e.crop.crop_info.high_temp),c.zb(5),c.fc("icon",e.risingIcon),c.zb(3),c.vc("",e.crop.crop_info.sprout_time," "),c.zb(5),c.fc("icon",e.nutrientIcon),c.zb(3),c.vc("",e.crop.crop_info.day_nutrient," "),c.zb(3),c.fc("icon",e.priceIcon),c.zb(3),c.vc(" $ ",c.cc(82,32,e.crop.crop_info.seed_cost,"1.0-0")," "),c.zb(4),c.fc("icon",e.dropIcon),c.zb(3),c.fc("ngForOf",e.crop.drops),c.zb(3),c.fc("icon",e.monthIcon),c.zb(5),c.fc("ngForOf",e.openField),c.zb(4),c.fc("ngForOf",e.vinylTunnel),c.zb(4),c.fc("ngForOf",e.vinylHouse),c.zb(4),c.fc("ngForOf",e.greenHouse),c.zb(4),c.fc("ngForOf",e.boilerHouse)}}function L(t,n){if(1&t&&c.Kb(0,"app-consumable-item",39),2&t){var e=c.Zb().$implicit;c.fc("itemName",e)("imgWidth",36)}}function Z(t,n){if(1&t&&c.tc(0),2&t){var e=c.Zb().$implicit;c.vc(" ",e," ")}}function $(t,n){if(1&t&&(c.Pb(0,"span",36),c.rc(1,L,1,2,"app-consumable-item",37),c.rc(2,Z,1,1,"ng-template",null,38,c.sc),c.Ob()),2&t){var e=c.kc(3),i=c.Zb(2);c.fc("ngClass","\u9285\u74dc"===i.crop.name||"\u9280\u74dc"===i.crop.name?"":"text"),c.zb(1),c.fc("ngIf","\u9285\u74dc"===i.crop.name||"\u9280\u74dc"===i.crop.name)("ngIfElse",e)}}function J(t,n){if(1&t&&(c.Pb(0,"div",24),c.Pb(1,"div",10),c.tc(2,"\u57fa\u672c\u8cc7\u8a0a"),c.Ob(),c.Pb(3,"div",11),c.Pb(4,"div",28),c.Pb(5,"div",13),c.Kb(6,"fa-icon",14),c.tc(7," \u6389\u843d\u7269 "),c.Ob(),c.Pb(8,"div",29),c.rc(9,$,4,3,"span",35),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t){var e=c.Zb();c.zb(6),c.fc("icon",e.dropIcon),c.zb(3),c.fc("ngForOf",e.crop.drops)}}var N,R=((N=function(){function t(n,e,i,o,c,a){var p=this;_classCallCheck(this,t),this.ss=n,this.route=e,this.location=i,this.cs=o,this.title=c,this.meta=a,this.durationIcon=r.l,this.expIcon=r.eb,this.skillIcon=r.P,this.priceIcon=r.p,this.trophyIcon=r.ob,this.monthIcon=r.g,this.dayIcon=r.h,this.tempIcon=r.jb,this.nutrientIcon=r.V,this.risingIcon=r.bb,this.dryIcon=r.B,this.wetIcon=r.m,this.dropIcon=r.G,this.bedSoilIcon=r.H,this.route.paramMap.subscribe((function(t){p.seedName=t.get("id");var n=p.ss.searchSeed(p.seedName);p.crop=Object.assign({},n),p.crop.crop_info.seed_nutrient=p.crop.crop_info.rising_time*p.crop.crop_info.day_nutrient,p.crop.crop_info.seedling_nutrient=(p.crop.crop_info.rising_time-p.crop.crop_info.sprout_time)*p.crop.crop_info.day_nutrient,p.updateHTMLHeader()}))}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.openField=[],this.vinylTunnel=[],this.vinylHouse=[],this.greenHouse=[],this.boilerHouse=[];for(var n=0;n<12;n++)this.openField.push(""),this.vinylTunnel.push(""),this.vinylHouse.push(""),this.greenHouse.push(""),this.boilerHouse.push("");this.crop.crop_info.open_field.forEach((function(n){t.openField[n-1]="active"})),this.crop.crop_info.vinyl_tunnel.forEach((function(n){t.vinylTunnel[n-1]="active"})),this.crop.crop_info.vinyl_house.forEach((function(n){t.vinylHouse[n-1]="active"})),this.crop.crop_info.green_house.forEach((function(n){t.greenHouse[n-1]="active"})),this.crop.crop_info.boiler_house.forEach((function(n){t.boilerHouse[n-1]="active"}))}},{key:"updateHTMLHeader",value:function(){this.title.setTitle(this.crop.name+" | \u4f5c\u7269 | RealFarm \u5c0f\u5e6b\u624b"),this.meta.updateTag({name:"description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d".concat(this.crop.name,"\u7684\u8cc7\u8a0a\uff0c\u5305\u62ec\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u3002")}),this.meta.updateTag({name:"apple-mobile-web-app-title",content:this.crop.name+" | \u4f5c\u7269 | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:title",content:this.crop.name+" | \u4f5c\u7269 | RealFarm \u5c0f\u5e6b\u624b"}),this.meta.updateTag({property:"og:description",content:"RealFarm \u760b\u7a2e\u83dc\u4e2d".concat(this.crop.name,"\u7684\u8cc7\u8a0a\uff0c\u5305\u62ec\u7b49\u7d1a\u3001\u6280\u8853\u503c\u3001\u719f\u7df4\u5ea6\u5167\u5bb9\u3001\u990a\u5206\u6d88\u8017\u3001\u7a2e\u690d\u5929\u6578\u3001\u653e\u721b\u5929\u6578\u3001\u6389\u843d\u7269\u3002")}),this.meta.updateTag({property:"og:image",content:"https://bobosheep.github.io/farm-tool/assets/DisplayCrops.jpg"}),this.meta.updateTag({property:"og:url",content:"https://bobosheep.github.io/farm-tool/crops/"+this.crop.name})}},{key:"goBack",value:function(){this.location.back()}}]),t}()).\u0275fac=function(t){return new(t||N)(c.Jb(a.a),c.Jb(o.a),c.Jb(i.g),c.Jb(y.a),c.Jb(p.d),c.Jb(p.c))},N.\u0275cmp=c.Db({type:N,selectors:[["app-crops-detail"]],decls:34,vars:12,consts:[[1,"container"],[1,"title","crop"],[1,"image"],["width","100%",3,"src","alt"],[1,"text-part"],[1,"level"],[1,"right-part"],[1,"back",3,"click"],["class","wrapper red",4,"ngIf"],[1,"wrapper","orange"],[1,"part-name"],[1,"details"],[1,"detail"],[1,"title"],[3,"icon"],[1,"value"],[1,"suffix"],["class","wrapper yellow",4,"ngIf"],["class","wrapper green",4,"ngIf"],[1,"wrapper","red"],["id","master",1,"details"],[1,"wrapper","yellow"],["width","48",2,"vertical-align","top",3,"src","alt"],[1,"suffix",2,"vertical-align","bottom","padding","4px"],[1,"wrapper","green"],[1,"prefix"],[2,"color","var(--info)"],[2,"color","var(--danger)"],["id","drops",1,"detail"],[1,"drops-wrapper"],["class","drop",3,"itemName","imgWidth",4,"ngFor","ngForOf"],["id","fitMonth",1,"detail"],["class","month",3,"ngClass",4,"ngFor","ngForOf"],[1,"drop",3,"itemName","imgWidth"],[1,"month",3,"ngClass"],["class","drop",3,"ngClass",4,"ngFor","ngForOf"],[1,"drop",3,"ngClass"],[3,"itemName","imgWidth",4,"ngIf","ngIfElse"],["dropNameTemplate",""],[3,"itemName","imgWidth"]],template:function(t,n){1&t&&(c.Pb(0,"section",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Kb(3,"img",3),c.Ob(),c.Pb(4,"div",4),c.Pb(5,"span",5),c.tc(6),c.Ob(),c.Pb(7,"div"),c.tc(8),c.Ob(),c.Ob(),c.Pb(9,"div",6),c.Pb(10,"span",7),c.Xb("click",(function(){return n.goBack()})),c.tc(11,"\u56de\u4e0a\u4e00\u9801"),c.Ob(),c.Ob(),c.Ob(),c.rc(12,k,44,10,"div",8),c.Pb(13,"div",9),c.Pb(14,"div",10),c.tc(15,"\u7a2e\u5b50"),c.Ob(),c.Pb(16,"div",11),c.Pb(17,"div",12),c.Pb(18,"div",13),c.Kb(19,"fa-icon",14),c.tc(20," \u683d\u57f9\u5929\u6578 "),c.Ob(),c.Pb(21,"span",15),c.tc(22),c.Ob(),c.Pb(23,"span",16),c.tc(24,"\u65e5"),c.Ob(),c.Ob(),c.Pb(25,"div",12),c.Pb(26,"div",13),c.Kb(27,"fa-icon",14),c.tc(28," \u990a\u5206\u9700\u6c42 "),c.Ob(),c.Pb(29,"span",15),c.tc(30),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.rc(31,z,25,8,"div",17),c.rc(32,D,113,35,"div",18),c.rc(33,J,10,2,"div",18),c.Ob()),2&t&&(c.zb(3),c.fc("src",n.crop.img,c.nc)("alt",n.crop.name+"\u7684\u5716\u7247"),c.zb(3),c.vc(" Lv. ",n.crop.crop_info.level,""),c.zb(2),c.uc(n.seedName),c.zb(4),c.fc("ngIf",n.crop.crop_info.category<7),c.zb(7),c.fc("icon",n.dayIcon),c.zb(3),c.vc("",n.crop.crop_info.rising_time," "),c.zb(5),c.fc("icon",n.nutrientIcon),c.zb(3),c.vc("",n.crop.crop_info.seed_nutrient," "),c.zb(1),c.fc("ngIf",n.crop.crop_info.category<7),c.zb(1),c.fc("ngIf",n.crop.crop_info.category<7),c.zb(1),c.fc("ngIf",9===n.crop.crop_info.category))},directives:[i.k,b.a,i.j,M.a,i.i],pipes:[i.d],styles:[".container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.title.crop[_ngcontent-%COMP%]{margin:12px 8px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.title[_ngcontent-%COMP%]{flex:1}.title[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{margin:4px;width:56px;height:56px;display:flex;align-items:center;border-radius:8px;overflow:hidden;background-color:#feeac7}.title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{background-color:var(--gray);color:var(--white);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:4px;font-size:14px;border-radius:4px}.title[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{text-align:center;margin:4px 8px}.title[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]{font-size:20px;font-weight:600;display:flex;flex-direction:column}.title[_ngcontent-%COMP%] > .right-part[_ngcontent-%COMP%]{flex:1;align-self:flex-start}.back[_ngcontent-%COMP%]{width:58px;padding:4px;color:var(--white);font-size:14px;float:right;justify-self:flex-end;margin-right:16px;border-radius:4px;background-color:var(--secondary)}.wrapper[_ngcontent-%COMP%]{position:relative;width:calc(100% - 26px);margin:8px;border:1px solid var(--black);border-radius:4px;padding:12px 4px 4px}.wrapper[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--black);position:absolute;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:2px 12px;background-color:var(--white);font-size:14px;font-weight:600;top:-8px;left:12px}.wrapper.info[_ngcontent-%COMP%]{border:1px solid var(--info)}.wrapper.info[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--info)}.wrapper.primary[_ngcontent-%COMP%]{border:1px solid var(--primary)}.wrapper.primary[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--primary)}.wrapper.secondary[_ngcontent-%COMP%]{border:1px solid var(--secondary)}.wrapper.secondary[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--secondary)}.wrapper.danger[_ngcontent-%COMP%]{border:1px solid var(--danger)}.wrapper.danger[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--danger)}.wrapper.success[_ngcontent-%COMP%]{border:1px solid var(--success)}.wrapper.success[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--success)}.wrapper.red[_ngcontent-%COMP%]{border:1px solid var(--red)}.wrapper.red[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--red)}.wrapper.orange[_ngcontent-%COMP%]{border:1px solid var(--orange)}.wrapper.orange[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--orange)}.wrapper.yellow[_ngcontent-%COMP%]{border:1px solid var(--yellow)}.wrapper.yellow[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--yellow)}.wrapper.green[_ngcontent-%COMP%]{border:1px solid var(--green)}.wrapper.green[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--green)}.wrapper.blue[_ngcontent-%COMP%]{border:1px solid var(--blue)}.wrapper.blue[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--blue)}.wrapper.dark-blue[_ngcontent-%COMP%]{border:1px solid var(--dark-blue)}.wrapper.dark-blue[_ngcontent-%COMP%]   .part-name[_ngcontent-%COMP%]{color:var(--dark-blue)}.details[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;width:100%}.detail[_ngcontent-%COMP%]{min-width:132px;width:40%;padding:4px auto;margin:14px 12px}.detail[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:var(--white);font-size:16px;padding:4px 12px;margin:4px 2px;font-weight:500;border-radius:16px}.title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding-right:4px}.wrapper.primary[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--primary)}.wrapper.secondary[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--secondary)}.wrapper.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--info)}.wrapper.danger[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--danger)}.wrapper.red[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--red)}.wrapper.orange[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--orange)}.wrapper.yellow[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--yellow)}.wrapper.green[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--green)}.wrapper.blue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--blue)}.wrapper.dark-blue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--dark-blue)}.wrapper.purple[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--purple)}#drops[_ngcontent-%COMP%], #fitMonth[_ngcontent-%COMP%]{flex-grow:1;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.month[_ngcontent-%COMP%]{display:inline-block;margin:1px 2px;width:20px;height:20px;line-height:20px;font-size:12px;text-align:center;border-radius:10px;background-color:var(--gray);color:var(--white)}.month.active[_ngcontent-%COMP%]{background-color:var(--success)}.detail[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:2px;font-size:24px;font-weight:600}#drops[_ngcontent-%COMP%]{margin-bottom:24px}.drops-wrapper[_ngcontent-%COMP%]{display:flex;width:100%;flex-flow:row wrap;justify-content:flex-start}.drop[_ngcontent-%COMP%]{width:36px;height:36px;padding:6px;margin:4px;border-radius:50%;box-shadow:0 2px 8px 4px rgba(0,0,0,.15)}.drop.text[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:auto;border-radius:8px}#master[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{flex:1}.suffix[_ngcontent-%COMP%]{display:inline-block}"]}),N),E=e("3Pt+");function V(t,n){if(1&t&&(c.Pb(0,"div",10),c.tc(1),c.Pb(2,"span",11),c.tc(3),c.Ob(),c.Ob()),2&t){var e=c.Zb().$implicit;c.zb(1),c.vc(" ",e.name," "),c.zb(2),c.vc("Lv. ",e.crop_info.level,"")}}function W(t,n){if(1&t&&(c.Pb(0,"span",14),c.tc(1),c.Ob()),2&t){var e=n.$implicit,i=c.Zb(3);c.fc("ngClass",""!==i.searchValue&&e.search(i.searchValue)>=0?"activate":""),c.zb(1),c.vc(" ",e," ")}}function S(t,n){if(1&t&&(c.Pb(0,"div",12),c.rc(1,W,2,2,"span",13),c.Ob()),2&t){var e=c.Zb().$implicit;c.zb(1),c.fc("ngForOf",e.drops)}}var X=function(t){return["../",t]};function q(t,n){if(1&t&&(c.Pb(0,"app-item-block",7),c.rc(1,V,4,2,"ng-template",null,8,c.sc),c.rc(3,S,2,1,"ng-template",null,9,c.sc),c.Ob()),2&t){var e=n.$implicit,i=c.kc(2),o=c.kc(4);c.fc("title",i)("img_url",e.img)("subtitle",o)("routerLink",c.hc(4,X,e.name))}}var B,A,G,Q=[{path:"",component:C},{path:"search",component:(B=function(){function t(n,e){var i=this;_classCallCheck(this,t),this.ss=n,this.route=e,this.searchIcon=r.ab,this.searchValue="",this.results=[],this.route.queryParams.subscribe((function(t){t.q&&(i.searchValue=t.q,i.search())}))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"search",value:function(){""!==this.searchValue&&(this.results=this.ss.searchDrop(this.searchValue,!0))}}]),t}(),B.\u0275fac=function(t){return new(t||B)(c.Jb(a.a),c.Jb(o.a))},B.\u0275cmp=c.Db({type:B,selectors:[["app-crops-search"]],decls:8,vars:4,consts:[[3,"title"],[1,"input-wrapper"],[1,"input-box"],["type","text",3,"ngModel","ngModelChange"],[1,"icon-button"],[3,"icon"],["routerLinkActive","'activate'",3,"title","img_url","subtitle","routerLink",4,"ngFor","ngForOf"],["routerLinkActive","'activate'",3,"title","img_url","subtitle","routerLink"],["titleTpl",""],["dropsTemplate",""],[1,"title"],[1,"level"],[1,"drops"],["class","drop",3,"ngClass",4,"ngFor","ngForOf"],[1,"drop",3,"ngClass"]],template:function(t,n){1&t&&(c.Kb(0,"app-header",0),c.Pb(1,"section"),c.Pb(2,"div",1),c.Pb(3,"div",2),c.Pb(4,"input",3),c.Xb("ngModelChange",(function(t){return n.searchValue=t}))("ngModelChange",(function(){return n.search()})),c.Ob(),c.Pb(5,"div",4),c.Kb(6,"fa-icon",5),c.Ob(),c.Ob(),c.Ob(),c.rc(7,q,5,6,"app-item-block",6),c.Ob()),2&t&&(c.fc("title","\u641c\u5c0b\u6389\u843d\u7269"),c.zb(4),c.fc("ngModel",n.searchValue),c.zb(2),c.fc("icon",n.searchIcon),c.zb(1),c.fc("ngForOf",n.results))},directives:[s.a,E.b,E.i,E.k,b.a,i.j,d.a,o.e,o.d,i.i],styles:[".input-wrapper[_ngcontent-%COMP%]{width:75%;max-width:256px;margin:12px auto}input[_ngcontent-%COMP%]{flex:1;min-width:64px;border:0;outline:0}.input-box[_ngcontent-%COMP%]{width:100%;border-radius:4px;border:1px solid var(--black);padding:4px;display:flex;align-items:center}.icon-button[_ngcontent-%COMP%]{width:16px;height:16px;font-size:16px}.drops[_ngcontent-%COMP%]{width:100%;padding:0 8px;display:flex;justify-content:center;flex-flow:row wrap}.title[_ngcontent-%COMP%]{font-size:16px;font-weight:600;text-align:center;margin:8px 0;padding:4px 0}.title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{background-color:var(--gray);color:var(--white);padding:2px 4px;font-size:10px;border-radius:4px}.drop[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{display:inline-block;width:-webkit-max-content;width:-moz-max-content;width:max-content}.drop[_ngcontent-%COMP%]{padding:4px 8px;margin:2px 4px;border:1px solid var(--gray);border-radius:4px}.drop.activate[_ngcontent-%COMP%]{border-color:var(--success);color:var(--success)}"]}),B)},{path:":id",component:R}],U=((A=function t(){_classCallCheck(this,t)}).\u0275mod=c.Hb({type:A}),A.\u0275inj=c.Gb({factory:function(t){return new(t||A)},imports:[[i.b,o.g.forChild(Q)]]}),A),Y=e("jICo"),tt=((G=function t(){_classCallCheck(this,t)}).\u0275mod=c.Hb({type:G}),G.\u0275inj=c.Gb({factory:function(t){return new(t||G)},providers:[a.a],imports:[[i.b,U,E.h,Y.a,o.g,b.b]]}),G)}}]);