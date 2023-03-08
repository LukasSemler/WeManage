import{K as k,L as D,M as $,a as c,c as m,b as f,f as e,w as S,T as M,u as t,O as g,P as v,t as w,Q as x,F as L,g as b,a5 as T,S as V,a6 as U,a7 as z,a8 as F}from"./vendor.bde65cd9.js";import{a as B}from"./index.9201f21c.js";import{u as O,r as _,e as R,a as G}from"./index.esm.796fcb28.js";import{r as j}from"./XMarkIcon.346e8e38.js";const y={_origin:"https://api.emailjs.com"},P=(r,s="https://api.emailjs.com")=>{y._userID=r,y._origin=s},C=(r,s,o)=>{if(!r)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class N{constructor(s){this.status=s.status,this.text=s.responseText}}const E=(r,s,o={})=>new Promise((a,u)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:n})=>{const p=new N(n);p.status===200||p.text==="OK"?a(p):u(p)}),i.addEventListener("error",({target:n})=>{u(new N(n))}),i.open("POST",y._origin+r,!0),Object.keys(o).forEach(n=>{i.setRequestHeader(n,o[n])}),i.send(s)}),q=(r,s,o,a)=>{const u=a||y._userID;C(u,r,s);const i={lib_version:"3.7.0",user_id:u,service_id:r,template_id:s,template_params:o};return E("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},Y=r=>{let s;if(typeof r=="string"?s=document.querySelector(r):s=r,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},H=(r,s,o,a)=>{const u=a||y._userID,i=Y(o);C(u,r,s);const n=new FormData(i);return n.append("lib_version","3.7.0"),n.append("service_id",r),n.append("template_id",s),n.append("user_id",u),E("/api/v1.0/email/send-form",n)};var I={init:P,send:q,sendForm:H};const K={"aria-live":"assertive",class:"fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-40"},J={class:"w-full flex flex-col items-center space-y-4 sm:items-end"},X={key:0,class:"max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"},Q={class:"p-4"},W={class:"flex items-start"},Z={class:"flex-shrink-0"},ee=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Successfully Sent!"),e("p",{class:"mt-1 text-sm text-gray-500"},"You sent successfully the message")],-1),te={class:"ml-4 flex-shrink-0 flex"},se=e("span",{class:"sr-only"},"Close",-1),ae={"aria-live":"assertive",class:"fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-40"},ie={class:"w-full flex flex-col items-center space-y-4 sm:items-end"},le={key:0,class:"max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"},re={class:"p-4"},oe={class:"flex items-start"},ne={class:"flex-shrink-0"},de=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Error"),e("p",{class:"mt-1 text-sm text-gray-500"}," There was an error when sending your message ")],-1),ce={class:"ml-4 flex-shrink-0 flex"},me=e("span",{class:"sr-only"},"Close",-1),ue={class:"bg-white"},he={class:"overflow-hidden"},fe=b('<div class="bg-white"><div class="py-24 lg:py-32"><div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8"><h1 class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl"> Kontaktiere uns </h1><p class="mt-6 text-xl text-warm-gray-500 max-w-3xl"> Sollte es Probleme, Bugs oder sonstiges geben, bitte nicht scheuen uns hier zu kontaktieren. Wir Danken f\xFCr jede Nachricht! </p></div></div></div>',1),pe={class:"relative bg-white","aria-labelledby":"contact-heading"},xe=b('<div class="absolute w-full h-1/2 bg-white" aria-hidden="true"></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><svg class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true"><defs><pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-warm-gray-300" fill="currentColor"></rect></pattern></defs><rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"></rect></svg></div>',2),ge={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ve={class:"relative bg-white shadow-xl"},we=e("h2",{id:"contact-heading",class:"sr-only"},"Kontaktiere uns",-1),_e={class:"grid grid-cols-1 lg:grid-cols-3"},ye={class:"relative overflow-hidden py-10 px-6 bg-gradient-to-b from-lime-500 to-lime-600 sm:px-10 xl:p-12"},be=b('<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true"><svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1"></path><defs><linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs></svg></div><div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true"><svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1"></path><defs><linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs></svg></div><div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true"><svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1"></path><defs><linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs></svg></div><h3 class="text-lg font-medium text-white">Kontakt Informationen</h3>',4),ke={class:"mt-8 space-y-6"},$e=e("dt",null,[e("span",{class:"sr-only"},"Phone number")],-1),Se={class:"flex text-base text-lime-50"},Me=e("span",{class:"ml-3"},"+43 650 2821919",-1),Ve=e("dt",null,[e("span",{class:"sr-only"},"Email")],-1),je={class:"flex text-base text-lime-50"},Ne=e("span",{class:"ml-3"},"wemanage.service@gmail.com",-1),Ce=e("ul",{role:"list",class:"mt-8 flex space-x-12"},[e("li",null,[e("a",{class:"text-lime-200 hover:text-lime-100",href:"#"},[e("span",{class:"sr-only"},"Facebook"),e("svg",{class:"w-7 h-7","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"})])])]),e("li",null,[e("a",{class:"text-lime-200 hover:text-lime-100",href:"#"},[e("span",{class:"sr-only"},"GitHub"),e("svg",{class:"w-7 h-7","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})])])]),e("li",null,[e("a",{class:"text-lime-200 hover:text-lime-100",href:"#"},[e("span",{class:"sr-only"},"Twitter"),e("svg",{class:"w-7 h-7","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})])])])],-1),Ee={class:"py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"},Ae=e("h3",{class:"text-lg font-medium text-warm-gray-900"},"Sende uns eine Nachricht",-1),De={class:"mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"},Le=e("label",{for:"first-name",class:"block text-sm font-medium text-warm-gray-900"},"Vorname",-1),Te={class:"mt-1"},Ue={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},ze=e("label",{for:"last-name",class:"block text-sm font-medium text-warm-gray-900"},"Nachname",-1),Fe={class:"mt-1"},Be={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},Oe=e("label",{for:"email",class:"block text-sm font-medium text-warm-gray-900"},"Email",-1),Re={class:"mt-1"},Ge={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},Pe=e("div",{class:"flex justify-between"},[e("label",{for:"phone",class:"block text-sm font-medium text-warm-gray-900"},"Telefonnummer"),e("span",{id:"phone-optional",class:"text-sm text-warm-gray-500"},"Optional")],-1),qe={class:"mt-1"},Ye={key:0},He={class:"sm:col-span-2"},Ie=e("label",{for:"subject",class:"block text-sm font-medium text-warm-gray-900"},"Grund",-1),Ke={class:"mt-1"},Je={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},Xe={class:"sm:col-span-2"},Qe=e("div",{class:"flex justify-between"},[e("label",{for:"message",class:"block text-sm font-medium text-warm-gray-900"},"Nachricht"),e("span",{id:"message-max",class:"text-sm text-warm-gray-500"},"Max. 500 Zeichen")],-1),We={class:"mt-1"},Ze={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},et={class:"sm:col-span-2 sm:flex sm:justify-end"},tt=["disabled"],st=["disabled"],ot={setup(r){let s=k(!1),o=k(!1),a=D({vorname:"",nachname:"",emailAddr:"",telNr:null,betreff:"",nachricht:""});const u=$(()=>({vorname:{required:_},nachname:{required:_},emailAddr:{required:_,email:R},telNr:{},betreff:{required:_},nachricht:{required:_,maxLength:G(500)}})),i=O(u,a);async function n(h){h.preventDefault();try{i.value.$validate(),i.value.$error?console.log("Fehler"):(a.date=A(),(await I.send("service_bzg4w98","template_8z7r5fc",{vorname:a.vorname,nachname:a.nachname,email:a.emailAddr,telnr:a.telNr,grund:a.betreff,nachricht:a.nachricht},"CP9kubXi0pj5bbIY8")).status==200?s.value=!0:(s.value=!1,o.value=!0)),h.preventDefault()}catch(l){h.preventDefault(),console.log(l.message)}finally{h.preventDefault()}}const p=$(()=>i.value.$invalid==!0);function A(){let h=new Date;return`${h.getFullYear()}-0${h.getMonth()+1}-${h.getDate()}`}return(h,l)=>(c(),m(L,null,[f(B),e("div",K,[e("div",J,[f(M,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:S(()=>[t(s)?(c(),m("div",X,[e("div",Q,[e("div",W,[e("div",Z,[f(t(T),{class:"h-6 w-6 text-green-400","aria-hidden":"true"})]),ee,e("div",te,[e("button",{onClick:l[0]||(l[0]=d=>V(s)?s.value=!1:s=!1),class:"bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"},[se,f(t(j),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):x("",!0)]),_:1})])]),e("div",ae,[e("div",ie,[f(M,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:S(()=>[t(o)?(c(),m("div",le,[e("div",re,[e("div",oe,[e("div",ne,[f(t(U),{class:"h-6 w-6 text-red-500","aria-hidden":"true"})]),de,e("div",ce,[e("button",{onClick:l[1]||(l[1]=d=>V(o)?o.value=!1:o=!1),class:"bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"},[me,f(t(j),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):x("",!0)]),_:1})])]),e("div",ue,[e("main",he,[fe,e("section",pe,[xe,e("div",ge,[e("div",ve,[we,e("div",_e,[e("div",ye,[be,e("dl",ke,[$e,e("dd",Se,[f(t(z),{class:"flex-shrink-0 w-6 h-6 text-lime-200","aria-hidden":"true"}),Me]),Ve,e("dd",je,[f(t(F),{class:"flex-shrink-0 w-6 h-6 text-lime-200","aria-hidden":"true"}),Ne])]),Ce]),e("div",Ee,[Ae,e("form",De,[e("div",null,[Le,e("div",Te,[g(e("input",{"onUpdate:modelValue":l[2]||(l[2]=d=>t(a).vorname=d),type:"text",name:"first-name",id:"first-name",autocomplete:"given-name",class:"py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-lime-500 focus:border-lime-500 border-warm-gray-300 rounded-md"},null,512),[[v,t(a).vorname]]),t(i).vorname.$invalid?(c(),m("p",Ue,w(t(i).vorname.$silentErrors[0].$message),1)):x("",!0)])]),e("div",null,[ze,e("div",Fe,[g(e("input",{"onUpdate:modelValue":l[3]||(l[3]=d=>t(a).nachname=d),type:"text",name:"last-name",id:"last-name",autocomplete:"family-name",class:"py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-lime-500 focus:border-lime-500 border-warm-gray-300 rounded-md"},null,512),[[v,t(a).nachname]]),t(i).nachname.$invalid?(c(),m("p",Be,w(t(i).nachname.$silentErrors[0].$message),1)):x("",!0)])]),e("div",null,[Oe,e("div",Re,[g(e("input",{"onUpdate:modelValue":l[4]||(l[4]=d=>t(a).emailAddr=d),id:"email",name:"email",type:"email",autocomplete:"email",class:"py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-lime-500 focus:border-lime-500 border-warm-gray-300 rounded-md"},null,512),[[v,t(a).emailAddr]]),t(i).emailAddr.$invalid?(c(),m("p",Ge,w(t(i).emailAddr.$silentErrors[0].$message),1)):x("",!0)])]),e("div",null,[Pe,e("div",qe,[g(e("input",{"onUpdate:modelValue":l[5]||(l[5]=d=>t(a).telNr=d),type:"text",name:"phone",id:"phone",autocomplete:"tel",class:"py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-lime-500 focus:border-lime-500 border-warm-gray-300 rounded-md","aria-describedby":"phone-optional"},null,512),[[v,t(a).telNr]]),t(i).telNr.$invalid?(c(),m("span",Ye,w(t(i).telNr.$silentErrors[0].$message),1)):x("",!0)])]),e("div",He,[Ie,e("div",Ke,[g(e("input",{"onUpdate:modelValue":l[6]||(l[6]=d=>t(a).betreff=d),type:"text",name:"subject",id:"subject",class:"py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-lime-500 focus:border-lime-500 border-warm-gray-300 rounded-md"},null,512),[[v,t(a).betreff]]),t(i).betreff.$invalid?(c(),m("p",Je,w(t(i).betreff.$silentErrors[0].$message),1)):x("",!0)])]),e("div",Xe,[Qe,e("div",We,[g(e("textarea",{"onUpdate:modelValue":l[7]||(l[7]=d=>t(a).nachricht=d),id:"message",name:"message",rows:"4",class:"py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-lime-500 focus:border-lime-500 border border-warm-gray-300 rounded-md","aria-describedby":"message-max"},null,512),[[v,t(a).nachricht]]),t(i).nachricht.$invalid?(c(),m("p",Ze,w(t(i).nachricht.$silentErrors[0].$message),1)):x("",!0)])]),e("div",et,[t(p)?(c(),m("button",{key:1,disabled:t(p),class:"mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 sm:w-auto"}," Senden... ",8,st)):(c(),m("button",{key:0,disabled:t(p),onClick:n,class:"mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 sm:w-auto"}," Submit ",8,tt))])])])])])])])])])],64))}};export{ot as default};
