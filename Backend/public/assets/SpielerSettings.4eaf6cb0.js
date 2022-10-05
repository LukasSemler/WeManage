import{e as V,Q as w,K as U,o as E,L as N,a as l,c as n,f as e,M as i,N as d,u as s,t as m,O as c,b as x,w as h,a0 as j,F as A,g as S,a1 as L,r as P,a2 as B,z as D,h as M}from"./vendor.7c81a5c5.js";import{P as z}from"./index.48ae226f.js";import{u as F,r as u,e as R,m as k,s as T}from"./index.esm.2fec7fc8.js";const q=S('<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"><h1 class="text-2xl font-bold leading-6 text-gray-900 my-1">Settings</h1></div><div class="px-4 py-4 sm:px-6 lg:px-8"><h1 class="text-xl font-bold leading-6 text-gray-900 my-1">Settings:</h1><p class="font-bold leading-6 text-gray-900 my-1">Hier kannst du deinen Account bearbeiten.</p></div><br>',3),H={class:"divide-y divide-gray-200 lg:col-span-9 flex justify-center"},K={class:"m-5 w-1/2"},O={class:"grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"},Q=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Vorname",-1),W={class:"mt-1"},G={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},I=e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700"},"Nachname",-1),J={class:"mt-1"},X={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},Y={class:"sm:col-span-2"},Z=e("label",{for:"company",class:"block text-sm font-medium text-gray-700"},"Email",-1),ee={class:"mt-1"},se={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},te={class:"sm:col-span-2"},ae=e("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Password",-1),oe={class:"mt-1"},re={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},le={class:"sm:col-span-2"},ne=e("label",{for:"phone",class:"block text-sm font-medium text-gray-700"},"Confirm Password",-1),ie={class:"mt-1"},de={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},me=e("br",null,null,-1),ce=M("W\xE4hlen Sie einen Avatar"),ue={class:"mt-4 flex items-center space-x-3"},pe=["src","alt"],ge=e("hr",null,null,-1),_e={setup(ve){V(),w(!1);const p=z(),v=w("");let f=null;const a=U({vorname:p.getAktivenUser.data.vorname,nachname:p.getAktivenUser.data.nachname,email:p.getAktivenUser.data.email,password:"xxxxxxxx",c_password:"xxxxxxxx"});E(()=>{f=_.find(g=>g.path==p.getAktivenUser.data.avatarpath),v.value=f,console.log(f)});const _=[{name:"Avatar1",path:"/Avatare/Avatar1.png",selectedColor:"ring-lime-500"},{name:"Avatar2",path:"/Avatare/Avatar2.png",selectedColor:"ring-lime-500"},{name:"Avatar3",path:"/Avatare/Avatar3.png",selectedColor:"ring-lime-500"},{name:"Avatar4",path:"/Avatare/Avatar4.png",selectedColor:"ring-lime-500"},{name:"Avatar5",path:"/Avatare/Avatar5.png",selectedColor:"ring-lime-500"},{name:"Avatar6",path:"/Avatare/Avatar6.png",selectedColor:"ring-lime-500"},{name:"Avatar7",path:"/Avatare/Avatar7.png",selectedColor:"ring-lime-500"},{name:"Avatar8",path:"/Avatare/Avatar8.png",selectedColor:"ring-lime-500"},{name:"Avatar9",path:"/Avatare/Avatar9.png",selectedColor:"ring-lime-500"}],$=N(()=>({vorname:{required:u},nachname:{required:u},email:{required:u,email:R},password:{required:u,minLength:k(6)},c_password:{required:u,minLength:k(6),sameAs:T(a.password)}})),r=F($,a);async function C(g){g.preventDefault(),r.value.$silentErrors.length==0||console.log("fehler")}return(g,o)=>(l(),n(A,null,[q,e("form",H,[e("div",K,[e("div",null,[e("div",O,[e("div",null,[Q,e("div",W,[i(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s(a).vorname=t),type:"text",id:"first-name",name:"first-name",autocomplete:"given-name",class:"block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"},null,512),[[d,s(a).vorname]]),s(r).vorname.$invalid?(l(),n("p",G,m(s(r).vorname.$silentErrors[0].$message),1)):c("",!0)])]),e("div",null,[I,e("div",J,[i(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>s(a).nachname=t),type:"text",id:"last-name",name:"last-name",autocomplete:"family-name",class:"block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"},null,512),[[d,s(a).nachname]]),s(r).nachname.$invalid?(l(),n("p",X,m(s(r).nachname.$silentErrors[0].$message),1)):c("",!0)])]),e("div",Y,[Z,e("div",ee,[i(e("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>s(a).email=t),type:"email",name:"email",id:"email",class:"block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"},null,512),[[d,s(a).email]]),s(r).email.$invalid?(l(),n("p",se,m(s(r).email.$silentErrors[0].$message),1)):c("",!0)])]),e("div",te,[ae,e("div",oe,[i(e("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>s(a).password=t),type:"password",name:"password",id:"password",class:"block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"},null,512),[[d,s(a).password]]),s(r).password.$invalid?(l(),n("p",re,m(s(r).password.$silentErrors[0].$message),1)):c("",!0)])]),e("div",le,[ne,e("div",ie,[i(e("input",{"onUpdate:modelValue":o[4]||(o[4]=t=>s(a).c_password=t),type:"password",name:"c_password",id:"c_password",class:"block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"},null,512),[[d,s(a).c_password]]),s(r).c_password.$invalid?(l(),n("p",de,m(s(r).c_password.$silentErrors[0].$message),1)):c("",!0)])])]),me,x(s(j),{modelValue:v.value,"onUpdate:modelValue":o[5]||(o[5]=t=>v.value=t)},{default:h(()=>[x(s(L),{class:"text-base font-medium text-gray-900"},{default:h(()=>[ce]),_:1}),e("div",ue,[(l(),n(A,null,P(_,t=>x(s(B),{as:"template",key:t.name,value:t},{default:h(({active:b,checked:y})=>[e("div",{class:D([t.selectedColor,b&&y?"ring ring-offset-1":"",!b&&y?"ring-2":"","-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none w-14 h-14"])},[e("img",{src:t.path,alt:t.name,class:"h-14 w-14 object-contain"},null,8,pe)],2)]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])])])]),ge,e("div",{class:"flex justify-center"},[e("button",{onClick:C,class:"my-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"}," \xE4ndern ")])],64))}};export{_e as default};
