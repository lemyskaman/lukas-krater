import{J as I,B as S,k as p,L as P,M as V,N as C,T as j,r as u,o as k,l as N,w as r,h as c,i as y,t as v,u as t,f as s,m as q,U as x}from"./vendor.305b0474.js";import{u as D}from"./payment.7cb45639.js";import{c as L}from"./main.49424b7b.js";const T={class:"flex justify-between w-full"},z=["onSubmit"],G={class:"p-4 sm:p-6"},U={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},F={setup(A){const o=L(),e=D(),{t:M}=I(),l=S(!1),h=p(()=>({currentPaymentMode:{name:{required:P.withMessage(M("validation.required"),V),minLength:P.withMessage(M("validation.name_min_length",{count:3}),C(3))}}})),a=j(h,p(()=>e)),b=p(()=>o.active&&o.componentName==="PaymentModeModal");async function g(){if(a.value.currentPaymentMode.$touch(),a.value.currentPaymentMode.$invalid)return!0;try{const n=e.currentPaymentMode.id?e.updatePaymentMode:e.addPaymentMode;l.value=!0,await n(e.currentPaymentMode),l.value=!1,o.refreshData&&o.refreshData(),d()}catch{return l.value=!1,!0}}function d(){o.closeModal(),setTimeout(()=>{a.value.$reset(),e.currentPaymentMode={id:"",name:null}})}return(n,m)=>{const f=u("BaseIcon"),B=u("BaseInput"),$=u("BaseInputGroup"),_=u("BaseButton"),w=u("BaseModal");return k(),N(w,{show:t(b),onClose:d},{header:r(()=>[c("div",T,[y(v(t(o).title)+" ",1),s(f,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:d})])]),default:r(()=>[c("form",{action:"",onSubmit:x(g,["prevent"])},[c("div",G,[s($,{label:n.$t("settings.payment_modes.mode_name"),error:t(a).currentPaymentMode.name.$error&&t(a).currentPaymentMode.name.$errors[0].$message,required:""},{default:r(()=>[s(B,{modelValue:t(e).currentPaymentMode.name,"onUpdate:modelValue":m[0]||(m[0]=i=>t(e).currentPaymentMode.name=i),invalid:t(a).currentPaymentMode.name.$error,onInput:m[1]||(m[1]=i=>t(a).currentPaymentMode.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),c("div",U,[s(_,{variant:"primary-outline",class:"mr-3",type:"button",onClick:d},{default:r(()=>[y(v(n.$t("general.cancel")),1)]),_:1}),s(_,{loading:l.value,disabled:l.value,variant:"primary",type:"submit"},{left:r(i=>[s(f,{name:"SaveIcon",class:q(i.class)},null,8,["class"])]),default:r(()=>[y(" "+v(t(e).currentPaymentMode.id?n.$t("general.update"):n.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,z)]),_:1},8,["show"])}}};export{F as _};