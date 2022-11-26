"use strict";(self.webpackChunkcrm_app=self.webpackChunkcrm_app||[]).push([[50],{1955:function(e,t,n){n.d(t,{Z:function(){return L}});var i=n(2791),o=n(184),s=(0,i.createContext)(),c=function(e){var t=e.children;return(0,o.jsx)(s.Provider,{value:{blockName:"blockName"},children:t})},l=n(885),r=n(1413),a=n(9107),d={filterContainer:"BlockFounder_filterContainer__xpoxO",filterForm:"BlockFounder_filterForm__P13kq",customFounder:"BlockFounder_customFounder__D1y72",inputFounder:"BlockFounder_inputFounder__gbkmY",customSelect:"BlockFounder_customSelect__W-Ovy",isOpen:"BlockFounder_isOpen__5YHKD",selectList:"BlockFounder_selectList__37jNg",inputParam:"BlockFounder_inputParam__00Trb",selectItem:"BlockFounder_selectItem__0PXUx",button:"BlockFounder_button__kECXA",notification:"BlockFounder_notification__ZaOSI"},u=function(e){e.blockFilterParams;var t=(0,i.useState)(""),n=(0,l.Z)(t,2),s=n[0],c=n[1],u=(0,i.useState)({name:""}),_=(0,l.Z)(u,2),m=_[0],x=_[1],v=(0,i.useState)(!1),k=(0,l.Z)(v,2),h=k[0],B=k[1],j=(0,i.useState)([]),f=(0,l.Z)(j,1)[0],p=[d.customSelect,h&&d.isOpen].join(" ");function N(){B(!h)}return(0,o.jsx)("div",{className:d.filterContainer,children:(0,o.jsxs)("form",{className:d.filterForm,onSubmit:function(e){!function(e){e.preventDefault()}(e)},children:[(0,o.jsxs)("div",{className:p,onClick:N,children:[(0,o.jsx)("input",{className:d.inputParam,type:"text",placeholder:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440",value:m.name,onChange:function(e){var t=e.target;x((0,r.Z)((0,r.Z)({},m),{},{name:t.value}))}}),(0,o.jsx)("ul",{className:d.selectList,children:f.map((function(e){return(0,o.jsx)("li",{className:d.selectItem,"data-title":e.dataTitle,onClick:function(t){!function(e){e.evt;var t=e.item;x(t),N()}({evt:t,item:e})},children:e.name},e.id)}))})]}),(0,o.jsx)("div",{className:d.customFounder,children:(0,o.jsx)("input",{className:d.inputFounder,type:"text",name:"searchQuery",value:s,placeholder:"\u041f\u043e\u0448\u0443\u043a",onChange:function(e){!function(e){var t=e.target;c(t.value)}(e)}})}),(0,o.jsx)("button",{className:d.button,type:"submit",children:(0,o.jsx)(a.Z,{iconId:"serch",size:"24px"})})]})})},_=n(2776),m={Button:"ButtonIcon_Button__7zIUY",iconSvg:"ButtonIcon_iconSvg__Ha7ix",ColoredBtn:"ButtonIcon_ColoredBtn__Raw3O",PrimaryBtn:"ButtonIcon_PrimaryBtn__7XJ7x",BorderBtn:"ButtonIcon_BorderBtn__BFvDB"},x=function(e){var t=e.children,n=e.type,i=void 0===n?"button":n,s=e.disabled,c=void 0!==s&&s,l=e.onClick,a=void 0===l?null:l,d=e.iconId,u=void 0===d?"":d,x=e.styles,v=void 0===x?{}:x,k=e.size,h=void 0===k?"":k,B=e.className,j=void 0===B?"":B,f=e.title,p=void 0===f?"":f,N=e.styleType,b=void 0===N?"PrimaryBtn":N,F=[m.Button,m[b],j].join(" "),I=(0,r.Z)({width:h,height:h},v);return(0,o.jsxs)("button",{type:i,className:F,disabled:c,style:I,title:p&&p,onClick:a&&a,children:[(0,o.jsx)("svg",{className:m.iconSvg,children:(0,o.jsx)("use",{href:"".concat(_.Z,"#icon-").concat(u.toLowerCase())})}),t]})},v=n(1087),k={Button:"ButtonLink_Button__FBNSi",disabled:"ButtonLink_disabled__gA9-c",ColoredBtn:"ButtonLink_ColoredBtn__XA1rh",PrimaryBtn:"ButtonLink_PrimaryBtn__6KZRE",BorderBtn:"ButtonLink_BorderBtn__xArm8"},h=function(e){var t=e.children,n=e.to,i=void 0===n?"/":n,s=e.styles,c=void 0===s?{}:s,l=e.size,a=void 0===l?"":l,d=e.className,u=void 0===d?"":d,_=e.text,m=void 0===_?"":_,x=e.onClick,h=e.styleType,B=void 0===h?"PrimaryBtn":h,j=[k.Button,k[B],u].join(" "),f=(0,r.Z)({width:a,height:a},c);return(0,o.jsxs)(v.rU,{to:i,onClick:x,style:f,className:j,children:[(0,o.jsx)("span",{children:m}),t]})},B="BlockActions_actionsContainer__Pbrz5",j="BlockActions_actionsList__1G1ee",f="BlockActions_hover__OY83k",p=function(){return(0,o.jsxs)("div",{className:B,children:[(0,o.jsx)(x,{iconId:"actions-h",size:"100%"}),(0,o.jsxs)("div",{className:j,children:[(0,o.jsx)(h,{to:"#",size:"100%",className:f,children:(0,o.jsx)(a.Z,{iconId:"link",size:"100%"})}),(0,o.jsx)(x,{iconId:"copy",size:"100%",className:f}),(0,o.jsx)(x,{iconId:"share",size:"100%",className:f}),(0,o.jsx)(x,{iconId:"refresh",size:"100%",className:f})]})]})},N="BlockHeaderFilter_header__2v66G",b="BlockHeaderFilter_title__7SWEQ",F=function(e){var t=e.title,n=e.iconId,s=void 0===n?"info":n,c=(e.subTitle,e.blockFilter,e.blockFilterParams),r=(0,i.useState)(!1),d=(0,l.Z)(r,2),_=d[0],m=d[1];return(0,o.jsxs)("div",{className:N,children:[(0,o.jsx)(a.Z,{iconId:s,size:"24px"}),(0,o.jsx)(u,{blockFilterParams:c}),(0,o.jsx)(x,{iconId:_?"filter-on":"filter-off",size:"30px",onClick:function(){m(!_)}}),t&&(0,o.jsx)("span",{className:b,children:(0,o.jsx)("span",{children:t})}),(0,o.jsx)(p,{})]})},I="BlockHeaderLink_header__3Xw1I",y="BlockHeaderLink_headerLink__ASjs9",g="BlockHeaderLink_subTitle__yD46E",C="BlockHeaderLink_titleInner__hx2Ou",P="BlockHeaderLink_title__Nndxb",S=function(e){var t=e.title,n=void 0===t?"Title":t,i=e.subTitle,s=void 0===i?"link":i,c=e.iconId,l=void 0===c?"info":c;return(0,o.jsxs)("div",{className:I,children:[(0,o.jsx)(a.Z,{iconId:l,size:"24px"}),(0,o.jsx)("span",{className:P,children:(0,o.jsx)("span",{className:C,title:n,children:n})}),(0,o.jsx)("span",{className:y,children:(0,o.jsx)("span",{className:g,title:s,children:s})}),(0,o.jsx)(p,{})]})},Z={block:"Block_block__l4rYQ",title:"Block_title__Fgg31",overflow:"Block_overflow__I1+3b",content:"Block_content__VVaX5",footer:"Block_footer__0j8tQ"},L=function(e){var t=e.children,n=e.title,s=void 0===n?"Block":n,l=e.iconId,r=void 0===l?"info":l,a=e.footer,d=void 0===a||a,u=e.header,_=void 0===u||u,m=e.style,x=void 0===m?{}:m,v=e.className,k=void 0===v?"":v,h=e.inWork,B=void 0!==h&&h,j=e.blockFilter,f=void 0!==j&&j,p=e.blockFilterParams,N=e.id;(0,i.useEffect)((function(){console.log("small block '".concat(s,"'render"))}),[s]);var b=[Z.block,k].join(" ");return console.log("small block initialize"),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c,{children:(0,o.jsxs)("div",{className:b,style:x,id:N,children:[_&&f&&(0,o.jsx)(F,{blockFilter:f,blockFilterParams:p,title:s,iconId:r}),_&&!f&&(0,o.jsx)(S,{title:s,iconId:r}),(0,o.jsx)("div",{className:Z.content,children:(0,o.jsxs)("div",{className:Z.overflow,children:[t,B&&(0,o.jsx)("span",{className:Z.inWork,children:"In work ..."})]})}),d&&(0,o.jsx)("div",{className:Z.footer})]})})})}},50:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});n(2791);var i=n(1955),o=n(7401),s="PageStatistics_pageFlex__tyMzW",c="PageStatistics_sectionTopFlex__5l2Jh",l="PageStatistics_sectionBottomFlex__Ic-mF",r="PageStatistics_sectionInnerLeft__7NDxW",a="PageStatistics_sectionInnerRight__2TwOi",d=n(184),u=function(e){return(0,d.jsx)(o.T,{children:(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)("section",{className:c,children:(0,d.jsx)(i.Z,{blockFilter:!0,title:"\u0417\u0432\u0456\u0442\u0438",iconId:"list"})}),(0,d.jsxs)("section",{className:l,children:[(0,d.jsx)("div",{className:r,children:(0,d.jsx)(i.Z,{title:"\u0417\u0432\u0456\u0442",iconId:"assignment-ok"})}),(0,d.jsx)("div",{className:a,children:(0,d.jsx)(i.Z,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",iconId:"statistics"})})]})]})})}},7401:function(e,t,n){n.d(t,{T:function(){return r}});var i=n(1413),o=n(885),s=n(2791),c=n(184),l=(0,s.createContext)(),r=function(e){var t=(0,s.useState)(null),n=(0,o.Z)(t,2),r=n[0],a=n[1];return(0,c.jsx)(l.Provider,{value:(0,i.Z)({selectItemByClick:function(e){a(e),console.log("addet item by id (".concat(e,") to context"))},deleteItemByClick:function(e){a(null),console.log(" deleted ".concat(e))},selectedItemId:r},e),children:e.children})}}}]);
//# sourceMappingURL=50.6e352ed5.chunk.js.map