import{c as h,r as l,C as k,x as F}from"./index-f32d64df.js";import{g as D,m as G,o as B,A as W,_}from"./button-63286e2e.js";import{b as X}from"./index-0c09f63f.js";const K=e=>{const{prefixCls:t,className:n,style:a,size:s,shape:i}=e,c=h({[`${t}-lg`]:s==="large",[`${t}-sm`]:s==="small"}),r=h({[`${t}-circle`]:i==="circle",[`${t}-square`]:i==="square",[`${t}-round`]:i==="round"}),o=l.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return l.createElement("span",{className:h(t,c,r,n),style:Object.assign(Object.assign({},o),a)})},w=K,V=new X("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),E=e=>({height:e,lineHeight:`${e}px`}),f=e=>Object.assign({width:e},E(e)),J=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:V,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),I=e=>Object.assign({width:e*5,minWidth:e*5},E(e)),Q=e=>{const{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:a,controlHeightLG:s,controlHeightSM:i}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},f(a)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},f(s)),[`${t}${t}-sm`]:Object.assign({},f(i))}},U=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:a,controlHeightLG:s,controlHeightSM:i,gradientFromColor:c}=e;return{[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:n},I(t)),[`${a}-lg`]:Object.assign({},I(s)),[`${a}-sm`]:Object.assign({},I(i))}},T=e=>Object.assign({width:e},E(e)),Y=e=>{const{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:a,borderRadiusSM:s}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:a,borderRadius:s},T(n*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},T(n)),{maxWidth:n*4,maxHeight:n*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},R=(e,t,n)=>{const{skeletonButtonCls:a}=e;return{[`${n}${a}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${a}-round`]:{borderRadius:t}}},z=e=>Object.assign({width:e*2,minWidth:e*2},E(e)),Z=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:a,controlHeightLG:s,controlHeightSM:i,gradientFromColor:c}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:t,width:a*2,minWidth:a*2},z(a))},R(e,a,n)),{[`${n}-lg`]:Object.assign({},z(s))}),R(e,s,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},z(i))}),R(e,i,`${n}-sm`))},ee=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:a,skeletonParagraphCls:s,skeletonButtonCls:i,skeletonInputCls:c,skeletonImageCls:r,controlHeight:o,controlHeightLG:g,controlHeightSM:d,gradientFromColor:m,padding:$,marginSM:N,borderRadius:p,titleHeight:u,blockRadius:x,paragraphLiHeight:y,controlHeightXS:b,paragraphMarginTop:C}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:$,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:m},f(o)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},f(g)),[`${n}-sm`]:Object.assign({},f(d))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${a}`]:{width:"100%",height:u,background:m,borderRadius:x,[`+ ${s}`]:{marginBlockStart:d}},[`${s}`]:{padding:0,"> li":{width:"100%",height:y,listStyle:"none",background:m,borderRadius:x,"+ li":{marginBlockStart:b}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${a}, ${s} > li`]:{borderRadius:p}}},[`${t}-with-avatar ${t}-content`]:{[`${a}`]:{marginBlockStart:N,[`+ ${s}`]:{marginBlockStart:C}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},Z(e)),Q(e)),U(e)),Y(e)),[`${t}${t}-block`]:{width:"100%",[`${i}`]:{width:"100%"},[`${c}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${a},
        ${s} > li,
        ${n},
        ${i},
        ${c},
        ${r}
      `]:Object.assign({},J(e))}}},S=D("Skeleton",e=>{const{componentCls:t}=e,n=G(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[ee(n)]},e=>{const{colorFillContent:t,colorFill:n}=e,a=t,s=n;return{color:a,colorGradientEnd:s,gradientFromColor:a,gradientToColor:s,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),te=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,shape:i="circle",size:c="default"}=e,{getPrefixCls:r}=l.useContext(k),o=r("skeleton",t),[g,d]=S(o),m=B(e,["prefixCls","className"]),$=h(o,`${o}-element`,{[`${o}-active`]:s},n,a,d);return g(l.createElement("div",{className:$},l.createElement(w,Object.assign({prefixCls:`${o}-avatar`,shape:i,size:c},m))))},ne=te,se=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,block:i=!1,size:c="default"}=e,{getPrefixCls:r}=l.useContext(k),o=r("skeleton",t),[g,d]=S(o),m=B(e,["prefixCls"]),$=h(o,`${o}-element`,{[`${o}-active`]:s,[`${o}-block`]:i},n,a,d);return g(l.createElement("div",{className:$},l.createElement(w,Object.assign({prefixCls:`${o}-button`,size:c},m))))},ae=se,oe="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",le=e=>{const{prefixCls:t,className:n,rootClassName:a,style:s,active:i}=e,{getPrefixCls:c}=l.useContext(k),r=c("skeleton",t),[o,g]=S(r),d=h(r,`${r}-element`,{[`${r}-active`]:i},n,a,g);return o(l.createElement("div",{className:d},l.createElement("div",{className:h(`${r}-image`,n),style:s},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${r}-image-svg`},l.createElement("path",{d:oe,className:`${r}-image-path`})))))},ie=le,re=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,block:i,size:c="default"}=e,{getPrefixCls:r}=l.useContext(k),o=r("skeleton",t),[g,d]=S(o),m=B(e,["prefixCls"]),$=h(o,`${o}-element`,{[`${o}-active`]:s,[`${o}-block`]:i},n,a,d);return g(l.createElement("div",{className:$},l.createElement(w,Object.assign({prefixCls:`${o}-input`,size:c},m))))},ce=re;var ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};const de=ge;var me=function(t,n){return l.createElement(W,_({},t,{ref:n,icon:de}))};const ue=l.forwardRef(me),he=e=>{const{prefixCls:t,className:n,rootClassName:a,style:s,active:i,children:c}=e,{getPrefixCls:r}=l.useContext(k),o=r("skeleton",t),[g,d]=S(o),m=h(o,`${o}-element`,{[`${o}-active`]:i},d,n,a),$=c??l.createElement(ue,null);return g(l.createElement("div",{className:m},l.createElement("div",{className:h(`${o}-image`,n),style:s},$)))},$e=he,pe=e=>{const t=r=>{const{width:o,rows:g=2}=e;if(Array.isArray(o))return o[r];if(g-1===r)return o},{prefixCls:n,className:a,style:s,rows:i}=e,c=F(Array(i)).map((r,o)=>l.createElement("li",{key:o,style:{width:t(o)}}));return l.createElement("ul",{className:h(n,a),style:s},c)},be=pe,Ce=e=>{let{prefixCls:t,className:n,width:a,style:s}=e;return l.createElement("h3",{className:h(t,n),style:Object.assign({width:a},s)})},fe=Ce;function H(e){return e&&typeof e=="object"?e:{}}function ke(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Se(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function ve(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const v=e=>{const{prefixCls:t,loading:n,className:a,rootClassName:s,style:i,children:c,avatar:r=!1,title:o=!0,paragraph:g=!0,active:d,round:m}=e,{getPrefixCls:$,direction:N,skeleton:p}=l.useContext(k),u=$("skeleton",t),[x,y]=S(u);if(n||!("loading"in e)){const b=!!r,C=!!o,O=!!g;let A;if(b){const j=Object.assign(Object.assign({prefixCls:`${u}-avatar`},ke(C,O)),H(r));A=l.createElement("div",{className:`${u}-header`},l.createElement(w,Object.assign({},j)))}let M;if(C||O){let j;if(C){const P=Object.assign(Object.assign({prefixCls:`${u}-title`},Se(b,O)),H(o));j=l.createElement(fe,Object.assign({},P))}let L;if(O){const P=Object.assign(Object.assign({prefixCls:`${u}-paragraph`},ve(b,C)),H(g));L=l.createElement(be,Object.assign({},P))}M=l.createElement("div",{className:`${u}-content`},j,L)}const q=h(u,{[`${u}-with-avatar`]:b,[`${u}-active`]:d,[`${u}-rtl`]:N==="rtl",[`${u}-round`]:m},p==null?void 0:p.className,a,s,y);return x(l.createElement("div",{className:q,style:Object.assign(Object.assign({},p==null?void 0:p.style),i)},A,M))}return typeof c<"u"?c:null};v.Button=ae;v.Avatar=ne;v.Input=ce;v.Image=ie;v.Node=$e;const we=v;export{we as S};
//# sourceMappingURL=Skeleton-5b4f41be.js.map