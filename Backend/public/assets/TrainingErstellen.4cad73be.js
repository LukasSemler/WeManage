import{e as E,Q as h,K as $,a as u,c as f,f as e,b as n,T as _,w as d,u as t,as as y,M as v,N as b,I as r,O as x,aF as U,F,D as M,a5 as B,V as w,aG as z,aH as N,z as k,h as j}from"./vendor.6904d49b.js";import{_ as H}from"./index.68ddbc0c.js";import{r as g}from"./XMarkIcon.7d639b45.js";const P={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},R={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},W={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},Y={class:"p-4"},A={class:"flex items-start"},G={class:"flex-shrink-0"},I=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Erfolgreich hinzugef\xFCgt"),e("p",{class:"mt-1 text-sm text-gray-500"}," Das Training wurde erfolgreich hinzugef\xFCgt. ")],-1),K={class:"ml-4 flex flex-shrink-0"},O=e("span",{class:"sr-only"},"Close",-1),Q={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},X={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},Z={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},q={class:"p-4"},J={class:"flex items-start"},L={class:"flex-shrink-0"},S=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Fehler"),e("p",{class:"mt-1 text-sm text-gray-500"},"Es gab leider einen Fehler beim Erstellen.")],-1),ee={class:"ml-4 flex flex-shrink-0"},te=e("span",{class:"sr-only"},"Close",-1),se={class:"min-h-full"},le={class:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"},oe=e("div",{class:"flex flex-shrink-0 items-center px-6"},[e("img",{class:"h-8 w-auto",src:H,alt:"Your Company"})],-1),ne={class:"mt-6 flex h-0 flex-1 flex-col overflow-y-auto"},ae={class:"mt-6 mb-3 px-3 flex-row"},ie={class:"space-y-1"},de=e("p",{class:"text-2xl font-bold mx-2"},"Back",-1),re={class:"flex flex-col lg:pl-64"},ce={class:"mt-6 mb-3 px-3 flex-row lg:hidden"},me={class:"space-y-1"},ue=e("p",{class:"text-xl font-bold mx-2"},"Back",-1),fe={class:"flex-1"},xe={class:"divide-y divide-gray-200 lg:col-span-9"},ge={class:"py-6 px-4 sm:p-6 lg:pb-8"},pe=e("div",null,[e("h2",{class:"text-lg font-medium leading-6 text-gray-900"},"Training erstellen"),e("p",{class:"mt-1 text-sm text-gray-500"},"Hier kann ein neues Training erstellt werden")],-1),he={class:"mt-6 flex flex-col lg:flex-row"},_e={class:"flex-grow space-y-6"},ye=e("label",{for:"titel",class:"block text-sm font-medium text-gray-700"},"Titel",-1),ve={class:"mt-1 flex rounded-md shadow-sm"},be=e("label",{for:"halle",class:"block text-sm font-medium text-gray-700"},"Halle",-1),we={class:"mt-1 flex rounded-md shadow-sm"},ke={class:"mt-6 grid grid-cols-12 gap-6"},Ve={class:"col-span-12 sm:col-span-4"},Te=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Datum",-1),Ce={class:"col-span-12 sm:col-span-2"},De=e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700"},"Treffpunkt",-1),Ee={class:"col-span-12 sm:col-span-2"},$e=e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700"},"Beginn",-1),Ue={class:"col-span-12 sm:col-span-2"},Fe=e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700"},"Ende",-1),Me={key:0,class:"mt-6 grid grid-cols-12 gap-6"},Be={class:"col-span-12 sm:col-span-4"},ze=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Enddatum",-1),Ne={class:"divide-y divide-gray-200 pt-6 mt-4"},je={class:"px-4 sm:px-6"},He=e("div",null,[e("h2",{class:"text-lg font-medium leading-6 text-gray-900"},"Wiederholen"),e("p",{class:"mt-1 text-sm text-gray-500"}," Wenn das Training w\xF6chentlich wiederholt werden soll, muss ein Endzeitpunkt angegeben werden ")],-1),Pe={role:"list",class:"mt-2 divide-y divide-gray-200"},Re={class:"flex flex-col"},We=j("Wiederholen"),Ye={class:"mt-4 flex justify-end py-4 px-4 sm:px-6"},Oe={setup(Ae){const c=E();let m=h(!1),a=h(!1),l=$({titel:"",halle:"",datum:"",treffpunkt:"",beginn:"",ende:"",wiederholen:!1,endDatum:null});const p=i=>{const s=i.getDate(),o=i.getMonth()+1,D=i.getFullYear();return`${s}.${o}.${D}`};async function V(i){i.preventDefault();try{await M.post("/addTraining",{state:l,m_id:C}),console.log(l),a.value=!0,T(),setTimeout(()=>{a.value=!1},3e3)}catch(s){s.value=!0,setTimeout(()=>s.value=!1,3e3),console.log("Error")}}function T(){l.titel="",l.halle="",l.datum="",l.treffpunkt="",l.beginn="",l.ende="",l.wiederholen=!1,l.endDatum=null}const C=c.currentRoute.value.params.id;return(i,s)=>(u(),f(F,null,[e("div",P,[e("div",R,[n(_,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:d(()=>[t(a)?(u(),f("div",W,[e("div",Y,[e("div",A,[e("div",G,[n(t(B),{class:"h-6 w-6 text-green-400","aria-hidden":"true"})]),I,e("div",K,[e("button",{type:"button",onClick:s[0]||(s[0]=o=>w(a)?a.value=!1:a=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[O,n(t(g),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):x("",!0)]),_:1})])]),e("div",Q,[e("div",X,[n(_,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:d(()=>[t(m)?(u(),f("div",Z,[e("div",q,[e("div",J,[e("div",L,[n(t(g),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),S,e("div",ee,[e("button",{type:"button",onClick:s[1]||(s[1]=o=>w(m)?m.value=!1:m=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[te,n(t(g),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):x("",!0)]),_:1})])]),e("div",se,[e("div",le,[oe,e("div",ne,[e("div",ae,[e("div",ie,[e("div",{onClick:s[2]||(s[2]=o=>t(c).go(-1)),class:"text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"},[n(t(y),{class:"h-10 w-10"}),de])])])])]),e("div",re,[e("div",ce,[e("div",me,[e("div",{onClick:s[3]||(s[3]=o=>t(c).go(-1)),class:"text-gray-900 group flex items-center py-2 text-sm font-medium rounded-md"},[n(t(y),{class:"h-10 w-10"}),ue])])]),e("main",fe,[e("form",xe,[e("div",ge,[pe,e("div",he,[e("div",_e,[e("div",null,[ye,e("div",ve,[v(e("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>t(l).titel=o),type:"text",name:"titel",id:"titel",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"},null,512),[[b,t(l).titel]])])]),e("div",null,[be,e("div",we,[v(e("input",{"onUpdate:modelValue":s[5]||(s[5]=o=>t(l).halle=o),type:"text",name:"halle",id:"helle",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"},null,512),[[b,t(l).halle]])])])])]),e("div",ke,[e("div",Ve,[Te,n(t(r),{id:"date",modelValue:t(l).datum,"onUpdate:modelValue":s[6]||(s[6]=o=>t(l).datum=o),format:p,"model-type":"yyyy-MM-dd"},null,8,["modelValue"])]),e("div",Ce,[De,n(t(r),{modelValue:t(l).treffpunkt,"onUpdate:modelValue":s[7]||(s[7]=o=>t(l).treffpunkt=o),timePicker:"","model-type":"timestamp"},null,8,["modelValue"])]),e("div",Ee,[$e,n(t(r),{modelValue:t(l).beginn,"onUpdate:modelValue":s[8]||(s[8]=o=>t(l).beginn=o),timePicker:""},null,8,["modelValue"])]),e("div",Ue,[Fe,n(t(r),{modelValue:t(l).ende,"onUpdate:modelValue":s[9]||(s[9]=o=>t(l).ende=o),timePicker:""},null,8,["modelValue"])])]),t(l).wiederholen?(u(),f("div",Me,[e("div",Be,[ze,n(t(r),{id:"date",modelValue:t(l).endDatum,"onUpdate:modelValue":s[10]||(s[10]=o=>t(l).endDatum=o),format:p,"auto-position":!1,"model-type":"yyyy-MM-dd"},null,8,["modelValue"])])])):x("",!0)]),e("div",Ne,[e("div",je,[He,e("ul",Pe,[n(t(U),{as:"li",class:"flex items-center justify-between py-4"},{default:d(()=>[e("div",Re,[n(t(z),{as:"p",class:"text-sm font-medium text-gray-900",passive:""},{default:d(()=>[We]),_:1})]),n(t(N),{modelValue:t(l).wiederholen,"onUpdate:modelValue":s[11]||(s[11]=o=>t(l).wiederholen=o),class:k([t(l).wiederholen?"bg-lime-500":"bg-gray-200","relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"])},{default:d(()=>[e("span",{"aria-hidden":"true",class:k([t(l).wiederholen?"translate-x-5":"translate-x-0","inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])},null,2)]),_:1},8,["modelValue","class"])]),_:1})])]),e("div",Ye,[e("button",{onClick:s[12]||(s[12]=o=>t(c).go(-1)),type:"button",class:"inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Abbrechen "),e("button",{onClick:V,type:"submit",class:"ml-5 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Erstellen ")])])])])])])],64))}};export{Oe as default};