var ae=Object.defineProperty;var N=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var T=(y,n,b)=>n in y?ae(y,n,{enumerable:!0,configurable:!0,writable:!0,value:b}):y[n]=b,R=(y,n)=>{for(var b in n||(n={}))ie.call(n,b)&&T(y,b,n[b]);if(N)for(var b of N(n))ue.call(n,b)&&T(y,b,n[b]);return y};import{J as de,aN as me,G as ce,B,k as M,T as pe,r as g,o as $,l as _,w as i,h as c,f as r,m as A,i as O,t as v,u as e,j as V,x as q,e as H,U as ge,L as p,M as j,N as L,O as J,Q as be,P as fe,R as Ce,S as z}from"./vendor.2f2e72ef.js";import{l as $e,m as _e,d as ye,b as ve,n as Ve}from"./main.d9e9868f.js";import{_ as we}from"./CreateCustomFields.43fb2086.js";const he=["onSubmit"],Be={class:"flex items-center justify-end"},Me={class:"grid grid-cols-5 gap-4 mb-8"},Ie={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},xe={class:"grid grid-cols-5 gap-4 mb-8"},Ue={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},ke={class:"md:col-span-2"},Se={class:"text-sm text-gray-500"},qe={class:"grid grid-cols-5 gap-4 mb-8"},Le={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},ze={class:"space-y-6"},Pe={class:"flex items-center justify-start mb-6 md:justify-end md:mb-0"},Fe={class:"p-1"},je={key:0,class:"grid grid-cols-5 gap-4 mb-8"},De={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},Ee={class:"space-y-6"},Ge={class:"grid grid-cols-5 gap-2 mb-8"},Ne={key:0,class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},Te={class:"col-span-5 lg:col-span-4"},Je={setup(y){const n=$e(),b=_e(),P=ye(),Q=ve(),D="customFields",{t:m}=de(),K=me(),W=ce();let l=B(!1),f=B(!1),C=B(!1);B(!1);const I=B(!1),h=M(()=>W.name==="customers.edit");let X=M(()=>n.isFetchingInitialSettings);const E=M(()=>h.value?m("customers.edit_customer"):m("customers.new_customer")),Y=M(()=>({currentCustomer:{name:{required:p.withMessage(m("validation.required"),j),minLength:p.withMessage(m("validation.name_min_length",{count:3}),L(3))},rif:{required:p.withMessage(m("validation.required"),j),minLength:p.withMessage(m("validation.name_min_length",{count:9}),L(9))},prefix:{minLength:p.withMessage(m("validation.name_min_length",{count:3}),L(3))},currency_id:{required:p.withMessage(m("validation.required"),j)},email:{required:p.withMessage(m("validation.required"),J(n.currentCustomer.enable_portal==!0)),email:p.withMessage(m("validation.email_incorrect"),be)},password:{required:p.withMessage(m("validation.required"),J(n.currentCustomer.enable_portal==!0&&!n.currentCustomer.password_added)),minLength:p.withMessage(m("validation.password_min_length",{count:8}),L(8))},confirm_password:{sameAsPassword:p.withMessage(m("validation.password_incorrect"),fe(n.currentCustomer.password))},website:{url:p.withMessage(m("validation.invalid_url"),Ce)},billing:{address_street_1:{maxLength:p.withMessage(m("validation.address_maxlength",{count:255}),z(255))},address_street_2:{maxLength:p.withMessage(m("validation.address_maxlength",{count:255}),z(255))}},shipping:{address_street_1:{maxLength:p.withMessage(m("validation.address_maxlength",{count:255}),z(255))},address_street_2:{maxLength:p.withMessage(m("validation.address_maxlength",{count:255}),z(255))}}}})),Z=M(()=>`${window.location.origin}/${Q.selectedCompany.slug}/customer/login`),a=pe(Y,n,{$scope:D});n.resetCurrentCustomer(),n.fetchCustomerInitialSettings(h.value);async function ee(){if(a.value.$touch(),a.value.$invalid)return!0;I.value=!0;let s=R({},n.currentCustomer),t=null;try{t=await(h.value?n.updateCustomer:n.addCustomer)(s)}catch{I.value=!1;return}K.push(`/admin/customers/${t.data.data.id}/view`)}return(s,t)=>{const x=g("BaseBreadcrumbItem"),te=g("BaseBreadcrumb-item"),ne=g("BaseBreadcrumb"),w=g("BaseIcon"),G=g("BaseButton"),oe=g("BasePageHeader"),d=g("BaseInput"),u=g("BaseInputGroup"),F=g("BaseMultiselect"),U=g("BaseInputGrid"),k=g("BaseDivider"),re=g("BaseSwitch"),S=g("BaseTextarea"),le=g("BaseCard"),se=g("BasePage");return $(),_(se,null,{default:i(()=>[c("form",{onSubmit:ge(ee,["prevent"])},[r(oe,{title:e(E)},{actions:i(()=>[c("div",Be,[r(G,{type:"submit",loading:I.value,disabled:I.value},{left:i(o=>[r(w,{name:"SaveIcon",class:A(o.class)},null,8,["class"])]),default:i(()=>[O(" "+v(e(h)?s.$t("customers.update_customer"):s.$t("customers.save_customer")),1)]),_:1},8,["loading","disabled"])])]),default:i(()=>[r(ne,null,{default:i(()=>[r(x,{title:s.$t("general.home"),to:"dashboard"},null,8,["title"]),r(x,{title:s.$tc("customers.customer",2),to:"/admin/customers"},null,8,["title"]),r(te,{title:e(E),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),r(le,{class:"mt-5"},{default:i(()=>[c("div",Me,[c("h6",Ie,v(s.$t("customers.basic_info")),1),r(U,{class:"col-span-5 lg:col-span-4"},{default:i(()=>[r(u,{label:s.$t("customers.display_name"),required:"",error:e(a).currentCustomer.name.$error&&e(a).currentCustomer.name.$errors[0].$message,"content-loading":e(l)},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e(n).currentCustomer.name=o),"content-loading":e(l),type:"text",name:"name",class:"",invalid:e(a).currentCustomer.name.$error,onInput:t[1]||(t[1]=o=>e(a).currentCustomer.name.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","error","content-loading"]),r(u,{label:s.$t("customers.primary_contact_name"),"content-loading":e(l)},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.contact_name,"onUpdate:modelValue":t[2]||(t[2]=o=>e(n).currentCustomer.contact_name=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),r(u,{label:s.$t("customers.rif"),required:"",error:e(a).currentCustomer.rif.$error&&e(a).currentCustomer.rif.$errors[0].$message,"content-loading":e(l)},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.rif,"onUpdate:modelValue":t[3]||(t[3]=o=>e(n).currentCustomer.rif=o),"content-loading":e(l),type:"text",name:"rif",class:"",invalid:e(a).currentCustomer.rif.$error,onInput:t[4]||(t[4]=o=>e(a).currentCustomer.rif.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","error","content-loading"]),r(u,{error:e(a).currentCustomer.email.$error&&e(a).currentCustomer.email.$errors[0].$message,"content-loading":e(l),label:s.$t("customers.email")},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.email,"onUpdate:modelValue":t[5]||(t[5]=o=>e(n).currentCustomer.email=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",name:"email",invalid:e(a).currentCustomer.email.$error,onInput:t[6]||(t[6]=o=>e(a).currentCustomer.email.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["error","content-loading","label"]),r(u,{label:s.$t("customers.phone"),"content-loading":e(l)},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.phone,"onUpdate:modelValue":t[7]||(t[7]=o=>e(n).currentCustomer.phone=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",name:"phone"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),r(u,{label:s.$t("customers.primary_currency"),"content-loading":e(l),error:e(a).currentCustomer.currency_id.$error&&e(a).currentCustomer.currency_id.$errors[0].$message,required:""},{default:i(()=>[r(F,{modelValue:e(n).currentCustomer.currency_id,"onUpdate:modelValue":t[8]||(t[8]=o=>e(n).currentCustomer.currency_id=o),"value-prop":"id",label:"name","track-by":"name","content-loading":e(l),options:e(P).currencies,searchable:"","can-deselect":!1,placeholder:s.$t("customers.select_currency"),invalid:e(a).currentCustomer.currency_id.$error,class:"w-full"},null,8,["modelValue","content-loading","options","placeholder","invalid"])]),_:1},8,["label","content-loading","error"]),r(u,{error:e(a).currentCustomer.website.$error&&e(a).currentCustomer.website.$errors[0].$message,label:s.$t("customers.website"),"content-loading":e(l)},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.website,"onUpdate:modelValue":t[9]||(t[9]=o=>e(n).currentCustomer.website=o),"content-loading":e(l),type:"url",onInput:t[10]||(t[10]=o=>e(a).currentCustomer.website.$touch())},null,8,["modelValue","content-loading"])]),_:1},8,["error","label","content-loading"]),r(u,{label:s.$t("customers.prefix"),error:e(a).currentCustomer.prefix.$error&&e(a).currentCustomer.prefix.$errors[0].$message,"content-loading":e(l)},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.prefix,"onUpdate:modelValue":t[11]||(t[11]=o=>e(n).currentCustomer.prefix=o),"content-loading":e(l),type:"text",name:"name",class:"",invalid:e(a).currentCustomer.prefix.$error,onInput:t[12]||(t[12]=o=>e(a).currentCustomer.prefix.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","error","content-loading"])]),_:1})]),r(k,{class:"mb-5 md:mb-8"}),c("div",xe,[c("h6",Ue,v(s.$t("customers.portal_access")),1),r(U,{class:"col-span-5 lg:col-span-4"},{default:i(()=>[c("div",ke,[c("p",Se,v(s.$t("customers.portal_access_text")),1),r(re,{modelValue:e(n).currentCustomer.enable_portal,"onUpdate:modelValue":t[13]||(t[13]=o=>e(n).currentCustomer.enable_portal=o),class:"mt-1 flex"},null,8,["modelValue"])]),e(n).currentCustomer.enable_portal?($(),_(u,{key:0,"content-loading":e(l),label:s.$t("customers.portal_access_url"),class:"md:col-span-2","help-text":s.$t("customers.portal_access_url_help")},{default:i(()=>[r(Ve,{token:e(Z)},null,8,["token"])]),_:1},8,["content-loading","label","help-text"])):V("",!0),e(n).currentCustomer.enable_portal?($(),_(u,{key:1,"content-loading":e(l),error:e(a).currentCustomer.password.$error&&e(a).currentCustomer.password.$errors[0].$message,label:s.$t("customers.password")},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.password,"onUpdate:modelValue":t[16]||(t[16]=o=>e(n).currentCustomer.password=o),modelModifiers:{trim:!0},"content-loading":e(l),type:e(f)?"text":"password",name:"password",invalid:e(a).currentCustomer.password.$error,onInput:t[17]||(t[17]=o=>e(a).currentCustomer.password.$touch())},{right:i(()=>[e(f)?($(),_(w,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:t[14]||(t[14]=o=>q(f)?f.value=!e(f):f=!e(f))})):($(),_(w,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:t[15]||(t[15]=o=>q(f)?f.value=!e(f):f=!e(f))}))]),_:1},8,["modelValue","content-loading","type","invalid"])]),_:1},8,["content-loading","error","label"])):V("",!0),e(n).currentCustomer.enable_portal?($(),_(u,{key:2,error:e(a).currentCustomer.confirm_password.$error&&e(a).currentCustomer.confirm_password.$errors[0].$message,"content-loading":e(l),label:"Confirm Password"},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.confirm_password,"onUpdate:modelValue":t[20]||(t[20]=o=>e(n).currentCustomer.confirm_password=o),modelModifiers:{trim:!0},"content-loading":e(l),type:e(C)?"text":"password",name:"confirm_password",invalid:e(a).currentCustomer.confirm_password.$error,onInput:t[21]||(t[21]=o=>e(a).currentCustomer.confirm_password.$touch())},{right:i(()=>[e(C)?($(),_(w,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:t[18]||(t[18]=o=>q(C)?C.value=!e(C):C=!e(C))})):($(),_(w,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:t[19]||(t[19]=o=>q(C)?C.value=!e(C):C=!e(C))}))]),_:1},8,["modelValue","content-loading","type","invalid"])]),_:1},8,["error","content-loading"])):V("",!0)]),_:1})]),r(k,{class:"mb-5 md:mb-8"}),c("div",qe,[c("h6",Le,v(s.$t("customers.billing_address")),1),e(n).currentCustomer.billing?($(),_(U,{key:0,class:"col-span-5 lg:col-span-4"},{default:i(()=>[r(u,{label:s.$t("customers.name"),"content-loading":e(l)},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.billing.name,"onUpdate:modelValue":t[22]||(t[22]=o=>e(n).currentCustomer.billing.name=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",class:"w-full",name:"address_name"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),r(u,{label:s.$t("customers.country"),"content-loading":e(l)},{default:i(()=>[r(F,{modelValue:e(n).currentCustomer.billing.country_id,"onUpdate:modelValue":t[23]||(t[23]=o=>e(n).currentCustomer.billing.country_id=o),"value-prop":"id",label:"name","track-by":"name","resolve-on-load":"",searchable:"","content-loading":e(l),options:e(P).countries,placeholder:s.$t("general.select_country"),class:"w-full"},null,8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["label","content-loading"]),r(u,{label:s.$t("customers.state"),"content-loading":e(l)},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.billing.state,"onUpdate:modelValue":t[24]||(t[24]=o=>e(n).currentCustomer.billing.state=o),"content-loading":e(l),name:"billing.state",type:"text"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),r(u,{"content-loading":e(l),label:s.$t("customers.city")},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.billing.city,"onUpdate:modelValue":t[25]||(t[25]=o=>e(n).currentCustomer.billing.city=o),"content-loading":e(l),name:"billing.city",type:"text"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),r(u,{label:s.$t("customers.address"),error:e(a).currentCustomer.billing.address_street_1.$error&&e(a).currentCustomer.billing.address_street_1.$errors[0].$message||e(a).currentCustomer.billing.address_street_2.$error&&e(a).currentCustomer.billing.address_street_2.$errors[0].$message,"content-loading":e(l)},{default:i(()=>[r(S,{modelValue:e(n).currentCustomer.billing.address_street_1,"onUpdate:modelValue":t[26]||(t[26]=o=>e(n).currentCustomer.billing.address_street_1=o),modelModifiers:{trim:!0},"content-loading":e(l),placeholder:s.$t("general.street_1"),type:"text",name:"billing_street1","container-class":"mt-3",onInput:t[27]||(t[27]=o=>e(a).currentCustomer.billing.address_street_1.$touch())},null,8,["modelValue","content-loading","placeholder"]),r(S,{modelValue:e(n).currentCustomer.billing.address_street_2,"onUpdate:modelValue":t[28]||(t[28]=o=>e(n).currentCustomer.billing.address_street_2=o),modelModifiers:{trim:!0},"content-loading":e(l),placeholder:s.$t("general.street_2"),type:"text",class:"mt-3",name:"billing_street2","container-class":"mt-3",onInput:t[29]||(t[29]=o=>e(a).currentCustomer.billing.address_street_2.$touch())},null,8,["modelValue","content-loading","placeholder"])]),_:1},8,["label","error","content-loading"]),c("div",ze,[r(u,{"content-loading":e(l),label:s.$t("customers.phone"),class:"text-left"},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.billing.phone,"onUpdate:modelValue":t[30]||(t[30]=o=>e(n).currentCustomer.billing.phone=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",name:"phone"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),r(u,{label:s.$t("customers.zip_code"),"content-loading":e(l),class:"mt-2 text-left"},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.billing.zip,"onUpdate:modelValue":t[31]||(t[31]=o=>e(n).currentCustomer.billing.zip=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",name:"zip"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"])])]),_:1})):V("",!0)]),r(k,{class:"mb-5 md:mb-8"}),c("div",Pe,[c("div",Fe,[r(G,{type:"button","content-loading":e(l),size:"sm",variant:"primary-outline",onClick:t[32]||(t[32]=o=>e(n).copyAddress(!0))},{left:i(o=>[r(w,{name:"DocumentDuplicateIcon",class:A(o.class)},null,8,["class"])]),default:i(()=>[O(" "+v(s.$t("customers.copy_billing_address")),1)]),_:1},8,["content-loading"])])]),e(n).currentCustomer.shipping?($(),H("div",je,[c("h6",De,v(s.$t("customers.shipping_address")),1),r(U,{class:"col-span-5 lg:col-span-4"},{default:i(()=>[r(u,{"content-loading":e(l),label:s.$t("customers.name")},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.shipping.name,"onUpdate:modelValue":t[33]||(t[33]=o=>e(n).currentCustomer.shipping.name=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",name:"address_name"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),r(u,{label:s.$t("customers.country"),"content-loading":e(l)},{default:i(()=>[r(F,{modelValue:e(n).currentCustomer.shipping.country_id,"onUpdate:modelValue":t[34]||(t[34]=o=>e(n).currentCustomer.shipping.country_id=o),"value-prop":"id",label:"name","track-by":"name","resolve-on-load":"",searchable:"","content-loading":e(l),options:e(P).countries,placeholder:s.$t("general.select_country"),class:"w-full"},null,8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["label","content-loading"]),r(u,{label:s.$t("customers.state"),"content-loading":e(l)},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.shipping.state,"onUpdate:modelValue":t[35]||(t[35]=o=>e(n).currentCustomer.shipping.state=o),"content-loading":e(l),name:"shipping.state",type:"text"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),r(u,{"content-loading":e(l),label:s.$t("customers.city")},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.shipping.city,"onUpdate:modelValue":t[36]||(t[36]=o=>e(n).currentCustomer.shipping.city=o),"content-loading":e(l),name:"shipping.city",type:"text"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),r(u,{label:s.$t("customers.address"),"content-loading":e(l),error:e(a).currentCustomer.shipping.address_street_1.$error&&e(a).currentCustomer.shipping.address_street_1.$errors[0].$message||e(a).currentCustomer.shipping.address_street_2.$error&&e(a).currentCustomer.shipping.address_street_2.$errors[0].$message},{default:i(()=>[r(S,{modelValue:e(n).currentCustomer.shipping.address_street_1,"onUpdate:modelValue":t[37]||(t[37]=o=>e(n).currentCustomer.shipping.address_street_1=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",placeholder:s.$t("general.street_1"),name:"shipping_street1",onInput:t[38]||(t[38]=o=>e(a).currentCustomer.shipping.address_street_1.$touch())},null,8,["modelValue","content-loading","placeholder"]),r(S,{modelValue:e(n).currentCustomer.shipping.address_street_2,"onUpdate:modelValue":t[39]||(t[39]=o=>e(n).currentCustomer.shipping.address_street_2=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",placeholder:s.$t("general.street_2"),name:"shipping_street2",class:"mt-3","container-class":"mt-3",onInput:t[40]||(t[40]=o=>e(a).currentCustomer.shipping.address_street_2.$touch())},null,8,["modelValue","content-loading","placeholder"])]),_:1},8,["label","content-loading","error"]),c("div",Ee,[r(u,{"content-loading":e(l),label:s.$t("customers.phone"),class:"text-left"},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.shipping.phone,"onUpdate:modelValue":t[41]||(t[41]=o=>e(n).currentCustomer.shipping.phone=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",name:"phone"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),r(u,{label:s.$t("customers.zip_code"),"content-loading":e(l),class:"mt-2 text-left"},{default:i(()=>[r(d,{modelValue:e(n).currentCustomer.shipping.zip,"onUpdate:modelValue":t[42]||(t[42]=o=>e(n).currentCustomer.shipping.zip=o),modelModifiers:{trim:!0},"content-loading":e(l),type:"text",name:"zip"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"])])]),_:1})])):V("",!0),e(b).customFields.length>0?($(),_(k,{key:1,class:"mb-5 md:mb-8"})):V("",!0),c("div",Ge,[e(b).customFields.length>0?($(),H("h6",Ne,v(s.$t("settings.custom_fields.title")),1)):V("",!0),c("div",Te,[r(we,{type:"Customer",store:e(n),"store-prop":"currentCustomer","is-edit":e(h),"is-loading":e(X),"custom-field-scope":D},null,8,["store","is-edit","is-loading"])])])]),_:1})],40,he)]),_:1})}}};export{Je as default};