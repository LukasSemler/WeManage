import{P as q}from"./index.bb07a464.js";import{a as i,c,f as e,e as F,K as h,ay as H,D as C,b as s,w as a,u as t,a5 as ee,Q as g,q as D,P as O,T as V,a8 as E,a9 as $,aa as M,aA as te,aB as R,a7 as U,N as K,O as P,F as A,r as W,t as m,v as se,x as ae,y as ne,z as oe,s as le,h as L,g as Q,i as S,az as ie}from"./vendor.28678742.js";import{r as re}from"./TrashIcon.89a2bafe.js";import{r as de}from"./PlusIcon.d50016af.js";function ce(b,u){return i(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"})])}const ue={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},me={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},fe={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},he={class:"p-4"},xe={class:"flex items-start"},_e={class:"flex-shrink-0"},pe=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Error"),e("p",{class:"mt-1 text-sm text-gray-500"}," Leider ist ein Fehler aufgetreten, probier es nochmal oder kontaktiere unseren Support ")],-1),ge={class:"ml-4 flex flex-shrink-0"},ve=e("span",{class:"sr-only"},"Close",-1),ye=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),we={class:"fixed inset-0 z-10 overflow-y-auto"},be={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},ke={class:"sm:flex sm:items-start"},$e={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},Ce={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Ae=L("Beitrag l\xF6schen"),Be=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"}," Bist du dir sicher? Wenn du den Beitrag l\xF6scht, kann dieser nicht mehr hergestellt werden. ")],-1),Ne={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},ze=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Se={class:"fixed inset-0 overflow-hidden"},Le={class:"absolute inset-0 overflow-hidden"},Te={class:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},je={class:"flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"},De={class:"h-0 flex-1 overflow-y-auto"},Ve={class:"bg-lime-500 py-6 px-4 sm:px-6"},Ee={class:"flex items-center justify-between"},Me=L("Neue Ank\xFCndigung"),Re={class:"ml-3 flex h-7 items-center"},Ue=e("span",{class:"sr-only"},"Close panel",-1),Ke=e("div",{class:"mt-1"},[e("p",{class:"text-sm text-white"}," Hier kannst du eine neue Ank\xFCndigung posten. Diese ist f\xFCr alle Spieler sichtbar. ")],-1),Pe={class:"flex flex-1 flex-col justify-between"},qe={class:"divide-y divide-gray-200 px-4 sm:px-6"},Fe={class:"space-y-6 pt-6 pb-5"},He=e("label",{for:"titel",class:"block text-sm font-medium text-gray-900"},"Titel",-1),Oe={class:"mt-1"},We=e("label",{for:"message",class:"block text-sm font-medium text-gray-900"},"Nachricht",-1),Qe={class:"mt-1"},Ge={class:"bg-white px-4 py-6 sm:px-6"},Ie={class:"flex space-x-3"},Je={class:"flex-shrink-0"},Xe=["src"],Ye={class:"min-w-0 flex-1"},Ze={class:"text-sm font-medium text-gray-900"},et={class:"hover:underline"},tt={class:"text-sm text-gray-500"},st={class:"hover:underline"},at={class:"bg-gray-100 px-5 mt-4 py-5 rounded-md shadow-md lg:mr-16 w-auto"},nt={class:"flex flex-rows items-center"},ot={class:"font-bold mr-12 w-full"},lt=e("div",{class:"ml-5 w-11/12"},null,-1),it=e("span",{class:"sr-only"},"Open options",-1),rt={class:"py-1"},dt=["onClick"],ct=e("span",null,"Delete",-1),ut={class:"mt-3"},mt={key:1},ft=Q('<div class="bg-white"><div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"><div class="text-center"><p class="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl"> Keine Ank\xFCndigungen vorhanden </p><p class="mx-auto mt-5 max-w-xl text-xl text-gray-500"> Es sind noch keine Ank\xFCndigungen vorhanden, wenn du eine Erstellen willst, klicke rechts oben auf den Knopf &quot;Ank\xFCndigung erstellen&quot; </p></div></div></div>',1),ht=[ft],xt={props:{add:Boolean},emits:["sidebar"],async setup(b,{emit:u}){let r,_;const k=q(),x=F(),f=h(x.currentRoute.value.params.id);let v=h(!1),o=h(!1),B=null,y=h(""),w=h(""),p=h([]);try{const{data:d}=([r,_]=H(()=>C.get(`/getNews/${f.value}`)),r=await r,_(),r);console.log(d),p.value=d}catch(d){console.log(d)}async function G(d){d.preventDefault();let l=new Date,n=l.getDate(),z=l.toLocaleString("de-de",{month:"long"}),T=l.toLocaleString("de-de",{year:"numeric"}),X=l.getHours(),Y=l.getMinutes();const Z=`${n}. ${z} ${T} um ${X}:${Y}`,j=await C.post("/postNews",{titel:y.value,nachricht:w.value,dateTime:Z,m_id:f.value,t_id:k.getAktivenUser.data.t_id});console.log(j),p.value.push(j.data);//! open.value = false;
N()}function I(d){o.value=!0,B=d}async function J(){p.value=p.value.filter(d=>d.n_id!=B.n_id);try{await C.delete(`/delNews/${B.n_id}`),o.value=!1}catch(d){console.log(d)}}function N(){u("sidebar",!1)}return(d,l)=>(i(),c(A,null,[e("div",ue,[e("div",me,[s(V,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[t(v)?(i(),c("div",fe,[e("div",he,[e("div",xe,[e("div",_e,[s(t(ee),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),pe,e("div",ge,[e("button",{type:"button",onClick:l[0]||(l[0]=n=>g(v)?v.value=!1:v=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[ve,s(t(D),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):O("",!0)]),_:1})])]),s(t(U),{as:"template",show:t(o)},{default:a(()=>[s(t(E),{as:"div",class:"relative z-10",onClose:l[2]||(l[2]=n=>g(o)?o.value=!1:o=!1)},{default:a(()=>[s(t($),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[ye]),_:1}),e("div",we,[e("div",be,[s(t($),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[s(t(M),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:a(()=>[e("div",ke,[e("div",$e,[s(t(te),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),e("div",Ce,[s(t(R),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:a(()=>[Ae]),_:1}),Be])]),e("div",Ne,[e("button",{type:"button",class:"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",onClick:J}," L\xF6schen "),e("button",{type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",onClick:l[1]||(l[1]=n=>g(o)?o.value=!1:o=!1),ref:"cancelButtonRef"}," Cancel ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]),s(t(U),{as:"template",show:b.add},{default:a(()=>[s(t(E),{as:"div",class:"relative z-10"},{default:a(()=>[s(t($),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[ze]),_:1}),e("div",Se,[e("div",Le,[e("div",Te,[s(t($),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:a(()=>[s(t(M),{class:"pointer-events-auto w-screen max-w-md"},{default:a(()=>[e("form",je,[e("div",De,[e("div",Ve,[e("div",Ee,[s(t(R),{class:"text-lg font-medium text-white"},{default:a(()=>[Me]),_:1}),e("div",Re,[e("button",{type:"button",class:"rounded-md bg-white text-lime-500 hover:text-lime-600 focus:outline-none focus:ring-2 focus:ring-white",onClick:N},[Ue,s(t(D),{class:"h-6 w-6","aria-hidden":"true"})])])]),Ke]),e("div",Pe,[e("div",qe,[e("div",Fe,[e("div",null,[He,e("div",Oe,[K(e("input",{"onUpdate:modelValue":l[3]||(l[3]=n=>g(y)?y.value=n:y=n),type:"text",name:"titel",id:"titel",class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"},null,512),[[P,t(y)]])])]),e("div",null,[We,e("div",Qe,[K(e("textarea",{"onUpdate:modelValue":l[4]||(l[4]=n=>g(w)?w.value=n:w=n),id:"message",name:"message",rows:"4",class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"},null,512),[[P,t(w)]])])])])])])]),e("div",{class:"flex flex-shrink-0 justify-end px-4 py-4"},[e("button",{type:"button",class:"rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2",onClick:N}," Cancel "),e("button",{onClick:G,type:"submit",class:"ml-4 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Posten ")])])]),_:1})]),_:1})])])])]),_:1})]),_:1},8,["show"]),t(p).length>0?(i(!0),c(A,{key:0},W(t(p),n=>(i(),c("div",null,[e("div",Ge,[e("div",Ie,[e("div",Je,[e("img",{class:"h-10 w-10 rounded-full",src:n.avatarpath,alt:""},null,8,Xe)]),e("div",Ye,[e("p",Ze,[e("a",et,m(n.vorname)+" "+m(n.nachname),1)]),e("p",tt,[e("a",st,m(n.datetime),1)])])]),e("div",at,[e("div",nt,[e("h1",ot,m(n.titel),1),lt,s(t(le),{as:"div",class:"relative inline-block text-left"},{default:a(()=>[e("div",null,[s(t(se),{class:"-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600"},{default:a(()=>[it,s(t(ce),{class:"h-5 w-5","aria-hidden":"true"})]),_:1})]),s(V,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[s(t(ae),{class:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:a(()=>[e("div",rt,[s(t(ne),null,{default:a(({active:z})=>[e("a",{onClick:T=>I(n),class:oe([z?"bg-gray-100 text-gray-900":"text-gray-700","flex px-4 py-2 text-sm"])},[s(t(re),{class:"mr-3 h-5 w-5 text-red-600","aria-hidden":"true"}),ct],10,dt)]),_:2},1024)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),e("p",ut,m(n.nachricht),1)])])]))),256)):(i(),c("div",mt,ht))],64))}},_t={class:"bg-white px-4 py-6 sm:px-6"},pt={class:"flex space-x-3"},gt={class:"flex-shrink-0"},vt=["src"],yt={class:"min-w-0 flex-1"},wt={class:"text-sm font-medium text-gray-900"},bt={class:"hover:underline"},kt={class:"text-sm text-gray-500"},$t={class:"hover:underline"},Ct={class:"bg-gray-100 px-5 mt-4 py-5 rounded-md shadow-md lg:mr-16 w-auto"},At={class:"font-bold mr-12 w-full"},Bt={class:"mt-3"},Nt={key:1},zt=Q('<div class="bg-white"><div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"><div class="text-center"><p class="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl"> Keine Ank\xFCndigungen vorhanden </p><p class="mx-auto mt-5 max-w-xl text-xl text-gray-500"> Es sind noch keine Ank\xFCndigungen vorhanden, wenn dein Trainer eine erstellt hast siehst du diese hier. </p></div></div></div>',1),St=[zt],Lt={async setup(b){let u,r;const _=F(),k=h(_.currentRoute.value.params.id);let x=h([]);try{const{data:f}=([u,r]=H(()=>C.get(`/getNews/${k.value}`)),u=await u,r(),u);console.log(f),x.value=f}catch(f){console.log(f)}return(f,v)=>t(x).length>0?(i(!0),c(A,{key:0},W(t(x),o=>(i(),c("div",null,[e("div",_t,[e("div",pt,[e("div",gt,[e("img",{class:"h-10 w-10 rounded-full",src:o.avatarpath,alt:""},null,8,vt)]),e("div",yt,[e("div",wt,[e("p",bt,m(o.vorname)+" "+m(o.nachname),1)]),e("div",kt,[e("p",$t,m(o.datetime),1)])])]),e("div",Ct,[e("h1",At,m(o.titel),1),e("p",Bt,m(o.nachricht),1)])])]))),256)):(i(),c("div",Nt,St))}},Tt={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},jt=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-3xl font-bold text-gray-900 sm:truncate"},"Ank\xFCndigungen")],-1),Dt={class:"mt-4 flex sm:mt-0 sm:ml-4"},Vt=L(" Ank\xFCndigungen "),Et=e("div",null,[e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading ...")],-1),Pt={setup(b){const u=q();let r=h(!1);function _(){r.value=!1}return(k,x)=>(i(),c(A,null,[e("div",Tt,[jt,e("div",Dt,[t(u).getAktivenUser.type=="Trainer"?(i(),c("button",{key:0,onClick:x[0]||(x[0]=f=>g(r)?r.value=!0:r=!0),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600"},[Vt,s(t(de),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])):O("",!0)])]),(i(),S(ie,null,{fallback:a(()=>[Et]),default:a(()=>[t(u).getAktivenUser.type=="Trainer"?(i(),S(xt,{key:0,add:t(r),onSidebar:_},null,8,["add"])):(i(),S(Lt,{key:1}))]),_:1}))],64))}};export{Pt as default};
