import{K as w,ar as K,D as N,a as r,c as o,f as e,b as a,w as l,u as s,a5 as L,S as b,Q as A,T,av as S,F as c,r as m,z as d,aw as $,ax as B,ay as U,O as E,P as M,i as O,as as Q,g as R}from"./vendor.f6fbf43f.js";import{P as q}from"./index.3f9e6472.js";import{r as j}from"./XMarkIcon.93aef592.js";import{r as k}from"./StarIcon.47826697.js";import{r as D}from"./ChevronUpDownIcon.04da6e64.js";import{r as F}from"./CheckIcon.0426d8fc.js";const I={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},J={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},W={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},X={class:"p-4"},Y={class:"flex items-start"},Z={class:"flex-shrink-0"},ee=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Erfolgreich ge\xE4ndert"),e("p",{class:"mt-1 text-sm text-gray-500"}," Dein Gesundheitsstatus wurde erfolgreich ge\xE4ndert. ")],-1),te={class:"ml-4 flex flex-shrink-0"},se=e("span",{class:"sr-only"},"Close",-1),ae={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},le={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},ie={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},re={class:"p-4"},oe={class:"flex items-start"},ne={class:"flex-shrink-0"},de=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Fehler"),e("p",{class:"mt-1 text-sm text-gray-500"},"Leider ist ein Fehler aufgetreten")],-1),ce={class:"ml-4 flex flex-shrink-0"},me=e("span",{class:"sr-only"},"Close",-1),ue={class:"space-y-8 divide-y divide-gray-200 px-4 pb-4 sm:px-6 lg:px-8"},fe={class:"space-y-8 divide-y divide-gray-200 sm:space-y-5"},pe={class:"space-y-6 pt-8 sm:space-y-5 sm:pt-10"},xe={class:"space-y-6 sm:space-y-5"},ge={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"},he=e("label",{for:"email",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Allgemein",-1),ye={class:"mt-1 sm:col-span-1 sm:mt-0"},ve={class:"relative mt-1"},_e={class:"flex items-center"},we={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},be={class:"flex items-center"},ke={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"},Ve=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Ausdauer",-1),Ce={class:"mt-1 sm:col-span-1 sm:mt-0"},Ae={class:"relative mt-1"},Te={class:"flex items-center"},ze={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Se={class:"flex items-center"},$e={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"},Be=e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Kraft",-1),Ue={class:"mt-1 sm:col-span-1 sm:mt-0"},je={class:"relative mt-1"},De={class:"flex items-center"},Fe={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},He={class:"flex items-center"},Ne={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"},Pe=e("label",{for:"postal-code",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Sonstige Beschwerden",-1),Ge={class:"mt-1 sm:col-span-1 sm:mt-0"},Ke=e("div",{class:"flex justify-end"},[e("p",{class:"text-sm text-gray-500 mx-1 mb-1",id:"email-optional"},"Optional")],-1),Le={async setup(P){let V,z;const H=q(),n=[{id:1,rating:5},{id:2,rating:4},{id:3,rating:3},{id:4,rating:2},{id:5,rating:1}];let p=w(n[0]),x=w(n[0]),g=w(n[0]),h=w(""),y=w(!1),v=w(!1);try{const{data:_}=([V,z]=K(()=>N.get(`/spielerHealth/${H.getAktivenUser.data.s_id}`)),V=await V,z(),V);let i=_[0];for(let t=0;t<n.length;t++)n[t].rating===i.allgemein&&(p.value=n[t]),n[t].rating===i.ausdauer&&(x.value=n[t]),n[t].rating===i.kraft&&(g.value=n[t]);h.value=i.sonstige}catch(_){console.log(_)}async function G(_){_.preventDefault();try{await N.patch(`/spielerHealth/${H.getAktivenUser.data.s_id}`,{allg:p.value.rating,ausdauer:x.value.rating,kraft:g.value.rating,sonstige:h.value}),y.value=!0,setTimeout(()=>y.value=!1,3e3)}catch{v.value=!0,setTimeout(()=>v.value=!1,3e3)}}return(_,i)=>(r(),o(c,null,[e("div",I,[e("div",J,[a(T,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[s(y)?(r(),o("div",W,[e("div",X,[e("div",Y,[e("div",Z,[a(s(L),{class:"h-6 w-6 text-green-400","aria-hidden":"true"})]),ee,e("div",te,[e("button",{type:"button",onClick:i[0]||(i[0]=t=>b(y)?y.value=!1:y=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},[se,a(s(j),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):A("",!0)]),_:1})])]),e("div",ae,[e("div",le,[a(T,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[s(v)?(r(),o("div",ie,[e("div",re,[e("div",oe,[e("div",ne,[a(s(j),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),de,e("div",ce,[e("button",{type:"button",onClick:i[1]||(i[1]=t=>b(v)?v.value=!1:v=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},[me,a(s(j),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):A("",!0)]),_:1})])]),e("form",ue,[e("div",fe,[e("div",pe,[e("div",xe,[e("div",ge,[he,e("div",ye,[a(s(U),{as:"div",modelValue:s(p),"onUpdate:modelValue":i[2]||(i[2]=t=>b(p)?p.value=t:p=t)},{default:l(()=>[e("div",ve,[a(s(S),{class:"relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"},{default:l(()=>[e("div",_e,[(r(),o(c,null,m([0,1,2,3,4],t=>a(s(k),{key:t,class:d([s(p).rating>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),e("span",we,[a(s(D),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),a(T,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[a(s($),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(r(),o(c,null,m(n,t=>a(s(B),{as:"template",key:t.id,value:t},{default:l(({active:u,selectedAllg:C})=>[e("li",{class:d([u?"text-white bg-gray-300":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[e("div",be,[(r(),o(c,null,m([0,1,2,3,4],f=>a(s(k),{key:f,class:d([t.rating>f?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),C?(r(),o("span",{key:0,class:d([u?"text-white":"text-lime-500","absolute inset-y-0 right-0 flex items-center pr-4"])},[a(s(F),{class:"h-5 w-5","aria-hidden":"true"})],2)):A("",!0)],2)]),_:2},1032,["value"])),64))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),e("div",ke,[Ve,e("div",Ce,[a(s(U),{as:"div",modelValue:s(x),"onUpdate:modelValue":i[3]||(i[3]=t=>b(x)?x.value=t:x=t)},{default:l(()=>[e("div",Ae,[a(s(S),{class:"relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"},{default:l(()=>[e("div",Te,[(r(),o(c,null,m([0,1,2,3,4],t=>a(s(k),{key:t,class:d([s(x).rating>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),e("span",ze,[a(s(D),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),a(T,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[a(s($),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(r(),o(c,null,m(n,t=>a(s(B),{as:"template",key:t.id,value:t},{default:l(({active:u,selectedAusdauer:C})=>[e("li",{class:d([u?"text-white bg-gray-300":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[e("div",Se,[(r(),o(c,null,m([0,1,2,3,4],f=>a(s(k),{key:f,class:d([t.rating>f?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),C?(r(),o("span",{key:0,class:d([u?"text-white":"text-lime-500","absolute inset-y-0 right-0 flex items-center pr-4"])},[a(s(F),{class:"h-5 w-5","aria-hidden":"true"})],2)):A("",!0)],2)]),_:2},1032,["value"])),64))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),e("div",$e,[Be,e("div",Ue,[a(s(U),{as:"div",modelValue:s(g),"onUpdate:modelValue":i[4]||(i[4]=t=>b(g)?g.value=t:g=t)},{default:l(()=>[e("div",je,[a(s(S),{class:"relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"},{default:l(()=>[e("div",De,[(r(),o(c,null,m([0,1,2,3,4],t=>a(s(k),{key:t,class:d([s(g).rating>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),e("span",Fe,[a(s(D),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),a(T,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[a(s($),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(r(),o(c,null,m(n,t=>a(s(B),{as:"template",key:t.id,value:t},{default:l(({active:u,selectedKraft:C})=>[e("li",{class:d([u?"text-white bg-gray-300":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[e("div",He,[(r(),o(c,null,m([0,1,2,3,4],f=>a(s(k),{key:f,class:d([t.rating>f?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))]),C?(r(),o("span",{key:0,class:d([u?"text-white":"text-lime-500","absolute inset-y-0 right-0 flex items-center pr-4"])},[a(s(F),{class:"h-5 w-5","aria-hidden":"true"})],2)):A("",!0)],2)]),_:2},1032,["value"])),64))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),e("div",Ne,[Pe,e("div",Ge,[Ke,E(e("textarea",{"onUpdate:modelValue":i[5]||(i[5]=t=>b(h)?h.value=t:h=t),placeholder:"Hier kannst du deinen Trainern k\xF6rpleriche Probleme mitteilen",rows:"4",name:"comment",id:"comment",class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"},null,512),[[M,s(h)]])])])])])]),e("div",{class:"pt-5"},[e("div",{class:"flex justify-center"},[e("button",{onClick:G,type:"submit",class:"w-48 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Save ")])])])],64))}},Ee=R('<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"><h1 class="text-2xl font-bold leading-6 text-gray-900 my-1">Gesundheit</h1></div><div class="px-4 pt-5 sm:px-6 lg:px-8"><div><h3 class="text-lg font-medium leading-6 text-gray-900">Gesundheit</h3><p class="mt-1 max-w-2xl text-sm text-gray-500"> Hier kannst du deinen Trainern mitteilen wie es dir k\xF6rperlich geht. Also wie m\xFCde du bist beziehungsweise ob du zu viel Trainiert hast. </p></div></div>',2),Me=e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...",-1),We={setup(P){return(V,z)=>(r(),o(c,null,[Ee,(r(),O(Q,null,{fallback:l(()=>[Me]),default:l(()=>[a(Le)]),_:1}))],64))}};export{We as default};
