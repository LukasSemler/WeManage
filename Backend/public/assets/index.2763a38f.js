import{d as L,o as P,a as p,c as h,b as c,u as o,R,e as $,f as e,g as C,h as x,t as w,F as O,r as I,i as _,j as S,k as V,l as D,m as U,n as q,w as u,p as N,q as j,G as g,s as B,v as H,x as M,y,z as k,T as F,J,A as W,B as z,C as G,D as K,E as Q,H as Z,I as X}from"./vendor.6904d49b.js";const Y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerpolicy&&(d.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?d.credentials="include":s.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(s){if(s.ep)return;s.ep=!0;const d=n(s);fetch(s.href,d)}};Y();function E(l){const t=f();(t.aktiverUser!=null||l)&&localStorage.setItem(t.$id,JSON.stringify(t.$state))}const f=L("weManage",{state:()=>({aktiverUser:null,teams:[]}),getters:{getAktivenUser(){return this.aktiverUser},getTeams(){return this.teams},isTrainer(){try{return this.aktiverUser.type==="Trainer"}catch{return!1}},getNamen(){return`${this.aktiverUser.data.vorname} ${this.aktiverUser.data.nachname}`}},actions:{setAktivenUser(l){this.aktiverUser=l,E()},deleteAktivenUser(){this.aktiverUser=null,E(!0)},setMannschaften(l){this.teams=l}}}),ee={setup(l){const t=f();return P(()=>{localStorage.getItem(t.$id)&&(t.$state=JSON.parse(localStorage.getItem(t.$id)))}),(n,r)=>(p(),h("div",null,[c(o(R))]))}},te="modulepreload",T={},se="/",i=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${se}${r}`,r in T)return;T[r]=!0;const s=r.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${d}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":te,s||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),s)return new Promise((b,m)=>{a.addEventListener("load",b),a.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},re={class:"relative overflow-hidden"},ne=C('<div class="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full" aria-hidden="true"><div class="relative mx-auto h-full max-w-7xl"><svg class="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"></rect></svg><svg class="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect></svg></div></div>',1),oe={class:"relative pt-6 pb-16 sm:pb-24"},ae={class:"mx-auto mt-16 max-w-7xl px-4 sm:mt-24"},ie={class:"text-center"},le=e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"},[e("span",{class:"block xl:inline"},"Managen Sie Ihr Team"),x(" "+w(" ")+" "),e("span",{class:"block text-lime-500 xl:inline"},"PERFEKT")],-1),ce=e("p",{class:"mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"}," Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. ",-1),de={class:"mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"},me={class:"rounded-md shadow"},ue={setup(l){const t=$();return(n,r)=>(p(),h("div",re,[ne,e("div",oe,[e("main",ae,[e("div",ie,[le,ce,e("div",de,[e("div",me,[e("a",{onClick:r[0]||(r[0]=s=>o(t).push("/register")),class:"flex w-full items-center justify-center rounded-md border border-transparent bg-lime-500 px-8 py-3 text-base font-medium text-white hover:bg-lime-600 md:py-4 md:px-10 md:text-lg"},"Get started")])])])])])]))}},pe={class:"overflow-hidden"},he={class:"relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8"},_e=e("svg",{class:"absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",width:"404",height:"784",fill:"none",viewBox:"0 0 404 784","aria-hidden":"true"},[e("defs",null,[e("pattern",{id:"8b1b5f72-e944-4457-af67-0c6d15a99f38",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},[e("rect",{x:"0",y:"0",width:"4",height:"4",class:"text-gray-200",fill:"currentColor"})])]),e("rect",{width:"404",height:"784",fill:"url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"})],-1),fe={class:"relative lg:grid lg:grid-cols-3 lg:gap-x-8"},ge=e("div",{class:"lg:col-span-1"},[e("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}," A better way to send money. ")],-1),xe={class:"mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0"},ve={class:"flex h-12 w-12 items-center justify-center rounded-md bg-lime-500 text-white"},be={class:"mt-5 text-lg font-medium leading-6 text-gray-900"},ye={class:"mt-2 text-base text-gray-500"},ke={setup(l){const t=[{name:"Competitive rates",description:"Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.",icon:V},{name:"No hidden fees",description:"Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.",icon:D},{name:"Instant transfers",description:"Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.",icon:U},{name:"Reminder emails",description:"Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",icon:q}];return(n,r)=>(p(),h("div",pe,[e("div",he,[_e,e("div",fe,[ge,e("dl",xe,[(p(),h(O,null,I(t,s=>e("div",{key:s.name},[e("dt",null,[e("div",ve,[(p(),_(S(s.icon),{class:"h-6 w-6","aria-hidden":"true"}))]),e("p",be,w(s.name),1)]),e("dd",ye,w(s.description),1)])),64))])])])]))}};var A="/assets/placeholder_icon.68f4f09d.png";const we={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},$e={class:"relative flex h-16 justify-between"},Ee={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},Te=e("span",{class:"sr-only"},"Open main menu",-1),Ae={class:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},Oe=e("div",{class:"flex flex-shrink-0 items-center"},[e("img",{class:"block h-8 w-auto lg:hidden",src:A,alt:"Workflow"}),e("img",{class:"hidden h-8 w-auto lg:block",src:A,alt:"Workflow"})],-1),Le={class:"hidden sm:ml-6 sm:flex sm:space-x-8"},Pe={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},Re=e("button",{type:"button",class:"rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},null,-1),Ce=e("span",{class:"sr-only"},"Open user menu",-1),Ie=["src"],Se={class:"space-y-1 pt-2 pb-4"},Ve=x("Home"),De=x("Team"),Ue=x("Conatct"),qe={setup(l){const t=f(),n=$();function r(){t.isTrainer?n.push("/homeTrainer"):n.push("/homeSpieler")}function s(){t.deleteAktivenUser(),n.push("/")}return(d,a)=>(p(),_(o(W),{as:"nav",class:"bg-white shadow"},{default:u(({open:b})=>[e("div",we,[e("div",$e,[e("div",Ee,[c(o(g),{class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500"},{default:u(()=>[Te,b?(p(),_(o(j),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(p(),_(o(N),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),e("div",Ae,[Oe,e("div",Le,[e("a",{onClick:a[0]||(a[0]=m=>o(n).push("/")),class:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"},"Home"),e("a",{onClick:a[1]||(a[1]=m=>o(n).push("/aboutus")),class:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"},"Team"),e("a",{onClick:a[2]||(a[2]=m=>o(n).push("/contact")),class:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"},"Contact")])]),e("div",Pe,[Re,o(t).getAktivenUser?(p(),_(o(B),{key:0,as:"div",class:"relative ml-3"},{default:u(()=>[e("div",null,[c(o(H),{class:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},{default:u(()=>[Ce,e("img",{class:"h-8 w-8 rounded-full",src:o(t).getAktivenUser.data.avatarpath,alt:""},null,8,Ie)]),_:1})]),c(F,{class:"z-40","enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:u(()=>[c(o(M),{class:"absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:u(()=>[c(o(y),null,{default:u(({active:m})=>[e("a",{onClick:r,class:k([m?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Zur Software",2)]),_:1}),c(o(y),null,{default:u(({active:m})=>[e("a",{href:"#",class:k([m?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Settings",2)]),_:1}),c(o(y),null,{default:u(({active:m})=>[e("a",{onClick:s,class:k([m?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Sign out",2)]),_:1})]),_:1})]),_:1})]),_:1})):(p(),h("button",{key:1,onClick:a[3]||(a[3]=m=>o(n).push("/login")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Anmelden "))])])]),c(o(J),{class:"sm:hidden"},{default:u(()=>[e("div",Se,[c(o(g),{as:"a",onClick:a[4]||(a[4]=m=>o(n).push("/")),class:"block border-l-4 border-lime-500 bg-lime-50 py-2 pl-3 pr-4 text-base font-medium text-lime-600"},{default:u(()=>[Ve]),_:1}),c(o(g),{as:"a",onClick:a[5]||(a[5]=m=>o(n).push("/aboutus")),class:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"},{default:u(()=>[De]),_:1}),c(o(g),{as:"a",onClick:a[6]||(a[6]=m=>o(n).push("/contact")),class:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"},{default:u(()=>[Ue]),_:1})])]),_:1})]),_:1}))}},Ne=e("br",null,null,-1),je={setup(l){return(t,n)=>(p(),h(O,null,[c(qe),c(ue),Ne,c(ke)],64))}},Be={class:"min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"},He={class:"mx-auto max-w-max"},Me={class:"sm:flex"},Fe=e("p",{class:"text-4xl font-bold tracking-tight text-lime-500 sm:text-5xl"},"404",-1),Je={class:"sm:ml-6"},We=e("div",{class:"sm:border-l sm:border-gray-200 sm:pl-6"},[e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"}," Page not found "),e("p",{class:"mt-1 text-base text-gray-500"}," Please check the URL in the address bar and try again. ")],-1),ze={class:"mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"},Ge={setup(l){const t=$();return(n,r)=>(p(),h("div",Be,[e("div",He,[e("main",Me,[Fe,e("div",Je,[We,e("div",ze,[e("a",{onClick:r[0]||(r[0]=s=>o(t).push("/")),class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},"Go back home"),e("a",{onClick:r[1]||(r[1]=s=>o(t).push("/contact")),class:"inline-flex items-center rounded-md border border-transparent bg-lime-100 px-4 py-2 text-sm font-medium text-lime-600 hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},"Contact support")])])])])]))}},Ke=z({history:G(),routes:[{path:"/",name:"LandingPage",component:je},{path:"/login",name:"Login",component:()=>i(()=>import("./LoginView.3598b009.js"),["assets/LoginView.3598b009.js","assets/vendor.6904d49b.js","assets/index.esm.8126daa0.js"])},{path:"/register",name:"Register",component:()=>i(()=>import("./RegisterView.0ab428a4.js"),["assets/RegisterView.0ab428a4.js","assets/vendor.6904d49b.js","assets/index.esm.8126daa0.js","assets/XMarkIcon.7d639b45.js"])},{path:"/aboutus",name:"AboutUs",component:()=>i(()=>import("./AboutUsView.2dfa7736.js"),["assets/AboutUsView.2dfa7736.js","assets/vendor.6904d49b.js"])},{path:"/contact",name:"Conatct",component:()=>i(()=>import("./ContactView.ab08a699.js"),["assets/ContactView.ab08a699.js","assets/vendor.6904d49b.js","assets/index.esm.8126daa0.js","assets/XMarkIcon.7d639b45.js"])},{path:"/homeTrainer",name:"Home",component:()=>i(()=>import("./HomeViewTrainer.0f2fa5c8.js"),["assets/HomeViewTrainer.0f2fa5c8.js","assets/vendor.6904d49b.js","assets/ChevronUpDownIcon.694187c2.js"]),children:[{path:"",component:()=>i(()=>import("./TrainerHome.3bcee5d3.js"),["assets/TrainerHome.3bcee5d3.js","assets/vendor.6904d49b.js","assets/Kalender_comp.92f8403d.js","assets/Kalender_comp.97662816.css","assets/PlusIcon.3957faee.js"])},{path:"teams",component:()=>i(()=>import("./TrainerKarten.9b4c9a58.js"),["assets/TrainerKarten.9b4c9a58.js","assets/vendor.6904d49b.js","assets/PlusIcon.3957faee.js"])},{path:"settings",component:()=>i(()=>import("./TrainerSettings.dc7234c6.js"),["assets/TrainerSettings.dc7234c6.js","assets/vendor.6904d49b.js"])}],beforeEnter:(l,t,n)=>{const r=f();r.getAktivenUser?r.isTrainer&&n():n("/")}},{path:"/homeSpieler",name:"HomeSpieler",component:()=>i(()=>import("./HomeViewSpieler.3b2f9ecd.js"),["assets/HomeViewSpieler.3b2f9ecd.js","assets/vendor.6904d49b.js","assets/ChevronUpDownIcon.694187c2.js"]),children:[{path:"",component:()=>i(()=>import("./SpielerHome.662c94ee.js"),["assets/SpielerHome.662c94ee.js","assets/vendor.6904d49b.js","assets/Kalender_comp.92f8403d.js","assets/Kalender_comp.97662816.css"])},{path:"teams",component:()=>i(()=>import("./SpielerTeams.701b8246.js"),["assets/SpielerTeams.701b8246.js","assets/vendor.6904d49b.js","assets/PlusIcon.3957faee.js"])},{path:"settings",componen:()=>i(()=>import("./SpielerSettings.b467142f.js"),["assets/SpielerSettings.b467142f.js","assets/vendor.6904d49b.js"])}],beforeEnter:(l,t,n)=>{const r=f();r.getAktivenUser?r.isSpieler||n():n("/")}},{path:"/addTeam",name:"addTeam",component:()=>i(()=>import("./TeamErstellenView.3edb7b32.js"),["assets/TeamErstellenView.3edb7b32.js","assets/vendor.6904d49b.js","assets/index.esm.8126daa0.js"])},{path:"/changeTeam",name:"Change Team",component:()=>i(()=>import("./MannschaftChange.462e640c.js"),["assets/MannschaftChange.462e640c.js","assets/PlusIcon.3957faee.js","assets/vendor.6904d49b.js"])},{path:"/detailMannschaft/:id",name:"Change Team",component:()=>i(()=>import("./MannschaftDetailView.6c10bd8b.js"),["assets/MannschaftDetailView.6c10bd8b.js","assets/vendor.6904d49b.js"]),params:!0,children:[{path:"",component:()=>i(()=>import("./Uebersicht.599e41a1.js"),["assets/Uebersicht.599e41a1.js","assets/vendor.6904d49b.js","assets/MapPinIcon.a4d1a14e.js"])},{path:"ankuendigungen",component:()=>i(()=>import("./ankuendigungen.6c9b020b.js"),["assets/ankuendigungen.6c9b020b.js","assets/vendor.6904d49b.js","assets/TrashIcon.00c64ce3.js","assets/PlusIcon.3957faee.js"])},{path:"trainings",component:()=>i(()=>import("./trainings.f75cdde5.js"),["assets/trainings.f75cdde5.js","assets/vendor.6904d49b.js","assets/Kalender_comp.92f8403d.js","assets/Kalender_comp.97662816.css","assets/MapPinIcon.a4d1a14e.js","assets/PlusIcon.3957faee.js"])},{path:"mitglieder",component:()=>i(()=>import("./Mitglieder.7d89716c.js"),["assets/Mitglieder.7d89716c.js","assets/vendor.6904d49b.js","assets/TrashIcon.00c64ce3.js","assets/XMarkIcon.7d639b45.js"])},{path:"statistik",component:()=>i(()=>import("./UnderConstruction.8e7e21bb.js"),["assets/UnderConstruction.8e7e21bb.js","assets/vendor.6904d49b.js"])},{path:"settings",component:()=>i(()=>import("./UnderConstruction.8e7e21bb.js"),["assets/UnderConstruction.8e7e21bb.js","assets/vendor.6904d49b.js"])}]},{path:"/training/:id",name:"Training",component:()=>i(()=>import("./TrainingDetail.61698f75.js"),["assets/TrainingDetail.61698f75.js","assets/vendor.6904d49b.js","assets/XMarkIcon.7d639b45.js","assets/TrashIcon.00c64ce3.js"]),params:!0},{path:"/trainingerstellen/:id",name:"Training erstellen",component:()=>i(()=>import("./TrainingErstellen.db3018e0.js"),["assets/TrainingErstellen.db3018e0.js","assets/vendor.6904d49b.js","assets/XMarkIcon.7d639b45.js"]),params:!0},{path:"/:pathmatch(.*)*",name:"not-found",component:Ge}]});(location.origin==="http://localhost:8080"||location.origin==="http://localhost:5050")&&(K.defaults.baseURL="http://localhost:2410");const v=Q(ee),Qe=Z();v.use(Qe);v.use(Ke);v.component("Datepicker",X);v.mount("#app");export{f as P,A as _,qe as a};
