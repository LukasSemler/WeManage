import{a as l,c as d,f as e,e as A,K as M,L as T,M as C,b as u,w as U,u as t,a6 as S,S as z,Q as _,T as D,O as v,P as y,t as $,F as N,g as F,D as V,i as j,h as H}from"./vendor.bde65cd9.js";import{P as E}from"./index.9201f21c.js";import{r as p,u as B}from"./index.esm.796fcb28.js";import{r as J}from"./XMarkIcon.346e8e38.js";function L(b,a){return l(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"})])}function P(b,a){return l(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"})])}const R={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},Z={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},q={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},K={class:"p-4"},O={class:"flex items-start"},Q={class:"flex-shrink-0"},G=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Fehler"),e("p",{class:"mt-1 text-sm text-gray-500"}," Entweder du bist dieser Mannschaft schon beigetreten oder es gibt diese Mannschaft nicht ")],-1),I={class:"ml-4 flex flex-shrink-0"},W=e("span",{class:"sr-only"},"Close",-1),X=F('<div class="mt-4 md:flex md:items-center md:justify-between"><div class="min-w-0 flex-1"><h2 class="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"> Team erstellen oder Beitreten </h2><p class="text-gray-900 sm:truncate sm:text-md sm:tracking-tight mt-3"> Hier kannst du einem vorhanden Team beitreten, indem du den Zugangscode eingibst, oder ein neues erstellen. </p></div></div><br><br><br><p class="text-2xl font-bold">Vorhandenen Team Beitreten:</p><br>',6),Y={class:"space-y-8 divide-y divide-gray-200 p-4 rounded-md shadow-lg"},ee={class:"space-y-8 divide-y divide-gray-200 sm:space-y-5"},te={class:"space-y-6 sm:space-y-5"},se={class:"space-y-6 sm:space-y-5"},oe={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5"},ie=e("label",{for:"titel",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Code:",-1),ne={class:"mt-1 sm:col-span-2 sm:mt-0"},re={class:"flex max-w-lg rounded-md shadow-sm"},ae={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},le={class:"pt-5"},de={class:"flex justify-end"},ce=e("br",null,null,-1),me=e("br",null,null,-1),ue=e("br",null,null,-1),fe=e("br",null,null,-1),he=e("p",{class:"text-2xl font-bold"},"Neues Team erstellen:",-1),ge=e("br",null,null,-1),pe={class:"space-y-8 divide-y divide-gray-200 p-4 rounded-md shadow-lg"},xe={class:"space-y-8 divide-y divide-gray-200 sm:space-y-5"},_e={class:"space-y-6 sm:space-y-5"},ve={class:"space-y-6 sm:space-y-5"},ye={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5"},be=e("label",{for:"titel",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Titel:",-1),we={class:"mt-1 sm:col-span-2 sm:mt-0"},ke={class:"flex max-w-lg rounded-md shadow-sm"},$e={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},Te={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"},Ce=e("label",{for:"about",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Beschreibung",-1),Be={class:"mt-1 sm:col-span-2 sm:mt-0"},Ve=e("p",{class:"mt-2 text-sm text-gray-500"},"Schreibe eine kurze Beschreibung",-1),Ae={class:"sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"},Ee=e("label",{for:"photo",class:"block text-sm font-medium text-gray-700"},"Farbe",-1),je={class:"mt-1 sm:col-span-2 sm:mt-0"},Me={class:"flex items-center"},Ue={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},Se={class:"pt-5"},ze={class:"flex justify-end"},De={setup(b){const a=A(),f=E();let n=M(!1),o=T({titel:"",beschreibung:"",farbe:"#A629E6"}),m=T({code:""});const h=C(()=>({titel:{required:p},farbe:{required:p}})),x=C(()=>({code:{required:p}})),r=B(h,o),i=B(x,m);async function g(k){if(k.preventDefault(),r.value.$silentErrors.length==0)try{const s=await V.post("/addTeam",{titel:o.titel,beschreibung:o.beschreibung,farbe:o.farbe,t_id:f.getAktivenUser.data.t_id});console.log(s),s.status==200&&a.push("/homeTrainer")}catch(s){console.log(s.message)}else console.log("fehler")}async function w(k){if(k.preventDefault(),i.value.$silentErrors.length==0)try{(await V.post("/tJoinTeam",{zugangscode:m.code,t_id:f.getAktivenUser.data.t_id})).status==200&&a.push("/homeTrainer")}catch(s){console.log(s.message),n.value=!0,m.code="",setTimeout(()=>{n.value=!1},3e3)}else console.log("fehler")}return(k,s)=>(l(),d(N,null,[e("div",R,[e("div",Z,[u(D,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:U(()=>[t(n)?(l(),d("div",q,[e("div",K,[e("div",O,[e("div",Q,[u(t(S),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),G,e("div",I,[e("button",{type:"button",onClick:s[0]||(s[0]=c=>z(n)?n.value=!1:n=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},[W,u(t(J),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):_("",!0)]),_:1})])]),X,e("form",Y,[e("div",ee,[e("div",te,[e("div",se,[e("div",oe,[ie,e("div",ne,[e("div",re,[v(e("input",{"onUpdate:modelValue":s[1]||(s[1]=c=>t(m).code=c),type:"text",name:"titel",id:"titel",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"},null,512),[[y,t(m).code]])]),t(i).code.$invalid?(l(),d("p",ae,$(t(i).code.$silentErrors[0].$message),1)):_("",!0)])])])])]),e("div",le,[e("div",de,[e("button",{onClick:s[2]||(s[2]=c=>t(a).push("/homeTrainer")),type:"button",class:"rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Cancel "),e("button",{onClick:w,type:"submit",class:"ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Beitreten ")])])]),ce,me,ue,fe,he,ge,e("form",pe,[e("div",xe,[e("div",_e,[e("div",ve,[e("div",ye,[be,e("div",we,[e("div",ke,[v(e("input",{"onUpdate:modelValue":s[3]||(s[3]=c=>t(o).titel=c),type:"text",name:"titel",id:"titel",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"},null,512),[[y,t(o).titel]])]),t(r).titel.$invalid?(l(),d("p",$e,$(t(r).titel.$silentErrors[0].$message),1)):_("",!0)])]),e("div",Te,[Ce,e("div",Be,[v(e("textarea",{id:"about","onUpdate:modelValue":s[4]||(s[4]=c=>t(o).beschreibung=c),name:"about",rows:"3",class:"block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"},null,512),[[y,t(o).beschreibung]]),Ve])]),e("div",Ae,[Ee,e("div",je,[e("div",Me,[v(e("input",{class:"rounded-md","onUpdate:modelValue":s[5]||(s[5]=c=>t(o).farbe=c),type:"color",id:"head",name:"head"},null,512),[[y,t(o).farbe]]),t(r).farbe.$invalid?(l(),d("p",Ue,$(t(r).farbe.$silentErrors[0].$message),1)):_("",!0)])])])])])]),e("div",Se,[e("div",ze,[e("button",{onClick:s[6]||(s[6]=c=>t(a).push("/homeTrainer")),type:"button",class:"rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Cancel "),e("button",{onClick:g,type:"submit",class:"ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Add ")])])])],64))}},Ne={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},Fe={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},Je={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},He={class:"p-4"},Le={class:"flex items-start"},Pe={class:"flex-shrink-0"},Re=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Fehler"),e("p",{class:"mt-1 text-sm text-gray-500"}," Entweder du bist dieser Mannschaft schon beigetreten oder es gibt diese Mannschaft nicht ")],-1),Ze={class:"ml-4 flex flex-shrink-0"},qe=e("span",{class:"sr-only"},"Close",-1),Ke=F('<div class="mt-4 md:flex md:items-center md:justify-between"><div class="min-w-0 flex-1"><h2 class="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"> Team Beitreten </h2><p class="text-gray-900 sm:truncate sm:text-md sm:tracking-tight mt-3"> Hier kannst du einem Team beitreten, indem du den Zugangscode eingibst. Diesen bekommst du von deinem Trainer </p></div></div><br><br><br><p class="text-2xl font-bold">Vorhandenen Team Beitreten:</p><br>',6),Oe={class:"space-y-8 divide-y divide-gray-200 p-4 rounded-md shadow-lg"},Qe={class:"space-y-8 divide-y divide-gray-200 sm:space-y-5"},Ge={class:"space-y-6 sm:space-y-5"},Ie={class:"space-y-6 sm:space-y-5"},We={class:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5"},Xe=e("label",{for:"titel",class:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"},"Code:",-1),Ye={class:"mt-1 sm:col-span-2 sm:mt-0"},et={class:"flex max-w-lg rounded-md shadow-sm"},tt={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},st={class:"pt-5"},ot={class:"flex justify-end"},it={setup(b){const a=A(),f=E();let n=M(!1),o=T({titel:""});const m=C(()=>({titel:{required:p}})),h=B(m,o);async function x(r){if(r.preventDefault(),h.value.$silentErrors.length==0)try{(await V.post("/sJoinTeam",{zugangscode:o.titel,s_id:f.getAktivenUser.data.s_id})).status==200&&a.push("/homeSpieler")}catch(i){console.log(i.message),n.value=!0,o.titel="",setTimeout(()=>{n.value=!1},3e3)}else console.log("fehler")}return(r,i)=>(l(),d(N,null,[e("div",Ne,[e("div",Fe,[u(D,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:U(()=>[t(n)?(l(),d("div",Je,[e("div",He,[e("div",Le,[e("div",Pe,[u(t(S),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),Re,e("div",Ze,[e("button",{type:"button",onClick:i[0]||(i[0]=g=>z(n)?n.value=!1:n=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},[qe,u(t(J),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):_("",!0)]),_:1})])]),Ke,e("form",Oe,[e("div",Qe,[e("div",Ge,[e("div",Ie,[e("div",We,[Xe,e("div",Ye,[e("div",et,[v(e("input",{"onUpdate:modelValue":i[1]||(i[1]=g=>t(o).titel=g),type:"text",name:"titel",id:"titel",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"},null,512),[[y,t(o).titel]])]),t(h).titel.$invalid?(l(),d("p",tt,$(t(h).titel.$silentErrors[0].$message),1)):_("",!0)])])])])]),e("div",st,[e("div",ot,[e("button",{onClick:i[2]||(i[2]=g=>t(a).push("/homeSpieler")),type:"button",class:"rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Cancel "),e("button",{onClick:x,type:"submit",class:"ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Beitreten ")])])])],64))}},nt={class:"m-12"},rt={class:"sm:hidden","aria-label":"Back"},at=H(" Back "),lt={class:"hidden sm:flex","aria-label":"Breadcrumb"},dt={role:"list",class:"flex items-center space-x-4"},ct={class:"flex"},mt={class:"flex items-center"},ut=e("a",{class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},"Team erstellen oder beitreten",-1),xt={setup(b){const a=A(),f=E();let n=T({titel:"",beschreibung:"",farbe:"#A629E6",zugangscode:m(6)});const o=C(()=>({titel:{required:p},farbe:{required:p},zugangscode:{required:p}}));B(o,n);function m(x){for(var r="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=i.length,w=0;w<x;w++)r+=i.charAt(Math.floor(Math.random()*g));return r}function h(){f.getAktivenUser.type=="Trainer"?a.push("/homeTrainer"):a.push("/homeSpieler")}return(x,r)=>(l(),d("div",nt,[e("div",null,[e("nav",rt,[e("a",{onClick:h,class:"flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"},[u(t(L),{class:"-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),at])]),e("nav",lt,[e("ol",dt,[e("li",null,[e("div",ct,[e("a",{onClick:r[0]||(r[0]=i=>t(a).push("/homeTrainer")),class:"text-sm font-medium text-gray-500 hover:text-gray-700"},"Home")])]),e("li",null,[e("div",mt,[u(t(P),{class:"h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),ut])])])])]),t(f).getAktivenUser.type=="Trainer"?(l(),j(De,{key:0})):(l(),j(it,{key:1}))]))}};export{xt as default};