var ut=Object.defineProperty,rt=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var et=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable;var st=(v,o,i)=>o in v?ut(v,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):v[o]=i,x=(v,o)=>{for(var i in o||(o={}))ct.call(o,i)&&st(v,i,o[i]);if(et)for(var i of et(o))_t.call(o,i)&&st(v,i,o[i]);return v},W=(v,o)=>rt(v,dt(o));import{b as N,d as Z,i as pt,k as gt,p as yt,c as ft,j as vt}from"./main.f86759af.js";import{J as j,B as z,k as F,C as bt,H as at,$ as St,r as d,o as $,e as D,h as c,t as b,f as t,w as r,U as Y,m as G,i as k,F as L,y as $t,l as E,u as e,j as R,ah as M,a0 as T,L as X,O as nt,aT as it,T as ot,x as H}from"./vendor.305b0474.js";import{D as Bt,d as ht}from"./DragIcon.0ff650ad.js";import{u as zt}from"./payment.4e03ce91.js";import{_ as Vt}from"./ItemUnitModal.d4713196.js";const It={class:"text-gray-900 text-lg font-medium"},xt={class:"mt-1 text-sm text-gray-500"},wt={class:"overflow-x-auto"},Ct={class:"w-full mt-6 table-fixed"},Dt=c("colgroup",null,[c("col",{style:{width:"4%"}}),c("col",{style:{width:"45%"}}),c("col",{style:{width:"27%"}}),c("col",{style:{width:"24%"}})],-1),Ut=c("thead",null,[c("tr",null,[c("th",{class:"px-5 py-3 text-sm not-italic font-medium leading-5 text-left text-gray-700 border-t border-b border-gray-200 border-solid"}),c("th",{class:"px-5 py-3 text-sm not-italic font-medium leading-5 text-left text-gray-700 border-t border-b border-gray-200 border-solid"}," Component "),c("th",{class:"px-5 py-3 text-sm not-italic font-medium leading-5 text-left text-gray-700 border-t border-b border-gray-200 border-solid"}," Parameter "),c("th",{class:"px-5 py-3 text-sm not-italic font-medium leading-5 text-left text-gray-700 border-t border-b border-gray-200 border-solid"})])],-1),Ft={class:"relative"},kt={class:"text-gray-300 cursor-move handle align-middle"},Et={class:"px-5 py-4"},Nt={class:"block text-sm not-italic font-medium text-primary-800 whitespace-nowrap mr-2 min-w-[200px]"},Mt={class:"text-xs text-gray-500 mt-1"},Tt={class:"px-5 py-4 text-left align-middle"},Gt={class:"px-5 py-4 text-right align-middle pt-10"},qt=k(" Remove "),Lt={colspan:"2",class:"px-5 py-4"},Rt={class:"px-5 py-4 text-right align-middle",colspan:"2"},tt={props:{type:{type:String,required:!0},typeStore:{type:Object,required:!0},defaultSeries:{type:String,default:"INV"}},setup(v){const o=v,{t:i}=j(),p=N(),g=Z(),u=z([]),a=z(!1),m=z([{label:i("settings.customization.series"),description:i("settings.customization.series_description"),name:"SERIES",paramLabel:i("settings.customization.series_param_label"),value:o.defaultSeries,inputDisabled:!1,inputType:"text",allowMultiple:!1},{label:i("settings.customization.sequence"),description:i("settings.customization.sequence_description"),name:"SEQUENCE",paramLabel:i("settings.customization.sequence_param_label"),value:"6",inputDisabled:!1,inputType:"number",allowMultiple:!1},{label:i("settings.customization.delimiter"),description:i("settings.customization.delimiter_description"),name:"DELIMITER",paramLabel:i("settings.customization.delimiter_param_label"),value:"-",inputDisabled:!1,inputType:"text",allowMultiple:!0},{label:i("settings.customization.customer_series"),description:i("settings.customization.customer_series_description"),name:"CUSTOMER_SERIES",paramLabel:"",value:"",inputDisabled:!0,inputType:"text",allowMultiple:!1},{label:i("settings.customization.customer_sequence"),description:i("settings.customization.customer_sequence_description"),name:"CUSTOMER_SEQUENCE",paramLabel:i("settings.customization.customer_sequence_param_label"),value:"6",inputDisabled:!1,inputType:"number",allowMultiple:!1},{label:i("settings.customization.date_format"),description:i("settings.customization.date_format_description"),name:"DATE_FORMAT",paramLabel:i("settings.customization.date_format_param_label"),value:"Y",inputDisabled:!1,inputType:"text",allowMultiple:!0},{label:i("settings.customization.random_sequence"),description:i("settings.customization.random_sequence_description"),name:"RANDOM_SEQUENCE",paramLabel:i("settings.customization.random_sequence_param_label"),value:"6",inputDisabled:!1,inputType:"number",allowMultiple:!1}]),s=F(()=>m.value.filter(function(f){return!u.value.some(function(V){return f.allowMultiple?!1:f.name==V.name})})),_=z(""),n=z(!1),l=z(!1),y=F(()=>{let f="";return u.value.forEach(V=>{let q=`{{${V.name}`;V.value&&(q+=`:${V.value}`),f+=`${q}}}`}),f});bt(u,f=>{U()}),B();async function B(){let f={format:p.selectedCompanySettings[`${o.type}_number_format`]};l.value=!0,(await g.fetchPlaceholders(f)).data.placeholders.forEach(q=>{var O;let J=m.value.find(K=>K.name===q.name);const Q=(O=q.value)!=null?O:"";u.value.push(W(x({},J),{value:Q,id:at.raw()}))}),l.value=!1,U()}function C(f){return u.value.find(V=>V.name===f.name)}function h(f){C(f)&&!f.allowMultiple||(u.value.push(W(x({},f),{id:at.raw()})),U())}function S(f){u.value=u.value.filter(function(V){return f.id!==V.id})}function w(f,V){switch(V.name){case"SERIES":f.length>=6&&(f=f.substring(0,6));break;case"DELIMITER":f.length>=1&&(f=f.substring(0,1));break}setTimeout(()=>{V.value=f,U()},100)}const U=St(()=>{P()},500);async function P(){if(!y.value){_.value="";return}let f={key:o.type,format:y.value};n.value=!0;let V=await o.typeStore.getNextNumber(f);n.value=!1,V.data&&(_.value=V.data.nextNumber)}async function lt(){if(n.value||l.value)return;a.value=!0;let f={settings:{}};return f.settings[o.type+"_number_format"]=y.value,await p.updateCompanySettings({data:f,message:`settings.customization.${o.type}s.${o.type}_settings_updated`}),a.value=!1,!0}return(f,V)=>{const q=d("BaseInput"),J=d("BaseInputGroup"),Q=d("BaseIcon"),O=d("BaseButton"),K=d("BaseDropdownItem"),mt=d("BaseDropdown");return $(),D(L,null,[c("h6",It,b(f.$t(`settings.customization.${v.type}s.${v.type}_number_format`)),1),c("p",xt,b(f.$t(`settings.customization.${v.type}s.${v.type}_number_format_description`)),1),c("div",wt,[c("table",Ct,[Dt,Ut,t(e(ht),{modelValue:u.value,"onUpdate:modelValue":V[1]||(V[1]=I=>u.value=I),class:"divide-y divide-gray-200","item-key":"id",tag:"tbody",handle:".handle",filter:".ignore-element"},{item:r(({element:I})=>[c("tr",Ft,[c("td",kt,[t(Bt)]),c("td",Et,[c("label",Nt,b(I.label),1),c("p",Mt,b(I.description),1)]),c("td",Tt,[t(J,{label:I.paramLabel,class:"lg:col-span-3",required:""},{default:r(()=>[t(q,{modelValue:I.value,"onUpdate:modelValue":[A=>I.value=A,A=>w(A,I)],disabled:I.inputDisabled,type:I.inputType},null,8,["modelValue","onUpdate:modelValue","disabled","type"])]),_:2},1032,["label"])]),c("td",Gt,[t(O,{variant:"white",onClick:Y(A=>S(I),["prevent"])},{left:r(A=>[t(Q,{name:"XIcon",class:G(["!sm:m-0",A.class])},null,8,["class"])]),default:r(()=>[qt]),_:2},1032,["onClick"])])])]),footer:r(()=>[c("tr",null,[c("td",Lt,[t(J,{label:f.$t(`settings.customization.${v.type}s.preview_${v.type}_number`)},{default:r(()=>[t(q,{modelValue:_.value,"onUpdate:modelValue":V[0]||(V[0]=I=>_.value=I),disabled:"",loading:n.value},null,8,["modelValue","loading"])]),_:1},8,["label"])]),c("td",Rt,[t(mt,{"wrapper-class":"flex items-center justify-end mt-5"},{activator:r(()=>[t(O,{variant:"primary-outline"},{left:r(I=>[t(Q,{class:G(I.class),name:"PlusIcon"},null,8,["class"])]),default:r(()=>[k(" "+b(f.$t("settings.customization.add_new_component")),1)]),_:1})]),default:r(()=>[($(!0),D(L,null,$t(e(s),I=>($(),E(K,{key:I.label,onClick:Y(A=>h(I),["prevent"])},{default:r(()=>[k(b(I.label),1)]),_:2},1032,["onClick"]))),128))]),_:1})])])]),_:1},8,["modelValue"])])]),t(O,{loading:a.value,disabled:a.value,variant:"primary",type:"submit",class:"mt-4",onClick:lt},{left:r(I=>[a.value?R("",!0):($(),E(Q,{key:0,class:G(I.class),name:"SaveIcon"},null,8,["class"]))]),default:r(()=>[k(" "+b(f.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],64)}}},At={setup(v){const o=pt();return(i,p)=>($(),E(tt,{type:"invoice","type-store":e(o),"default-series":"INV"},null,8,["type-store"]))}},Yt={class:"text-gray-900 text-lg font-medium"},Ot={class:"mt-1 text-sm text-gray-500"},jt={setup(v){const{t:o,tm:i}=j(),p=N(),g=Z(),u=M("utils"),a=T({retrospective_edits:null});u.mergeSettings(a,x({},p.selectedCompanySettings)),F(()=>g.config.retrospective_edits.map(s=>(s.title=o(s.key),s)));async function m(){let s={settings:x({},a)};return await p.updateCompanySettings({data:s,message:"settings.customization.invoices.invoice_settings_updated"}),!0}return(s,_)=>{const n=d("BaseRadio"),l=d("BaseInputGroup");return $(),D(L,null,[c("h6",Yt,b(s.$tc("settings.customization.invoices.retrospective_edits")),1),c("p",Ot,b(s.$t("settings.customization.invoices.retrospective_edits_description")),1),t(l,{required:""},{default:r(()=>[t(n,{id:"allow",modelValue:e(a).retrospective_edits,"onUpdate:modelValue":[_[0]||(_[0]=y=>e(a).retrospective_edits=y),m],label:s.$t("settings.customization.invoices.allow"),size:"sm",name:"filter",value:"allow",class:"mt-2"},null,8,["modelValue","label"]),t(n,{id:"disable_on_invoice_partial_paid",modelValue:e(a).retrospective_edits,"onUpdate:modelValue":[_[1]||(_[1]=y=>e(a).retrospective_edits=y),m],label:s.$t("settings.customization.invoices.disable_on_invoice_partial_paid"),size:"sm",name:"filter",value:"disable_on_invoice_partial_paid",class:"mt-2"},null,8,["modelValue","label"]),t(n,{id:"disable_on_invoice_paid",modelValue:e(a).retrospective_edits,"onUpdate:modelValue":[_[2]||(_[2]=y=>e(a).retrospective_edits=y),m],label:s.$t("settings.customization.invoices.disable_on_invoice_paid"),size:"sm",name:"filter",value:"disable_on_invoice_paid",class:"my-2"},null,8,["modelValue","label"]),t(n,{id:"disable_on_invoice_sent",modelValue:e(a).retrospective_edits,"onUpdate:modelValue":[_[3]||(_[3]=y=>e(a).retrospective_edits=y),m],label:s.$t("settings.customization.invoices.disable_on_invoice_sent"),size:"sm",name:"filter",value:"disable_on_invoice_sent"},null,8,["modelValue","label"])]),_:1})],64)}}},Pt=["onSubmit"],Qt={class:"text-gray-900 text-lg font-medium"},Ht={class:"mt-1 text-sm text-gray-500 mb-2"},Jt={class:"w-full sm:w-1/2 md:w-1/4 lg:w-1/5"},Xt={setup(v){const{t:o}=j(),i=N(),p=M("utils");let g=z(!1);const u=T({invoice_set_due_date_automatically:null,invoice_due_date_days:null});p.mergeSettings(u,x({},i.selectedCompanySettings));const a=F({get:()=>u.invoice_set_due_date_automatically==="YES",set:async n=>{const l=n?"YES":"NO";u.invoice_set_due_date_automatically=l}}),m=F(()=>({dueDateSettings:{invoice_due_date_days:{required:X.withMessage(o("validation.required"),nt(a.value)),numeric:X.withMessage(o("validation.numbers_only"),it)}}})),s=ot(m,{dueDateSettings:u});async function _(){if(s.value.dueDateSettings.$touch(),s.value.dueDateSettings.$invalid)return!1;g.value=!0;let n={settings:x({},u)};return a.value||delete n.settings.invoice_due_date_days,await i.updateCompanySettings({data:n,message:"settings.customization.invoices.invoice_settings_updated"}),g.value=!1,!0}return(n,l)=>{const y=d("BaseSwitchSection"),B=d("BaseInput"),C=d("BaseInputGroup"),h=d("BaseIcon"),S=d("BaseButton");return $(),D("form",{onSubmit:Y(_,["prevent"])},[c("h6",Qt,b(n.$t("settings.customization.invoices.due_date")),1),c("p",Ht,b(n.$t("settings.customization.invoices.due_date_description")),1),t(y,{modelValue:e(a),"onUpdate:modelValue":l[0]||(l[0]=w=>H(a)?a.value=w:null),title:n.$t("settings.customization.invoices.set_due_date_automatically"),description:n.$t("settings.customization.invoices.set_due_date_automatically_description")},null,8,["modelValue","title","description"]),e(a)?($(),E(C,{key:0,label:n.$t("settings.customization.invoices.due_date_days"),error:e(s).dueDateSettings.invoice_due_date_days.$error&&e(s).dueDateSettings.invoice_due_date_days.$errors[0].$message,class:"mt-2 mb-4"},{default:r(()=>[c("div",Jt,[t(B,{modelValue:e(u).invoice_due_date_days,"onUpdate:modelValue":l[1]||(l[1]=w=>e(u).invoice_due_date_days=w),invalid:e(s).dueDateSettings.invoice_due_date_days.$error,type:"number",onInput:l[2]||(l[2]=w=>e(s).dueDateSettings.invoice_due_date_days.$touch())},null,8,["modelValue","invalid"])])]),_:1},8,["label","error"])):R("",!0),t(S,{loading:e(g),disabled:e(g),variant:"primary",type:"submit",class:"mt-4"},{left:r(w=>[e(g)?R("",!0):($(),E(h,{key:0,class:G(w.class),name:"SaveIcon"},null,8,["class"]))]),default:r(()=>[k(" "+b(n.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],40,Pt)}}},Kt=["onSubmit"],Wt={class:"text-gray-900 text-lg font-medium"},Zt={class:"mt-1 text-sm text-gray-500 mb-2"},te={setup(v){const o=N(),i=M("utils"),p=z(["customer","customerCustom","invoice","invoiceCustom","company"]),g=z(["billing","customer","customerCustom","invoiceCustom"]),u=z(["shipping","customer","customerCustom","invoiceCustom"]),a=z(["company","invoiceCustom"]);let m=z(!1);const s=T({invoice_mail_body:null,invoice_company_address_format:null,invoice_shipping_address_format:null,invoice_billing_address_format:null});i.mergeSettings(s,x({},o.selectedCompanySettings));async function _(){m.value=!0;let n={settings:x({},s)};return await o.updateCompanySettings({data:n,message:"settings.customization.invoices.invoice_settings_updated"}),m.value=!1,!0}return(n,l)=>{const y=d("BaseCustomInput"),B=d("BaseInputGroup"),C=d("BaseIcon"),h=d("BaseButton");return $(),D("form",{onSubmit:Y(_,["prevent"])},[c("h6",Wt,b(n.$t("settings.customization.invoices.default_formats")),1),c("p",Zt,b(n.$t("settings.customization.invoices.default_formats_description")),1),t(B,{label:n.$t("settings.customization.invoices.default_invoice_email_body"),class:"mt-6 mb-4"},{default:r(()=>[t(y,{modelValue:e(s).invoice_mail_body,"onUpdate:modelValue":l[0]||(l[0]=S=>e(s).invoice_mail_body=S),fields:p.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(B,{label:n.$t("settings.customization.invoices.company_address_format"),class:"mt-6 mb-4"},{default:r(()=>[t(y,{modelValue:e(s).invoice_company_address_format,"onUpdate:modelValue":l[1]||(l[1]=S=>e(s).invoice_company_address_format=S),fields:a.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(B,{label:n.$t("settings.customization.invoices.shipping_address_format"),class:"mt-6 mb-4"},{default:r(()=>[t(y,{modelValue:e(s).invoice_shipping_address_format,"onUpdate:modelValue":l[2]||(l[2]=S=>e(s).invoice_shipping_address_format=S),fields:u.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(B,{label:n.$t("settings.customization.invoices.billing_address_format"),class:"mt-6 mb-4"},{default:r(()=>[t(y,{modelValue:e(s).invoice_billing_address_format,"onUpdate:modelValue":l[3]||(l[3]=S=>e(s).invoice_billing_address_format=S),fields:g.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(h,{loading:e(m),disabled:e(m),variant:"primary",type:"submit",class:"mt-4"},{left:r(S=>[e(m)?R("",!0):($(),E(C,{key:0,class:G(S.class),name:"SaveIcon"},null,8,["class"]))]),default:r(()=>[k(" "+b(n.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],40,Kt)}}},ee={class:"divide-y divide-gray-200"},se={setup(v){const o=M("utils"),i=N(),p=T({invoice_email_attachment:null});o.mergeSettings(p,x({},i.selectedCompanySettings));const g=F({get:()=>p.invoice_email_attachment==="YES",set:async u=>{const a=u?"YES":"NO";let m={settings:{invoice_email_attachment:a}};p.invoice_email_attachment=a,await i.updateCompanySettings({data:m,message:"general.setting_updated"})}});return(u,a)=>{const m=d("BaseDivider"),s=d("BaseSwitchSection");return $(),D(L,null,[t(At),t(m,{class:"my-8"}),t(Xt),t(m,{class:"my-8"}),t(jt),t(m,{class:"my-8"}),t(te),t(m,{class:"mt-6 mb-2"}),c("ul",ee,[t(s,{modelValue:e(g),"onUpdate:modelValue":a[0]||(a[0]=_=>H(g)?g.value=_:null),title:u.$t("settings.customization.invoices.invoice_email_attachment"),description:u.$t("settings.customization.invoices.invoice_email_attachment_setting_description")},null,8,["modelValue","title","description"])])],64)}}},ae={setup(v){const o=gt();return(i,p)=>($(),E(tt,{type:"estimate","type-store":e(o),"default-series":"EST"},null,8,["type-store"]))}},ne=["onSubmit"],ie={class:"text-gray-900 text-lg font-medium"},oe={class:"mt-1 text-sm text-gray-500 mb-2"},le={class:"w-full sm:w-1/2 md:w-1/4 lg:w-1/5"},me={setup(v){const{t:o}=j(),i=N(),p=M("utils");let g=z(!1);const u=T({estimate_set_expiry_date_automatically:null,estimate_expiry_date_days:null});p.mergeSettings(u,x({},i.selectedCompanySettings));const a=F({get:()=>u.estimate_set_expiry_date_automatically==="YES",set:async n=>{const l=n?"YES":"NO";u.estimate_set_expiry_date_automatically=l}}),m=F(()=>({expiryDateSettings:{estimate_expiry_date_days:{required:X.withMessage(o("validation.required"),nt(a.value)),numeric:X.withMessage(o("validation.numbers_only"),it)}}})),s=ot(m,{expiryDateSettings:u});async function _(){if(s.value.expiryDateSettings.$touch(),s.value.expiryDateSettings.$invalid)return!1;g.value=!0;let n={settings:x({},u)};return a.value||delete n.settings.estimate_expiry_date_days,await i.updateCompanySettings({data:n,message:"settings.customization.estimates.estimate_settings_updated"}),g.value=!1,!0}return(n,l)=>{const y=d("BaseSwitchSection"),B=d("BaseInput"),C=d("BaseInputGroup"),h=d("BaseIcon"),S=d("BaseButton");return $(),D("form",{onSubmit:Y(_,["prevent"])},[c("h6",ie,b(n.$t("settings.customization.estimates.expiry_date")),1),c("p",oe,b(n.$t("settings.customization.estimates.expiry_date_description")),1),t(y,{modelValue:e(a),"onUpdate:modelValue":l[0]||(l[0]=w=>H(a)?a.value=w:null),title:n.$t("settings.customization.estimates.set_expiry_date_automatically"),description:n.$t("settings.customization.estimates.set_expiry_date_automatically_description")},null,8,["modelValue","title","description"]),e(a)?($(),E(C,{key:0,label:n.$t("settings.customization.estimates.expiry_date_days"),error:e(s).expiryDateSettings.estimate_expiry_date_days.$error&&e(s).expiryDateSettings.estimate_expiry_date_days.$errors[0].$message,class:"mt-2 mb-4"},{default:r(()=>[c("div",le,[t(B,{modelValue:e(u).estimate_expiry_date_days,"onUpdate:modelValue":l[1]||(l[1]=w=>e(u).estimate_expiry_date_days=w),invalid:e(s).expiryDateSettings.estimate_expiry_date_days.$error,type:"number",onInput:l[2]||(l[2]=w=>e(s).expiryDateSettings.estimate_expiry_date_days.$touch())},null,8,["modelValue","invalid"])])]),_:1},8,["label","error"])):R("",!0),t(S,{loading:e(g),disabled:e(g),variant:"primary",type:"submit",class:"mt-4"},{left:r(w=>[e(g)?R("",!0):($(),E(h,{key:0,class:G(w.class),name:"SaveIcon"},null,8,["class"]))]),default:r(()=>[k(" "+b(n.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],40,ne)}}},ue=["onSubmit"],re={class:"text-gray-900 text-lg font-medium"},de={class:"mt-1 text-sm text-gray-500 mb-2"},ce={setup(v){const o=N(),i=M("utils"),p=z(["customer","customerCustom","estimate","estimateCustom","company"]),g=z(["billing","customer","customerCustom","estimateCustom"]),u=z(["shipping","customer","customerCustom","estimateCustom"]),a=z(["company","estimateCustom"]);let m=z(!1);const s=T({estimate_mail_body:null,estimate_company_address_format:null,estimate_shipping_address_format:null,estimate_billing_address_format:null});i.mergeSettings(s,x({},o.selectedCompanySettings));async function _(){m.value=!0;let n={settings:x({},s)};return await o.updateCompanySettings({data:n,message:"settings.customization.estimates.estimate_settings_updated"}),m.value=!1,!0}return(n,l)=>{const y=d("BaseCustomInput"),B=d("BaseInputGroup"),C=d("BaseIcon"),h=d("BaseButton");return $(),D("form",{onSubmit:Y(_,["prevent"])},[c("h6",re,b(n.$t("settings.customization.estimates.default_formats")),1),c("p",de,b(n.$t("settings.customization.estimates.default_formats_description")),1),t(B,{label:n.$t("settings.customization.estimates.default_estimate_email_body"),class:"mt-6 mb-4"},{default:r(()=>[t(y,{modelValue:e(s).estimate_mail_body,"onUpdate:modelValue":l[0]||(l[0]=S=>e(s).estimate_mail_body=S),fields:p.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(B,{label:n.$t("settings.customization.estimates.company_address_format"),class:"mt-6 mb-4"},{default:r(()=>[t(y,{modelValue:e(s).estimate_company_address_format,"onUpdate:modelValue":l[1]||(l[1]=S=>e(s).estimate_company_address_format=S),fields:a.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(B,{label:n.$t("settings.customization.estimates.shipping_address_format"),class:"mt-6 mb-4"},{default:r(()=>[t(y,{modelValue:e(s).estimate_shipping_address_format,"onUpdate:modelValue":l[2]||(l[2]=S=>e(s).estimate_shipping_address_format=S),fields:u.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(B,{label:n.$t("settings.customization.estimates.billing_address_format"),class:"mt-6 mb-4"},{default:r(()=>[t(y,{modelValue:e(s).estimate_billing_address_format,"onUpdate:modelValue":l[3]||(l[3]=S=>e(s).estimate_billing_address_format=S),fields:g.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(h,{loading:e(m),disabled:e(m),variant:"primary",type:"submit",class:"mt-4"},{left:r(S=>[e(m)?R("",!0):($(),E(C,{key:0,class:G(S.class),name:"SaveIcon"},null,8,["class"]))]),default:r(()=>[k(" "+b(n.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],40,ue)}}},_e={class:"text-gray-900 text-lg font-medium"},pe={class:"mt-1 text-sm text-gray-500"},ge={setup(v){const{t:o,tm:i}=j(),p=N(),g=Z(),u=M("utils"),a=T({estimate_convert_action:null});u.mergeSettings(a,x({},p.selectedCompanySettings)),F(()=>g.config.estimate_convert_action.map(s=>(s.title=o(s.key),s)));async function m(){let s={settings:x({},a)};return await p.updateCompanySettings({data:s,message:"settings.customization.estimates.estimate_settings_updated"}),!0}return(s,_)=>{const n=d("BaseRadio"),l=d("BaseInputGroup");return $(),D(L,null,[c("h6",_e,b(s.$tc("settings.customization.estimates.convert_estimate_options")),1),c("p",pe,b(s.$t("settings.customization.estimates.convert_estimate_description")),1),t(l,{required:""},{default:r(()=>[t(n,{id:"no_action",modelValue:e(a).estimate_convert_action,"onUpdate:modelValue":[_[0]||(_[0]=y=>e(a).estimate_convert_action=y),m],label:s.$t("settings.customization.estimates.no_action"),size:"sm",name:"filter",value:"no_action",class:"mt-2"},null,8,["modelValue","label"]),t(n,{id:"delete_estimate",modelValue:e(a).estimate_convert_action,"onUpdate:modelValue":[_[1]||(_[1]=y=>e(a).estimate_convert_action=y),m],label:s.$t("settings.customization.estimates.delete_estimate"),size:"sm",name:"filter",value:"delete_estimate",class:"my-2"},null,8,["modelValue","label"]),t(n,{id:"mark_estimate_as_accepted",modelValue:e(a).estimate_convert_action,"onUpdate:modelValue":[_[2]||(_[2]=y=>e(a).estimate_convert_action=y),m],label:s.$t("settings.customization.estimates.mark_estimate_as_accepted"),size:"sm",name:"filter",value:"mark_estimate_as_accepted"},null,8,["modelValue","label"])]),_:1})],64)}}},ye={class:"divide-y divide-gray-200"},fe={setup(v){const o=M("utils"),i=N(),p=T({estimate_email_attachment:null});o.mergeSettings(p,x({},i.selectedCompanySettings));const g=F({get:()=>p.estimate_email_attachment==="YES",set:async u=>{const a=u?"YES":"NO";let m={settings:{estimate_email_attachment:a}};p.estimate_email_attachment=a,await i.updateCompanySettings({data:m,message:"general.setting_updated"})}});return(u,a)=>{const m=d("BaseDivider"),s=d("BaseSwitchSection");return $(),D(L,null,[t(ae),t(m,{class:"my-8"}),t(me),t(m,{class:"my-8"}),t(ge),t(m,{class:"my-8"}),t(ce),t(m,{class:"mt-6 mb-2"}),c("ul",ye,[t(s,{modelValue:e(g),"onUpdate:modelValue":a[0]||(a[0]=_=>H(g)?g.value=_:null),title:u.$t("settings.customization.estimates.estimate_email_attachment"),description:u.$t("settings.customization.estimates.estimate_email_attachment_setting_description")},null,8,["modelValue","title","description"])])],64)}}},ve={setup(v){const o=zt();return(i,p)=>($(),E(tt,{type:"payment","type-store":e(o),"default-series":"PAY"},null,8,["type-store"]))}},be=["onSubmit"],Se={class:"text-gray-900 text-lg font-medium"},$e={class:"mt-1 text-sm text-gray-500 mb-2"},Be={setup(v){const o=N(),i=M("utils"),p=z(["customer","customerCustom","company","payment","paymentCustom"]),g=z(["billing","customer","customerCustom","paymentCustom"]),u=z(["company","paymentCustom"]);let a=z(!1);const m=T({payment_mail_body:null,payment_company_address_format:null,payment_from_customer_address_format:null});i.mergeSettings(m,x({},o.selectedCompanySettings));async function s(){a.value=!0;let _={settings:x({},m)};return await o.updateCompanySettings({data:_,message:"settings.customization.payments.payment_settings_updated"}),a.value=!1,!0}return(_,n)=>{const l=d("BaseCustomInput"),y=d("BaseInputGroup"),B=d("BaseIcon"),C=d("BaseButton");return $(),D("form",{onSubmit:Y(s,["prevent"])},[c("h6",Se,b(_.$t("settings.customization.payments.default_formats")),1),c("p",$e,b(_.$t("settings.customization.payments.default_formats_description")),1),t(y,{label:_.$t("settings.customization.payments.default_payment_email_body"),class:"mt-6 mb-4"},{default:r(()=>[t(l,{modelValue:e(m).payment_mail_body,"onUpdate:modelValue":n[0]||(n[0]=h=>e(m).payment_mail_body=h),fields:p.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(y,{label:_.$t("settings.customization.payments.company_address_format"),class:"mt-6 mb-4"},{default:r(()=>[t(l,{modelValue:e(m).payment_company_address_format,"onUpdate:modelValue":n[1]||(n[1]=h=>e(m).payment_company_address_format=h),fields:u.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(y,{label:_.$t("settings.customization.payments.from_customer_address_format"),class:"mt-6 mb-4"},{default:r(()=>[t(l,{modelValue:e(m).payment_from_customer_address_format,"onUpdate:modelValue":n[2]||(n[2]=h=>e(m).payment_from_customer_address_format=h),fields:g.value},null,8,["modelValue","fields"])]),_:1},8,["label"]),t(C,{loading:e(a),disabled:e(a),variant:"primary",type:"submit",class:"mt-4"},{left:r(h=>[e(a)?R("",!0):($(),E(B,{key:0,class:G(h.class),name:"SaveIcon"},null,8,["class"]))]),default:r(()=>[k(" "+b(_.$t("settings.customization.save")),1)]),_:1},8,["loading","disabled"])],40,be)}}},he={class:"divide-y divide-gray-200"},ze={setup(v){const o=M("utils"),i=N(),p=T({payment_email_attachment:null});o.mergeSettings(p,x({},i.selectedCompanySettings));const g=F({get:()=>p.payment_email_attachment==="YES",set:async u=>{const a=u?"YES":"NO";let m={settings:{payment_email_attachment:a}};p.payment_email_attachment=a,await i.updateCompanySettings({data:m,message:"general.setting_updated"})}});return(u,a)=>{const m=d("BaseDivider"),s=d("BaseSwitchSection");return $(),D(L,null,[t(ve),t(m,{class:"my-8"}),t(Be),t(m,{class:"mt-6 mb-2"}),c("ul",he,[t(s,{modelValue:e(g),"onUpdate:modelValue":a[0]||(a[0]=_=>H(g)?g.value=_:null),title:u.$t("settings.customization.payments.payment_email_attachment"),description:u.$t("settings.customization.payments.payment_email_attachment_setting_description")},null,8,["modelValue","title","description"])])],64)}}},Ve={class:"flex flex-wrap justify-end mt-2 lg:flex-nowrap"},Ie={class:"inline-block"},xe={setup(v){const{t:o}=j(),i=z(null),p=yt(),g=ft(),u=vt(),a=F(()=>[{key:"name",label:o("settings.customization.items.unit_name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function m({page:l,filter:y,sort:B}){let C={orderByField:B.fieldName||"created_at",orderBy:B.order||"desc",page:l},h=await p.fetchItemUnits(C);return{data:h.data.data,pagination:{totalPages:h.data.meta.last_page,currentPage:l,totalCount:h.data.meta.total,limit:5}}}async function s(){g.openModal({title:o("settings.customization.items.add_item_unit"),componentName:"ItemUnitModal",refreshData:i.value.refresh,size:"sm"})}async function _(l){p.fetchItemUnit(l.data.id),g.openModal({title:o("settings.customization.items.edit_item_unit"),componentName:"ItemUnitModal",id:l.data.id,data:l.data,refreshData:i.value&&i.value.refresh})}function n(l){u.openDialog({title:o("general.are_you_sure"),message:o("settings.customization.items.item_unit_confirm_delete"),yesLabel:o("general.yes"),noLabel:o("general.no"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async y=>{y&&(await p.deleteItemUnit(l.data.id),i.value&&i.value.refresh())})}return(l,y)=>{const B=d("BaseIcon"),C=d("BaseButton"),h=d("BaseDropdownItem"),S=d("BaseDropdown"),w=d("BaseTable");return $(),D(L,null,[t(Vt),c("div",Ve,[t(C,{variant:"primary-outline",onClick:s},{left:r(U=>[t(B,{class:G(U.class),name:"PlusIcon"},null,8,["class"])]),default:r(()=>[k(" "+b(l.$t("settings.customization.items.add_item_unit")),1)]),_:1})]),t(w,{ref:(U,P)=>{P.table=U,i.value=U},class:"mt-10",data:m,columns:e(a)},{"cell-actions":r(({row:U})=>[t(S,null,{activator:r(()=>[c("div",Ie,[t(B,{name:"DotsHorizontalIcon",class:"text-gray-500"})])]),default:r(()=>[t(h,{onClick:P=>_(U)},{default:r(()=>[t(B,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),k(" "+b(l.$t("general.edit")),1)]),_:2},1032,["onClick"]),t(h,{onClick:P=>n(U)},{default:r(()=>[t(B,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),k(" "+b(l.$t("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["columns"])],64)}}},we={class:"relative"},Ne={setup(v){return(o,i)=>{const p=d("BaseTab"),g=d("BaseTabGroup"),u=d("BaseCard");return $(),D("div",we,[t(u,{"container-class":"px-4 py-5 sm:px-8 sm:py-2"},{default:r(()=>[t(g,null,{default:r(()=>[t(p,{"tab-panel-container":"py-4 mt-px",title:o.$t("settings.customization.invoices.title")},{default:r(()=>[t(se)]),_:1},8,["title"]),t(p,{"tab-panel-container":"py-4 mt-px",title:o.$t("settings.customization.estimates.title")},{default:r(()=>[t(fe)]),_:1},8,["title"]),t(p,{"tab-panel-container":"py-4 mt-px",title:o.$t("settings.customization.payments.title")},{default:r(()=>[t(ze)]),_:1},8,["title"]),t(p,{"tab-panel-container":"py-4 mt-px",title:o.$t("settings.customization.items.title")},{default:r(()=>[t(xe)]),_:1},8,["title"])]),_:1})]),_:1})])}}};export{Ne as default};