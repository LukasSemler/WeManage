import{P as n}from"./index.79f3ca1a.js";import{e as d,o as c,a as t,c as l,f as e,F as r,r as x,u as i,t as m,z as f}from"./vendor.6904d49b.js";const g=e("div",{class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},[e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-2xl font-bold leading-6 text-gray-900 sm:truncate"},"Teams")]),e("div",{class:"mt-4 flex sm:mt-0 sm:ml-4"})],-1),_={class:"mt-6 px-4 sm:px-6 lg:px-8"},u={role:"list",class:"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},p=e("div",{class:f("flex flex-1 flex-col p-16 rounded-t-lg bg-lime-500")},null,-1),h={class:"flex flex-1 flex-col pb-4"},v={class:"mt-6 text-sm font-medium text-gray-900"},y=e("dl",{class:"mt-1 flex flex-grow flex-col justify-between"},[e("dt",{class:"sr-only"},"Title"),e("dd",{class:"text-sm text-gray-500"},"12 Spieler")],-1),b={class:"-mt-px flex divide-x divide-gray-200"},w={class:"flex w-0 flex-1"},k={class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500 hover:cursor-pointer"},T=["onClick"],F={setup(j){const o=n(),a=d();return c(()=>{console.log(o.getTeams)}),(B,C)=>(t(),l(r,null,[g,e("div",_,[e("ul",u,[(t(!0),l(r,null,x(i(o).getTeams,s=>(t(),l("li",{key:s.id,class:"col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"},[p,e("div",h,[e("h3",v,m(s.titel),1),y]),e("div",null,[e("div",b,[e("div",w,[e("a",k,[e("span",{onClick:S=>i(a).push(`/detailMannschaft/${s.m_id}`),class:"ml-3"},"Details",8,T)])])])])]))),128))])])],64))}};export{F as default};