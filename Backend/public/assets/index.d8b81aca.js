import{d as v,o as E,a as d,c as h,b as T,u as l,R as L,e as m,f as P,g as x,h as A,i as O,j as R,k as b,l as y}from"./vendor.82e95389.js";const I=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};I();function p(s){const r=c();(r.aktiverUser!=null||s)&&localStorage.setItem(r.$id,JSON.stringify(r.$state))}const c=v("weManage",{state:()=>({aktiverUser:null,teams:[]}),getters:{getAktivenUser(){return this.aktiverUser},getTeams(){return this.teams},isTrainer(){try{return this.aktiverUser.type==="Trainer"}catch{return!1}},getNamen(){return`${this.aktiverUser.data.vorname} ${this.aktiverUser.data.nachname}`}},actions:{setAktivenUser(s){this.aktiverUser=s,p()},deleteAktivenUser(){this.aktiverUser=null,p(!0)},setMannschaften(s){this.teams=s}}}),k={setup(s){const r=c();return E(()=>{localStorage.getItem(r.$id)&&(r.$state=JSON.parse(localStorage.getItem(r.$id)))}),(n,t)=>(d(),h("div",null,[T(l(L))]))}},V="modulepreload",u={},D="/",e=function(r,n){return!n||n.length===0?r():Promise.all(n.map(t=>{if(t=`${D}${t}`,t in u)return;u[t]=!0;const o=t.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${i}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":V,o||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),o)return new Promise((f,g)=>{a.addEventListener("load",f),a.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())};const S={class:"min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"},U={class:"mx-auto max-w-max"},$={class:"sm:flex"},w=m("p",{class:"text-4xl font-bold tracking-tight text-lime-500 sm:text-5xl"},"404",-1),C={class:"sm:ml-6"},N=m("div",{class:"sm:border-l sm:border-gray-200 sm:pl-6"},[m("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"}," Page not found "),m("p",{class:"mt-1 text-base text-gray-500"}," Please check the URL in the address bar and try again. ")],-1),H={class:"mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"},M={setup(s){const r=P();return(n,t)=>(d(),h("div",S,[m("div",U,[m("main",$,[w,m("div",C,[N,m("div",H,[m("a",{onClick:t[0]||(t[0]=o=>l(r).push("/")),class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},"Go back home"),m("a",{onClick:t[1]||(t[1]=o=>l(r).push("/contact")),class:"inline-flex items-center rounded-md border border-transparent bg-lime-100 px-4 py-2 text-sm font-medium text-lime-600 hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},"Contact support")])])])])]))}};const B=x({history:A(),routes:[{path:"/",name:"LandingPage",component:e(()=>import("./LandingPageView.3f50002c.js"),["assets/LandingPageView.3f50002c.js","assets/vendor.82e95389.js","assets/NavbarComp.7d648286.js","assets/placeholder_icon.6ad39fa9.js"])},{path:"/login",name:"Login",component:e(()=>import("./LoginView.a0f403f6.js"),["assets/LoginView.a0f403f6.js","assets/vendor.82e95389.js","assets/placeholder_icon.6ad39fa9.js"])},{path:"/register",name:"Register",component:e(()=>import("./RegisterView.8c87f6ff.js"),["assets/RegisterView.8c87f6ff.js","assets/vendor.82e95389.js","assets/placeholder_icon.6ad39fa9.js"])},{path:"/aboutus",name:"AboutUs",component:e(()=>import("./AboutUsView.fc758a09.js"),["assets/AboutUsView.fc758a09.js","assets/NavbarComp.7d648286.js","assets/vendor.82e95389.js","assets/placeholder_icon.6ad39fa9.js"])},{path:"/contact",name:"Conatct",component:e(()=>import("./ContactView.c8cf0125.js"),["assets/ContactView.c8cf0125.js","assets/vendor.82e95389.js","assets/NavbarComp.7d648286.js","assets/placeholder_icon.6ad39fa9.js"])},{path:"/homeTrainer",name:"Home",component:e(()=>import("./HomeViewTrainer.4c36323c.js"),["assets/HomeViewTrainer.4c36323c.js","assets/vendor.82e95389.js","assets/placeholder_icon.6ad39fa9.js"]),children:[{path:"",component:e(()=>import("./TrainerHome.b6a45be0.js"),["assets/TrainerHome.b6a45be0.js","assets/vendor.82e95389.js","assets/Kalender_comp.fd78198f.js"])},{path:"teams",component:e(()=>import("./TrainerKarten.bc3d76b2.js"),["assets/TrainerKarten.bc3d76b2.js","assets/vendor.82e95389.js"])},{path:"settings",component:e(()=>import("./TrainerSettings.4e3709df.js"),["assets/TrainerSettings.4e3709df.js","assets/vendor.82e95389.js"])}],beforeEnter:(s,r,n)=>{const t=c();t.getAktivenUser?t.isTrainer&&n():n("/")}},{path:"/homeSpieler",name:"HomeSpieler",component:e(()=>import("./HomeViewSpieler.d8a1a4bf.js"),["assets/HomeViewSpieler.d8a1a4bf.js","assets/vendor.82e95389.js","assets/placeholder_icon.6ad39fa9.js"]),children:[{path:"",component:e(()=>import("./SpielerHome.f912e2f8.js"),["assets/SpielerHome.f912e2f8.js","assets/vendor.82e95389.js","assets/Kalender_comp.fd78198f.js"])},{path:"teams",component:e(()=>import("./SpielerTeams.76aa2ba7.js"),["assets/SpielerTeams.76aa2ba7.js","assets/vendor.82e95389.js"])},{path:"settings",componen:e(()=>import("./SpielerSettings.ef480e32.js"),["assets/SpielerSettings.ef480e32.js","assets/vendor.82e95389.js"])}],beforeEnter:(s,r,n)=>{const t=c();t.getAktivenUser?t.isSpieler||n():n("/")}},{path:"/addTeam",name:"addTeam",component:e(()=>import("./TeamErstellenView.f3c37856.js"),["assets/TeamErstellenView.f3c37856.js","assets/vendor.82e95389.js"])},{path:"/changeTeam",name:"Change Team",component:e(()=>import("./MannschaftChange.fcce0a1a.js"),["assets/MannschaftChange.fcce0a1a.js","assets/vendor.82e95389.js"])},{path:"/detailMannschaft/:id",name:"Change Team",component:e(()=>import("./MannschaftDetailView.3de63a7e.js"),["assets/MannschaftDetailView.3de63a7e.js","assets/placeholder_icon.6ad39fa9.js","assets/vendor.82e95389.js"]),params:!0,children:[{path:"",component:e(()=>import("./Uebersicht.66b8f592.js"),["assets/Uebersicht.66b8f592.js","assets/vendor.82e95389.js"])},{path:"ankuendigungen",component:e(()=>import("./ankuendigungen.cb6f9f33.js"),["assets/ankuendigungen.cb6f9f33.js","assets/vendor.82e95389.js"])},{path:"trainings",component:e(()=>import("./trainings.947e7e5f.js"),["assets/trainings.947e7e5f.js","assets/vendor.82e95389.js","assets/Kalender_comp.fd78198f.js"])},{path:"mitglieder",component:e(()=>import("./Mitglieder.e40b153c.js"),["assets/Mitglieder.e40b153c.js","assets/vendor.82e95389.js"])},{path:"statistik",component:e(()=>import("./UnderConstruction.16b6b2b8.js"),["assets/UnderConstruction.16b6b2b8.js","assets/vendor.82e95389.js"])},{path:"settings",component:e(()=>import("./UnderConstruction.16b6b2b8.js"),["assets/UnderConstruction.16b6b2b8.js","assets/vendor.82e95389.js"])}]},{path:"/training/:id",name:"Training",component:e(()=>import("./TrainingDetail.d8c1d8e0.js"),["assets/TrainingDetail.d8c1d8e0.js","assets/vendor.82e95389.js"]),params:!0},{path:"/trainingerstellen/:id",name:"Training erstellen",component:e(()=>import("./TrainingErstellen.6d2d4312.js"),["assets/TrainingErstellen.6d2d4312.js","assets/vendor.82e95389.js","assets/placeholder_icon.6ad39fa9.js"]),params:!0},{path:"/:pathmatch(.*)*",name:"not-found",component:M}]});(location.origin==="http://localhost:8080"||location.origin==="http://localhost:5050")&&(O.defaults.baseURL="http://localhost:2410");const _=R(k),J=b();_.use(J);_.use(B);_.component("Datepicker",y);_.mount("#app");export{c as P};
