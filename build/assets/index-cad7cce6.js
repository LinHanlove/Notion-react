import{r as t,E as Z,b as ee,F as te,C as L,c as w}from"./index-f32d64df.js";import{R as re}from"./index-0c09f63f.js";import{b as se,r as ne,P as oe}from"./request-db53186c.js";import{g as ae,m as ie,b as ce,t as le,c as ue}from"./button-63286e2e.js";import{u as ge}from"./useForceUpdate-0fb824c6.js";function de(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const s=t.useRef({}),n=ge(),r=se();return Z(()=>{const o=r.subscribe(v=>{s.current=v,e&&n()});return()=>r.unsubscribe(o)},[]),s.current}const me=t.createContext({}),A=me,fe=e=>{const{antCls:s,componentCls:n,iconCls:r,avatarBg:o,avatarColor:v,containerSize:S,containerSizeLG:l,containerSizeSM:b,textFontSize:g,textFontSizeLG:y,textFontSizeSM:j,borderRadius:m,borderRadiusLG:f,borderRadiusSM:z,lineWidth:C,lineType:E}=e,$=(p,u,O)=>({width:p,height:p,lineHeight:`${p-C*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:O},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:u,[`> ${r}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},ee(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:v,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${C}px ${E} transparent`,"&-image":{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),$(S,g,m)),{"&-lg":Object.assign({},$(l,y,f)),"&-sm":Object.assign({},$(b,j,z)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},pe=e=>{const{componentCls:s,groupBorderColor:n,groupOverlapping:r,groupSpace:o}=e;return{[`${s}-group`]:{display:"inline-flex",[`${s}`]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:r}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:o}}}},M=ae("Avatar",e=>{const{colorTextLightSolid:s,colorTextPlaceholder:n}=e,r=ie(e,{avatarBg:n,avatarColor:s});return[fe(r),pe(r)]},e=>{const{controlHeight:s,controlHeightLG:n,controlHeightSM:r,fontSize:o,fontSizeLG:v,fontSizeXL:S,fontSizeHeading3:l,marginXS:b,marginXXS:g,colorBorderBg:y}=e;return{containerSize:s,containerSizeLG:n,containerSizeSM:r,textFontSize:Math.round((v+S)/2),textFontSizeLG:l,textFontSizeSM:o,groupSpace:g,groupOverlapping:-b,groupBorderColor:y}});var he=globalThis&&globalThis.__rest||function(e,s){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)s.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const ve=(e,s)=>{const[n,r]=t.useState(1),[o,v]=t.useState(!1),[S,l]=t.useState(!0),b=t.useRef(null),g=t.useRef(null),y=te(s,b),{getPrefixCls:j,avatar:m}=t.useContext(L),f=t.useContext(A),z=()=>{if(!g.current||!b.current)return;const i=g.current.offsetWidth,a=b.current.offsetWidth;if(i!==0&&a!==0){const{gap:d=4}=e;d*2<a&&r(a-d*2<i?(a-d*2)/i:1)}};t.useEffect(()=>{v(!0)},[]),t.useEffect(()=>{l(!0),r(1)},[e.src]),t.useEffect(z,[e.gap]);const C=()=>{const{onError:i}=e;(i==null?void 0:i())!==!1&&l(!1)},{prefixCls:E,shape:$,size:p,src:u,srcSet:O,icon:h,className:P,rootClassName:B,alt:_,draggable:W,children:N,crossOrigin:X}=e,k=he(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),c=ce(i=>{var a,d;return(d=(a=p??(f==null?void 0:f.size))!==null&&a!==void 0?a:i)!==null&&d!==void 0?d:"default"}),U=Object.keys(typeof c=="object"?c||{}:{}).some(i=>["xs","sm","md","lg","xl","xxl"].includes(i)),I=de(U),V=t.useMemo(()=>{if(typeof c!="object")return{};const i=ne.find(d=>I[d]),a=c[i];return a?{width:a,height:a,lineHeight:`${a}px`,fontSize:a&&(h||N)?a/2:18}:{}},[I,c]),x=j("avatar",E),[q,D]=M(x),J=w({[`${x}-lg`]:c==="large",[`${x}-sm`]:c==="small"}),F=t.isValidElement(u),K=$||(f==null?void 0:f.shape)||"circle",Q=w(x,J,m==null?void 0:m.className,`${x}-${K}`,{[`${x}-image`]:F||u&&S,[`${x}-icon`]:!!h},P,B,D),Y=typeof c=="number"?{width:c,height:c,lineHeight:`${c}px`,fontSize:h?c/2:18}:{};let R;if(typeof u=="string"&&S)R=t.createElement("img",{src:u,draggable:W,srcSet:O,onError:C,alt:_,crossOrigin:X});else if(F)R=u;else if(h)R=h;else if(o||n!==1){const i=`scale(${n}) translateX(-50%)`,a={msTransform:i,WebkitTransform:i,transform:i},d=typeof c=="number"?{lineHeight:`${c}px`}:{};R=t.createElement(re,{onResize:z},t.createElement("span",{className:`${x}-string`,ref:g,style:Object.assign(Object.assign({},d),a)},N))}else R=t.createElement("span",{className:`${x}-string`,style:{opacity:0},ref:g},N);return delete k.onError,delete k.gap,q(t.createElement("span",Object.assign({},k,{style:Object.assign(Object.assign(Object.assign(Object.assign({},Y),V),m==null?void 0:m.style),k.style),className:Q,ref:y}),R))},Se=t.forwardRef(ve),H=Se,G=e=>{const{size:s,shape:n}=t.useContext(A),r=t.useMemo(()=>({size:e.size||s,shape:e.shape||n}),[e.size,e.shape,s,n]);return t.createElement(A.Provider,{value:r},e.children)},be=e=>{const{getPrefixCls:s,direction:n}=t.useContext(L),{prefixCls:r,className:o,rootClassName:v,style:S,maxCount:l,maxStyle:b,size:g,shape:y,maxPopoverPlacement:j="top",maxPopoverTrigger:m="hover",children:f}=e,z=s("avatar",r),C=`${z}-group`,[E,$]=M(z),p=w(C,{[`${C}-rtl`]:n==="rtl"},o,v,$),u=le(f).map((h,P)=>ue(h,{key:`avatar-key-${P}`})),O=u.length;if(l&&l<O){const h=u.slice(0,l),P=u.slice(l,O);return h.push(t.createElement(oe,{key:"avatar-popover-key",content:P,trigger:m,placement:j,overlayClassName:`${C}-popover`},t.createElement(H,{style:b},`+${O-l}`))),E(t.createElement(G,{shape:y,size:g},t.createElement("div",{className:p,style:S},h)))}return E(t.createElement(G,{shape:y,size:g},t.createElement("div",{className:p,style:S},u)))},xe=be,T=H;T.Group=xe;const Ee=T;export{Ee as A,de as u};
//# sourceMappingURL=index-cad7cce6.js.map