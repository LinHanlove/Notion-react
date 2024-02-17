import{r as n,C as B,c as R,x as G,f as V,j as i}from"./index-f32d64df.js";import{G as F,Y as K,H as W,c as _,q as D,V as X,n as j,L as Z,j as l,m as U}from"./preview-19209943.js";import{t as Y,g as q,o as J}from"./button-63286e2e.js";import{a as T,L as Q}from"./Sider-9116db2c.js";import{d as ee}from"./article-366e1513.js";import{g as te,R as re}from"./request-db53186c.js";import{C as L}from"./index-199629dd.js";import{A as oe}from"./index-cad7cce6.js";import"./LeftOutlined-7916e190.js";import"./index-0c09f63f.js";import"./Skeleton-5b4f41be.js";import"./EllipsisOutlined-bf21432e.js";import"./Overflow-fc830e4a.js";import"./PlusOutlined-f4354979.js";import"./slide-0918c5e7.js";import"./useForceUpdate-0fb824c6.js";function ae(e,a,o){return typeof o=="boolean"?o:e.length?!0:Y(a).some(t=>t.type===T)}const ie=e=>{const{componentCls:a,bodyBg:o,lightSiderBg:r,lightTriggerBg:t,lightTriggerColor:d}=e;return{[`${a}-sider-light`]:{background:r,[`${a}-sider-trigger`]:{color:d,background:t},[`${a}-sider-zero-width-trigger`]:{color:d,background:t,border:`1px solid ${o}`,borderInlineStart:0}}}},ne=ie,se=e=>{const{antCls:a,componentCls:o,colorText:r,triggerColor:t,footerBg:d,triggerBg:m,headerHeight:c,headerPadding:g,headerColor:h,footerPadding:s,triggerHeight:x,zeroTriggerHeight:w,zeroTriggerWidth:v,motionDurationMid:y,motionDurationSlow:f,fontSize:p,borderRadius:u,bodyBg:C,headerBg:N,siderBg:b}=e;return{[o]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:C,"&, *":{boxSizing:"border-box"},[`&${o}-has-sider`]:{flexDirection:"row",[`> ${o}, > ${o}-content`]:{width:0}},[`${o}-header, &${o}-footer`]:{flex:"0 0 auto"},[`${o}-sider`]:{position:"relative",minWidth:0,background:b,transition:`all ${y}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${a}-menu${a}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:x},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:x,color:t,lineHeight:`${x}px`,textAlign:"center",background:m,cursor:"pointer",transition:`all ${y}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:c,insetInlineEnd:-v,zIndex:1,width:v,height:w,color:t,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:b,borderStartStartRadius:0,borderStartEndRadius:u,borderEndEndRadius:u,borderEndStartRadius:0,cursor:"pointer",transition:`background ${f} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${f}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-v,borderStartStartRadius:u,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:u}}}}},ne(e)),{"&-rtl":{direction:"rtl"}}),[`${o}-header`]:{height:c,padding:g,color:h,lineHeight:`${c}px`,background:N,[`${a}-menu`]:{lineHeight:"inherit"}},[`${o}-footer`]:{padding:s,color:r,fontSize:p,background:d},[`${o}-content`]:{flex:"auto",minHeight:0}}},O=q("Layout",e=>[se(e)],e=>{const{colorBgLayout:a,controlHeight:o,controlHeightLG:r,colorText:t,controlHeightSM:d,marginXXS:m,colorTextLightSolid:c,colorBgContainer:g}=e,h=r*1.25;return{colorBgHeader:"#001529",colorBgBody:a,colorBgTrigger:"#002140",bodyBg:a,headerBg:"#001529",headerHeight:o*2,headerPadding:`0 ${h}px`,headerColor:t,footerPadding:`${d}px ${h}px`,footerBg:a,siderBg:"#001529",triggerHeight:r+m*2,triggerBg:"#002140",triggerColor:c,zeroTriggerWidth:r,zeroTriggerHeight:r,lightSiderBg:g,lightTriggerBg:g,lightTriggerColor:t}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]});var z=globalThis&&globalThis.__rest||function(e,a){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)a.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(o[r[t]]=e[r[t]]);return o};function $(e){let{suffixCls:a,tagName:o,displayName:r}=e;return t=>n.forwardRef((m,c)=>n.createElement(t,Object.assign({ref:c,suffixCls:a,tagName:o},m)))}const k=n.forwardRef((e,a)=>{const{prefixCls:o,suffixCls:r,className:t,tagName:d}=e,m=z(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:c}=n.useContext(B),g=c("layout",o),[h,s]=O(g),x=r?`${g}-${r}`:g;return h(n.createElement(d,Object.assign({className:R(o||x,t,s),ref:a},m)))}),le=n.forwardRef((e,a)=>{const{direction:o}=n.useContext(B),[r,t]=n.useState([]),{prefixCls:d,className:m,rootClassName:c,children:g,hasSider:h,tagName:s,style:x}=e,w=z(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),v=J(w,["suffixCls"]),{getPrefixCls:y,layout:f}=n.useContext(B),p=y("layout",d),u=ae(r,g,h),[C,N]=O(p),b=R(p,{[`${p}-has-sider`]:u,[`${p}-rtl`]:o==="rtl"},f==null?void 0:f.className,m,c,N),A=n.useMemo(()=>({siderHook:{addSider:H=>{t(I=>[].concat(G(I),[H]))},removeSider:H=>{t(I=>I.filter(M=>M!==H))}}}),[]);return C(n.createElement(Q.Provider,{value:A},n.createElement(s,Object.assign({ref:a,className:b,style:Object.assign(Object.assign({},f==null?void 0:f.style),x)},v),g)))}),de=$({tagName:"div",displayName:"Layout"})(le),ce=$({suffixCls:"header",tagName:"header",displayName:"Header"})(k),ge=$({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(k),P=$({suffixCls:"content",tagName:"main",displayName:"Content"})(k),S=de;S.Header=ce;S.Footer=ge;S.Content=P;S.Sider=T;const E=S,me=e=>{const{modelValue:a=l.modelValue,theme:o=l.theme,className:r=l.className,editorId:t=l.editorId,showCodeRowNumber:d=l.showCodeRowNumber,previewTheme:m=l.previewTheme,noMermaid:c=l.noMermaid,noKatex:g=l.noKatex,onHtmlChanged:h=l.onHtmlChanged,onGetCatalog:s=l.onGetCatalog,sanitize:x=l.sanitize,mdHeadingId:w=l.mdHeadingId,noIconfont:v=l.noIconfont,noHighlight:y=l.noHighlight,noImgZoomIn:f=l.noImgZoomIn,language:p=l.language}=e,[u]=n.useState(()=>({editorId:t,noKatex:g,noMermaid:c,noIconfont:v,noHighlight:y}));F(u);const[C,N,b]=K(e);return n.useEffect(()=>()=>{W.clear(t)},[]),_(D.Provider,{value:{editorId:u.editorId,tabWidth:2,theme:o,language:p,highlight:C,showCodeRowNumber:d,usedLanguageText:N,previewTheme:m,customIcon:e.customIcon||{}},children:_("div",{id:u.editorId,className:X([j,r,o==="dark"&&`${j}-dark`,b.fullscreen||b.pageFullscreen?`${j}-fullscreen`:"",`${j}-previewOnly`]),style:e.style,children:_(Z,{modelValue:a,setting:b,mdHeadingId:w,onHtmlChanged:h,onGetCatalog:s,sanitize:x,noMermaid:u.noMermaid,noHighlight:u.noHighlight,noKatex:u.noKatex,formatCopiedText:e.formatCopiedText,noImgZoomIn:f,previewOnly:!0},"preview-only")})})};function _e(){const e="https://avatars.githubusercontent.com/u/119206123?s=400&u=c687a9a31da1b18e8b93313bca02766b9478bd50&v=4",[a]=n.useState("preview-only"),{state:o}=V(),r=JSON.parse(te()),[t,d]=n.useState({title:"",create_at:"",author_name:"",viewers:"",avatar:"",username:"",motto:"",personal_articles_count:""}),[m,c]=n.useState({article_content:"",preview_theme:""}),g=async()=>{try{const s=await ee({article_id:o.id});s.code===re.SUCCESS&&(d({title:s.data.title,create_at:s.data.create_at,author_name:s.data.author_name,viewers:s.data.viewers.toString(),avatar:r.avatar,username:r.username,motto:r.motto,personal_articles_count:r.personal_articles_count}),c({article_content:s.data.article_content,preview_theme:s.data.preview_theme}))}catch(s){console.log(s)}},h=`<div class='text-4xl mt-4 font-bold'>${t.title}</div> 
  <div class='flex justify-between items-center mt-2 mb-10 w-[40%] flex-wrap text-sm font-medium'>
  <div>${t.author_name}</div>
  <div class='text-[#8a919f]'>${t.create_at}</div>
  <div>${t.viewers}</div></div>

`;return n.useEffect(()=>{console.log(r,"---"),g()},[]),i.jsx(E,{className:"h-full w-full ",children:i.jsxs(E,{hasSider:!0,className:"md:w-[80%] w-full m-[0_auto]   [&>.ant-layout-content]:rounded-xl [&>.ant-layout-sider]:overflow-hidden [&>.ant-layout-sider]:rounded-xl",children:[i.jsx(P,{className:"md:w-[68%] preview md:mr-5 w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden  ",children:i.jsx(me,{editorId:a,modelValue:`${h}${m.article_content}`,previewTheme:m.preview_theme,className:" min-h-[100vh]"})}),i.jsxs(T,{className:"md:block max-h-[70vh] pt-10 bg-[#f2f3f5] min-w-[30%] hidden",children:[i.jsxs(L,{className:"w-full h-[30%] border-0  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2",children:[i.jsxs("div",{className:" w-full m-[0_auto]  flex  items-center",children:[i.jsx(oe,{className:"hover:animate-spin w-16 h-16",src:e}),i.jsxs("div",{className:"text-xl w-[calc(100%-64px)] font-bold ml-4 text-center text-[var(--text-color)]",children:[i.jsx("div",{className:"text-3xl mt-2 text-[var(--black)]",children:t.username}),i.jsx("div",{className:"text-sm mt-2 text-[teal]",children:t.motto})]})]}),i.jsx("div",{className:"mt-4 text-[var(--black)] font-[var(--globalFont),serif] font-bold break-words",children:i.jsxs("div",{className:"flex justify-between items-center w-[80%] m-[0_auto] ",children:[i.jsxs("div",{className:"flex justify-center flex-col items-center",children:[i.jsx("div",{children:"文章"}),i.jsx("div",{children:t.personal_articles_count})]}),i.jsxs("div",{className:"flex justify-center flex-col items-center",children:[i.jsx("div",{children:"分类"}),i.jsx("div",{children:"4"})]}),i.jsxs("div",{className:"flex justify-center flex-col items-center",children:[i.jsx("div",{children:"访问量"}),i.jsx("div",{children:"1400"})]})]})})]}),i.jsxs(L,{className:"w-full mt-[20px] border-0 overflow-y-auto  [&>.ant-card-body]:w-full [&>.ant-card-body]:h-full [&>.ant-card-body]:p-2 ",children:[i.jsx("div",{className:"text-[22px] font-bold my-[20px]",children:"目录"}),i.jsx("div",{className:"[&>.md-editor-catalog-active]:text-[#008080]",children:i.jsx(U,{editorId:a,scrollElement:".preview"})})]})]})]})})}export{_e as default};
//# sourceMappingURL=index-e57c48ea.js.map
