import{n as S,r as o,ad as x,C as D}from"./index-f32d64df.js";import{b as s,p as I,u as L}from"./index-0c09f63f.js";import{A as T,_ as K}from"./button-63286e2e.js";var R=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,k=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,$="".concat(R," ").concat(k).split(/[\s\n]+/),j="aria-",z="data-";function v(n,t){return n.indexOf(t)===0}function ee(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e;t===!1?e={aria:!0,data:!0,attr:!0}:t===!0?e={aria:!0}:e=S({},t);var a={};return Object.keys(n).forEach(function(r){(e.aria&&(r==="role"||v(r,j))||e.data&&v(r,z)||e.attr&&$.includes(r))&&(a[r]=n[r])}),a}const U=new s("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),W=new s("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),F=new s("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),A=new s("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),B=new s("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),H=new s("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),_=new s("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),q=new s("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),V={"move-up":{inKeyframes:_,outKeyframes:q},"move-down":{inKeyframes:U,outKeyframes:W},"move-left":{inKeyframes:F,outKeyframes:A},"move-right":{inKeyframes:B,outKeyframes:H}},ne=(n,t)=>{const{antCls:e}=n,a=`${e}-${t}`,{inKeyframes:r,outKeyframes:i}=V[t];return[I(a,r,i,n.motionDurationMid),{[`
        ${a}-enter,
        ${a}-appear
      `]:{opacity:0,animationTimingFunction:n.motionEaseOutCirc},[`${a}-leave`]:{animationTimingFunction:n.motionEaseInOutCirc}}]};function G(n){return function(e){return o.createElement(x,{theme:{token:{motion:!1,zIndexPopupBase:0}}},o.createElement(n,Object.assign({},e)))}}function te(n,t,e,a){function r(i){const{prefixCls:y,style:O}=i,m=o.useRef(null),[C,w]=o.useState(0),[M,P]=o.useState(0),[d,b]=L(!1,{value:i.open}),{getPrefixCls:E}=o.useContext(D),f=E(t||"select",y);o.useEffect(()=>{if(b(!0),typeof ResizeObserver<"u"){const p=new ResizeObserver(c=>{const l=c[0].target;w(l.offsetHeight+8),P(l.offsetWidth)}),g=setInterval(()=>{var c;const l=e?`.${e(f)}`:`.${f}-dropdown`,h=(c=m.current)===null||c===void 0?void 0:c.querySelector(l);h&&(clearInterval(g),p.observe(h))},10);return()=>{clearInterval(g),p.disconnect()}}},[]);let u=Object.assign(Object.assign({},i),{style:Object.assign(Object.assign({},O),{margin:0}),open:d,visible:d,getPopupContainer:()=>m.current});return a&&(u=a(u)),o.createElement("div",{ref:m,style:{paddingBottom:C,position:"relative",minWidth:M}},o.createElement(n,Object.assign({},u)))}return G(r)}var N={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};const J=N;var Q=function(t,e){return o.createElement(T,K({},t,{ref:e,icon:J}))};const oe=o.forwardRef(Q);export{oe as C,te as g,ne as i,ee as p,G as w};
//# sourceMappingURL=CheckOutlined-566377ef.js.map