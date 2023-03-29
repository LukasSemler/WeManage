import{e as U,K as k,o as j,D as L,a as r,c as i,b as a,w as n,u as s,aa as B,f as e,s as w,F as h,r as m,R,ab as V,ac as y,ad as D,q as N,z as l,i as C,j as $,h as T,t as u,v as z,T as A,x as M,y as x,ae as O,af as E,ag as F,ah as K,ai as P}from"./vendor.f6fbf43f.js";import{P as Y,_ as S}from"./index.be12a39d.js";import{r as q}from"./ChevronUpDownIcon.04da6e64.js";const H={class:"min-h-full"},G=e("div",{class:"fixed inset-0 bg-gray-600 bg-opacity-75"},null,-1),I={class:"fixed inset-0 z-40 flex"},J={class:"absolute top-0 right-0 -mr-12 pt-2"},Q=e("span",{class:"sr-only"},"Close sidebar",-1),W=e("div",{class:"flex flex-shrink-0 items-center px-4"},[e("img",{class:"h-8 w-auto",src:S,alt:"Your Company"})],-1),X={class:"mt-5 h-0 flex-1 overflow-y-auto"},Z={class:"px-2"},ee={class:"space-y-1"},te=["onClick","aria-current"],se={class:"mt-8"},ae=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"mobile-teams-headline"}," Teams ",-1),ne={class:"mt-1 space-y-1",role:"group","aria-labelledby":"mobile-teams-headline"},re=["onClick"],oe={class:"truncate"},le=e("div",{class:"w-14 flex-shrink-0","aria-hidden":"true"},null,-1),ie={class:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"},ce=e("div",{class:"flex flex-shrink-0 items-center px-6"},[e("img",{class:"h-8 w-auto",src:S,alt:"Your Company"})],-1),de={class:"mt-6 flex h-0 flex-1 flex-col overflow-y-auto"},ue={class:"flex w-full items-center justify-between"},fe={class:"flex min-w-0 items-center justify-between space-x-3"},ge=["src"],he={class:"flex min-w-0 flex-1 flex-col"},me={class:"truncate text-sm font-medium text-gray-900"},xe={class:"py-1"},pe={class:"py-1"},ye={class:"mt-6 px-3"},_e={class:"space-y-1"},ve=["onClick","aria-current"],be={key:0,class:"mt-8"},ke=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"desktop-teams-headline"}," Teams ",-1),we={class:"mt-1 space-y-1",role:"group","aria-labelledby":"desktop-teams-headline"},Ce=["onClick"],$e={class:"truncate"},Te={key:1,class:""},ze=e("h1",{class:"text-center my-5 text-gray-500"},"Keine Teams vorhanden",-1),Ae=[ze],Me={class:"flex flex-col lg:pl-64"},Se={class:"sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden"},Ue=e("span",{class:"sr-only"},"Open sidebar",-1),je={class:"flex flex-1 justify-between px-4 sm:px-6 lg:px-8"},Le=e("div",{class:"flex flex-1"},[e("div",{class:"flex w-full md:ml-0"},[e("div",{class:"relative w-full text-gray-400 focus-within:text-gray-600"})])],-1),Be={class:"flex items-center"},Re=e("span",{class:"sr-only"},"Open user menu",-1),Ve=["src"],De={class:"py-1"},Ne={class:"py-1"},Oe={class:"flex-1"},Ye={setup(Ee){const o=Y(),f=U(),g=k(!1),_=[{name:"Home",icon:E,current:!1,path:"/homeTrainer"},{name:"My teams",icon:F,current:!1,path:"/homeTrainer/teams"},{name:"Log Training",icon:K,current:!1,path:"/homeTrainer/logTraining"},{name:"Settings",icon:P,current:!1,path:"/homeTrainer/settings"}];j(async()=>{try{const{data:c}=await L.get(`/mannschaftenTrainer/${o.getAktivenUser.data.t_id}`);console.log(c),o.setMannschaften(c)}catch{console.log("Es sind noch keine Mannschaften vorhanden")}});function v(){o.deleteAktivenUser(),f.push("/")}function b(c){f.push(c),g.value=!1}return k(f.currentRoute.value.params.id),(c,d)=>(r(),i("div",H,[a(s(B),{as:"template",show:g.value},{default:n(()=>[a(s(V),{as:"div",class:"relative z-40 lg:hidden",onClose:d[1]||(d[1]=t=>g.value=!1)},{default:n(()=>[a(s(y),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[G]),_:1}),e("div",I,[a(s(y),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:n(()=>[a(s(D),{class:"relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"},{default:n(()=>[a(s(y),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[e("div",J,[e("button",{type:"button",class:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:d[0]||(d[0]=t=>g.value=!1)},[Q,a(s(N),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),W,e("div",X,[e("nav",Z,[e("div",ee,[(r(),i(h,null,m(_,t=>e("a",{key:t.name,onClick:p=>b(t.path),class:l([t.current?"bg-gray-100 text-gray-900":"text-gray-600 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(r(),C($(t.icon),{class:l([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),T(" "+u(t.name),1)],10,te)),64))]),e("div",se,[ae,e("div",ne,[(r(!0),i(h,null,m(s(o).getTeams,t=>(r(),i("a",{key:t.t_id,onClick:p=>s(f).push(`/detailMannschaft/${t.m_id}`),class:"group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:l("w-2.5 h-2.5 mr-4 rounded-full bg-lime-400 "),"aria-hidden":"true"},null,2),e("span",oe,u(t.titel),1)],8,re))),128))])])])])]),_:1})]),_:1}),le])]),_:1})]),_:1},8,["show"]),e("div",ie,[ce,e("div",de,[a(s(w),{as:"div",class:"relative inline-block px-3 text-left"},{default:n(()=>[e("div",null,[a(s(z),{class:"group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100"},{default:n(()=>[e("span",ue,[e("span",fe,[e("img",{class:"h-10 w-10 flex-shrink-0 rounded-full bg-gray-300",src:s(o).getAktivenUser.data.avatarpath,alt:""},null,8,ge),e("span",he,[e("span",me,u(s(o).getAktivenUser.data.vorname)+" "+u(s(o).getAktivenUser.data.nachname),1)])]),a(s(q),{class:"h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})])]),_:1})]),a(A,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[a(s(M),{class:"absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[e("div",xe,[a(s(x),null,{default:n(({active:t})=>[e("a",{href:"#",class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Settings",2)]),_:1})]),e("div",pe,[a(s(x),null,{default:n(({active:t})=>[e("a",{onClick:v,class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Logout",2)]),_:1})])]),_:1})]),_:1})]),_:1}),e("nav",ye,[e("div",_e,[(r(),i(h,null,m(_,t=>e("a",{key:t.name,onClick:p=>b(t.path),class:l([t.current?"bg-gray-200 text-gray-900":"text-gray-700 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-sm font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(r(),C($(t.icon),{class:l([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),T(" "+u(t.name),1)],10,ve)),64))]),s(o).teams.length>0?(r(),i("div",be,[ke,e("div",we,[(r(!0),i(h,null,m(s(o).getTeams,t=>(r(),i("a",{key:t.id,onClick:p=>s(f).push(`/detailMannschaft/${t.m_id}`),class:"group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:l("w-2.5 h-2.5 mr-4 rounded-full bg-lime-400"),"aria-hidden":"true"},null,2),e("span",$e,u(t.titel),1)],8,Ce))),128))])])):(r(),i("div",Te,Ae))])])]),e("div",Me,[e("div",Se,[e("button",{type:"button",class:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500 lg:hidden",onClick:d[2]||(d[2]=t=>g.value=!0)},[Ue,a(s(O),{class:"h-6 w-6","aria-hidden":"true"})]),e("div",je,[Le,e("div",Be,[a(s(w),{as:"div",class:"relative ml-3"},{default:n(()=>[e("div",null,[a(s(z),{class:"flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},{default:n(()=>[Re,e("img",{class:"h-8 w-8 rounded-full",src:s(o).getAktivenUser.data.avatarpath,alt:""},null,8,Ve)]),_:1})]),a(A,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[a(s(M),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[e("div",De,[a(s(x),null,{default:n(({active:t})=>[e("a",{class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Settings",2)]),_:1})]),e("div",Ne,[a(s(x),null,{default:n(({active:t})=>[e("a",{onClick:v,class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Logout",2)]),_:1})])]),_:1})]),_:1})]),_:1})])])]),e("main",Oe,[a(s(R))])])]))}};export{Ye as default};
