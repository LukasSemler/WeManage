import{U as w,o as M,D as S,a as o,c as i,b as a,w as n,u as s,a8 as B,f as e,s as k,F as h,r as m,a9 as L,R,e as V,aa as D,ab as p,ac as N,q as O,z as l,i as C,j as $,h as T,t as u,v as z,ad as E,T as A,x as U,y as x,ae as F,af as P}from"./vendor.81fa8b35.js";import{P as Y,_ as j}from"./index.05f51811.js";const q={class:"min-h-full"},H=e("div",{class:"fixed inset-0 bg-gray-600 bg-opacity-75"},null,-1),K={class:"fixed inset-0 z-40 flex"},G={class:"absolute top-0 right-0 -mr-12 pt-2"},I=e("span",{class:"sr-only"},"Close sidebar",-1),J=e("div",{class:"flex flex-shrink-0 items-center px-4"},[e("img",{class:"h-8 w-auto",src:j,alt:"Your Company"})],-1),Q={class:"mt-5 h-0 flex-1 overflow-y-auto"},W={class:"px-2"},X={class:"space-y-1"},Z=["onClick","aria-current"],ee={class:"mt-8"},te=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"mobile-teams-headline"}," Teams ",-1),se={class:"mt-1 space-y-1",role:"group","aria-labelledby":"mobile-teams-headline"},ae={class:"truncate"},ne=e("div",{class:"w-14 flex-shrink-0","aria-hidden":"true"},null,-1),oe={class:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"},re=e("div",{class:"flex flex-shrink-0 items-center px-6"},[e("img",{class:"h-8 w-auto",src:j,alt:"Your Company"})],-1),le={class:"mt-6 flex h-0 flex-1 flex-col overflow-y-auto"},ie={class:"flex w-full items-center justify-between"},ce={class:"flex min-w-0 items-center justify-between space-x-3"},de=["src"],ue={class:"flex min-w-0 flex-1 flex-col"},fe={class:"truncate text-sm font-medium text-gray-900"},ge={class:"py-1"},he={class:"py-1"},me={class:"mt-6 px-3"},xe={class:"space-y-1"},pe=["onClick","aria-current"],ye={key:0,class:"mt-8"},_e=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"desktop-teams-headline"}," Teams ",-1),ve={class:"mt-1 space-y-1",role:"group","aria-labelledby":"desktop-teams-headline"},be=["onClick"],we={class:"truncate"},ke={key:1,class:""},Ce=e("h1",{class:"text-center my-5 text-gray-500"},"Keine Teams vorhanden",-1),$e=[Ce],Te={class:"flex flex-col lg:pl-64"},ze={class:"sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden"},Ae=e("span",{class:"sr-only"},"Open sidebar",-1),Ue={class:"flex flex-1 justify-between px-4 sm:px-6 lg:px-8"},je=e("div",{class:"flex flex-1"},[e("div",{class:"flex w-full md:ml-0"},[e("div",{class:"relative w-full text-gray-400 focus-within:text-gray-600"})])],-1),Me={class:"flex items-center"},Se=e("span",{class:"sr-only"},"Open user menu",-1),Be=["src"],Le={class:"py-1"},Re={class:"py-1"},Ve={class:"flex-1"},Ee={setup(De){const r=Y(),g=V(),f=w(!1),y=[{name:"Home",icon:F,current:!1,path:"/homeTrainer"},{name:"My teams",icon:P,current:!1,path:"/homeTrainer/teams"}];M(async()=>{try{const{data:c}=await S.get(`/mannschaftenTrainer/${r.getAktivenUser.data.t_id}`);console.log(c),r.setMannschaften(c)}catch{console.log("Es sind noch keine Mannschaften vorhanden")}});function _(){r.deleteAktivenUser(),g.push("/")}function v(c){g.push(c),f.value=!1}return w(g.currentRoute.value.params.id),(c,d)=>(o(),i("div",q,[a(s(B),{as:"template",show:f.value},{default:n(()=>[a(s(D),{as:"div",class:"relative z-40 lg:hidden",onClose:d[1]||(d[1]=t=>f.value=!1)},{default:n(()=>[a(s(p),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[H]),_:1}),e("div",K,[a(s(p),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:n(()=>[a(s(N),{class:"relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"},{default:n(()=>[a(s(p),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[e("div",G,[e("button",{type:"button",class:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:d[0]||(d[0]=t=>f.value=!1)},[I,a(s(O),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),J,e("div",Q,[e("nav",W,[e("div",X,[(o(),i(h,null,m(y,t=>e("a",{key:t.name,onClick:b=>v(t.path),class:l([t.current?"bg-gray-100 text-gray-900":"text-gray-600 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(o(),C($(t.icon),{class:l([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),T(" "+u(t.name),1)],10,Z)),64))]),e("div",ee,[te,e("div",se,[(o(!0),i(h,null,m(s(r).getTeams,t=>(o(),i("a",{key:t.t_id,class:"group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:l("w-2.5 h-2.5 mr-4 rounded-full bg-lime-400 "),"aria-hidden":"true"},null,2),e("span",ae,u(t.titel),1)]))),128))])])])])]),_:1})]),_:1}),ne])]),_:1})]),_:1},8,["show"]),e("div",oe,[re,e("div",le,[a(s(k),{as:"div",class:"relative inline-block px-3 text-left"},{default:n(()=>[e("div",null,[a(s(z),{class:"group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100"},{default:n(()=>[e("span",ie,[e("span",ce,[e("img",{class:"h-10 w-10 flex-shrink-0 rounded-full bg-gray-300",src:s(r).getAktivenUser.data.avatarpath,alt:""},null,8,de),e("span",ue,[e("span",fe,u(s(r).getAktivenUser.data.vorname)+" "+u(s(r).getAktivenUser.data.nachname),1)])]),a(s(E),{class:"h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})])]),_:1})]),a(A,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[a(s(U),{class:"absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[e("div",ge,[a(s(x),null,{default:n(({active:t})=>[e("a",{href:"#",class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Settings",2)]),_:1})]),e("div",he,[a(s(x),null,{default:n(({active:t})=>[e("a",{onClick:_,class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Logout",2)]),_:1})])]),_:1})]),_:1})]),_:1}),e("nav",me,[e("div",xe,[(o(),i(h,null,m(y,t=>e("a",{key:t.name,onClick:b=>v(t.path),class:l([t.current?"bg-gray-200 text-gray-900":"text-gray-700 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-sm font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(o(),C($(t.icon),{class:l([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),T(" "+u(t.name),1)],10,pe)),64))]),s(r).teams.length>0?(o(),i("div",ye,[_e,e("div",ve,[(o(!0),i(h,null,m(s(r).getTeams,t=>(o(),i("a",{key:t.id,onClick:b=>s(g).push(`/detailMannschaft/${t.m_id}`),class:"group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:l("w-2.5 h-2.5 mr-4 rounded-full bg-lime-400"),"aria-hidden":"true"},null,2),e("span",we,u(t.titel),1)],8,be))),128))])])):(o(),i("div",ke,$e))])])]),e("div",Te,[e("div",ze,[e("button",{type:"button",class:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500 lg:hidden",onClick:d[2]||(d[2]=t=>f.value=!0)},[Ae,a(s(L),{class:"h-6 w-6","aria-hidden":"true"})]),e("div",Ue,[je,e("div",Me,[a(s(k),{as:"div",class:"relative ml-3"},{default:n(()=>[e("div",null,[a(s(z),{class:"flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},{default:n(()=>[Se,e("img",{class:"h-8 w-8 rounded-full",src:s(r).getAktivenUser.data.avatarpath,alt:""},null,8,Be)]),_:1})]),a(A,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[a(s(U),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[e("div",Le,[a(s(x),null,{default:n(({active:t})=>[e("a",{class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Settings",2)]),_:1})]),e("div",Re,[a(s(x),null,{default:n(({active:t})=>[e("a",{onClick:_,class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Logout",2)]),_:1})])]),_:1})]),_:1})]),_:1})])])]),e("main",Ve,[a(s(R))])])]))}};export{Ee as default};
