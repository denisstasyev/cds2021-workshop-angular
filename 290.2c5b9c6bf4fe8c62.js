"use strict";(self.webpackChunkcds2021_workshop_angular=self.webpackChunkcds2021_workshop_angular||[]).push([[290],{290:(f,a,c)=>{c.r(a),c.d(a,{DetailsModule:()=>h});var l=c(19),s=c(26),o=c(556);let r=(()=>{class t{constructor(){this.locationList=[{id:1,name:"Location One",description:"Safe place",city:"Chicago"},{id:2,name:"Location Two",description:"Safe place",city:"Chicago"},{id:3,name:"Location Three",description:"Safe place",city:"Chicago"}]}getLocations(){return this.locationList}getLocationById(n){for(let i=0;i<this.locationList.length;i++)if(this.locationList[i].id===n)return this.locationList[i]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,e){if(1&t&&(o.TgZ(0,"section"),o.TgZ(1,"p"),o._uU(2),o.qZA(),o.TgZ(3,"h2"),o._uU(4,"About this location:"),o.qZA(),o.TgZ(5,"p"),o._uU(6),o.qZA(),o.qZA()),2&t){const n=o.oxw();o.xp6(2),o.AsE("",n.location.name,", ",n.location.city,""),o.xp6(4),o.hij(" ",n.location.description," ")}}const u=[{path:"",component:(()=>{class t{constructor(n,i){this.route=n,this.locationService=i,this.selectedLocationId=-1}ngOnInit(){this.route.params.subscribe(n=>{this.selectedLocationId=+n.id,this.location=this.locationService.getLocationById(this.selectedLocationId)})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(s.gz),o.Y36(r))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-details"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(n,i){1&n&&o.YNc(0,p,7,3,"section",0),2&n&&o.Q6J("ngIf",i.location)},directives:[l.O5],styles:["section[_ngcontent-%COMP%]{padding:10px}section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-of-type(1){font-size:20pt;margin-bottom:20px}h2[_ngcontent-%COMP%]{font-weight:bold}section[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:nth-of-type(2){font-size:10pt;font-weight:normal}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[l.ez,d]]}),t})()}}]);