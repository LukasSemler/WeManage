import{e as b,K as f,ay as w,D as k,a as n,c as i,f as e,b as l,u as s,F as h,r as T,t as m,h as y,P as C,i as B,w as p,az as D}from"./vendor.28678742.js";import{P as N}from"./index.bb07a464.js";import{_ as F}from"./Kalender_comp.fcd1b498.js";import{r as V,a as j,b as E}from"./MapPinIcon.f0ea7776.js";import{r as P}from"./PlusIcon.d50016af.js";const R={class:"mx-2 mt-4"},S=e("br",null,null,-1),A=e("br",null,null,-1),K=e("h1",{class:"ml-5 text-xl font-bold"},"N\xE4chsten Trainings",-1),L=e("br",null,null,-1),M={key:0,class:"overflow-hidden bg-white sm:rounded-md mx-3 mb-3"},Y={role:"list",class:"divide-y divide-gray-200"},z=["onClick"],U={class:"block hover:bg-gray-50"},q={class:"px-4 py-4 sm:px-6"},G={class:"flex items-center justify-between"},H={class:"truncate text-sm font-medium text-lime-500"},I={class:"mt-2 sm:flex sm:justify-between"},J={class:"sm:flex"},O={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},Q={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"},W={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},X={key:1},Z=e("h1",{class:"text-center text-xl font-bold mt-5"},"Es wurden noch keine Trainings erstellt",-1),ee=[Z],te={async setup(v){let r,_;const u=b();let d=f([]),o=f([]);const x=u.currentRoute.value.params.id;try{const{data:c}=([r,_]=w(()=>k.get(`/getTrainings/${x}`)),r=await r,_(),r);d.value=c,o.value=d.value.map(a=>{let t=new Date(a.trainingdatum),g=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${a.trainingbeginn}`,$=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${a.trainingende}`;return{title:a.titel,start:g,end:$,t_id:a.training_id}}),console.log(o.value)}catch(c){console.log(c)}return(c,a)=>(n(),i(h,null,[e("div",R,[l(F,{termine:s(o)},null,8,["termine"])]),S,A,K,L,s(d).length>0?(n(),i("div",M,[e("ul",Y,[(n(!0),i(h,null,T(s(d),t=>(n(),i("li",{key:t.training_id,onClick:g=>c.$router.push(`/training/${t.training_id}`)},[e("a",U,[e("div",q,[e("div",G,[e("p",H,m(t.titel),1)]),e("div",I,[e("div",J,[e("div",O,[l(s(V),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),e("p",null,m(t.trainingdatum)+" | Beginn: "+m(t.trainingbeginn)+", Ende: "+m(t.trainingende),1)]),e("p",Q,[l(s(j),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),y(" "+m(t.wo),1)])]),e("div",W,[l(s(E),{class:"mr-1.5 h-7 w-7 flex-shrink-0 text-gray-400","aria-hidden":"true"})])])])])],8,z))),128))])])):(n(),i("div",X,ee))],64))}},se={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},ne=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-3xl font-bold text-gray-900 sm:truncate"},"Trainings")],-1),re={key:0,class:"mt-4 flex sm:mt-0 sm:ml-4"},ie=y(" Training "),oe=e("div",null,[e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...")],-1),_e={setup(v){const r=b(),_=N(),u=r.currentRoute.value.params.id;return(d,o)=>(n(),i(h,null,[e("div",se,[ne,s(_).getAktivenUser.type=="Trainer"?(n(),i("div",re,[e("button",{onClick:o[0]||(o[0]=x=>s(r).push(`/trainingerstellen/${s(u)}`)),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"},[ie,l(s(P),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])])):C("",!0)]),(n(),B(D,null,{fallback:p(()=>[oe]),default:p(()=>[l(te)]),_:1}))],64))}};export{_e as default};
