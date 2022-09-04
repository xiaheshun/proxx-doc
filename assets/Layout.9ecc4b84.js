var Me=Object.defineProperty,De=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var he=(u,t,e)=>t in u?Me(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,J=(u,t)=>{for(var e in t||(t={}))Ee.call(t,e)&&he(u,e,t[e]);if(pe)for(var e of pe(t))Re.call(t,e)&&he(u,e,t[e]);return u},Q=(u,t)=>De(u,Pe(t));import{_ as w,r as R,o as n,c,a as L,f as S,i as P,j as h,k as be,h as a,F as I,l as A,m as y,b,t as T,n as W,p as Z,q as C,w as B,s as me,v as $,e as j,x as Y,y as Ae,z as Oe,A as Fe,B as ee,C as te,D as q,E as ge,G as ke,H as E,u as $e,g as H,T as Le,I as z,J as ye,K as G,L as X,M as ze,N as We,O as ae,P as we,Q as Se,d as Ue,R as ne,S as Ve,U as K,V as oe,W as Ke,X as je,Y as qe,Z as Ge,$ as Xe,a0 as Ye,a1 as Je}from"./app.c0ba77c6.js";const Qe={},Ze={class:"theme-default-content"};function et(u,t){const e=R("Content");return n(),c("div",Ze,[L(e)])}var tt=w(Qe,[["render",et],["__file","HomeContent.vue"]]);const at={key:0,class:"features"},nt=S({__name:"HomeFeatures",setup(u){const t=P(),e=h(()=>be(t.value.features)?t.value.features:[]);return(i,o)=>a(e).length?(n(),c("div",at,[(n(!0),c(I,null,A(a(e),_=>(n(),c("div",{key:_.title,class:"feature"},[b("h2",null,T(_.title),1),b("p",null,T(_.details),1)]))),128))])):y("",!0)}});var ot=w(nt,[["__file","HomeFeatures.vue"]]);const rt=["innerHTML"],st=["textContent"],lt=S({__name:"HomeFooter",setup(u){const t=P(),e=h(()=>t.value.footer),i=h(()=>t.value.footerHtml);return(o,_)=>a(e)?(n(),c(I,{key:0},[a(i)?(n(),c("div",{key:0,class:"footer",innerHTML:a(e)},null,8,rt)):(n(),c("div",{key:1,class:"footer",textContent:T(a(e))},null,8,st))],64)):y("",!0)}});var ut=w(lt,[["__file","HomeFooter.vue"]]);const it=["href","rel","target","aria-label"],ct=S({inheritAttrs:!1}),dt=S(Q(J({},ct),{__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(u){const t=u,e=W(),i=Fe(),{item:o}=Z(t),_=h(()=>Y(o.value.link)),f=h(()=>Ae(o.value.link)||Oe(o.value.link)),d=h(()=>{if(!f.value){if(o.value.target)return o.value.target;if(_.value)return"_blank"}}),r=h(()=>d.value==="_blank"),s=h(()=>!_.value&&!f.value&&!r.value),l=h(()=>{if(!f.value){if(o.value.rel)return o.value.rel;if(r.value)return"noopener noreferrer"}}),p=h(()=>o.value.ariaLabel||o.value.text),v=h(()=>{const k=Object.keys(i.value.locales);return k.length?!k.some(m=>m===o.value.link):o.value.link!=="/"}),g=h(()=>v.value?e.path.startsWith(o.value.link):!1),x=h(()=>s.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(e.path):g.value:!1);return(k,m)=>{const N=R("RouterLink"),M=R("AutoLinkExternalIcon");return a(s)?(n(),C(N,me({key:0,class:{"router-link-active":a(x)},to:a(o).link,"aria-label":a(p)},k.$attrs),{default:B(()=>[$(k.$slots,"before"),j(" "+T(a(o).text)+" ",1),$(k.$slots,"after")]),_:3},16,["class","to","aria-label"])):(n(),c("a",me({key:1,class:"external-link",href:a(o).link,rel:a(l),target:a(d),"aria-label":a(p)},k.$attrs),[$(k.$slots,"before"),j(" "+T(a(o).text)+" ",1),a(r)?(n(),C(M,{key:0})):y("",!0),$(k.$slots,"after")],16,it))}}}));var D=w(dt,[["__file","AutoLink.vue"]]);const vt={class:"hero"},_t={key:0,id:"main-title"},pt={key:1,class:"description"},ht={key:2,class:"actions"},mt=S({__name:"HomeHero",setup(u){const t=P(),e=ee(),i=te(),o=h(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),_=h(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),f=h(()=>t.value.heroAlt||_.value||"hero"),d=h(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),r=h(()=>be(t.value.actions)?t.value.actions.map(({text:l,link:p,type:v="primary"})=>({text:l,link:p,type:v})):[]),s=()=>{if(!o.value)return null;const l=q("img",{src:ge(o.value),alt:f.value});return t.value.heroImageDark===void 0?l:q(ke,()=>l)};return(l,p)=>(n(),c("header",vt,[L(s),a(_)?(n(),c("h1",_t,T(a(_)),1)):y("",!0),a(d)?(n(),c("p",pt,T(a(d)),1)):y("",!0),a(r).length?(n(),c("p",ht,[(n(!0),c(I,null,A(a(r),v=>(n(),C(D,{key:v.text,class:E(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):y("",!0)]))}});var ft=w(mt,[["__file","HomeHero.vue"]]);const bt={class:"home"},gt=S({__name:"Home",setup(u){return(t,e)=>(n(),c("main",bt,[L(ft),L(ot),L(tt),L(ut)]))}});var kt=w(gt,[["__file","Home.vue"]]);const $t=S({__name:"NavbarBrand",setup(u){const t=$e(),e=ee(),i=H(),o=te(),_=h(()=>i.value.home||t.value),f=h(()=>e.value.title),d=h(()=>o.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),r=()=>{if(!d.value)return null;const s=q("img",{class:"logo",src:ge(d.value),alt:f.value});return i.value.logoDark===void 0?s:q(ke,()=>s)};return(s,l)=>{const p=R("RouterLink");return n(),C(p,{to:a(_)},{default:B(()=>[L(r),a(f)?(n(),c("span",{key:0,class:E(["site-name",{"can-hide":a(d)}])},T(a(f)),3)):y("",!0)]),_:1},8,["to"])}}});var Lt=w($t,[["__file","NavbarBrand.vue"]]);const yt=S({__name:"DropdownTransition",setup(u){const t=i=>{i.style.height=i.scrollHeight+"px"},e=i=>{i.style.height=""};return(i,o)=>(n(),C(Le,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:B(()=>[$(i.$slots,"default")]),_:3}))}});var Ce=w(yt,[["__file","DropdownTransition.vue"]]);const wt=["aria-label"],St={class:"title"},Ct=b("span",{class:"arrow down"},null,-1),Tt=["aria-label"],xt={class:"title"},Bt={class:"navbar-dropdown"},Nt={class:"navbar-dropdown-subtitle"},Ht={key:1},It={class:"navbar-dropdown-subitem-wrapper"},Mt=S({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(u){const t=u,{item:e}=Z(t),i=h(()=>e.value.ariaLabel||e.value.text),o=z(!1),_=W();ye(()=>_.path,()=>{o.value=!1});const f=r=>{r.detail===0?o.value=!o.value:o.value=!1},d=(r,s)=>s[s.length-1]===r;return(r,s)=>(n(),c("div",{class:E(["navbar-dropdown-wrapper",{open:o.value}])},[b("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(i),onClick:f},[b("span",St,T(a(e).text),1),Ct],8,wt),b("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(i),onClick:s[0]||(s[0]=l=>o.value=!o.value)},[b("span",xt,T(a(e).text),1),b("span",{class:E(["arrow",o.value?"down":"right"])},null,2)],8,Tt),L(Ce,null,{default:B(()=>[G(b("ul",Bt,[(n(!0),c(I,null,A(a(e).children,l=>(n(),c("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(n(),c(I,{key:0},[b("h4",Nt,[l.link?(n(),C(D,{key:0,item:l,onFocusout:p=>d(l,a(e).children)&&l.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(n(),c("span",Ht,T(l.text),1))]),b("ul",It,[(n(!0),c(I,null,A(l.children,p=>(n(),c("li",{key:p.link,class:"navbar-dropdown-subitem"},[L(D,{item:p,onFocusout:v=>d(p,l.children)&&d(l,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),C(D,{key:1,item:l,onFocusout:p=>d(l,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[X,o.value]])]),_:1})],2))}});var Dt=w(Mt,[["__file","NavbarDropdown.vue"]]);const fe=u=>decodeURI(u).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Pt=(u,t)=>{if(t.hash===u)return!0;const e=fe(t.path),i=fe(u);return e===i},Te=(u,t)=>u.link&&Pt(u.link,t)?!0:u.children?u.children.some(e=>Te(e,t)):!1,xe=u=>!Y(u)||/github\.com/.test(u)?"GitHub":/bitbucket\.org/.test(u)?"Bitbucket":/gitlab\.com/.test(u)?"GitLab":/gitee\.com/.test(u)?"Gitee":null,Et={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Rt=({docsRepo:u,editLinkPattern:t})=>{if(t)return t;const e=xe(u);return e!==null?Et[e]:null},At=({docsRepo:u,docsBranch:t,docsDir:e,filePathRelative:i,editLinkPattern:o})=>{if(!i)return null;const _=Rt({docsRepo:u,editLinkPattern:o});return _?_.replace(/:repo/,Y(u)?u:`https://github.com/${u}`).replace(/:branch/,t).replace(/:path/,ze(`${We(e)}/${i}`)):null},Ot={key:0,class:"navbar-items"},Ft=S({__name:"NavbarItems",setup(u){const t=()=>{const s=ae(),l=$e(),p=ee(),v=H();return h(()=>{var M,O,F;const g=Object.keys(p.value.locales);if(g.length<2)return[];const x=s.currentRoute.value.path,k=s.currentRoute.value.fullPath,m=s.currentRoute.value.hash;return[{text:(M=v.value.selectLanguageText)!=null?M:"unknown language",ariaLabel:(F=(O=v.value.selectLanguageAriaLabel)!=null?O:v.value.selectLanguageText)!=null?F:"unknown language",children:g.map(U=>{var le,ue,ie,ce,de,ve;const Ne=(ue=(le=p.value.locales)==null?void 0:le[U])!=null?ue:{},re=(ce=(ie=v.value.locales)==null?void 0:ie[U])!=null?ce:{},se=`${Ne.lang}`,He=(de=re.selectLanguageName)!=null?de:se;let V;if(se===p.value.lang)V=k;else{const _e=x.replace(l.value,U);s.getRoutes().some(Ie=>Ie.path===_e)?V=`${_e}${m}`:V=(ve=re.home)!=null?ve:U}return{text:He,link:V}})}]})},e=()=>{const s=H(),l=h(()=>s.value.repo),p=h(()=>l.value?xe(l.value):null),v=h(()=>l.value&&!Y(l.value)?`https://github.com/${l.value}`:l.value),g=h(()=>v.value?s.value.repoLabel?s.value.repoLabel:p.value===null?"Source":p.value:null);return h(()=>!v.value||!g.value?[]:[{text:g.value,link:v.value}])},i=s=>we(s)?Se(s):s.children?Q(J({},s),{children:s.children.map(i)}):s,_=(()=>{const s=H();return h(()=>(s.value.navbar||[]).map(i))})(),f=t(),d=e(),r=h(()=>[..._.value,...f.value,...d.value]);return(s,l)=>a(r).length?(n(),c("nav",Ot,[(n(!0),c(I,null,A(a(r),p=>(n(),c("div",{key:p.text,class:"navbar-item"},[p.children?(n(),C(Dt,{key:0,item:p},null,8,["item"])):(n(),C(D,{key:1,item:p},null,8,["item"]))]))),128))])):y("",!0)}});var Be=w(Ft,[["__file","NavbarItems.vue"]]);const zt=["title"],Wt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ut=Ue('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Vt=[Ut],Kt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},jt=b("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),qt=[jt],Gt=S({__name:"ToggleColorModeButton",setup(u){const t=H(),e=te(),i=()=>{e.value=!e.value};return(o,_)=>(n(),c("button",{class:"toggle-color-mode-button",title:a(t).toggleColorMode,onClick:i},[G((n(),c("svg",Wt,Vt,512)),[[X,!a(e)]]),G((n(),c("svg",Kt,qt,512)),[[X,a(e)]])],8,zt))}});var Xt=w(Gt,[["__file","ToggleColorModeButton.vue"]]);const Yt=["title"],Jt=b("div",{class:"icon","aria-hidden":"true"},[b("span"),b("span"),b("span")],-1),Qt=[Jt],Zt=S({__name:"ToggleSidebarButton",emits:["toggle"],setup(u){const t=H();return(e,i)=>(n(),c("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=o=>e.$emit("toggle"))},Qt,8,Yt))}});var ea=w(Zt,[["__file","ToggleSidebarButton.vue"]]);const ta=S({__name:"Navbar",emits:["toggle-sidebar"],setup(u){const t=H(),e=z(null),i=z(null),o=z(0),_=h(()=>o.value?{maxWidth:o.value+"px"}:{});ne(()=>{const r=f(e.value,"paddingLeft")+f(e.value,"paddingRight"),s=()=>{var l;window.innerWidth<=719?o.value=0:o.value=e.value.offsetWidth-r-(((l=i.value)==null?void 0:l.offsetWidth)||0)};s(),window.addEventListener("resize",s,!1),window.addEventListener("orientationchange",s,!1)});function f(d,r){var p,v,g;const s=(g=(v=(p=d==null?void 0:d.ownerDocument)==null?void 0:p.defaultView)==null?void 0:v.getComputedStyle(d,null))==null?void 0:g[r],l=Number.parseInt(s,10);return Number.isNaN(l)?0:l}return(d,r)=>{const s=R("NavbarSearch");return n(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[L(ea,{onToggle:r[0]||(r[0]=l=>d.$emit("toggle-sidebar"))}),b("span",{ref_key:"navbarBrand",ref:i},[L(Lt)],512),b("div",{class:"navbar-items-wrapper",style:Ve(a(_))},[$(d.$slots,"before"),L(Be,{class:"can-hide"}),$(d.$slots,"after"),a(t).colorModeSwitch?(n(),C(Xt,{key:0})):y("",!0),L(s)],4)],512)}}});var aa=w(ta,[["__file","Navbar.vue"]]);const na={class:"page-meta"},oa={key:0,class:"meta-item edit-link"},ra={key:1,class:"meta-item last-updated"},sa={class:"meta-item-label"},la={class:"meta-item-info"},ua={key:2,class:"meta-item contributors"},ia={class:"meta-item-label"},ca={class:"meta-item-info"},da=["title"],va=j(", "),_a=S({__name:"PageMeta",setup(u){const t=()=>{const r=H(),s=K(),l=P();return h(()=>{var M,O,F;if(!((O=(M=l.value.editLink)!=null?M:r.value.editLink)!=null?O:!0))return null;const{repo:v,docsRepo:g=v,docsBranch:x="main",docsDir:k="",editLinkText:m}=r.value;if(!g)return null;const N=At({docsRepo:g,docsBranch:x,docsDir:k,filePathRelative:s.value.filePathRelative,editLinkPattern:(F=l.value.editLinkPattern)!=null?F:r.value.editLinkPattern});return N?{text:m!=null?m:"Edit this page",link:N}:null})},e=()=>{const r=H(),s=K(),l=P();return h(()=>{var g,x,k,m;return!((x=(g=l.value.lastUpdated)!=null?g:r.value.lastUpdated)!=null?x:!0)||!((k=s.value.git)!=null&&k.updatedTime)?null:new Date((m=s.value.git)==null?void 0:m.updatedTime).toLocaleString()})},i=()=>{const r=H(),s=K(),l=P();return h(()=>{var v,g,x,k;return((g=(v=l.value.contributors)!=null?v:r.value.contributors)!=null?g:!0)&&(k=(x=s.value.git)==null?void 0:x.contributors)!=null?k:null})},o=H(),_=t(),f=e(),d=i();return(r,s)=>{const l=R("ClientOnly");return n(),c("footer",na,[a(_)?(n(),c("div",oa,[L(D,{class:"meta-item-label",item:a(_)},null,8,["item"])])):y("",!0),a(f)?(n(),c("div",ra,[b("span",sa,T(a(o).lastUpdatedText)+": ",1),L(l,null,{default:B(()=>[b("span",la,T(a(f)),1)]),_:1})])):y("",!0),a(d)&&a(d).length?(n(),c("div",ua,[b("span",ia,T(a(o).contributorsText)+": ",1),b("span",ca,[(n(!0),c(I,null,A(a(d),(p,v)=>(n(),c(I,{key:v},[b("span",{class:"contributor",title:`email: ${p.email}`},T(p.name),9,da),v!==a(d).length-1?(n(),c(I,{key:0},[va],64)):y("",!0)],64))),128))])])):y("",!0)])}}});var pa=w(_a,[["__file","PageMeta.vue"]]);const ha={key:0,class:"page-nav"},ma={class:"inner"},fa={key:0,class:"prev"},ba={key:1,class:"next"},ga=S({__name:"PageNav",setup(u){const t=r=>r===!1?null:we(r)?Se(r):Ke(r)?r:!1,e=(r,s,l)=>{const p=r.findIndex(v=>v.link===s);if(p!==-1){const v=r[p+l];return v!=null&&v.link?v:null}for(const v of r)if(v.children){const g=e(v.children,s,l);if(g)return g}return null},i=P(),o=oe(),_=W(),f=h(()=>{const r=t(i.value.prev);return r!==!1?r:e(o.value,_.path,-1)}),d=h(()=>{const r=t(i.value.next);return r!==!1?r:e(o.value,_.path,1)});return(r,s)=>a(f)||a(d)?(n(),c("nav",ha,[b("p",ma,[a(f)?(n(),c("span",fa,[L(D,{item:a(f)},null,8,["item"])])):y("",!0),a(d)?(n(),c("span",ba,[L(D,{item:a(d)},null,8,["item"])])):y("",!0)])])):y("",!0)}});var ka=w(ga,[["__file","PageNav.vue"]]);const $a={class:"page"},La={class:"theme-default-content"},ya=S({__name:"Page",setup(u){return(t,e)=>{const i=R("Content");return n(),c("main",$a,[$(t.$slots,"top"),b("div",La,[$(t.$slots,"content-top"),L(i),$(t.$slots,"content-bottom")]),L(pa),L(ka),$(t.$slots,"bottom")])}}});var wa=w(ya,[["__file","Page.vue"]]);const Sa=["onKeydown"],Ca={class:"sidebar-item-children"},Ta=S({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(u){const t=u,{item:e,depth:i}=Z(t),o=W(),_=ae(),f=h(()=>Te(e.value,o)),d=h(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:f.value,collapsible:e.value.collapsible})),[r,s]=je(f.value),l=v=>{e.value.collapsible&&(v.preventDefault(),s())},p=_.afterEach(v=>{qe(()=>{r.value=e.value.collapsible?f.value:!0})});return Ge(()=>{p()}),(v,g)=>{var k;const x=R("SidebarItem",!0);return n(),c("li",null,[a(e).link?(n(),C(D,{key:0,class:E(a(d)),item:a(e)},null,8,["class","item"])):(n(),c("p",{key:1,tabindex:"0",class:E(a(d)),onClick:l,onKeydown:Xe(l,["enter"])},[j(T(a(e).text)+" ",1),a(e).collapsible?(n(),c("span",{key:0,class:E(["arrow",a(r)?"down":"right"])},null,2)):y("",!0)],42,Sa)),(k=a(e).children)!=null&&k.length?(n(),C(Ce,{key:2},{default:B(()=>[G(b("ul",Ca,[(n(!0),c(I,null,A(a(e).children,m=>(n(),C(x,{key:`${a(i)}${m.text}${m.link}`,item:m,depth:a(i)+1},null,8,["item","depth"]))),128))],512),[[X,a(r)]])]),_:1})):y("",!0)])}}});var xa=w(Ta,[["__file","SidebarItem.vue"]]);const Ba={key:0,class:"sidebar-items"},Na=S({__name:"SidebarItems",setup(u){const t=W(),e=oe();return ne(()=>{ye(()=>t.hash,i=>{const o=document.querySelector(".sidebar");if(!o)return;const _=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${i}"]`);if(!_)return;const{top:f,height:d}=o.getBoundingClientRect(),{top:r,height:s}=_.getBoundingClientRect();r<f?_.scrollIntoView(!0):r+s>f+d&&_.scrollIntoView(!1)})}),(i,o)=>a(e).length?(n(),c("ul",Ba,[(n(!0),c(I,null,A(a(e),_=>(n(),C(xa,{key:`${_.text}${_.link}`,item:_},null,8,["item"]))),128))])):y("",!0)}});var Ha=w(Na,[["__file","SidebarItems.vue"]]);const Ia={class:"sidebar"},Ma=S({__name:"Sidebar",setup(u){return(t,e)=>(n(),c("aside",Ia,[L(Be),$(t.$slots,"top"),L(Ha),$(t.$slots,"bottom")]))}});var Da=w(Ma,[["__file","Sidebar.vue"]]);const Pa=S({__name:"Layout",setup(u){const t=K(),e=P(),i=H(),o=h(()=>e.value.navbar!==!1&&i.value.navbar!==!1),_=oe(),f=z(!1),d=m=>{f.value=typeof m=="boolean"?m:!f.value},r={x:0,y:0},s=m=>{r.x=m.changedTouches[0].clientX,r.y=m.changedTouches[0].clientY},l=m=>{const N=m.changedTouches[0].clientX-r.x,M=m.changedTouches[0].clientY-r.y;Math.abs(N)>Math.abs(M)&&Math.abs(N)>40&&(N>0&&r.x<=80?d(!0):d(!1))},p=h(()=>[{"no-navbar":!o.value,"no-sidebar":!_.value.length,"sidebar-open":f.value},e.value.pageClass]);let v;ne(()=>{v=ae().afterEach(()=>{d(!1)})}),Ye(()=>{v()});const g=Je(),x=g.resolve,k=g.pending;return(m,N)=>(n(),c("div",{class:E(["theme-container",a(p)]),onTouchstart:s,onTouchend:l},[$(m.$slots,"navbar",{},()=>[a(o)?(n(),C(aa,{key:0,onToggleSidebar:d},{before:B(()=>[$(m.$slots,"navbar-before")]),after:B(()=>[$(m.$slots,"navbar-after")]),_:3})):y("",!0)]),b("div",{class:"sidebar-mask",onClick:N[0]||(N[0]=M=>d(!1))}),$(m.$slots,"sidebar",{},()=>[L(Da,null,{top:B(()=>[$(m.$slots,"sidebar-top")]),bottom:B(()=>[$(m.$slots,"sidebar-bottom")]),_:3})]),$(m.$slots,"page",{},()=>[a(e).home?(n(),C(kt,{key:0})):(n(),C(Le,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(x),onBeforeLeave:a(k)},{default:B(()=>[(n(),C(wa,{key:a(t).path},{top:B(()=>[$(m.$slots,"page-top")]),"content-top":B(()=>[$(m.$slots,"page-content-top")]),"content-bottom":B(()=>[$(m.$slots,"page-content-bottom")]),bottom:B(()=>[$(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Aa=w(Pa,[["__file","Layout.vue"]]);export{Aa as default};