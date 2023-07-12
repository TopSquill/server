"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5162],{37948:(Q,M,t)=>{t.d(M,{Z:()=>ve});var e=t(67294),o=t(64289),j=t(185),P=t(88767),v=t(16550),x=t(48474),Ce=t(45697),i=t.n(Ce),H=t(85893);const be=n=>(0,H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...n,children:(0,H.jsx)("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),Me=be;var re=t(85018),N=t(67109),Z=t(53979),p=t(11047),B=t(29728),Pe=t(49066),V=t(41580),z=t(11276),I=t(74571),_=t(16364),A=t(41054),k=t(86896),le=t(19270),O=t(75515),oe=t(46449),xe=t(36213),ye=t(92155),X=t(11700),a=t.n(X);const b=({disabledEvents:n,name:s,events:r,inputValue:l,handleChange:c,handleChangeAll:C})=>{const d=r.filter(h=>!n.includes(h)),u=l.length===d.length,E=l.length>0,y=({target:{name:h}})=>{C({target:{name:h,value:!u}})};return e.createElement("tr",null,e.createElement("td",null,e.createElement(xe.X,{indeterminate:E&&!u,"aria-label":"Select all entries",name:s,onChange:y,value:u},a()(s))),r.map(h=>e.createElement("td",{key:h},e.createElement(ye.C,{disabled:n.includes(h),"aria-label":h,name:h,value:l.includes(h),onValueChange:f=>c({target:{name:h,value:f}})}))))};b.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange(){},handleChangeAll(){}},b.propTypes={disabledEvents:i().array,events:i().array,inputValue:i().array,handleChange:i().func,handleChangeAll:i().func,name:i().string.isRequired};const W=b,G=n=>n.reduce((s,r)=>{const l=r.split(".")[0];return s[l]||(s[l]=[]),s[l].push(r),s},{}),J=oe.ZP.table`
  td {
    height: ${52/16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme:n})=>n.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({theme:n})=>n.spaces[7]};
  }
`,K={headers:{default:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}],draftAndPublish:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},de=({isDraftAndPublish:n})=>{const s=n?K.headers.draftAndPublish:K.headers.default,r=n?K.events.draftAndPublish:K.events.default,{formatMessage:l}=(0,k.Z)(),{values:c,handleChange:C}=(0,A.u6)(),d="events",u=c.events,E=[],y=G(u),h=({target:{name:g,value:U}})=>{let T=new Set(u);U?T.add(g):T.delete(g),C({target:{name:d,value:Array.from(T)}})},f=({target:{name:g,value:U}})=>{let T=new Set(u);U?r[g].forEach(m=>{E.includes(m)||T.add(m)}):r[g].forEach(m=>T.delete(m)),C({target:{name:d,value:Array.from(T)}})};return e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(le.Q,null,l({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),e.createElement(J,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null),s.map(g=>g==="app.utils.publish"||g==="app.utils.unpublish"?e.createElement("td",{key:g.id,title:l({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},l(g))):e.createElement("td",{key:g.id},e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},l(g)))))),e.createElement("tbody",null,Object.keys(r).map(g=>e.createElement(W,{disabledEvents:E,key:g,name:g,events:r[g],inputValue:y[g],handleChange:h,handleChangeAll:f})))))};de.propTypes={isDraftAndPublish:i().bool.isRequired};const Ie=de;var Y=t(96315),q=t(39785),Oe=t(29178),Re=t(90608);const ce=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],ee=({name:n,onChange:s,value:r,...l})=>{const[c,C]=(0,e.useState)(r?[...ce,r]:ce),d=E=>{s({target:{name:n,value:E}})},u=E=>{C(y=>[...y,E]),s({target:{name:n,value:E}})};return e.createElement(Oe.XU,{...l,onChange:d,onCreateOption:u,placeholder:"",value:r},c.map(E=>e.createElement(Re.O,{value:E,key:E},E)))};ee.defaultProps={value:void 0},ee.propTypes={name:i().string.isRequired,onChange:i().func.isRequired,value:i().string};const Te=ee,De=()=>{const{formatMessage:n}=(0,k.Z)(),{values:s,errors:r}=(0,A.u6)();return e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(le.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(V.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(A.F2,{validateOnChange:!1,name:"headers",render:({push:l,remove:c})=>e.createElement(z.r,{gap:4},s.headers?.map((C,d)=>e.createElement(e.Fragment,{key:d},e.createElement(I.P,{col:6},e.createElement(A.gN,{as:Te,name:`headers.${d}.key`,"aria-label":`row ${d+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:r.headers?.[d]?.key&&n({id:r.headers[d]?.key,defaultMessage:r.headers[d]?.key})})),e.createElement(I.P,{col:6},e.createElement(p.k,{alignItems:"flex-end"},e.createElement(V.x,{style:{flex:1}},e.createElement(A.gN,{as:_.o,"aria-label":`row ${d+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:`headers.${d}.value`,error:r.headers?.[d]?.value&&n({id:r.headers[d]?.value,defaultMessage:r.headers[d]?.value})})),e.createElement(p.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:r.headers?.[d]?.value?0:5},e.createElement(o.fG,{onClick:()=>s.headers.length!==1&&c(d),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:d+1})})))))),e.createElement(I.P,{col:12},e.createElement(q.A,{type:"button",onClick:()=>{l({key:"",value:""})},startIcon:e.createElement(Y.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var Ae=t(86647),te=t(70968);const $=oe.ZP.svg(({theme:n,color:s})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[s]};
  }
`),F=({isPending:n,statusCode:s})=>{const{formatMessage:r}=(0,k.Z)();return n?e.createElement(p.k,{gap:2,alignItems:"center"},e.createElement($,{as:Ae.Z}),e.createElement(O.Z,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):s>=200&&s<300?e.createElement(p.k,{gap:2,alignItems:"center"},e.createElement($,{as:re.Z,color:"success700"}),e.createElement(O.Z,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):s>=300?e.createElement(p.k,{gap:2,alignItems:"center"},e.createElement($,{as:te.Z,color:"danger700"}),e.createElement(O.Z,null,r({id:"Settings.error",defaultMessage:"error"})," ",s)):null};F.propTypes={isPending:i().bool.isRequired,statusCode:i().number},F.defaultProps={statusCode:void 0};const ae=({statusCode:n,message:s})=>{const{formatMessage:r}=(0,k.Z)();return n>=200&&n<300?e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(O.Z,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(p.k,{maxWidth:(0,o.Q1)(250),justifyContent:"flex-end",title:s},e.createElement(O.Z,{ellipsis:!0,textColor:"neutral600"},s))):null};ae.propTypes={statusCode:i().number,message:i().string},ae.defaultProps={statusCode:void 0,message:void 0};const ne=({onCancel:n})=>{const{formatMessage:s}=(0,k.Z)();return e.createElement(p.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(p.k,{gap:2,alignItems:"center"},e.createElement(O.Z,{textColor:"neutral400"},s({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement($,{as:te.Z,color:"neutral400"}))))};ne.propTypes={onCancel:i().func.isRequired};const se=({isPending:n,onCancel:s,response:r})=>{const{statusCode:l,message:c}=r,{formatMessage:C}=(0,k.Z)();return e.createElement(V.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(z.r,{gap:4,style:{alignItems:"center"}},e.createElement(I.P,{col:3},e.createElement(O.Z,null,C({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(I.P,{col:3},e.createElement(F,{isPending:n,statusCode:l})),e.createElement(I.P,{col:6},n?e.createElement(ne,{onCancel:s}):e.createElement(ae,{statusCode:l,message:c}))))};se.defaultProps={isPending:!1,onCancel(){},response:{}},se.propTypes={isPending:i().bool,onCancel:i().func,response:i().object};const he=se;var R=t(87561);const ge=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,me=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Ee=R.Ry().shape({name:R.Z_(o.I0.string).required(o.I0.required).matches(ge,o.I0.regex),url:R.Z_(o.I0.string).required(o.I0.required).matches(me,o.I0.regex),headers:R.Vo(n=>{let s=R.IX();if(n.length===1){const{key:r,value:l}=n[0];if(!r&&!l)return s}return s.of(R.Ry().shape({key:R.Z_().required(o.I0.required),value:R.Z_().required(o.I0.required)}))}),events:R.IX()}),L=({handleSubmit:n,data:s,triggerWebhook:r,isCreating:l,isTriggering:c,triggerResponse:C,isDraftAndPublishEvents:d})=>{const{formatMessage:u}=(0,k.Z)(),[E,y]=(0,e.useState)(!1);return e.createElement(A.J9,{onSubmit:n,initialValues:{name:s?.name||"",url:s?.url||"",headers:Object.keys(s?.headers||[]).length?Object.entries(s.headers).map(([h,f])=>({key:h,value:f})):[{key:"",value:""}],events:s?.events||[]},validationSchema:Ee,validateOnChange:!1,validateOnBlur:!1},({handleSubmit:h,errors:f})=>e.createElement(o.l0,{noValidate:!0},e.createElement(Z.T,{primaryAction:e.createElement(p.k,{gap:2},e.createElement(B.z,{onClick:()=>{r(),y(!0)},variant:"tertiary",startIcon:e.createElement(Me,null),disabled:l||c,size:"L"},u({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(B.z,{startIcon:e.createElement(re.Z,null),onClick:h,type:"submit",size:"L"},u({id:"global.save",defaultMessage:"Save"}))),title:l?u({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):s?.name,navigationAction:e.createElement(o.rU,{startIcon:e.createElement(N.Z,null),to:"/settings/webhooks"},u({id:"global.back",defaultMessage:"Back"}))}),e.createElement(Pe.D,null,e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:4},E&&e.createElement("div",{className:"trigger-wrapper"},e.createElement(he,{isPending:c,response:C,onCancel:()=>y(!1)})),e.createElement(V.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(z.r,{gap:6},e.createElement(I.P,{col:6},e.createElement(A.gN,{as:_.o,name:"name",error:f.name&&u({id:f.name}),label:u({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(I.P,{col:12},e.createElement(A.gN,{as:_.o,name:"url",error:f.url&&u({id:f.url}),label:u({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(De,null),e.createElement(Ie,{isDraftAndPublish:d})))))))};L.propTypes={data:i().object,handleSubmit:i().func.isRequired,triggerWebhook:i().func.isRequired,isCreating:i().bool.isRequired,isDraftAndPublishEvents:i().bool.isRequired,isTriggering:i().bool.isRequired,triggerResponse:i().object},L.defaultProps={data:void 0,triggerResponse:void 0};const je=L,S=n=>({...n,headers:pe(n.headers)}),pe=n=>n.reduce((s,r)=>{const{key:l,value:c}=r;return l!==""?{...s,[l]:c}:s},{}),fe=S,ve=()=>{const{params:{id:n}}=(0,v.$B)("/settings/webhooks/:id"),{replace:s}=(0,v.k6)(),{lockApp:r,unlockApp:l}=(0,o.o1)(),c=(0,o.lm)(),C=(0,P.useQueryClient)(),{isLoading:d,collectionTypes:u}=(0,x.bP)(),{put:E,get:y,post:h}=(0,o.kY)(),f=n==="create",{isLoading:g,data:U}=(0,P.useQuery)(["get-webhook",n],async()=>{try{const{data:{data:D}}=await y(`/admin/webhooks/${n}`);return D}catch{return c({type:"warning",message:{id:"notification.error"}}),null}},{enabled:!f}),{isLoading:T,data:m,isIdle:Se,mutate:Ze}=(0,P.useMutation)(()=>h(`/admin/webhooks/${n}/trigger`)),Be=()=>Ze(null,{onError(){c({type:"warning",message:{id:"notification.error"}})}}),We=(0,P.useMutation)(D=>h("/admin/webhooks",D)),Ue=(0,P.useMutation)(({id:D,body:w})=>E(`/admin/webhooks/${D}`,w)),we=async D=>{f?(r(),We.mutate(fe(D),{onSuccess({data:w}){c({type:"success",message:{id:"Settings.webhooks.created"}}),s(`/settings/webhooks/${w.data.id}`),l()},onError(w){c({type:"warning",message:{id:"notification.error"}}),console.log(w),l()}})):(r(),Ue.mutate({id:n,body:fe(D)},{onSuccess(){C.invalidateQueries(["get-webhook",n]),c({type:"success",message:{id:"notification.form.success.fields"}}),l()},onError(w){c({type:"warning",message:{id:"notification.error"}}),console.log(w),l()}}))},Ve=e.useMemo(()=>u.some(D=>D.options.draftAndPublish===!0),[u]);return g||d?e.createElement(o.dO,null):e.createElement(j.o,null,e.createElement(o.SL,{name:"Webhooks"}),e.createElement(je,{handleSubmit:we,data:U,triggerWebhook:Be,isCreating:f,isTriggering:T,isTriggerIdle:Se,triggerResponse:m?.data.data,isDraftAndPublishEvents:Ve}))}},3672:(Q,M,t)=>{t.r(M),t.d(M,{default:()=>x});var e=t(67294),o=t(64289),j=t(87751),P=t(37948);const x=()=>e.createElement(o.O4,{permissions:j.Z.settings.webhooks.create},e.createElement(P.Z,null))},42122:(Q,M,t)=>{t.r(M),t.d(M,{default:()=>x});var e=t(67294),o=t(64289),j=t(87751),P=t(37948);const x=()=>e.createElement(o.O4,{permissions:j.Z.settings.webhooks.update},e.createElement(P.Z,null))},29178:(Q,M,t)=>{t.d(M,{Wx:()=>ye,XU:()=>_,hQ:()=>I});var e=t(85893),o=t(67294),j=t(70968),P=t(12645),v=t(61505),x=t(46449),Ce=t(51809),i=t(10892),H=t(2504),be=t(75368),Me=t(15585),re=t(77197),N=t(41580),Z=t(75515),p=t(54574),B=t(11047),Pe=t(19270),V=t(63428),z=t(96404);const I=({children:a,clearLabel:b="clear",creatable:W=!1,createMessage:ie=L=>`Create "${L}"`,defaultFilterValue:G,defaultTextValue:J,defaultOpen:K=!1,open:de,onOpenChange:Ie,disabled:Y=!1,error:q,filterValue:Oe,hasMoreItems:Re=!1,hint:$e,id:ce,label:ee,labelAction:Te,loading:ue=!1,loadingMessage:De="Loading content...",noOptionsMessage:Ae=()=>"No results found",onChange:te,onClear:$,onCreateOption:F,onFilterValueChange:ae,onInputChange:ne,onTextValueChange:se,onLoadMore:he,placeholder:R="Select or enter a value",required:ge=!1,startIcon:me,textValue:Le,value:Ee})=>{const[L,je]=(0,i.T)({prop:de,defaultProp:K,onChange:Ie}),[S,pe]=(0,i.T)({prop:Le,defaultProp:J,onChange:se}),[fe,ke]=(0,i.T)({prop:Oe,defaultProp:G,onChange:ae}),ve=o.useRef(null),n=o.useRef(null),s=o.useRef(null),r=(0,H.M)(ce),l=m=>{$&&!Y&&(pe(""),ke(""),$(m),n.current.focus())},c=m=>{je(m)},C=m=>{pe(m)},d=m=>{ke(m)},u=m=>{ne&&ne(m)},E=m=>{te&&te(m)},y=(0,H.M)(),h=`intersection-${(0,Ce.B)(y)}`,f=m=>{he&&Re&&!ue&&he(m)},g=()=>{F&&S&&F(S)};(0,be.s)(ve,f,{selectorToWatch:`#${h}`,skipWhen:!L});const U=`${r}-hint`,T=`${r}-error`;return(0,e.jsx)(p.g,{hint:$e,error:q,id:r,required:ge,children:(0,e.jsxs)(B.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(Pe.Q,{action:Te,children:ee}),(0,e.jsxs)(v.hQ.Root,{autocomplete:W?"list":"both",open:L,onOpenChange:c,onTextValueChange:C,textValue:S,allowCustomValue:!0,disabled:Y,required:ge,value:Ee===null?void 0:Ee,onValueChange:E,filterValue:fe,onFilterValueChange:d,children:[(0,e.jsxs)(k,{$hasError:!!q,children:[(0,e.jsxs)(B.k,{flex:"1",as:"span",gap:3,children:[me?(0,e.jsx)(N.x,{as:"span","aria-hidden":!0,children:me}):null,(0,e.jsx)(le,{placeholder:R,id:r,"aria-invalid":!!q,"aria-labelledby":`${U} ${T}`,onChange:u,ref:n})]}),(0,e.jsxs)(B.k,{as:"span",gap:3,children:[S&&$?(0,e.jsx)(A,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:l,"aria-disabled":Y,"aria-label":b,title:b,ref:s,children:(0,e.jsx)(j.Z,{})}):null,(0,e.jsx)(O,{children:(0,e.jsx)(P.Z,{})})]})]}),(0,e.jsx)(v.hQ.Portal,{children:(0,e.jsx)(oe,{sideOffset:4,children:(0,e.jsxs)(xe,{ref:ve,children:[a,W?(0,e.jsx)(v.hQ.CreateItem,{onPointerUp:g,onClick:g,asChild:!0,children:(0,e.jsx)(X,{children:(0,e.jsx)(Z.Z,{children:ie(S??"")})})}):null,!W&&!ue?(0,e.jsx)(v.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(X,{$hasHover:!1,children:(0,e.jsx)(Z.Z,{children:Ae(S??"")})})}):null,ue?(0,e.jsx)(B.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(re.a,{small:!0,children:De})}):null,(0,e.jsx)(N.x,{id:h,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(V.J,{}),(0,e.jsx)(z.c,{})]})})},_=a=>(0,e.jsx)(I,{...a,creatable:!0}),A=(0,x.ZP)(N.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,k=(0,x.ZP)(v.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:a,$hasError:b})=>b?a.colors.danger600:a.colors.neutral200};
  padding-right: ${({theme:a})=>a.spaces[3]};
  padding-left: ${({theme:a})=>a.spaces[3]};
  border-radius: ${({theme:a})=>a.borderRadius};
  background: ${({theme:a})=>a.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spaces[4]};

  &[data-disabled] {
    color: ${({theme:a})=>a.colors.neutral600};
    background: ${({theme:a})=>a.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:a,$hasError:b})=>(0,Me.k3)()({theme:a,hasError:b})};
`,le=(0,x.ZP)(v.hQ.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:a})=>a.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,O=(0,x.ZP)(v.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,oe=(0,x.ZP)(v.hQ.Content)`
  background: ${({theme:a})=>a.colors.neutral0};
  box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:a})=>a.zIndices[1]};
`,xe=(0,x.ZP)(v.hQ.Viewport)`
  padding: ${({theme:a})=>a.spaces[1]};
`,ye=o.forwardRef(({children:a,value:b,disabled:W,textValue:ie,...G},J)=>(0,e.jsx)(v.hQ.ComboboxItem,{asChild:!0,value:b,disabled:W,textValue:ie,children:(0,e.jsx)(X,{ref:J,...G,children:(0,e.jsx)(v.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(Z.Z,{children:a})})})})),X=x.ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:a})=>a.spaces[2]} ${({theme:a})=>a.spaces[4]};
  background-color: ${({theme:a})=>a.colors.neutral0};
  border-radius: ${({theme:a})=>a.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:a})=>a.colors.primary100};

    ${Z.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:a,$hasHover:b=!0})=>b?a.colors.primary100:a.colors.neutral0};
  }

  &[data-highlighted] {
    ${Z.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }
`},90608:(Q,M,t)=>{t.d(M,{O:()=>o});var e=t(29178);const o=e.Wx},67109:(Q,M,t)=>{t.d(M,{Z:()=>j});var e=t(85893);const o=P=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...P,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),j=o}}]);
