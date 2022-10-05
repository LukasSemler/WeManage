import{e as j,Q as k,o as S,D as B,a as o,c as i,b as a,w as n,u as s,a7 as L,f as e,s as w,F as h,r as m,R,a8 as V,a9 as y,aa as D,q as N,z as l,i as C,j as $,h as T,t as u,v as z,T as A,x as M,y as x,ab as O,ac as E,ad as F}from"./vendor.7c81a5c5.js";import{P,_ as U}from"./index.48ae226f.js";import{r as Y}from"./ChevronUpDownIcon.0d87c1c8.js";const q={class:"min-h-full"},H=e("div",{class:"fixed inset-0 bg-gray-600 bg-opacity-75"},null,-1),K={class:"fixed inset-0 z-40 flex"},Q={class:"absolute top-0 right-0 -mr-12 pt-2"},G=e("span",{class:"sr-only"},"Close sidebar",-1),I=e("div",{class:"flex flex-shrink-0 items-center px-4"},[e("img",{class:"h-8 w-auto",src:U,alt:"Your Company"})],-1),J={class:"mt-5 h-0 flex-1 overflow-y-auto"},W={class:"px-2"},X={class:"space-y-1"},Z=["onClick","aria-current"],ee={class:"mt-8"},te=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"mobile-teams-headline"}," Teams ",-1),se={class:"mt-1 space-y-1",role:"group","aria-labelledby":"mobile-teams-headline"},ae=["onClick"],ne={class:"truncate"},oe=e("div",{class:"w-14 flex-shrink-0","aria-hidden":"true"},null,-1),re={class:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"},le=e("div",{class:"flex flex-shrink-0 items-center px-6"},[e("img",{class:"h-8 w-auto",src:U,alt:"Your Company"})],-1),ie={class:"mt-6 flex h-0 flex-1 flex-col overflow-y-auto"},ce={class:"flex w-full items-center justify-between"},de={class:"flex min-w-0 items-center justify-between space-x-3"},ue=["src"],fe={class:"flex min-w-0 flex-1 flex-col"},ge={class:"truncate text-sm font-medium text-gray-900"},he={class:"py-1"},me={class:"py-1"},xe={class:"mt-6 px-3"},pe={class:"space-y-1"},ye=["onClick","aria-current"],_e={key:0,class:"mt-8"},ve=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"desktop-teams-headline"}," Teams ",-1),be={class:"mt-1 space-y-1",role:"group","aria-labelledby":"desktop-teams-headline"},ke=["onClick"],we={class:"truncate"},Ce={key:1,class:""},$e=e("h1",{class:"text-center my-5 text-gray-500"},"Keine Teams vorhanden",-1),Te=[$e],ze={class:"flex flex-col lg:pl-64"},Ae={class:"sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden"},Me=e("span",{class:"sr-only"},"Open sidebar",-1),Ue={class:"flex flex-1 justify-between px-4 sm:px-6 lg:px-8"},je=e("div",{class:"flex flex-1"},[e("div",{class:"flex w-full md:ml-0"},[e("div",{class:"relative w-full text-gray-400 focus-within:text-gray-600"})])],-1),Se={class:"flex items-center"},Be=e("span",{class:"sr-only"},"Open user menu",-1),Le=["src"],Re={class:"py-1"},Ve={class:"py-1"},De={class:"flex-1"},Pe={setup(Ne){const r=P(),f=j(),g=k(!1),_=[{name:"Home",icon:E,current:!1,path:"/homeTrainer"},{name:"My teams",icon:F,current:!1,path:"/homeTrainer/teams"}];S(async()=>{try{const{data:c}=await B.get(`/mannschaftenTrainer/${r.getAktivenUser.data.t_id}`);console.log(c),r.setMannschaften(c)}catch{console.log("Es sind noch keine Mannschaften vorhanden")}});function v(){r.deleteAktivenUser(),f.push("/")}function b(c){f.push(c),g.value=!1}return k(f.currentRoute.value.params.id),(c,d)=>(o(),i("div",q,[a(s(L),{as:"template",show:g.value},{default:n(()=>[a(s(V),{as:"div",class:"relative z-40 lg:hidden",onClose:d[1]||(d[1]=t=>g.value=!1)},{default:n(()=>[a(s(y),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[H]),_:1}),e("div",K,[a(s(y),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:n(()=>[a(s(D),{class:"relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"},{default:n(()=>[a(s(y),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[e("div",Q,[e("button",{type:"button",class:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:d[0]||(d[0]=t=>g.value=!1)},[G,a(s(N),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),I,e("div",J,[e("nav",W,[e("div",X,[(o(),i(h,null,m(_,t=>e("a",{key:t.name,onClick:p=>b(t.path),class:l([t.current?"bg-gray-100 text-gray-900":"text-gray-600 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(o(),C($(t.icon),{class:l([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),T(" "+u(t.name),1)],10,Z)),64))]),e("div",ee,[te,e("div",se,[(o(!0),i(h,null,m(s(r).getTeams,t=>(o(),i("a",{key:t.t_id,onClick:p=>s(f).push(`/detailMannschaft/${t.m_id}`),class:"group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:l("w-2.5 h-2.5 mr-4 rounded-full bg-lime-400 "),"aria-hidden":"true"},null,2),e("span",ne,u(t.titel),1)],8,ae))),128))])])])])]),_:1})]),_:1}),oe])]),_:1})]),_:1},8,["show"]),e("div",re,[le,e("div",ie,[a(s(w),{as:"div",class:"relative inline-block px-3 text-left"},{default:n(()=>[e("div",null,[a(s(z),{class:"group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100"},{default:n(()=>[e("span",ce,[e("span",de,[e("img",{class:"h-10 w-10 flex-shrink-0 rounded-full bg-gray-300",src:s(r).getAktivenUser.data.avatarpath,alt:""},null,8,ue),e("span",fe,[e("span",ge,u(s(r).getAktivenUser.data.vorname)+" "+u(s(r).getAktivenUser.data.nachname),1)])]),a(s(Y),{class:"h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})])]),_:1})]),a(A,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[a(s(M),{class:"absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[e("div",he,[a(s(x),null,{default:n(({active:t})=>[e("a",{href:"#",class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Settings",2)]),_:1})]),e("div",me,[a(s(x),null,{default:n(({active:t})=>[e("a",{onClick:v,class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Logout",2)]),_:1})])]),_:1})]),_:1})]),_:1}),e("nav",xe,[e("div",pe,[(o(),i(h,null,m(_,t=>e("a",{key:t.name,onClick:p=>b(t.path),class:l([t.current?"bg-gray-200 text-gray-900":"text-gray-700 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-sm font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(o(),C($(t.icon),{class:l([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),T(" "+u(t.name),1)],10,ye)),64))]),s(r).teams.length>0?(o(),i("div",_e,[ve,e("div",be,[(o(!0),i(h,null,m(s(r).getTeams,t=>(o(),i("a",{key:t.id,onClick:p=>s(f).push(`/detailMannschaft/${t.m_id}`),class:"group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:l("w-2.5 h-2.5 mr-4 rounded-full bg-lime-400"),"aria-hidden":"true"},null,2),e("span",we,u(t.titel),1)],8,ke))),128))])])):(o(),i("div",Ce,Te))])])]),e("div",ze,[e("div",Ae,[e("button",{type:"button",class:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500 lg:hidden",onClick:d[2]||(d[2]=t=>g.value=!0)},[Me,a(s(O),{class:"h-6 w-6","aria-hidden":"true"})]),e("div",Ue,[je,e("div",Se,[a(s(w),{as:"div",class:"relative ml-3"},{default:n(()=>[e("div",null,[a(s(z),{class:"flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},{default:n(()=>[Be,e("img",{class:"h-8 w-8 rounded-full",src:s(r).getAktivenUser.data.avatarpath,alt:""},null,8,Le)]),_:1})]),a(A,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[a(s(M),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[e("div",Re,[a(s(x),null,{default:n(({active:t})=>[e("a",{class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Settings",2)]),_:1})]),e("div",Ve,[a(s(x),null,{default:n(({active:t})=>[e("a",{onClick:v,class:l([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Logout",2)]),_:1})])]),_:1})]),_:1})]),_:1})])])]),e("main",De,[a(s(R))])])]))}};export{Pe as default};
