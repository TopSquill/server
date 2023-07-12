"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[801],{56546:(Gt,J,n)=>{n.r(J),n.d(J,{default:()=>xt});var e=n(67294),s=n(64289),ye=n(88767),Ce=n(27361),Te=n.n(Ce);const X={i8:"4.10.5"};var j=n(48474),ve=n(99168),Se=n(61080),U=n(86706),h=n(16550),Me=n(38914),w=n.n(Me);const Ae={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}};var P=n(46449),Ie=n(45697),i=n.n(Ie),x=n(86896),p=n(11047),Re=n(44034),q=n(25896),Le=n(12028),C=n(41580),_=n(29728),Pe=n(70968);const xe=(0,P.ZP)(p.k)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,ee=({onClose:t,onSkip:a,children:o,hideSkip:d})=>{const{formatMessage:u}=(0,x.Z)();return e.createElement(Re.h,null,e.createElement(xe,{onClick:t,padding:8,justifyContent:"center"},e.createElement(q.i,{onEscape:t},e.createElement(p.k,{direction:"column",alignItems:"stretch",background:"neutral0",width:(0,s.Q1)(660),shadow:"popupShadow",hasRadius:!0,padding:4,gap:8,role:"dialog","aria-modal":!0,onClick:c=>c.stopPropagation()},e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(Le.h,{onClick:t,"aria-label":u({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(Pe.Z,null)})),e.createElement(C.x,{paddingLeft:7,paddingRight:7,paddingBottom:d?8:0},o),!d&&e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(_.z,{variant:"tertiary",onClick:a},u({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};ee.propTypes={children:i().node.isRequired,onClose:i().func.isRequired,onSkip:i().func.isRequired,hideSkip:i().bool.isRequired};const ke=ee;var te=n(18172);const ne={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},Ge=(t=ne,a)=>(0,te.ZP)(t,o=>{switch(a.type){case"UPDATE_MODAL":{o.stepContent=a.content,o.sectionIndex=a.newSectionIndex,o.stepIndex=a.newStepIndex,o.hasSectionAfter=a.newHasSectionAfter,o.hasStepAfter=a.newHasStepAfter;break}default:return o}});var E=n(75515),ae=n(37323);const Ne=P.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,oe=({id:t,defaultMessage:a})=>{const{formatMessage:o}=(0,x.Z)();return e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:4,paddingBottom:6},o({id:t,defaultMessage:a},{documentationLink:Oe,b:be,p:Be,light:De,ul:Ue,li:Fe}))},Oe=t=>e.createElement(E.Z,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},t),be=t=>e.createElement(E.Z,{fontWeight:"semiBold"},t),Be=t=>e.createElement(E.Z,null,t),De=t=>e.createElement(E.Z,{textColor:"neutral600"},t),Ue=t=>e.createElement(C.x,{paddingLeft:6},e.createElement("ul",null,t)),Fe=t=>e.createElement(Ne,null,t);oe.propTypes={id:i().string.isRequired,defaultMessage:i().string.isRequired};const je=oe,k="isActive",S="isDone",G="isNotDone",Z=({type:t,...a})=>e.createElement(C.x,{width:(0,s.Q1)(2),height:"100%",background:t===G?"neutral300":"primary500",hasRadius:!0,...a});Z.defaultProps={type:G},Z.propTypes={type:i().oneOf([k,S,G])};const W=Z;var Ze=n(52624),We=n(85018);const z=({type:t,number:a})=>t===S?e.createElement(p.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,s.Q1)(30),height:(0,s.Q1)(30),justifyContent:"center"},e.createElement(Ze.J,{as:We.Z,"aria-hidden":!0,width:(0,s.Q1)(16),color:"neutral0"})):t===k?e.createElement(p.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,s.Q1)(30),height:(0,s.Q1)(30),justifyContent:"center"},e.createElement(E.Z,{fontWeight:"semiBold",textColor:"neutral0"},a)):e.createElement(p.k,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,s.Q1)(30),height:(0,s.Q1)(30),justifyContent:"center"},e.createElement(E.Z,{fontWeight:"semiBold",textColor:"neutral600"},a));z.defaultProps={number:void 0,type:G},z.propTypes={number:i().number,type:i().oneOf([k,S,G])};const ze=z,Q=({number:t,last:a,type:o})=>e.createElement(C.x,{paddingTop:3,paddingBottom:a?0:3},e.createElement(ze,{number:t,type:o}));Q.defaultProps={number:void 0,last:!1,type:""},Q.propTypes={number:i().number,last:i().bool,type:i().string};const se=Q,H=({title:t,content:a,cta:o,onCtaClick:d,sectionIndex:u,stepIndex:c,hasSectionAfter:g})=>{const{formatMessage:m}=(0,x.Z)(),f=u>0,l=c>0,v=u+1;return e.createElement(e.Fragment,null,e.createElement(p.k,{alignItems:"stretch"},e.createElement(p.k,{marginRight:8,justifyContent:"center",minWidth:(0,s.Q1)(30)},f&&e.createElement(W,{type:S,minHeight:(0,s.Q1)(24)})),e.createElement(E.Z,{variant:"sigma",textColor:"primary600"},m({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(p.k,null,e.createElement(p.k,{marginRight:8,minWidth:(0,s.Q1)(30)},e.createElement(se,{number:u+1,type:l?S:k})),e.createElement(E.Z,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},m(t))),e.createElement(p.k,{alignItems:"stretch"},e.createElement(p.k,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,s.Q1)(30)},g&&e.createElement(e.Fragment,null,e.createElement(W,{type:S}),l&&e.createElement(se,{number:v+1,type:k,last:!0}))),e.createElement(C.x,null,e.createElement(je,{...a}),o&&(o.target?e.createElement(s.Qj,{endIcon:e.createElement(ae.Z,null),onClick:d,to:o.target},m(o.title)):e.createElement(_.z,{endIcon:e.createElement(ae.Z,null),onClick:d},m(o.title))))),l&&g&&e.createElement(C.x,{paddingTop:3},e.createElement(p.k,{marginRight:8,justifyContent:"center",width:(0,s.Q1)(30)},e.createElement(W,{type:S,minHeight:(0,s.Q1)(24)}))))};H.defaultProps={currentStep:null,cta:void 0},H.propTypes={sectionIndex:i().number.isRequired,stepIndex:i().number.isRequired,hasSectionAfter:i().bool.isRequired,content:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired}).isRequired,cta:i().shape({target:i().string,title:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired})}),currentStep:i().string,onCtaClick:i().func.isRequired,title:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired}).isRequired};const Qe=H,He=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:o,setStepState:d,isGuidedTourVisible:u,setSkipped:c}=(0,s.c1)(),[g,m]=(0,e.useState)(t),[{stepContent:f,sectionIndex:l,stepIndex:v,hasSectionAfter:M,hasStepAfter:O},b]=(0,e.useReducer)(Ge,ne),{trackUsage:L}=(0,s.rS)();(0,e.useEffect)(()=>{if(!t){m(!1);return}const[A]=w()(a,t);m(!A&&u)},[t,a,u]),(0,e.useEffect)(()=>{if(t){const[A]=w()(Ae,t),y=Object.keys(a),[I,r]=t.split("."),R=y.indexOf(I),F=Object.keys(a[I]).indexOf(r),D=R<y.length-1,kt=F<Object.keys(a[I]).length-1;b({type:"UPDATE_MODAL",content:A,newSectionIndex:R,newStepIndex:F,newHasSectionAfter:D,newHasStepAfter:kt})}},[t,a]);const T=()=>{d(t,!0),L(f.trackingEvent),o(null)},B=()=>{c(!0),o(null),L("didSkipGuidedtour")};return g&&f?e.createElement(ke,{hideSkip:!O&&!M,onSkip:B,onClose:T},e.createElement(Qe,{...f,onCtaClick:T,currentStep:t,sectionIndex:l,stepIndex:v,hasSectionAfter:M})):null};var $e=n(70004),Ve=n(64330),Ke=n(37907),Ye=n(98994),$=n(38040),ie=n(51974),Je=n(45842),Xe=n(37227),we=n(56691),qe=n(42384),_e=n(90690),N=n(73727);const et=(0,P.ZP)(C.x)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,re=(0,P.ZP)(N.OL)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,le=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const o=(0,e.useRef)(),[d,u]=(0,e.useState)(!1),{logos:{menu:c}}=(0,j.um)(),[g,m]=(0,s.Yw)("navbar-condensed",!1),{userDisplayName:f}=(0,s.L7)(),{formatMessage:l}=(0,x.Z)(),{trackUsage:v}=(0,s.rS)(),{pathname:M}=(0,h.TH)(),O=(0,h.k6)(),{post:b}=(0,s.tg)(),L=f.split(" ").map(r=>r.substring(0,1)).join("").substring(0,2),T=()=>u(r=>!r),B=async()=>{await b("/admin/logout"),s.I8.clearAppStorage(),T(),O.push("/auth/login")},A=r=>{!r.currentTarget.contains(r.relatedTarget)&&r.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&u(!1)},y=(r=null)=>{v("willNavigate",{from:M,to:r})},I=l({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Dashboard"});return e.createElement(Ve.$,{condensed:g},e.createElement(Ke.D,{as:N.OL,workplace:l({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:I,icon:e.createElement("img",{src:c.custom||c.default,alt:l({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement($e.i,null),e.createElement(Ye._,null,e.createElement($.O,{as:N.OL,to:"/content-manager",icon:e.createElement(qe.Z,null),onClick:()=>y("/content-manager")},l({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(ie.y,{label:l({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(r=>{const R=r.icon;return e.createElement($.O,{as:N.OL,to:r.to,key:r.to,icon:e.createElement(R,null),onClick:()=>y(r.to)},l(r.intlLabel))})):null,t.length>0?e.createElement(ie.y,{label:l({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(r=>{const R=r.icon;return e.createElement($.O,{as:N.OL,badgeContent:r.notificationsCount>0&&r.notificationsCount.toString()||void 0,to:r.to,key:r.to,icon:e.createElement(R,null),onClick:()=>y(r.to)},l(r.intlLabel))})):null),e.createElement(Je.q,null,e.createElement(Xe.r,{id:"main-nav-user-button",ref:o,onClick:T,initials:L},f),d&&e.createElement(et,{onBlur:A,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(q.i,{onEscape:T},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:0},e.createElement(re,{tabIndex:0,onClick:T,to:"/me"},e.createElement(E.Z,null,l({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(re,{tabIndex:0,onClick:B,logout:"logout",to:"/auth/login"},e.createElement(E.Z,{textColor:"danger600"},l({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(_e.Z,null))))),e.createElement(we.w,{onClick:()=>m(r=>!r)},l(g?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};le.propTypes={generalSectionLinks:i().array.isRequired,pluginsSectionLinks:i().array.isRequired};const tt=le;var nt=n(727);const at=(0,P.ZP)(C.x)`
  flex: 1;
`,ce=({children:t,sideNav:a})=>{const{formatMessage:o}=(0,x.Z)();return e.createElement(C.x,{background:"neutral100"},e.createElement(nt.z,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(p.k,{alignItems:"flex-start"},a,e.createElement(at,null,t)))};ce.propTypes={children:i().node.isRequired,sideNav:i().node.isRequired};const ot=ce;var V=n(19631),st=n(36657);const it=(0,e.lazy)(()=>Promise.all([n.e(3848),n.e(6798),n.e(7027),n.e(994)]).then(n.bind(n,44545))),rt=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,74160))),lt=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,14928))),ct=(0,e.lazy)(()=>n.e(5516).then(n.bind(n,36936))),de=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23330))),dt=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,17502))),ut=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,50166))),ue=(0,e.lazy)(()=>n.e(5895).then(n.bind(n,62053))),pt=()=>{const{trackUsage:t}=(0,s.rS)(),a=(0,U.I0)(),o=(0,U.v9)(d=>d.admin_app.status);(0,e.useEffect)(()=>{o==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:st.e}))},[o])},mt=()=>{pt();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:o}=(0,j.H9)(),{menu:d}=(0,s.j1)(),u=(0,e.useMemo)(()=>d.filter(c=>c.Component).map(({to:c,Component:g,exact:m})=>(0,V.ot)(g,c,m)),[d]);return t?e.createElement(s.dO,null):e.createElement(ve.DndProvider,{backend:Se.PD},e.createElement(ot,{sideNav:e.createElement(tt,{generalSectionLinks:a,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(s.dO,null)},e.createElement(h.rs,null,e.createElement(h.AW,{path:"/",component:rt,exact:!0}),e.createElement(h.AW,{path:"/me",component:ut,exact:!0}),e.createElement(h.AW,{path:"/content-manager",component:it}),u,e.createElement(h.AW,{path:"/settings/:settingId",component:ue}),e.createElement(h.AW,{path:"/settings",component:ue,exact:!0}),e.createElement(h.AW,{path:"/marketplace"},e.createElement(ct,null)),e.createElement(h.AW,{path:"/list-plugins",exact:!0},e.createElement(lt,null)),e.createElement(h.AW,{path:"/404",component:de}),e.createElement(h.AW,{path:"/500",component:dt}),e.createElement(h.AW,{path:"",component:de}))),e.createElement(He,null)))},gt=t=>({plugins:Object.keys(t).reduce((a,o)=>(a[o]={...t[o]},a),{})});var ht=n(36968),ft=n.n(ht);const pe={plugins:null},Et=(t=pe,a)=>(0,te.ZP)(t,o=>{switch(a.type){case"SET_PLUGIN_READY":{ft()(o,["plugins",a.pluginId,"isReady"],!0);break}default:return o}}),yt=()=>{const{plugins:t}=(0,s.j1)(),[{plugins:a},o]=(0,e.useReducer)(Et,pe,()=>gt(t)),d=(0,e.useRef)(c=>{o({type:"SET_PLUGIN_READY",pluginId:c})});if(Object.keys(a).some(c=>a[c].isReady===!1)){const c=Object.keys(a).reduce((g,m)=>{const f=a[m].initializer;if(f){const l=a[m].pluginId;g.push(e.createElement(f,{key:l,setPlugin:d.current}))}return g},[]);return e.createElement(e.Fragment,null,c,e.createElement(s.dO,null))}return e.createElement(mt,null)};var me=n(28344);const Ct=()=>({type:me.l}),Tt=t=>({type:me.m,permissions:t}),ge=({children:t,permissions:a,refetchPermissions:o})=>{const{allPermissions:d}=(0,U.v9)(c=>c.rbacProvider),u=(0,U.I0)();return(0,e.useEffect)(()=>(u(Tt(a)),()=>{u(Ct())}),[a,u]),d?e.createElement(s.oL.Provider,{value:{allPermissions:d,refetchPermissions:o}},t):e.createElement(s.dO,null)};ge.propTypes={children:i().element.isRequired,permissions:i().array.isRequired,refetchPermissions:i().func.isRequired};const vt=ge;var St=n(52861),Mt=n(81249),K=n.n(Mt);const he=(t,a)=>!K().valid(t)||!K().valid(a)?!1:K().lt(t,a),fe=X.i8,At=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),{get:Y}=(0,s.tg)(),It=async t=>{try{const{data:{tag_name:a}}=await St.default.get("https://api.github.com/repos/strapi/strapi/releases/latest");return he(fe,a)&&At&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch{return fe}},Rt=async()=>{try{const{data:t,headers:a}=await Y("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Lt=async()=>{try{const{data:t,headers:a}=await Y("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Pt=async()=>{try{const{data:{data:{roles:t}}}=await Y("/admin/users/me");return t}catch(t){throw new Error(t)}},Ee=X.i8,xt=()=>{const{setGuidedTourVisibility:t}=(0,s.c1)(),a=(0,s.lm)(),o=s.I8.getUserInfo(),d=Te()(o,"username")||(0,V.Pp)(o.firstname,o.lastname),[u,c]=(0,e.useState)(d),[g,m]=(0,e.useState)(null),{showReleaseNotification:f}=(0,j.um)(),[{data:l,status:v},{data:M,isLoading:O},{data:b,status:L,refetch:T,isFetched:B,isFetching:A},{data:y}]=(0,ye.useQueries)([{queryKey:"app-infos",queryFn:Rt},{queryKey:"strapi-release",queryFn:()=>It(a),enabled:f,initialData:Ee},{queryKey:"admin-users-permission",queryFn:Lt,initialData:[]},{queryKey:"user-roles",queryFn:Pt}]),I=he(Ee,M);return(0,e.useEffect)(()=>{y&&y.find(({code:D})=>D==="strapi-super-admin")&&l?.autoReload&&t(!0)},[y,l,t]),(0,e.useEffect)(()=>{(async()=>{const D=await(0,V.Qy)(o);m(D)})()},[o]),O||(A&&B||v==="loading"||L==="loading")?e.createElement(s.dO,null):v==="error"?e.createElement("div",null,"error..."):e.createElement(s.iq,{...l,userId:g,latestStrapiReleaseTag:M,setUserDisplayName:c,shouldUpdateStrapi:I,userDisplayName:u},e.createElement(vt,{permissions:b,refetchPermissions:T},e.createElement(yt,null)))}}}]);