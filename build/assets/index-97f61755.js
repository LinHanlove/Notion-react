import{r as n,R as m,B as fe,c as w,n as c,v as I,_ as q,q as te,af as Z,b as ge,I as ve}from"./index-f32d64df.js";import{o as Ce,K as J,P as be,b as ae,p as ye,i as he}from"./index-0c09f63f.js";import{p as pe}from"./CheckOutlined-566377ef.js";import{g as $e,m as Se}from"./button-63286e2e.js";var ne=n.createContext({});function Q(e,o,t){var a=o;return!a&&t&&(a="".concat(e,"-").concat(t)),a}function k(e,o){var t=e["page".concat(o?"Y":"X","Offset")],a="scroll".concat(o?"Top":"Left");if(typeof t!="number"){var i=e.document;t=i.documentElement[a],typeof t!="number"&&(t=i.body[a])}return t}function xe(e){var o=e.getBoundingClientRect(),t={left:o.left,top:o.top},a=e.ownerDocument,i=a.defaultView||a.parentWindow;return t.left+=k(i),t.top+=k(i,!0),t}const Re=n.memo(function(e){var o=e.children;return o},function(e,o){var t=o.shouldUpdate;return!t});var ee={width:0,height:0,overflow:"hidden",outline:"none"},we=m.forwardRef(function(e,o){var t=e.prefixCls,a=e.className,i=e.style,r=e.title,f=e.ariaId,u=e.footer,g=e.closable,p=e.closeIcon,C=e.onClose,$=e.children,b=e.bodyStyle,y=e.bodyProps,S=e.modalRender,N=e.onMouseDown,M=e.onMouseUp,O=e.holderRef,E=e.visible,P=e.forceRender,v=e.width,B=e.height,d=e.classNames,s=e.styles,F=m.useContext(ne),G=F.panel,V=fe(O,G),T=n.useRef(),L=n.useRef();m.useImperativeHandle(o,function(){return{focus:function(){var R;(R=T.current)===null||R===void 0||R.focus()},changeActive:function(R){var W=document,A=W.activeElement;R&&A===L.current?T.current.focus():!R&&A===T.current&&L.current.focus()}}});var h={};v!==void 0&&(h.width=v),B!==void 0&&(h.height=B);var x;u&&(x=m.createElement("div",{className:w("".concat(t,"-footer"),d==null?void 0:d.footer),style:c({},s==null?void 0:s.footer)},u));var H;r&&(H=m.createElement("div",{className:w("".concat(t,"-header"),d==null?void 0:d.header),style:c({},s==null?void 0:s.header)},m.createElement("div",{className:"".concat(t,"-title"),id:f},r)));var z;g&&(z=m.createElement("button",{type:"button",onClick:C,"aria-label":"Close",className:"".concat(t,"-close")},p||m.createElement("span",{className:"".concat(t,"-close-x")})));var D=m.createElement("div",{className:w("".concat(t,"-content"),d==null?void 0:d.content),style:s==null?void 0:s.content},z,H,m.createElement("div",I({className:w("".concat(t,"-body"),d==null?void 0:d.body),style:c(c({},b),s==null?void 0:s.body)},y),$),x);return m.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":r?f:null,"aria-modal":"true",ref:V,style:c(c({},i),h),className:w(t,a),onMouseDown:N,onMouseUp:M},m.createElement("div",{tabIndex:0,ref:T,style:ee,"aria-hidden":"true"}),m.createElement(Re,{shouldUpdate:E||P},S?S(D):D),m.createElement("div",{tabIndex:0,ref:L,style:ee,"aria-hidden":"true"}))}),ie=n.forwardRef(function(e,o){var t=e.prefixCls,a=e.title,i=e.style,r=e.className,f=e.visible,u=e.forceRender,g=e.destroyOnClose,p=e.motionName,C=e.ariaId,$=e.onVisibleChanged,b=e.mousePosition,y=n.useRef(),S=n.useState(),N=q(S,2),M=N[0],O=N[1],E={};M&&(E.transformOrigin=M);function P(){var v=xe(y.current);O(b?"".concat(b.x-v.left,"px ").concat(b.y-v.top,"px"):"")}return n.createElement(te,{visible:f,onVisibleChanged:$,onAppearPrepare:P,onEnterPrepare:P,forceRender:u,motionName:p,removeOnLeave:g,ref:y},function(v,B){var d=v.className,s=v.style;return n.createElement(we,I({},e,{ref:o,title:a,ariaId:C,prefixCls:t,holderRef:B,style:c(c(c({},s),i),E),className:w(r,d)}))})});ie.displayName="Content";function Ne(e){var o=e.prefixCls,t=e.style,a=e.visible,i=e.maskProps,r=e.motionName,f=e.className;return n.createElement(te,{key:"mask",visible:a,motionName:r,leavedClassName:"".concat(o,"-mask-hidden")},function(u,g){var p=u.className,C=u.style;return n.createElement("div",I({ref:g,style:c(c({},C),t),className:w("".concat(o,"-mask"),p,f)},i))})}function Ee(e){var o=e.prefixCls,t=o===void 0?"rc-dialog":o,a=e.zIndex,i=e.visible,r=i===void 0?!1:i,f=e.keyboard,u=f===void 0?!0:f,g=e.focusTriggerAfterClose,p=g===void 0?!0:g,C=e.wrapStyle,$=e.wrapClassName,b=e.wrapProps,y=e.onClose,S=e.afterOpenChange,N=e.afterClose,M=e.transitionName,O=e.animation,E=e.closable,P=E===void 0?!0:E,v=e.mask,B=v===void 0?!0:v,d=e.maskTransitionName,s=e.maskAnimation,F=e.maskClosable,G=F===void 0?!0:F,V=e.maskStyle,T=e.maskProps,L=e.rootClassName,h=e.classNames,x=e.styles,H=n.useRef(),z=n.useRef(),D=n.useRef(),j=n.useState(r),R=q(j,2),W=R[0],A=R[1],re=Ce();function le(){Z(z.current,document.activeElement)||(H.current=document.activeElement)}function de(){if(!Z(z.current,document.activeElement)){var l;(l=D.current)===null||l===void 0||l.focus()}}function se(l){if(l)de();else{if(A(!1),B&&H.current&&p){try{H.current.focus({preventScroll:!0})}catch{}H.current=null}W&&(N==null||N())}S==null||S(l)}function U(l){y==null||y(l)}var _=n.useRef(!1),K=n.useRef(),ce=function(){clearTimeout(K.current),_.current=!0},me=function(){K.current=setTimeout(function(){_.current=!1})},Y=null;G&&(Y=function(X){_.current?_.current=!1:z.current===X.target&&U(X)});function ue(l){if(u&&l.keyCode===J.ESC){l.stopPropagation(),U(l);return}r&&l.keyCode===J.TAB&&D.current.changeActive(!l.shiftKey)}return n.useEffect(function(){r&&(A(!0),le())},[r]),n.useEffect(function(){return function(){clearTimeout(K.current)}},[]),n.createElement("div",I({className:w("".concat(t,"-root"),L)},pe(e,{data:!0})),n.createElement(Ne,{prefixCls:t,visible:B&&r,motionName:Q(t,d,s),style:c(c({zIndex:a},V),x==null?void 0:x.mask),maskProps:T,className:h==null?void 0:h.mask}),n.createElement("div",I({tabIndex:-1,onKeyDown:ue,className:w("".concat(t,"-wrap"),$,h==null?void 0:h.wrapper),ref:z,onClick:Y,style:c(c(c({zIndex:a},C),x==null?void 0:x.wrapper),{},{display:W?null:"none"})},b),n.createElement(ie,I({},e,{onMouseDown:ce,onMouseUp:me,ref:D,closable:P,ariaId:re,prefixCls:t,visible:r&&W,onClose:U,onVisibleChanged:se,motionName:Q(t,M,O)}))))}var Be=function(o){var t=o.visible,a=o.getContainer,i=o.forceRender,r=o.destroyOnClose,f=r===void 0?!1:r,u=o.afterClose,g=o.panelRef,p=n.useState(t),C=q(p,2),$=C[0],b=C[1],y=n.useMemo(function(){return{panel:g}},[g]);return n.useEffect(function(){t&&b(!0)},[t]),!i&&f&&!$?null:n.createElement(ne.Provider,{value:y},n.createElement(be,{open:t||i||$,autoDestroy:!1,getContainer:a,autoLock:t||$},n.createElement(Ee,I({},o,{destroyOnClose:f,afterClose:function(){u==null||u(),b(!1)}}))))};Be.displayName="Dialog";const He=new ae("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),ze=new ae("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),Ie=function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:t}=e,a=`${t}-fade`,i=o?"&":"";return[ye(a,He,ze,e.motionDurationMid,o),{[`
        ${i}${a}-enter,
        ${i}${a}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${i}${a}-leave`]:{animationTimingFunction:"linear"}}]};function oe(e){return{position:e,inset:0}}const Me=e=>{const{componentCls:o,antCls:t}=e;return[{[`${o}-root`]:{[`${o}${t}-zoom-enter, ${o}${t}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${o}${t}-zoom-leave ${o}-content`]:{pointerEvents:"none"},[`${o}-mask`]:Object.assign(Object.assign({},oe("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${o}-hidden`]:{display:"none"}}),[`${o}-wrap`]:Object.assign(Object.assign({},oe("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch",[`&:has(${o}${t}-zoom-enter), &:has(${o}${t}-zoom-appear)`]:{pointerEvents:"none"}})}},{[`${o}-root`]:Ie(e)}]},Pe=e=>{const{componentCls:o}=e;return[{[`${o}-root`]:{[`${o}-wrap-rtl`]:{direction:"rtl"},[`${o}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[o]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax})`]:{[o]:{maxWidth:"calc(100vw - 16px)",margin:`${e.marginXS} auto`},[`${o}-centered`]:{[o]:{flex:1}}}}},{[o]:Object.assign(Object.assign({},ge(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${e.margin*2}px)`,margin:"0 auto",paddingBottom:e.paddingLG,[`${o}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${o}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`},[`${o}-close`]:Object.assign({position:"absolute",top:(e.modalHeaderHeight-e.modalCloseBtnSize)/2,insetInlineEnd:(e.modalHeaderHeight-e.modalCloseBtnSize)/2,zIndex:e.zIndexPopupBase+10,padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${e.modalCloseBtnSize}px`,justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalIconHoverColor,backgroundColor:e.wireframe?"transparent":e.colorFillContent,textDecoration:"none"},"&:active":{backgroundColor:e.wireframe?"transparent":e.colorFillContentHover}},ve(e)),[`${o}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,marginBottom:e.marginXS},[`${o}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word"},[`${o}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.marginSM,[`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]:{marginBottom:0,marginInlineStart:e.marginXS}},[`${o}-open`]:{overflow:"hidden"}})},{[`${o}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${o}-content,
          ${o}-body,
          ${o}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${o}-confirm-body`]:{marginBottom:"auto"}}}]},Te=e=>{const{componentCls:o,antCls:t}=e,a=`${o}-confirm`;return{[o]:{[`${o}-content`]:{padding:0},[`${o}-header`]:{padding:e.modalHeaderPadding,borderBottom:`${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,marginBottom:0},[`${o}-body`]:{padding:e.modalBodyPadding},[`${o}-footer`]:{padding:`${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,borderTop:`${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,marginTop:0}},[a]:{[`${t}-modal-body`]:{padding:`${e.padding*2}px ${e.padding*2}px ${e.paddingLG}px`},[`${a}-body > ${e.iconCls}`]:{marginInlineEnd:e.margin},[`${a}-btns`]:{marginTop:e.marginLG}}}},De=e=>{const{componentCls:o}=e;return{[`${o}-root`]:{[`${o}-wrap-rtl`]:{direction:"rtl",[`${o}-confirm-body`]:{direction:"rtl"}}}}},Oe=e=>{const o=e.padding,t=e.fontSizeHeading5,a=e.lineHeightHeading5;return Se(e,{modalBodyPadding:e.paddingLG,modalHeaderPadding:`${o}px ${e.paddingLG}px`,modalHeaderBorderWidth:e.lineWidth,modalHeaderBorderStyle:e.lineType,modalHeaderBorderColorSplit:e.colorSplit,modalHeaderHeight:a*t+o*2,modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterPaddingVertical:e.paddingXS,modalFooterPaddingHorizontal:e.padding,modalFooterBorderWidth:e.lineWidth,modalIconHoverColor:e.colorIconHover,modalCloseIconColor:e.colorIcon,modalCloseBtnSize:e.fontSize*e.lineHeight,modalConfirmIconSize:e.fontSize*e.lineHeight})},Le=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading}),Ge=$e("Modal",e=>{const o=Oe(e);return[Pe(o),De(o),Me(o),e.wireframe&&Te(o),he(o,"zoom")]},Le);export{Be as D,we as P,Oe as a,Me as g,Ie as i,Le as p,Ge as u};
//# sourceMappingURL=index-97f61755.js.map
