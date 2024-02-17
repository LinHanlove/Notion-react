import{r as l,b as Ne,x as k,q as De,c as Q,a8 as Be,a0 as Xe,C as pe,ag as ke,ac as Ge,ah as Ke,w as ve,F as Ye,z as Qe,E as Ue,ai as Je,G as Ze,aa as et}from"./index-f32d64df.js";import{z as Pe,a as $e,T as tt,k as nt,E as rt,j as ot}from"./index-0c09f63f.js";import{h as he,u as lt,j as je,k as U,R as at,F as se,l as Re,C as it,L as st,W as ct,n as ut,o as mt}from"./motion-c2cc6a2e.js";import{g as dt}from"./collapse-97de76d4.js";import{g as ft,m as gt,b as pt,t as ht,d as bt,A as Ct,_ as yt,L as xt,e as vt,o as $t,i as St,c as wt}from"./button-63286e2e.js";import{C as Te,R as It}from"./row-b9f67384.js";import{u as Et}from"./request-db53186c.js";const Se=e=>typeof e=="object"&&e!=null&&e.nodeType===1,we=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",fe=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return we(n.overflowY,t)||we(n.overflowX,t)||(r=>{const o=(a=>{if(!a.ownerDocument||!a.ownerDocument.defaultView)return null;try{return a.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!o&&(o.clientHeight<r.scrollHeight||o.clientWidth<r.scrollWidth)})(e)}return!1},ie=(e,t,n,r,o,a,i,s)=>a<e&&i>t||a>e&&i<t?0:a<=e&&s<=n||i>=t&&s>=n?a-e-r:i>t&&s<n||a<e&&s>n?i-t+o:0,Ft=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Ie=(e,t)=>{var n,r,o,a;if(typeof document>"u")return[];const{scrollMode:i,block:s,inline:u,boundary:m,skipOverflowHiddenElements:C}=t,d=typeof m=="function"?m:R=>R!==m;if(!Se(e))throw new TypeError("Invalid target");const F=document.scrollingElement||document.documentElement,S=[];let f=e;for(;Se(f)&&d(f);){if(f=Ft(f),f===F){S.push(f);break}f!=null&&f===document.body&&fe(f)&&!fe(document.documentElement)||f!=null&&fe(f,C)&&S.push(f)}const w=(r=(n=window.visualViewport)==null?void 0:n.width)!=null?r:innerWidth,I=(a=(o=window.visualViewport)==null?void 0:o.height)!=null?a:innerHeight,{scrollX:y,scrollY:c}=window,{height:p,width:x,top:g,right:$,bottom:j,left:M}=e.getBoundingClientRect(),{top:B,right:_,bottom:z,left:H}=(R=>{const b=window.getComputedStyle(R);return{top:parseFloat(b.scrollMarginTop)||0,right:parseFloat(b.scrollMarginRight)||0,bottom:parseFloat(b.scrollMarginBottom)||0,left:parseFloat(b.scrollMarginLeft)||0}})(e);let N=s==="start"||s==="nearest"?g-B:s==="end"?j+z:g+p/2-B+z,h=u==="center"?M+x/2-H+_:u==="end"?$+_:M-H;const W=[];for(let R=0;R<S.length;R++){const b=S[R],{height:L,width:q,top:G,right:Z,bottom:ee,left:T}=b.getBoundingClientRect();if(i==="if-needed"&&g>=0&&M>=0&&j<=I&&$<=w&&g>=G&&j<=ee&&M>=T&&$<=Z)return W;const v=getComputedStyle(b),O=parseInt(v.borderLeftWidth,10),P=parseInt(v.borderTopWidth,10),A=parseInt(v.borderRightWidth,10),X=parseInt(v.borderBottomWidth,10);let V=0,D=0;const K="offsetWidth"in b?b.offsetWidth-b.clientWidth-O-A:0,E="offsetHeight"in b?b.offsetHeight-b.clientHeight-P-X:0,te="offsetWidth"in b?b.offsetWidth===0?0:q/b.offsetWidth:0,re="offsetHeight"in b?b.offsetHeight===0?0:L/b.offsetHeight:0;if(F===b)V=s==="start"?N:s==="end"?N-I:s==="nearest"?ie(c,c+I,I,P,X,c+N,c+N+p,p):N-I/2,D=u==="start"?h:u==="center"?h-w/2:u==="end"?h-w:ie(y,y+w,w,O,A,y+h,y+h+x,x),V=Math.max(0,V+c),D=Math.max(0,D+y);else{V=s==="start"?N-G-P:s==="end"?N-ee+X+E:s==="nearest"?ie(G,ee,L,P,X+E,N,N+p,p):N-(G+L/2)+E/2,D=u==="start"?h-T-O:u==="center"?h-(T+q/2)+K/2:u==="end"?h-Z+A+K:ie(T,Z,q,O,A+K,h,h+x,x);const{scrollLeft:Y,scrollTop:oe}=b;V=re===0?0:Math.max(0,Math.min(oe+V/re,b.scrollHeight-L/re+E)),D=te===0?0:Math.max(0,Math.min(Y+D/te,b.scrollWidth-q/te+K)),N+=oe-V,h+=Y-D}W.push({el:b,top:V,left:D})}return W},Ot=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Mt(e,t){if(!e.isConnected||!(o=>{let a=o;for(;a&&a.parentNode;){if(a.parentNode===document)return!0;a=a.parentNode instanceof ShadowRoot?a.parentNode.host:a.parentNode}return!1})(e))return;const n=(o=>{const a=window.getComputedStyle(o);return{top:parseFloat(a.scrollMarginTop)||0,right:parseFloat(a.scrollMarginRight)||0,bottom:parseFloat(a.scrollMarginBottom)||0,left:parseFloat(a.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(Ie(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:o,top:a,left:i}of Ie(e,Ot(t))){const s=a-n.top+n.bottom,u=i-n.left+n.right;o.scroll({top:s,left:u,behavior:r})}}function ce(e){const[t,n]=l.useState(e);return l.useEffect(()=>{const r=setTimeout(()=>{n(e)},e.length?0:10);return()=>{clearTimeout(r)}},[e]),t}const Nt=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}},Pt=Nt,jt=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},label:{fontSize:e.fontSize},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),Ee=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},Rt=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},Ne(e)),jt(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},Ee(e,e.controlHeightSM)),"&-large":Object.assign({},Ee(e,e.controlHeightLG))})}},Tt=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:o,labelRequiredMarkColor:a,labelColor:i,labelFontSize:s,labelHeight:u,labelColonMarginInlineStart:m,labelColonMarginInlineEnd:C,itemMarginBottom:d}=e;return{[t]:Object.assign(Object.assign({},Ne(e)),{marginBottom:d,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${o}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:`${e.lineHeight} - 0.25em`,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:u,color:i,fontSize:s,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:a,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:m,marginInlineEnd:C},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:Pe,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},_t=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},Lt=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,
        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},ne=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),Wt=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:ne(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},Vt=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${t}-vertical`]:{[n]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${n}-label,
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]:ne(e),[`@media (max-width: ${e.screenXSMax}px)`]:[Wt(e),{[t]:{[`.${r}-col-xs-24${n}-label`]:ne(e)}}],[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{[`.${r}-col-sm-24${n}-label`]:ne(e)}},[`@media (max-width: ${e.screenMDMax}px)`]:{[t]:{[`.${r}-col-md-24${n}-label`]:ne(e)}},[`@media (max-width: ${e.screenLGMax}px)`]:{[t]:{[`.${r}-col-lg-24${n}-label`]:ne(e)}}}},_e=(e,t)=>gt(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),be=ft("Form",(e,t)=>{let{rootPrefixCls:n}=t;const r=_e(e,n);return[Rt(r),Tt(r),Pt(r),_t(r),Lt(r),Vt(r),dt(r),Pe]},e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0}),{order:-1e3}),Fe=[];function ge(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${r}`,error:e,errorStatus:n}}const zt=e=>{let{help:t,helpStatus:n,errors:r=Fe,warnings:o=Fe,className:a,fieldId:i,onVisibleChanged:s}=e;const{prefixCls:u}=l.useContext(he),m=`${u}-item-explain`,[,C]=be(u),d=l.useMemo(()=>$e(u),[u]),F=ce(r),S=ce(o),f=l.useMemo(()=>t!=null?[ge(t,"help",n)]:[].concat(k(F.map((I,y)=>ge(I,"error","error",y))),k(S.map((I,y)=>ge(I,"warning","warning",y)))),[t,n,F,S]),w={};return i&&(w.id=`${i}_help`),l.createElement(De,{motionDeadline:d.motionDeadline,motionName:`${u}-show-help`,visible:!!f.length,onVisibleChanged:s},I=>{const{className:y,style:c}=I;return l.createElement("div",Object.assign({},w,{className:Q(m,y,a,C),style:c,role:"alert"}),l.createElement(Be,Object.assign({keys:f},$e(u),{motionName:`${u}-show-help-item`,component:!1}),p=>{const{key:x,error:g,errorStatus:$,className:j,style:M}=p;return l.createElement("div",{key:x,className:Q(j,{[`${m}-${$}`]:$}),style:M},g)}))})},Le=zt,Ht=["parentNode"],qt="form_item";function le(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function We(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:Ht.includes(n)?`${qt}_${n}`:n}function Ve(e,t,n,r,o,a){let i=r;return a!==void 0?i=a:n.validating?i="validating":e.length?i="error":t.length?i="warning":(n.touched||o&&n.validated)&&(i="success"),i}function Oe(e){return le(e).join("_")}function ze(e){const[t]=lt(),n=l.useRef({}),r=l.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>a=>{const i=Oe(o);a?n.current[i]=a:delete n.current[i]}},scrollToField:function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=le(o),s=We(i,r.__INTERNAL__.name),u=s?document.getElementById(s):null;u&&Mt(u,Object.assign({scrollMode:"if-needed",block:"nearest"},a))},getFieldInstance:o=>{const a=Oe(o);return n.current[a]}}),[e,t]);return[r]}var At=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Dt=(e,t)=>{const n=l.useContext(Xe),{getPrefixCls:r,direction:o,form:a}=l.useContext(pe),{prefixCls:i,className:s,rootClassName:u,size:m,disabled:C=n,form:d,colon:F,labelAlign:S,labelWrap:f,labelCol:w,wrapperCol:I,hideRequiredMark:y,layout:c="horizontal",scrollToFirstError:p,requiredMark:x,onFinishFailed:g,name:$,style:j,feedbackIcons:M}=e,B=At(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons"]),_=pt(m),z=l.useContext(ke),H=l.useMemo(()=>x!==void 0?x:a&&a.requiredMark!==void 0?a.requiredMark:!y,[y,x,a]),N=F??(a==null?void 0:a.colon),h=r("form",i),[W,R]=be(h),b=Q(h,`${h}-${c}`,{[`${h}-hide-required-mark`]:H===!1,[`${h}-rtl`]:o==="rtl",[`${h}-${_}`]:_},R,a==null?void 0:a.className,s,u),[L]=ze(d),{__INTERNAL__:q}=L;q.name=$;const G=l.useMemo(()=>({name:$,labelAlign:S,labelCol:w,labelWrap:f,wrapperCol:I,vertical:c==="vertical",colon:N,requiredMark:H,itemRef:q.itemRef,form:L,feedbackIcons:M}),[$,S,w,I,c,N,H,L,M]);l.useImperativeHandle(t,()=>L);const Z=(T,v)=>{if(T){let O={block:"nearest"};typeof T=="object"&&(O=T),L.scrollToField(v,O)}},ee=T=>{if(g==null||g(T),T.errorFields.length){const v=T.errorFields[0].name;if(p!==void 0){Z(p,v);return}a&&a.scrollToFirstError!==void 0&&Z(a.scrollToFirstError,v)}};return W(l.createElement(Ge,{disabled:C},l.createElement(Ke.Provider,{value:_},l.createElement(je,{validateMessages:z},l.createElement(U.Provider,{value:G},l.createElement(at,Object.assign({id:$},B,{name:$,onFinishFailed:ee,form:L,style:Object.assign(Object.assign({},a==null?void 0:a.style),j),className:b})))))))},Bt=l.forwardRef(Dt),Xt=Bt;function kt(e){if(typeof e=="function")return e;const t=ht(e);return t.length<=1?t[0]:t}const He=()=>{const{status:e,errors:t=[],warnings:n=[]}=l.useContext(se);return{status:e,errors:t,warnings:n}};He.Context=se;const Gt=He;function Kt(e){const[t,n]=l.useState(e),r=l.useRef(null),o=l.useRef([]),a=l.useRef(!1);l.useEffect(()=>(a.current=!1,()=>{a.current=!0,ve.cancel(r.current),r.current=null}),[]);function i(s){a.current||(r.current===null&&(o.current=[],r.current=ve(()=>{r.current=null,n(u=>{let m=u;return o.current.forEach(C=>{m=C(m)}),m})})),o.current.push(s))}return[t,i]}function Yt(){const{itemRef:e}=l.useContext(U),t=l.useRef({});function n(r,o){const a=o&&typeof o=="object"&&o.ref,i=r.join("_");return(t.current.name!==i||t.current.originRef!==a)&&(t.current.name=i,t.current.originRef=a,t.current.ref=Ye(e(r),a)),t.current.ref}return n}const Qt=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},Ut=bt(["Form","item-item"],(e,t)=>{let{rootPrefixCls:n}=t;const r=_e(e,n);return[Qt(r)]}),Jt=e=>{const{prefixCls:t,status:n,wrapperCol:r,children:o,errors:a,warnings:i,_internalItemRender:s,extra:u,help:m,fieldId:C,marginBottom:d,onErrorVisibleChanged:F}=e,S=`${t}-item`,f=l.useContext(U),w=r||f.wrapperCol||{},I=Q(`${S}-control`,w.className),y=l.useMemo(()=>Object.assign({},f),[f]);delete y.labelCol,delete y.wrapperCol;const c=l.createElement("div",{className:`${S}-control-input`},l.createElement("div",{className:`${S}-control-input-content`},o)),p=l.useMemo(()=>({prefixCls:t,status:n}),[t,n]),x=d!==null||a.length||i.length?l.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},l.createElement(he.Provider,{value:p},l.createElement(Le,{fieldId:C,errors:a,warnings:i,help:m,helpStatus:n,className:`${S}-explain-connected`,onVisibleChanged:F})),!!d&&l.createElement("div",{style:{width:0,height:d}})):null,g={};C&&(g.id=`${C}_extra`);const $=u?l.createElement("div",Object.assign({},g,{className:`${S}-extra`}),u):null,j=s&&s.mark==="pro_table_render"&&s.render?s.render(e,{input:c,errorList:x,extra:$}):l.createElement(l.Fragment,null,c,x,$);return l.createElement(U.Provider,{value:y},l.createElement(Te,Object.assign({},w,{className:I}),j),l.createElement(Ut,{prefixCls:t}))},Zt=Jt;var en={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const tn=en;var nn=function(t,n){return l.createElement(Ct,yt({},t,{ref:n,icon:tn}))};const rn=l.forwardRef(nn);var on=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function ln(e){return e?typeof e=="object"&&!l.isValidElement(e)?e:{title:e}:null}const an=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:o,labelAlign:a,colon:i,required:s,requiredMark:u,tooltip:m}=e;var C;const[d]=Et("Form"),{vertical:F,labelAlign:S,labelCol:f,labelWrap:w,colon:I}=l.useContext(U);if(!n)return null;const y=o||f||{},c=a||S,p=`${t}-item-label`,x=Q(p,c==="left"&&`${p}-left`,y.className,{[`${p}-wrap`]:!!w});let g=n;const $=i===!0||I!==!1&&i!==!1;$&&!F&&typeof n=="string"&&n.trim()!==""&&(g=n.replace(/[:|：]\s*$/,""));const M=ln(m);if(M){const{icon:H=l.createElement(rn,null)}=M,N=on(M,["icon"]),h=l.createElement(tt,Object.assign({},N),l.cloneElement(H,{className:`${t}-item-tooltip`,title:""}));g=l.createElement(l.Fragment,null,g,h)}const B=u==="optional",_=typeof u=="function";_?g=u(g,{required:!!s}):B&&!s&&(g=l.createElement(l.Fragment,null,g,l.createElement("span",{className:`${t}-item-optional`,title:""},(d==null?void 0:d.optional)||((C=Qe.Form)===null||C===void 0?void 0:C.optional))));const z=Q({[`${t}-item-required`]:s,[`${t}-item-required-mark-optional`]:B||_,[`${t}-item-no-colon`]:!$});return l.createElement(Te,Object.assign({},y,{className:x}),l.createElement("label",{htmlFor:r,className:z,title:typeof n=="string"?n:""},g))},sn=an,cn={success:nt,warning:rt,error:ot,validating:xt};function qe(e){let{children:t,errors:n,warnings:r,hasFeedback:o,validateStatus:a,prefixCls:i,meta:s,noStyle:u}=e;const m=`${i}-item`,{feedbackIcons:C}=l.useContext(U),d=Ve(n,r,s,null,!!o,a),{isFormItemInput:F,status:S,hasFeedback:f,feedbackIcon:w}=l.useContext(se),I=l.useMemo(()=>{var y;let c;if(o){const x=o!==!0&&o.icons||C,g=d&&((y=x==null?void 0:x({status:d,errors:n,warnings:r}))===null||y===void 0?void 0:y[d]),$=d&&cn[d];c=g!==!1&&$?l.createElement("span",{className:Q(`${m}-feedback-icon`,`${m}-feedback-icon-${d}`)},g||l.createElement($,null)):null}const p={status:d||"",errors:n,warnings:r,hasFeedback:!!o,feedbackIcon:c,isFormItemInput:!0};return u&&(p.status=(d??S)||"",p.isFormItemInput=F,p.hasFeedback=!!(o??f),p.feedbackIcon=o!==void 0?p.feedbackIcon:w),p},[d,o,u,F,S]);return l.createElement(se.Provider,{value:I},t)}var un=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function mn(e){const{prefixCls:t,className:n,rootClassName:r,style:o,help:a,errors:i,warnings:s,validateStatus:u,meta:m,hasFeedback:C,hidden:d,children:F,fieldId:S,required:f,isRequired:w,onSubItemMetaChange:I}=e,y=un(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),c=`${t}-item`,{requiredMark:p}=l.useContext(U),x=l.useRef(null),g=ce(i),$=ce(s),j=a!=null,M=!!(j||i.length||s.length),B=!!x.current&&vt(x.current),[_,z]=l.useState(null);Ue(()=>{if(M&&x.current){const R=getComputedStyle(x.current);z(parseInt(R.marginBottom,10))}},[M,B]);const H=R=>{R||z(null)},h=function(){let R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const b=R?g:m.errors,L=R?$:m.warnings;return Ve(b,L,m,"",!!C,u)}(),W=Q(c,n,r,{[`${c}-with-help`]:j||g.length||$.length,[`${c}-has-feedback`]:h&&C,[`${c}-has-success`]:h==="success",[`${c}-has-warning`]:h==="warning",[`${c}-has-error`]:h==="error",[`${c}-is-validating`]:h==="validating",[`${c}-hidden`]:d});return l.createElement("div",{className:W,style:o,ref:x},l.createElement(It,Object.assign({className:`${c}-row`},$t(y,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),l.createElement(sn,Object.assign({htmlFor:S},e,{requiredMark:p,required:f??w,prefixCls:t})),l.createElement(Zt,Object.assign({},e,m,{errors:g,warnings:$,prefixCls:t,status:h,help:a,marginBottom:_,onErrorVisibleChanged:H}),l.createElement(Re.Provider,{value:I},l.createElement(qe,{prefixCls:t,meta:m,errors:m.errors,warnings:m.warnings,hasFeedback:C,validateStatus:h},F)))),!!_&&l.createElement("div",{className:`${c}-margin-offset`,style:{marginBottom:-_}}))}const dn="__SPLIT__",fn=l.memo(e=>{let{children:t}=e;return t},(e,t)=>e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((n,r)=>n===t.childProps[r]));function Me(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function gn(e){const{name:t,noStyle:n,className:r,dependencies:o,prefixCls:a,shouldUpdate:i,rules:s,children:u,required:m,label:C,messageVariables:d,trigger:F="onChange",validateTrigger:S,hidden:f,help:w}=e,{getPrefixCls:I}=l.useContext(pe),{name:y}=l.useContext(U),c=kt(u),p=typeof c=="function",x=l.useContext(Re),{validateTrigger:g}=l.useContext(it),$=S!==void 0?S:g,j=t!=null,M=I("form",a),[B,_]=be(M);et();const z=l.useContext(st),H=l.useRef(),[N,h]=Kt({}),[W,R]=Je(()=>Me()),b=v=>{const O=z==null?void 0:z.getKey(v.name);if(R(v.destroy?Me():v,!0),n&&w!==!1&&x){let P=v.name;if(v.destroy)P=H.current||P;else if(O!==void 0){const[A,X]=O;P=[A].concat(k(X)),H.current=P}x(v,P)}},L=(v,O)=>{h(P=>{const A=Object.assign({},P),V=[].concat(k(v.name.slice(0,-1)),k(O)).join(dn);return v.destroy?delete A[V]:A[V]=v,A})},[q,G]=l.useMemo(()=>{const v=k(W.errors),O=k(W.warnings);return Object.values(N).forEach(P=>{v.push.apply(v,k(P.errors||[])),O.push.apply(O,k(P.warnings||[]))}),[v,O]},[N,W.errors,W.warnings]),Z=Yt();function ee(v,O,P){return n&&!f?l.createElement(qe,{prefixCls:M,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:W,errors:q,warnings:G,noStyle:!0},v):l.createElement(mn,Object.assign({key:"row"},e,{className:Q(r,_),prefixCls:M,fieldId:O,isRequired:P,errors:q,warnings:G,meta:W,onSubItemMetaChange:L}),v)}if(!j&&!p&&!o)return B(ee(c));let T={};return typeof C=="string"?T.label=C:t&&(T.label=String(t)),d&&(T=Object.assign(Object.assign({},T),d)),B(l.createElement(ct,Object.assign({},e,{messageVariables:T,trigger:F,validateTrigger:$,onMetaChange:b}),(v,O,P)=>{const A=le(t).length&&O?O.name:[],X=We(A,y),V=m!==void 0?m:!!(s&&s.some(E=>{if(E&&typeof E=="object"&&E.required&&!E.warningOnly)return!0;if(typeof E=="function"){const te=E(P);return te&&te.required&&!te.warningOnly}return!1})),D=Object.assign({},v);let K=null;if(Array.isArray(c)&&j)K=c;else if(!(p&&(!(i||o)||j))){if(!(o&&!p&&!j))if(St(c)){const E=Object.assign(Object.assign({},c.props),D);if(E.id||(E.id=X),w||q.length>0||G.length>0||e.extra){const Y=[];(w||q.length>0)&&Y.push(`${X}_help`),e.extra&&Y.push(`${X}_extra`),E["aria-describedby"]=Y.join(" ")}q.length>0&&(E["aria-invalid"]="true"),V&&(E["aria-required"]="true"),Ze(c)&&(E.ref=Z(A,c)),new Set([].concat(k(le(F)),k(le($)))).forEach(Y=>{E[Y]=function(){for(var oe,Ce,ue,ye,me,xe=arguments.length,de=new Array(xe),ae=0;ae<xe;ae++)de[ae]=arguments[ae];(ue=D[Y])===null||ue===void 0||(oe=ue).call.apply(oe,[D].concat(de)),(me=(ye=c.props)[Y])===null||me===void 0||(Ce=me).call.apply(Ce,[ye].concat(de))}});const re=[E["aria-required"],E["aria-invalid"],E["aria-describedby"]];K=l.createElement(fn,{value:D[e.valuePropName||"value"],update:c,childProps:re},wt(c,E))}else p&&(i||o)&&!j?K=c(P):K=c}return ee(K,X,V)}))}const Ae=gn;Ae.useStatus=Gt;const pn=Ae;var hn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const bn=e=>{var{prefixCls:t,children:n}=e,r=hn(e,["prefixCls","children"]);const{getPrefixCls:o}=l.useContext(pe),a=o("form",t),i=l.useMemo(()=>({prefixCls:a,status:"error"}),[a]);return l.createElement(ut,Object.assign({},r),(s,u,m)=>l.createElement(he.Provider,{value:i},n(s.map(C=>Object.assign(Object.assign({},C),{fieldKey:C.key})),u,{errors:m.errors,warnings:m.warnings})))},Cn=bn;function yn(){const{form:e}=l.useContext(U);return e}const J=Xt;J.Item=pn;J.List=Cn;J.ErrorList=Le;J.useForm=ze;J.useFormInstance=yn;J.useWatch=mt;J.Provider=je;J.create=()=>{};const Fn=J;export{Fn as F};
//# sourceMappingURL=index-be4cd463.js.map
